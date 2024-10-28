import { podcastDataType } from "@/utils/type";
import Image from "next/image";
import React from "react";

const PodcastCard = ({ description, imgURL, title }: podcastDataType) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image src={imgURL} alt={title} width={174} height={174} className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]" />
        <div className="flex flex-col">
          <h1 className="text-3 truncate font-bold text-white-1 leading-normal">
            {title}
          </h1>
          <h2 className="text-4 truncate text-white-4 font-normal leading-normal">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;