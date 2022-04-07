import { render } from '@testing-library/react';
import React from 'react';
import './dashboard-header.css';
// import Notifications from './Notifications'; 


function DashboardHeader() {
    // function renderNotifications() {
    //     return(
    //         <Notifications />
    //     )
    // }
    return (
        <div>
            <header id="dashboard-header">
                <img src="./bell.png" alt="notification bell" id='bell' className="header-icon" />
                <h1>Dashboard</h1>
                <img src="./user.png" alt="user" id='profile' className="header-icon"/>
            </header>
        </div>
    );
} 

export default DashboardHeader;