import React, { Component, useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import EventCard from '../../components/Card/Card';
function Admin() {
  const location=useLocation();
  const username=location.state.name;
  const password=location.state.password;
  const id=location.state.id;

  const [events,setEvents]=useState([]);
  useEffect(()=>{
        getEvents();
  },[]);

  const getEvents= async()=>{
    const response = await fetch('http://localhost:3000/getevents');
    const json = await response.json();
    setEvents(json);
  }

  return (
    <div>
        <NavbarAdmin username={username} password={password} id={id}/>
        <div style={{display:'flex',flexWrap:'wrap'}}>
        {events.map((event) => (

            <EventCard key={event._id} eventname={event} state={"Update"} userId={id} del_event={true}/>

        ))}
        </div>
    </div>
  )
}

export default Admin;