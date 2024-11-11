"use client"
import { carouselProps } from "@/utils/type";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CarouselComponent = ({ fansLikeDetails }: carouselProps) => {
  const router = useRouter();
  return (
    <Carousel className="w-full flex flex-col gap-4 overflow-hidden" opts={{
      loop: true,
    }}>
      <CarouselContent className="flex">
        {fansLikeDetails.slice(0, 5).map((item, index) => (
          <CarouselItem key={index}>
            <figure
              className="relative flex h-fit aspect-square w-full flex-none cursor-pointer flex-col justify-end rounded-xl border-none"
              onClick={() => {
                router.push(`/podcast/${item.podcast.at(0)!.podcastId}`);
              }}
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="size-full absolute rounded-xl border-none"
              />
              <div className="glassmorphism-black relative z-10 flex flex-col rounded-b-xl p-4">
                <h2 className="text-6 font-semibold text-white-1">
                  {item.podcast.at(0)!.podcastTitle}
                </h2>
                <p className="text-white-2 text-4 font-normal">{item.name}</p>
              </div>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselComponent;
