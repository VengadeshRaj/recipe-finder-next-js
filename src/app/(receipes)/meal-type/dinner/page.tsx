import { meals } from "@/app/constants";
import Card from "@/app/components/Card";

export default function Dinner() {
  const DinnerFoods = meals.filter((meal) => meal.code === "dn")?.[0].foods;

  const buildDinner = () => {
    return DinnerFoods.map((bf, i) => (
      <Card
        imageSrc={bf?.imageSrc}
        name={bf.name}
        prepTime={bf.prepTime}
        ingredients={bf.ingredients.join(",")}
        instructions={bf.instructions}
        key={`${bf.name}${i}`}
      />
    ));
  };
  return (
    <div className="bg-orange-500 flex flex-col p-5 font-sans font-bold w-full">
      <h1 className="text-5xl mb-5 text-center text-white">Dinner</h1>
      <div className="flex flex-row gap-10 flex-wrap">{buildDinner()}</div>
    </div>
  );
}
