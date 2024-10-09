"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import ContactButton from "@/components/global/ContactButton";
import ContactForm from "@/components/global/ContactForm";
import AwardsRecognition from "./AwardsRecognition";
import Navbar from "./Navbar";
import ContactButtonBlackBg from "@/components/global/ContactButtonBlackBg";

const Hero = () => {
  const { theme,setIsSidebarOpen } = useContext(GlobalContext);
  return (

    <main className="w-full relative lg:h-[100vh] overflow-hidden 2xl:h-auto  md:mb-20  ">
            <Navbar setIsOpen={setIsSidebarOpen} />
            
      <div className="w-full global-padding-horizontal relative flex flex-col  items-center gap-x-6 gap-y-16 pt-20">
        <div className="w-full text-start relative md:pb-20  flex flex-col items-center">      
          <AwardsRecognition/>
          <h1 className="text-4xl mt-7 lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-bold tracking-tighter text-center lg:leading-[71.93px] 2xl:leading-[99px] z-10">
         <span> Award Winning Mobile 
          <img src="/ppc_border.webp" className='relative left-10 -top-4' alt="" srcset="" />
          </span>
         <span className='relative -top-4' >App Development Agency</span>          
          </h1>
          <p
            className={` font-normal text-lg mt-3 text-center z-10 ${
              theme === "light" && "text-[#5c5c5c]"
            }`}
          >
            Creating seamless app experiences. Transforming your ideas
            <br /> into exceptional mobile app solutions.
          </p>
<div className='flex items-center justify-center' >
          <div className="mt-10 z-10">
            <ContactButton text1={"Schedule a call"} text2={"Let's talk"} />
          </div>
          <div className="mt-10 z-10 ml-3 ">
            <ContactButtonBlackBg text1={"Get a free quote"} text2={"Let's talk"} />
          </div>
</div>
        </div>
        <div className="w-full lg:w-[100%] md:pb-20 sm:pb-20 mt-7 ppp2-bg-contact flex items-baseline ">          
        
        </div>
      </div>
    </main>
  );
};

export default Hero;
