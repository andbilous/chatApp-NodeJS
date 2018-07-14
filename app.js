// app.js
const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user.route'); // Imports routes for the products
const app = express();

// initialize our express app
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://chat_db_user:asdasdasd1@ds111410.mlab.com:11410/chat_db';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/users', user);
let port = 1265;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});