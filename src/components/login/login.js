import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './login.css';

function Login(props) {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        //axios request fires (post)
        e.preventDefault()
        axios.post('http://localhost:4550/api/login', {username: username, password: password})
        .then((res) => {
            console.log(res)
            //navigate to different page
            navigate('/dashboard')
        })
        .catch((err) => {
            console.log(err)
        });
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleUsername(e) {
        setUsername(e.target.value);
    }

    function renderRegister() {
        navigate('/register');
    }

    return (
        <div id="body">
            <div>
                <img src="./basketball-court.jpg" alt="basketball court" id="court-image"/>
            </div>
            <div id="log-in-box">
                <h1>Hoop Up</h1>
                <h3>Sign In</h3>
                <form action="submit" id="inputs" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Username' className='credentials' onChange={handleUsername} required/>
                    <input type="password" placeholder='Password' className='credentials' onChange={handlePassword} required/>
                    <input type="submit" value="Log In" id='log-in-btn' />
                </form>
                <section id="bottom-login">
                    <h4>Don't have an account?</h4>
                    <h4 id='sign-up' onClick={renderRegister}>Sign Up</h4>
                </section>
            </div>
            <footer> 
                Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </footer>
               
        </div>


    );
} 

export default Login;