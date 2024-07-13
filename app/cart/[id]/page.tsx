"use client";

// product/[id]/page.tsx
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getItemData } from "@/lib/dataFetcher";
import { Button } from "@/components/ui/button";
import { NumberCounter } from "@/components/Counter";
import { useEffect, useState } from "react";
import { SingleProduct } from "@/types/products";
import Loader from "@/components/Loader";

interface ItemPageProps {
  params: { id: string; image: string; description: string; price: number };
}

const CartPage: React.FC<ItemPageProps> = ({ params }) => {
  const [itemData, setItemData] = useState<SingleProduct | null>(null);
  const router = useRouter();
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItemData(params.id);
      if (!data) {
        router.push("/404"); // Redirect to 404 page if data not found
      } else {
        setItemData(data);
      }
    };

    fetchData();
  }, [params.id, router]);

  if (!itemData) {
    return <Loader />; // or a loading spinner
  }

  const imageUrl = `https://api.timbu.cloud/images/${itemData.photos[0].url}`;

  const totalPrice = itemData.current_price * count;

  return (
    <div>
      <hr className="w-full hidden md:block h-[1px] my-6 bg-gray-300" />
      <div className="py-10 px-5 sm:px-10 md:px-20 flex flex-col lg:flex-row items-start gap-10 md:gap-[72px] justify-center">
        <div className="w-full md:w-fit">
          <h2 className="mb-4 font-medium text-xl">MY CART</h2>
          <div className="border-t border-b border-gray-200 py-4 flex flex-col w-full md:flex-row justify-between md:w-[650px]">
            <div className="flex gap-4 md:gap-10 items-start">
              <img
                src={imageUrl}
                alt="woman fashion"
                width={102}
                height={112}
                className="object-cover"
              />
              <div className="flex flex-col gap-3 w-full justify-between">
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
                  <div className="">₦{itemData.current_price}</div>
                </div>
                {/* Counter */}
                <NumberCounter onCountChange={setCount} />

                {/* for mobile */}
                <div className="flex flex-row md:hidden w-full gap-2 mt-5 justify-between">
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
            <p>₦{itemData.current_price}</p>
          </div>
          <div className="py-4 flex justify-between">
            <p>Sub-total</p>
            <p>₦{totalPrice}</p>
          </div>
          {/* Disable checkout button if count is 0 */}
          {count > 0 ? (
            <Link href={`/checkout/${itemData.id}?totalPrice=${totalPrice}`}>
              <Button className="w-full rounded-none my-6">CHECKOUT</Button>
            </Link>
          ) : (
            <Button className="w-full rounded-none my-6" disabled>
              CHECKOUT
            </Button>
          )}

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
};

export default CartPage;
