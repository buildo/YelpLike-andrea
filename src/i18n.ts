import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  defaultNS: "translation",
  resources: {
    en: {
      translation: en,
    },
  },
});

export default i18next;
