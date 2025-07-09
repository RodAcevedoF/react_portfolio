import { data } from "../../../data/data";
import { type TechSectionProps } from "../../../types";
import { useEffect } from "react";
import { TechCard } from "../cards"; // Ajusta la ruta si es diferente

export const Tech = ({ innerRef, extraClass }: TechSectionProps) => {
  const tech = data.tech;
  const learningTech = tech.filter((item) => item.learning);
  const knownTech = tech.filter((item) => !item.learning);

  useEffect(() => {
    tech.forEach((item) => {
      if (item.hoverImg) {
        const img = new Image();
        img.src = item.hoverImg;
      }
    });
  }, [tech]);

  return (
    <article
      ref={innerRef}
      className={`flex flex-col w-full items-center py-12 sm:px-4 ${extraClass}`}
    >
      <div className="flex flex-col w-full text-center justify-center items-center">
        <h4 className="w-full text-start font-[Tungsten] text-[10vw] pl-7 xl:pl-0 md:text-[8vw] lg:text-[6vw] font-[400] self-start tracking-[0.5em] mb-15">
          <span className="text-blue-400">TECH</span> STACK
        </h4>

        {/* Currently Learning */}
        <section className="w-full flex flex-col items-center gap-6">
          <h5 className="text-xl text-blue-500 tracking-wide uppercase">
            Currently <span className="text-neutral-100">learning</span>
          </h5>
          {learningTech.length > 0 ? (
            <ul className="flex flex-wrap justify-center items-center gap-10 w-full md:w-[80%]">
              {learningTech.map((item) => (
                <TechCard key={item.name} item={item} />
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-md italic">
              Nothing specific at the moment. Always exploring!
            </p>
          )}
        </section>

        {/* Known Technologies */}
        <section className="w-full flex flex-col items-center gap-6 mt-12">
          <h5 className="text-xl text-blue-500 tracking-wide uppercase">
            Currently <span className="text-neutral-100">working with</span>
          </h5>
          <ul className="flex flex-wrap justify-center items-center gap-10 w-full md:w-[80%]">
            {knownTech.map((item) => (
              <TechCard key={item.name} item={item} />
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
};
