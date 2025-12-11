import Image from "next/image";
import Link from "next/link";
import HomeBackGround from "@/app/images/home-background.jpg";

export default function HomePage() {
  return (
    <div className="relative font-sans flex flex-col items-center text-white h-screen justify-center font-bold gap-5">
      <Image
        src={HomeBackGround}
        alt="Find Receipe home"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center gap-5">
        <h1 className="text-5xl m-10">Find the Perfect Recipe for Every Mood 😋</h1>
        <h1 className="text-3xl">
          Your one-stop destination for tasty and healthy recipes!
        </h1>
        <h1 className="text-3xl">🍴🍝</h1>
        <h1 className="text-3xl">Pick. Cook. Enjoy!🔥 </h1>
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
