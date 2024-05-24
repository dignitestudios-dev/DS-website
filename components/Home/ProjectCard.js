"use client";

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";

const ProjectCard = ({
  title,
  description,
  image,
  mobile_image,
  projectLink,
  logo,
}) => {
  const { palette, mouseCursor, disableMouseCursor, theme } =
    useContext(GlobalContext);
    const [hoverImage, setHoverImage] = useState(image)
    const [isHover, setIsHover] = useState(false)
    
  return (
    <Link
      href={projectLink}
      onMouseOver={()=>{
        setHoverImage(mobile_image);
        setIsHover(true);
      }}
      
      onMouseOut={() => {
          setHoverImage(image);
          setIsHover(false);

      }}
      className={`group w-full   hover:bg-[#F15C20] transition-all duration-500  py-[28px] px-[20px] flex   items-start gap-2 lg:mb-12 relative ${
        theme == "dark" ? "bg-[#1c1c1c]" : "bg-[#f9f9f9]"
      } rounded-[32px] `}
    >
     

      <div className="w-[65%] h-full flex flex-col justify-start gap-6 my-1 items-start md:px-2">
        <div className="w-full flex justify-start gap-2 items-center pr-1">
          <img src={logo} alt="app-logo" />
          <h3 className="text-xl lg:text-2xl xl:text-[22px] font-semibold group-hover:text-white">
            {title}
          </h3>
        </div>
        <p
          
          className={`text-xs lg:text-sm xl:text-[16px] ${theme == "dark" ? "text-[#b4b4b4]" : "text-[#5c5c5c]" } group-hover:text-gray-100 font-normal `}
        >
          {description}
        </p>
        <div className="w-full mt-auto flex justify-start gap-2 items-center pr-1">
          <Link href={"/"}>
            <img src="/google_btn.png" />
          </Link>
          <Link href={"/"}>
            <img src="/apple_btn.png" />
          </Link>
        </div>
      </div>
      <div className="w-[35%]  h-full flex  justify-center lg:justify-start items-start relative ">
        <img
          layout="responsive"
          src={hoverImage}
          alt={title}
          className={`${isHover ? "group-hover:w-auto group-hover:h-auto group-hover:scale-150 group-hover:md:absolute group-hover:-top-4 group-hover:right-0" : "h-[250px] md:w-[194px] md:h-[355px] md:absolute -top-24 right-0"}  hover:brightness-80 transition-all duration-500 `}
        />
      </div>

      
    </Link>
  );
};

export default ProjectCard;
