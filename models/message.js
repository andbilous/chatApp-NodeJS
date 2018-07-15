const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  senderId: String,
  receiverId: String,
  messageBody:String
});

const User = mongoose.model("Message", userSchema);

module.exports = Message;
