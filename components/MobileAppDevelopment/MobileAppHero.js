"use client"
import { GlobalContext } from '@/context/GlobalContext';
import Link from 'next/link';
import React, { useContext } from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const ServicesHero = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-y-0 justify-start items-start lg:py-20 px-4 md:px-12 lg:px-28">
      <div className='col-span-3 flex flex-col justify-start text-center lg:text-start items-center lg:items-start gap-2'>

        <h1
          style={{
            color: palette?.color,
          }}
          className="lg:block hidden text-3xl font-extrabold lg:text-6xl lg:font-bold uppercase"
        >
          award winning mobile <br /> app development <BsArrowRight style={{ color: palette?.brandOrange }} className='inline-flex ' />  <br /> agency
        </h1>
        <h1
          style={{
            color: palette?.color,
          }}
          className="lg:hidden block text-3xl font-extrabold lg:text-6xl lg:font-bold uppercase"
        >
          award winning mobile <br /> app development agency
        </h1>
        <span
          style={{
            color: palette?.dark_contrast_color,
          }}
          className=" my-2 lg:my-6 text-[16px] lg:text-[18px] font-normal"
        >
          Whether it's crafting a visually stunning brand identity, designing
          immersive <br /> digital experiences, or developing strategic marketing
        </span>
        <div className="w-auto flex gap-4 justify-start items-center">
          <Link href={"/contact-us"}
            name="schedule-a-meeting"
            style={{
              background: palette?.brandOrange,
              color: "white",
            }}
            className="w-[150px] lg:w-[171px] h-14 lg:h-16 rounded-full transition-all duration-150 hover:opacity-90  shadow-xl text-sm lg:text-md font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center"
          >
            Get Started
          </Link>

        </div>
        <div className='w-full mt-10 grid grid-cols-3 gap-8'>
          <div className='w-full h-56 flex flex-col justify-start items-start gap-2 py-6 border-t border-[#8F8F8F]/[0.24]'>
            <span style={{
              color: palette?.color,
            }} className='text-4xl font-extrabold'>
              1300+
            </span>
            <span style={{
              color: palette?.dark_contrast_color,
            }} className='text-[16px] lg:text-[17px] text-start font-normal'>Applications developed and designed</span>

          </div>
          <div className='w-full h-56 flex flex-col justify-start items-start gap-2 py-6 border-t border-[#8F8F8F]/[0.24]'>
            <span style={{
              color: palette?.color,
            }} className='text-4xl font-extrabold'>
              300+
            </span>
            <span style={{
              color: palette?.dark_contrast_color,
            }} className='text-[16px] lg:text-[17px] text-start font-normal'>Developers & Engineers under one roof</span>

          </div>
          <div className='w-full h-56 flex flex-col justify-start items-start gap-2 py-6 border-t border-[#8F8F8F]/[0.24]'>
            <span style={{
              color: palette?.color,
            }} className='text-4xl font-extrabold'>
              15+
            </span>
            <span style={{
              color: palette?.dark_contrast_color,
            }} className='text-[16px] lg:text-[17px] text-start font-normal'>Years in software development business</span>

          </div>
        </div>
      </div>
      <div className='col-span-2 lg:py-10'>
        <img src='/services-hero.png' className='lg:scale-150' />
      </div>

    </div>
  );
}

export default ServicesHero
