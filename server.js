require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connectDB = require("./config/db.js");
const passport = require("passport");
const users = require("./routes/api/users.js");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
//db connection
connectDB();
//passport middleware
app.use(passport.initialize());
//passport condig
require("./config/passport.js")(passport);
//routes
app.use("/api/users/", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
