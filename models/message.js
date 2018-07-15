const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  senderId: Number,
  receiverId: Number,
  messageBody:String
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
