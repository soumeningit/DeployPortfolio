const mailSender = require("./mailSender");
const { contactUsEmail } = require("./mailTemplate");

exports.sendMail = async (req, res) => {
    // console.log("INSIDE CONTROLLER.....");
    // console.log("Request body : ", req.body);
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all fields."
            });
        }

        const mailResponse = await mailSender(name, email, contactUsEmail(name, email, message));
        if (!mailResponse) {
            return res.status(500).json({
                success: false,
                message: "Failed to send email"
            });
        }
        console.log("mailResponse : ", mailResponse);
        return res.status(200).json({
            success: true,
            message: "Email sent successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: "Internal Server Error"
        });
    }
}
