import { getImageUrl } from "@/utils/getImageUrl";
import { NextRequest, NextResponse } from "next/server";
import OpenAi from "openai";
import { SpeechCreateParams } from "openai/resources/audio/speech.mjs";

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY, // Use server-side environment variable
});

export const POST = async (req: NextRequest) => {
  const { input, voice } = await req.json();
  try {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: voice as SpeechCreateParams["voice"],
      input: input,
    });
    const buffer = await mp3.arrayBuffer();
    const base64String = Buffer.from(buffer).toString("base64");
    const audioUrl = getImageUrl(base64String, input);
    return new NextResponse(JSON.stringify(audioUrl), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error!", { status: 500 });
  }
};
