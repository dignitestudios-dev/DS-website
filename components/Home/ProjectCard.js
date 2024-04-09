'use client'

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const ProjectCard = ({ title, description, image, projectLink }) => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className="group h-auto lg:h-[420px] p-3 lg:p-0 flex flex-col items-start gap-2 lg:mb-12 relative">
      <img
        src={image}
        alt=""
        className="w-full h-[220px] lg:h-[360px] group-hover:cursor-pointer hover:brightness-80 transition-all duration-700"
      />
      <a
        href={projectLink}
        className="text-white font-medium underline absolute z-20 top-[45%] left-[40%] hidden group-hover:block transition-all duration-700"
      >
        View project
      </a>
      <div className="w-full flex justify-between items-center pr-1">
        <h3 className="text-xl lg:text-2xl font-bold">{title}</h3>
        <button className="">
          <img src={"/case-study-arrow.png"} alt="" className="w-4 lg:w-5 " />
        </button>
      </div>
      <p
        style={{ color: palette?.light_contrast_color }}
        className="text-xs lg:text-sm font-normal "
      >
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
