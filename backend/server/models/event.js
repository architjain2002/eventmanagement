const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
//   eventId: {
//     type: String,
//     required: true,
//   },
  name: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  venue: {
    type: String,
  },
});

module.exports = mongoose.model("Event", eventSchema);
