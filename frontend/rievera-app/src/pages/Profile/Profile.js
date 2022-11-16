import React from 'react'
import { useLocation } from 'react-router-dom';
import SideImage from "../Main/do_event.avif";
import Navbar from '../../components/Navbar/Navbar';
function Profile() {
    const location=useLocation();
    const username=location.state.username;
    const password=location.state.password;
    const id=location.state.id;

  return (
    <div className='container'>
        <Navbar username={username} password={password} id={id}/>
        <br/>
        <br/>
        <br/>
        <div className='flexi'> 
            <div className='button'>
                <h3 style={{display:"block",textAlign:"center"}}>{username}</h3>
            </div>
            <img src={SideImage} alt="buddy" width="400px" height="400px" className='image'/>
        </div>

    </div>
  )
}

export default Profile