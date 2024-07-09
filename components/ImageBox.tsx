import Link from "next/link";

interface ImageBoxProps {
  image: string;
  id: string;
  checkoutLink: string;
  name: string;
  description: string;
  backgroundColor1?: string;
  backgroundColor2?: string;
}

export const ImageBox: React.FC<ImageBoxProps> = ({
  image,
  id,
  checkoutLink,
  name,
  description,
  backgroundColor1,
  backgroundColor2,
}) => {
  return (
    <div className="hover:shadow-lg cursor-pointer transition-shadow hover:rounded-md ">
      <div className="relative w-full h-[200px] sm:w-[300px] sm:h-[400px]">
        <div className="w-full h-full">
          <Link href={`/product/${id}`} className="w-full">
            <img
              src={image}
              alt="fashion women"
              className="w-full h-[200px] sm:h-full sm:w-auto object-cover object-top"
            />
          </Link>
        </div>
        <div className="hidden absolute z-10 bg-white rounded-full w-10 h-10 cursor-pointer right-3 top-3 md:flex items-center justify-center">
          <img
            className="cursor-pointer"
            src="/assets/heart-vector.svg"
            alt="heart-icon"
          />
        </div>
      </div>

      <div className="p-3 flex flex-col gap-1 items-start">
        <p className="font-semibold text-xl">{name}</p>
        <p className="text-[#7E7E7E] text-sm md:text-normal">{description}</p>
        <p className="text-lg sm:text-xl md:text-2xl md:font-semibold">$150</p>

        {/* Conditionally render the divs with dynamic background colors */}
        <div className="flex gap-2">
          {backgroundColor1 && (
            <div
              style={{ backgroundColor: backgroundColor1 }}
              className="w-6 h-6 border border-black"
            ></div>
          )}
          {backgroundColor2 && (
            <div
              style={{ backgroundColor: backgroundColor2 }}
              className="w-6 h-6 border border-gray-500"
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};
