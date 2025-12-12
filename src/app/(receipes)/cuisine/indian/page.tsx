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
    <div className="bg-orange-500 flex flex-col p-5 font-sans font-bold w-full">
      <h1 className="text-5xl mb-5 text-center text-white">
        {" "}
        Here are the few Indian food options!
      </h1>
      <div className="flex flex-row gap-10 flex-wrap">
        {buildIndianFoods()}
      </div>
    </div>
  );
}
