"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import MobileAppWeDevelopSwiper from "./MobileAppWeDevelopSwiper";

const MobileAppWeDevelopSection = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-center w-full mt-6 mb-10 md:my-12 lg:mt-16 lg:mb-20">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between">
        <div className="lg:w-[80%] flex flex-col gap-y-6 lg:gap-y-2">
          <h1
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-[42px] font-extrabold text-4xl lg:text-5xl xl:text-[72px] xl:font-bold uppercase`}
          >
            <span className="text-[#F15C20]">mobile apps</span> we develop
          </h1>
          <p
            className={`text-base font-normal text-start ${
              theme === "light" && "text-[#2A2A2A]"
            }`}
          >
            Diginite Studios creates top-notch mobile applications and
            cutting-edge mobile features for their users to clinch their potency
            and worthiness. Our mobile app services endeavor to build Android
            and IOS mobile applications that function as per the required needs
            of the user. Heading with successful mobile projects we fabricate
            app success in the procreation of unbeatable user interfaces, coding
            systems, database management, security, and maintenance.  
          </p>
        </div>

        <div className="flex flex-col gap-y-32">
          <div className="mt-7">
            <Link
              href={"/contact-us"}
              className="px-8 py-7 rounded-full font-medium text-lg border border-[#F15C20] text-[#F15C20] hover:bg-[#F15C20] hover:text-white transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
          {/* <div className="flex items-center justify-end gap-6">
            <button>
              <HiOutlineArrowLeft className="w-8 h-8 text-[#B6B6B6]" />
            </button>
            <button>
              <HiOutlineArrowRight className="w-8 h-8 text-[#F15C20]" />
            </button>
          </div> */}
        </div>
      </div>
      <div
        className={`border ${
          theme === "dark" ? "border-gray-600" : "border-[#E7E7E7]"
        } w-full mb-4 mt-6`}
      />

      {/* <div className="w-full flex items-center justify-center gap-10 mt-6 overflow-hidden">
        <div className="w-full lg:w-[345px] 2xl:w-[400px] overflow-hidden bg-[#241C40] rounded-[24px] p-10 relative h-[425px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            Streaming App
          </h1>
          <img
            src="/stream-app-shadow.webp"
            alt="two mockup screens showing streaming mobile app development"
            title="Streaming mobile app development"
            className="w-[130%] right-0 left-0 bottom-1 absolute"
          />
          <img
            src="/purple-mobile-streaming-mobile-app-development.webp"
            alt="two mockup screens showing streaming mobile app development"
            title="Streaming mobile app development"
            className="w-[349.72px] h-[455.75px] absolute -bottom-36 -right-10 group-hover:-bottom-28 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[400px] overflow-hidden bg-[#0983F4] rounded-[24px] p-10 relative h-[425px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            E-Commerce App
          </h1>
          <div className="bg-[#319CFF] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/blue-ecommerce-mobile-app-development.webp"
            title="E-commerce mobile app development"
            alt=" two mockup screens show the e-commerce mobile app development"
            className="w-[549.72px] h-[490.98px] absolute -bottom-40 -right-14 group-hover:-bottom-32 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[400px] overflow-hidden bg-[#07D98D] rounded-[24px] p-10 relative h-[425px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            Insurance App
          </h1>
          <div className="bg-[#16ED9F] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/green-insurance-mobile-app-development.webp"
            title="Insurance mobile app development"
            alt="Two mockup screens show Mobile Insurance mobile app development"
            className="h-[431.37px] w-[453.23px] absolute -bottom-24 2xl:-bottom-[105px] -right-16 group-hover:-bottom-16 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[400px] overflow-hidden bg-[#FEAE12] rounded-[24px] p-10 relative h-[425px] group">
          <h1 className="text-white text-[22px] font-bold z-30">Utility App</h1>
          <div className="bg-[#FFC046] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/yellow-utility-mobile-app-development.webp"
            title="Utility mobile app development"
            alt="two mockup screens show the utility mobile app development"
            className="w-[440.67px] h-[390.98px] absolute -bottom-10 -right-0 group-hover:-bottom-2 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[400px] overflow-hidden bg-[#F4096C] rounded-[24px] p-10 relative h-[425px] group">
          <h1 className="text-white text-[22px] font-bold z-30">Dating App</h1>
          <div className="bg-[#FF4292] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/red-dating-mobile-app-development.webp"
            title="Dating mobile app development"
            alt="two mockup screens show the dating mobile app development"
            className="w-[400.67px] h-[490.98px] absolute -bottom-48 -right-11 group-hover:-bottom-40 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[400px] overflow-hidden bg-[#9875FD] rounded-[24px] p-10 relative h-[425px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            Telehealth App
          </h1>
          <div className="bg-[#9488FF] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/purple-telehealth-mobile-app-development.webp"
            title="Telehealth mobile app development"
            alt="two mockup screens show the telehealth mobile app development"
            className="w-[400.67px] h-[490.98px] absolute -bottom-48 -right-12 group-hover:-bottom-40 transition-all duration-300"
          />
        </div>
      </div> */}

      <MobileAppWeDevelopSwiper/>

    
    </div>
  );
};

export default MobileAppWeDevelopSection;
