import { meals } from "@/app/constants";
import Card from "@/app/components/Card";

export default function breakfast() {
  const breakFastFoods = meals.filter((meal) => meal.code === "bf")?.[0].foods;

  const buildBreakfast = () => {
    return breakFastFoods.map((bf, i) => (
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
    <div className="relative flex flex-col p-5 font-sans font-bold w-full">
      <h1 className="text-3xl mb-5 text-center text-white">
        Here are some breakfast options!
      </h1>
      <h1 className="text-3xl mb-5 text-center text-white">
        Pick! Cook! Enjoy!
      </h1>

      <div className="flex flex-row gap-10 flex-wrap">{buildBreakfast()}</div>
    </div>
  );
}
