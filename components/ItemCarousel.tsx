import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
                className="w-[100%] h-[400px] object-cover object-top md:w-[420px] md:h-[460px]"
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
