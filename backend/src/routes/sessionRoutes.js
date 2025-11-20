// src/routes/sessionRoutes.js

import express from "express";
import { getSessionDetails } from "../controllers/sessionDetailsController.js";

const router = express.Router();

router.post("/session-details", getSessionDetails);

export default router;
