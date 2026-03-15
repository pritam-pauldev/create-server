const express = require("express");
const app = express()
app.get("/", (req, res) => {
    res.send("Server is up and running on port 3000! Ready to handle requests.");
})
app.listen(3000);