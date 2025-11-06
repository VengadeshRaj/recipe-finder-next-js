import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-sans flex flex-col items-center bg-orange-400 text-white h-screen justify-center  font-bold">
      <h1 className="text-3xl">Select a type </h1>
      <Link
        href="mealtype"
        className="bg-green-500 px-4 py-1 rounded hover:bg-green-600 mt-5"
      >
        Meal Type
      </Link>
      <Link
        href="cuisine"
        className="bg-green-500 px-4 py-1 rounded hover:bg-green-600 mt-5"
      >
        Cuisine
      </Link>
    </div>
  );
}
