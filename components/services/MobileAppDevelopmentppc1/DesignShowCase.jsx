"use client";
import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";



const DesingShowCase = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mt-6 ">

        <img src="/showcase1.webp" alt="" className="w-full" srcset="" />
        <img src="/designshowcase2.webp" className="w-full" alt="" srcset="" />          
        <img src="/amaizing5.webp" alt="" className="w-full" srcset="" />
        <img src="/visual-design.webp" alt=""  className="w-full" srcset="" />
        <img src="/amaizing3.webp" alt="" className="w-full" srcset="" />            
        <img src="/amaizing4.webp" alt="" className="w-full" srcset="" />
            
        
        
            
        </div>
    </>
  );
};

export default DesingShowCase;


