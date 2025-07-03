import { type WorkExperienceItem } from "../../../types";
import { MapPinned } from "lucide-react";
import { PixelTransition } from "../../animations";

type ExperienceListItemProps = {
  job: WorkExperienceItem;
};

export const ExperienceListItem = ({ job }: ExperienceListItemProps) => {
  const firstContent = (
    <div className="flex flex-col p-5 bg-black rounded-sm min-h-[25rem] w-full">
      <div className="flex w-full items-center justify-between mb-5">
        <p className="font-[Lilita] text-[1em] whitespace-pre-line">
          {job.startDate}
          <span className="text-violet-400"> - </span>
          {job.endDate}
        </p>
        <p className="text-violet-400 flex gap-2 items-center">
          {`${job.location}`} <MapPinned size={18} />
        </p>
      </div>
      <p className="font-[Lilita] text-[1.5rem]">{job.position}</p>
      <p className="font-[Lilita] text-[1.1em] mb-8 text-black bg-violet-400 w-fit px-2 rounded-sm">{`${job.company}`}</p>
      <p className="font-[Lilita] text-[1em] mb-[0.5em]">{job.description}</p>
    </div>
  );

  const secondContent = (
    <div className="w-full h-full grid place-items-center bg-black text-white">
      <p className="text-2xl font-bold">Hello 👋</p>
    </div>
  );

  return (
    <li className="flex infocard effect relative cursor-pointer border-2 border-[var(--clear-primary)] w-[20rem] h-full p-[0.3rem] rounded-sm overflow-hidden transition-all duration-300 ease-in-out hover:translate-y-[-1rem]">
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
