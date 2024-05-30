import about from "../assets/hero.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about">
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">{t("aboutTitle")}</h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <img
                className="rounded-2xl border-black dark:border-white w-[60%] border-4"
                src={about}
                alt="about"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl text-center lg:text-start text-lg py-6">
                {t("aboutContent")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
