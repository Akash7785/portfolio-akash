import { Link, Element } from "react-scroll";
import Projects from "./Projects";
import Home from "./Home";
import TechStack from "./TechStack";
import Experience from "./Experience";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <div className="">
      <nav className="sticky top-0 bg-[#0c0f11] z-30 py-4">
        <ul className="flex justify-between flex-wrap items-center">
          <div>
            <li className="text-sm sm:text-xl tracking-widest cursor-pointer text-gray-400 hover:text-white font-bold">
              <Link smooth={true} duration={500} to="home">
                AKASH DEV
              </Link>
            </li>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <li className="text-sm sm:text-lg cursor-pointer text-gray-400 hover:text-white">
              <Link smooth={true} duration={500} to="experience">
                Work Experience
              </Link>
            </li>
            <li className="text-sm sm:text-lg cursor-pointer text-gray-400 hover:text-white">
              <Link smooth={true} duration={500} to="project">
                Project
              </Link>
            </li>
            <li className="text-sm sm:text-lg cursor-pointer text-gray-400 hover:text-white">
              <Link smooth={true} duration={500} to="contact">
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </nav>

      <Element name="home">
        <Home />
        <TechStack />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>

      <Element name="project">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Navbar;
