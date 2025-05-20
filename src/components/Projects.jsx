import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../projects.json";

const Projects = () => {
  return (
    <div className="my-10">
      <div></div>
      <h1 className="font-bold text-gray-400 tracking-widest mb-10">
        PROJECTS
      </h1>
      <div className="mb-10">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
