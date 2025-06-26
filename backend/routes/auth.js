const express = require('express');
const router = express.Router();
const User = require('../models/User');

// 📌 Signup route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
  res.send('Signup successful');
});

// 📌 Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(400).send('Invalid credentials');
  res.send('Login successful');
});

module.exports = router;
