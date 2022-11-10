import React, { Component, useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import EventCard from '../../components/Card/Card';
function Home() {
 const location=useLocation();

 const username=location.state.username;
 const password=location.state.password;
 const id=location.state.id;

 const [events,setEvents]=useState([]);
 const [userEvent,setUserEvent]=useState([]);
 const filterByReference = (arr1, arr2) => {
  let res = [];
  res = arr1.filter(el => {
     return !arr2.find(element => {
      if(element!=null&&el!=null)
        return element._id === el._id;
     });
    });
 
    return res;
  }

  const getEvents= async()=>{
    const response = await fetch('http://localhost:3000/getevents');
    const json = await response.json();
    setEvents(json);
  }

  const getUserEvent= async()=>{
    const response = await fetch(`http://localhost:3000/events/${id}`);
    const json = await response.json();

    setUserEvent(userEvent=>[...userEvent,json[0]]);
  }

 useEffect(()=>{
    getEvents();
    getUserEvent();
  },[]);


  
  return (
    <div>
        <Navbar username={username} password={password} id={id}/>
        <div style={{display:'flex',flexWrap:'wrap'}}>
        {filterByReference(events,userEvent).map((newevent) => (

            <EventCard key={newevent._id} eventname={newevent} state={"Register"} />

        ))}
        </div>
    </div>
  )
}

export default Home;