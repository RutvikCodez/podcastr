import Podcast from "@/models/podcast";
import { connectToDb } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  try {
    const podcastID = params.id;
    await connectToDb();
    const podcast = await Podcast.findById(podcastID);
    if (!podcast) {
      return new NextResponse("Podcast Not Found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(podcast), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch podcast", { status: 500 });
  }
};

export const DELETE = async (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  try {
    const podcastID = params.id;
    await connectToDb();
    if (!podcastID) {
      return new NextResponse("ID Not Provided", { status: 400 });
    }
    const deletePodcast = await Podcast.findByIdAndDelete(podcastID);
    if (!deletePodcast) {
      return new NextResponse("Podcast Not Found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(deletePodcast), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to delete podcast", { status: 500 });
  }
};
