import React, {
  useRef,
  useEffect,
  useState,
  type CSSProperties,
  useCallback
} from "react";
import { gsap } from "gsap";

interface PixelTransitionProps {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: string;
  active?: boolean;
  trigger?: "click" | "hover";
  onToggle?: (nextState: boolean) => void;
  onClick?: () => void;
  hidden?: boolean;
}

const PixelTransition: React.FC<PixelTransitionProps> = ({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = "currentColor",
  animationStepDuration = 0.2,
  className = "",
  style = {},
  aspectRatio = "100%",
  active,
  trigger = "click",
  onToggle,
  onClick,
  hidden = false
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pixelGridRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const delayedCallRef = useRef<gsap.core.Tween | null>(null);

  const [internalActive, setInternalActive] = useState(false);
  const isControlled = active !== undefined;

  const animatePixels = useCallback(
    (activate: boolean): void => {
      const pixelGridEl = pixelGridRef.current;
      const activeEl = activeRef.current;
      if (!pixelGridEl || !activeEl) return;

      const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>(
        ".pixelated-image-card__pixel"
      );
      if (!pixels.length) return;

      gsap.killTweensOf(pixels);
      delayedCallRef.current?.kill();

      gsap.set(pixels, { display: "none" });

      const totalPixels = pixels.length;
      const staggerDuration = animationStepDuration / totalPixels;

      gsap.to(pixels, {
        display: "block",
        duration: 0,
        stagger: { each: staggerDuration, from: "random" }
      });

      delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
        activeEl.style.display = activate ? "block" : "none";
        activeEl.style.pointerEvents = activate ? "none" : "";
      });

      gsap.to(pixels, {
        display: "none",
        duration: 0,
        delay: animationStepDuration,
        stagger: { each: staggerDuration, from: "random" }
      });
    },
    [animationStepDuration]
  );

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = "";

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add(
          "pixelated-image-card__pixel",
          "absolute",
          "hidden"
        );
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const firstRender = useRef(true);

  useEffect(() => {
    if (!isControlled) return;
    if (firstRender.current) {
      firstRender.current = false;
      if (!active) return;
    }
    animatePixels(active);
  }, [active, isControlled, animatePixels]);

  const handleClick = (): void => {
    onClick?.(); // 👈 ejecutar también el onClick externo

    if (!isControlled && trigger === "click") {
      const next = !internalActive;
      setInternalActive(next);
      animatePixels(next);
      onToggle?.(next);
    }
  };

  const handleMouseEnter = (): void => {
    if (!isControlled && trigger === "hover") {
      animatePixels(true);
    }
  };

  const handleMouseLeave = (): void => {
    if (!isControlled && trigger === "hover") {
      animatePixels(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-sm text-[var(--primary-color)] ${className}`}
      style={{ display: hidden ? "none" : "block", ...style }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ paddingTop: aspectRatio }} />

      <div className="absolute inset-0 w-full h-full">{firstContent}</div>

      <div
        ref={activeRef}
        className="absolute inset-0 w-full h-full z-[10]"
        style={{ display: "none" }}
      >
        {secondContent}
      </div>

      <div
        ref={pixelGridRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
      />
    </div>
  );
};

export default PixelTransition;
