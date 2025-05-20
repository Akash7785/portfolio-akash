import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import TechStack from "./TechStack";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Img from "./Img";

const Body = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[55%]">
        <Navbar />
        {/* <Home />
        <TechStack />
        <Experience />
        <Projects />
        <Contact /> */}
      </div>
    </div>
  );
};

export default Body;
