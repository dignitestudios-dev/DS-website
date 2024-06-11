"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const TopRatedMobileAppCategories = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-center w-full my-6 md:my-12 lg:my-16">
      <h1
        className={`${
          theme === "dark" ? "text-white" : "text-black"
        } text-[42px] text-center font-extrabold text-4xl lg:text-5xl xl:text-[72px] xl:font-bold uppercase`}
      >
        mobile app categories
      </h1>
      <p className={`text-base font-normal text-center lg:w-[60%]`}>
        We develop mobile apps that cater to various needs and industries.
        Whether you want to revolutionize productivity, foster connections, or
        create immersive entertainment, we have the expertise to bring your app
        to life.
      </p>
      <div className="w-full border border-[#E7E7E7] mt-4" />

      <div className="w-full flex items-center justify-center gap-10 flex-wrap mt-6">
        <div className="w-full lg:w-[345px] overflow-hidden bg-[#241C40] rounded-[24px] p-10 relative h-[425px]">
            <h1 className="text-white text-[22px] font-bold z-30">Streaming App</h1>
          <div className="bg-[#3c175f] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
        </div>
        <div className="w-full lg:w-[345px] overflow-hidden bg-[#0983F4] rounded-[24px] p-10 relative h-[425px]">
            <h1 className="text-white text-[22px] font-bold z-30">E-Commerce App</h1>
          <div className="bg-[#319CFF] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
        </div>
        <div className="w-full lg:w-[345px] overflow-hidden bg-[#07D98D] rounded-[24px] p-10 relative h-[425px]">
            <h1 className="text-white text-[22px] font-bold z-30">Insurance App</h1>
          <div className="bg-[#16ED9F] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
        </div>
        
      </div>
      <div className="w-full flex items-center justify-center gap-10 flex-wrap mt-6">
      <div className="w-full lg:w-[345px] overflow-hidden bg-[#FEAE12] rounded-[24px] p-10 relative h-[425px]">
            <h1 className="text-white text-[22px] font-bold z-30">Utility App</h1>
          <div className="bg-[#FFC046] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
        </div>
        <div className="w-full lg:w-[345px] overflow-hidden bg-[#F4096C] rounded-[24px] p-10 relative h-[425px]">
            <h1 className="text-white text-[22px] font-bold z-30">Dating App</h1>
          <div className="bg-[#FF4292] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
        </div>
        <div className="w-full lg:w-[345px] overflow-hidden bg-[#9875FD] rounded-[24px] p-10 relative h-[425px]">
            <h1 className="text-white text-[22px] font-bold z-30">Telehealth App</h1>
          <div className="bg-[#9488FF] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
        </div>
      </div>
    </div>
  );
};

export default TopRatedMobileAppCategories;
