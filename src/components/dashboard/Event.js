import axios from "axios";
import React from "react";
import {useNavigate} from "react-router-dom";
import './event.css';

function Event(props) {
    const {event} = props
    let navigate = useNavigate();

    function deleteEvent() {
        axios.delete(`http://localhost:4550/api/event/${event.id}`)
        .then((res) => {
            console.log(res)
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function renderEditEventForm() {
        navigate(`/editevent/${event.id}`)
    }
    
    return(
        <div id="event">
            <div id="event-buttons">
                <img src="./delete.png" alt="delete button" id="delete" className="event-icons" onClick={deleteEvent} />
                <img src="./editing.png" alt="edit button" id="edit" className="event-icons" onClick={renderEditEventForm} />
            </div>
            <h3>{event.title}</h3>
            <h3>{event.date}</h3>
            <h3>{event.start_time}-{event.end_time}</h3>
            <h3>{event.location}</h3>
            <h3>{event.type}</h3>
            <h3>{event.description}</h3>
            
        </div>
    )
}

export default Event;