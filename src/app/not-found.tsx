import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-sans flex flex-col items-center bg-gray-400 text-white h-screen justify-center  font-bold">
      <h1 className="text-3xl">Sorry 😟 we could not find what you're searching for this moment.</h1>
      <Link href='/' className="bg-orange-500 border px-4 py-2 rounded hover:bg-orange-600 mt-5">Give a try again</Link>
    </div>
  );
}
