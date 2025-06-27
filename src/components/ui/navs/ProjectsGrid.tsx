import { useState, useRef } from "react";
import { brands } from "../../../data/brands";
import { useScrollContext } from "../../../contexts";
import { lightenColor } from "../../../utils/lightenColor";

import { ProjectCard } from "../../../components"; // ruta correcta

export const ExpGrid = () => {
  const gridRef = useRef<HTMLUListElement>(null);
  const { scrolled } = useScrollContext();
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
    <ul
      ref={gridRef}
      className="w-full grid auto-rows-[350px] justify-center items-center grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8 py-4 px-10 transition-colors duration-500"
    >
      {brands.map(({ name, logo, bgImage, color, url }, index) => {
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
            color={color}
            url={url}
            isFirst={isFirst}
            isHovered={isHovered}
            isDimmed={isDimmed}
            hoveredColor={hoveredColor}
            scrolled={scrolled}
            onMouseEnter={() => handleMouseEnter(color, index)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </ul>
  );
};
