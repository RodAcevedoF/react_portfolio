/* import { useRef } from "react";
import {
  ExperienceSection,
  EducationSection,
  BioSection,
  Skills
} from "../sections";
import { SideNav } from "../../../components";

export const Resume = () => {
  const bioRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    bio: bioRef,
    education: educationRef,
    experience: experienceRef,
    skills: skillsRef
  };
  return (
    <article className="relative text-[var(--primary-color)] flex flex-col w-full gap-[5rem] font-[Lilita] mt-30">
      <SideNav sectionRefs={sectionRefs} />
      <BioSection innerRef={bioRef} extraClass="scroll-mt-20" />
      <EducationSection innerRef={educationRef} extraClass="scroll-mt-30" />
      <ExperienceSection innerRef={experienceRef} extraClass="scroll-mt-25" />
      <Skills innerRef={skillsRef} extraClass="scroll-mt-18" />
    </article>
  );
};
 */

/* import { useRef, useState } from "react";
import {
  ExperienceSection,
  EducationSection,
  BioSection,
  Skills
} from "../sections";
import { SideNav } from "../../../components";
import type { SectionKey } from "../../../types";

export const Resume = () => {
  const [activeSection, setActiveSection] = useState<SectionKey | null>(null);

  const bioRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    bio: bioRef,
    education: educationRef,
    experience: experienceRef,
    skills: skillsRef
  };

  return (
    <article className="relative text-[var(--primary-color)] flex flex-col w-full gap-[5rem] font-[Lilita] mt-30">
      <SideNav sectionRefs={sectionRefs} active={activeSection} />
      <BioSection
        innerRef={bioRef}
        extraClass="scroll-mt-20"
        onVisible={() => setActiveSection("bio")}
      />
      <EducationSection
        innerRef={educationRef}
        extraClass="scroll-mt-30"
        onVisible={() => setActiveSection("education")}
      />
      <ExperienceSection
        innerRef={experienceRef}
        extraClass="scroll-mt-25"
        onVisible={() => setActiveSection("experience")}
      />
      <Skills
        innerRef={skillsRef}
        extraClass="scroll-mt-18"
        onVisible={() => setActiveSection("skills")}
      />
    </article>
  );
};
 */

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

      <div ref={bioInViewRef}>
        <BioSection innerRef={bioRef} extraClass="scroll-mt-20" />
      </div>

      <div ref={skillsInViewRef}>
        <Tech innerRef={techRef} extraClass="scroll-mt-18" />
      </div>

      <div ref={eduInViewRef}>
        <EducationSection innerRef={educationRef} extraClass="scroll-mt-30" />
      </div>

      <div ref={expInViewRef}>
        <ExperienceSection innerRef={experienceRef} extraClass="scroll-mt-25" />
      </div>
    </article>
  );
};
