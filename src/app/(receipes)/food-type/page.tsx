import Link from "next/link";

export default function FoodType() {
  return (
      <div>
        <h1 className="text-5xl mb-5">Select Your Food Type </h1>
        <Link href="food-type/veg" className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded text-3xl">
          <span>🍲</span> <div className="hover:underline">Veg</div>
        </Link>
        <Link href="food-type/non-veg" className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded text-3xl">
          <span>🍗</span> <div className="hover:underline">Non-Veg</div>
        </Link>
      </div>
  );
}
