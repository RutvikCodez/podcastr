import Podcast from "@/models/podcast";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDb();
    const mostActiveUser = await Podcast.aggregate([
      {
        $group: { _id: "$creator", podcastCount: { $sum: 1 } },
      },
      {
        $sort: { podcastCount: -1 },
      },
      {
        $limit: 1,
      },
    ]);
    if (!mostActiveUser.length) {
      return new NextResponse("No podcasts found!", { status: 404 });
    }
    const userId = mostActiveUser[0]._id;
    const podcasts = await Podcast.find({ creator: userId });
    return new NextResponse(JSON.stringify(podcasts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch podcast!", { status: 500 });
  }
};
