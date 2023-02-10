const User = require("../models/User");
const Event = require("../models/Event");
const Admin = require("../models/Admin");
const AdminAccess = require("../models/AdminAccess");
require("../middleware/database");

//all events
exports.getevents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.send(events);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error Occured"
    });
  }
};

//new events
exports.addEvents = async (req, res) => {
  try {
    const newEvent = new Event({
      name: req.body.name,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      capacity: req.body.capacity,
      venue: req.body.venue,
      image: req.body.image,
      text: req.body.text,
      website: req.body.website
    });
    await newEvent.save();
    res.status(200).send({
      message: "Event Added"
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error Occured"
    });
  }
};

//Participant

exports.signUp = async (req, res) => {
  try {
    const alreadyPresent = await User.find({
      name: req.body.name
    });
    const length = alreadyPresent.length;
    if (length > 0) {
      res.status(200).send({
        message: "User Already Present"
      });
    } else {
      const newParticpant = new User({
        name: req.body.name,
        password: req.body.password
      });
      await newParticpant.save();
      res.status(200).send({
        message: "User Added"
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error Occured"
    });
  }
};
exports.signIn = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const participant = await User.findOne({
      name: username,
      password: password
    });
    if (!participant) {
      res.send({
        message: "No user found"
      });
    } else {
      res.send({
        message: participant._id
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error Occured"
    });
  }
};
exports.register = async (req, res) => {
  const eventId = req.body.eventId;
  const userId = req.body.userId;
  try {
    //Update Participant Capacity
    const eventName = await Event.findOne({
      _id: eventId
    });
    if (eventName.capacity <= 0) return res.send({
      message: "No More Seats Available"
    });
    await Event.findOneAndUpdate({
      _id: eventId
    }, {
      $inc: {
        capacity: -1
      }
    });
    const newRegistration = new AdminAccess({
      eventId: eventId,
      userId: userId
    });

    //New registration added
    await newRegistration.save();

    //Add secretId in the users
    const eventDetail = await AdminAccess.findOne({
      userId: userId,
      eventId: eventId
    });

    //Add in the array
    const secretId = eventDetail._id.toString();
    await User.findOneAndUpdate({
      _id: userId
    }, {
      $push: {
        userEvents: {
          eventId: eventId,
          secretId: secretId,
          isValid: true
        }
      }
    });
    res.send({
      message: "Registered"
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error Occured"
    });
  }
};
exports.deleteRegistration = async (req, res) => {
  const eventId = req.body.eventId;
  const userId = req.body.userId;
  try {
    //Add secretId in the users
    const eventDetail = await AdminAccess.findOne({
      userId: userId,
      eventId: eventId
    });

    //Add in the array
    const secretId = eventDetail._id.toString();
    await User.findOneAndUpdate({
      _id: userId
    }, {
      $pull: {
        userEvents: {
          eventId: eventId,
          secretId: secretId
        }
      }
    });
    await AdminAccess.deleteOne({
      eventId: eventId,
      userId: userId
    });

    //Update Event's Participant Capacity
    await Event.findOneAndUpdate({
      _id: eventId
    }, {
      $inc: {
        capacity: 1
      }
    });
    res.send({
      message: "De-Registered"
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error Occured"
    });
  }
};

//Registered Event by user
exports.registeredEventByUser = async (req, res) => {
  const user = req.params.userId;
  try {
    const userName = await User.findOne({
      _id: user
    });
    const eventsList = userName.userEvents;

    // console.log(eventsList);

    let array = [];
    for await (const e of eventsList) {
      const eventId = e.eventId;
      const eventDetail = await Event.findOne({
        _id: eventId
      });
      array.push(eventDetail);
    }
    res.send(array);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error Occured"
    });
  }
};

//Admin
exports.signUpAdmin = async (req, res) => {
  try {
    const newParticpant = new Admin({
      name: req.body.name,
      password: req.body.password
    });
    await newParticpant.save();
    res.status(200).send("User Added");
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error Occured"
    });
  }
};
exports.signInAdmin = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  try {
    const admin = await Admin.find({
      name: name,
      password: password
    });
    if (!admin.length) {
      res.send({
        message: "No user found"
      });
    } else {
      res.send({
        message: admin[0]._id
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error Occured"
    });
  }
};
exports.userVerification = async (req, res) => {
  //User Id has secret id - > check whether adminAccess has  same  secretId or not
  try {
    const eventId = req.body.eventId;
    const userId = req.body.userId;
    const secretId = req.body.secretId;
    const adminHasData = await AdminAccess.findById({
      _id: secretId
    });
    if (!adminHasData) return res.send("No data-Maar saale ko");
    const adminDataeventId = adminHasData.eventId;
    const adminDatauserId = adminHasData.userId;
    if (adminDataeventId === eventId && adminDatauserId === userId) return res.send("Verified");else return res.send("Not Verified - Pakad saale ko");
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error Occured"
    });
  }
};

//Needs to be checked
//Update Event -> Only name ,venue, participant
exports.updateEvent = async (req, res) => {
  try {
    const eventId = req.body.eventId;
    const oldData = await Event.find({
      _id: eventId
    });
    const name = req.body.name != "" ? req.body.name : oldData[0].name;
    const capacity = req.body.capacity != "" ? req.body.capacity : oldData[0].capacity;
    const venue = req.body.venue != "" ? req.body.venue : oldData[0].venue;
    const image = req.body.image != "" ? req.body.image : oldData[0].image;
    const text = req.body.text != "" ? req.body.text : oldData[0].text;
    const website = req.body.website != "" ? req.body.website : oldData[0].website;
    const updateEvent = await Event.findOneAndUpdate({
      _id: req.body.eventId
    }, {
      name: name,
      capacity: capacity,
      venue: venue,
      image: image,
      text: text,
      website: website
    });
    res.status(200).send({
      message: "Event updated"
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error Occured"
    });
  }
};

//delete event
exports.deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const eventsInAdmin = await AdminAccess.find({
      eventId: eventId
    });
    for await (const event of eventsInAdmin) {
      const userId = event.userId;

      //Delete Event from User Array 

      //Pull that value in the array which has eventId and delete it
      await User.findOneAndUpdate({
        _id: userId
      }, {
        $pull: {
          userEvents: {
            eventId: eventId
          }
        }
      });
    }
    await AdminAccess.deleteMany({
      eventId: eventId
    });
    await Event.deleteOne({
      _id: eventId
    });
    res.send({
      message: "deleted"
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error Occured"
    });
  }
};