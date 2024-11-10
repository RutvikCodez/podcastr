import CreatePodcastForm from "@/components/createPodcast/CreatePodcastForm";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const { userId } = await auth();
  if (!userId) {
    <>You are not authorized!</>;
    return;
  }
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
