import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          heroTitle: "Full Stack Developer",
          heroContent:
            "I'm a recent graduate from Code Academy Berlin with skills in both front-end and back-end development. I specialize in crafting responsive web applications and thrive on solving complex problems with innovative technologies. Eager to contribute to collaborative development team.",
        },
      },
      de: {
        translation: {
          heroTitle: "Full Stack Entwickler",
          heroContent:
            "Ich bin ein kürzlich graduierter Absolvent der Code Academy Berlin mit Fähigkeiten sowohl im Front-End- als auch im Back-End-Entwicklung. Ich spezialisiere mich auf die Erstellung responsiver Webanwendungen und blühe auf, wenn es darum geht, komplexe Probleme mit innovativen Technologien zu lösen. Ich freue mich darauf, zu einem kollaborativen Entwicklungsteam beizutragen.",
        },
      },
    },
  });

export default i18n;
