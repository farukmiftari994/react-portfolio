import profile from "../images/faruk.png";

const Hero = () => {
  return (
    <div className=" flex border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-around">
        <div className="w-full lg:w-1/3 flex justify-center align-center">
          <div className="flex flex-col items-center lg:items-start lg:justify-center">
            <h1 className="pb-16 text-6xl tracking-tight lg:text-6xl">
              Faruk Miftari
            </h1>
            <span className="bg-gradient-to-r from-sky-200 via-white-300 to-blue-300 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-lg py-2 font-light text-xl tracking-tighter">
              I'm a recent graduate from Code Academy Berlin with skills in both
              front-end and back-end development. I specialize in crafting
              responsive web applications and thrive on solving complex problems
              with innovative technologies. Eager to contribute to collaborative
              development team.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex">
          <div className="flex">
            <img
              className="border-4 rounded-[70px] border-blue-200 "
              src={profile}
              alt="Faruk Miftari"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
