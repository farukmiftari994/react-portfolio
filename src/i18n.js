import i18next from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
