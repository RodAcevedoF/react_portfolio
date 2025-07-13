// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";
//import de from "./locales/es/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es }
  },
  lng: "en", // Idioma inicial (sin autodetección)
  fallbackLng: "en", // Idioma por defecto si falta traducción
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
