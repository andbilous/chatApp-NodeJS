const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  senderId: String,
  receiverId: String,
  messageBody:String
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
