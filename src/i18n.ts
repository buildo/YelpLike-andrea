import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";

export const defaultNS = "ns1";

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  defaultNS,
  resources: {
    en: {
      ns1: en,
    },
  },
});

export default i18next;
