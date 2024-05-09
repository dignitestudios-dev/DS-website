'use client'

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Link from "next/link"

const ProjectCard = ({ title, description, image, projectLink }) => {
  const { palette, mouseCursor, disableMouseCursor } = useContext(GlobalContext);
  return (
    <Link
      href={projectLink}
      onMouseMove={(e) => {
        mouseCursor("View Project", e);
      }}
      onMouseOut={() => { disableMouseCursor(); }}
      className="group  h-auto  p-3 lg:p-0 flex flex-col items-start gap-2 lg:mb-12 relative">
      <img

        src={image}
        alt={title}
        className="w-full  rounded-xl md:rounded-3xl    hover:brightness-80 transition-all duration-700"
      />

      <div className="flex flex-col justify-start my-1 items-start md:px-2">

        <div className="w-full flex justify-between items-center pr-1">
          <h3 className="text-xl lg:text-2xl font-bold">{title}</h3>
          <button type='button' className="" name="navigator">
            <img src={"/case-study-arrow.webp"} alt="" className="w-2 md:w-4 lg:w-5 " />
          </button>
        </div>
        <p
          style={{ color: palette?.light_contrast_color }}
          className="text-xs lg:text-sm font-normal "
        >
          {description}
        </p>
      </div>

    </Link>
  );
};

export default ProjectCard;
