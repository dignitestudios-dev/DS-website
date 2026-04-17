"use client";
import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";



const DesingShowCase = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mt-6 ">

        <img src="/showcase1.webp" alt="DesignShowCase Showcase1" className="w-full" srcset="" />
        <img src="/designshowcase2.webp" className="w-full" alt="DesignShowCase Designshowcase2" srcset="" />          
        <img src="/amaizing5.webp" alt="DesignShowCase Amaizing5" className="w-full" srcset="" />
        <img src="/visual-design.webp" alt="DesignShowCase Visual Design"  className="w-full" srcset="" />
        <img src="/amaizing3.webp" alt="DesignShowCase Amaizing3" className="w-full" srcset="" />            
        <img src="/amaizing4.webp" alt="DesignShowCase Amaizing4" className="w-full" srcset="" />
            
        
        
            
        </div>
    </>
  );
};

export default DesingShowCase;


