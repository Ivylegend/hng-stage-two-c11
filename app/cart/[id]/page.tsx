// product/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getItemData } from "@/lib/dataFetcher";
import { Button } from "@/components/ui/button";

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
      <div className="py-10 px-5 sm:px-10 md:px-20 flex flex-col md:flex-row items-start gap-10 justify-center">
        <div className="">
          <h2 className="mb-4">MY CART</h2>
          <div className="border-t border-b border-gray-200 py-4 flex flex-col md:flex-row w-full justify-between md:w-[650px]">
            <div className="flex gap-10">
              <Image
                src={itemData.image}
                alt="woman fashion"
                width={150}
                height={150}
              />
              <div className="flex flex-col justify-between">
                <p>{itemData.name}</p>
                <div className="flex gap-4">
                  <p>Color: </p>
                  <div className="w-5 h-5 border bg-black"></div>
                </div>
                <div className="flex gap-4">
                  <p>Size: </p>
                  <div className="w-5 h-5 border border-black text-center text-sm flex items-center justify-center">
                    M
                  </div>
                </div>
                <div className="flex gap-4">
                  <p>Price: </p>
                  <div className="">$1200</div>
                </div>
                <div className="flex">
                  <Button
                    variant={"outline"}
                    className="rounded-none w-7 h-7 border text-sm flex items-center justify-center"
                  >
                    -
                  </Button>
                  <div className="w-7 h-7 border  text-center text-sm flex items-center justify-center">
                    1
                  </div>
                  <Button
                    variant={"outline"}
                    className="rounded-none w-7 h-7 border text-sm flex items-center justify-center"
                  >
                    +
                  </Button>
                </div>
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
            <div className="hidden md:flex flex-row md:flex-col mt-5 md:mt-0 justify-between">
              <p className="underline text-xs sm:text-sm md:text-base cursor-pointer">
                Remove
              </p>
              <p className="underline text-xs sm:text-sm md:text-base cursor-pointer">
                Add to wishlist
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/5">
          <h2 className="mb-4">Cart Summary</h2>
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
          <div className="border border-[#F0D3DC] bg-[#f7eef1] min-h-20 p-5">
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
