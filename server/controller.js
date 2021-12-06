module.exports = {
    // authentication
    checkLoginCredentials: async(req, res) => {
        const db = req.app.get('db') // connect to database
        const {username, password} = req.body // get data from req.body object
    
        //check to see if the credentials entered into input fields match what's in the database

        const [result] = await db.check_login_credentials([username, password]); // save data to database

        //If they do then they will be logged in
        if (result) {
            return res.status(200).send(result) // send data back to client
        } else {
            return res.status(404).send('Incorrect username or password. Please try again.')
        }
    },

    registerNewUser: (req, res) => { //why does async and await allow the body of the new user to show up in postman? bc using "returning *" in the db files seems to do the same thing.
        const db = req.app.get('db');
        const {username, password, first_name, last_name} = req.body

        db.register_new_user([username, password, first_name, last_name]).then(newUser => {
            res.status(200).send(newUser)
        }).catch(err => {
            res.status(400).send(err)
        })
    },

    //dashboard
    //“your events” are ones that you create, and the ones that you say you’re going to.
    //how do I get just the "your events" to show up? Will I need to have separate database tables for "your events" and "public events"? Will it be a boolean data type in the table?
    getYourEvents: (req, res) => {
        const db = req.app.get('db');

        db.get_your_events().then((events) => {
            res.status(200).send(events)
        })
    },

    createNewEvent: (req, res) => {
        const db = req.app.get('db')
        const {type, description, location, title, date, start_time, end_time} = req.body;
        //how should I incorporate the "public or private" option into my new event form and database? 
        db.create_new_event([type, description, location, title, date, start_time, end_time]).then((newEvent) => {
            res.status(200).send(newEvent)
        }).catch(err => {
            res.status(400).send(err)
        })
    },

    editEvent: (req, res) => {
        const db = req.app.get('db')
        const {event_id} = req.params
        const {type, description, location, title, date, start_time, end_time} = req.body

        db.edit_event_by_id([type, description, location, title, date, start_time, end_time, event_id]).then((event) => {
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
        })
    }

    // getNotifications: (req, res) => {
    //     const db = req.app.get('db');
    // },

    // logOut: (req, res) => {
    //     const db = req.app.get('db');

    // },

    // // event details and invitations

    // getEventDetails: (req, res) => {
    //     const db = req.app.get('db');

    // }

    // getInvitations: (req, res) => {
    //     const db = req.app.get('db');

    // },

    // //public square

    // getPublicEvents: (req, res) => {
    //     const db = req.app.get('db');
    // },

}