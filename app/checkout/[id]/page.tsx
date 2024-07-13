"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { getItemData } from "@/lib/dataFetcher";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SingleProduct } from "@/types/products";

interface ItemPageProps {
  params: { id: string; image: string; description: string; price: number };
}

const CheckoutPage: React.FC<ItemPageProps> = ({ params }) => {
  const [itemData, setItemData] = useState<SingleProduct | null>(null);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const router = useRouter();

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

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const totalPriceParam = query.get("totalPrice");
    if (totalPriceParam) {
      setTotalPrice(parseFloat(totalPriceParam));
    }
  }, []);

  if (!itemData) {
    return <div>Loading...</div>; // or a loading spinner
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Dialog>
      <div>
        <hr className="w-full hidden md:block h-[1px] my-6 bg-gray-300" />
        <DialogContent className="flex flex-col items-center ">
          <DialogHeader>
            <DialogDescription className="flex flex-col items-center justify-center gap-8 md:p-8">
              <div>
                <Image
                  src="/assets/eclipses.svg"
                  alt="eclipses"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium text-xl text-black mb-4">
                  Your order was successful
                </p>
                <p className="text-[#1E1B1B] font-normal text-center">
                  Thanks for your purchase!
                </p>
                <p className="text-[#1E1B1B] font-normal text-center">
                  Your order number is {itemData.unique_id}
                </p>
                <p className="text-[#1E1B1B] font-normal text-center">
                  You will receive an email confirming your order details
                </p>
              </div>
              <div className="flex flex-col items-center gap-5">
                <Button className="rounded-none py-3 px-6 w-[300px]">
                  Track my order
                </Button>
                <Link href="/" className="underline">
                  Go back home
                </Link>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
        <div className="py-10 px-5 sm:px-10 md:px-20 flex flex-col md:flex-row items-start gap-10 md:gap-[72px] justify-center">
          <div className="w-full md:w-[660px]">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-medium text-base sm:text-lg md:text-xl">
                  Delivery Options
                </AccordionTrigger>
                <AccordionContent>
                  <div className="border border-[#D4D4D4] py-5">
                    <RadioGroup
                      defaultValue="option-one"
                      className="flex flex-col"
                    >
                      <div className="flex items-center space-x-2 border-b border-[#D4D4D4] pb-5 mb-5 px-5">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">
                          International Shipping
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 px-5">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">
                          Local Delivery / Pickup
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-medium text-base sm:text-lg md:text-xl">
                  Customers Address
                </AccordionTrigger>
                <AccordionContent className="space-y-5 my-5">
                  <div className="flex gap-3 md:gap-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">First Name</Label>
                      <Input
                        type="text"
                        id="email"
                        placeholder="First Name"
                        className="rounded-none"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">Last Name</Label>
                      <Input
                        type="text"
                        id="email"
                        placeholder="Last Name"
                        className="rounded-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 md:gap-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">Country</Label>
                      <Input
                        type="text"
                        id="email"
                        placeholder="Country"
                        className="rounded-none"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">City</Label>
                      <Input
                        type="text"
                        id="email"
                        placeholder="City"
                        className="rounded-none"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">Zip Code</Label>
                      <Input
                        type="text"
                        id="email"
                        placeholder="Zip Code"
                        className="rounded-none"
                      />
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Address 1</Label>
                    <Input
                      type="text"
                      id="email"
                      placeholder="Address 1"
                      className="rounded-none"
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Address 2</Label>
                    <Input
                      type="text"
                      id="email"
                      placeholder="Address 2"
                      className="rounded-none"
                    />
                  </div>

                  <div className="flex gap-3 md:gap-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">Phone Number</Label>
                      <Input
                        type="number"
                        id="email"
                        placeholder="Phone Number"
                        className="rounded-none"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="rounded-none"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-medium text-base sm:text-lg md:text-xl">
                  Payment Methods
                </AccordionTrigger>
                <AccordionContent className="space-y-5">
                  <div className="border border-[#D4D4D4] py-5">
                    <RadioGroup
                      defaultValue="option-one"
                      className="flex flex-col"
                    >
                      <div className="flex items-center space-x-2 border-b border-[#D4D4D4] pb-5 px-5">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <div className="flex w-full justify-between items-center">
                          <Label htmlFor="option-one">
                            Debit / Credit Card
                          </Label>
                          <Image
                            src="/assets/methods.svg"
                            alt="card"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 pt-5 px-5">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <div className="flex w-full justify-between items-center">
                          <Label htmlFor="option-two">Paypal</Label>
                          <Image
                            src="/assets/paypal_logo.svg"
                            alt="card"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex gap-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">Card Number</Label>
                      <Input
                        type="text"
                        id="email"
                        placeholder="************"
                        className="rounded-none"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">Card Holder</Label>
                      <Input
                        type="text"
                        id="email"
                        placeholder="Card Holder"
                        className="rounded-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="month">Month</Label>
                      <Input
                        type="text"
                        id="month"
                        placeholder="Month"
                        className="rounded-none"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">Year</Label>
                      <Input
                        type="text"
                        id="email"
                        placeholder="Year"
                        className="rounded-none"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">CVV</Label>
                      <Input
                        type="text"
                        id="email"
                        placeholder="CVV"
                        className="rounded-none"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="w-full md:w-[300px]">
            <h2 className="mb-4 font-medium text-xl">Cart Summary</h2>
            <div className="border-t border-b border-gray-200 py-4 flex flex-col justify-between gap-5">
              <div className="flex w-full justify-between">
                <p className="font-light text-sm">Item(s) total</p>
                <p>{formatPrice(totalPrice || 0)}</p>
              </div>
              <div className="flex w-full justify-between">
                <p className="font-light text-sm">Shipping Fees</p>
                <p>{formatPrice(3000)}</p>
              </div>
              <div className="flex w-full justify-between">
                <p className="font-light text-sm">Delivery Fees</p>
                <p>{formatPrice(5500)}</p>
              </div>
              <div className="flex w-full justify-between">
                <p className="font-light text-sm">Tax</p>
                <p>{formatPrice(1000)}</p>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="promo">Enter Promotional Code</Label>
                <div className="flex">
                  <Input
                    type="text"
                    id="promo"
                    placeholder="Promo Code"
                    className="rounded-none"
                  />
                  <Button className="rounded-none">SUBMIT</Button>
                </div>
              </div>
            </div>
            <div className="py-4 flex justify-between">
              <p>Estimated-total</p>
              <p>{formatPrice(totalPrice ? totalPrice + 8500 : 0)}</p>
            </div>

            <DialogTrigger className="rounded-none py-3 px-6 w-[300px] bg-black text-white flex items-center justify-center">
              Place Order
            </DialogTrigger>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CheckoutPage;
