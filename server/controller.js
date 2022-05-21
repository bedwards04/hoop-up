const bcrypt = require('bcrypt');

module.exports = {
    // authentication
    checkLoginCredentials: async(req, res) => {
        const db = req.app.get('db') // connect to database
        const {username, password} = req.body // get data from req.body object
        const [getHash] = await db.get_hash([username])
        const hash = bcrypt.compareSync(password, getHash.password)
        //check to see if the credentials entered into input fields match what's in the database
        
        const [result] = await db.check_login_credentials([username, getHash.password]); // save data to database
        
        console.log(hash, getHash.password, password, result)
        //If they do then they will be logged in
        if (hash) {
            return res.status(200).send(result) // send data back to client
        } else {
            return res.status(404).send('Incorrect username or password. Please try again.')
        }
    },

    //? How do I code in something that will prevent there from being multiple of the same username? 
    //if the username the user tries to submit matches an existing username in the data, return message saying "username already exists"
    //get all the info, loop over it, and then compare it with a value
    registerNewUser: (req, res) => { 
        const db = req.app.get('db');
        const {username, password, firstName, lastName} = req.body

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        db.register_new_user([username, hash, firstName, lastName]).then(newUser => {
            res.status(200).send(newUser)
        }).catch(err => {
            res.status(400).send(err)
        })
    },

    getEvents: (req, res) => {
        const db = req.app.get('db');

        db.get_events().then(event => {
            res.status(200).send(event)
        }).catch(err => {
            res.status(400).send(err)
        })
    },

    createNewEvent: (req, res) => {
        const db = req.app.get('db')
        const {userId, title, date, startTime, endTime, location, type, description} = req.body;
        console.log(userId, title, date, startTime, endTime, location, type, description)
        db.create_new_event([userId, title, date, startTime, endTime, location, type, description]).then((newEvent) => {
            res.status(200).send(newEvent)
        }).catch(err => {
            res.status(400).send(err)
        })
    },

    editEvent: (req, res) => {
        console.log('hit server')
        const db = req.app.get('db')
        const {event_id} = req.params
        const {title, date, startTime, endTime, location, type, description} = req.body

        db.edit_event_by_id([title, date, startTime, endTime, location, type, description, event_id]).then(event => {
            res.status(200).send(event)
        }).catch(err => {
            res.status(400).send(err)
        })
    },

    deleteEvent: (req, res) => {
        const db = req.app.get('db');
        const {event_id} = req.params

        db.delete_event_by_id([event_id]).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(400).send(err)
        })
    }
}