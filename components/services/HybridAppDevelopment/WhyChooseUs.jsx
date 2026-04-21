"use client";

import React, { useContext } from "react";
import Link from "next/link";
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
      Our <Link href="/services/hire-mobile-app-developers" className="text-[#F15C20]">hybrid app development team</Link> assists in designing user-friendly applications with 
      the latest <Link href="/services/hybrid-app-development-services" className="text-[#F15C20]">hybrid app development solutions</Link> that contribute effectively to scale 
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
            src={"/single-code-base-hybrid-app.webp"}
            alt={"single code base hybrid app icon"}
            title={"single code base hybrid app"}
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
      Dignite’s top <Link href="/services/hire-mobile-app-developers" className="text-[#F15C20]">hybrid mobile app developers</Link> craft hybrid processes 
      under a single codebase to be used across multiple platforms 
      that value time and money on a broader scale. <Link href="/services/hybrid-app-development-services" className="text-[#F15C20]">Hybrid mobile 
      app development</Link> establishes a better user interface, high 
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
            src={"/enhanced-user-experience.webp"}
            alt={"enhanced user experience icon"}
            title={"enhanced user experience"}
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
         industry-leading <Link href="/services/hybrid-app-development-services" className="text-[#F15C20]">hybrid mobile app development services</Link>. 
         To boost the performance of your <Link href="/services/web-app-development" className="text-[#F15C20]">web applications</Link> we 
         value the time and effort of our <Link href="/services/hire-mobile-app-developers" className="text-[#F15C20]">hybrid developer</Link>.
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
            src={"/seamless-integration.webp"}
            alt={"seamless integration icon"}
            title={"seamless integration"}
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
          Our <Link href="/services/hybrid-app-development-services" className="text-[#F15C20]">hybrid application development services</Link> design versatile user experiences 
          with web-based resources to rank business positions among the top 
          <Link href="/services/hybrid-app-development-services" className="text-[#F15C20]">hybrid app development companies</Link>.
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
            src={"/scalable-hybrid-frameworks.webp"}
            alt={"scalable hybrid frameworks icon"}
            title={"scalable hybrid frameworks"}
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
         Experience functional user experience to scale your <Link href="/services/hybrid-app-development-services" className="text-[#F15C20]">hybrid mobile
          app</Link> and achieve the desired goal to make your business profitable.
           We conduct superior methodologies to create a vigorous <Link href="/services/hybrid-app-development-services" className="text-[#F15C20]">hybrid app 
           development process</Link> to elevate the project’s dimensions.
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
            src={"/save-resources-with-hybrid-solutions.webp"}
            alt={"Save resources with hybrid solutions icon"}
            title={"Save resources with hybrid solutions"}
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
        The premier <Link href="/services/hybrid-app-development-services" className="text-[#F15C20]">hybrid app development agency</Link> Dignite Studios holds cost-effective
         solutions to streamline the maintenance and update the latest versions 
         of <Link href="/services/hybrid-app-development-services" className="text-[#F15C20]">hybrid app development processes</Link>.
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
            src={"/speed-up-your-launch-process.webp"}
            alt={"Speed up your launch process icon"}
            title={"Speed up your launch process"}
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
           Our <Link href="/services/hybrid-app-development-services" className="text-[#F15C20]">hybrid mobile app development company</Link> performs the fastest deployment
            process with quicker adaptation to market demands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
