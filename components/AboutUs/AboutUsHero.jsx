"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import ContactButton from "../global/ContactButton";
import { FiArrowUp, FiPlus, FiSearch } from "react-icons/fi";
import Typewriter from "typewriter-effect";
const AboutUsHero = () => {
  const { palette } = useContext(GlobalContext);
  useEffect(() => {
    const styleCursor = () => {
      const cursor = document.querySelector(".Typewriter__cursor");
      if (cursor) {
        cursor.style.color = "#F15C20";
      }
    };

    styleCursor();
    const interval = setInterval(styleCursor, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full grid grid-cols-1 gap-y-8 justify-start items-start lg:pt-20 ">
      <div className="flex  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-5xl md:text-7xl font-bold ">
          Building Apps that Drive{" "}
          <span className="text-[#F15C20]">Real Growth</span>
        </h1>
        <p className="text-xl mt-2 dark:text-white text-[#5C5C5C]">
          We build digital products that do more than just perform their work.
          By combining expert teams, fully custom development, and proven
          delivery processes, we help the business launch apps that deliver
          real, measurable impact. 
        </p>

        <div className="w-full flex justify-center my-20">
          <div className="w-full rounded-2xl bg-white p-2 shadow-[0_4px_50px_rgba(244,120,0,0.7)]
">
            <div className="flex flex-col items-start gap-3 bg-[#F2F2F2] rounded-xl px-4 py-3">
              <div className="flex text-[#5C5C5C] items-center gap-3">
                {/* Search Icon */}
                <FiSearch className=" text-lg" />
<Typewriter
  onInit={(typewriter) => {
    typewriter
      .typeString("Best Mobile App Development company in Florida")
      .start();
  }}
  options={{
    autoStart: true,
    loop: false,
  }}
  style={{ color: "#5C5C5C" }}
/>

              </div>
              <div className="w-full flex justify-between items-center">
              <div className="hidden md:flex items-center gap-2">
                <div className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 border border-orange-200">
                  <FiPlus />
                  Intro Expert
                </div>

                <div className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 border border-orange-200">
                  <FiPlus />
                  Recommend Tool
                </div>

                <div className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 border border-orange-200">
                  <FiPlus />
                  Create Content
                </div>
              </div>

              {/* Submit div */}
              <div className="ml-2 flex items-center justify-center w-9 h-9 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">
                <FiArrowUp />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
