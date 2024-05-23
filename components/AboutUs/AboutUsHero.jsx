"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";

const AboutUsHero = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className="w-full grid grid-cols-1 gap-y-8 justify-start items-start lg:pt-20 ">
      <div className=" flex flex-col px-4 md:px-12 lg:px-28 xl:px-[120px] justify-start text-center lg:text-start items-center lg:items-start gap-2">
        <h1
          style={{
            color: palette?.color,
          }}
          className="text-[45px] font-extrabold lg:text-5xl xl:text-[64px] lg:font-bold uppercase"
        >
          about us
        </h1>

        <span
          style={{
            color: palette?.dark_contrast_color,
          }}
          className=" my-2 lg:my-6 lg:w-[80%] text-[16px] lg:text-[18px] font-light"
        >
          Dignite Studios believes in the transformative power of technology to
          shape the future.
          <br />
          <br />
          With a passion for innovation and a commitment to excellence, we are a
          premier mobile and web app development agency dedicated to crafting
          digital solutions that not only meet but exceed the expectations of
          our clients.
        </span>
        <div className="w-auto flex gap-4 justify-start items-center">
          <Link
            href={"/contact-us"}
            name="schedule-a-meeting"
            style={{
              background: palette?.brandOrange,
              color: "white",
            }}
            className="orange w-[150px] lg:w-[151px] h-14 lg:h-[59px] rounded-full transition-all duration-150 hover:opacity-90  shadow-xl text-sm lg:text-md font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center"
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
