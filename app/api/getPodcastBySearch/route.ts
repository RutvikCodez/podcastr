import Podcast from "@/models/podcast";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { podcastPrompt } = await req.json();
  try {
    if (podcastPrompt === "") {
      const allPodcasts = await Podcast.find();
      return new NextResponse(JSON.stringify(allPodcasts), { status: 200 });
    }
    const titleSearch = await Podcast.find({
      title: podcastPrompt,
    });
    if (titleSearch.length === 0) {
      return new NextResponse("Podcast not found!", { status: 404 });
    }
    return new NextResponse(JSON.stringify(titleSearch), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error!", { status: 500 });
  }
};
