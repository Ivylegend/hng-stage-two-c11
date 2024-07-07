import Image from "next/image";

export const ImageCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="w-[300px] flex flex-col gap-4 pb-8 items-center hover:shadow-lg cursor-pointer transition-shadow hover:rounded-md">
      <div className="object-contain h-[400px] w-[300px]">
        <Image
          src={image}
          width={300}
          height={400}
          alt="woman"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold text-xl uppercase">{name}</p>
        <p className="underline uppercase cursor-pointer">SHOP NOW</p>
      </div>
    </div>
  );
};
