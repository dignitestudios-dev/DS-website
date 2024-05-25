"use client";
import React, { useContext } from "react";

import TechnologyCard from "./TechnologyCard";
import { GlobalContext } from "@/context/GlobalContext";

const Technologies = () => {
  const { palette, theme } = useContext(GlobalContext);
  const technologies = [
    {
      color: "/flutter-color.webp",
      gray: "/flutter-gray.webp",
      name: "Flutter"
    },
    {
      color: "/swift-color.webp",
      gray: "/swift-gray.webp",
      name: "Swift"
    },
    {
      color: "/vue-color.webp",
      gray: "/vue-gray.webp",
      name: "Vue"

    },
    {
      color: "/react-color.webp",
      gray: "/react-gray.webp",
      name: "React"

    },
    {
      color: "/tailwind-color.webp",
      gray: "/tailwind-gray.webp",
      name: "Tailwind"

    },
    {
      color: "/figma-color.webp",
      gray: "/figma-gray.webp",
      name: "Figma"

    },
    {
      color: "/ai-color.webp",
      gray: "/ai-gray.webp",
      name: "Adobe Illustrator"

    },
    {
      color: "/ps-color.webp",
      gray: "/ps-gray.webp",
      name: "Photoshop"

    },

  ];
  return (
    <div
      style={{
        color: palette.color,
      }}
      className="w-full h-auto mt-5 mb-12 px-2 flex flex-col gap-y-4 gap-3 justify-start items-center"
    >
      <h1 className="text-[24px] font-bold" style={{color: theme == "dark" ? "#fff" : "#0c0c0c"}}>Technologies we’re using</h1>
      <div className="w-full lg:w-[80%] xl:w-[60%] h-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 justify-center gap-4 items-center ">
        {technologies?.map((technology, key) => {
          return <TechnologyCard technology={technology} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Technologies;
