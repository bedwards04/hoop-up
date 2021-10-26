import React from 'react';



function Dashboard() {
    return (
        <div>
            <header>
                <h1>Dashboard</h1>
                <img src="./user.png" alt="user icon" />
                <img src="./bell.png" alt="" />
            </header>

            <main>
                <h2>You don't have any scheduled events</h2>
                <h2>Create new event</h2> {/*clicking on this will bring the user to the create new event form. Also, don't forget to unbold the font. */}
            </main>
            
            <footer>
                <div>Icons made by <a href="https://www.flaticon.com/authors/ghufronagustian" title="ghufronagustian">ghufronagustian</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> 

                <div>Icons made by <a href="https://creativemarket.com/Becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>

        </div>
    );
} 

export default Dashboard;