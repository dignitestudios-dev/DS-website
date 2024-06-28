"use client";
import ProjectCard from "@/components/Home/ProjectCard";
import { casestudies } from "@/constants/casestudies";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const MobileAppDesignCaseStudies = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const { theme } = useContext(GlobalContext);

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

  const { palette } = useContext(GlobalContext);

  return (
    isPageLoaded && (
      <div
        id="case-studies"
        className={` w-full py-10  px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48`}
        style={{ background: palette?.background }}
      >
        <div className={`w-full flex items-end justify-between `}>
          <div>
            <p className={`text-xl font-bold text-[#F15C20] uppercase `}>
              recent
            </p>
            <div className={`w-full px-0 flex justify-between items-center`}>
              <h1
                className={`headings-size`}
              >
                case studies
              </h1>
            </div>
          </div>
          <div className="w-full lg:w-auto hidden lg:block">
            <Link
              href="/contact-us"
              className="py-3 px-5 text-base lg:py-7 lg:px-14 float-end bg-[#F15C20] top-rated-btn-shadow rounded-full text-white lg:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300"
            >
              Get in Touch <FiArrowUpRight className="text-xl" />
            </Link>
          </div>

          
        </div>

        <div
            className={`border ${
              theme === "dark" ? "border-gray-600" : "border-[#E7E7E7]"
            } w-full mb-4 mt-10`}
          />

        <div
          className={`w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  md:grid-rows-2 lg:grid-rows-2 pt-4 lg:pt-6 gap-6 md:gap-x-4 lg:gap-x-6 xl:gap-x-10 2xl:gap-x-16 gap-y-10 lg:gap-y-20 mt-10 lg:mt-16 2xl:mt-16 `}
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
      </div>
    )
  );
};

export default MobileAppDesignCaseStudies;
