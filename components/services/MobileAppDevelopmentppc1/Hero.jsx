"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import ContactForm from "@/components/global/ContactForm";
import AwardsRecognition from "./AwardsRecognition";
import Navbar from "./Navbar";
import ContactButtonBlackBg from "@/components/global/ContactButtonBlackBg";
import ContactButtonPPC from "@/components/global/ContactButtonPPC";

const Hero = () => {
  const { theme,setIsSidebarOpen } = useContext(GlobalContext);
  return (

    <main className="w-full  lg:h-auto   md:mb-20  ">
            <Navbar setIsOpen={setIsSidebarOpen} />
      <div className="w-full global-padding-horizontal relative flex flex-col  gap-x-6 gap-y-16 pt-20">
        <div className="w-full text-start relative md:pb-20  flex flex-col items-center">      
          <AwardsRecognition/>
          <h1 className="text-4xl mt-7 lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-bold tracking-tighter text-center lg:leading-[71.93px] 2xl:leading-[99px] z-10">
         <span> Top-Notch Mobile 

          <img src="/ppc_border.webp" className='relative md:left-10 -top-4' alt="" srcset="" />
          </span>
         <span className='relative -top-4' >App Development Service</span>          
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
            <ContactButtonPPC text1={"Schedule a Call"} text2={"Let's Talk"} />
          </div>
          <div className="mt-10 z-10 ml-3 ">
          <a
          href={"tel:+18777141770"}
          name="call-us"
          className={`${
            theme === "light"
              ? "bg-[#0C0C0C14] text-[#000]"
              : "bg-[#2d2d2d] text-white"
          }  hover:text-white text-sm md:text-[15px] font-semibold text-center py-7 px-16 md:py-8  md:px-24 hover:bg-black transition-all duration-300 relative group inline-block overflow-hidden rounded-[14px]`}
        >
          {/* First text */}
          <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
            Get a Free Quote
          </span>

          {/* Second text */}
          <span className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
            Let's Talk
          </span>
        </a>
          </div>
</div>
        </div>
        <div className="w-full bg-purple1-img flex items-center justify-center">          
          <div><img src="/schedule.webp"  alt="" aos="translate-left"  data-aos="translate-left" data-aos-duration="1000" data-aos-delay="150" data-aos-easing="ease-in-sine" srcset="" className="schedule-img-left" /></div>
          <div><img src="/health-feed.webp" alt="" aos="translate-center" data-aos="translate-center" data-aos-duration="1000" data-aos-delay="150" data-aos-easing="ease-in-sine" className='health-feed-center' /></div>
          <div><img src="/plan.webp" alt="" aos="translate-right" data-aos="translate-right" data-aos-duration="1000" data-aos-delay="150" data-aos-easing="ease-in-sine" className="plan-img-right" /></div>
         
        </div>
      </div>
    </main>
  );
};



export default Hero;
