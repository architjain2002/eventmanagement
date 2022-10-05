const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
//   userId: {
//     type: String,
//     required: true,
//   },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  userEvents: [
    {
      eventId: {
        type: String,
        required: true,
      },
      secretId: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Users", userSchema);
