import Podcast from "@/models/podcast";
import { connectToDb } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { podcastID } = await req.json();
  try {
    await connectToDb();
    const podcast = await Podcast.findById(podcastID);
    if (!podcast) {
      return new NextResponse("Podcast not found", { status: 404 });
    }
    const voiceType = podcast.voiceType;
    const similarPodcasts = await Podcast.find({
      voiceType: { $regex: voiceType, $options: "i" },
    }).exec();
    return new NextResponse(JSON.stringify(similarPodcasts), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch podcasts", { status: 500 });
  }
};
