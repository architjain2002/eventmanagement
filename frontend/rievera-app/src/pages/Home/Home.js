import React, { Component } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
function Home() {
 const location=useLocation();
 const user=location.state.username;
 
  return (
    <Navbar user={user}/>
  )
}

export default Home