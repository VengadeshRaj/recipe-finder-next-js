import CuisineBackground from '@/app/images/cusine-background.jpg';
import Image from 'next/image';

export default function MealTypeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative font-sans flex flex-col items-center text-white h-screen justify-center font-bold gap-5">
      <Image
        src={CuisineBackground}
        alt="Meal type"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        {children}
      </div>
    </div>
  );
}
