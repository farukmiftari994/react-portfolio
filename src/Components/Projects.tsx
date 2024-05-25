import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.image}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-3 text-neutral-800 dark:text-neutral-400">
                {project.description}
              </p>
              <a
                href={project.githubRepo}
                className="mb-3 font-bold text-blue-400 block
                "
              >
                Github Repo
              </a>

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white dark:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
