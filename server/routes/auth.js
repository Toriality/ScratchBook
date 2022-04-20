const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

require("dotenv").config();

// User Model
const User = require("../models/Users");

//*@route   POST /auth
//*@desc    Authenticate the user
//*@access  Public
router.post("/", (req, res) => {
  const { username, password } = req.body;
  // Simple validation
  if (!username || !password) {
    return res.status(400).json({ msg: "Please enter all fields!" });
  }
  // Check for existing user
  User.findOne({ username }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exists!" });

    // Validate the password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

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

// @route   GET /user
// @desc    Get user data
// @access  Public
router.get("/", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;
