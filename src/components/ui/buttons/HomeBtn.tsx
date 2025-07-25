import { motion } from "framer-motion";
import { devLogo } from "../../../assets";
import { useScrollContext } from "../../../contexts";
import type { HomeBtnProps } from "../../../types";

const HomeBtn = ({ parentMethod, text = "Rod Acevedo" }: HomeBtnProps) => {
  const { scrolled } = useScrollContext();
  return (
    <motion.button
      onClick={parentMethod}
      className="w-fit flex justify-between items-center gap-[0.5rem] cursor-pointer relative overflow-hidden border-none bg-inherit"
      whileHover="hover"
      initial="initial"
      animate="initial"
    >
      <motion.img
        src={devLogo}
        alt="Logo"
        className={`w-[3.5rem] sm:w-[4rem] ${scrolled ? "invert" : ""}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <motion.span
        variants={{
          initial: { opacity: 0, x: 30 },
          hover: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`font-bold text-[1rem] sm:text-[1.3rem] ${
          scrolled ? "text-neutral-100" : "text-shadow-900"
        }`}
      >
        {text}
      </motion.span>
    </motion.button>
  );
};

export default HomeBtn;
