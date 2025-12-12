import { meals } from "@/app/constants";
import Card from "@/app/components/Card";

export default function Indian() {
  const indianFoods = meals.filter((meal) => meal.code === "ind")?.[0].foods;

  const buildIndianFoods = () => {
    return indianFoods.map((inf, i) => (
      <Card
        imageSrc={inf?.imageSrc}
        name={inf.name}
        prepTime={inf.prepTime}
        ingredients={inf.ingredients.join(",")}
        instructions={inf.instructions}
        key={`${inf.name}${i}`}
      />
    ));
  };
  return (
    <div className="relative flex flex-col p-5 font-sans font-bold w-full">
      <h1 className="text-3xl mb-5 text-center text-white">
        Here are some indian options!
      </h1>
      <h1 className="text-3xl mb-5 text-center text-white">
        Pick! Cook! Enjoy!
      </h1>
      <div className="flex flex-row gap-10 flex-wrap">{buildIndianFoods()}</div>
    </div>
  );
}
