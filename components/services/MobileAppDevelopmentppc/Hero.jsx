"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import ContactButton from "@/components/global/ContactButton";
import AwardsRecognition from "./AwardsRecognition";
import Navbar from "./Navbar";
import ContactFormPPPC from "./ContactFormPPPC";

const Hero = () => {
  const { theme,setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <main className="w-full relative lg:h-[120vh] overflow-hidden 2xl:h-auto  md:mb-20  ">
            <Navbar setIsOpen={setIsSidebarOpen} />
      <div className="w-full global-padding-horizontal relative flex flex-col lg:flex-row wrap gap-x-6 gap-y-16 pt-20">
        <div className="w-full text-start relative md:pb-20  flex flex-col items-start">
        <p
            className={` font-[400] text-sm z-10 ${
              theme === "light" && "text-[#5C5C5C]"
            }`}
          >Awards & Recognition</p>
          <AwardsRecognition/>
          <h1 className="text-4xl mt-7 lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-bold tracking-tighter text-start lg:leading-[71.93px] 2xl:leading-[99px] z-10">
         <span> Top-Notch Mobile  
          <img src="/ppc_border.webp" className='relative left-10 -top-4' alt="" srcset="" />
          </span>
         <span className='relative -top-4' >App Development </span>          
            <br />
            <span> Service</span>
          </h1>
          <p
            className={` font-normal text-lg mt-6 z-10 ${
              theme === "light" && "text-[#5c5c5c]"
            }`}
          >
           Creating seamless app experiences. Transforming your ideas 
           into exceptional mobile app solutions. 

          </p>

          <div className="mt-10 z-10">
            <ContactButton text1={"Schedule a call"} text2={"Let's talk"} />
          </div>
        </div>
        <div className="w-full lg:w-[80%] md:pb-20 sm:pb-20 mt-7 ppp2-bg-contact flex items-baseline ">          
          <div className="w-[100%]  mx-auto md:w-[650.69px] h-[100%] absolute lg:-top-[80px] lg:right-[0px] z-0 gap-5">
              <img src="/contact_hero_bg.webp" className='h-full lg:h-[100%]'  alt="" srcset="" />
          </div>
          <div className={`${
        theme === "light" ? "bg-[#FFFFFF]" : "bg-[#2d2d2d]"
      }   w-[100%] xl:w-[85%] rounded-xl top-20 p-5 shadow-box relative margin-right-auto lg:-top-12  z-2`} >
             <ContactFormPPPC/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
