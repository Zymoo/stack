"use strict"

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    stops: {type: [Number]}
});

userSchema.methods.getPassword = () => password;

var User = mongoose.model('User', userSchema);
module.exports = User;