import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get all users
router.get('/', authenticate, getUsers);

// Get user by ID
router.get('/:id', authenticate, getUserById);

// Create a new user
router.post('/', authenticate, createUser);

// Update user by ID
router.put('/:id', authenticate, updateUser);

// Delete user by ID
router.delete('/:id', authenticate, deleteUser);

export default router;