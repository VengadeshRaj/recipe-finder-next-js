import Image from "next/image";

export default function MealTypeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
      {children}
    </div>
  );
}
