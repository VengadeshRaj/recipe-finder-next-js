import Link from "next/link";
import Image from "next/image";
import MealTypeImage from "@/app/images/mealtype-background.jpg";

export default function MealType() {
  return (
    <div className="relative flex flex-col items-center h-screen justify-center p-5 text-white text-left w-full">
      <h1 className="text-5xl mb-5">Select your meal type </h1>
      <div>
        <Link
          href="meal-type/breakfast"
          className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded text-3xl"
        >
          <span>🍴</span> <div className="hover:underline">Breakfast</div>
        </Link>
        <Link
          href="meal-type/lunch"
          className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded text-3xl"
        >
          <span>🍴</span> <div className="hover:underline">Lunch</div>
        </Link>
        <Link
          href="meal-type/dinner"
          className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded text-3xl"
        >
          <span>🍴</span> <div className="hover:underline">Dinner</div>
        </Link>
      </div>
    </div>
  );
}
