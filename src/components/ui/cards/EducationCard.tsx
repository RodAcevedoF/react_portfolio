import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { type EducationItem } from "../../../types";
import { getDurationInMonths } from "../../../utils/formatsDate";

interface EducationCardProps {
  data: EducationItem;
  isActive: boolean;
  align: "left" | "right";
  index: number;
  onVisible: (index: number) => void;
}

export const EducationCard = ({
  data,
  isActive,
  align,
  index,
  onVisible
}: EducationCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.9
  });

  useEffect(() => {
    if (inView) {
      onVisible(index);
    }
  }, [inView, index, onVisible]);

  return (
    <article
      ref={ref}
      className={`
      relative w-full md:w-[41vw] md:max-w-[520px] h-full transition-all duration-300 p-5 border-2 border-[var(--clear)] rounded-sm
      ${isActive ? "opacity-100 scale-100" : "opacity-30 scale-95"}
      ${align === "left" ? "self-start text-left" : "self-end text-left"}
    `}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, amount: 1 }}
        className="flex items-center md:items-start gap-6"
      >
        <div className="flex-1">
          <div className="z-10 py-2">
            <p className="text-sm text-gray-400">datos datos</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.15 }}
        viewport={{ once: true, amount: 1 }}
        className="w-full h-fit text-sm text-gray-600 p-5"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-5 h-5 bg-gray-300 rounded-full"></span>
          <span>
            Duration: {getDurationInMonths(data.startDate, data.endDate)}
          </span>
          <span>
            Duration: {getDurationInMonths(data.startDate, data.endDate)}
          </span>
          <span>
            Duration: {getDurationInMonths(data.startDate, data.endDate)}
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          eum rem...
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          eum rem...
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          eum rem...
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          eum rem...
        </p>
      </motion.div>
    </article>
  );
};
