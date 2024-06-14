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
      <div
        className={`border ${
          theme === "dark" ? "border-gray-600" : "border-[#E7E7E7]"
        } w-full mb-4 mt-6`}
      />

      <div className="w-full flex items-center justify-center gap-10 flex-wrap mt-6">
        <div className="w-full lg:w-[345px] 2xl:w-[445px] overflow-hidden bg-[#241C40] rounded-[24px] p-10 relative h-[425px] 2xl:h-[500px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            Streaming App
          </h1>
          <img
            src="/stream-app-shadow.png"
            alt=""
            className="w-[130%] right-0 left-0 bottom-1 absolute"
          />
          <img
            src="/stream-app-mockup.png"
            alt=""
            className="w-[349.72px] h-[455.75px] 2xl:h-[525px] 2xl:w-[400px] absolute -bottom-36 -right-10 group-hover:-bottom-28 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[445px] overflow-hidden bg-[#0983F4] rounded-[24px] p-10 relative h-[425px] 2xl:h-[500px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            E-Commerce App
          </h1>
          <div className="bg-[#319CFF] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/ecommerce-mockup.png"
            alt=""
            className="w-[549.72px] h-[490.98px] 2xl:h-[650px] 2xl:w-[590px] absolute -bottom-40 2xl:-bottom-56 2xl:-right-20 -right-14 group-hover:-bottom-32 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[445px] overflow-hidden bg-[#07D98D] rounded-[24px] p-10 relative h-[425px] 2xl:h-[500px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            Insurance App
          </h1>
          <div className="bg-[#16ED9F] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/insurance-mockup.png"
            alt=""
            className="h-[431.37px] w-[353.23px] 2xl:h-[555px] 2xl:w-[550px] absolute -bottom-24 2xl:-bottom-32 -right-16 group-hover:-bottom-16 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[445px] overflow-hidden bg-[#FEAE12] rounded-[24px] p-10 relative h-[425px] 2xl:h-[500px] group">
          <h1 className="text-white text-[22px] font-bold z-30">Utility App</h1>
          <div className="bg-[#FFC046] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/utility-mockup.png"
            alt=""
            className="w-[450.67px] h-[490.98px] 2xl:h-[565px] 2xl:w-[600px] absolute -bottom-36 -right-16 2xl:-right-20 group-hover:-bottom-28 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[445px] overflow-hidden bg-[#F4096C] rounded-[24px] p-10 relative h-[425px] 2xl:h-[500px] group">
          <h1 className="text-white text-[22px] font-bold z-30">Dating App</h1>
          <div className="bg-[#FF4292] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/dating-mockup.png"
            alt=""
            className="w-[400.67px] h-[490.98px] 2xl:h-[565px] 2xl:w-[400px] absolute -bottom-48 -right-11 group-hover:-bottom-40 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[445px] overflow-hidden bg-[#9875FD] rounded-[24px] p-10 relative h-[425px] 2xl:h-[500px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            Telehealth App
          </h1>
          <div className="bg-[#9488FF] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/telehealth-mockup.png"
            alt=""
            className="w-[400.67px] h-[490.98px] 2xl:h-[555px] 2xl:w-[400px] absolute -bottom-48 -right-12 group-hover:-bottom-40 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default TopRatedMobileAppCategories;
