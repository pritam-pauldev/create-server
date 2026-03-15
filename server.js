const express = require("express");
const app = express();
app.use("/welcome", (req, res, next) => {
  req.user = "Guest";
  next();
});
app.get("/welcome", (req, res) => {
  res.send(`<h1>Welcomle ${req.user}</h1>`);
});
app.listen(3000, () => {
  console.log("server starts");
});
