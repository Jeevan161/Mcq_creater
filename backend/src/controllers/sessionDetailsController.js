// src/controllers/sessionDetailsController.js

import { sendPromptToLLM } from "../services/llmService.js";
import { get_session_details_prompt } from "./prompts/get_session_details.js";


export const getSessionDetails = async (req, res) => {
  try {
    const { session_details } = req.body;

    if (!session_details) {
      return res.status(400).json({ error: "session_details is required" });
    }

    // Build prompt
    const prompt = get_session_details_prompt(session_details);

    // Call LLM
    const response = await sendPromptToLLM(prompt);

    // Extract snake_case outcomes
    // Matches ONLY lowercase words with underscores, like: feature_one, apply_rules_now
    const snakeCaseRegex = /\b[a-z]+(?:_[a-z]+)+\b/g;

    const learning_outcomes = response.match(snakeCaseRegex) || [];

    return res.status(200).json({
      raw_response: response,
      learning_outcomes
    });

  } catch (error) {
    return res.status(500).json({
      error: "LLM request failed",
      details: error.message,
    });
  }
};
