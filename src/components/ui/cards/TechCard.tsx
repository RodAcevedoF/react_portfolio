import { motion } from "framer-motion";
import { useState } from "react";
import type { TechElement } from "../../../types";

export const TechCard = ({ item }: TechElement) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      key={item.name}
      className="relative w-26 h-26 border-2 rounded-md flex flex-col items-center justify-center font-[Lilita] text-[var(--primary-color)] cursor-pointer border-blue-400/20 group hover:shadow-xl shadow-blue-400/30 transition-shadow duration-250"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered((prev) => !prev)} // Para dispositivos táctiles
    >
      {/* Imagen normal */}
      <motion.img
        src={item.img}
        alt={`${item.name} logo`}
        className="w-15 h-auto object-contain absolute mb-1.5"
        animate={{
          opacity: hovered ? 0 : 1,
          filter: hovered ? "invert(1) blur(4px)" : "invert(1) blur(0px)"
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />

      {/* Imagen hover */}
      <motion.img
        src={item.hoverImg}
        alt={`${item.name} hover logo`}
        className="w-15 h-auto object-contain absolute mb-1.5"
        animate={{
          opacity: hovered ? 1 : 0,
          filter: hovered ? "blur(0px)" : "blur(4px)"
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />

      {/* Nombre de la tecnología */}
      <span
        className={`
          z-10 mt-20 text-sm transition-all duration-250
          ${hovered ? "opacity-100" : "opacity-0"}
          sm:opacity-0 sm:group-hover:opacity-100
        `}
      >
        {item.name}
      </span>
    </div>
  );
};
