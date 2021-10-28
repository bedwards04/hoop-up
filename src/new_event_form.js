import React from 'react';
import './new_event_form.css'

function NewEvent() {
    return (
        <div>
            <div>
                <form action="" id="new-event-form">
                    <h2>New Event</h2>
                    <input type="text" placeholder="Title"/>
                    <select name="types of events" id="types of events">
                        <option value="" disabled selected hidden>Type of Event</option>
                        <option value="">Casual Pickup</option>
                        <option value="">5v5</option>
                        <option value="">3v3</option>
                        <option value="">1v1</option>
                    </select>
                    <input type="text" placeholder="Date" />
                    <input type="text" placeholder="Start Time" />
                    <input type="text" placeholder="End Time" />
                    <input type="text" placeholder="End Time" />
                    <input type="text" placeholder="Location" />
                    <textarea name="Description" id="Description" cols="30" rows="10" placeholder="Description"></textarea>
                    <button>Cancel</button>
                    <button>Save</button>
                </form>
            </div>
        </div>
    );
} 

export default NewEvent;