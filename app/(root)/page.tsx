import PodcastCard from "@/components/reuseable/PodcastCard";
import { podcastData } from "@/utils/constant";

export default function Home() {
  return (
    <div className="flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-1 leading-normal font-bold text-white-1">
          Trending Podcasts
        </h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {podcastData.map((podCast) => (
            <PodcastCard key={podCast.id} {...podCast} />
          ))}
        </div>
      </section>
    </div>
  );
}
