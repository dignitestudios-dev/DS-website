"use client";
import ContactButton from "@/components/global/ContactButton";
import React, { useContext } from "react";
import TechnologySlider from "./TechnologySlider";
import { GlobalContext } from "@/context/GlobalContext";

const TechnologyWeUsing = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="text-center pt-10 lg:py-10 2xl:py-32 global-padding-horizontal">
      <h2 className="">
        <span className="flex items-center flex-col text-[#F15C20] text-xl	 font-[700]">
          App Development
          <img src="/mainUnder.png" alt="" />
        </span>

        <div className={`${theme === "dark" ? "text-white" : "text-[#0C0C0C]"
          }  text-[40px] leading-[48px] mt-6 font-[600] `}>Technologies We’re Using</div>
      </h2>
      <div className='mt-6' >
        <ContactButton text1={"Schedule a call"} text2={"Let's talk"} />
      </div>
        <TechnologySlider />
    </div>
  );
};

export default TechnologyWeUsing;
