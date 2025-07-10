import React from "react";
import me from "../assets/me.png";
import linkedIn from "../assets/linkedin-icon.svg";
import github from "../assets/github-icon.svg";

const Home = () => {
  return (
    <div className="grid pt-15 grid-cols-1 md:grid-cols-3 items-center my-20 mt-5 gap-y-8 md:gap-0">
      <div className="order-1 md:order-2 md:col-span-2 px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          Hey, I'm Akash.{" "}
          <span className="text-gray-400 block md:inline">
            I'm a Frontend Software Developer.
          </span>
        </h1>

        <div className="hidden md:flex flex-col md:flex-row items-start md:items-center text-gray-400 mt-6 md:mt-10 justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-center">🏠 Lucknow, India.</h1>
          </div>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/akash-kumar-6a4576215/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <img className="w-6 h-6" src={linkedIn} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Akash7785"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <img className="w-6 h-6" src={github} alt="GitHub" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <div className="order-2 md:order-1 w-full flex justify-center md:justify-start">
        <img
          className="w-40 h-40 object-cover p-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 rounded-full"
          src={me}
          alt="Akash"
        />
      </div>

      <div className="order-3 md:hidden flex flex-col items-center text-gray-400 gap-4 mt-4 px-4">
        <h1 className="text-center">🏠 Lucknow, India.</h1>
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/akash-kumar-6a4576215/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <img className="w-6 h-6" src={linkedIn} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Akash7785"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <img className="w-6 h-6" src={github} alt="GitHub" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
