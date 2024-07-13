"use client";

import { CTA } from "@/components/CTA";
import { ImageBox } from "@/components/ImageBox";
import { ImageCard } from "@/components/ImageCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product, ProductsResponse } from "@/types/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getProducts } from "@/lib/actions";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const images = [
    "/assets/big-jacket.png",
    "/assets/image3.png",
    "/assets/image4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % images.length);
    }, 5000); // Change the interval to match your animation duration

    return () => clearInterval(interval);
  }, [images.length]);

  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data: ProductsResponse = await getProducts(
          currentPage,
          itemsPerPage
        );
        console.log("Fetched Data:", data); // Log the fetched data
        setProducts(data.items);
        setTotal(data.total);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [currentPage]);

  const totalPages = Math.ceil(total / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const imageDetails = products.map((product) => ({
    id: product.id,
    image: product.photos[0]?.url ?? "",
    description: product.description ?? "",
    name: product.name,
    price: product.current_price[0]?.NGN[0] ?? 0,
    backgroundColor1: "white",
    backgroundColor2: "gray",
  }));

  return (
    <main className="main mt-10">
      <div className=" md:px-10 lg:px-20">
        {/* HERO */}
        <div>
          <div className="scroll-container">
            <div className="scroll-content">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`model ${index + 1}`}
                  width={400}
                  height={460}
                />
              ))}
              {/* Duplicate images to create the infinite scrolling effect */}
              {images.map((image, index) => (
                <Image
                  key={images.length + index}
                  src={image}
                  alt={`model duplicate ${index + 1}`}
                  width={400}
                  height={460}
                />
              ))}
            </div>
          </div>

          <div className="indicators">
            {images.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === currentStep ? "active" : ""}`}
              ></div>
            ))}
          </div>
        </div>

        <div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
        </div>

        <div className="my-5 py-5">
          {/* FOR DESKTOP ONLY */}
          <div className="hidden md:flex justify-between items-center my-8">
            <div className="flex gap-4">
              <span className="flex gap-1 items-center cursor-pointer text-[#1E1B1B]">
                Colour{" "}
                <img
                  src="/assets/down-arrow.png"
                  alt="chevron down"
                  className="cursor-pointer"
                />
              </span>
              <span className="flex gap-1 items-center cursor-pointer text-[#1E1B1B]">
                Size{" "}
                <img
                  src="/assets/down-arrow.png"
                  alt="chevron down"
                  className="cursor-pointer"
                />
              </span>
              <span className="flex gap-1 items-center cursor-pointer text-[#1E1B1B]">
                Length{" "}
                <img
                  src="/assets/down-arrow.png"
                  alt="chevron down"
                  className="cursor-pointer"
                />
              </span>
              <span className="flex gap-1 items-center cursor-pointer text-[#1E1B1B]">
                Price{" "}
                <img
                  src="/assets/down-arrow.png"
                  alt="chevron down"
                  className="cursor-pointer"
                />
              </span>
              <span className="flex gap-1 items-center cursor-pointer text-[#1E1B1B]">
                Availability{" "}
                <img
                  src="/assets/down-arrow.png"
                  alt="chevron down"
                  className="cursor-pointer"
                />
              </span>
            </div>
            <div className="flex items-center gap-2">
              <p>Sort by:</p>
              <Select>
                <SelectTrigger className="w-[100px] h-8 rounded-none">
                  <SelectValue placeholder="Latest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Latest</SelectItem>
                  <SelectItem value="dark">Weekly</SelectItem>
                  <SelectItem value="system">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* FOR MOBILE ONLY */}
          <div className="w-full flex justify-between items-center border border-[#D4D4D4] bg-[#F9F9F9] sticky top-12 z-20 md:hidden">
            <div className="border-r border-[#D4D4D4] w-1/2 flex justify-center gap-2 font-light items-center p-3">
              <img src="/assets/filter-edit.svg" alt="filter-icon" />
              Filter
            </div>
            <div className="w-1/2 flex items-center justify-center p-3 gap-2">
              Sort
              <img src="/assets/down-arrow.png" alt="chevron down" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 sm:flex my-8 md:my-0 flex-wrap justify-between gap-y-16 px-5 md:px-0">
            {imageDetails.map((item, index) => (
              <ImageBox
                key={index}
                id={item.id}
                image={item.image}
                checkoutLink=""
                description={item.description}
                name={item.name}
                price={item.price}
                backgroundColor1={item.backgroundColor1}
                backgroundColor2={item.backgroundColor2}
              />
            ))}
          </div>
          {/* PAGINATION */}
          {/* <div className="my-8 flex flex-col justify-center items-center sm:flex-row sm:justify-between w-full gap-5 px-5 md:px-0">
            <div className="w-full flex justify-center md:justify-normal items-center gap-2 sm:w-1/2">
              <p className=" text-center sm:text-start">4 rows per page</p>
              <img
                src="/assets/down-arrow.png"
                alt="chevron down"
                className="cursor-pointer"
              />
            </div>
            <PaginationBox />
          </div> */}

          <Pagination className="justify-center sm:justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={handlePreviousPage} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="bg-none border-0 w-full" isActive>
                  Page {currentPage} of {totalPages}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext onClick={handleNextPage} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        {/* <div>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div> */}

        {/* CATEGORIES */}
        <div className="mt-20 mb-10 md:my-20 px-5">
          <h2 className="font-medium text-lg sm:text-xl md:text-2xl mb-5">
            MORE CATEGORIES TO EXPLORE
          </h2>
          <div className="flex overflow-x-auto gap-5 md:gap-0 md:flex-wrap justify-between">
            <ImageCard name="suit jackets" image="/assets/suit-jacket.png" />
            <ImageCard name="jumpsuit" image="/assets/image11.png" />
            <ImageCard name="loungewear" image="/assets/image12.png" />
            <ImageCard name="sweats" image="/assets/image5.png" />
          </div>
        </div>
      </div>
      <CTA />
    </main>
  );
}
