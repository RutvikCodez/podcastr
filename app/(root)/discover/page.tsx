import SearchBar from "@/components/discover/SearchBar";
import PodcastCard from "@/components/reuseable/PodcastCard";
import { podcastDataType } from "@/utils/type";
import React from "react";

const page = async ({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getPodcastBySearch`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ podcastPrompt: search || "" }),
    }
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const podcastData: podcastDataType[] = await response.json();
  return (
    <div className="flex flex-col gap-9 text-white-1">
      <SearchBar />
      <div className="flex flex-col gap-9">
        <h1 className="font-bold text-1">
          {!search ? "Discover Trending Podcasts" : "Search results for:"}
          {search && <span className="text-white-2">{search}</span>}
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {podcastData.map((podCast) => (
          <PodcastCard key={podCast.id} {...podCast} />
        ))}
      </div>
    </div>
  );
};

export default page;
