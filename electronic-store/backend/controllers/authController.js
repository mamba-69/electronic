// controllers/authController.js
const OTPService = require('../services/otpService');

exports.sendOTP = async (req, res) => {
    try {
        const { phoneNumber } = req.body;
        
        if (!phoneNumber) {
            return res.status(400).json({
                success: false,
                message: 'Phone number is required'
            });
        }

        const otp = await OTPService.sendOTP(phoneNumber);
        
        res.status(200).json({
            success: true,
            message: 'OTP sent successfully',
            developerNote: 'Development Mode: Use 123456 as OTP'
        });
    } catch (error) {
        console.error('Send OTP Error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send OTP'
        });
    }
};

exports.verifyOTP = async (req, res) => {
    try {
        const { phoneNumber, otp } = req.body;
        
        if (!phoneNumber || !otp) {
            return res.status(400).json({
                success: false,
                message: 'Phone number and OTP are required'
            });
        }

        const isValid = await OTPService.verifyOTP(phoneNumber, otp);
        
        if (!isValid) {
            return res.status(400).json({
                success: false,
                message: 'Invalid OTP'
            });
        }

        res.status(200).json({
            success: true,
            message: 'OTP verified successfully'
        });
    } catch (error) {
        console.error('Verify OTP Error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to verify OTP'
        });
    }
};