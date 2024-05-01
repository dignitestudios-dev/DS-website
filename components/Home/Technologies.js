"use client";
import React, { useContext } from "react";

import TechnologyCard from "./TechnologyCard";
import { GlobalContext } from "@/context/GlobalContext";

const Technologies = () => {
  const { palette } = useContext(GlobalContext);
  const technologies = [
    {
      color: "/flutter-color.png",
      gray: "/flutter-gray.png",
      name: "Flutter"
    },
    {
      color: "/swift-color.png",
      gray: "/swift-gray.png",
      name: "Swift"
    },
    {
      color: "/vue-color.png",
      gray: "/vue-gray.png",
      name: "Vue"

    },
    {
      color: "/react-color.png",
      gray: "/react-gray.png",
      name: "React"

    },
    {
      color: "/tailwind-color.png",
      gray: "/tailwind-gray.png",
      name: "Tailwind"

    },
    {
      color: "/figma-color.png",
      gray: "/figma-gray.png",
      name: "Figma"

    },
    {
      color: "/ai-color.png",
      gray: "/ai-gray.png",
      name: "Adobe Illustrator"

    },
    {
      color: "/ps-color.png",
      gray: "/ps-gray.png",
      name: "Photoshop"

    },

  ];
  return (
    <div
      style={{
        color: palette.color,
      }}
      className="w-full h-auto mt-5 mb-12 flex flex-col gap-y-4 gap-3 justify-start items-center"
    >
      <h1 className="text-3xl font-bold">Technologies we’re using</h1>
      <div className="w-full h-auto flex flex-wrap md:flex-nowrap lg:flex-wrap justify-center gap-4 items-center ">
        {technologies?.map((technology, key) => {
          return <TechnologyCard technology={technology} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Technologies;
