import React from "react";
import lptp from "../assets/lptp.png";
import me from "../assets/me.png";

const Img = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="relative flex justify-center overflow-hidden group">
        <img
          className="transition-transform  duration-10000 ease-in-out group-hover:translate-y-[-900px] absolute w-[470px] object-cover mt-5"
          src={"https://i.imgur.com/kV0hdUm.png"}
          alt=""
        />
        <img className="relative -mb-5 -mt-[14px]" src={lptp} alt="" />
      </div>
    </div>
  );
};

export default Img;
