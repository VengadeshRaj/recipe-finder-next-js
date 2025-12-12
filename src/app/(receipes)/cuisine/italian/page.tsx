import { meals } from "@/app/constants";
import Card from "@/app/components/Card";

export default function Italian(){
      const italianFoods = meals.filter((meal) => meal.code === "ita")?.[0].foods;
    
      const buildItalianFoods = () => {
        return italianFoods.map((itf, i) => (
          <Card
            imageSrc={itf?.imageSrc}
            name={itf.name}
            prepTime={itf.prepTime}
            ingredients={itf.ingredients.join(",")}
            instructions={itf.instructions}
            key={`${itf.name}${i}`}
          />
        ));
      };

    return(<div className="bg-orange-500 flex flex-col p-5 font-sans font-bold w-full">
      <h1 className="text-5xl mb-5 text-center text-white">
        {" "}
        Here are the few Italian food options!
      </h1>
      <div className="flex flex-row gap-10 flex-wrap">
        {buildItalianFoods()}
      </div>
    </div>)
}