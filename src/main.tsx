import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ModalProvider, ScrollProvider, CardProvider } from "./contexts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <ScrollProvider>
        <CardProvider>
          <App />
        </CardProvider>
      </ScrollProvider>
    </ModalProvider>
  </StrictMode>
);
