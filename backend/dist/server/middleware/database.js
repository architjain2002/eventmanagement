const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", function () {
  console.log("Connected");
});

//Event
require("../models/Event");

//User
require("../models/User");

//Admin
require("../models/Admin");

//Admin
require("../models/AdminAccess");