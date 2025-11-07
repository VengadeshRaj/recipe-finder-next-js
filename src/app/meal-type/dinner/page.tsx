export default function Dinner() {
  return (
    <div className="relative font-sans flex flex-col items-center bg-[url(./images/mealtype-background.jpg)] bg-center bg-fixed bg-cover text-white h-screen justify-center font-bold gap-5">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-3xl mb-5">Here are the few dinner food options</h1>

      </div>
    </div>
  );
}
