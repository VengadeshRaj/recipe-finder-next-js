import { meals } from "@/app/constants";
import Card from "@/app/components/Card";

export default function NonVeg() {
    const nonVegFoods = meals.filter((meal) => meal.code === "nonVeg")?.[0].foods;
  
    const buildBreakfast = () => {
      return nonVegFoods.map((nv,i) => (
        <Card
          imageSrc={nv?.imageSrc}
          name={nv.name}
          prepTime={nv.prepTime}
          ingredients={nv.ingredients.join(",")}
          instructions={nv.instructions}
          key={`${nv.name}${i}`}
        />
      ));
    };
  return (
    <div className="relative flex flex-col p-5 font-sans font-bold w-full">
       <h1 className="text-3xl mb-5 text-center text-white">
        Here are some non vegetarian options!
      </h1>
      <h1 className="text-3xl mb-5 text-center text-white">
        Pick! Cook! Enjoy!
      </h1>
      <div className="flex flex-row gap-10 flex-wrap">{buildBreakfast()}</div>
    </div>
  );
}
