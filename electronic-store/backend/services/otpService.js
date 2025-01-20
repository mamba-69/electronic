const twilio = require('twilio');
const nodemailer = require('nodemailer');

// Load environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
console.log('TWILIO_ACCOUNT_SID:', accountSid);  // Debugging log
console.log('TWILIO_AUTH_TOKEN:', authToken);    // Debugging log

if (!accountSid || !authToken) {
    throw new Error('TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN must be set');
}
const client = new twilio(accountSid, authToken);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendOtp = (email, mobile, otp) => {
    // Send OTP via SMS
    client.messages.create({
        body: `Your OTP is ${otp}`,
        from: '+1234567890',
        to: mobile
    });

    // Send OTP via Email
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP is ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = { sendOtp };