import {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/login/Login';
import Register from './components/register/Register';
import DashboardBody from './components/dashboard/Dashboard-body';
import NewEvent from './components/new_event/New_event_form';
import EditEvent from './components/edit_event/Edit_event';
import axios from 'axios';

function App() {
  const [eventId, setEventId] = useState([])
  useEffect(() => {
      axios.get('/api/events').then((res) => {
      let newArray = res.data.map((element) => {
        return element.id
      })
      setEventId(newArray)
    })
  }, [])
  

  return (
    <div className='App'>
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardBody />} />
        <Route path="/newevent" element={<NewEvent />} />
        <Route path="/editevent/:eventId" element={<EditEvent eventId={eventId}/>} />
      </Routes>
    </div>
  )}

export default App;