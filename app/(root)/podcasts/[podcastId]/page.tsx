import React from "react";
import Headphone from "@/public/icons/headphone.svg";
import { apiCall } from "@/utils/apiCall";
import { podcastDataType } from "@/utils/type";
import PodcastDetailPlayer from "@/components/podcast/PodcastDetailPlayer";
import { fetchSimilarPodcasts } from "@/utils/fetchSimilarPodcast";
import LoaderSpinner from "@/components/common/LoaderSpinner";
import PodcastCard from "@/components/reuseable/PodcastCard";

const page = async ({ params }: { params: { podcastId: string } }) => {
  // get userid from clerk and check wheather it is similar to the podcast user id or not
  const podcast: podcastDataType = await apiCall(
    `/getPodcastById/${params.podcastId}`
  );
  const similarPodcasts: podcastDataType[] = await fetchSimilarPodcasts(
    params.podcastId
  );
  if (!similarPodcasts || !podcast) {
    return <LoaderSpinner />;
  }
  const isOwner: boolean = false;
  return (
    <section className="flex w-full flex-col text-white-1">
      <header className="mt-9 flex items-center justify-between">
        <h1 className="font-bold text-1">Currently Playing</h1>
        <figure className="flex gap-3">
          <Headphone />
          <h2 className="text-3 font-bold">{podcast.views}</h2>
        </figure>
      </header>
      <PodcastDetailPlayer {...podcast} isOwner={isOwner} />
      <p className="text-white-2 text-3 font-medium max-md:text-center pb-8 pt-[45px]">
        {podcast.description}
      </p>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-5">Transcript</h1>
          <p className="text-3 font-medium text-white-2">
            {podcast.voicePrompt}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-5">Thumbnail Prompt</h1>
          <p className="text-3 font-medium text-white-2">
            {podcast.imagePrompt}
          </p>
        </div>
      </div>
      <section className="mt-8 flex flex-col gap-5">
        <h1 className="text-1 font-bold">Similar Podcast</h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {similarPodcasts.map((podCast) => (
            <PodcastCard key={podCast.id} {...podCast} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default page;
