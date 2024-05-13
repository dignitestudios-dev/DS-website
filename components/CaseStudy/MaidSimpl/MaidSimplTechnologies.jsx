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
      <div className="w-auto flex justify-start items-center gap-2">
        <Link
          href="https://www.maidsimpl.com/"
          className={`mt-2 w-auto h-[60px] border-[1px]  rounded-full px-4 flex items-center justify-center gap-3 ${
            theme == "dark"
              ? "border-[1px] border-white text-white"
              : "border-[1px] border-black text-black"
          }  `}
        >
          {theme == "dark" ? (
            <img src="/google_icon_white.svg" alt="Google play icon" />
          ) : (
            <img src="/google_play_icon.svg" alt="Google play icon" />
          )}

          <span>Google play</span>
        </Link>
        <Link
          href="https://www.maidsimpl.com/"
          className={`mt-2 w-auto h-[60px] border-[1px]  rounded-full px-4 flex items-center justify-center gap-3 ${
            theme == "dark"
              ? "border-[1px] border-white text-white"
              : "border-[1px] border-black text-black"
          }  `}
        >
          {theme == "dark" ? (
            <img src="/apple_icon_white.svg" alt="Google play icon" />
          ) : (
            <img src="/apple_icon.svg" alt="Google play icon" />
          )}

          <span>iOS</span>
        </Link>
        <Link
          href="https://www.maidsimpl.com/"
          className={`mt-2 w-auto h-[60px] border-[1px]  rounded-full px-4 flex items-center justify-center gap-3 ${
            theme == "dark"
              ? "border-[1px] border-white text-white"
              : "border-[1px] border-black text-black"
          }  `}
        >
          {theme == "dark" ? (
            <img src="/website_icon_white.svg" alt="Google play icon" />
          ) : (
            <img src="/website_icon.svg" alt="Google play icon" />
          )}
          <span>Website</span>
        </Link>
        <Link
          href="/contact-us"
          className={`mt-2 w-auto h-[60px] border-[1px]  rounded-full px-3 flex items-center justify-center gap-3 bg-orange-600 border-orange-600 text-white`}
        >
          <span>Launch Your Project</span>
          <HiArrowRight className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default MaidSimplTechnologies;
