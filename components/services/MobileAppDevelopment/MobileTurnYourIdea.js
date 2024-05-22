"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';

const MobileTurnYourIdea = () => {
  const { palette } = useContext(GlobalContext);
  const images = ['/mobile-turn-idea-1.png', '/mobile-turn-idea-2.png']

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-5 justify-start items-start gap-y-8 py-4 lg:py-12 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 ">
      <div className="col-span-5 lg:col-span-3 flex flex-col justify-center h-full items-start gap-y-4">
        <h1
          style={{
            color: palette?.color,
          }}
          className="text-3xl font-extrabold lg:text-4xl xl:text-[54px] xl:leading-[65.35px] lg:font-bold mx-0 uppercase group"
        >
          Top-Class Mobile  
            <br /> App Development  <br /> <span className="text-[#F15C20] transition-all duration-300">Agency</span>
        </h1>
        <p
          style={{
            color: palette?.dark_contrast_color,
          }}
          className="text-[16px] lg:my-4 lg:text-[18px] font-normal lg:ml-1 lg:w-[78%]"
        >
          Leveraging the leading mobile solutions to global recognition for your brand. We aim to catalyze strong and striking mobile app development mechanisms to upheave the functionality of the app in no time.
        </p>
        <Link
          href={"/contact-us"}
          name="schedule-a-meeting"
          style={{
            background: palette?.brandOrange,
            color: "white",
          }}
          className="orange w-[150px] lg:w-[171px] h-14 lg:h-16 rounded-full transition-all duration-150 hover:opacity-90  shadow-xl text-sm lg:text-md font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center lg:ml-1"
        >
          Start your project
        </Link>
      </div>
      <div className="col-span-5 lg:col-span-2 flex items-start justify-center">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          effect={'fade'}
          autoplay={{
            duration: 1000
          }}
          loop={true}

          modules={[EffectFade, Autoplay]}
          className="bg-transparent w-full h-full flex justify-center"
        >
          <SwiperSlide style={{ background: palette?.background }} className=' w-full h-full  flex justify-center'>
            <img src={images[0]} className='w-full h-full md:scale-75 lg:scale-100 lg:w-full lg:h-full' />
          </SwiperSlide>
          <SwiperSlide style={{ background: palette?.background }} className=' w-full h-full  flex justify-center'>
            <img src={images[1]} className='w-full h-full md:scale-75 lg:scale-100 lg:w-full lg:h-full' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MobileTurnYourIdea;
