import React from "react";
import './people.css';

function People() {
    return(
        <div>
            <header id='details-header'>
                <button id='event-details' className="event-header-btns">Event Details</button>
                <button id='people' className="event-header-btns">People</button>
            </header>
            
            <button className='close-button' aria-label='Close alert'>
                <span aria-hidden='true'>&times;</span>
            </button>

            <h4>Search for people to invite</h4>
            <form action="">
                <input type="search" placeholder="Search by name or username"/>
            </form>
        </div>
    )
}

export default People;