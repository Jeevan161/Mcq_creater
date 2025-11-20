// src/routes/chatRoutes.js
import express from "express";
import { chatWithLLM } from "../controllers/chatController.js";

const router = express.Router();

router.post("/chat", chatWithLLM);

export default router;
