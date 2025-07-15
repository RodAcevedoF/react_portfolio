import { IdCard, GraduationCap, BriefcaseBusiness, Cpu } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { type SectionKey, type SideNavWithActiveProps } from "../../../types";
import { useScrollContext } from "../../../contexts";

export const SideNav = ({ sectionRefs, active }: SideNavWithActiveProps) => {
  const { scrolled } = useScrollContext();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (key: SectionKey) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // cerrar en mobile después del clic
  };

  // Detectar clics fuera en mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node) &&
        window.innerWidth < 640
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <motion.div
      className={`
        ${
          !scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        } transition-opacity duration-300 fixed top-1/2 left-0 -translate-y-1/2 z-100
        group sm:group
      `}
      onClick={() => {
        if (window.innerWidth < 640) setIsOpen(true);
      }}
      // Yoyo animation only on mobile and when closed
      animate={
        isMobile && !isOpen
          ? {
              y: [0, 6, 0]
            }
          : { y: 0 }
      }
      transition={
        isMobile && !isOpen
          ? {
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity
            }
          : {}
      }
    >
      <div
        ref={navRef}
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
              >
                <Icon
                  className={`hover:scale-110 transition-all duration-200 hover:text-yellow-200 cursor-pointer w-7 h-auto ${
                    active === key ? "text-white scale-130" : "text-blue-400"
                  }`}
                />
              </button>
            );
          }
        )}
      </div>
    </motion.div>
  );
};
