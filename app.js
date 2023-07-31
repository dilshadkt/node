let epxress = require("express");

const app = epxress();
app.get("/", function (req, res) {
  res.send("hello  World😍😍");
});
app.get("/alien", function (req, res) {
  const id = req.query.id;
  res.send("hello aliens 👽👽👽🙋‍♂️" + id);
});
app.get("/alien/:id", function (req, res) {
  const id = req.params.id;
  res.send("hello Dilshad " + id);
});
app.listen(9000, function (req, res) {
  console.log("running...............");
});
