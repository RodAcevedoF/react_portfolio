import { ExperienceSection, EducationSection, BioSection } from "../sections";

export const Resume = () => {
  return (
    <article className="text-[var(--primary-color)] flex flex-col w-full gap-[5em] font-[Lilita] mt-30">
      <BioSection />
      <EducationSection />
      <ExperienceSection />
    </article>
  );
};
