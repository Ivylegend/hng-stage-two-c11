import Image from "next/image";

export const ImageCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="w-[250px] md:w-[300px] flex flex-col gap-4 pb-8 items-center hover:shadow-lg cursor-pointer transition-shadow hover:rounded-md">
      <div className="object-contain h-[200px] w-[250px] md:h-[400px] md:w-[300px]">
        <img
          src={image}
          alt="woman"
          className="w-[250px] h-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold text-xl uppercase">{name}</p>
        <p className="underline uppercase cursor-pointer">SHOP NOW</p>
      </div>
    </div>
  );
};
