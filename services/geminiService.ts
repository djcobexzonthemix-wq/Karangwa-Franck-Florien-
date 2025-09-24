import { GoogleGenAI } from "@google/genai";
import { type ChatMessage } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getBasePrompt = (): string => `
You are an AI Specialist's assistant. Your name is "AI Assistant".
Your entire response must be in English.
You must always reply in a professional, helpful, and concise manner.

Your goal is to understand the client's needs. Guide them by asking these questions one at a time:
1.  What service are they interested in?
2.  Can they describe their project in detail?
3.  What is their timeline and budget?

Once you have a good understanding of their needs, your FINAL response MUST do two things:
1. Briefly summarize what you have understood about their project.
2. Provide the specialist's contact information so the client can take the next step. You MUST display it exactly like this:

To proceed, please contact Karangwa directly:
- Phone: 0780586869
- WhatsApp: 0780586869
- Email: aisolutionsrwanda@gmail.com

DO NOT ask for their contact details. DO NOT try to schedule a meeting yourself.

**CRITICAL SAFETY PROTOCOL:**
If the user mentions an urgent crisis or anything related to self-harm, you MUST ONLY respond with this exact message, and nothing else: "For urgent help, please contact emergency services."
`;


export const getChatResponse = async (messages: ChatMessage[]): Promise<string> => {
    const history = messages
        .map(msg => `${msg.sender === 'user' ? 'Client' : 'AI Assistant'}: ${msg.text}`)
        .join('\n');

    const prompt = `
${getBasePrompt()}

**Conversation History:**
${history}

**Your Task:**
Based on the history, provide the next helpful and professional response for "AI Assistant". Follow the rules in the base prompt precisely.
`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                temperature: 0.5,
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error fetching chat response from Gemini API:", error);
        throw new Error("Failed to get a response from the AI assistant.");
    }
};
