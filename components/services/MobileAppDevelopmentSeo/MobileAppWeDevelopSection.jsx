"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const MobileAppWeDevelopSection = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-center w-full mt-6 mb-10 md:my-12 lg:my-16">
      <h1
        className={`${
          theme === "dark" ? "text-white" : "text-black"
        } text-[42px] text-center font-extrabold text-4xl lg:text-5xl xl:text-[72px] xl:font-bold uppercase`}
      >
        <span className="text-[#F15C20]">mobile apps</span> we develop
      </h1>
      <p className={`text-base font-normal text-center lg:w-[60%] ${theme === 'light' && 'text-[#2A2A2A]'}`}>
        Diginite Studios creates top-notch mobile applications and cutting-edge
        mobile features for their users to clinch their potency and worthiness.
        Our mobile app services endeavor to build Android and IOS mobile
        applications that function as per the required needs of the user.
        Heading with successful mobile projects we fabricate app success in the
        procreation of unbeatable user interfaces, coding systems, database
        management, security, and maintenance.  
      </p>
      <div
        className={`border ${
          theme === "dark" ? "border-gray-600" : "border-[#E7E7E7]"
        } w-full mb-4 mt-6`}
      />

      <div className="w-full flex items-center justify-center gap-10 flex-wrap mt-6">
        <div className="w-full lg:w-[345px] 2xl:w-[400px] overflow-hidden bg-[#241C40] rounded-[24px] p-10 relative h-[425px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            Streaming App
          </h1>
          <img
            src="/stream-app-shadow.png"
            alt="streaming-app"
            className="w-[130%] right-0 left-0 bottom-1 absolute"
          />
          <img
            src="/stream-app-mockup.png"
            alt=""
            className="w-[349.72px] h-[455.75px] absolute -bottom-36 -right-10 group-hover:-bottom-28 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[400px] overflow-hidden bg-[#0983F4] rounded-[24px] p-10 relative h-[425px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            E-Commerce App
          </h1>
          <div className="bg-[#319CFF] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/ecommerce-mockup.png"
            alt="ecommerce-app"
            className="w-[549.72px] h-[490.98px] absolute -bottom-40 -right-14 group-hover:-bottom-32 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[400px] overflow-hidden bg-[#07D98D] rounded-[24px] p-10 relative h-[425px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            Insurance App
          </h1>
          <div className="bg-[#16ED9F] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/insurance-mockup.png"
            alt="insurance-app"
            className="h-[431.37px] w-[453.23px] absolute -bottom-24 2xl:-bottom-[105px] -right-16 group-hover:-bottom-16 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[400px] overflow-hidden bg-[#FEAE12] rounded-[24px] p-10 relative h-[425px] group">
          <h1 className="text-white text-[22px] font-bold z-30">Utility App</h1>
          <div className="bg-[#FFC046] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/utility-mockup.png"
            alt="utility-app"
            className="w-[440.67px] h-[490.98px] absolute -bottom-36 -right-16 group-hover:-bottom-28 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[400px] overflow-hidden bg-[#F4096C] rounded-[24px] p-10 relative h-[425px] group">
          <h1 className="text-white text-[22px] font-bold z-30">Dating App</h1>
          <div className="bg-[#FF4292] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/dating-mockup.png"
            alt="dating-app"
            className="w-[400.67px] h-[490.98px] absolute -bottom-48 -right-11 group-hover:-bottom-40 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[400px] overflow-hidden bg-[#9875FD] rounded-[24px] p-10 relative h-[425px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            Telehealth App
          </h1>
          <div className="bg-[#9488FF] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/telehealth-mockup.png"
            alt="telehealth-app"
            className="w-[400.67px] h-[490.98px] absolute -bottom-48 -right-12 group-hover:-bottom-40 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppWeDevelopSection;
