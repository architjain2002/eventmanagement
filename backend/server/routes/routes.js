const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");



//Event

//getevent -> fetches you event list
router.get("/getevents", controller.getevents);

//Add events - by admin
router.post("/addevents", controller.addEvents);




//Participant

// Add Participant
router.post("/signUp", controller.signUp);

//Sign In participant
router.post("/signIn",controller.signIn);

//Register Participant
router.post("/register",controller.register);
//Capacity !=0 then only register,capacity -> event-1 , user-> new event, adminAccess-> secretId

//Not allowed for second time !! , similarly a user can not signUp twice.

//deRegister
router.delete("/deleteRegister",controller.deleteRegistration);

//signOut -> Particpant , Admin


//get events registered by user
router.get("/events/:userId",controller.registeredEventByUser);




//Admin

// signUpAdmin -> not handling making only one admin
router.post("/signUpAdmin",controller.signUpAdmin);

//signInAdmin
router.post("/signInAdmin",controller.signInAdmin);


//participant Verification
router.post("/userverificaton",controller.userVerification);

router.put("/event/update",controller.updateEvent);

router.delete("/deleteEvent/:eventId",controller.deleteEvent);

module.exports = router;



//if curr time > event's end time then delete that event