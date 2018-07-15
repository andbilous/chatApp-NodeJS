const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Message = require("../models/message");


Repository.prototype.getSender = getSender;



function MessageRepository() {
  Repository.prototype.constructor.call(this);
  this.model = Message;
}
function getSender(callback) {
    var model = this.model;
    var query = model.find();
    query.exec(callback);
  }
 function getConnectedUser(id,callback){
    var model = this.model;
    var query = model.getConnectedUser({
        _id: id
      });
      query.exec(callback);
 } 




MessageRepository.prototype = new Repository();

module.exports = new MessageRepository();
