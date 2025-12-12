import Link from "next/link";

export default function Cuisine() {
  return (
    <div className="relative flex flex-col items-center h-screen justify-center text-left text-white text-3xl">
      <h1 className="text-5xl mb-5">Select your favourite cuisine </h1>
      <div>
        <Link
          href="cuisine/indian"
          className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded"
        >
          <span>🍛</span> <div className="hover:underline">Indian</div>
        </Link>
        <Link
          href="cuisine/chinese"
          className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded"
        >
          <span>🍜</span> <div className="hover:underline">Chinese</div>
        </Link>

        <Link
          href="cuisine/italian"
          className="flex flex-row gap-2 bg-transparent px-4 py-1 rounded"
        >
          <span>🧇</span> <div className="hover:underline">Italian</div>
        </Link>
      </div>
    </div>
  );
}
