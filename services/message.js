const MessageRepository = require("../repositories/MessageRepository");
const GeneralRepository=require("../repositories/GeneralRepository");

module.exports = {
  findAll: callback => {
    GeneralRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    GeneralRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  },

  findConnectedUsers: (id, callback) => {
    MessageRepository.getConnectedUsers(id, (err, data) => { 
      callback(err, data);
    });
  }
};
