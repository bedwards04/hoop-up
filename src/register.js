import React from 'react';
import './register.css'

function Register() {
    return (
        <div>
            <form action="submit" id="register">
                <h2>Register</h2>
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
                <input type="text" placeholder='Username' />
                <input type="text" placeholder='Password' />
                <input type="text" placeholder='Confrim Password' />
                <button>cancel</button>
                <button>continue</button>
            </form>
        </div>
    );
} 

export default Register;