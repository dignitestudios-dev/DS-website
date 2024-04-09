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
    },
    {
      color: "/ai-color.png",
      gray: "/ai-gray.png",
    },
    {
      color: "/swift-color.png",
      gray: "/swift-gray.png",
    },
    {
      color: "/figma-color.png",
      gray: "/figma-gray.png",
    },
    {
      color: "/vue-color.png",
      gray: "/vue-gray.png",
    },
    {
      color: "/ps-color.png",
      gray: "/ps-gray.png",
    },
    {
      color: "/react-color.png",
      gray: "/react-gray.png",
    },
    {
      color: "/tailwind-color.png",
      gray: "/tailwind-gray.png",
    },
  ];
  return (
    <div
      style={{
        color: palette.color,
      }}
      className="w-full h-auto my-5 flex flex-col gap-3 justify-start items-center"
    >
      <h1 className="text-3xl font-bold">Technologies we’re using</h1>
      <div className="w-full h-auto flex flex-wrap justify-center gap-4 items-center ">
        {technologies?.map((technology, key) => {
          return <TechnologyCard technology={technology} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Technologies;
