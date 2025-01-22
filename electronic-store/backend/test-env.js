require('dotenv').config();
console.log('Testing .env file loading:');
console.log('TWILIO_ACCOUNT_SID:', process.env.TWILIO_ACCOUNT_SID);
console.log('DEV_MODE:', process.env.DEV_MODE);
console.log('NODE_ENV:', process.env.NODE_ENV);