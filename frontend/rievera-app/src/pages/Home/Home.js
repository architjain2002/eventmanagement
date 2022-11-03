import React, { Component } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import EventCard from '../../components/Card/Card';
function Home() {
 const location=useLocation();
 const user=location.state.username;
 const events=[
            {
              name:'Robowars',
              text:'Bring your robots and win it all !',
              image:'https://kettocdn.gumlet.io/media/campaign/75000/75535/image/5c0388c3ae85e.png?w=360&dpr=2.6'
            },

            {
              name:'Devjams',
              text:'Wanna develop Apps?',
              image:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Event%20Thumbnail_VQ4tCho.png'
            },

            {
              name:'Coding Ninja',
              text:'Are you a Ninja? Come and code',
              image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtrTERbkcXhXIXOx--FDedawcBzvOUlQxrsQ&usqp=CAU'
            },

            {
              name:'Hacktoberfest',
              text:"It's october, Ready Hackathon it is!",
              image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZUZ3U4P3SXqWFrMSyd781CA7QzyuK8nt8A&usqp=CAU'
            },

            {
              name:'Designathon',
              text:'IxDa member? Come and design!!',
              image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPxoj-WgDNU2YtX8FiGcnB-6YPDNHmvFLKQ&usqp=CAU'
            }
          ];
  return (
    <div>
        <Navbar user={user}/>
        <div style={{display:'flex',flexWrap:'wrap'}}>
        {events.map((event) => (

            <EventCard key={event.name} eventname={event}/>

        ))}
        </div>
    </div>
  )
}

export default Home;