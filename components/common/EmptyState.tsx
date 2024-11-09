import { emptyStateType } from "@/utils/type";
import EmptyStateIcon from "@/public/icons/emptyState.svg";
import Discover from "@/public/icons/discover.svg";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const EmptyState = ({ buttonLink, buttonText, title }: emptyStateType) => {
  return (
    <section className="flex justify-center items-center size-full flex-col gap-3 text-white-1">
      <EmptyStateIcon />
      <div className="flex justify-center items-center w-full max-w-[254px] flex-col gap-3 text-3 text-center font-medium ">
        <h1>{title}</h1>
        <p className="text-white-2">
          Try adjuting your search to find what you are looking for
        </p>
        <Button className="bg-orange-1">
          <Link href={buttonLink} className="gap-1 flex">
            <Discover />
            <h1 className="text-3 font-extrabold">{buttonText}</h1>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default EmptyState;
