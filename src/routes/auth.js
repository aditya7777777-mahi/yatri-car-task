import express from 'express';
import { login, signup, sendOtp, verifyOtp } from '../controllers/authController.js';

const router = express.Router();

// JWT-based signup
router.post('/signup', signup);

// JWT-based login
router.post('/login', login);

// Send OTP for email authentication
router.post('/otp/send', sendOtp);

// Verify OTP for Signin or Signup
router.post('/otp/verify', verifyOtp);

export default router;