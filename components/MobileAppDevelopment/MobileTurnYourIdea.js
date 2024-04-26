"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";

const TurnYourIdea = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-5 justify-start items-start gap-y-8 py-4 lg:py-12 px-4 md:px-12 lg:px-28">
      <div className="col-span-5 lg:col-span-3 flex flex-col justify-start items-start gap-y-4">
        <h1
          style={{
            color: palette?.color,
          }}
          className="text-3xl font-extrabold lg:text-6xl lg:font-bold mx-0 uppercase"
        >
          turn your idea <br/> into digital <br/> transformation
        </h1>
        <p
          style={{
            color: palette?.dark_contrast_color,
          }}
          className="text-[16px] lg:text-[18px] font-normal lg:ml-1 lg:w-[78%]"
        >
          We leverage the latest technologies and craft industry-leading
          solutions for startups and enterprises. We help companies level up
          their game with top-notch mobile apps.
        </p>
        <Link
          href={"/contact-us"}
          name="schedule-a-meeting"
          style={{
            background: palette?.brandOrange,
            color: "white",
          }}
          className="w-[150px] lg:w-[171px] h-14 lg:h-16 rounded-full transition-all duration-150 hover:opacity-90  shadow-xl text-sm lg:text-md font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center lg:ml-1"
        >
          Get Started
        </Link>
      </div>
      <div className="col-span-5 lg:col-span-2 flex  justify-center">
        <img src="/turn-your-idea.png" alt="turn your idea image" className="h-[278.09px] md:h-auto"/>
      </div>
    </div>
  );
};

export default TurnYourIdea;
