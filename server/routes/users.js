const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const User = require("../models/Users");

// @route   POST /users
// @desc    Register new user
// @access  Public
router.post("/", (req, res) => {
  const { username, password } = req.body;
  // Simple validation
  if (!username || !password) {
    return res.status(400).json({ msg: "Please enter all fields!" });
  }
  // Check for existing user
  User.findOne({ username }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists!" });

    // If user doesn't exist, continue registration
    const newUser = new User({
      username,
      password,
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        // Store hash in your password DB
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  username: user.username,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
