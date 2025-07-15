import {
  ExperienceSection,
  EducationSection,
  BioSection,
  Tech
} from "../sections";
import { SideNav } from "../../../components";
import { useActiveSectionObserver } from "../../../hooks";

export const Resume = () => {
  const { sectionRefs, observerRefs, activeSection } =
    useActiveSectionObserver();

  return (
    <article className="relative text-[var(--primary-color)] flex flex-col w-full gap-[5rem] font-[Lilita] mt-30">
      <SideNav sectionRefs={sectionRefs} active={activeSection} />

      <div ref={observerRefs.bio} className="max-w-screen overflow-x-hidden">
        <BioSection innerRef={sectionRefs.bio} extraClass="scroll-mt-20" />
      </div>

      <div ref={observerRefs.tech} className="max-w-screen overflow-x-hidden">
        <Tech innerRef={sectionRefs.tech} extraClass="scroll-mt-25" />
      </div>

      <div ref={observerRefs.education} className="max-w-screen p-2">
        <EducationSection
          innerRef={sectionRefs.education}
          extraClass="scroll-mt-30"
        />
      </div>

      <div
        ref={observerRefs.experience}
        className="max-w-screen overflow-x-hidden"
      >
        <ExperienceSection
          innerRef={sectionRefs.experience}
          extraClass="scroll-mt-20"
        />
      </div>
    </article>
  );
};
