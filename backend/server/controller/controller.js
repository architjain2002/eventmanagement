const User = require("../models/User");
const Event = require("../models/Event");
const Admin=require("../models/Admin");
const AdminAccess = require("../models/AdminAccess");

require("../middleware/database");



Event
exports.getevents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.send(events);
  } catch (err) {
    res.status(500).send({ message: err.message || "Error Occured" });
  }
};

exports.addEvents = async (req, res) => {
  try {
    const newEvent = new Event({
      name: req.body.name,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      participant: req.body.participant,
      venue: req.body.venue, 
    });

    await newEvent.save();
    res.status(200).send("Event Added");
  } catch (err) {
    res.status(500).send({ message: err.message || "Error Occured" });
  }
};



//Participant

exports.signUp = async (req, res) => {
  try {
    const newParticpant = new User({
      name: req.body.name,
      password: req.body.password,
    });

    await newParticpant.save();
    res.status(200).send("User Added");
  } catch (err) {
    res.status(500).send({ message: err.message || "Error Occured" });
  }
};


exports.signIn = async(req,res)=>{
  
  const username=req.body.username;
  const password=req.body.password;

  try{
    const participant= await User.find({username,password});

    if(!participant){
        res.send("No user found");
    }
    else{
      res.send("Success");
    }
  }
  catch(err){
    res.status(500).send({ message: err.message || "Error Occured" });
  }

};


exports.register = async(req,res)=>{
    const eventId=req.body.eventId;
    const userId=req.body.userId;

    try{
      const newRegistration= new AdminAccess({
        eventId:eventId,
        userId:userId,
      });

      await newRegistration.save();

      // const events=await Event.find({eventId});

      
      

      await Event.findOneAndUpdate({eventId:eventId}, {$inc : {capacity: -1}});
      //$inc : {capacity : 1}

      
      res.send("done dona done");

    }
    catch(err){
      res.status(500).send({ message: err.message || "Error Occured" });
    }
};






//Admin

exports.signUpAdmin = async (req, res) => {
  try {
    const newParticpant = new Admin({
      name: req.body.name,
      password: req.body.password,
    });

    await newParticpant.save();
    res.status(200).send("User Added");
  } catch (err) {
    res.status(500).send({ message: err.message || "Error Occured" });
  }
};

exports.signInAdmin = async(req,res)=>{
  
  const username=req.body.username;
  const password=req.body.password;

  try{
    const admin= await Admin.find({username,password});

    if(!admin){
        res.send("No user found");
    }
    else{
      res.send("Success");
    }
  }
  catch(err){
    res.status(500).send({ message: err.message || "Error Occured" });
  }
};
