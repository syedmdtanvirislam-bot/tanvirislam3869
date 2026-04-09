import { GoogleGenAI, ThinkingLevel } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const getGeneralResponse = async (prompt: string) => {
  const systemPrompt = "You are a CAMS expert tutor. Answer questions based on international AML standards and the ACAMS Study Guide Version 6.48.";
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `${systemPrompt}\n\nUser Question: ${prompt}`,
  });
  return response.text || "No response received.";
};

export const getSearchGroundedResponse = async (prompt: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      tools: [{ googleSearch: {} } as any],
    }
  });
  return response.text || "No response received.";
};

export const explainComplianceScenario = async (scenario: string) => {
  const prompt = `As a CAMS expert, analyze this compliance scenario and provide a detailed risk assessment and recommended actions based on international AML standards and the ACAMS Study Guide Version 6.48: \n\n ${scenario}`;
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: prompt,
    config: {
      thinkingConfig: {
        thinkingLevel: ThinkingLevel.HIGH
      }
    }
  });
  return response.text || "No response received.";
};

export const analyzeComplianceDocument = async (imageFile: File, prompt: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: [
      {
        role: "user",
        parts: [
          { text: `As a CAMS expert, analyze this document image and answer the following: ${prompt}` },
          {
            inlineData: {
              data: await fileToGenerativePart(imageFile),
              mimeType: imageFile.type
            }
          }
        ]
      }
    ]
  });
  return response.text || "No response received.";
};

async function fileToGenerativePart(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = (reader.result as string).split(',')[1];
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export const getAMLNews = async () => {
  const prompt = "What are the latest AML (Anti-Money Laundering) regulatory updates and financial crime news from the last 30 days? Focus on FATF, FinCEN, and EU AMLD updates. Provide a list of 5-7 items. For each item, start with '## ' followed by the title, then the content, and end each item with '---'.";
  return getSearchGroundedResponse(prompt);
};

export const getBFIUCirculars = async () => {
  const prompt = "Search for the latest circulars and guidelines issued by the Bangladesh Financial Intelligence Unit (BFIU) in the last 6-12 months. Summarize the most important ones. For each circular, start with '## ' followed by the circular title/number, then the summary and key requirements, and end each item with '---'.";
  return getSearchGroundedResponse(prompt);
};

export const generateFlashcards = async (topicTitle: string, content: string, count: number = 5, includeImages: boolean = false) => {
  const prompt = `As a CAMS expert, create ${count} high-quality flashcards for the topic: "${topicTitle}". 
  Use the following content as a reference:
  ${content}
  
  Format each flashcard as follows:
  Front: [Question or Term]
  Back: [Answer or Definition]
  ${includeImages ? 'Image: [Describe a relevant visual diagram, chart, or scenario that would help visualize this concept]' : ''}
  ---
  Ensure the questions are challenging and relevant to the CAMS exam.`;
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });
  
  return response.text || "";
};

