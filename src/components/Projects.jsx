import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="my-10">
      <div></div>
      <h1 className="font-bold text-gray-400 tracking-widest pt-15 mb-5">
        PROJECTS
      </h1>
      <div className="mb-10">
        <ProjectCard />
      </div>
      <h1 className="font-bold sm:text-2xl text-center text-gray-400 tracking-widest mb-5">
        🧑‍💻 Fullstack DevConnect comming Soon{" "}
        <span className="text-xl mt-2">❤️🚀</span>
      </h1>
    </div>
  );
};

export default Projects;
