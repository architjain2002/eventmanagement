import React, { useEffect } from 'react';
import './Main.css';
import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import EventCard from '../../components/Card/Card';
function Main() {
    const [events,setEvents]=useState([]);
    function user(){
        window.location.href="/signin"
    }

    function admin(){
        window.location.href="/signin/admin"
    }
    useEffect(()=>{
      const getEvents= async()=>{
        const response = await fetch('http://localhost:3000/getevents');
        const json = await response.json();
        setEvents(json);
      }
      getEvents();
    },[])

    function getMultipleRandom(arr, num) {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
    
      return shuffled.slice(0, num);
    }
    let arr=getMultipleRandom(events,2)

  return (
    <div className='container'>
      
        <h1>Rievera - Event Management Page</h1>

        <div className='button'>
          <button onClick={admin}>Sign In as Admin</button>
          <button onClick={user}>Sign In as User</button>
        </div>
        
        <div style={{display:'flex',flexWrap:'wrap'}}>
        {arr.map((newevent) => (

            <EventCard key={newevent._id} eventname={newevent} state={" "}/>

        ))}
        </div>
    </div>
  )
}

export default Main