import Link from "next/link";
import Image from "next/image";
import FoodTypeImage from "@/app/images/food-type-background.jpg";

export default function FoodType() {
  return (
       <div className="relative font-sans flex flex-col items-center text-white h-screen justify-center font-bold gap-5">
      <Image
        src={FoodTypeImage}
        alt="Different food types"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl mb-5">Select Your Food Type </h1>
        <div className="text-left">
        <Link href="food-type/veg" className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded text-3xl">
          <span>🍲</span> <div className="hover:underline">Veg</div>
        </Link>
        <Link href="food-type/non-veg" className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded text-3xl">
          <span>🍗</span> <div className="hover:underline">Non-Veg</div>
        </Link>
        </div>
      </div>

      </div>
  );
}
