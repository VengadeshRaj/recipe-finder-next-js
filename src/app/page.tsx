import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative font-sans flex flex-col items-center bg-[url(./images/home-background.jpg)] bg-center bg-fixed bg-cover text-white h-screen justify-center font-bold gap-5">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center gap-5">
        <h1 className="text-5xl">Find the Perfect Recipe for Every Mood 😋</h1>
        <h1 className="text-3xl">
          Your one-stop destination for tasty and healthy recipes!
        </h1>
        <h1 className="text-3xl">🍴🍝</h1>
        <h1>Pick. Cook. Enjoy!🔥 </h1>
        <Link
          href="start"
          className="bg-transparent border-[2px] px-4 py-1 rounded mt-5"
        >
          Explore Recipes 🍽️
        </Link>
      </div>
    </div>
  );
}
