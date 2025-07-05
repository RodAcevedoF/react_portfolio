import { motion } from "framer-motion";
import { formatDate } from "../../../utils/formatsDate";
import { type EducationItem } from "../../../types";

interface StickyHeaderProps {
  data: EducationItem;
  align: "left" | "right";
  isActive?: boolean;
}

export const EducationHeader = ({
  data,
  align,
  isActive = false
}: StickyHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.2 }}
      transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
      className={`
        sticky w-full h-full md:w-[41vw] md:max-w-[520px] z-15 top-20 px-5 backdrop-blur-md rounded-sm bg-[var(--clear-violet)]
        ${align === "left" ? "self-start text-left" : "self-start"}
      `}
    >
      <div className="py-2 flex w-full h-full justify-center items-center gap-5">
        <div className="flex flex-col w-full">
          <p className="text-cyan-500 text-[0.9rem] sm:text-[1.2rem] mb-1">
            {data.university}
          </p>
          <h3 className="text-[1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.4rem] font-semibold mb-1">
            {" "}
            {data.degree}
          </h3>
          <p className="text-sm text-gray-400">
            {formatDate(data.startDate)} – {formatDate(data.endDate)}
          </p>
        </div>
        <a
          href={data.web}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-20 h-20 sm:w-30 sm:h-30 border-10 border-black shadow-[0_0_40px_15px_rgba(255,255,255,0.25)]
  rounded-full p-2"
        >
          <img
            src={data.img}
            alt={`${data.university} logo`}
            className="w-full h-full object-contain"
          />
        </a>
      </div>
    </motion.div>
  );
};
