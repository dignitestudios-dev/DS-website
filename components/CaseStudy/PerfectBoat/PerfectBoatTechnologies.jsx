"use client";
import React, { useContext } from "react";

import { GlobalContext } from "@/context/GlobalContext";
import MaidSimplTechnologyCard from "./PerfectBoatTechnologyCard";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const PerfectBoatTechnologies = () => {
  const { palette, theme } = useContext(GlobalContext);
  const technologies = [
    {
      color: "/flutter-color.webp",
      gray: "/flutter-gray.webp",
      name: "Flutter",
    },
    {
      color: "/swift-color.webp",
      gray: "/swift-gray.webp",
      name: "Swift",
    },
    {
      color: "/vue-color.webp",
      gray: "/vue-gray.webp",
      name: "Vue",
    },
    {
      color: "/react-color.webp",
      gray: "/react-gray.webp",
      name: "React",
    },
    {
      color: "/tailwind-color.webp",
      gray: "/tailwind-gray.webp",
      name: "Tailwind",
    },
    {
      color: "/figma-color.webp",
      gray: "/figma-gray.webp",
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
        href="https://www.carterboating.com/"
        className={`mt-2 w-[203px] h-[78px] border-[1px] ${
          theme == "dark" ? "border-white" : "border-black"
        } rounded-full px-3 flex items-center justify-center gap-3 ${
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

export default PerfectBoatTechnologies;
