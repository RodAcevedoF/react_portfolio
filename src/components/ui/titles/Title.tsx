import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useScrollContext } from "../../../contexts";
import { type TitleProps } from "../../../types/HomeTypes";
import { animationTitle } from "../../animations/animationTitle";

export const Title = ({
  text,
  width = "w-full",
  extraClases,
  animateWords = false
}: TitleProps) => {
  const { scrolled } = useScrollContext();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    el.innerHTML = text;
    animationTitle(el, { words: animateWords });
    setRendered(true);
  }, [text, animateWords]);

  return (
    <motion.h1
      ref={titleRef}
      className={`font-bold ${width} flex flex-wrap gap-3 tracking-tighter sm:gap-5 justify-center items-center transition-colors duration-300  ${
        extraClases ?? ""
      } ${scrolled ? "text-neutral-100" : "text-shadow-900"}`}
      style={{
        whiteSpace: "normal",
        visibility: rendered ? "visible" : "hidden"
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
};
