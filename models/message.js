const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  senderId: String,
  receiverId: String,
  messageBody:String
});

const Message = mongoose.model("Message", userSchema);

module.exports = Message;
