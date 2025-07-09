import React from "react";
import experienceData from "../experience.json";

const Experience = () => {
  return (
    <div className="pt-20">
      <h1 className="font-bold text-gray-400 tracking-widest mb-10">
        EXPERIENCE
      </h1>
      {experienceData.map((experience) => (
        <div key={experience.id} className="grid grid-cols-5">
          <div className="col-span-1 text-sm text-gray-200">
            <p>
              {experience?.startDate} - {experience?.endDate}
            </p>
            <p></p>
          </div>
          <div className="col-span-4">
            <p className="text-lg tracking-wide font-semibold text-gray-200">
              {experience?.position}
            </p>
            <p className="text-sm text-gray-200">
              {experience?.company} • {experience?.type}
            </p>
            <p className="mt-2 text-sm  text-gray-300">
              {experience?.description}
            </p>
            <div>
              {experience?.highlights.map((highlight, index) => (
                <li key={index} className="mt-2 text-sm text-gray-400 ">
                  {highlight}
                </li>
              ))}
            </div>

            <div className="border-b-1 my-5 border-gray-700"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
