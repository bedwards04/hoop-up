import axios from "axios";
import React from "react";
import './event.css';

function Event(props) {

    function getPrivateEvents() {
        axios.get('http://localhost:4550/api/events', {userId: props.userId})
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    return(
        <div>
            <img src="./delete.png" alt="delete button" id="delete" />
            <img src="./editing.png" alt="edit button" id="edit" />
            <h3>Title</h3>
            <h3>Date</h3>
            <h3>Time</h3>
            <h3>Location</h3>
            
        </div>
    )
}

export default Event;