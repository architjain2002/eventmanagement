const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  userEvents: [{
    eventId: {
      type: String,
      required: true
    },
    secretId: {
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
  }]
});
module.exports = mongoose.model("User", userSchema);