import profile from "../images/faruk.png";

const Main = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl tracking-tight lg:mt-16 lg:text-6xl">
              Faruk Miftari
            </h1>
            <span className="bg-gradient-to-r from-sky-200 via-white-300 to-blue-300 bg-clip-text text-2xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-l py-2 font-light tracking-tighter">
              I'm a recent graduate from Code Academy Berlin with skills in both
              front-end and back-end development. I specialize in crafting
              responsive web applications and thrive on solving complex problems
              with innovative technologies. Eager to contribute to collaborative
              development team.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="w-80" src={profile} alt="Faruk Miftari" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
