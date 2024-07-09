// product/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getItemData } from "@/lib/dataFetcher";
import { Button } from "@/components/ui/button";
import { NumberCounter } from "@/components/Counter";

interface ItemPageProps {
  params: { id: string; image: string; description: string; price: number };
}

export default async function CartPage({ params }: ItemPageProps) {
  const itemData = await getItemData(params.id);

  if (!itemData) {
    return notFound();
  }

  return (
    <div>
      <hr className="w-full hidden md:block h-[1px] my-6 bg-gray-300" />
      <div className="py-10 px-5 sm:px-10 md:px-20 flex flex-col lg:flex-row items-start gap-10 md:gap-[72px] justify-center">
        <div className="">
          <h2 className="mb-4 font-medium text-xl">MY CART</h2>
          <div className="border-t border-b border-gray-200 py-4 flex flex-col md:flex-row w-full justify-between md:w-[650px]">
            <div className="flex gap-10 items-start">
              <Image
                src={itemData.images[0]}
                alt="woman fashion"
                width={102}
                height={112}
                className="object-cover"
              />
              <div className="flex flex-col gap-3 justify-between">
                <p className="font-medium text-base">{itemData.name}</p>
                <div className="flex gap-4 w-24 justify-between">
                  <p>Color: </p>
                  <div className="w-6 h-6 md:w-8 md:h-8 border bg-black"></div>
                </div>
                <div className="flex gap-4 w-24 justify-between">
                  <p>Size: </p>
                  <div className="w-6 h-6 md:w-8 md:h-8 border border-black text-center text-sm flex items-center justify-center">
                    M
                  </div>
                </div>
                <div className="flex gap-4 w-24 justify-between">
                  <p>Price: </p>
                  <div className="">${itemData.price}</div>
                </div>
                {/* Counter */}
                <NumberCounter />

                {/* for mobile */}
                <div className="flex flex-row md:hidden gap-2 mt-5 justify-between">
                  <p className="underline text-xs sm:text-sm md:text-base cursor-pointer">
                    Remove
                  </p>
                  <p className="underline text-xs sm:text-sm md:text-base cursor-pointer">
                    Add to wishlist
                  </p>
                </div>
              </div>
            </div>

            {/* for desktop */}
            <div className="hidden md:flex flex-row md:flex-col mt-5 md:mt-0 justify-between items-end">
              <p className="underline text-xs sm:text-sm cursor-pointer">
                Remove
              </p>
              <p className="underline text-xs sm:text-sm cursor-pointer">
                Add to wishlist
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:max-w-[300px]">
          <h2 className="mb-4 font-medium text-xl">Cart Summary</h2>
          <div className="border-t border-b border-gray-200 py-4 flex justify-between">
            <p>{itemData.name}</p>
            <p>${itemData.price}</p>
          </div>
          <div className="py-4 flex justify-between">
            <p>Sub-total</p>
            <p>$1200</p>
          </div>
          <Button className="w-full rounded-none my-6">
            <Link href={`/checkout/${itemData.id}`}>CHECKOUT</Link>{" "}
          </Button>

          {/* RETURNS */}
          <div className="border border-[#F0D3DC] bg-[#FEF7F9] min-h-[216px] min-w-[300px] p-5">
            <span className="flex items-center gap-2">
              <img src="/assets/box.png" alt="box" />
              <p className="font-medium text-sm">RETURNS</p>
            </span>
            <p className="text-sm text-[#1E1B1B] my-5 font-normal">
              Returns are accepted within 28 days for a full refund or exchange.
              We have return depots in Nigeria, London and Johanesburg. T&Cs
              apply
            </p>
            <a href="" className="text-sm underline">
              Click here for information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
