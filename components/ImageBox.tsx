import Link from "next/link";

interface ImageBoxProps {
  image: string;
  id: string;
  checkoutLink: string;
}

export const ImageBox: React.FC<ImageBoxProps> = ({
  image,
  id,
  checkoutLink,
}) => {
  return (
    <div className="hover:shadow-lg cursor-pointer transition-shadow hover:rounded-md">
      <div className="relative w-[150px] h-[200px] sm:w-[300px] sm:h-[400px] object-contain object-center">
        <Link href={`/product/${id}`}>
          <img
            src={image}
            alt="fashion women"
            className="w-auto h-full sm:h-full sm:w-auto object-cover"
          />
        </Link>
        <div className="absolute z-10 bg-white rounded-full w-10 h-10 cursor-pointer right-3 top-3 flex items-center justify-center">
        <img className="cursor-pointer" src="/assets/heart-vector.svg" alt="heart-icon" />
        </div>
      </div>

      <div className="p-3 flex flex-col gap-1 items-start">
        <p className="font-semibold text-xl">Imani</p>
        <p className="text-[#7E7E7E] text-sm md:text-normal">Short description of the dress</p>
        <p className="text-lg sm:text-xl md:text-2xl md:font-semibold">$150</p>
        {/* <Button className="bg-black p-3 uppercase text-white rounded-none w-[132px]">
          <Link href={checkoutLink}>add to cart</Link>
        </Button> */}
      </div>
    </div>
  );
};
