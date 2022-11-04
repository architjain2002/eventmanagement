import React, { useState ,useEffect} from 'react'
import { navigate,useLocation, useNavigate } from 'react-router-dom';
import EventCard from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
function UserEvents() {
    const location=useLocation();
    const user=location.state.user;
    const password=location.state.password;
    const id=location.state.id;
    const [userEvent,setUserEvent]=useState([]);

    useEffect(()=>{
        const getUserEvent= async()=>{
            const response = await fetch(`http://localhost:3000/events/${id}`);
            const json = await response.json();
        
            setUserEvent(userEvent=>[...userEvent,json[0]]);
        }
        getUserEvent();
    },[])
    console.log(userEvent);
  return (
    
    <div>
        <Navbar user={user} password={password} id={id}/>
        {userEvent.map((event) => (

            <EventCard key={event._id} eventname={event}/>

        ))}
    </div>
  )
}

export default UserEvents