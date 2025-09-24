
import { GoogleGenAI } from "@google/genai";
import { type ChatMessage } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getBasePrompt = (): string => `
You are an AI Specialist's assistant. Your name is "AI Assistant".
Your entire response must be in English.
You must always reply in a professional, helpful, and concise manner.

Your goal is to understand the client's needs before they hire the AI Specialist. You must guide them through the following questions, one at a time:
1.  Ask what service they need.
2.  Ask them to describe their project in detail.
3.  Ask about their timeline and budget.

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
Based on the history, provide the next helpful and professional response for "AI Assistant". If the client has answered all the questions, suggest a relevant service category and offer to help them book a meeting or browse services.
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
