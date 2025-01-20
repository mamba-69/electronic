const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');  // Assuming server.js is the entry point of your app
const should = chai.should();

chai.use(chaiHttp);

describe('Auth Controller', () => {
    describe('/POST request-otp', () => {
        it('it should request an OTP for a valid email and mobile', (done) => {
            const user = {
                email: 'test@example.com',
                mobile: '1234567890'
            };
            chai.request(server)
                .post('/auth/request-otp')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.eql('OTP sent');
                    done();
                });
        });
    });

    describe('/POST verify-otp', () => {
        it('it should verify the OTP', (done) => {
            const user = {
                email: 'test@example.com',
                mobile: '1234567890',
                otp: '123456'  // Use actual OTP for realistic test
            };
            chai.request(server)
                .post('/auth/verify-otp')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.eql('Login successful');
                    done();
                });
        });
    });
});