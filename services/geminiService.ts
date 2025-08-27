import { GoogleGenAI, Type } from "@google/genai";
import { type Answer, type Message } from '../types';
import { languages } from '../translations';

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. Using a placeholder. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "YOUR_API_KEY_HERE" });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    advice: {
      type: Type.STRING,
      description: "Compassionate and actionable advice for the user based on their answers. Should be 2-3 paragraphs."
    },
    score: {
      type: Type.INTEGER,
      description: "A wellness score from 1 to 100, where a lower score indicates a greater need for support."
    }
  },
  required: ["advice", "score"]
};


export const getFeedback = async (serviceName: string, answers: Answer[], language: string): Promise<{ advice: string; score: number }> => {
  const formattedAnswers = answers
    .map(a => `- Question: "${a.questionText}"\n  - Answer (1-5 scale): ${a.value}`)
    .join('\n');

  const languageName = languages.find(l => l.code === language)?.name || 'English';

  const prompt = `
You are a compassionate and helpful AI assistant for the 'Iwacu Recovery Care App', which helps users understand the effects of alcohol use and trauma.

A user has completed a self-check for the "${serviceName}" category. Their answers are as follows (on a scale of 1 'Strongly Disagree' to 5 'Strongly Agree'):
${formattedAnswers}

Based on these responses, please provide supportive and actionable advice in a few paragraphs. Speak with empathy and avoid clinical jargon. The tone should be encouraging.
Also, provide a 'Wellness Score' from 1 to 100, where a lower score indicates a greater need for support, based on their answers. A higher total score from the user's answers should result in a lower wellness score.

IMPORTANT: The entire response, including the JSON keys and values, must be in ${languageName}.

Return the response as a JSON object adhering to the specified schema.
`;

  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: responseSchema,
            temperature: 0.7,
        },
    });
    
    // Clean potential markdown and trim
    const jsonText = response.text.replace(/```json\n?|\n?```/g, '').trim();
    const result = JSON.parse(jsonText);

    if (result && typeof result.advice === 'string' && typeof result.score === 'number') {
        return result;
    } else {
        throw new Error("Invalid JSON structure received from API");
    }
  } catch (error) {
    console.error("Error fetching feedback from Gemini API:", error);
    throw new Error("Failed to get feedback from AI service.");
  }
};

export const getQAResponse = async (messages: Message[], language: string): Promise<string> => {
    const languageName = languages.find(l => l.code === language)?.name || 'English';
    const emergencyPhoneNumber = '+250 788 772 489';
    const serviceCategories = ['Psychoeducation', 'Counseling & Psychotherapy', 'Addiction Counseling & Treatment', 'Art Therapy', 'Relaxation', 'Ergo/Occupational Therapy', 'Psychosocial Support', 'depression', 'trauma', 'family conflict'];

    // Format the conversation history for the prompt, excluding the initial AI greeting
    const history = messages.slice(1)
        .map(msg => `${msg.sender === 'user' ? 'Person' : 'Iwacu Assistant'}: ${msg.text}`)
        .join('\n');

    const prompt = `
You are Iwacu Assistant, a supportive and caring guide from Iwacu Recovery Centre.
Your purpose is to help people struggling with addiction, trauma, depression, and family conflict.
You must always reply in a caring, simple, and human way. Avoid sounding robotic.
Your entire response must be in ${languageName}.

**CRITICAL SAFETY PROTOCOL:**
If the user mentions an urgent crisis, or says "I want to die", "I cannot control myself", or anything related to self-harm, you MUST ONLY respond with this exact message, and nothing else: "Please, for urgent help, contact Iwacu Recovery Centre at ${emergencyPhoneNumber}."

**Conversation Rules:**
1.  **First Reply:** If this is the user's first message (the history is empty), always acknowledge their courage for reaching out. Try to identify their problem (e.g., alcohol, depression, family conflict) and connect them to the right service category in your response.
2.  **Ongoing Conversation:** Use the conversation history below for context. Do not repeat service information unless asked. Ask supportive follow-up questions that fit their problem. Keep your replies focused on their issue.
3.  **Tone:** Always be supportive, caring, and encouraging. Use short, clear sentences that are easy for anyone to understand.

**Service Categories:** Your answers must relate to: ${serviceCategories.join(', ')}.

**Conversation History:**
${history}

**Your Task:**
Based on the history, provide the next response for "Iwacu Assistant".
`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                temperature: 0.7,
            },
        });

        return response.text;
    } catch (error) {
        console.error("Error fetching QA response from Gemini API:", error);
        throw new Error("Failed to get a response from the AI assistant.");
    }
};
