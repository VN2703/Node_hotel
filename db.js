// this file is resposible for data base connections
require("dotenv").config();
const mongoose = require("mongoose");

//Define MongoDb Connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL; //hotel:database name

const mongoURL = process.env.MONGODB_URL;
// Set up MongoDb connection
// mongoose.connect(mongoURL, {
//   useNewUrlParser: true,
//   useUnifiedTopnodemonology: true,
// });
mongoose.connect(mongoURL);

//Get the default connections
// Mongoose maintains a default connection object representing the MOngoDB connections.

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDb Server");
});

db.on("error", (err) => {
  console.log(" MongoDb connection error");
});

db.on("disconnected", () => {
  console.log("MongoDb disconnected");
});

module.exports = db;
