const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

//getevent -> fetches you event list
router.get("/getevents", controller.getevents);

//Add events
router.post("/addevents", controller.addEvents);

// Add Participant
router.post("/signUp", controller.signUp);

module.exports = router;
