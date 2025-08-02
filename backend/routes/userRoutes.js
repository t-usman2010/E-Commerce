const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// POST add a new user
router.post("/add", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ message: "User added successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add user", details: err.message });
  }
});

module.exports = router;
