import React from "react";
import './event_details.css'

function PublicEventDetails() {
    return(
        <div>
            <header id='details-header'>
                <button id='event-details' className="event-header-btns">Event Details</button>
                <button id='people' className="event-header-btns">People</button>
            </header>
            <button className='close-button' aria-label='Close alert'>
                <span aria-hidden='true'>&times;</span>
            </button>
            <section id='details'>
                <h4>Title</h4>
                <h4>Date</h4>
                <h4>Time</h4>
                <h4>Location</h4>
                <h4>Type of Event</h4>
                <h4>Public</h4>
                <h4>Created by</h4>
                <h4>Description</h4>
            </section>

            <button id="join-public-event">Join Public Event</button>
        </div>
    )
}

export default PublicEventDetails;