import React from 'react';
import './register.css'

function Register() {
    return (
        <div>
            <div>
                <img src="./basketball-court.jpg" alt="Basketball Court" id='court-image' />
            </div>
            <form action="submit" id="register">
                <h2>Register</h2>
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
                <input type="text" placeholder='Username' />
                <input type="text" placeholder='Password' />
                <button>Cancel</button>
                <button>Continue</button>
            </form>
        </div>
    );
} 

export default Register;