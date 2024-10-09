"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import ContactButton from "@/components/global/ContactButton";
import DesingShowCase from "./DesignShowCase";

const AmaizingShowCase = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <section className={`global-padding-horizontal py-10 lg:py-20 relative pb-[100px] ${
      theme === "light" ? "bg-[#FBFBFB]" : "bg-[#2d2d2d]"
    }  rounded-[80px] flex flex-col gap-4 justify-start items-center w-full mt-[200px]  lg:mt-16 `}>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between">
        <div className="lg:w-[70%] xl:w-[80%] flex flex-col gap-y-6 lg:gap-y-2">
          <h2
            className={`${theme === "dark" ? "text-white" : "text-black"
              } text-5xl capitalize font-[600]`}
          >
            <span className="text-[#F15C20] text-[20px] font-[700] upper">
              Amazing
              <img src="/mainUnder.png" className='w-100 h-100' alt="" srcset="" />
            </span>
           
            <div className='mt-[15px]' >Mobile App Design Showcase</div>
          </h2>
          <p
            className={`text-base w-[100%] lg:w-[65%] font-normal mt-2 text-start ${theme === "light" && "text-[#2A2A2A]"
              }`}
          >
          Our team of skilled designers and developers specializes in 
          creating stunning, user-friendly mobile apps that captivate 
          your audience. From concept to launch, we'll work closely 
          with you to transform your vision into a reality. Let's 
          build something amazing together!
          </p>
        </div>

        <div className="flex flex-col gap-y-32 mt-4 lg:mt-0">
          <div className="mt-7">
            <ContactButton text1={"Schedule a call"} text2={"Let's talk"} />
          </div>
        </div>
      </div>
    
      <DesingShowCase />
    </section>
  );
};

export default AmaizingShowCase;
