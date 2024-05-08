"use client"
import { GlobalContext } from '@/context/GlobalContext';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { BsArrowRight } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';

const ServicesHero = () => {
  const { palette } = useContext(GlobalContext);
  const images = ['/fareshare-mockup.png', '/carter-boating-mockup.png']



  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-7 gap-y-8 gap-x-5 lg:gap-y-0 justify-start items-start lg:pt-20 px-4 md:px-12 lg:px-28 xl:px-48 2xl:px-48">
      <div className='col-span-4 flex flex-col justify-start text-center lg:text-start items-center lg:items-start gap-2'>

        <h1
          style={{
            color: palette?.color,
          }}
          className="lg:block hidden text-3xl font-extrabold lg:text-4xl xl:text-5xl lg:font-bold uppercase"
        >
          Top Rated <span style={{ color: palette?.brandOrange }}>Web</span> <br /> App Development
          <BsArrowRight style={{ color: palette?.brandOrange }} className='inline-flex ' />  <br /> Company
        </h1>
        <h1
          style={{
            color: palette?.color,
          }}
          className="lg:hidden block text-3xl font-extrabold lg:text-5xl lg:font-bold uppercase"
        >
          Top Rated <span style={{ color: palette?.brandOrange }}>Web</span> <br /> app development Company
        </h1>
        <span
          style={{
            color: palette?.dark_contrast_color,
          }}
          className=" my-2 lg:my-6 text-[15px] lg:text-[16px] font-normal"
        >
          We create web applications that bridge the gap between websites and native apps, offering the best of both worlds.
        </span>
        <div className="w-auto flex gap-4 justify-start items-center">
          <Link href={"/contact-us"}
            name="schedule-a-meeting"
            style={{
              background: palette?.brandOrange,
              color: "white",
            }}
            className="orange w-[150px] lg:w-[171px] h-14 lg:h-16 rounded-full transition-all duration-150 hover:opacity-90  shadow-xl text-sm lg:text-md font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center"
          >
            Get Started
          </Link>

        </div>
        <div className='w-full mt-10 grid lg:hidden xl:grid grid-cols-3 gap-8'>
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
        </div>
      </div>
      <div className='col-span-3 flex justify-center items-start '>
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
}

export default ServicesHero
