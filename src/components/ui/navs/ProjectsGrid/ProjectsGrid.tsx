import { useState, useRef } from "react";
import { brands } from "../../../../data/brands";
import { useScrollContext } from "../../../../contexts";
import { lightenColor } from "../../../../utils/lightenColor";

/*export const ExpGrid = () => {
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
      className="w-full grid auto-rows-[350px] justify-center items-center grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8 py-4 transition-colors duration-500"
    >
      {brands.map(({ name, logo, bgImage, color, url }, index) => {
        const isFirst = index === 0;
        const isHovered = activeIndex === index;
        const isDimmed = hoveredColor && !isHovered;

        let dynamicBg: string | undefined;

        if (!scrolled) {
          // Sin scroll: solo primer elemento con fondo secundario, resto transparente
          dynamicBg = isFirst ? "var(--secondary-color)" : "transparent";
        } else {
          // Con scroll: sin hover todos transparentes
          if (activeIndex === null) {
            dynamicBg = "transparent";
          } else {
            // Hay hover: hovered tiene fondo normal, resto color aclarado
            if (isHovered) {
              dynamicBg = color;
            } else if (isDimmed) {
              dynamicBg = hoveredColor ?? "transparent";
            }
          }
        }

        return (
          <li
            key={name}
            className="relative flex justify-center items-center w-full h-full overflow-hidden transition-colors duration-500"
            onMouseEnter={() => handleMouseEnter(color, index)}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundColor: dynamicBg }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundImage: `url(${bgImage})`, zIndex: 0 }}
            />
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="grid-link flex justify-center items-center w-full h-full z-10 cursor-pointer"
            >
              <img
                src={logo}
                alt={`${name} logo`}
                className={`transition-all duration-300 object-contain
                  ${index === 1 ? "w-56 filter-none" : ""}
                  ${index === 2 ? "w-48 filter-none" : ""}
                  ${index === 3 ? "w-60" : ""}
                  ${![1, 2, 3].includes(index) ? "w-48 invert" : ""}
                  hover:w-64 hover:opacity-80
                `}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
 */

import { ProjectCard } from "../../../../components"; // ruta correcta

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
