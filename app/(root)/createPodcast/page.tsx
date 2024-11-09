import CreatePodcastForm from "@/components/createPodcast/CreatePodcastForm";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col gap-12">
      <h1 className="text-1 leading-normal font-bold text-white-1">
        Create Podcasts
      </h1>
      <CreatePodcastForm />
    </section>
  );
};

export default page;
