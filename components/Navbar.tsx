"use client";

import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Italiana } from "next/font/google";

const italiana = Italiana({ subsets: ["latin"], variable: "--font-sans", weight: "400" });

export const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="px-20 py-2 w-full">
      <div className="flex items-center justify-between my-5">
        <p>Shipping</p>
        {/* <p className={`capitalize font-normal text-[#1E1B1B] text-4xl ${italiana.className}`}>JANORE</p> */}
        <img src="/assets/JANORE.svg" alt="" />
        <div className="flex items-center gap-4">
          <p>Nk Harry</p>
          <ChevronDown />
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <span>
          <p className="flex items-center gap-1">
            Language: EN <ChevronDown />
          </p>
        </span>
        <div className="flex items-center gap-8">
          {navLinks.map((item) => {
            const isActive =
              pathName === item.url || pathName.startsWith(`${item.url}/`);

            return (
              <Link
                className={cn("text-gray-500 pb-2 hover:text-black", {
                  "text-black border-b-2 border-black": isActive,
                })}
                href={item.url}
                key={item.title}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="flex items-end gap-2 pb-2 border-b-2 border-black">
          <Search />
          <input type="text" placeholder="Search here..." className="border-none focus-within:border-none focus:border-none focus-visible:border-none" />
          <p></p>
        </div>
      </div>
    </nav>
  );
};
