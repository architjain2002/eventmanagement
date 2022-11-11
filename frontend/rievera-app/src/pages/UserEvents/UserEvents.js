import React, { useState ,useEffect} from 'react'
import { navigate,useLocation, useNavigate } from 'react-router-dom';
import EventCard from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
function UserEvents() {
    const location=useLocation();
    const username=location.state.username;
    const password=location.state.password;
    const id=location.state.id;
    const [userEvent,setUserEvent]=useState([]);
    

    useEffect(()=>{
        const getUserEvent= async()=>{
            const response = await fetch(`http://localhost:3000/events/${id}`);
            const json = await response.json();
            console.log("adfjdjf",json);
            setUserEvent(userEvent=>[...userEvent,...json]);
        }
        getUserEvent();
    },[])
    
    try{
        return (

        <div>
            <Navbar username={username} password={password} id={id}/>
                {userEvent.map((event) => (

                    <EventCard key={event._id} eventname={event} state={"Deregister"} userId={id}/>

                ))}
        </div>
        )
    }
    catch(e){
        return(
            <div>
                <Navbar username={username} password={password} id={id}/>
                <br/><br/>
                <h1>No Events Registered</h1>
            </div>
        )
    }
}

export default UserEvents