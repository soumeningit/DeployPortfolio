exports.contactUsEmail = (name, email, message) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="UTF-8">
          <title>Contact Form Confirmation</title>
          <style>
              body {
                  background-color: #ffffff;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 1.5;
                  color: #333333;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  text-align: center;
              }
              .logo {
                  max-width: 150px;
                  margin-bottom: 20px;
              }
              .message {
                  font-size: 20px;
                  font-weight: bold;
                  color: #333333;
                  margin-bottom: 20px;
              }
              .body {
                  text-align: left;
                  font-size: 16px;
                  margin-bottom: 20px;
              }
              .support {
                  font-size: 14px;
                  color: #999999;
                  margin-top: 20px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <a href=""><img class="logo" src="https://res.cloudinary.com/dhu8fpog1/image/upload/v1728153862/Soumen_ioufmu.png" alt="Portfolio Logo" /></a>
              <div class="message">New Contact Form Submission</div>
              <div class="body">
                  <p>Dear Admin,</p>
                  <p>You have received a new message from your portfolio contact form:</p>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Message:</strong></p>
                  <p>${message}</p>
                  <p>Please respond to this inquiry at your earliest convenience.</p>
              </div>
              <div class="support">
                  If you have any questions or need further details, contact us at 
                  <a href="mailto:your-email@example.com">your-email@example.com</a>.
              </div>
          </div>
      </body>
      </html>
    `;
};
