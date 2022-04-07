import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard-body.css';
import DashboardHeader from './Dashboard-header';

function DashboardBody() {
    let navigate = useNavigate();

    function renderNewEventForm() {
        navigate('/newevent');
    }

    return (
        <div>
            <DashboardHeader />

            <main id="dashboard">
                <h2 id="events-title">You don't have any scheduled events</h2>
                <button id="new-event" onClick={renderNewEventForm}>Create new event</button>
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