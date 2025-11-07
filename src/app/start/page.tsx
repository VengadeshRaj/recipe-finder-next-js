import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative font-sans flex flex-col items-center bg-[url(./images/start-background.jpg)] bg-center bg-fixed bg-cover text-white h-screen justify-center font-bold">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl mb-5">Select your catogory </h1>
        <Link
          href="meal-type"
          className="flex flex-row text-3xl gap-2 bg-transparent px-4 py-1 rounded"
        >
          <span>🥄</span>{" "}
          <div className="hover:underline hover:green">Meal Type</div>
        </Link>
        <Link
          href="food-type"
          className="flex flex-row text-3xl gap-2 bg-transparent px-4 py-1 rounded"
        >
          <span>🥄</span> <div className="hover:underline">Food Type</div>
        </Link>
        <Link
          href="foodtype"
          className="flex flex-row text-3xl gap-2 bg-transparent px-4 py-1 rounded"
        >
          <span>🥄</span> <div className="hover:underline">Cuisine</div>
        </Link>
      </div>
    </div>
  );
}
