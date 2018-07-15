const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
  findAll: callback => {
    MessageRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    MessageRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  }
};
