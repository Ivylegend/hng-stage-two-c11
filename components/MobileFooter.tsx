import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";

export const MobileFooter = () => {
  return (
    <div className="flex flex-col gap-5 px-5 py-12 bg-[#FEEAF0] md:hidden">
      <div className="flex flex-col w-full gap-4 items-center justify-center">
        <Image src="/assets/JANORE.svg" alt="logo" width={100} height={100} />
        <p className="text-xs text-center">Redefining Luxury</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-medium text-lg">
            Help
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-5">
              <li className="text-[#1E1B1B] cursor-pointer hover:text-black hover:font-semibold text-sm">
                FAQs
              </li>
              <li className="text-[#1E1B1B] cursor-pointer hover:text-black hover:font-semibold text-sm">
                Size Guide
              </li>
              <li className="text-[#1E1B1B] cursor-pointer hover:text-black hover:font-semibold text-sm">
                Shipping
              </li>
              <li className="text-[#1E1B1B] cursor-pointer hover:text-black hover:font-semibold text-sm">
                Return & Exchange
              </li>
              <li className="text-[#1E1B1B] cursor-pointer hover:text-black hover:font-semibold text-sm">
                Contact Us
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-medium text-lg">
            JAMORE
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-5">
              <li className="text-[#1E1B1B] cursor-pointer hover:text-black hover:font-semibold text-sm">
                About Us
              </li>
              <li className="text-[#1E1B1B] cursor-pointer hover:text-black hover:font-semibold text-sm">
                Our Stores
              </li>
              <li className="text-[#1E1B1B] cursor-pointer hover:text-black hover:font-semibold text-sm">
                Blog
              </li>
              <li className="text-[#1E1B1B] cursor-pointer hover:text-black hover:font-semibold text-sm">
                Career
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-medium text-lg">
            MORE INFO
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-5">
              <li className="text-[#1E1B1B] cursor-pointer hover:text-black hover:font-semibold text-sm">
                Account
              </li>
              <li className="text-[#1E1B1B] cursor-pointer hover:text-black hover:font-semibold text-sm">
                Wishlist
              </li>
              <li className="text-[#1E1B1B] cursor-pointer hover:text-black hover:font-semibold text-sm">
                Track my order
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-medium text-lg">
            LANGUAGE
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-5">
              <li className="text-[#1E1B1B] cursor-pointer hover:text-black hover:font-semibold text-sm">
                English
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-medium text-lg">
            FOLLOW US
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-5">
              <li className="cursor-pointer">
                <FaTiktok />
              </li>
              <li className="cursor-pointer">
                <MdFacebook />
              </li>
              <li className="cursor-pointer">
                <FaInstagram />
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex items-center justify-center">
        <p className="text-center font-thin">All Rights Reserved</p>
      </div>
    </div>
  );
};
