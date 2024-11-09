import OpenAI from "openai";
import { getImageUrl } from "./getImageUrl";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const textToImage = async (prompt: string) => {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      size: "1024x1024",
      quality: "standard",
      n: 1,
    });
    const url = response.data.at(0)?.url;
    if (!url) {
      throw new Error("Error generating thumbnail!");
    }
    const imageResponse = await fetch(url);
    const buffer = await imageResponse.arrayBuffer();
    const base64String = Buffer.from(buffer).toString("base64");
    const imageUrl = getImageUrl(base64String, prompt);
    return imageUrl;
  } catch (error) {
    console.error("Error generating or uploading image:", error);
    throw new Error("Error generating or uploading image.");
  }
};
