import Link from "next/link";
import Image from "next/image";
import FoodTypeImage from "@/app/images/food-type-background.jpg";

export default function FoodType() {
  return (
    <div className="relative flex flex-col items-center h-screen justify-center text-white text-left text-3xl">
      <h1 className="text-5xl mb-5">Select Your Food Type </h1>
      <div>
        <Link
          href="food-type/veg"
          className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded text-3xl"
        >
          <span>🍲</span> <div className="hover:underline">Veg</div>
        </Link>
        <Link
          href="food-type/non-veg"
          className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded text-3xl"
        >
          <span>🍗</span> <div className="hover:underline">Non-Veg</div>
        </Link>
      </div>
    </div>
  );
}
