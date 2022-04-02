import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'

function Register() {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:4550/api/register', {username, password, firstName, lastName})
        .then((res) => {
            console.log(res)
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function handleUsername(e) {
        setUsername(e.target.value);
    }
    
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    
    function handleFirstName(e) {
        setFirstName(e.target.value);
    }
    
    function handleLastName(e) {
        setLastName(e.target.value);
    }
    
    function returnToLogin() {
        navigate('/');
    }


    

    return (
        <div>
            <div>
                <img src="./basketball-court.jpg" alt="Basketball Court" id='court-image' />
            </div>
            <form action="submit" id="register" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input type="text" placeholder='First Name' className='register-field' onChange={handleFirstName} required/>
                <input type="text" placeholder='Last Name' className='register-field' onChange={handleLastName} required/>
                <input type="text" placeholder='Username' className='register-field' onChange={handleUsername} required/>
                <input type="password" placeholder='Password' className='register-field' onChange={handlePassword} required/>
                <button className='register-btns' onClick={returnToLogin}>Cancel</button>
                <input type="submit" value='Continue' className='register-btns' />
            </form>
        </div>
    );
} 

export default Register;