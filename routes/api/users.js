const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const validateLoginInput = require("../../validation/login.js");
const validateRegisterInput = require("../../validation/register.js");

const User = require("../../models/User.js");
const { use } = require("passport");

//register

//@route POST api/user/register
//@desc Register USEr
//access Public

router.post("/register", (req, res) => {
  //validate form
  const { errors, isValid } = validateRegisterInput(req.body);

  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      //hash the password and then save it

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            throw err;
          }
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

//login endpoint
//@route POST api/user/login
//@desc Login user and return JWT Token
//@access Public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  // find user by email

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({ emailnotfound: "Email not found" });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        //user matched,create jwt-payload
        const payload = {
          id: user.id,
          name: user.name,
        };
        //sign token
        jwt.sign(
          payload,
          process.env.SECRET_OR_KEY,
          {
            expiresIn: 31556926, //year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Incorrect Password" });
      }
    });
  });
});

module.exports = router;
