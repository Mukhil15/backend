import express from 'express';
import { loginUser,signupUser } from '../controller/AuthController.js';
const router=express.Router();

// login route
router.post("/login",loginUser);
// signup route
router.post("/signup",signupUser);
export default router;