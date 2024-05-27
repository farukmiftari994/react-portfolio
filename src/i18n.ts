import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import {
  HERO_CONTENT_EN,
  HERO_CONTENT_DE,
  ABOUT_TEXT_EN,
  ABOUT_TEXT_DE,
  EXPERIENCES_EN,
  EXPERIENCES_DE,
} from "./constants";

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          heroTitle: "Full Stack Developer",
          heroContent: `${HERO_CONTENT_EN}`,
          aboutTitle: "About Me",
          aboutContent: `${ABOUT_TEXT_EN}`,
          technologies: "Technologies",
          experience: "Work Experience",
          experienceEn: EXPERIENCES_EN,
        },
      },
      de: {
        translation: {
          heroTitle: "Full Stack Entwickler",
          heroContent: `${HERO_CONTENT_DE}`,
          aboutTitle: "Über mich",
          aboutContent: `${ABOUT_TEXT_DE}`,
          technologies: "Technologien",
          experience: "Arbeitserfahrung",
          experienceEn: EXPERIENCES_DE,
        },
      },
    },
  });

export default i18n;
