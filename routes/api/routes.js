const user = require("./user");
const message= require("./message");

module.exports = function(app) {
  app.use("/api/message", message);
};


module.exports = function(app) {
  app.use("/api/user", user);
};
