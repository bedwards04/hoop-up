import React from "react";
import './notifications.css';

function Notifications() {
    //array
    return (
        <body>
            <h2>Notifications</h2>
            <div> {/*each invite will be conditionally rendered */}
                <h3>User has invited you to an event</h3>
                <button>decline</button>
                <button>accept</button>
            </div>
            
            {/* array.map(), then each item in the array would have their own tag */}
        </body>
    )
}

export default Notifications;