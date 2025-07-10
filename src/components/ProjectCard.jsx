import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

import projectsData from "../project.json";

const ProjectCard = () => {
  return (
    <div className="sm:flex">
      {projectsData.map((project) => (
        <div
          key={project.id}
          className=" bg-[#0c0f11] flex items-center justify-center p-6"
        >
          <div className="bg-[#1a1f24] rounded-2xl shadow-lg max-w-sm w-full overflow-hidden text-gray-200">
            <img
              src={project?.image}
              alt="Card Cover"
              className="w-full h-64 object-cover object-top opacity-80"
            />

            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">{project?.title}</h2>
              <p className="text-gray-400 text-sm line-clamp-2">
                {project?.description}
              </p>
              {project?.highlights.map((highlight, index) => (
                <li key={index} className="mt-2 text-xs text-gray-400 ">
                  {highlight}
                </li>
              ))}
              <p className="mt-2 text-sm text-gray-400 ">{project?.note}</p>
              <div className="flex items-center mt-4 gap-4 bg-[#23272f] p-1 rounded-md justify-center">
                {project?.techStack.map((tech, index) => (
                  <img
                    key={index}
                    className="w-6 rounded-md"
                    src={tech?.icon}
                    alt={tech?.name}
                  />
                ))}
              </div>

              {project?.links.map((link, index) => (
                <div key={index}>
                  <div className="flex items-center mt-4 gap-4 bg-[#23272f] p-1 rounded-md justify-center">
                    <a
                      href={link?.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-[#171515] flex items-center gap-2 text-white cursor-pointer px-4 py-1 text-sm  rounded-lg hover:bg-gray-800 transition">
                        <FaGithub className="text-lg" />
                        Github
                      </button>
                    </a>
                    <a
                      href={link?.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-[#2563eb] flex items-center gap-2 text-white cursor-pointer px-4 py-1 text-sm  rounded-lg hover:bg-blue-700 transition">
                        <IoIosGlobe className="text-lg" />
                        Live
                      </button>
                    </a>
                    <a
                      href={link?.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-[#f43f5e] flex items-center gap-2 text-white cursor-pointer px-4 py-1 text-sm  rounded-lg hover:bg-rose-600 transition">
                        <MdLiveTv className="text-lg" />
                        Video
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
