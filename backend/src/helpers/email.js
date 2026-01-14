import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendOTPEmail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP for Password Reset",
        text: `Your OTP is ${otp}. It is valid for ${process.env.OTP_EXPIRY_MINUTES} minutes.`,
    };

    await transporter.sendMail(mailOptions);
};
