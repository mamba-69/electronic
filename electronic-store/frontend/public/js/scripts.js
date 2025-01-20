document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;

  fetch('/auth/request-otp', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, mobile })
  })
  .then(response => response.text())
  .then(data => {
      console.log(data); // 'OTP sent'
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('otp-form').style.display = 'block';
  });
});

document.getElementById('otp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const otp = document.getElementById('otp').value;

  fetch('/auth/verify-otp', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, mobile, otp })
  })
  .then(response => response.text())
  .then(data => {
      console.log(data); // 'Login successful' or 'Invalid OTP'
  });
});