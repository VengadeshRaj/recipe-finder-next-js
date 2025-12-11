import Image from "next/image";
import FoodType from "@/app/images/food-type-background.jpg";

export default function FoodTypeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative font-sans flex flex-col items-center text-white h-screen justify-center font-bold gap-5">
      <Image
        src={FoodType}
        alt="Different food types"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        {children}
      </div>
    </div>
  );
}
