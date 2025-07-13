import type { Ref } from "react";

export type RelevantCourse = {
  name: string;
  description: string;
};

export type EducationItem = {
  degree: string;
  university: string;
  startDate: string;
  endDate: string;
  honors: string;
  score: string;
  web: string;
  img: string;
  relevantCourses: RelevantCourse[];
  skills?: string[];
};

export type WorkExperienceItem = {
  organization?: {
    title: string;
    website: string;
    image: string;
  };
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  workplaceMode?: string;
  responsabilities?: string[];
  skills?: string[];
  tools?: Tool[];
};

type Tool = {
  name: string;
  img: string;
};

/* export interface ExperienceItem {
  organization?: {
    title: string;
    website: string;
    image: string;
  };
  role: string;
  startDate: string;
  endDate: string;
  employmentType?: string;
  workplaceMode?: string;
  responsabilities?: string[];
  tools?: string[];
} */

export interface SideNavProps {
  sectionRefs: {
    bio: React.RefObject<HTMLElement | null>;
    tech: React.RefObject<HTMLElement | null>;
    education: React.RefObject<HTMLElement | null>;
    experience: React.RefObject<HTMLElement | null>;
  };
}

export type SectionKey = "bio" | "tech" | "education" | "experience";

export type TechSectionProps = {
  innerRef: Ref<HTMLElement | null>;
  extraClass?: string;
  title?: string;
  description?: string;
  items?: TechElement[];
};

export type TechElement = {
  item: {
    name: string;
    img?: string;
    hoverImg?: string;
    learning?: boolean;
  };
};

export type ExpSectionProps = {
  innerRef: Ref<HTMLElement | null>;
  extraClass?: string;
};

export type PortraitProps = {
  src: string;
  alt: string;
};

export type SideNavWithActiveProps = SideNavProps & {
  active: SectionKey | null;
};

export type BioSectionProps = {
  innerRef: Ref<HTMLElement | null>;
  extraClass?: string;
};

export type EduSectionProps = {
  innerRef: Ref<HTMLElement | null>;
  extraClass?: string;
};

export interface EducationCardProps {
  data: EducationItem;
  isActive: boolean;
  align: "left" | "right";
  index: number;
  onVisible: (index: number) => void;
}

export interface StickyHeaderProps {
  data: EducationItem;
  align: "left" | "right";
  isActive?: boolean;
}
