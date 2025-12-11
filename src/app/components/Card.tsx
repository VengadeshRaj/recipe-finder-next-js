import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import DefaultFoodImage from "@/app/images/meals/default_food.png"

type CardType = {
  imageSrc?: string | StaticImport;
  name: string;
  prepTime: string;
  ingredients: string;
  instructions: string;
  key?: string|number
};

type CardDetailsType = {
  title: string;
  description: string;
};

const CardDetails = (props: CardDetailsType) => {
  const { title, description } = props;

  return (
    <div className="flex flex-row">
      <h3 className="w-[40%]">{title}</h3>
      <div className="w-[50%] font-normal">{description}</div>
    </div>
  );
};

export default function Card(props: CardType) {
  const { imageSrc, name, prepTime, ingredients, instructions,key } = props;
  return (
    <div className="w-[450px] h-[650px] bg-white text-black border-2 border-black rounded p-2" key={key}>
      <Image src={imageSrc || DefaultFoodImage} alt="Idly" className="w-full h-[50%] border-[2px]" />
      <div className="text-left flex flex-col pt-2">
        <CardDetails title="Name 🍲: " description={name} />
        <CardDetails title="Preparation Time 🕒: " description={prepTime} />
        <CardDetails title="Ingredients 🫛: " description={ingredients} />
        <CardDetails title="Instructions 🗒️: " description={instructions} />
      </div>
    </div>
  );
}
