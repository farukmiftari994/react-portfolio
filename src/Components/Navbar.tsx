import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo_white.png";
import logo2 from "../assets/logo_black.png";
import Settings from "./Settings";

const Navbar = ({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  return (
    <nav className="mt-[-40px] mb-20 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center ">
        {darkMode && "dark" ? (
          <img className="w-48" src={logo2} alt="logo" />
        ) : (
          <img className="w-48" src={logo} alt="logo" />
        )}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="hover:text-blue-500" />
        <FaGithub className="hover:text-gray-600" />
        <Settings toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
};

export default Navbar;
