import hero from "../assets/hero.png";
import { useTranslation } from "react-i18next";

const Hero = ({ darkMode }: { darkMode: boolean }) => {
  const { t } = useTranslation();

  return (
    <section id="hero">
      {" "}
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap justify-around">
          <div className="w-full lg:w-2/4 flex justify-center items-center">
            <div className="flex flex-col items-center lg:items-start lg:justify-center">
              <h1 className="pb-16 text-5xl tracking-tight lg:text-6xl">
                Faruk Miftari
              </h1>
              {darkMode && "dark" ? (
                <span className="bg-gradient-to-r font-semibold from-sky-200 via-white-300 to-blue-300 bg-clip-text text-3xl tracking-tight text-transparent">
                  {t("heroTitle")}
                </span>
              ) : (
                <span className="bg-gradient-to-r font-semibold from-sky-600 via-white-300 to-blue-700 bg-clip-text text-3xl tracking-tight text-transparent">
                  {t("heroTitle")}
                </span>
              )}
              <p className="my-2 max-w-lg py-2 text-center lg:text-start text-lg tracking-tighter">
                {t("heroContent")}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <img
                className="border-4 border-black dark:border-white rounded-2xl w-[60%]"
                src={hero}
                alt="Faruk Miftari"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
