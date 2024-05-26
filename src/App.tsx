import { useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="overflow-x-hidden text-neutral-950 antialiased selection:bg-cyan-300 selection:text-cyan-900 dark:text-neutral-300">
        <div className="fixed top-0 -z-10">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-200 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-neutral-950"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Hero darkMode={darkMode} />
          <About />
          <Technologies darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Projects />
          <Contact />
        </div>
        <p className="text-center text-sm py-2">
          © 2024 Faruk Miftari. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default App;
