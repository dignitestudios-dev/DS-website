"use client";

import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";

const WhyChooseUs = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={`py-10 lg:py-20 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  text-center`}
    >
      <h2
        style={{
          color: theme == "dark" ? "#fff" : "#0c0c0c",
        }}
        className={`uppercase text-4xl lg:text-5xl xl:text-[58px] 2xl:text-[74px]  tracking-tighter font-bold mb-2 lg:mb-8`}
      >      
        Why choose us?
      </h2>

      <p className="text-base lg:leading-[21.76px] lg:w-[50%] mx-auto lg:text-center mb-6">
      Our hybrid app development team assists in designing user-friendly applications with 
      the latest hybrid app development solutions that contribute effectively to scale 
      business growth on worldwide digital platforms.
      </p>

      <div className="mt-7 py-2 grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 lg:gap-2 2xl:gap-6">
        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <div className="h-12 w-12 bg-[#F15C2014] rounded-xl  flex items-center justify-center">
          <img
            src={"/why-choose-us1.webp"}
            alt={"Hire iOS developer expertise and experience icon"}
            title={"Hire iOS developer expertise and experience"}
            className=""
           
          />
          </div>        
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
          Single Codebase Hybrid App
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
      Dignite’s top hybrid mobile app developers craft hybrid processes 
      under a single codebase to be used across multiple platforms 
      that value time and money on a broader scale. Hybrid mobile 
      app development establishes a better user interface, high 
      performance and robust functionality.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
           <div className="h-12 w-12 bg-[#F15C2014] rounded-xl  flex items-center justify-center">
          <img
            src={"/why-choose-us-2.webp"}
            alt={"Hire iOS developer expertise and experience icon"}
            title={"Hire iOS developer expertise and experience"}
            className=""
           
          />
          </div>    
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
           Enhanced User Experience
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
        Experience native-like features of your apps with Dignite’s
         industry-leading hybrid mobile app development services. 
         To boost the performance of your web applications we 
         value the time and effort of our hybrid developer.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <div className="h-12 w-12 bg-[#F15C2014] rounded-xl  flex items-center justify-center">
          <img
            src={"/why-choose-us3.webp"}
            alt={"Hire iOS developer expertise and experience icon"}
            title={"Hire iOS developer expertise and experience"}
            className=""
           
          />
          </div>    
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
         Seamless Integration
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
          Our hybrid application development services design versatile user experiences 
          with web-based resources to rank business positions among the top 
          hybrid app development companies.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
           <div className="h-12 w-12 bg-[#F15C2014] rounded-xl  flex items-center justify-center">
          <img
            src={"/why-choose-us-4.webp"}
            alt={"Hire iOS developer expertise and experience icon"}
            title={"Hire iOS developer expertise and experience"}
            className=""
           
          />
          </div>    
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
         Scalable Hybrid Frameworks
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
         Experience functional user experience to scale your hybrid mobile
          app and achieve the desired goal to make your business profitable.
           We conduct superior methodologies to create a vigorous hybrid app 
           development process to elevate the project’s dimensions.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <div className="h-12 w-12 bg-[#F15C2014] rounded-xl  flex items-center justify-center">
          <img
            src={"/why-choose-us5.webp"}
            alt={"Hire iOS developer expertise and experience icon"}
            title={"Hire iOS developer expertise and experience"}
            className=""
           
          />
          </div>    
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Save Resources with Hybrid Solutions
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
        The premier hybrid app development agency Dignite Studios holds cost-effective
         solutions to streamline the maintenance and update the latest versions 
         of hybrid app development processes.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
           <div className="h-12 w-12 bg-[#F15C2014] rounded-xl  flex items-center justify-center">
          <img
            src={"/why-choose-us6.webp"}
            alt={"Hire iOS developer expertise and experience icon"}
            title={"Hire iOS developer expertise and experience"}
            className=""
           
          />
          </div>    
         
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
          Speed Up Your Launch Process
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
           Our hybrid mobile app development company performs the fastest deployment
            process with quicker adaptation to market demands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
