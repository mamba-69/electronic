// services/otpService.js

class OTPService {
    constructor() {
        console.log('Initializing OTP Service in Development Mode');
        this.otpStorage = new Map();
    }

    async sendOTP(phoneNumber) {
        // Always use 123456 as the test OTP in development
        const testOTP = '123456';
        this.otpStorage.set(phoneNumber, testOTP);
        
        console.log(`[DEV MODE] Sent OTP: ${testOTP} to phone: ${phoneNumber}`);
        return testOTP;
    }

    async verifyOTP(phoneNumber, otp) {
        // In development mode, either accept '123456' or check stored OTP
        const storedOTP = this.otpStorage.get(phoneNumber) || '123456';
        const isValid = otp === storedOTP;
        
        console.log(`[DEV MODE] Verifying OTP for ${phoneNumber}:`, isValid ? 'Valid' : 'Invalid');
        
        if (isValid) {
            this.otpStorage.delete(phoneNumber); // Clean up after successful verification
        }
        
        return isValid;
    }
}

module.exports = new OTPService();