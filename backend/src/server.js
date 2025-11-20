// server.js
import express from "express";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";

import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api", chatRoutes);
app.use("/api", sessionRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
