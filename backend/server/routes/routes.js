const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");



//Event

//getevent -> fetches you event list
router.get("/getevents", controller.getevents);

//Add events
router.post("/addevents", controller.addEvents);



//Participant

// Add Participant
router.post("/signUp", controller.signUp);

//Sign In participant
router.post("/signIn",controller.signIn);

//Register Participant
router.post("/register",controller.register);
//Capacity !=0 then only register,capacity -> event-1 , user-> new event, adminAccess-> secretId



//Admin

// signUpAdmin
router.post("/signUpAdmin",controller.signUpAdmin);

//signInAdmin
router.post("/signInAdmin",controller.signInAdmin);


module.exports = router;
