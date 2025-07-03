import { createContext, useContext } from "react";

export interface CardContextType {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

export const CardContext = createContext<CardContextType>({
  activeIndex: null,
  setActiveIndex: () => {}
});

export const useCardContext = (): CardContextType => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};
