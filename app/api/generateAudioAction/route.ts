import { getImageUrl } from "@/utils/getImageUrl";
import { NextRequest, NextResponse } from "next/server";
import OpenAi from "openai";
import { SpeechCreateParams } from "openai/resources/audio/speech.mjs";

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});

export const GET = async (req: NextRequest) => {
  const { input, voice } = await req.json();
  try {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: voice as SpeechCreateParams["voice"],
      input: input,
    });
    const buffer = await mp3.arrayBuffer();
    const base64String = Buffer.from(buffer).toString("base64");
    const audioUrl = getImageUrl(base64String, "speech.mp3");
    return new NextResponse(JSON.stringify({ audioUrl }), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error generating audio", { status: 500 });
  }
};
