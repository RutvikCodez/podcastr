"use client";
import Link from "next/link";
import React from "react";
import Logo from "@/public/icons/logo.svg";
import Home from "@/public/icons/home.svg";
import Discover from "@/public/icons/discover.svg";
import Microphone from "@/public/icons/microphone.svg";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const leftSidebarLinkData = [
  {
    route: "/",
    label: "Home",
    image: <Home />,
  },
  {
    route: "/discover",
    label: "Discover",
    image: <Discover />,
  },
  {
    route: "/createPodcast",
    label: "Create Podcast",
    image: <Microphone />,
  },
];

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex w-full flex-col justify-between border-none bg-black-1 py-8 pl-8 max-md:hidden">
      <nav className="flex flex-col gap-10">
        <Link
          href={"/"}
          className="flex cursor-pointer items-center gap-1 max-lg:justify-center"
        >
          <Logo />
          <h1 className="text-2 font-extrabold text-white-1 max-lg:hidden">
            Podcastr
          </h1>
        </Link>
        <div className="flex flex-col gap-6">
        {leftSidebarLinkData.map(({ image, label, route }, index) => {
          const isActive =
            pathname === route || pathname.startsWith(route + "/");
          return (
            <Link
              key={index}
              href={route}
              className={cn("flex gap-3 items-center max-lg:px-4 max-lg:justify-center py-4",
                {
                    "bg-nav-focus border-r-4 border-orange-1": isActive
                }
              )}
            >
              {image}
              <p>{label}</p>
            </Link>
          );
        })}
        </div>
      </nav>
    </section>
  );
};

export default LeftSidebar;
