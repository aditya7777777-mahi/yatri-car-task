import crypto from 'crypto';
import { sendEmail } from './emailService.js';

// In-memory storage for OTPs with expiration
const otpStorage = new Map();
const OTP_EXPIRY_TIME = 10 * 60 * 1000; // 10 minutes in milliseconds

export const setOtp = async (email, otp) => {
  otpStorage.set(email, {
    otp,
    expiresAt: Date.now() + OTP_EXPIRY_TIME
  });
};

export const getOtp = async (email) => {
  const otpData = otpStorage.get(email);
  if (!otpData) return null;
  
  // Check if OTP has expired
  if (Date.now() > otpData.expiresAt) {
    otpStorage.delete(email);
    return null;
  }
  
  return otpData.otp;
};

// Optional: Cleanup expired OTPs periodically
setInterval(() => {
  for (const [email, otpData] of otpStorage.entries()) {
    if (Date.now() > otpData.expiresAt) {
      otpStorage.delete(email);
    }
  }
}, 60000); // Run cleanup every minute

const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};

const sendOTP = async (email) => {
  const otp = generateOTP();
  await setOtp(email, otp); // Save OTP with expiration
  await sendEmail(email, 'Your OTP', `Your OTP is ${otp}`);
  return otp;
};

const verifyOTP = async (email, inputOTP) => {
  const storedOTP = await getOtp(email); // Retrieve OTP from storage
  console.log(storedOTP);
  if (!storedOTP) return false;
  return inputOTP === storedOTP;
};

export { generateOTP, sendOTP, verifyOTP };