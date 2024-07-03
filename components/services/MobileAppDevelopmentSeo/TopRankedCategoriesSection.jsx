"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";

const TopRankedCategoriesSection = () => {
  const { theme, palette } = useContext(GlobalContext);
  return (
    <section className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-6 justify-start items-start w-full my-6 md:my-12 lg:my-20">
      <div className="w-full flex items-center justify-between">
        <h1
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } text-start text-4xl lg:text-5xl xl:text-[67px] font-bold uppercase hidden lg:block tracking-tighter lg:leading-[72px]`}
        >
          top ranked categories of <br />
          app development
        </h1>
        <h1
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } text-start text-3xl lg:text-5xl xl:text-[64px] font-bold uppercase block lg:hidden`}
        >
          top ranked categories of app development
        </h1>
        <div className="hidden lg:block">
          <Link
            href={{
              pathname: "/contact-us",
            }}
            className={`py-8 px-[26px] border border-[#F15C20] text-[#F15C20] hover:text-white ${
              theme === "light" ? "bg-white" : "bg-[#222222]"
            } hover:bg-[#F15C20] transition-all duration-300 rounded-full text-xl font-medium`}
          >
            Let's Start Your Project
          </Link>
        </div>
      </div>

      <div
        className={`border w-full my-4 ${
          theme === "light" ? "border-[#E7E7E7]" : "border-gray-500"
        }`}
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`w-full rounded-[24px] p-6 flex flex-col items-start gap-3 ${
            theme === "light" ? "bg-[#F9F9F9] hover:text-white" : "bg-[#2d2d2d]"
          } hover:bg-[#F15C20] hover:text-white transition-all duration-300`}
          // style={{
          //   background: palette?.dark_contrast_background,
          // }}
        >
          <h3 className={` text-xl font-semibold`}>Android Mobile App</h3>
          <p className={``}>
            We ensure to build highly effective and productive native mobile
            apps for Android and IOS systems that will be based on your security
            requirements. 
          </p>
        </div>
        <div
          className={`w-full rounded-[24px] p-6 flex flex-col items-start gap-3 ${
            theme === "light" ? "bg-[#F9F9F9] hover:text-white" : "bg-[#2d2d2d]"
          } hover:bg-[#F15C20] hover:text-white transition-all duration-300`}
        >
          <h3 className={`text-xl font-semibold`}>
            Hybrid Mobile App Development
          </h3>
          <p className={``}>
            Mobile app development technologies have created a strong and unique
            amalgamate of cross-platform apps that cater to a suitable
            environment and we make it happen in a smooth way to provide a
            required mobile solution.  
          </p>
        </div>
        <div
          className={`w-full rounded-[24px] p-6 flex flex-col items-start gap-3 ${
            theme === "light" ? "bg-[#F9F9F9] hover:text-white" : "bg-[#2d2d2d]"
          } hover:bg-[#F15C20] hover:text-white transition-all duration-300`}
        >
          <h3 className={`text-xl font-semibold`}>Cross-Platform</h3>
          <p className={``}>
            React Native, Xamarin, and Flutter are the most popular languages to
            increase a project's versatility, efficiency, and speed. Thus, that
            can be delivered promptly through our mobile application services. 
          </p>
        </div>
        <div
          className={`w-full rounded-[24px] p-6 flex flex-col items-start gap-3 ${
            theme === "light" ? "bg-[#F9F9F9] hover:text-white" : "bg-[#2d2d2d]"
          } hover:bg-[#F15C20] hover:text-white transition-all duration-300`}
        >
          <h3 className={`text-xl font-semibold`}>
            Progressive Web App Development
          </h3>
          <p className={``}>
            You can easily communicate with anyone with our exclusive app
            functionality, which is similar to native-like potential and
            competency. 
          </p>
        </div>
      </div>

      <div className="lg:hidden mt-6 w-full flex justify-center">
        <Link
          href={"/contact-us"}
          className={`py-8 px-[26px] border border-[#F15C20] text-[#F15C20] hover:text-white ${
            theme === "light" ? "bg-white" : "bg-[#222222]"
          } hover:bg-[#F15C20] transition-all duration-300 rounded-full text-xl font-medium`}
        >
          Let's Start Your Project
        </Link>
      </div>

      <div className="w-full mt-12">
        <div className="w-full lg:w-[80%] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-center gap-x-6">
          <img
            src="/marcio-profile.png"
            alt=""
            className="w-24 h-24 lg:w-auto lg:h-auto"
          />
          <div className="w-full lg:w-[657px]">
            <div className="flex items-end justify-between gap-6 xl:gap-16 border border-b py-2 border-t-0 border-r-0 border-l-0">
              <p className="uppercase text-base font-normal">
                it is said by <span className="font-bold">Marcio Cyrillo</span>,
                executive director at ci&t
              </p>
              <img src="/quotation-mark.png" alt="" />
            </div>
            <p className="text-xl font-normal leading-[27.197px] tracking-[-0.48px] mt-2">
              “The panorama of our life is a myriad of adaptive applications
              running on different devices, with different features and sensors.
              All mobile apps collect tidbits about what we do and feed big
              digital brains that can adapt applications to our needs simply
              because they get to know us.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRankedCategoriesSection;
