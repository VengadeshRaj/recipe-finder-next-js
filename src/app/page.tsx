import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-sans flex flex-col items-center bg-orange-400 text-white h-screen justify-center font-bold gap-5">
      <h1 className="text-3xl">We help you to cook your favourite meal!</h1>
      <h1 className="text-3xl">🍴🍝😋</h1>
      <h1>Find, cook, and enjoy! </h1>
      <Link href='start' className="bg-green-500 border px-4 py-1 rounded hover:bg-green-600 mt-5">Let's Start!</Link>
    </div>
  );
}
