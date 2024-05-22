import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../images/logo.png";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
const Navbar = () => {
  return (
    <nav className=" mt-[-40px] mb-20 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center ">
        <img className="w-48" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="hover:text-blue-500" />
        <FaGithub className="hover:text-gray-600" />
        <SiGmail className="hover:text-[#d44638]" />
        <PiMicrosoftOutlookLogo className="hover:text-sky-600" />
      </div>
    </nav>
  );
};

export default Navbar;
