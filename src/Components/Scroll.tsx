import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Scroll = (sections: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.clientHeight > scrollPosition
        ) {
          if (location.pathname !== section.path) {
            navigate(section.path);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location, navigate, sections]);
};

export default Scroll;
