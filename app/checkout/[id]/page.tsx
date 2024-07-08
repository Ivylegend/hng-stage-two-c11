// product/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
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

interface ItemPageProps {
  params: { id: string; image: string; description: string; price: number };
}

export default async function CheckoutPage({ params }: ItemPageProps) {
  const itemData = await getItemData(params.id);

  if (!itemData) {
    return notFound();
  }
  return (
    <Dialog>
      <div>
        <hr className="w-full h-[1px] my-6 bg-gray-300" />

        <DialogContent>
          <DialogHeader>
            <DialogDescription className="flex flex-col items-center justify-center gap-10">
              <div>
                <Image
                  src="/assets/eclipses.svg"
                  alt="eclipses"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium text-xl text-black">Your order was successful</p>
                <p className="leading-8">Thanks for your purchase!</p>
                <p className="leading-8">Your order number is #123-456</p>
                <p className="leading-8">You will receive an email comfirmining your order details</p>
              </div>
              <div className="flex flex-col items-center gap-5">
                <Button className="rounded-none">Track my order</Button>
                <Link href="/" className="underline">
                  Go back home
                </Link>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
        <div className="py-10 px-20 flex items-start gap-10 justify-center">
          <div className="w-3/5">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-medium text-xl">
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
                <AccordionTrigger className="font-medium text-xl">
                  Customers Address
                </AccordionTrigger>
                <AccordionContent className="space-y-5 my-5">
                  <div className="flex gap-4">
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
                  <div className="flex gap-4">
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

                  <div className="flex gap-4">
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
                <AccordionTrigger className="font-medium text-xl">
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

          <div className="w-1/5">
            <h2 className="mb-4">Cart Summary</h2>
            <div className="border-t border-b border-gray-200 py-4 flex flex-col justify-between gap-5">
              <div className="flex w-full justify-between">
                <p className="font-light text-sm">Item(s) total</p>
                <p>$1200</p>
              </div>
              <div className="flex w-full justify-between">
                <p className="font-light text-sm">Shipping Fees</p>
                <p>$100</p>
              </div>
              <div className="flex w-full justify-between">
                <p className="font-light text-sm">Delivery Fees</p>
                <p>$100</p>
              </div>
              <div className="flex w-full justify-between">
                <p className="font-light text-sm">Tax</p>
                <p>$10</p>
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
              <p>$1450</p>
            </div>

            <DialogTrigger className="w-full">
              <Button className="w-full rounded-none my-6">PAY $1450</Button>
            </DialogTrigger>
          </div>
        </div>
      </div>
    </Dialog>
  );
}