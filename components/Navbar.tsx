"use client";

import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="hidden md:block px-5 sm:px-10 lg:px-20 py-2 w-full">
      <div className="flex items-center justify-between my-5">
        <p>Shipping</p>
        {/* <p className={`capitalize font-normal text-[#1E1B1B] text-4xl ${italiana.className}`}>JANORE</p> */}
        <Link href="/">
          <img src="/assets/JANORE.svg" alt="logo" />
        </Link>
        <div className="flex items-center gap-3">
          <p className="cursor-pointer">Nk Harry</p>
          <img
            src="/assets/down-arrow.png"
            alt="chevron down"
            className="cursor-pointer"
          />
          <img
            className="cursor-pointer"
            src="/assets/carticon.svg"
            alt="cart-icon"
          />
          <img
            className="cursor-pointer"
            src="/assets/heart-vector.svg"
            alt="heart-icon"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <span>
          <p className="flex items-center text-xs lg:text-base gap-1">
            Language: EN <img src="/assets/down-arrow.png" alt="chevron down" />
          </p>
        </span>
        <div className="flex items-center gap-4 lg:gap-8">
          {navLinks.map((item) => {
            const isActive =
              pathName === item.url || pathName.startsWith(`${item.url}/`);

            return (
              <Link
                className={cn(
                  "text-gray-500 text-sm lg:text-base pb-2 hover:text-black",
                  {
                    "text-black border-b-2 border-black": isActive,
                  }
                )}
                href={item.url}
                key={item.title}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex items-center gap-2 pb-1 border-b-2 border-[#1E1B1B]">
          <img src="/assets/search.png" alt="search icon" />
          <input
            type="text"
            placeholder="Search here..."
            className="border-none focus:outline-none focus:border-none focus-visible:border-none"
          />
        </div>
      </div>
    </nav>
  );
};
