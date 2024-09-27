"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";

const TopRankedCategoriesSection = () => {
  const { theme, palette } = useContext(GlobalContext);
  return (
    <section className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-6 justify-start items-start w-full my-6 md:my-12 lg:my-20">
      <div className="w-full flex items-center justify-between">
        <h2
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } text-start text-4xl lg:text-5xl xl:text-[67px] font-bold uppercase hidden lg:w-[60%] xl:w-[70%] lg:block tracking-tighter xl:leading-[72px]`}
        >
          Top Ranked Solutions for Multiple Platforms 
        </h2>
        <h2
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } text-start text-3xl lg:text-5xl xl:text-[64px] font-bold uppercase block lg:hidden`}
        >
          top ranked categories of app development
        </h2>
        <div className="hidden lg:block">
          <ContactButton text1={"Start Your Project"} text2={"Let's talk"} />
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
          } hover:bg-[#F15C20] hover:text-white transition-all duration-300 group`}
        >
          <h3 className={` text-xl font-semibold`}>
            Native Mobile App Development
          </h3>
          <p className={``}>
            We ensure to build highly effective and productive{" "}
            <Link
              href={"/services/native-app-development-services"}
              className="text-orange-600 group-hover:text-white"
            >
              native mobile apps
            </Link>{" "}
            for Android and IOS systems that will be based on your security
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
          <h3 className={`text-xl font-semibold`}>
            Cross-Platform App Development
          </h3>
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
            You can easily communicate with anyone with our exclusive{" "}
            <Link
              href={"/services/pwa-development-services"}
              className="text-orange-600 group-hover:text-white"
            >
              progressive web app
            </Link>{" "}
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
    </section>
  );
};

export default TopRankedCategoriesSection;
