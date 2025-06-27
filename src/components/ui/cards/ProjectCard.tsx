type ProjectCardProps = {
  name: string;
  logo: string;
  bgImage: string;
  color: string;
  url: string;
  isFirst: boolean;
  isHovered: boolean;
  isDimmed: boolean;
  hoveredColor: string | null;
  scrolled: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  index: number;
};

/* export const ProjectCard = ({
  name,
  logo,
  bgImage,
  color,
  url,
  isFirst,
  isHovered,
  isDimmed,
  hoveredColor,
  scrolled,
  onMouseEnter,
  onMouseLeave
}: ProjectCardProps) => {
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

  return (
    <li
      className="relative group flex justify-center items-center w-full h-full overflow-hidden transition-colors duration-500 p-5"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ backgroundColor: dynamicBg }}
    >
      <div
        className="absolute inset-10 bg-cover bg-center opacity-0 group-hover:opacity-100 z-1 transition-opacity duration-500 overflow-x-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
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
          className={`transition-all duration-300 object-contain z-10
            ${name === "Brand 1" ? "w-56 filter-none" : ""}
            ${name === "Brand 2" ? "w-48 filter-none" : ""}
            ${name === "Brand 3" ? "w-60" : ""}
            ${!["Brand 1", "Brand 2", "Brand 3"].includes(name) ? "w-48" : ""}
            hover:w-64 hover:opacity-80
          `}
        />
      </a>
    </li>
  );
};
 */

export const ProjectCard = ({
  name,
  logo,
  bgImage,
  color,
  url,
  isFirst,
  isHovered,
  isDimmed,
  hoveredColor,
  scrolled,
  onMouseEnter,
  onMouseLeave
}: ProjectCardProps) => {
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

  // Añade esta condición para controlar la opacidad de la imagen
  const logoOpacityClass = !scrolled ? "opacity-0" : "";

  return (
    <li
      className="relative group flex justify-center items-center w-full h-full overflow-hidden transition-colors duration-500 p-5"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ backgroundColor: dynamicBg }}
    >
      <div
        className="absolute inset-10 bg-cover bg-center opacity-0 group-hover:opacity-100 z-1 transition-opacity duration-500 overflow-x-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
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
          className={`transition-all duration-300 object-contain z-10
            ${name === "Brand 1" ? "w-56 filter-none" : ""}
            ${name === "Brand 2" ? "w-48 filter-none" : ""}
            ${name === "Brand 3" ? "w-60" : ""}
            ${!["Brand 1", "Brand 2", "Brand 3"].includes(name) ? "w-48" : ""}
            hover:w-64 hover:opacity-80
            ${logoOpacityClass}  // Aplica la clase de opacidad aquí
          `}
        />
      </a>
    </li>
  );
};
