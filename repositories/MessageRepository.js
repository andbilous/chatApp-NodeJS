const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Message = require("../models/message");


Repository.prototype.getSender = getSender;



function MessageRepository() {
  Repository.prototype.constructor.call(this);
  this.model = Message;
}

 function getMessagesBySender(id,callback){
    var model = this.model;
    var query = model.findAll({
        senderId: id
      });
      query.exec(callback);
 } 
 
 function getMessagesReceiver(id,callback){
    var model = this.model;
    var query = model.findAll({
        receiverId: id
      });
      query.exec(callback);
 }




MessageRepository.prototype = new Repository();

module.exports = new MessageRepository();
