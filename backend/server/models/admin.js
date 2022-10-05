const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  adminId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("Admin", userSchema);
