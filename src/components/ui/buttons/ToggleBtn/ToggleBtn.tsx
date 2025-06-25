import { motion, AnimatePresence } from "framer-motion";
import { useScrollContext } from "../../../../contexts";

type ToggleBtnProps = {
  onToggle: () => void;
  isAboutPage: boolean;
};

const ToggleBtn = ({ onToggle, isAboutPage }: ToggleBtnProps) => {
  const { scrolled } = useScrollContext();

  /* return (
    <motion.button
      onClick={onToggle}
      whileTap={{ y: 12 }}
      className="relative flex items-center justify-center text-center px-2 bg-inherit border-none overflow-hidden group cursor-pointer">
      <AnimatePresence mode="wait">
        <motion.div
          key={isAboutPage ? "about-line" : "projects-line"}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ scaleX: 0, opacity: 0, transition: { delay: 0.1 } }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute top-1/2 h-[0.25em] w-full origin-left bg-neutral-500 group-hover:opacity-100 opacity-0"
          style={{ transform: "translateY(-50%)" }}
        />
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.span
          key={isAboutPage ? "about" : "projects"}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className={`font-bold text-[1.5rem] z-10 font-["Tungsten"] tracking-[8px] transition-colors duration-300 ${
            scrolled ? "text-neutral-100" : "text-shadow-900"
          }`}
        >
          {isAboutPage ? "ABOUT" : "PROJECTS"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}; */

  return (
    <div
      onClick={onToggle} // ← Mover aquí
      className="relative flex items-center justify-center text-center px-2 bg-inherit border-none overflow-hidden group cursor-pointer"
    >
      <motion.div
        whileTap={{ y: 12 }}
        className="flex items-center justify-center"
      >
        {/* Línea animada */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isAboutPage ? "about-line" : "projects-line"}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0, transition: { delay: 0.1 } }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-1/2 h-[0.25em] w-full origin-left bg-neutral-500 group-hover:opacity-100 opacity-0 pointer-events-none"
            style={{ transform: "translateY(-50%)" }}
          />
        </AnimatePresence>

        {/* Texto animado */}
        <AnimatePresence mode="wait">
          <motion.span
            key={isAboutPage ? "about" : "projects"}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className={`font-bold text-[1.5rem] z-10 font-["Tungsten"] tracking-[8px] transition-colors duration-300 ${
              scrolled ? "text-neutral-100" : "text-shadow-900"
            }`}
          >
            {isAboutPage ? "ABOUT" : "PROJECTS"}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ToggleBtn;
