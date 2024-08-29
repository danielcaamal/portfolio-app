import { IoIosSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  name: string;
  description: string;
  isWork?: boolean;
  urlName?: string;
}


export const ExperienceCard = ({
  title, subtitle, name, description, isWork=true, urlName
}: ExperienceCardProps) => { 
  return (
    <div className="container flex flex-row items-center justify-center mt-6 w-full">
      {/* Card title, subtitle */}
      <div className="flex flex-col lg:flex-row basis-4/12 items-center">
        <div className="flex flex-col basis-3/4 text-center lg:text-right px-2 md:px-12 py-2">
          <span className="text-bold sm:text-xl">{title}</span>
          <span className="text-center lg:text-right">{subtitle}</span>
        </div>
        {/* Card icon */}
        <div className="basis-1/4 lg:px-2">
          <div className="rounded-full h-12 w-12 bg-white p-1 items-center justify-center">
            {
              isWork  
                ? <MdWork  className="grow-0 w-full h-full" color="black"/>
                : <IoIosSchool className="grow-0 w-full h-full" color="black"/>
            }
          </div>
        </div>
      </div>
      {/* Card name, description */}
      <div className="basis-7/12 border-l-1 ">
        <a href={urlName} target="_blank" rel="noreferrer">
          <p className="text-3xl text-left ml-6 text-sky-400">{name}</p>
        </a>
        <hr className="my-4 border-gray-300" />
        <p className="text-justify ml-6">{description}</p>
      </div>
    </div>
  );
}