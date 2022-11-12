import React from 'react';
import './Main.css';
import Navbar from '../../components/Navbar/Navbar';
import EventCard from '../../components/Card/Card';
function Main() {
    function user(){
        window.location.href="/signin"
    }

    function admin(){
        window.location.href="/signin/admin"
    }

  return (
    <div>
        <h1>Rievera - Event Management Page</h1>
        <button onClick={admin}>Sign In Admin</button>
        <button onClick={user}>Sign In User</button>
        {/*Fetch all cards and print random 3 events */}
        {/* <EventCard/> */}
    </div>
  )
}

export default Main