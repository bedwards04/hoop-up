require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');

const { CONNECTION_STRING, SERVER_PORT } = process.env;
const app = express();
//middleware
app.use(express.json());

//routes

//authentication 
app.get('/api/login', controller.checkLoginCredentials);
app.post('/api/register', controller.registerNewUser);

//dashboard
app.get('/api/events', controller.getYourEvents);
app.get('/api/public-events', controller.getPublicEvents); 
app.post('/api/new-event', controller.createNewEvent);
app.put('/api/event/:event_id', controller.editEvent);
app.delete('/api/event/:event_id', controller.deleteEvent);

// event details and invitations
app.get('/api/event-details/:event_id', controller.getEventDetails);
app.get('/api/users', controller.getUsers);
app.post('/api/invitations', controller.addInvitation);
app.get('/api/invitations', controller.getInvitations);
app.put('/api/invitations/:invite_id', controller.acceptInvite);


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    },
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
})
