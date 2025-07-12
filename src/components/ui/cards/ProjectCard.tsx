import { useCardContext, useScrollContext } from "../../../contexts";
import { PixelTransition } from "../../animations";
import type { ProjectCardProps } from "../../../types";
import { Globe, Github, MessageCircleCode } from "lucide-react";

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
  index,
  url,
  deploy,
  backImg,
  description,
  tech
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
    <div
      className="w-full h-full flex flex-col items-center justify-between bg-black text-white border-3 border-blue-500/50 rounded-md relative overflow-hidden "
      style={{ background: "var(--dark-bg)" }}
    >
      <header
        className={`relative w-full h-[12rem] flex items-center justify-end rounded-t-sm shadow-3xl group transition-all duration-300 ease-in-out overflow-hidden`}
      >
        {/* efecto visual en ::before */}
        <div
          className="absolute inset-0 z-10 bg-cover transition-all duration-300 ease-in-out scale-110 brightness-75 group-hover:scale-100 group-hover:brightness-100"
          style={{
            backgroundImage: `url(${backImg})`,
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)"
          }}
        />

        {/* contenido no afectado */}
        <div className="flex flex-col justify-center bg-black/90 items-center gap-4 p-2 rounded-md mr-[3%] border-3 border-blue-500/80 z-10 group">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="hover:shadow-xl shadow-blue-600/80 bg-transparent transition-all duration-300 ease-in-out hover:translate-y-[-3px] rounded-md"
          >
            <Github className="text-[var(--primary-color)] border-2 border-yellow-200/20 rounded-md hover:text-blue-200 transition-colors duration-200 ease-in-out p-2 w-10 h-auto" />
          </a>
          <a
            href={deploy}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="hover:shadow-xl shadow-blue-600/80 bg-transparent transition-all duration-300 ease-in-out hover:translate-y-[-3px] rounded-md"
          >
            <Globe className="text-[var(--primary-color)] hover:text-blue-200 transition-colors duration-200 ease-in-out border-2 border-yellow-200/20 rounded-md p-2 w-10 h-auto" />
          </a>
        </div>
      </header>

      <main className="p-2">
        <p className="text-sm font-[Lilita] italic text-gray-400 px-2">
          {description}
        </p>
        <div className="flex items-center justify-start gap-5 w-full mt-2 border-2 rounded-md p-2 px-4 border-blue-600/50">
          <div className="flex items-center justify-center gap-2">
            <MessageCircleCode className="text-yellow-200" />
            <p className="font-[Lilita]">TECH</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            {tech?.map((t) => {
              return (
                <img
                  key={t.name}
                  src={t.icon}
                  alt={t.name}
                  className="w-11 h-auto hover:translate-y-[-3px] hover:shadow-lg shadow-blue-500 transition-all duration-300 ease-in-out border-2 border-yellow-200/20 rounded-md p-1"
                ></img>
              );
            })}
          </div>
        </div>
      </main>
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
