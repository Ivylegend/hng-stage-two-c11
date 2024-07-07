// product/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";
import { notFound } from "next/navigation";
import { getItemData } from "@/lib/dataFetcher";
import { ItemCarousel } from "@/components/ItemCarousel";
import { ItemAccordion } from "@/components/ItemAccordion";
import { Button } from "@/components/ui/button";

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
      <hr className="w-full h-[1px] my-6 bg-gray-300" />
      <div className="py-10 px-20">
        <div>
          {/* ROUTES */}
          <div className="flex gap-1 items-center mb-5">
            <Link href="/">
              <p className="text-[12px]">HOME {params.id} </p>
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
            <p className="text-[12px]">IMANI</p>
          </div>
          <div>
            <ItemCarousel image={itemData.image} />
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="flex w-full px-40 items-start gap-20 mt-32 mb-20">
          <div className="w-3/5">
            <ItemAccordion />
          </div>
          <div className="w-2/5 flex flex-col gap-5">
            <p className="font-medium text-lg">{itemData.name}</p>
            <p className="text-2xl font-semibold">${itemData.price}</p>

            {/* COLORS */}
            <p>Colors</p>
            <div className="flex gap-4">
              <div className="w-7 h-7 bg-red-500"></div>
              <div className="w-7 h-7 bg-gray-500"></div>
              <div className="w-7 h-7 bg-black"></div>
              <div className="w-7 h-7 bg-green-500"></div>
            </div>

            {/* SIZES */}
            <div>
              <span className="flex justify-between items-center">
                <p>Sizes</p>
                <p className="underline">Size Guide</p>
              </span>
              <div className="flex gap-4">
                <div className="w-7 h-7 border border-black text-center text-sm flex items-center justify-center">
                  XS
                </div>
                <div className="w-7 h-7 border border-black text-center text-sm flex items-center justify-center">
                  SM
                </div>
                <div className="w-7 h-7 border border-black text-center text-sm flex items-center justify-center">
                  M
                </div>
                <div className="w-7 h-7 border border-black text-center text-sm flex items-center justify-center">
                  L
                </div>
                <div className="w-7 h-7 border border-black text-center text-sm flex items-center justify-center">
                  XL
                </div>
              </div>
            </div>

            {/* COUNTER */}
            <div className="flex">
              <Button
                variant={"outline"}
                className="rounded-none w-7 h-7 border border-black text-sm flex items-center justify-center"
              >
                -
              </Button>
              <div className="w-7 h-7 border border-black text-center text-sm flex items-center justify-center">
                1
              </div>
              <Button
                variant={"outline"}
                className="rounded-none w-7 h-7 border border-black text-sm flex items-center justify-center"
              >
                +
              </Button>
            </div>

            {/* BUTTON */}
            <div className="flex items-center gap-2 justify-between">
              <Button className="rounded-none w-3/4">
                <Link href={`/cart/${itemData.id}`}>ADD TO CART</Link>
              </Button>
              <Button
                className="rounded-none w-1/6 bg-transparent"
                variant={"outline"}
              >
                <Heart />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
