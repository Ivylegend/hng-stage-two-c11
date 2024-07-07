import { CTA } from "@/components/CTA";
import { ImageBox } from "@/components/ImageBox";
import { ImageCard } from "@/components/ImageCard";
import { PaginationBox } from "@/components/PaginationBox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { imageDetails } from "@/constants";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main mt-10">
      <div className="px-20">
        {/* HERO */}
        <div className="flex items-center justify-center">
          <Image src="/assets/image2.png" alt="girl" width={400} height={460} />
          <Image src="/assets/image3.png" alt="girl" width={400} height={460} />
          <Image src="/assets/image4.png" alt="girl" width={400} height={460} />
        </div>

        <div className="my-5 py-5">
          <div className="flex justify-between items-center my-8">
            <div className="flex gap-4">
              <span className="flex gap-1 cursor-pointer text-[#1E1B1B]">
                Colour <ChevronDown />
              </span>
              <span className="flex gap-1 cursor-pointer text-[#1E1B1B]">
                Size <ChevronDown />
              </span>
              <span className="flex gap-1 cursor-pointer text-[#1E1B1B]">
                Length <ChevronDown />
              </span>
              <span className="flex gap-1 cursor-pointer text-[#1E1B1B]">
                Price <ChevronDown />
              </span>
              <span className="flex gap-1 cursor-pointer text-[#1E1B1B]">
                Availability <ChevronDown />
              </span>
            </div>
            <div className="flex items-end gap-2">
              <p>Sort by:</p>
              <Select>
                <SelectTrigger className="w-[100px] h-8 rounded-none">
                  <SelectValue placeholder="Latest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Latest</SelectItem>
                  <SelectItem value="dark">Weekly</SelectItem>
                  <SelectItem value="system">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-y-16">
            {imageDetails.map((item, index) => (
              <ImageBox
                key={index}
                id={item.id}
                image={item.image}
                checkoutLink=""
              />
            ))}
          </div>
          {/* PAGINATION */}
          <div className="my-8 flex justify-between w-full gap-5">
            <p className="w-1/2">5 rows per page</p>
            <PaginationBox />
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="my-20">
          <h2 className="font-medium text-2xl mb-5">
            MORE CATEGORIES TO EXPLORE
          </h2>
          <div className="flex flex-wrap justify-between">
            <ImageCard name="suit jackets" image="/assets/image2.png" />
            <ImageCard name="jumpsuit" image="/assets/image11.png" />
            <ImageCard name="longwear" image="/assets/image12.png" />
            <ImageCard name="sweats" image="/assets/image5.png" />
          </div>
        </div>
      </div>
      <CTA />
    </main>
  );
}
