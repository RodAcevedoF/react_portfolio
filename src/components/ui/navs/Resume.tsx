import { useRef, useEffect, useState } from "react";
import {
  ExperienceSection,
  EducationSection,
  BioSection,
  Tech
} from "../sections";
import { SideNav } from "../../../components";
import { useInView } from "react-intersection-observer";
import { type SectionKey } from "../../../types";

export const Resume = () => {
  const bioRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLElement>(null);

  const { ref: bioInViewRef, inView: bioInView } = useInView({
    threshold: 0.8
  });
  const { ref: eduInViewRef, inView: eduInView } = useInView({
    threshold: 0.1
  });
  const { ref: expInViewRef, inView: expInView } = useInView({
    threshold: 0.4
  });
  const { ref: skillsInViewRef, inView: skillsInView } = useInView({
    threshold: 0.4
  });

  const [activeSection, setActiveSection] = useState<SectionKey | null>(null);

  useEffect(() => {
    if (skillsInView) setActiveSection("tech");
    else if (expInView) setActiveSection("experience");
    else if (eduInView) setActiveSection("education");
    else if (bioInView) setActiveSection("bio");
  }, [bioInView, eduInView, expInView, skillsInView]);

  const sectionRefs = {
    bio: bioRef,
    education: educationRef,
    experience: experienceRef,
    tech: techRef
  };

  return (
    <article className="relative text-[var(--primary-color)] flex flex-col w-full gap-[5rem] font-[Lilita] mt-30">
      <SideNav sectionRefs={sectionRefs} active={activeSection} />

      <div ref={bioInViewRef} className="w-[100vw] overflow-x-hidden">
        <BioSection innerRef={bioRef} extraClass="scroll-mt-20" />
      </div>

      <div ref={skillsInViewRef} className="w-[100vw] overflow-x-hidden">
        <Tech innerRef={techRef} extraClass="scroll-mt-18" />
      </div>

      <div ref={eduInViewRef} className="w-[100vw]">
        <EducationSection innerRef={educationRef} extraClass="scroll-mt-30" />
      </div>

      <div ref={expInViewRef} className="w-[100vw] overflow-x-hidden">
        <ExperienceSection innerRef={experienceRef} extraClass="scroll-mt-25" />
      </div>
    </article>
  );
};
