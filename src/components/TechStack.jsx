import React from "react";
import TechstackCard from "./TechstackCard";
import {
  FiBarChart2,
  FiBook,
  FiCloud,
  FiEdit,
  FiFileText,
  FiHeart,
} from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoSass } from "react-icons/bi";
import { SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";

const items = [
  { icon: <FaHtml5 color="#DD4B25" />, color: "#444444", label: "HTML" },
  { icon: <IoLogoCss3 color="#3595CF" />, color: "#444444", label: "CSS" },
  {
    icon: <FaJsSquare color="#EFD81D" />,
    color: "#444444",
    label: "Javascript",
  },

  { icon: <FaReact color="#087EA4" />, color: "#444444", label: "React" },
  {
    icon: <RiTailwindCssFill color="#44A8B3" />,
    color: "#444444",
    label: "Tailwind",
  },

  { icon: <BiLogoSass color="#C66394" />, color: "#444444", label: "Sass" },
  { icon: <SiNextdotjs color="#FFFFFF" />, color: "#444444", label: "NextJs" },
  {
    icon: <IoLogoNodejs color="#509941" />,
    color: "#444444",
    label: "NodeJs",
  },

  { icon: <SiMongodb color="#00ED64" />, color: "#444444", label: "MongoDb" },
  {
    icon: <SiExpress color="#F7F7F7" />,
    color: "#444444",
    label: "ExpressJs",
  },
];
const TechStack = () => {
  return (
    <div className="font-bold tracking-widest ">
      <h1 className="text-gray-400">TECH STACK</h1>
      <div style={{ position: "relative" }}>
        <TechstackCard items={items} className="custom-class" />
      </div>
    </div>
  );
};

export default TechStack;
