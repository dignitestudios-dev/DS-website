"use client";
import React, { useContext } from "react";

import TechnologyCard from "./TechnologyCard";
import { GlobalContext } from "@/context/GlobalContext";

const Technologies = () => {
  const { palette, theme } = useContext(GlobalContext);
  const technologies = [
    {
      color: "/Mobile-app-development-technology-Flutter-Icon-color.webp",
      gray: "/Mobile-app-development-technology-Flutter-Icon-gray.webp",
      name: "Flutter",
      alt:"Mobile app development technology Flutter Icon",
      img_title:"Mobile app development technology Flutter Icon"
    },
    {
      color: "/Mobile-app-development-technology-Swift-Icon-color.webp",
      gray: "/Mobile-app-development-technology-Swift-Icon-gray.webp",
      name: "Swift",
      alt:"Mobile app development technology Swift Icon",
      img_title:"Mobile app development technology Swift Icon"
    },
    {
      color: "/Mobile-app-development-technology-Vue-Icon-color.webp",
      gray: "/Mobile-app-development-technology-Vue-Icon-gray.webp",
      name: "Vue",
      alt:"Mobile app development technology Vue Icon",
      img_title:"Mobile app development technology Vue Icon"
    },
    {
      color: "/Mobile-app-development-technology-react-Icon-color.webp",
      gray: "/Mobile-app-development-technology-react-Icon-gray.webp",
      name: "React",
      alt:"Mobile app development technology React Icon",
      img_title:"Mobile app development technology React Icon"
    },
    {
      color: "/Mobile-app-development-technology-tailwind-Icon-color.webp",
      gray: "/Mobile-app-development-technology-tailwind-Icon-gray.webp",
      name: "Tailwind",
      alt:"Mobile app development technology Tailwind Icon",
      img_title:"Mobile app development technology Tailwind Icon"
    },
    {
      color: "/Mobile-app-development-technology-Figma-Icon-color.webp",
      gray: "/Mobile-app-development-technology-Figma-Icon-gray.webp",
      name: "Figma",
      alt:"Mobile app development technology Figma Icon",
      img_title:"Mobile app development technology Figma Icon"
    },
    {
      color: "/Mobile-app-development-technology-AI-Icon-color.webp",
      gray: "/Mobile-app-development-technology-AI-Icon-gray.webp",
      name: "Adobe Illustrator",
      alt:"Mobile app development technology AI Icon",
      img_title:"Mobile app development technology AI Icon"
    },
    {
      color: "/Mobile-app-development-technology-PS-Icon-color.webp",
      gray: "/Mobile-app-development-technology-PS-Icon-gray.webp",
      name: "Photoshop",
      alt:"Mobile app development technology Photoshop Icon",
      img_title:"Mobile app development technology Photoshop Icon"
    },
  ];
  return (
    <div
      style={{
        color: palette.color,
      }}
      className="w-full h-auto mt-5 mb-12 px-2 flex flex-col gap-y-4 gap-3 justify-start items-center"
    >
      <h3
        className="text-[24px] 2xl:text-[30px] font-bold"
        style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
      >
        Technologies we’re using
      </h3>
      <div className="w-full lg:w-[80%] xl:w-[60%] 2xl:w-[50%] h-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 justify-center gap-4 items-center ">
        {technologies?.map((technology, key) => {
          return <TechnologyCard technology={technology} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Technologies;
