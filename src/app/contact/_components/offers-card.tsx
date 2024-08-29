import { IconWrapper } from "../../_components";
interface OfferCardProps {
  name: string;
  description: string;
  imageSrc: string;
}

export const OfferCard = ({ name, description, imageSrc }: OfferCardProps) => {
  return (
    <div className="flex flex-row md:flex-col items-center text-center px-6 md:py-2">
      <div className="flex flex-col items-center basis basis-2/5 p-6">
        <IconWrapper src={imageSrc} className={"bg-orange-400"} />
        <p className="text-xl text-bold md:text-2xl leading-relaxed md:py-5 px-2 text-sky-500 text-center">
          {name}
        </p>
      </div>
      <div className="flex basis-3/5">
        <p className="text-lg md:text-xl text-justify md:text-center leading-relaxed py-5 text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
