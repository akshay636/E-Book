require("./src/config/config");
require('./src/config/cloudinaryConfig')
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const BookRoute = require("./src/routes/book");



const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const PORT =process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

app.use("/api", cors(), BookRoute);
