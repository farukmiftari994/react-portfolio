import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className=" mt-[-40px] mb-20 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center ">
        <img className="w-48" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="hover:text-blue-500" />
        <FaGithub className="hover:text-gray-600" />
      </div>
    </nav>
  );
};

export default Navbar;
