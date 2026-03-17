const express = require("express");
const app = express();
const routerProducts = require("./routes/products");
const routerCategories = require("./routes/categories");

app.use((req, res, next) => {
  const url = req.url;
  const method = req.method;
  console.log(`${method} request made to ${url}`);
  next();
});
app.use("/products", routerProducts);
app.use("/categories", routerCategories);

app.listen(3000, () => {
  console.log("Server is running on  http://localhost:3000");
});
