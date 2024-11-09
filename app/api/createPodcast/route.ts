import Podcast from "@/models/podcast";
import { connectToDb } from "@/utils/database";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const {
    podcastTitle,
    voiceType,
    podcastDescription,
    voicePrompt,
    imagePrompt,
    audioUrl,
    imageUrl,
  } = await req.json();
  try {
    await connectToDb();
    const { userId } = getAuth(req);
    const newPodcast = new Podcast({
      creator: userId,
      title: podcastTitle,
      description: podcastDescription,
      audioUrl: audioUrl,
      imageUrl: imageUrl,
      voiceType: voiceType,
      voicePrompt: voicePrompt,
      imagePrompt: imagePrompt,
    });
    await newPodcast.save();
    return new NextResponse(JSON.stringify(newPodcast), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to create new podcast", { status: 500 });
  }
};
