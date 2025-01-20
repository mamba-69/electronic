const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    mobile: String,
    otp: String,
    isAdmin: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);