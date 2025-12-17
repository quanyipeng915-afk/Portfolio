import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai) {
    if (!process.env.API_KEY) {
      console.error("API_KEY is missing from environment variables.");
      throw new Error("API Key missing");
    }
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const generateChatResponse = async (
  userMessage: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const client = getAIClient();
    
    // Transform history to Gemini format if needed, but for simple QA 
    // we can often just send the context + latest message or use a chat session.
    // For this implementation, we will use a fresh generateContent with system instruction 
    // to keep it stateless and simple for a portfolio demo, 
    // incorporating the chat history into the prompt if needed, or using chats.create.

    const chat = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: RESUME_CONTEXT,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Error generating response:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later or email Alex directly.";
  }
};