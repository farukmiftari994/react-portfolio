import cat from "../images/logo.png";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-sky-300">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl w-[60%] border-4" src={cat} alt="cat" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="flex  justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              I am a dedicated and versatile Full Stack Developer with a passion
              for creating efficent and user-friendly web applications. I
              completed an intensive training in Full Stack Development,
              covering Front-End technologies such as HTML, CSS, JavaScript, and
              React, as well as Back-End technologies including Node.js,
              Express, and databases like MongoDB. Gained hands-on experience in
              building dynamic, interactive web applications through
              project-based learning and real-world simulations. Acquired
              knowledge of version control systems such as Git and proficiency
              in scrum/AGILE framework simulating a work environment (daily
              stand-ups, code reviews, group presentations).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
