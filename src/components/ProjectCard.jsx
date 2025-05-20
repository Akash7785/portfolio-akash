import React from "react";
import react from "../assets/react.svg";
import Img from "./Img";
import lptp from "../assets/lptp.png";
import projectsData from "../projects.json";

const ProjectCard = () => {
  return (
    <div className="">
      {projectsData.projects.map((data) => (
        <div className="flex justify-between mt-5">
          <div className="border-1 border-gray-600 rounded-md w-[100%] p-5 ">
            <div className="relative flex justify-center overflow-hidden group">
              <img
                className="transition-transform duration-10000 ease-in-out group-hover:translate-y-[-900px] absolute w-[470px] object-cover mt-6"
                src={"https://i.imgur.com/kV0hdUm.png"}
                alt=""
              />
              <img className="relative -mb-5 -mt-[14px]" src={lptp} alt="" />
            </div>

            <div className="py-2">
              <h1 className="tracking-widest font-bold text-lg py-2 text-gray-300">
                {data.title}
              </h1>
              <h1 className="tracking-wide text-md text-gray-300 ">
                {data.description}
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              {data.programmingLanguages.map((item) => (
                <div
                  style={{ backgroundColor: item.color }}
                  className="flex justify-center py-2 px-5 text-center rounded-4xl gap-1"
                >
                  <img className="w-4" src={item.logo} alt="" />
                  <p className="text-xs text-[#5CB9FD] font-medium">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex mt-5 gap-5">
              <div className="bg-zinc-800 flex px-8 py-2 rounded-4xl gap-2">
                <img
                  className="w-5"
                  src="https://pouch.jumpshare.com/preview/xEO9ndGTWTnt_0jlKZtz-A_hRRwzR55JmkQSRcFej1j7fQhZUGoZpl1oo7FIkFK-lEq2ghuE35LTmVlwlkpHC5FS7gV8buH7O8u79Biy4Qw"
                  alt=""
                />
                <h1 className="text-sm ">Github Link</h1>
              </div>
              <div className="bg-zinc-800 flex px-8 py-2 rounded-4xl gap-2">
                <img
                  className="w-5 object-cover"
                  src="https://pouch.jumpshare.com/preview/ksSqT-b4IYeHbeZ7hXhQ3vuUisEYAfRW0XjQ18wB73gLqCqp1HtYKUZktchutHZYp65dbiJpyjkMBZ6JhOYsuw83Svp0XvvRhmF7nJLZl6c"
                  alt=""
                />
                <h1 className="text-sm ">Live Demo</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
