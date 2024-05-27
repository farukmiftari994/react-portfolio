import { useTranslation } from "react-i18next";

interface experience {
  year: string;
  role: string;
  role2: string;
  organization: string;
  location: string;
}

const Experience = ({ darkMode }: { darkMode: boolean }) => {
  const { t } = useTranslation();
  const EXPERIENCE = t("experienceEn");
  const array = Object.values(EXPERIENCE) as unknown as experience[];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">{t("experience")}</h1>
      <div>
        {array.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-800 dark:text-neutral-400">
                {experience.year}
              </p>
            </div>
            <div className="w-full max-w-xl lg:w-2/4">
              <h6 className="mb-2 font-semibold text-sky-400">
                {experience.role} -{" "}
                {darkMode && "dark" ? (
                  <span className="text-sm text-white">
                    {experience.organization}
                  </span>
                ) : (
                  <span className="text-sm text-black">
                    {experience.organization}
                  </span>
                )}
              </h6>
              {experience.role2 && (
                <h6 className="mb-2 font-semibold text-sky-400">
                  {experience.role2} -{" "}
                  {darkMode && "dark" ? (
                    <span className="text-sm text-white">
                      {experience.organization}
                    </span>
                  ) : (
                    <span className="text-sm text-black">
                      {experience.organization}
                    </span>
                  )}
                </h6>
              )}
              <p>{experience.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
