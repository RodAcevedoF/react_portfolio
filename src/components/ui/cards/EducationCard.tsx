import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import type { EducationCardProps } from "../../../types";
import { BookOpenCheck, GraduationCap, Cross } from "lucide-react";
import { MiniSkillBtn } from "../buttons";

export const EducationCard = ({
  data,
  isActive,
  align,
  index,
  onVisible
}: EducationCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5
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
      relative w-full md:w-[41vw] md:max-w-[520px] h-full transition-all duration-300 p-0 border-3 border-blue-400/20 rounded-b-md md:rounded-md
      ${isActive ? "opacity-100 scale-100" : "opacity-20 scale-95"}
      ${align === "left" ? "self-start text-left" : "self-end text-left"}
    `}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        viewport={{ once: true, amount: 0.4 }}
        className="w-full h-fit text-sm text-[var(-primary-color)]"
      >
        <section className="flex items-center w-full justify-start h-full gap-8 px-5 py-2 mb-2 rounded-md bg-blue-400/10 shadow-lg shadow-blue-400/25">
          <div className="flex items-center justify-around w-full">
            <div className="flex flex-col justify-center items-center">
              <BookOpenCheck className="text-blue-400" />
              <span className="sm:text-lg">Final grade:</span>
              <span className="text-center">{data.score || "N/A"}</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <GraduationCap className="text-blue-400" />
              <span className="sm:text-lg">Distinction:</span>
              <span className="text-center">{data.honors || "N/A"}</span>
            </div>
          </div>
        </section>
        <section className="w-full h-full flex flex-col gap-5 p-5 backdrop-blur-lg">
          {data.relevantCourses.map((course, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="flex items-center justify-start w-full gap-3">
                  <Cross width={14} className="text-yellow-200" />
                  <p className="text-blue-400 text-lg sm:text-xl text-center">
                    {course.name}
                  </p>
                </div>
                <p className="">{course.description}</p>
              </div>
            );
          })}
        </section>
        <section className="w-full flex flex-wrap gap-1 items-center justify-center p-5">
          {data.skills?.map((skill, index) => (
            <MiniSkillBtn key={index} text={skill} />
          ))}
        </section>
      </motion.div>
    </article>
  );
};
