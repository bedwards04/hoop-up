import axios from 'axios';
import {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './edit_event_form.css';

function EditEvent(props) {
    const {eventId} = useParams();
    console.log(eventId)
    let navigate = useNavigate();
    
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    


    function handleSubmit(e) {
        e.preventDefault();
        console.log(eventId)
        axios.put(`http://localhost:4550/api/event/${eventId}`, {title, date, startTime, endTime, location, type, description})
        .then((res) => {
            console.log(res)
            navigate('/dashboard')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function handleType(e) {
        setType(e.target.value)
    }

    function handleDescription(e) {
        setDescription(e.target.value)
    }

    function handleLocation(e) {
        setLocation(e.target.value)
    }

    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleDate(e) {
        setDate(e.target.value)
    }

    function handleStartTime(e) {
        setStartTime(e.target.value)
    }

    function handleEndTime(e) {
        setEndTime(e.target.value)
    }

    function returnToDashboard() {
        navigate('/dashboard');
    }

        return (
        <div>
            <form action="submit" id="edit-event-form" onSubmit={handleSubmit} >
                <h2>Edit Event</h2>

                <label htmlFor="title">Title</label>
                <input type="text" id='title' className='edit-event-field' onChange={handleTitle} required/>

                <label htmlFor="date">Date</label>
                <input type="date" id='date' className='edit-event-field' onChange={handleDate} required/>

                <label htmlFor="start-time">Start Time</label>
                <input type="time" id='start-time' className='edit-event-field' onChange={handleStartTime} required/>

                <label htmlFor="end-time">End Time</label>
                <input type="time" id='end-time' className='edit-event-field' onChange={handleEndTime} required/>

                <label htmlFor="location">Location</label>
                <input type="text" id='location' className='edit-event-field' onChange={handleLocation} required/>

                <label htmlFor="event-type">Type of Event</label>
                <select name="types of events" className='edit-event-field' id='event-type' onChange={handleType} required>
                    <option value="" disabled selected hidden >Choose one</option>
                    <option value="Casual">Casual Pickup</option>
                    <option value="5v5">5v5</option>
                    <option value="3v3">3v3</option>
                    <option value="1v1">1v1</option>
                </select>

                <label htmlFor="description">Description</label>
                <textarea name="description" className='edit-event-field' id="description" cols="30" rows="10" onChange={handleDescription} required></textarea>

                <div>
                    <button className='edit-event-btns' onClick={returnToDashboard}>Cancel</button>
                    <input className='edit-event-btns' value='Update' type='submit' />
                </div>
                
            </form>
        </div>
    );
    }
    
    

export default EditEvent;