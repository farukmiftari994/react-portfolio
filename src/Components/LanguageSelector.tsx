import i18next from "i18next";

const languages = [
  { code: "en", lang: "Enlgish" },
  { code: "de", lang: "Deutsch" },
];

const LanguageSelector = () => {
  const changeLanguage = (lng: string | undefined) => {
    i18next.changeLanguage(lng);
  };
  return (
    <div>
      {languages.map((lng) => {
        return (
          <button key={lng.code} onClick={void changeLanguage(lng.code)}>
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
