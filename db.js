// this file is resposible for data base connections

const mongoose = require("mongoose");

//Define MongoDb Connection URL
const mongoURL = "mongodb://localhost:27017/hotel"; //hotel:database name

//Set up MongoDb connection
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
