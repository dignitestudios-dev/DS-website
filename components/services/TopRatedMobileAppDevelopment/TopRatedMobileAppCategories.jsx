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
        } text-[42px] text-center font-extrabold text-4xl lg:text-5xl xl:text-[72px] 2xl:text-[104px] tracking-tighter xl:font-bold uppercase`}
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
        } w-full my-4`}
      />

      <div className="w-full flex items-center justify-center gap-10 flex-wrap mt-6">
        <div className="w-full lg:w-[345px] 2xl:w-[445px] overflow-hidden bg-[#241C40] rounded-[24px] p-10 relative h-[425px] 2xl:h-[500px] group">
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
            className="w-[349.72px] h-[455.75px] 2xl:h-[535px] 2xl:w-[400px] absolute -bottom-36 -right-10 group-hover:-bottom-28 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[445px] overflow-hidden bg-[#0983F4] rounded-[24px] p-10 relative h-[425px] 2xl:h-[500px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            E-Commerce App
          </h1>
          <div className="bg-[#319CFF] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/ecommerce-mockup-2.png"
            alt=""
            className="w-full h-[490.98px] 2xl:h-[665px] absolute -bottom-48 2xl:-bottom-[270px] 2xl:-right-20 -right-14 group-hover:-bottom-40 2xl:group-hover:-bottom-[248px] transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[445px] overflow-hidden bg-[#07D98D] rounded-[24px] p-10 relative h-[425px] 2xl:h-[500px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            Insurance App
          </h1>
          <div className="bg-[#16ED9F] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/insurance-mockup-1.png"
            alt=""
            className="h-[431.37px] w-full 2xl:h-[575px] absolute -bottom-32 2xl:-bottom-44 -right-14 group-hover:-bottom-24 2xl:group-hover:-bottom-36 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[445px] overflow-hidden bg-[#FEAE12] rounded-[24px] p-10 relative h-[425px] 2xl:h-[500px] group">
          <h1 className="text-white text-[22px] font-bold z-30">Utility App</h1>
          <div className="bg-[#FFC046] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/yellow-utility-mobile-app-development.webp"
            title="Utility mobile app development"
            alt="two mockup screens show the utility mobile app development"
            className="w-[400px] 2xl:h-[530.98px] 2xl:w-[560.98px] absolute -bottom-32 -right-14 group-hover:-bottom-24 2xl:-right-20 2xl:-bottom-36 2xl:group-hover:-bottom-32 transition-all duration-500"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[445px] overflow-hidden bg-[#F4096C] rounded-[24px] p-10 relative h-[425px] 2xl:h-[500px] group">
          <h1 className="text-white text-[22px] font-bold z-30">Dating App</h1>
          <div className="bg-[#FF4292] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/red-dating-mobile-app-development.png"
            title="Dating mobile app development"
            alt="two mockup screens show the dating mobile app development"
            className="w-full h-[490.98px] 2xl:h-[595px] 2xl:w-[400px] absolute -bottom-48 -right-14 group-hover:-bottom-40 transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[345px] 2xl:w-[445px] overflow-hidden bg-[#9875FD] rounded-[24px] p-10 relative h-[425px] 2xl:h-[500px] group">
          <h1 className="text-white text-[22px] font-bold z-30">
            Telehealth App
          </h1>
          <div className="bg-[#9488FF] w-[130%] h-[100%] absolute -left-12 top-28 rounded-full top-rated-category1" />
          <img
            src="/purple-telehealth-mobile-app-development.png"
            title="Telehealth mobile app development"
            alt="two mockup screens show the telehealth mobile app development"
            className="w-[400.67px] h-[490.98px] 2xl:h-[585px] 2xl:w-[400px] absolute -bottom-48 -right-12 group-hover:-bottom-40 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default TopRatedMobileAppCategories;
