"use client";

import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import React, { useContext } from "react";

const ExpertMobileAppDevelopersSection = () => {
  const { palette, theme, setTheme } = useContext(GlobalContext);
  return (
    <div className={`px-4 md:px-12 lg:px-28 lg:py-24 py-12 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-center w-full my-6 md:my-12 ${theme === "dark" ? 'bg-none' : 'bg-[#F9F9F9]'}`}>
      <h1 className="uppercase font-extrabold text-4xl md:text-5xl lg:text-[72px] xl:font-bold text-center lg:text-start">
        expert mobile app developers
      </h1>
      <div
        className={`border ${
          theme === "dark" ? "border-gray-600" : "border-[#E7E7E7]"
        } w-full my-4`}
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-4 gap-10">
        <div
          className={`group transition-all duration-300  border-[1px] ${
            theme == "dark" ? "bg-[#393939]" : "bg-white"
          } lg:border-0 rounded-2xl flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-4 p-4 md:py-3 md:px-3 lg:p-8  transition-all duration-150`}
        >
          <Image
            src={"/android-mobile-app-mockup.png"}
            loader={customLoader}
            width={42}
            height={42}
          />
          <h1 className="text-[20px] font-semibold">Android Mobile App</h1>
          <p
            className={`text-sm ${
              theme === "dark" ? `text-gray-200` : "text-[#8F8F8F]"
            } font-normal`}
          >
            Struggling to find an innovative partner for your mobile app
            development? Here we offer the best mobile app solutions to propel
            your business in the world of the mobile stratosphere with our
            eccentric development approach. Whereas, Android apps are the
            cornerstone of the transformative development process.   
          </p>
        </div>
        <div
          className={`group transition-all duration-300  border-[1px] ${
            theme == "dark" ? "bg-[#393939]" : "bg-white"
          } lg:border-0 rounded-2xl flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-4 p-4 md:py-3 md:px-3 lg:p-8 transition-all duration-150`}
        >
          <Image
            src={"/ios-mockup.png"}
            loader={customLoader}
            width={42}
            height={42}
          />
          <h1 className="text-[20px] font-semibold">iOS Mobile App</h1>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-200" : "text-[#8F8F8F]"
            } font-normal`}
          >
            Have you ever heard that an IOS application is running very slowly?
            Yes, you’ve been familiar with the term, as our experts built
            powerful, stable, highly functional, operational, and systemized app
            versions of the IOS mobile applications to satisfy their clients in
            the process of mobile development. And that’s how our development
            efforts create rapid mobile app conversions in no time.
          </p>
        </div>
        <div
          className={`group transition-all duration-300  border-[1px] ${
            theme == "dark" ? "bg-[#393939]" : "bg-white"
          } lg:border-0 rounded-2xl flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-4 p-4 md:py-3 md:px-3 lg:p-8 transition-all duration-150`}
        >
          <Image
            src={"/cross-platform-mockup.png"}
            loader={customLoader}
            width={42}
            height={42}
          />
          <h1 className="text-[20px] font-semibold">Cross-platform</h1>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-200" : "text-[#8F8F8F]"
            } font-normal`}
          >
            React Native, Xamarin, and Flutter are the most popular languages to
            increase a project's versatility, efficiency, and speed. Thus, that
            can be delivered promptly through our mobile application services.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertMobileAppDevelopersSection;
