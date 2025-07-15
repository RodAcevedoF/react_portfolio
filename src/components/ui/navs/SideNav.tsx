import { IdCard, GraduationCap, BriefcaseBusiness, Cpu } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { type SectionKey, type SideNavWithActiveProps } from "../../../types";
import { useScrollContext } from "../../../contexts";
import { useIsMobile } from "../../../hooks";

export const SideNav = ({ sectionRefs, active }: SideNavWithActiveProps) => {
  const { scrolled } = useScrollContext();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleScrollTo = (key: SectionKey) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth" });
    if (isMobile) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node) &&
        isMobile
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  return (
    <motion.nav
      className={`
        fixed top-1/2 left-0 z-100 -translate-y-1/2
        transition-opacity duration-300
        ${!scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}
        group sm:group
      `}
      onClick={() => {
        if (isMobile) setIsOpen(true);
      }}
      animate={isMobile && !isOpen ? { y: [0, 6, 0] } : { y: 0 }}
      transition={
        isMobile && !isOpen
          ? { duration: 1.5, ease: "easeInOut", repeat: Infinity }
          : {}
      }
      aria-label="Section Navigation"
    >
      <div
        ref={navRef}
        onClick={(e) => e.stopPropagation()}
        className={`
          transform transition-transform duration-300 ease-in-out
          flex flex-col gap-6
          border-3 border-l-0 border-blue-400/30 rounded-r-md
          backdrop-blur-[2rem] p-5 bg-black/30

          -translate-x-[75%] sm:group-hover:translate-x-0
          ${isOpen ? "translate-x-0" : ""}
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

            return (
              <button
                key={key}
                onClick={() => handleScrollTo(key)}
                className="w-fit h-fit"
                aria-label={`Scroll to ${key}`}
                aria-current={active === key ? "true" : undefined}
              >
                <Icon
                  className={`w-7 h-auto cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-yellow-200 ${
                    active === key ? "text-white scale-125" : "text-blue-400"
                  }`}
                />
              </button>
            );
          }
        )}
      </div>
    </motion.nav>
  );
};
