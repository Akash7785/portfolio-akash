import React from "react";

const Experience = () => {
  return (
    <div className="">
      <h1 className="font-bold text-gray-400 tracking-widest mb-10">
        EXPERIENCE
      </h1>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <p>2023 - 2024</p>
        </div>
        <div className="col-span-4">
          <p className="text-lg tracking-wide font-semibold">
            Frontend Software Developer
          </p>
          <p className="">Ocean ThinkIT • Full-time</p>
          <p className="mt-5">
            For the past two years, I have primarily worked with startups,
            developing products from the ground up. I have led the frontend
            development of an AI-powered Interview Platform, building a job
            marketplace for dentists, and creating a system for managing
            promotional prize games.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
