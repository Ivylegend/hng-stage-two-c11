// components/ItemCarousel.tsx
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ItemCarouselProps {
  images: string[];
}

export function ItemCarousel({ images }: ItemCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full p-0"
    >
      <CarouselContent className="">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="pl-0 md:basis-1/2 gap-0 lg:basis-1/3"
          >
            <div className="">
              <img
                src={image}
                alt={`Image ${index + 1}`}
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
