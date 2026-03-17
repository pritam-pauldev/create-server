const express = require("express");
const app = express();
const routerBooks = require("./routes/books");
app.use("/books", routerBooks);
app.listen(3000, () => {
  console.log("Server is running in port 3000");
})