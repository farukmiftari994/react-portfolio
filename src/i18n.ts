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
  PROJECTS_EN,
  PROJECTS_DE,
} from "./constants";

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          heroTitle: "Full Stack Developer",
          heroContent: `${HERO_CONTENT_EN}`,
          aboutTitle: "About Me",
          aboutContent: `${ABOUT_TEXT_EN}`,
          technologiesTitle: "Technologies",
          experienceTitle: "Work Experience",
          experience: EXPERIENCES_EN,
          projectsTitle: "Projects",
          projects: PROJECTS_EN,
          contact: "Get in Touch",
          allRights: "© 2024 Faruk Miftari. All rights reserved.",
        },
      },
      de: {
        translation: {
          heroTitle: "Full Stack Entwickler",
          heroContent: `${HERO_CONTENT_DE}`,
          aboutTitle: "Über mich",
          aboutContent: `${ABOUT_TEXT_DE}`,
          technologiesTitle: "Technologien",
          experienceTitle: "Arbeitserfahrung",
          experience: EXPERIENCES_DE,
          projectsTitle: "Projekte",
          projects: PROJECTS_DE,
          contact: "In Kontakt kommen",
          allRights: "© 2024 Faruk Miftari. Alle Rechte vorbehalten.",
        },
      },
    },
  });

export default i18n;
