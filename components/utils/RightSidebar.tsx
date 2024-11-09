import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import RightArrow from "@/public/icons/right-arrow.svg";
import Header from "./Header";
import Carousel from "./Carousel";

const RightSidebar = async () => {
  const user = await currentUser();
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
        <Carousel />
      </section>
    </section>
  );
};

export default RightSidebar;
