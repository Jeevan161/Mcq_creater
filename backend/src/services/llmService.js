// src/services/llmService.js
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config(); // ✅ load .env variables

export const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL
});

export const sendPromptToLLM = async (prompt) => {
  const response = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
    metadata: {
      project_name: "mcq_generator",
      feature: "chat",
      step: "send_prompt",
      team: "backend_team",
      meta: { env: process.env.NODE_ENV }
    }
  });
  return response.choices[0].message.content;
};
