// Ensure no require statements for testing libraries like 'chai' in your controller files

const User = require('../models/userModel');
const { sendOtp } = require('../services/otpService');

const requestOtp = async (req, res) => {
    const { email, mobile } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    let user = await User.findOne({ email, mobile });
    if (!user) {
        user = new User({ email, mobile, otp });
    } else {
        user.otp = otp;
    }
    await user.save();

    sendOtp(email, mobile, otp);
    res.send('OTP sent');
};

const verifyOtp = async (req, res) => {
    const { email, mobile, otp } = req.body;
    const user = await User.findOne({ email, mobile, otp });

    if (user) {
        res.send('Login successful');
    } else {
        res.send('Invalid OTP');
    }
};

module.exports = {
    requestOtp,
    verifyOtp
};