export type EducationItem = {
  degree: string;
  university: string;
  startDate: string;
  endDate: string;
  honors: string;
  relevantCourses: string[];
  web: string;
  img: string;
};

export type WorkExperienceItem = {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
};

export interface ExperienceItem {
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
}
