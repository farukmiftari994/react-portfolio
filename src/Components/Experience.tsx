import { EXPERIENCES } from "../constants";
const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Work Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-2/4">
              <h6 className="mb-2 font-semibold text-sky-400">
                {experience.role} -{" "}
                <span className="text-sm text-white">
                  {experience.organization}
                </span>
              </h6>
              {experience.role2 && (
                <h6 className="mb-2 font-semibold text-sky-400">
                  {experience.role2} -{" "}
                  <span className="text-sm text-white">
                    {experience.organization}
                  </span>
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
