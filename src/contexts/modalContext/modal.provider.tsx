import { type ReactNode, useState } from "react";
import { ModalContext } from "./modal.context";
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ state, setState }}>
      {children}
    </ModalContext.Provider>
  );
};
