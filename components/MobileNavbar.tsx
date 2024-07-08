import { Search } from "lucide-react";
import React from "react";
import { MdMenu } from "react-icons/md";
import { NavSheet } from "./NavSheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const MobileNavbar = () => {
  return (
    <Sheet>
      <div className="flex items-center justify-between px-5 py-2 shadow-lg md:hidden sticky top-0 z-20 bg-white w-full">
        <SheetTrigger asChild>
          <MdMenu size={32} />
          {/* <Button variant="outline">Open</Button> */}
        </SheetTrigger>
        <img src="/assets/JANORE.svg" alt="logo" />
        <div className="flex items-center gap-2">
          <Search size={20} />
          <img src="/assets/carticon.svg" alt="logo" />
        </div>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </div>
    </Sheet>
  );
};
