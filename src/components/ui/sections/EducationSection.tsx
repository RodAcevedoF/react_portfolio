import { useState } from "react";
import { EducationCard } from "../cards";
import { EducationHeader } from "../titles";
import { data } from "../../../data";
import type { EduSectionProps } from "../../../types";
import { useTranslation, Trans } from "react-i18next";

export const EducationSection = ({ innerRef, extraClass }: EduSectionProps) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <section
      ref={innerRef}
      id="education"
      className={`flex flex-col w-full min-h-[100vh] mt-10 md:px-4 ${extraClass}`}
    >
      <div className="flex flex-col w-full text-center">
        <h4 className="font-[Tungsten] text-[10vw] pl-7 xl:pl-0 md:text-[8vw] lg:text-[6vw] font-[400] self-start tracking-[0.5em]">
          <Trans
            i18nKey={t("about_sections.edu")}
            components={{ blue: <span className="text-blue-400" /> }}
          />
        </h4>
      </div>

      <main
        className="
        relative flex flex-col w-full h-full pt-5 pb-10 items-center justify-end gap-10
        before:absolute before:top-0 before:w-[3px] before:h-full before:bg-[var(--clear)] 
        before:left-[0.65rem] md:before:left-[49.86%] 
      "
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 2%, black 98%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 2%, black 98%, transparent 100%)"
        }}
      >
        <div className="sticky top-[18vh] md:top-35 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full self-start border-2 border-[var(--clear)] md:self-center">
          <div className="mt-[0.15rem] md:mt-0 w-4 h-4 rounded-full opacity-75 bg-blue-400/60 self-start md:self-center" />
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
