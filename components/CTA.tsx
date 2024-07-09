import { RadioGroupItems } from "./RadioGroup";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const CTA = () => {
  return (
    <div className="w-full bg-[#F5F5F5] px-5 py-8 md:py-0 md:px-20 flex flex-col gap-12 sm:gap-[100px] md:flex-row md:h-[320px] sm:items-center justify-center">
      <div className="max-w-sm">
        <h3 className="font-medium text-xl mb-5">SIGN UP FOR JANORE UPDATES</h3>
        <p>
          Be in the know about the latest events, new collections and exciting
          special programs from Janore
        </p>
      </div>
      <div>
        <div className="mb-10">
          <p className="mb-2">Gender</p>
          <RadioGroupItems />
        </div>
        <div className="">
          <p className="mb-2">Email Sign-up</p>
          <span className="flex flex-col gap-4 sm:gap-0 sm:flex-row w-full max-w-sm sm:space-x-2">
            <input
              type="text"
              placeholder="Enter email"
              className="bg-transparent border-b pl-0 pb-2 border-black focus:ring-0 focus:outline-none w-full sm:w-[400px] px-5"
            />
            <Button className="py-3 px-4 bg-black rounded-none text-white w-full sm:w-[140px] hover:bg-gray-400 hover:text-black">
              SUBSCRIBE
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};
