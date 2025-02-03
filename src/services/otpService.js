import crypto from 'crypto';
import { sendEmail } from './emailService';

const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};

const sendOTP = async (email) => {
  const otp = generateOTP();
  // Here you would typically save the OTP to the database with an expiration time
  await sendEmail(email, 'Your OTP', `Your OTP is ${otp}`);
  return otp;
};

const verifyOTP = (inputOTP, storedOTP) => {
  // Here you would typically check the stored OTP against the input OTP
  return inputOTP === storedOTP;
};

export { generateOTP, sendOTP, verifyOTP };