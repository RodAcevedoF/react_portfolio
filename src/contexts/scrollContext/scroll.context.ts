import { createContext, useContext } from "react";

export type BackgroundMode = "default" | "particles";

type ScrollContextType = {
  mode: BackgroundMode;
  scrolled: boolean;
  setScrolled: React.Dispatch<React.SetStateAction<boolean>>;
  toggleParticles: () => void;
};

export const ScrollContext = createContext<ScrollContextType>({
  scrolled: false,
  setScrolled: () => {},
  mode: "default",
  toggleParticles: () => {}
});

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  // Permitimos scrolled = false, que es boolean, pero no undefined
  if (context === undefined) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
