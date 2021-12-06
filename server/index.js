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
app.post('/api/login', controller.checkLoginCredentials);
// should there be a 'get credentials' function?
app.post('/api/register', controller.registerNewUser);

//dashboard
app.get('/api/events', controller.getYourEvents);
app.post('/api/new-event', controller.createNewEvent);
app.put('/api/event/:event_id', controller.editEvent);
app.delete('/api/event/:event_id', controller.deleteEvent);
// app.get('/api/notifications', controller.getNotifications);
// // what about log out? 

// // event details and invitations
// app.get('/api/event-details', controller.getEventDetails);
// app.get('/api/invitations', controller.getInvitations);
// // what about sending invitations and accepting/declining invitations? 

// //public square
// app.get('/api/public-events', controller.getPublicEvents); 

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
