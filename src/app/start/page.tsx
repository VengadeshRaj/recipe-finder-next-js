import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative font-sans flex flex-col items-center bg-[url(./images/start-background.jpg)] bg-center bg-fixed bg-cover text-white h-screen justify-center font-bold gap-5">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center gap-5">
        <h1 className="text-3xl">Select your catogory </h1>
        <Link href="mealtype" className="bg-transparent px-4 py-1 rounded mt-5">
          Meal Type
        </Link>
        <Link href="cuisine" className="bg-transparent px-4 py-1 rounded mt-5">
          Cuisine
        </Link>
      </div>
    </div>
  );
}
