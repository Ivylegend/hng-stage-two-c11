"use client"

import Link from "next/link";
import { useState } from "react";

interface ImageBoxProps {
  image: string;
  id: string;
  checkoutLink?: string;
  name: string;
  price: number;
  description?: string;
  backgroundColor1?: string;
  backgroundColor2?: string;
  className?: string;
}

export const ImageBox: React.FC<ImageBoxProps> = ({
  image,
  id,
  checkoutLink,
  name,
  price,
  description,
  backgroundColor1,
  backgroundColor2,
  className,
}) => {
  const [Color, setColor] = useState(false);

  const setLike = () => {
    setColor((prev) => !prev);
  };

  return (
    <div className="hover:shadow-lg cursor-pointer transition-shadow hover:rounded-md ">
      <div
        className={`relative w-full h-[200px] sm:w-[300px] sm:h-[400px] ${className}`}
      >
        <div className="w-full h-full">
          <Link href={`/product/${id}`} className="w-full">
            <img
              src={`https://api.timbu.cloud/images/${image}`}
              alt="fashion women"
              className="w-full h-[200px] sm:h-full sm:w-auto object-cover object-top"
            />
          </Link>
        </div>
        <div onClick={setLike} className={`hidden absolute z-10 ${Color ? "bg-red-400" : "bg-white"} rounded-full w-10 h-10 cursor-pointer right-3 top-3 md:flex items-center justify-center`}>
          <img
            className="cursor-pointer"
            src="/assets/heart-vector.svg"
            alt="heart-icon"
          />
        </div>
      </div>

      <div className="p-3 flex flex-col gap-1 items-start">
        <p className="font-semibold text-xl">{name}</p>
        <p className="text-[#7E7E7E] text-sm md:text-normal">{description}</p>
        <p className="text-lg sm:text-xl md:text-2xl md:font-semibold">₦{price}</p>

        {/* Conditionally render the divs with dynamic background colors */}
        <div className="flex gap-2">
          {backgroundColor1 && (
            <div
              style={{ backgroundColor: backgroundColor1 }}
              className="w-6 h-6 border border-black"
            ></div>
          )}
          {backgroundColor2 && (
            <div
              style={{ backgroundColor: backgroundColor2 }}
              className="w-6 h-6 border border-gray-500"
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};
