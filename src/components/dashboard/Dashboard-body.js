import React from 'react';
import { useNavigate } from 'react-router-dom';
import {GrAdd} from 'react-icons/gr'
import './dashboard-body.css';
import DashboardHeader from './Dashboard-header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Event from './Event';

function DashboardBody() {
    let navigate = useNavigate();
    const [event, setEvent] = useState([])
    // const [eventCreated, setEventCreated] = useState(false);

    useEffect(() => {
        axios.get('/api/events').then((res) => {
            setEvent(res.data)
            // console.log(res.data[0].id)
            console.log(res.data)
            // setEventCreated(true)
        })
    }, [])
    
    function renderNewEventForm() {
        navigate('/newevent');
    }

    let eventList = event.map(event => {
        return <Event event={event}/>
    })

    return (
        <div>
            <header>
                <DashboardHeader />
            </header>


            <main id="dashboard">
                <h2 id="events-title">Events</h2>
                <GrAdd id="new-event" onClick={renderNewEventForm}/>
                <div id='event-container'>
                    {event && eventList}
                </div>
            </main>



            <footer id="footer">
                <div>
                    Icons made by <a href="https://www.flaticon.com/authors/ghufronagustian" title="ghufronagustian">ghufronagustian</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div> 

                <div>
                    Icons made by <a href="https://creativemarket.com/Becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
            </footer>
        </div>
    )
}

export default DashboardBody;