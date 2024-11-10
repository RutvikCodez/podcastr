import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import RightArrow from "@/public/icons/right-arrow.svg";
import Header from "./Header";
import Carousel from "./Carousel";
import { apiCall } from "@/utils/apiCall";
import { TopPodcastersProps } from "@/utils/type";
import { redirect } from "next/navigation";
import Image from "next/image";

const RightSidebar = async () => {
  const user = await currentUser();
  const topPocasts: TopPodcastersProps[] = await apiCall(
    "getTopUserByPodcastCount"
  );
  return (
    <section className="sticky right-0 top-0 flex w-full flex-col overflow-y-hidden border-none bg-black-1 p-8 max-xl:hidden text-white-1">
      <SignedIn>
        <Link href={`/profile/${user?.id}`} className="flex gap-3 pb-12">
          <UserButton />
          <div className="flex w-full items-center justify-between ">
            <h1 className="text-3 truncate font-semibold">
              {user?.firstName} {user?.lastName}
            </h1>
            <RightArrow />
          </div>
        </Link>
      </SignedIn>
      <section>
        <Header title="Fans like you" />
        <Carousel fansLikeDetails={topPocasts} />
      </section>
      <section className="flex flex-col gap-8 pt-12">
        <Header title="Top Podcasters" />
        {topPocasts.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer justify-between"
            onClick={() =>
              redirect(`/podcast/${item.podcast.at(0)!.podcastId}`)
            }
          >
            <figure className="flex items-center gap-2">
              <Image
                src={item.imageUrl}
                alt={item.name}
                height={44}
                width={44}
                className="aspect-square rounded-lg"
              />
              <h2 className="text-3 font-semibold text-white-1">{item.name}</h2>
            </figure>
            <div className="flex items-center">
              <p className="text-4 font-normal">{item.totalPodcasts} podcasts</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default RightSidebar;
