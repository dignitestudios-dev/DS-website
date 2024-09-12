"use client";
import ContactButton from "@/components/global/ContactButton";
import ProjectCard from "@/components/Home/ProjectCard";
import { casestudies } from "@/constants/casestudies";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const OurProjectsSection = () => {
  const { theme } = useContext(GlobalContext);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    // Check if the page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // Listen for the load event
      window.addEventListener("load", handleLoad);

      // Clean up the event listener
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  return (
    isPageLoaded && (
      <section
        id="case-studies"
        className="w-full px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 py-12"
      >
        <div className="w-full flex items-center justify-between">
          <h2
            className={`${
              theme === "light" ? "text-black" : "text-white"
            } headings-size`}
          >
            our projects
          </h2>
          <div className="hidden lg:block">
            {/* <Link
              href={{
                pathname: "/contact-us",
              }}
              className={`px-6 py-5 xl:px-8 xl:py-7 rounded-full font-medium text-lg border border-[#F15C20] text-[#F15C20] ${
                theme === "light" ? "bg-white" : "bg-[#222222]"
              } hover:bg-[#F15C20] hover:text-white transition-all duration-300`}
            >
              Start Your Project
            </Link> */}
            <ContactButton text1={"Start Your Project"} text2={"Let's talk"} />
          </div>
        </div>

        <div
          className={`border w-full mb-4 mt-6 xl:mt-8 ${
            theme === "light" ? "border-[#E7E7E7]" : "border-gray-500"
          }`}
        />
        <div
          className={`w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  md:grid-rows-2 lg:grid-rows-2 pt-4 lg:pt-6 gap-6 md:gap-x-4 lg:gap-x-6 xl:gap-x-10 2xl:gap-x-16 gap-y-10 lg:gap-y-20 mt-10`}
        >
          {casestudies.map((c, index) => {
            return (
              <ProjectCard
                key={index}
                title={c.title}
                description={c.description}
                image={c.image}
                mobile_image={c.mobile_image}
                normalImage={c.normalImage}
                projectLink={c.projectLink}
                logo={c.logo}
                webLink={c.webLink}
                appLink={c.appLink}
                googleLink={c.googleLink}
              />
            );
          })}
        </div>

        <div className="w-full flex justify-center mt-6 lg:hidden">
          <Link
            href={{
              pathname: "/contact-us",
            }}
            className={`px-8 py-7 rounded-full font-medium text-lg border border-[#F15C20] text-[#F15C20] ${
              theme === "light" ? "bg-[#ffff]" : "bg-[#222222]"
            } hover:bg-[#F15C20] hover:text-[#ffff] transition-all duration-300`}
          >
            Start Your Project
          </Link>
        </div>
      </section>
    )
  );
};

export default OurProjectsSection;
