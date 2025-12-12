import { meals } from "@/app/constants";
import Card from "@/app/components/Card";

export default function Veg() {
    const vegFoods = meals.filter((meal) => meal.code === "veg")?.[0].foods;
  
    const buildVegFoods = () => {
      return vegFoods.map((veg,i) => (
        <Card
          imageSrc={veg?.imageSrc}
          name={veg.name}
          prepTime={veg.prepTime}
          ingredients={veg.ingredients.join(",")}
          instructions={veg.instructions}
          key={`${veg.name}${i}`}
        />
      ));
    };
  return (
    <div className="relative flex flex-col p-5 font-sans font-bold w-full">
       <h1 className="text-3xl mb-5 text-center text-white">
        Here are some vegetarian options!
      </h1>
      <h1 className="text-3xl mb-5 text-center text-white">
        Pick! Cook! Enjoy!
      </h1>
      <div className="flex flex-row gap-10 flex-wrap">{buildVegFoods()}</div>
    </div>
  );
}
