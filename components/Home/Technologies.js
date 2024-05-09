"use client";
import React, { useContext } from "react";

import TechnologyCard from "./TechnologyCard";
import { GlobalContext } from "@/context/GlobalContext";

const Technologies = () => {
  const { palette } = useContext(GlobalContext);
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
