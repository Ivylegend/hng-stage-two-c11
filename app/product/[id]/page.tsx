// product/[id]/page.tsx
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getItemData } from "@/lib/dataFetcher";
import { ItemCarousel } from "@/components/ItemCarousel";
import { ItemAccordion } from "@/components/ItemAccordion";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/ImageCard";
import { NumberCounter } from "@/components/Counter";

interface ItemPageProps {
  params: { id: string; image: string; description: string; price: number };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const itemData = await getItemData(params.id);

  if (!itemData) {
    return notFound();
  }
  return (
    <div>
      <hr className="w-full hidden md:block h-[1px] my-6 bg-gray-300" />
      <div className="py-10 px-5 sm:p-10 md:px-20">
        <div className="px-0 sm:px-5">
          {/* ROUTES */}
          <div className="hidden md:flex gap-1 items-center mb-5">
            <Link href="/">
              <p className="text-[12px]">HOME</p>
            </Link>
            <ChevronRight size={16} />
            <Link href="/shop">
              <p className="text-[12px]">SHOP</p>
            </Link>
            <ChevronRight size={16} />
            <Link href="/dresses">
              <p className="text-[12px]">DRESSES</p>
            </Link>
            <ChevronRight size={16} />
            <p className="text-[14px] font-bold uppercase">{itemData.name}</p>
          </div>
          <div>
            <ItemCarousel image={itemData.image} />
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="flex flex-col-reverse md:flex-row w-full md:px-10 lg:px-40 md:items-start gap-20 mt-16 md:mt-32 mb-20">
          <div className="w-full md:w-3/5">
            <ItemAccordion />
          </div>
          <div className="w-full md:w-2/5 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">{itemData.name}</p>
              <p className="font-medium text-lg text-[#606060]">
                ${itemData.price}
              </p>
            </div>

            {/* COLORS */}
            <div className="flex flex-col gap-2">
              <p className="font-medium">Colors</p>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-red-500"></div>
                <div className="w-8 h-8 bg-gray-500"></div>
                <div className="w-8 h-8 bg-black"></div>
                <div className="w-8 h-8 bg-green-500"></div>
              </div>
            </div>

            {/* SIZES */}
            <div className="flex flex-col gap-2">
              <span className="flex justify-between items-center">
                <p className="font-medium">Sizes</p>
                <p className="underline">Size Guide</p>
              </span>
              <div className="flex gap-2">
                <div className="w-8 h-8 border border-black text-center text-[10px] flex items-center justify-center">
                  XS
                </div>
                <div className="w-8 h-8 border border-black text-center text-[10px] flex items-center justify-center">
                  S
                </div>
                <div className="w-8 h-8 border border-black text-center text-[10px] flex items-center justify-center">
                  M
                </div>
                <div className="w-8 h-8 border border-black text-center text-[10px] flex items-center justify-center">
                  L
                </div>
                <div className="w-8 h-8 border border-black text-center text-[10px] flex items-center justify-center">
                  XL
                </div>
              </div>
            </div>

            {/* COUNTER */}
            <div className="flex flex-col gap-2">
              <p className="font-medium">Quantity</p>
              <NumberCounter />
            </div>

            {/* BUTTON */}
            <div className="flex items-center gap-3 justify-between">
              <Button className="rounded-none w-full">
                <Link href={`/cart/${itemData.id}`}>ADD TO CART</Link>
              </Button>
              <Button
                className="rounded-none w-1/6 bg-transparent"
                variant={"outline"}
              >
                <img
                  className="cursor-pointer"
                  src="/assets/heart-vector.svg"
                  alt="heart-icon"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="mt-20 mb-10 md:my-20">
          <h2 className="font-medium text-lg sm:text-xl md:text-2xl mb-5">
            WE THINK YOU&apos;LL LOVE THIS
          </h2>
          <div className="flex overflow-x-auto gap-5 md:gap-0 md:flex-wrap justify-between">
            <ImageCard name="suit jackets" image="/assets/suit-jacket.png" />
            <ImageCard name="jumpsuit" image="/assets/image11.png" />
            <ImageCard name="loungewear" image="/assets/image12.png" />
            <ImageCard name="sweats" image="/assets/image5.png" />
          </div>
        </div>
        
      </div>
    </div>
  );
}
