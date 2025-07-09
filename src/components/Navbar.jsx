import React from "react";
import { Link, Element } from "react-scroll";
import Projects from "./Projects";
import Home from "./Home";
import TechStack from "./TechStack";
import Experience from "./Experience";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <div className="">
      <nav className="sticky top-0 bg-[#0c0f11] z-30 py-4 ">
        <ul className="flex justify-between">
          <div>
            <li className="text-xl tracking-widest cursor-pointer text-gray-400 hover:text-white font-bold">
              <Link smooth={true} duration={500} to="home">
                AKASH DEV
              </Link>
            </li>
          </div>
          <div className="flex gap-6">
            <li className="cursor-pointer text-lg text-gray-400 hover:text-white">
              <Link smooth={true} duration={500} to="experience">
                Work Experience
              </Link>
            </li>
            <li className="cursor-pointer text-lg text-gray-400 hover:text-white">
              <Link smooth={true} duration={500} to="project">
                Project
              </Link>
            </li>
            <li className="cursor-pointer text-lg text-gray-400 hover:text-white">
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

      {/* <div>
        <h1 className="text-xl tracking-widest cursor-pointer text-gray-400 hover:text-white font-bold">
          AKASH DEV
        </h1>
      </div>
      <div>
        <ul className="flex gap-10">
          <li className="cursor-pointer text-lg text-gray-400 hover:text-white">
            Projects
          </li>
          <li className="cursor-pointer text-gray-400 hover:text-white text-lg">
            About
          </li>
          <li className="cursor-pointer text-gray-400 hover:text-white text-lg">
            Contact
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
