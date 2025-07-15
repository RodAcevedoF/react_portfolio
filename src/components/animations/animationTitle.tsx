import gsap from "gsap";
import { splitChars, splitCharsWords } from "../../utils";

type AnimationTitleOptions = {
  words?: boolean;
};

const blueShades = ["#60a5fa", "#3b82f6", "#2563eb"];
const yellowShades = ["#fef9c3", "#fde68a", "#fcd34d"];

export const animationTitle = (
  titleElement: HTMLElement,
  options: AnimationTitleOptions
) => {
  if (!titleElement) return;

  const { words = false } = options;
  if (words) {
    splitCharsWords(titleElement);
  } else {
    splitChars(titleElement);
  }

  const chars = titleElement.querySelectorAll<HTMLElement>(".char");
  if (!chars.length) return;

  gsap.from(chars, {
    y: () => gsap.utils.random(-150, 150),
    x: () => gsap.utils.random(-150, 150),
    rotate: () => gsap.utils.random(-360, 360),
    scale: () => gsap.utils.random(0.5, 2),
    opacity: 0,
    duration: 0.4,
    stagger: 0.05,
    ease: "power2.out"
  });

  chars.forEach((char) => {
    const onHover = () => {
      const randomColor =
        Math.random() > 0.5
          ? blueShades[Math.floor(Math.random() * blueShades.length)]
          : yellowShades[Math.floor(Math.random() * yellowShades.length)];

      gsap.to(char, {
        y: gsap.utils.random(-50, 50),
        x: gsap.utils.random(-50, 50),
        rotate: gsap.utils.random(-180, 180),
        scale: gsap.utils.random(0.8, 1.5),
        color: randomColor,
        transformOrigin: "center",
        pointerEvents: "auto"
      });

      gsap.to(char, {
        y: 0,
        x: 0,
        rotate: 0,
        scale: 1,
        color: "inherit",
        delay: 0.5,
        transformOrigin: "center"
      });
    };

    char.addEventListener("mouseenter", onHover);
  });
};
