import { RadioGroupItems } from "./RadioGroup";

export const CTA = () => {
  return (
    <div className="w-full bg-[#F5F5F5] px-5 md:px-20 flex flex-col gap-10 md:flex-row h-[320px] items-center justify-center">
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
          <span className="flex w-full max-w-sm space-x-2">
            <input
              type="text"
              placeholder="Enter email"
              className="bg-transparent border-b-2 border-black w-[400px] px-5"
            />
            <button className="py-3 px-4 bg-black text-white w-[140px] hover:bg-gray-400 hover:text-black">
              SUBSCRIBE
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
