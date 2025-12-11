import Link from "next/link";
import Image from "next/image";
import MealTypeImage from "@/app/images/mealtype-background.jpg";

export default function MealType() {
  return (
    <div className="font-sans flex flex-col items-center text-white h-screen justify-center font-bold gap-5">
      <Image
        src={MealTypeImage}
        alt="Meal type"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex flex-col items-center justify-center p-5 h-full text-white text-center w-full">
        <h1 className="text-5xl mb-5">Select your meal type </h1>
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
