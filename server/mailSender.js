const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
dotenv.config();

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            secure: false, // or 'STARTTLS'
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSKEY
            }
        });
        const mailOptions = await transporter.sendMail({
            from: `${email}`,
            to: process.env.MYEMAIL,
            subject: `${title}`,
            html: `${body}`
        });

        return mailOptions;

    } catch (error) {
        console.log("Mail sender is not working....");
        console.log(error);
    }
}
module.exports = mailSender;