"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import ServicesNavbar from "@/components/global/ServicesNavbar";

const AndroidAppHero = () => {
  const { palette, setIsSidebarOpen } = useContext(GlobalContext);
  const images = ["/mobile-hero-mockup-3.png", "/mobile-hero-mockup-4.png"];

  return (
    <div className="bg-ios bg-black w-full lg:h-screen flex flex-col justify-start items-start">
      <ServicesNavbar setIsOpen={setIsSidebarOpen} />
      <div className="w-full flex lg:h-[calc(100%-5rem)] py-6 lg:py-0 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48">
        <div className="w-full lg:w-[60%] 2xl:w-[80%] h-full flex flex-col justify-center text-center lg:text-start items-center lg:items-start gap-2">
          <h1
            style={{
              color: "#fff",
            }}
            className="lg:block hidden text-3xl font-extrabold lg:text-4xl xl:text-[64px] xl:leading-[67.84px] 2xl:text-[104px] 2xl:leading-[100px] lg:font-bold xl:font-semibold tracking-tight "
          >
            Best-Class{" "}
            <span style={{ color: palette?.brandOrange }}>Android</span> App
            <br /> Development
            <br /> Company
          </h1>
          <h1
            style={{
              color: "#fff",
            }}
            className="lg:hidden block text-3xl font-extrabold lg:text-5xl lg:font-bold "
          >
            Best-Class{" "}
            <span style={{ color: palette?.brandOrange }}>Android</span> <br />{" "}
            app development company
          </h1>
          <span
            style={{
              color: "#fff",
            }}
            className="lg:w-[80%] my-2 lg:my-6 text-[13px] lg:text-[14px] 2xl:text-lg font-normal"
          >
           Explore unique illustrations of a renowned Android app development company Dignite Studios which has tremendously transformed the merchandising scale to the top level. 
          </span>
          <div className="w-auto flex gap-4 justify-start items-center">
            <Link
              href={"/contact-us"}
              name="schedule-a-meeting"
              style={{
                background: palette?.brandOrange,
                color: "white",
              }}
              className="orange w-[150px] lg:w-[171px] xl:w-[189px] xl:h-[64px] h-14 lg:h-16 rounded-full transition-all duration-150 hover:opacity-90  shadow-sm text-sm lg:text-md font-semibold tracking-wide shadow-[#F15C20]/[0.3] flex items-center justify-center"
            >
              Start Your Project
            </Link>
          </div>
          {/* <div className='w-full mt-10 grid lg:hidden xl:grid grid-cols-3 gap-8'>
          <div className='w-full h-56 md:h-auto lg:h-56  flex flex-col justify-start items-start gap-2 py-6 border-t border-[#8F8F8F]/[0.24]'>
            <span style={{
              color: palette?.color,
            }} className='text-4xl xl:text-3xl font-extrabold'>
              150+
            </span>
            <span style={{
              color: palette?.dark_contrast_color,
            }} className='text-[16px] lg:text-[17px] text-start font-normal'>Applications developed and designed</span>

          </div>
          <div className='w-full h-56 md:h-auto lg:h-56  flex flex-col justify-start items-start gap-2 py-6 border-t border-[#8F8F8F]/[0.24]'>
            <span style={{
              color: palette?.color,
            }} className='text-4xl xl:text-3xl font-extrabold'>
              170+
            </span>
            <span style={{
              color: palette?.dark_contrast_color,
            }} className='text-[16px] lg:text-[17px] text-start font-normal'>Developers & Engineers under one roof</span>

          </div>
          <div className='w-full h-56 md:h-auto lg:h-56  flex flex-col justify-start items-start gap-2 py-6 border-t border-[#8F8F8F]/[0.24]'>
            <span style={{
              color: palette?.color,
            }} className='text-4xl xl:text-3xl font-extrabold'>
              04+
            </span>
            <span style={{
              color: palette?.dark_contrast_color,
            }} className='text-[16px] lg:text-[17px] text-start font-normal'>Years in software development business</span>

          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default AndroidAppHero;
