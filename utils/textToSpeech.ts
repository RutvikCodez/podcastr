import OpenAi from "openai";
import { SpeechCreateParams } from "openai/resources/audio/speech.mjs";
import { getImageUrl } from "./getImageUrl";

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});

export const textToSpeech = async (input: string, voice: string) => {
  try {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: voice as SpeechCreateParams["voice"],
      input: input,
    });
    const buffer = await mp3.arrayBuffer();
    const base64String = Buffer.from(buffer).toString("base64");
    const audioUrl = getImageUrl(base64String, input);
    return audioUrl;
  } catch (error) {
    console.error("Error generating or uploading audio:", error);
    throw new Error("Error generating or uploading audio.");
  }
};
