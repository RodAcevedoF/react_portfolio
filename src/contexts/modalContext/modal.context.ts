import { createContext, type Dispatch, useContext } from "react";

export const ModalContext = createContext<{
  state: boolean;
  setState: Dispatch<React.SetStateAction<boolean>>;
}>({ state: false, setState: () => null });

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Modal is being used outside its provider");
  return context;
};
