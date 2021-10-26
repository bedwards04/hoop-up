import React from 'react';

function Register() {
    return (
        <div>
            <h1>Hoop Up</h1>
            <form action="">
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