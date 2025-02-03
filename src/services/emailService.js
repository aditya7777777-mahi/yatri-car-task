import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};

const sendOTP = (email, otp) => {
  const subject = 'Your OTP Code';
  const text = `Your OTP code is ${otp}. It is valid for 10 minutes.`;
  return sendEmail(email, subject, text);
};

export { sendEmail, sendOTP };