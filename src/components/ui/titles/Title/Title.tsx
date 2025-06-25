import { motion } from "framer-motion";
import { useScrollContext } from "../../../../contexts";

type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps) => {
  const { scrolled } = useScrollContext();

  return (
    <motion.h1
      className={`font-bold text-[4rem] w-full text-center leading-[1.5em] ${
        scrolled ? "text-neutral-100" : "text-shadow-900"
      } transition-colors duration-300 py-10 px-10`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {text}
    </motion.h1>
  );
};
