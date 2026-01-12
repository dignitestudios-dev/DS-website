"use client";
import React, { useState } from "react";
import ProgrammingLanguages from "./ProgrammingLanguages";
import CloudPlatforms from "./CloudPlatforms";
import DevelopmentTools from "./DevelopmentTools";
import Databases from "./Databases";

const TechAndTools = () => {
  const [activeTechStack, setActiveTechStack] = useState(
    "programming-languages"
  );
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#f9f9f9] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
     

        <h2 className="text-7xl font-bold lg:w-[70%] mx-auto">
         Tools, Technologies & {" "}
          <span className="text-[#F15C20]">Frameworks</span>
        </h2>
        <p className="section-paragraph lg:w-[70%] mx-auto">
          Do you ever wonder what exactly makes some apps feel so smooth while some apps look like a mess? Our mobile app development services make sure yours runs smoothly, every time.
        </p>
      </section>

      <section className="w-full mt-10">
        <div className="w-full flex flex-col md:flex-row items-center justify-center mx-auto">
          <button
            type="button"
            onClick={() => setActiveTechStack("programming-languages")}
            className={`border-b-[3px] ${
              activeTechStack === "programming-languages"
                ? "border-[#F15C20]"
                : "border-gray-300"
            } pb-3 px-3 text-lg lg:text-[22px] text-[#212121]`}
          >
            Programming Languages
          </button>
          <button
            type="button"
            onClick={() => setActiveTechStack("databases")}
            className={`border-b-[3px] ${
              activeTechStack === "databases"
                ? "border-[#F15C20]"
                : "border-gray-300"
            } pb-3 px-3 text-lg lg:text-[22px] text-[#212121]`}
          >
            Databases
          </button>
          <button
            type="button"
            onClick={() => setActiveTechStack("cloud-platforms")}
            className={`border-b-[3px] ${
              activeTechStack === "cloud-platforms"
                ? "border-[#F15C20]"
                : "border-gray-300"
            } pb-3 pt-3 md:pt-0 px-3 text-lg lg:text-[22px] text-[#212121]`}
          >
            Cloud Platforms
          </button>
          <button
            type="button"
            onClick={() => setActiveTechStack("development-tools")}
            className={`border-b-[3px] ${
              activeTechStack === "development-tools"
                ? "border-[#F15C20]"
                : "border-gray-300"
            } pb-3 pt-3 md:pt-0 px-3 text-lg lg:text-[22px] text-[#212121]`}
          >
            Development & Collaboration Tools
          </button>
        </div>
      </section>
      {activeTechStack === "programming-languages" ? (
        <ProgrammingLanguages />
      ) : activeTechStack === "cloud-platforms" ? (
        <CloudPlatforms />
      ) : activeTechStack === "development-tools" ? (
        <DevelopmentTools />
      ) : activeTechStack === "databases" ? (
        <Databases />
      ) : null}
    </section>
  );
};

export default TechAndTools;