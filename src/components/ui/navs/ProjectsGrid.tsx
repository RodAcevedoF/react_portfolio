import { useState } from "react";
import { projects } from "../../../data";
import { lightenColor } from "../../../utils/lightenColor";
import { ProjectCard } from "../../../components";

export const ExpGrid = () => {
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (color: string, index: number) => {
    setHoveredColor(lightenColor(color, 20));
    setActiveIndex(index);
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = color;
  };

  const handleMouseLeave = () => {
    setHoveredColor(null);
    setActiveIndex(null);
    document.body.style.backgroundColor = "";
  };

  return (
    <ul className="w-full grid auto-rows-[350px] justify-center items-center grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8 py-4 px-10 transition-colors duration-500">
      {projects.map(
        (
          {
            name,
            logo,
            bgImage,
            color,
            url,
            deploy,
            backImg,
            description,
            tech
          },
          index
        ) => {
          const isFirst = index === 0;
          const isHovered = activeIndex === index;
          const isDimmed = (hoveredColor && !isHovered) || false;

          return (
            <ProjectCard
              key={name}
              index={index}
              name={name}
              logo={logo}
              bgImage={bgImage}
              backImg={backImg}
              color={color}
              url={url}
              deploy={deploy}
              isFirst={isFirst}
              isHovered={isHovered}
              isDimmed={isDimmed}
              hoveredColor={hoveredColor}
              onMouseEnter={() => handleMouseEnter(color, index)}
              onMouseLeave={handleMouseLeave}
              description={description}
              tech={tech}
            />
          );
        }
      )}
    </ul>
  );
};
