import React from 'react';
import './dashboard.css'


function Dashboard() {
    return (
        <div>
            <header id="dashboard-header">
                <img src="./bell.png" alt="notification bell" className="header-icon"/>
                <h1>Dashboard</h1>
                <img src="./user.png" alt="user" className="header-icon"/>
            </header>

            <main id="dashboard">
                <h2 id="events-title">You don't have any scheduled events</h2>
                <button id="new-event-button">Create new event</button>
            </main>
            
            <footer id="footer">
                <div>Icons made by <a href="https://www.flaticon.com/authors/ghufronagustian" title="ghufronagustian">ghufronagustian</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> 

                <div>Icons made by <a href="https://creativemarket.com/Becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>

        </div>
    );
} 

export default Dashboard;