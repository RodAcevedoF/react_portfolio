import { useState } from "react";
import { EducationCard } from "../cards";
import { EducationHeader } from "../titles";
import { data } from "../../../data";

export const EducationSection = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  return (
    <section
      id="education"
      className="flex flex-col w-full h-full mt-10 md:px-4"
    >
      <div className="flex flex-col w-full text-center">
        <h4 className="font-[Tungsten] text-[10vw] pl-7 xl:pl-0 md:text-[8vw] lg:text-[6vw] font-[400] self-start tracking-[0.5em]">
          <span className="text-violet-400">EDU</span>CATION
        </h4>
      </div>

      <main
        className="
        relative flex flex-col w-full h-full items-center justify-end mask-fade-vertical gap-10
        before:absolute before:top-0 before:w-[3px] before:h-full before:bg-[var(--clear)] 
        before:left-[0.65rem] md:before:left-[49.86%] 
      "
      >
        <div className="sticky top-[18vh] md:top-35 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full self-start border-2 border-[var(--clear)] md:self-center">
          <div className="mt-[0.15rem] md:mt-0 w-4 h-4 rounded-full opacity-75 bg-[var(--clear-violet)] self-start md:self-center" />
        </div>

        {data.education.map((data, index) => {
          const align = index % 2 === 0 ? "left" : "right";
          return (
            <div
              key={index}
              className={`
                relative w-full flex flex-col items-center pl-8 pr-2 md:pl-0 md:pr-0 md:p-10 md:gap-14
                md:flex-row md:justify-between 
                ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"}
              `}
            >
              <EducationHeader
                data={data}
                align={align === "left" ? "right" : "left"}
                isActive={index === visibleIndex}
              />
              <EducationCard
                data={data}
                isActive={index === visibleIndex}
                align={align}
                index={index}
                onVisible={setVisibleIndex}
              />
            </div>
          );
        })}
      </main>
    </section>
  );
};
