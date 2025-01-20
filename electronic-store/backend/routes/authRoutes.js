const express = require('express');
const router = express.Router();
const { requestOtp, verifyOtp } = require('../controllers/authController');

// Define route for requesting OTP
router.post('/request-otp', requestOtp);

// Define route for verifying OTP
router.post('/verify-otp', verifyOtp);

module.exports = router;