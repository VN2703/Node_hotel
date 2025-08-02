// var fs = require("fs");
// var os = require("os");

// var user = os.userInfo();
// console.log(user);

// console.log(user.username);

// fs.appendFile(" greeting.txt", "hi " + user.username + "!\n", () => {
//   console.log("file is created");
// });

// const notes = require("./notes.js");
// var _ = require("lodash");

// console.log("server file is available");
// var age = notes.age;
// var res = notes.addnum(age + 16, 10);
// console.log(age);
// console.log(res);

// var data = ["person", "person", 1, 2, 1, 2, "age", "2"];
// var filter = _.uniq(data);
// console.log(filter);

const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello..., Welcome to our hotel");
});

//import the router files
const personRoutes = require("./routes/personRoutes");

const menuItemRoutes = require("./routes/menuItemRoutes");

//use the routers
app.use("/person", personRoutes);

app.use("/menu", menuItemRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
