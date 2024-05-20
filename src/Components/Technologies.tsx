import { DiHtml5 } from "react-icons/di";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiGraphql } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoNetlify } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { SiApollographql } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiHtml5 className="text-7xl text-orange-600" />
          <p className="mt-2 flex justify-center">HTML5</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-sky-600" />
          <p className="mt-2 flex justify-center">CSS3</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-300" />
          <p className="mt-2 flex justify-center">Javascript</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl text-blue-500" />
          <p className="mt-2 flex justify-center">Typescript</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsFill className="text-7xl text-cyan-400" />
          <p className="mt-2 flex justify-center">React</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-white" />
          <p className="mt-2 flex justify-center">Next.js</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiNodejs className="text-7xl text-green-500" />
          <p className="mt-2 flex justify-center">Node.js</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGraphql className="text-7xl text-fuchsia-700" />
          <p className="mt-2 flex justify-center">GraphQL</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-700" />
          <p className="mt-2 flex justify-center">MongoDB</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNpm className="text-7xl text-red-500" />
          <p className="mt-2 flex justify-center">npm</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BsGithub className="text-7xl text-white" />
          <p className="mt-2 flex justify-center">Github</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaBootstrap className="text-7xl text-purple-700" />
          <p className="mt-2 flex justify-center">Bootstrap</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-teal-600" />
          <p className="mt-2 flex justify-center">Tailwind</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-white" />
          <p className="mt-2 flex justify-center">express.js</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoFirebase className="text-7xl text-amber-500" />
          <p className="mt-2 flex justify-center">Firebase</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoNetlify className="text-7xl text-teal-800" />
          <p className="mt-2 flex justify-center">Netlify</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostman className="text-7xl text-orange-600" />
          <p className="mt-2 flex justify-center">Postman</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiApollographql className="text-7xl text-blue-900" />
          <p className="mt-2 flex justify-center">Apollo</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGitAlt className="text-7xl text-red-600" />
          <p className="mt-2 flex justify-center">Git</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
