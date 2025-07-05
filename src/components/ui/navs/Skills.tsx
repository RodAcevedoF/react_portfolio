import React from "react";
import { data } from "../../../data/data";

const SectionBlock = ({
  title,
  description,
  items
}: {
  title: string;
  description: string;
  items: string[];
}) => (
  <div className="w-full">
    <h4 className="font-[Lilita] text-xl text-[var(--primary-color)]">
      {title}
    </h4>
    <p className="font-[Tungsten] text-2xl py-4 tracking-wide font-medium text-[var(--primary-color)]">
      {description}
    </p>
    <ul className="list-none">
      {items.map((item) => (
        <li
          key={item}
          className="font-[Lilita] text-base py-1 text-[var(--primary-color)]"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <article className="flex flex-col w-full items-start px-12 py-12 bg-[var(--clear-primary)] sm:px-4">
      <h3 className="text-[3em] md:text-[6em] text-white leading-[0.5] stroke-text">
        SKILLS
      </h3>
      <div className="grid w-full justify-center grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 flex-wrap sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] xs:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
        <SectionBlock
          title="Techs"
          description="Technology is the backbone of every impactful web development project, they bring ideas to life, enhance user experiences and drive innovation in every line of code."
          items={data.skills.tech}
        />
        <SectionBlock
          title="Abilities"
          description="Soft skills are the foundation of every successful project. With the right abilities teamwork thrives and every challenge becomes an opportunity for growth."
          items={data.skills.extra}
        />
        <SectionBlock
          title="Languages"
          description="Mastering multiple languages opens doors to effective communication, fosters collaboration across diverse teams, and ensures a deeper understanding of client needs."
          items={data.skills.langs}
        />
      </div>
    </article>
  );
};
