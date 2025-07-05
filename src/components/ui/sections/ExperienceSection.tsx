import { ExperienceListItem } from "../cards";
import { type WorkExperienceItem } from "../../../types";
import { data } from "../../../data";

export const ExperienceSection = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 w-full h-full min-h-[70vh] py-5">
      <h4 className="font-[Tungsten] pl-7 xl:pl-0 text-[10vw] md:text-[8vw] lg:text-[6vw] font-[400] self-start tracking-[0.5em]">
        <span className="text-violet-400  ">EXP</span>ERIENCE
      </h4>
      <ul className="w-full h-[100%] px-5 py-2 flex flex-wrap list-none items-center justify-center gap-10">
        {data.workExperience.map((job: WorkExperienceItem, index: number) => (
          <ExperienceListItem key={index} job={job} />
        ))}
      </ul>
    </section>
  );
};
