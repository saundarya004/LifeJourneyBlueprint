import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function apiRequest(method: string, path: string, data: any) {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: data.prompt,
    n: data.n || 1,
    size: data.size || "1024x1024",
    quality: "standard",
  });

  return { url: response.data[0].url || "" };
}
