import Link from "next/link";
import Image from "next/image";
import SelectCatogory from "@/app/images/start-background.jpg";

export default function SelectYourCatogory() {
  return (
    <div className="relative font-sans flex flex-col items-center text-white h-screen justify-center font-bold">
      <Image
        alt="Select your meal catogory"
        src={SelectCatogory}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative flex flex-col items-left justify-center h-full text-white text-center">
        <h1 className="text-5xl mb-5">Select your catogory </h1>
        <Link
          href="meal-type"
          className="flex flex-row text-3xl gap-2 bg-transparent px-4 py-1 rounded"
        >
          <span>🥄</span> <div className="hover:underline">Meal Type</div>
        </Link>
        <Link
          href="food-type"
          className="flex flex-row text-3xl gap-2 bg-transparent px-4 py-1 rounded"
        >
          <span>🥄</span> <div className="hover:underline">Food Type</div>
        </Link>
        <Link
          href="cuisine"
          className="flex flex-row text-3xl gap-2 bg-transparent px-4 py-1 rounded"
        >
          <span>🥄</span> <div className="hover:underline">Cuisine</div>
        </Link>
      </div>
    </div>
  );
}
