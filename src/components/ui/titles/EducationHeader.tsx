import { motion } from "framer-motion";
import { formatDate } from "../../../utils/formatsDate";
import type { StickyHeaderProps } from "../../../types";
import { useTranslation } from "react-i18next";

export const EducationHeader = ({
  data,
  align,
  isActive = false
}: StickyHeaderProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.1 }}
      transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
      className={`
        sticky w-full h-full md:w-[41vw] md:max-w-[520px] z-15 top-20 px-5 backdrop-blur-xl rounded-t-md md:rounded-md bg-black/90 transition-all duration-300 border-3 border-blue-400/20 overflow-hidden
        ${align === "left" ? "self-start text-left" : "self-start"}
        ${isActive ? "scale-100" : "scale-95"}
      `}
    >
      <div className="py-2 flex w-full h-full justify-center items-center gap-5">
        <div className="flex flex-col w-full">
          <p className="text-blue-400 text-[0.9rem] sm:text-[1.2rem] mb-1">
            {t(data.university)}
          </p>
          <h3 className="text-[1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.4rem] font-semibold mb-1">
            {" "}
            {t(data.degree)}
          </h3>
          <p className="text-sm text-gray-400">
            {formatDate(data.startDate)} – {formatDate(data.endDate)}
          </p>
        </div>
        <a
          href={data.web}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-20 h-20 sm:w-30 sm:h-30 border-10 border-[var(--clear-secondary)] shadow-[0_0_40px_15px_rgba(255,255,255,0.25)]
  rounded-full"
        >
          <img
            src={data.img}
            alt={`${data.university} logo`}
            className="w-full h-full object-contain rounded-full"
          />
        </a>
      </div>
    </motion.div>
  );
};
