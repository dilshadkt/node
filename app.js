// let epxress = require("express");

// const app = epxress();
// app.get("/", function (req, res) {
//   res.send("hello  World😍😍");
// });
// app.get("/alien", function (req, res) {
//   const id = req.query.id;
//   res.send("hello aliens 👽👽👽🙋‍♂️" + id);
// });
// app.get("/alien/:id", function (req, res) {
//   const id = req.params.id;
//   res.send("hello Dilshad " + id);
// });
// app.listen(9000, function (req, res) {
//   console.log("running...............");
// });

////////////////////first server conncetion ///////////////////

// let http = require("http");
// let fs = require("fs");

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { "content-Type": "text/html" });
//   fs.readFile("index.html", function (err, data) {
//     if (err) {
//       res.writeHead(404);
//       res.write("Error :page donot found🚫");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
//   // res.write("hello world");
// });

// server.listen(9000, function (err, data) {
//   console.log("running......");
// });

//////////////////  module scoping ✨✨//////////

// require("./batman");              ////////////each module has its own scope /////////
// require("./superman");            ///////////each module loaded with an IIFF ///////

///////////////////// exporting and importing ⬆️⬇️////////////////////////
// const { add, sub } = require("./calculation");

// const result = add(2, 3);
// console.log(result);

//🙋‍♂️ how the its work with without modules while importing and exporting modules

// const obj1 = {
//   name: "Dilshad",
// };
// const obj2 = obj1;  /////////  here is the exmaple of without modules here its change the obj1 value
// obj2.name = "rahul";
// console.log(obj1.name);

/////////// ✅✅✅✅

// const obj1 = {
//   name: "Dilshad",
// };
// let obj2 = obj1;
// obj2 = {
//   //// here it is resigned instead of modifying it
//   name: "rahul",
// };

// console.log(obj1.name);

////////////////// let chill 😒😒///////////

// const message = require("./logg");
// message("Dilshad");

// const path = require("path");
// var pathObj = path.parse(__filename);
// console.log(pathObj);

///////////////// os /// build in module ///////////

// const os = require("os");
// const Totalmem = os.totalmem;
// const frrMen = os.freemem;

// console.log(`total memory :${Totalmem}`);
// console.log(`free memory :${frrMen}`);

///////// fs module ///////////////////

// const fs = require("fs");
// // const file = fs.readdirSync("./");

// const file = fs.readdir("%", function (err, file) {
//   if (err) console.log("error :", err);
//   else console.log("result", file);
// });

////////////////Events (●'◡'●)/ /////////
// const EventEmitor = require("events");

// const emittor = new EventEmitor();
// emittor.on("message Logfged", function () {
//   console.log("listner called");
// });

// emittor.emit("message Logfged");

////////// pass data as arguments 📤📤/////

const EventEmitor = require("events");
const emittor = new EventEmitor();

const Logger = require("./logg");
const loggger = new Logger();

loggger.on("logged", function (arg) {
  console.log("listner called", arg);
});
loggger.log("Dilshad");
