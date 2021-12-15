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
        const {username, password, first_name, last_name} = req.body

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        db.register_new_user([username, hash, first_name, last_name]).then(newUser => {
            res.status(200).send(newUser)
        }).catch(err => {
            res.status(400).send(err)
        })
    },

    //dashboard
    //“your events” are ones that you create, and the ones that you say you’re attending.
    /*there has to be more logic in this function. Something like:
    if user created event then show that event in "your events."
    */
    getYourEvents: async (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.body
        const getEventId = await db.get_event_id([user_id])
        let events = await db.get_your_events([user_id])
        const addObj = getEventId.map(async (obj) => {
            const [event] = await db.get_event_title_by_id(obj.event_id)
            events.push(event)
        })
        return Promise.all(addObj).then(() => {
            res.status(200).send(events)
        })
    },

    getPublicEvents: (req, res) => {
        const db = req.app.get('db');

        db.get_public_events().then(event => {
            res.status(200).send(event)
        }).catch(err => {
            res.status(400).send(err)
        })
    },

    createNewEvent: (req, res) => {
        const db = req.app.get('db')
        const {user_id, type, description, location, title, date, start_time, end_time, publics} = req.body;

        db.create_new_event([type, description, location, title, date, start_time, end_time, publics, user_id]).then((newEvent) => {
            res.status(200).send(newEvent)
        }).catch(err => {
            res.status(400).send(err)
        })
    },

    editEvent: (req, res) => {
        const db = req.app.get('db')
        const {event_id} = req.params
        const {type, description, location, title, date, start_time, end_time, publics} = req.body

        db.edit_event_by_id([type, description, location, title, date, start_time, end_time, publics, event_id]).then(event => {
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
    },

    //event details and invitations

    getEventDetails: (req, res) => {
        const db = req.app.get('db');
        const {event_id} = req.params

        db.get_event_details([event_id]).then(event => {
            res.status(200).send(event)
        })
    },

    //this function will get users when a user is searching for people to invite
    getUsers: (req, res) => {
        const db = req.app.get('db')
        const {username} = req.body

        db.get_users([username]).then(username => {
            res.status(200).send(username)
        })
    },

    addInvitation: async (req, res) => {
        const db = req.app.get('db');
        const {event_id, user_id, username} = req.body
        const [getUserId] = await db.get_user_id([username])
        const [getName] = await db.get_name_by_id([user_id])
        const [getEventTitle] = await db.get_event_title_by_id([event_id])
        const message = `${getName.first_name} ${getName.last_name} has invited you to ${getEventTitle.title}`

        db.add_invitation([user_id, message, event_id, getUserId.id]).then(invite => {
            res.status(200).send(invite)
        })
    },

    getInvitations: (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.body

        db.get_invitations([user_id]).then(invite => {
            res.status(200).send(invite)
        })
    },

//? do we write a get request, for example, to update the "your events" view in the app?
//? if accepted equals true then invoke getYourEvents? Is that how that would work? 
    acceptInvite: (req, res) => {
        const db = req.app.get('db')
        const {invite_id} = req.params
        const {accepted} = req.body
// ? since we're updating the "your events" won't I have to reference getYourEvents?
        db.accept_invitation([accepted, invite_id]).then(event => {
            res.status(200).send(event)
        })
    }
}