"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import DesingShowCase from "./DesignShowCase";
import ContactButtonPPC from "@/components/global/ContactButtonPPC";

const AmaizingShowCase = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <section className={`global-padding-horizontal py-10 lg:py-20 mt-[40px] md:mt-[150px]  relative pb-[100px] ${
      theme === "light" ? "bg-[#FBFBFB]" : "bg-[#2d2d2d]"
    }  rounded-[80px] flex flex-col gap-4 justify-start items-center w-full mt-[200px]  lg:mt-20 `}>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between">
        <div className="lg:w-[100%] xl:w-[100%] flex flex-col items-center gap-y-6 lg:gap-y-2">
          <h2
            className={`${theme === "dark" ? "text-white" : "text-black"
              } headings-size text-center`}
          >
            <span className="text-[#F15C20] flex flex-col items-center text-[20px] font-[700] tracking-wide leading-[28px] upper">
              Amazing
              <img src="/mainUnder.png" className='w-100 h-100' alt="" srcset="" />
            </span>
           
            <div className='mt-[15px]' > Mobile App Design <br></br> Showcase</div>
          </h2>
          <p
            className={`text-base w-[100%] lg:w-[65%] text-center font-normal mt-2  ${theme === "light" && "text-[#2A2A2A]"
              }`}
          >
           Our team of skilled designers and developers specializes in creating stunning, 
           user-friendly mobile apps that captivate your audience. From concept to launch,
            we'll work closely with you to transform your vision into a reality.
             Let's build something amazing together!
          </p>
          
        <div className="flex flex-col gap-y-32 mt-4 lg:mt-0">
          <div className="mt-7">
            <ContactButtonPPC text1={"Schedule a Call"} text2={"Let's Talk"} />
          </div>
        </div>
        </div>

      </div>
    
      <DesingShowCase />
    </section>
  );
};

export default AmaizingShowCase;
