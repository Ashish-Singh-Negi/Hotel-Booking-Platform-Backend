import express from "express";
import { loginUserController } from "../controllers/auth-controllers/loginUserController.js";

const router = express.Router();

// auth controller
router.post("/auth/login", loginUserController);

// routes here

export default router;
