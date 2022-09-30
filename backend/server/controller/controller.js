const User = require('../models/User');
const Event = require('../models/Event');

require('../models/database');

exports.getevents=async (req,res)=>{

    try{
       const events=await Event.find({});
       res.send(events);
    }
    catch(err){
      res.status(500).send({message:err.message||"Error Occured"});
    }
}


exports.addEvents= async (req,res)=>{
    try{
        const newEvent=new Event({
         name:req.body.name,
         startTime:req.body.startTime,
         endTime:req.body.endTime,
         participant:req.body.participant,
         venue:req.body.venue,//
        })
   
        await newEvent.save();
        res.status(200).send('Event Added');
     }
     catch(err){
       res.status(500).send({message:err.message||"Error Occured"});
     }
}

exports.signUp=async (req,res)=>{ 

    try{
       const newParticpant=new User({
        name:req.body.name,
        password:req.body.password,
        flag:req.body.flag
       })
  
       await newParticpant.save();
       res.status(200).send('User Added');
    }
    catch(err){
      res.status(500).send({message:err.message||"Error Occured"});
    }
}