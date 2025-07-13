import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ModalProvider, ScrollProvider, CardProvider } from "./contexts";
import App from "./App.tsx";
import "./index.css";
import "./i18n";

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
