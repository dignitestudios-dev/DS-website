"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";

const AboutUsHero = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className="w-full grid grid-cols-1 gap-y-8 justify-start items-start lg:py-20 ">
      <div className=" flex flex-col px-4 md:px-12 lg:px-28 justify-start text-center lg:text-start items-center lg:items-start gap-2">
        <h1
          style={{
            color: palette?.color,
          }}
          className=" text-3xl font-extrabold lg:text-6xl lg:font-bold uppercase"
        >
          about us
        </h1>

        <span
          style={{
            color: palette?.dark_contrast_color,
          }}
          className=" my-2 lg:my-6 lg:w-[80%] text-[16px] lg:text-[18px] font-normal"
        >
          Professional and customer-oriented approach to business, starting from
          first contact until project completion. <br />
          <br />
          Dignite studios believes in the power of collaboration and strives to
          create an environment of shared success. Our experienced team of
          professionals is dedicated to delving into the complexities of
          business challenges and finding creative solutions.
        </span>
        <div className="w-auto flex gap-4 justify-start items-center">
          <Link
            href={"/contact-us"}
            name="schedule-a-meeting"
            style={{
              background: palette?.brandOrange,
              color: "white",
            }}
            className="w-[150px] lg:w-[171px] h-14 lg:h-16 rounded-full transition-all duration-150 hover:opacity-90  shadow-xl text-sm lg:text-md font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="w-screen h-[30rem]  about-bg"></div>
    </div>
  );
};

export default AboutUsHero;
