import { useState, useEffect } from "react";
import { CardContext } from "./card.context";

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleClickOutside = () => {
      console.log("[provider] click fuera, cerrando todas");
      setActiveIndex(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <CardContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </CardContext.Provider>
  );
};
