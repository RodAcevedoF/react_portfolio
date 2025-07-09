import { useCardContext, useScrollContext } from "../../../contexts";
import { PixelTransition } from "../../animations";
import type { ProjectCardProps } from "../../../types";

export const ProjectCard = ({
  name,
  logo,
  bgImage,
  color,
  isFirst,
  isHovered,
  isDimmed,
  hoveredColor,
  onMouseEnter,
  onMouseLeave,
  index
}: ProjectCardProps) => {
  const { activeIndex, setActiveIndex } = useCardContext();
  const { scrolled } = useScrollContext();
  const isActive = activeIndex === index;

  let dynamicBg: string | undefined;

  if (!scrolled) {
    dynamicBg = isFirst ? "var(--secondary-color)" : "transparent";
  } else {
    if (!isHovered && isDimmed) {
      dynamicBg = hoveredColor ?? "var(--card-bg)";
    } else if (isHovered) {
      dynamicBg = color;
    } else if (!isHovered && !isDimmed) {
      dynamicBg = "var(--card-bg)";
    }
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(isActive ? null : index);
  };

  const logoOpacityClass = !scrolled ? "opacity-0" : "";

  const firstContent = (
    <div
      className="relative w-full h-full flex justify-center items-center overflow-hidden rounded-md"
      style={{ backgroundColor: dynamicBg }}
    >
      <div
        className={`absolute inset-5 bg-cover bg-center opacity-0 z-1 transition-opacity duration-500 overflow-x-hidden rounded-md ${
          scrolled ? "group-hover:opacity-100" : ""
        }`}
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <img
        src={logo}
        alt={`${name} logo`}
        className={`transition-all duration-300 object-contain z-10
          ${name === "Brand 1" ? "w-56 filter-none" : ""}
          ${name === "Brand 2" ? "w-48 filter-none" : ""}
          ${name === "Brand 3" ? "w-60" : ""}
          ${!["Brand 1", "Brand 2", "Brand 3"].includes(name) ? "w-48" : ""}
          hover:w-64 hover:opacity-80
          ${logoOpacityClass}
        `}
      />
    </div>
  );

  const secondContent = (
    <div className="w-full h-full grid place-items-center bg-black text-white rounded-md">
      <p className="text-2xl font-bold">Hello 👋</p>
    </div>
  );

  return (
    <li
      className={`w-full h-full group cursor-pointer`}
      onMouseEnter={scrolled ? onMouseEnter : undefined}
      onMouseLeave={scrolled ? onMouseLeave : undefined}
      onClick={scrolled ? handleClick : undefined}
    >
      <PixelTransition
        firstContent={firstContent}
        secondContent={secondContent}
        active={isActive}
        gridSize={12}
        pixelColor="#ffffff"
        animationStepDuration={0.25}
        className="w-full h-full"
        hidden={!scrolled && !isFirst}
      />
    </li>
  );
};
