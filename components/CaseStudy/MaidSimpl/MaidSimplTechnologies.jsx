"use client";
import React, { useContext } from "react";

import { GlobalContext } from "@/context/GlobalContext";
import MaidSimplTechnologyCard from "./MaisSimplTechnologyCard";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const MaidSimplTechnologies = () => {
  const { palette, theme } = useContext(GlobalContext);
  const technologies = [
    {
      color: "/flutter-color.png",
      gray: "/flutter-gray.png",
      name: "Flutter",
    },
    {
      color: "/swift-color.png",
      gray: "/swift-gray.png",
      name: "Swift",
    },
    {
      color: "/vue-color.png",
      gray: "/vue-gray.png",
      name: "Vue",
    },
    {
      color: "/react-color.png",
      gray: "/react-gray.png",
      name: "React",
    },
    {
      color: "/tailwind-color.png",
      gray: "/tailwind-gray.png",
      name: "Tailwind",
    },
    {
      color: "/figma-color.png",
      gray: "/figma-gray.png",
      name: "Figma",
    },
  ];
  return (
    <div
      style={{
        color: palette.color,
      }}
      className="w-full h-auto mt-5 mb-12 flex flex-col gap-y-4 gap-3 justify-start items-start"
    >
      <h1 className="text-2xl font-semibold">Technologies we used</h1>
      <div className="w-full h-auto flex flex-wrap justify-start gap-2 items-center ">
        {technologies?.map((technology, key) => {
          return <MaidSimplTechnologyCard technology={technology} key={key} />;
        })}
      </div>
      <Link
        href="https://www.maidsimpl.com/"
        style={{
          border: `1px solid ${palette?.color}`,
        }}
        className={`mt-2 w-[203px] h-[78px] rounded-full px-3 flex items-center justify-center gap-3 ${
          theme == "dark"
            ? "hover:bg-orange-600 hover:border-orange-600 hover:text-white"
            : "hover:bg-orange-600 hover:border-orange-600 hover:text-white"
        }`}
      >
        <span>Launch Project</span>
        <HiArrowRight className="text-xl" />
      </Link>
    </div>
  );
};

export default MaidSimplTechnologies;
