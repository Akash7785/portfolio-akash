import React from "react";
import me from "../assets/me.png";
import linkedIn from "../assets/linkedin-icon.svg";
import github from "../assets/github-icon.svg";

const Home = () => {
  return (
    <div className="grid grid-cols-3 justify-start items-center my-20 mt-5">
      <div className="w-40 col-span-1 h-40 mx-5 my-15">
        <img
          className="w-40 h-40 object-cover p-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 rounded-full"
          src={me}
          alt=""
        />
      </div>
      <div className="col-span-2">
        <div className="text-2xl font-bold">
          <h1 className="text-3xl">
            Hey, I'm Akash.{" "}
            <span className="text-gray-400 text-3xl">
              {" "}
              I'm a Frontend Software Developer.
            </span>
          </h1>
        </div>
        <div className="flex items-center cursor-pointer  text-gray-400 mt-10 justify-between">
          <div className="flex items-center ">
            <h1 className="text-center">🏠Lucknow, India.</h1>
          </div>
          <div className="flex gap-5 mx-10">
            <div className="flex items-center ">
              <a
                href="https://www.linkedin.com/in/akash-kumar-6a4576215/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-6 h-6 mx-1" src={linkedIn} alt="" />
                <h1>Linkedin</h1>
              </a>
            </div>
            <div className="flex items-center ">
              <a
                href="https://github.com/Akash7785"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-6 h-6 mx-1" src={github} alt="" />
                <h1>Github</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
