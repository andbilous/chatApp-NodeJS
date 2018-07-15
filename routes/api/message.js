const router = require("express").Router();
const messageService = require("../../services/message");

router.get("/", (req, res, next) => {
    messageService.findAll((err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.get("/:id", (req, res, next) => {
    messageService.findOne(Number(req.params.id), (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.post("/", (req, res, next) => {
  const message = new Message({
    _id: new mongoose.Types.ObjectId(),
    senderId: req.body.senderId,
    receiverId: req.body.receiverId,
    messageBody:req.body.messageBody
  });
message.save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /messages",
        createdProduct: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/:userId", (req, res, next) => {
  const id = req.params.senderId;
 Message.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/connectedUsers/:userId", (req, res, next) => {
  messageService.findConnectedUsers(Number(req.params.id), (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});
module.exports = router;
