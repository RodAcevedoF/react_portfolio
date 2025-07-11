import { type WorkExperienceItem } from "../../../types";
import { MapPinned } from "lucide-react";
import { PixelTransition } from "../../animations";

type ExperienceListItemProps = {
  job: WorkExperienceItem;
};

export const ExperienceListItem = ({ job }: ExperienceListItemProps) => {
  const firstContent = (
    <div className="flex flex-col p-5 bg-black rounded-md min-h-[25rem] w-full">
      <div className="flex w-full items-center justify-between mb-5">
        <p className=" text-blue-400 font-[Lilita] text-[1em] whitespace-pre-line">
          {job.startDate}
          <span className="text-[var(--primary-color)]"> - </span>
          {job.endDate}
        </p>
        <p className="flex gap-2 items-center">
          {`${job.location}`}{" "}
          <MapPinned size={18} className="text-yellow-200" />
        </p>
      </div>
      <p className="font-[Lilita] text-[1.5rem]">
        <span className="text-blue-400">{job.position.split(" ")[0]}</span>{" "}
        {job.position.split(" ").slice(1).join(" ")}
      </p>
      <p className="font-[Lilita] text-[1.1em] mb-8 text-black bg-yellow-200/80 w-fit px-2 rounded-sm">{`${job.company}`}</p>
      <p className="font-[Lilita] text-[1em] mb-[0.5em]">{job.description}</p>
    </div>
  );

  const secondContent = (
    <div className="w-full h-full grid place-items-center bg-black text-white">
      <p className="text-2xl font-bold">Hello 👋</p>
    </div>
  );

  return (
    <li className="flex infocard effect relative cursor-pointer border-2 border-blue-400/20 min-w-[19.5rem] h-full p-[0.3rem] rounded-md overflow-hidden transition-all duration-300 ease-in-out hover:translate-y-[-1rem] ">
      <PixelTransition
        firstContent={firstContent}
        secondContent={secondContent}
        gridSize={12}
        pixelColor="#ffffff"
        animationStepDuration={0.25}
        className="w-full h-full"
        trigger="hover"
        style={{ minHeight: 370 }}
      />
    </li>
  );
};
