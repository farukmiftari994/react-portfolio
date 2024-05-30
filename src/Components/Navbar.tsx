import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import logo from "../assets/logo_white.png";
import logo2 from "../assets/logo_black.png";
import Settings from "./Settings";
import { useTranslation } from "react-i18next";

const Navbar = ({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <nav className=" mb-20 flex items-center justify-between py-2">
      <div className="flex  items-center ">
        {darkMode && "dark" ? (
          <img className="w-20 sm:w-40" src={logo2} alt="logo" />
        ) : (
          <img className="w-20 sm:w-40" src={logo} alt="logo" />
        )}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/farukmiftari/">
          <FaLinkedin className="hover:text-blue-500" />
        </a>
        <a href="https://github.com/farukmiftari994">
          <FaGithub className="hover:text-gray-600" />
        </a>
        <a href={`${t("cv")}`} download className="hover:text-blue-500 group">
          <TbFileCv />
          <span className="absolute text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity text-neutral-950 bg-gray-300 p-2 m-1 border-2 rounded-xl border-neutral-950 dark:border-white dark:bg-blue-400">
            {t("cvText")}
          </span>
        </a>
        <Settings toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
};

export default Navbar;
