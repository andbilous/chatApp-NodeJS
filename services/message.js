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
    let connectedUsers=new Set();
   let senders=  MessageRepository.getMessagesBySender(id);
   let receivers=  MessageRepository.getMessagesByReceiver(id);

   for(let i=0;i<senders.length;i++){
    connectedUsers.add(senders[i]);
   }
   for(let i=0;i<receivers.length;i++){
    connectedUsers.add(receivers[i]);
   }
   data=Array.from(connectedUsers);
   callback(err,data);
  }
};
