import { type ReactNode, useState, useEffect } from "react";
import { ScrollContext, type BackgroundMode } from "./scroll.context";
import Particles from "../../components/animations/Particles"; // Asegúrate de usar el correcto

type ScrollProviderProps = { children: ReactNode };

const particlesDefaultProps = {
  alphaParticles: true,
  disableRotation: false,
  moveParticlesOnHover: false,
  particleBaseSize: 70,
  particleColors: ["#bcbcbc", "#ffd966", "#4298fd"],
  particleCount: 900,
  particleSpread: 7,
  speed: 0.1,
  className: "fixed w-screen h-screen -z-10"
};

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mode, setMode] = useState<BackgroundMode>("particles");

  const toggleParticles = () => {
    setMode((prev) => (prev === "particles" ? "default" : "particles"));
  };

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      if (isScrolled && mode === "default") {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [mode]);

  return (
    <ScrollContext.Provider
      value={{ scrolled, setScrolled, mode, toggleParticles }}
    >
      {/* Fondo solo si está en modo partículas */}
      {mode === "particles" && <Particles {...particlesDefaultProps} />}
      {children}
    </ScrollContext.Provider>
  );
};
