import Image from "next/image";
import CuisineBackground from "@/app/images/cusine-background.jpg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen font-sans font-bold">
      <Image
        src={CuisineBackground}
        alt="Meal type"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 bg-black/70"></div>

      {children}
    </div>
  );
}
