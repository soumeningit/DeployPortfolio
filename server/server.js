const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const messageRoute = require("./MessageRoute");
const cors = require('cors');
const path = require("path");


const PORT = process.env.PORT || 4004;
// console.log("PORT : ", PORT);

app.use(express.json());

const allowedOrigins = [
    "http://localhost:3000", // For local development
    "https://myportfolio-jd7d.onrender.com"// For Render deployment
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);

app.use("/api", messageRoute);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "..", "/client/build")));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname1, "..", "client", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        return res.json({
            success: true,
            message: "Server is running",
        });
    });
}

// --------------------------deployment------------------------------

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

