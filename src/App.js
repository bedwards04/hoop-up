import {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/login/Login';
import Register from './components/register/Register';
// import DashboardHeader from './components/dashboard/Dashboard-header';
import DashboardBody from './components/dashboard/Dashboard-body';
import NewEvent from './components/new_event/New_event_form';
// import PrivateEventDetails from './components/event_details/Private_event_details';
// import PublicEventDetails from './components/event_details/Public_event_details';
// import People from './components/event_details/People';
// import Event from './components/dashboard/Event';
// import Notifications from './components/dashboard/Notifications';
// import { Route, Link } from 'react-router-dom';

function App() {
  const [userId, setUserId] = useState(0)
  return (<div className='App'>
    
    {/* <Register /> */}
    {/* <DashboardHeader /> */}
    {/* <DashboardBody /> */}
    {/* <NewEvent /> */}
    {/* <PrivateEventDetails /> */}
    {/* <PublicEventDetails /> */}
    {/* <People /> */}
    {/* <Event /> */}
    {/* <Notifications /> */}
    <Routes>
        <Route path="/" element={<Login setUserId={setUserId} userId={userId}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardBody />} />
        <Route path="/newevent" element={<NewEvent userId={userId}/>} />
        {/* <Route path="/details" element={<PrivateEventDetails />} /> */}
        {/* <Route path="/people" element={<People />} /> */}
          {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
  </div>
  )}

export default App;