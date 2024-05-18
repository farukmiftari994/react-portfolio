import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className=" mt-[-40px] mb-20 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center ">
        {/* <h1 className="ml-8 text-bold">Faruk Miftari</h1> */}
        <img className=" w-48" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <SiGmail />
      </div>
    </nav>
  );
};

export default Navbar;
