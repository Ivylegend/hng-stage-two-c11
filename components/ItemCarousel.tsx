import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ItemCarousel({ image }: { image: string }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full p-0"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 gap-0 lg:basis-1/3">
            <div className="">
              <img
                src={image}
                alt={image}
                className="w-[360px] h-[240px] object-cover object-top md:w-[420px] md:h-[460px]"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
