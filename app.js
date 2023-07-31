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

let http = require("http");
let fs = require("fs");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-Type": "text/html" });
  fs.readFile("index.html", function (err, data) {
    if (err) {
      res.writeHead(404);
      res.write("Error :page donot found🚫");
    } else {
      res.write(data);
    }
    res.end();
  });
  // res.write("hello world");
});

server.listen(9000, function (err, data) {
  console.log("running......");
});
