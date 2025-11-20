// src/controllers/chatController.js
import { sendPromptToLLM } from "../services/llmService.js";

export const chatWithLLM = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const response = await sendPromptToLLM(prompt);
    return res.status(200).json({ response });

  } catch (error) {
    return res.status(500).json({ error: "LLM request failed", details: error.message });
  }
};
