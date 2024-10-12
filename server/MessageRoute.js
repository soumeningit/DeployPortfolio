const express = require('express');
const router = express.Router();

const { sendMail } = require("./MessageSend")

router.post("/sendMessage", sendMail);

module.exports = router;