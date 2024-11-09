import Podcast from "@/models/podcast";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const podcasts = await Podcast.find();
    if (!podcasts) {
      return new NextResponse("No Podcast found!", { status: 404 });
    }
    return new NextResponse(JSON.stringify(podcasts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch podcast", { status: 500 });
  }
};
