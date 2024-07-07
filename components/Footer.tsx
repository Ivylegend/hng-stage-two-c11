import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="bg-[#FEEAF0] w-full px-20 py-12 flex justify-between items-start">
      <div>Logo</div>
      <ul className="flex flex-col gap-5">
        <li className="title font-medium capitalize mb-4">HELP</li>
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
      <ul className="flex flex-col gap-5">
        <li className="title font-medium capitalize mb-4">JANORE</li>
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
      <ul className="flex flex-col gap-5">
        <li className="title font-medium capitalize mb-4">MORE INFO</li>
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
      <ul className="flex flex-col gap-5">
        <li className="title font-medium capitalize mb-4">LANGUAGE</li>
        <li className="text-[#1E1B1B] cursor-pointer hover:text-black hover:font-semibold text-sm">
          English
        </li>
      </ul>
      <ul className="flex flex-col gap-5">
        <li className="title font-medium capitalize mb-4">FOLLOW US</li>
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
    </div>
  );
};
