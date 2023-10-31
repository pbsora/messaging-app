const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");

const User = require("../Models/User");
const passport = require("passport");

router.post(
  "/log-in",
  body("username").trim().escape().toLowerCase(),
  async (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.send({ error: info.error });

      req.logIn(user, (err) => {
        if (err) {
          console.log(err);
          return next(err);
        }
        res.send("Successfully Authenticated");
      });
    })(req, res, next);
  }
);

router.post(
  "/register",
  body("username", "Username cannot be empty").notEmpty().trim().toLowerCase(),
  body("firstName", "Please enter your name").notEmpty().trim(),
  body("lastName", "Please enter your last name").notEmpty().trim(),
  body("password", "Passwords must match").custom((value, { req }) => {
    return value === req.body.confirmPassword;
  }),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.send(errors);

    try {
      const { username, firstName, lastName } = req.body;
      const userExists = await User.findOne({ username });
      if (userExists) return res.send({ error: "User already exists" });
      const password = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username,
        password,
        firstName,
        lastName,
      });
      await newUser.save();
      res.send("Created successfully");
    } catch (error) {
      console.log(error);
    }
  }
);

router.get("/auth", (req, res) => {
  res.send(req.isAuthenticated());
  console.log(!!req.user);
  console.log(!!req.session.passport);
});

module.exports = router;
