import Flag from "react-flagkit";
import { useTranslation } from "react-i18next";

const gb = <Flag country="GB" />;
const de = <Flag country="DE" />;

const languages = [
  { code: "en", lang: gb },
  { code: "de", lang: de },
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
