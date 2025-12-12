import { meals } from "@/app/constants";
import Card from "@/app/components/Card";

export default function Chinese() {
  const chineseFoods = meals.filter((meal) => meal.code === "chi")?.[0].foods;

  const buildChineseFoods = () => {
    return chineseFoods.map((cf, i) => (
      <Card
        imageSrc={cf?.imageSrc}
        name={cf.name}
        prepTime={cf.prepTime}
        ingredients={cf.ingredients.join(",")}
        instructions={cf.instructions}
        key={`${cf.name}${i}`}
      />
    ));
  };
  return (
    <div className="bg-orange-500 flex flex-col p-5 font-sans font-bold w-full">
      <h1 className="text-5xl mb-5 text-center text-white">
        {" "}
        Here are the few Chinese food options!
      </h1>
      <div className="flex flex-row gap-10 flex-wrap">{buildChineseFoods()}</div>
    </div>
  );
}
