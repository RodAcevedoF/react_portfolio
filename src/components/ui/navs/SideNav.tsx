import { IdCard, GraduationCap, BriefcaseBusiness, Cpu } from "lucide-react";
import { type SectionKey, type SideNavWithActiveProps } from "../../../types";
import { useScrollContext } from "../../../contexts";

export const SideNav = ({ sectionRefs, active }: SideNavWithActiveProps) => {
  const { scrolled } = useScrollContext();

  const handleScrollTo = (key: SectionKey) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`${
        !scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
      } group transition-opacity duration-300 fixed top-1/2 left-0 -translate-y-1/2 z-50`}
    >
      <div
        className={`
          transform -translate-x-[90%] group-hover:translate-x-0
          transition-transform duration-300 ease-in-out
          flex flex-col gap-5
          border-3 border-l-0 border-blue-400/30 rounded-r-md
          backdrop-blur-[2rem] p-3 p-l-5 bg-black/30
        `}
      >
        {(["bio", "tech", "education", "experience"] as SectionKey[]).map(
          (key) => {
            const Icon =
              key === "bio"
                ? IdCard
                : key === "tech"
                ? Cpu
                : key === "education"
                ? GraduationCap
                : BriefcaseBusiness;

            /*         key === "bio"
                ? IdCard
                : key === "education"
                ? GraduationCap
                : key === "experience"
                ? BriefcaseBusiness
                : Cpu;
 */
            return (
              <button
                key={key}
                onClick={() => handleScrollTo(key)}
                className="w-fit h-fit"
                aria-label={`Scroll to ${key}`}
              >
                <Icon
                  className={`hover:scale-110 transition-all duration-200 hover:text-yellow-200 cursor-pointer ${
                    active === key ? "text-white scale-125" : "text-blue-400"
                  }`}
                />
              </button>
            );
          }
        )}
      </div>
    </div>
  );
};
