const { User } = require('../models/User');

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);
