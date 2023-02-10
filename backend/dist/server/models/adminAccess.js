const mongoose = require("mongoose");
const adminAccessSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  eventId: {
    type: String,
    required: true
  },
  // status: {
  //   type: String,
  //   required: true,
  // },
  isValid: {
    type: Boolean,
    default: true
  }
});
module.exports = mongoose.model("AdminAccess", adminAccessSchema);