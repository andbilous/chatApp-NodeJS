const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Message = require("../models/user");

function MessageRepository() {
  Repository.prototype.constructor.call(this);
  this.model = Message;
}

UserRepository.prototype = new Repository();

module.exports = new UserRepository();
