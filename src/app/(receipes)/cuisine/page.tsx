import Link from "next/link";
import Image from "next/image";

export default function Cuisine() {
  return (
      <div className="text-3xl">
        <h1 className="text-5xl mb-5">Select your favourite cuisine </h1>
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
  );
}
