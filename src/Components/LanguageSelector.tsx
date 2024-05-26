import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "Enlgish" },
  { code: "de", lang: "Deutsch" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    try {
      i18n.changeLanguage(lng);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  return (
    <div>
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.language ? "selected" : ""}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
