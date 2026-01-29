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
    <section className="w-full py-20 lg:py-32 xl:py-40   overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
     

        <h2 className="text-5xl md:text-7xl font-bold lg:w-[70%] mx-auto">
         Tools, Technologies & {" "}
          <span className="text-[#F15C20]">Frameworks</span>
        </h2>
        <p className=" w-full lg:w-[70%] mx-auto">
          Do you ever wonder what exactly makes some apps feel so smooth while some apps look like a mess? Our mobile app development services make sure yours runs smoothly, every time.
        </p>
      </section>

      <section className=" mt-10 p-2 rounded-lg bg-[#F8F5F3] mx-auto w-fit">
        <div className="w-full flex flex-col md:flex-row items-center justify-center mx-auto">
          <button
            type="button"
            onClick={() => setActiveTechStack("programming-languages")}
            className={`rounded-md transition-all  ease-linear ${
              activeTechStack === "programming-languages"
                ? "shadow-sm text-[#F15C20] p-1  bg-white"
                : ""
            }  px-3 text-lg font-medium text-[#212121]`}
          >
            Programming Languages
          </button>
          <button
            type="button"
            onClick={() => setActiveTechStack("databases")}
              className={`rounded-md  transition-all  ease-linear ${
              activeTechStack === "databases"
                ? "shadow-sm text-[#F15C20] p-1  bg-white"
                : ""
            }  px-3 text-lg font-medium text-[#212121]`}
          >
            Databases
          </button>
          <button
            type="button"
            onClick={() => setActiveTechStack("cloud-platforms")}
             className={`rounded-md   transition-all  ease-linear ${
              activeTechStack === "cloud-platforms"
                ? "shadow-sm text-[#F15C20] p-1  bg-white"
                : ""
            }  px-3 text-lg font-medium text-[#212121]`}
          >
            Cloud Platforms
          </button>
          <button
            type="button"
            onClick={() => setActiveTechStack("development-tools")}
             className={`rounded-md  transition-all  ease-linear ${
              activeTechStack === "development-tools"
                ? "shadow-sm text-[#F15C20] p-1  bg-white"
                : ""
            }  px-3 text-lg font-medium text-[#212121]`}
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