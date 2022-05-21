import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './new_event_form.css'

function NewEvent(props) {
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
        axios.post('http://localhost:4550/api/new-event', {userId: props.userId, title, date, startTime, endTime, location, type, description})
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
            <form action="submit" id="new-event-form" onSubmit={handleSubmit} >
                <h2>New Event</h2>

                <label htmlFor="title">Title</label>
                <input type="text" id='title' className='new-event-field' onChange={handleTitle} required/>

                <label htmlFor="date">Date</label>
                <input type="date" id='date' className='new-event-field' onChange={handleDate} required/>

                <label htmlFor="start-time">Start Time</label>
                <input type="time" id='start-time' className='new-event-field' onChange={handleStartTime} required/>

                <label htmlFor="end-time">End Time</label>
                <input type="time" id='end-time' className='new-event-field' onChange={handleEndTime} required/>

                <label htmlFor="location">Location</label>
                <input type="text" id='location' className='new-event-field' onChange={handleLocation} required/>

                <label htmlFor="event-type">Type of Event</label>
                <select name="types of events" className='new-event-field' id='event-type' onChange={handleType} required>
                    <option value="" disabled selected hidden >Choose one</option>
                    <option value="Casual">Casual Pickup</option>
                    <option value="5v5">5v5</option>
                    <option value="3v3">3v3</option>
                    <option value="1v1">1v1</option>
                </select>

                <label htmlFor="description">Description</label>
                <textarea name="description" className='new-event-field' id="description" cols="30" rows="10" onChange={handleDescription} required></textarea>

                <div>
                    <button className='new-event-btns' onClick={returnToDashboard}>Cancel</button>
                    <input className='new-event-btns' value='Create' type='submit' />
                </div>
                
            </form>
        </div>
    );
    }
    
    

export default NewEvent;