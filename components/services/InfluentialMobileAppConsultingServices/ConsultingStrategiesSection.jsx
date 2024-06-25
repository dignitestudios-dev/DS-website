"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const ConsultingStrategiesSection = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="py-12 global-padding-horizontal ">
      <div className="w-full flex items-start justify-between">
        <h1 className="text-3xl lg:text-[68px] font-bold lg:leading-[70.72px]">
          <span className="text-[#F15C20]">Mobile App</span> Development
          Consulting Strategies 
        </h1>
        <Link
          href={"/contact-us"}
          className="w-[270px] h-[80px] top-rated-btn-shadow hover:opacity-[.75] transition-all duration-300 rounded-full text-xl font-semibold text-white bg-[#F15C20] flex items-center justify-center gap-2"
        >
          Contact Us <RiArrowRightUpLine className="text-2xl" />
        </Link>
      </div>

      <p
        className={`text-base font-normal ${
          theme === "light" && "text-[#5C5C5C] leading-[20.81px]"
        } mt-6`}
      >
        The charismatic architecture of your mobile creates a spectacular
        element in your brand’s worth. Likewise, a mobile app strategy can
        enhance user engagement and the credibility of your new app idea. Here,
        the top-class mobile app consulting services of Dignite Studios, have
        the privilege of accumulating the world’s renowned expert consultants,
        specialists, designers, and professionals, who not only guide you latest
        mobile strategy but also cede best practices for mobile application
        development in the wide range of services for mobile progression. 
      </p>

      <div className="w-full mt-8 flex items-center justify-between">
        <div className="lg:w-[40%]">
          <img
            src="/consulting-strategies-mockup.png"
            alt="consulting-strategies-mockup"
            title="consulting-strategies-mockup"
            className="h-[391px] w-[614px] rounded-3xl"
          />
        </div>
        <div className="lg:w-[60%] flex flex-col items-start justify-center gap-6 lg:ps-12">
          <h2 className="text-[28px] font-semibold">Market Research</h2>
          <p
            className={`text-base font-normal ${
              theme === "light" && "text-[#5C5C5C] leading-[20.81px]"
            } `}
          >
            Market analysis for mobile apps improves to identification of
            potential consumers and highlights the customization required from
            the audience in the application. In the competitive space, the
            mobile app market has surpassed the worth of $197 billion in 2021.
            However, it has been evaluated that it will rise to $583 billion by
            2030.
          </p>
          <p
            className={`text-base font-normal ${
              theme === "light" && "text-[#5C5C5C] leading-[20.81px]"
            } `}
          >
            Likewise, the professional service of Dignite Studios showcases
            productive consulting services and conducts proper research in the
            consultation process of app development. Hence, this will help you
            to increase your chances of success in the market of mobile
            technology.
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-between gap-3 mt-10">
        <div className="w-[210px] py-3 flex flex-col items-start gap-3">
          <span className="text-base font-normal text-[#A4A4A4]">01</span>
          <div className="w-[210px] h-[2px] bg-gray-300" />
          <p className="text-base font-normal">Market Research</p>
        </div>
        <div className="w-[210px] py-3 flex flex-col items-start gap-3">
          <span className="text-base font-normal text-[#A4A4A4]">02</span>
          <div className="w-[210px] h-[2px] bg-gray-300" />
          <p className="text-base font-normal">Market Research</p>
        </div>
        <div className="w-[210px] py-3 flex flex-col items-start gap-3">
          <span className="text-base font-normal text-[#A4A4A4]">03</span>
          <div className="w-[210px] h-[2px] bg-gray-300" />
          <p className="text-base font-normal">Market Research</p>
        </div>
        <div className="w-[210px] py-3 flex flex-col items-start gap-3">
          <span className="text-base font-normal text-[#A4A4A4]">04</span>
          <div className="w-[210px] h-[2px] bg-gray-300" />
          <p className="text-base font-normal">Market Research</p>
        </div>
        <div className="w-[210px] py-3 flex flex-col items-start gap-3">
          <span className="text-base font-normal text-[#A4A4A4]">05</span>
          <div className="w-[210px] h-[2px] bg-gray-300" />
          <p className="text-base font-normal">Market Research</p>
        </div>
        <div className=" py-3 flex items-center justify-end gap-3">
          <button className="w-[49px] h-[49px] rounded-full flex items-center justify-center">
            <GoArrowLeft className="text-xl" />
          </button>
          <button className="w-[49px] h-[49px] rounded-full flex items-center justify-center bg-[#F15C20]">
            <GoArrowRight className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultingStrategiesSection;
