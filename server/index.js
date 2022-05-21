require('dotenv').config();
const express = require('express');
const massive = require('massive');
const cors = require('cors');
const controller = require('./controller');

const { CONNECTION_STRING, SERVER_PORT } = process.env;
const app = express();
//middleware
app.use(express.json());
app.use(cors());
//routes

//authentication 
app.post('/api/login', controller.checkLoginCredentials);
app.post('/api/register', controller.registerNewUser);

//dashboard
app.get('/api/events', controller.getEvents);
app.post('/api/new-event', controller.createNewEvent);
app.put('/api/event/:event_id', controller.editEvent);
app.delete('/api/event/:event_id', controller.deleteEvent);

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
