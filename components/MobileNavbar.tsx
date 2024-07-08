import { Search } from "lucide-react";
import React from "react";
import { MdMenu } from "react-icons/md";

export const MobileNavbar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-2 shadow-lg md:hidden sticky top-0 z-20 bg-white w-full">
      <MdMenu size={32} />
      <img src="/assets/JANORE.svg" alt="logo" />
      <div className="flex items-center gap-5">
        <Search />
        <img src="/assets/carticon.svg" alt="logo" />
      </div>
    </div>
  );
};
