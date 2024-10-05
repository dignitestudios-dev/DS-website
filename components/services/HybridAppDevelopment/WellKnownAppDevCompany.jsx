"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const WellKnownAppDevCompany = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full global-padding-horizontal"  >
    <div
      className={`${
        theme === "light" ? "bg-[#FAFAFA]" : "bg-[#2d2d2d]"
      } rounded-[40px] block md:flex  justify-between md:h-auto  xl:h-[600px]`}
    >
      <div className="w-full  flex flex-col gap-2  p-6 lg:p-10">
        <h2 className="font-bold lg:font-extrabold text-4xl lg:text-5xl xl:text-[64px] 2xl:text-[80px] tracking-tighter xl:font-bold lg:leading-[77px] my-2">
          Well-Known <span className="text-[#F15C20]">Hybrid</span> App
          Development Company
        </h2>
        <p className="text-sm md:text-[18px] font-normal leading-[24.46px]">
        Experience well-organized hybrid mobile app development services of
         Dignite Studios under one umbrella. Our team of professional developers
          builds intuitive designs and integrates powerful mobile applications to
           manage hybrid web apps efficiently. Here, we impart innovative
            solutions and design tailor-made projects to meet the needs of 
            your business agenda. To satisfy our clients, we deliver highly 
            functional hybrid mobile apps with smooth mobile experiences.
             This results in more user engagements and ROIs.
        </p>
        <div className="mt-3">
          <ContactButton text1={"Hire Now"} text2={"Let's talk"} />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  w-full">
   <div className="grid  custom-media-query lg:ml-[50px]">
    <div className="">
      <img
        className="h-auto max-w-[250px]" 
        src="/hybrid-app-development-services-screen-2-3.webp"
        alt="Hybrid app development service screen 2-3"
      />
    </div>
    <div className="">
      <img
        className="h-auto max-w-[250px]  lg:-mt-[8px]" 
        src="/hybrid-app-development-services-screen-2.webp"
        alt="Hybrid app development service screen 2"
      />
    </div>
  </div>
  <div className="grid custom-media-query-cut-img lg:ml-[50px]">
    <div className="" >
      <img
        className="h-auto max-w-[260px] "
        src="/hybrid-app-development-services-screen-2-2.webp"
        alt=""
      />
    </div>
    <div className={""} >
      <img
        className="h-auto lg:-mt-[40px] max-w-[260px] "
        src="/hybrid-app-development-services-screen-1.webp"
        alt=""
      />
    </div>
    <div className={" "} >
      <img
        className="h-auto lg:mt-[-35px] max-w-[260px]  "
        src="/hybrid-app-development-services-screen-2-1.webp"
        alt=""
      />
    </div>
  </div>
  <div className="hidden  xl:grid  xl:ml-[50px]">
    <div>
      <img
        className="h-auto max-w-[260px] "
        src="/hybrid-app-development-services-screen-1-1.webp"
        alt=""
      />
    </div>
    <div className={''} >
      <img
        className="lg:-mt-[80px] "
        src="/hybrid-app-development-services-screen-2 (2).webp"
        alt=""
      />
    </div>   
  </div>
  </div>

    </div>
  </div>
  );
};

export default WellKnownAppDevCompany;
