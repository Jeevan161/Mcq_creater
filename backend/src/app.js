import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";

import sessionRoutes from "./routes/sessionRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", chatRoutes);

export default app;
