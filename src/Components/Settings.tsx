import LanguageSelector from "./LanguageSelector";
import Toggle from "./Toggle";
import { FiSettings } from "react-icons/fi";

const Settings = ({ toggleDarkMode }: { toggleDarkMode: () => void }) => {
  return (
    <div className="dropdown dropdown-left">
      <div tabIndex={0}>
        <FiSettings />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Toggle toggleDarkMode={toggleDarkMode} />
        </li>
        <li>
          <LanguageSelector />
        </li>
      </ul>
    </div>
  );
};

export default Settings;
