import React from 'react';
import './login.css';

function Login() {
    return (
        <div id="body">
            <div>
                <img src="./basketball-court.jpg" alt="basketball court" id="court-image"/>
            </div>
            <div id="log-in-box">
                <h1>Hoop Up</h1>
                <h3>Sign In</h3>
                <form action="submit" id="inputs">
                    <input type="text" placeholder='Username' className='credentials' />
                    <input type="password" placeholder='Password' className='credentials' />
                    <input type="submit" value="Log In" id='log-in-btn' />
                </form>
                <section id="sign-up">
                    <h4>Don't have an account?</h4>
                    <h4>Sign Up</h4>
                </section>
            </div>
            <footer> 
                Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </footer>
               
        </div>


    );
} 

export default Login;