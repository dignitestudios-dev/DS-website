"use client";
import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },

    750: {
      slidesPerView: 2,
    },

    1100: {
      slidesPerView: 2,
    },
  },
};

const RecentDesignShowCase = () => {
  return (
    <>
      <Swiper {...sliderSettings} className="z-10">
        <SliderButtons />
        <SwiperSlide className='bg-[#232323] overflow-hidden relative rounded-3xl' style={{ height: '580px' }} >
          <div className="h-100 w-100 flex items-center justify-center" style={{}} >
            <img src="/bg-shade.png" alt="" srcset="" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  w-full  absolute z-2 top-0">
            <div className="flex flex-col justify-between custom-media-query">
              <div>
                <img src="/app-walk-3.webp" className='h-100 max-w-[200px]' alt="" />
                <img src="/app-walk-4.webp" className='h-100 max-w-[200px] relative left-5' alt="" />
                <img src="/app-walk-5.webp" className='h-100 max-w-[200px] relative left-24' alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-between custom-media-query">
              <div>
                <img src="/app-walk-3.webp" className='h-100 max-w-[200px]' alt="" />
                <img src="/app-walk-2.webp" className='h-100 max-w-[200px] relative left-5' alt="" />
                <img src="/app-walk-7.webp" className='h-100 max-w-[200px] relative left-24' alt="" />
              </div>
            </div>

            <div className="flex flex-col justify-between custom-media-query">
              <div>
                <img src="/app-walk-6.webp" className='h-100 max-w-[200px] relative -left-20' alt="" />
                <img src="/app-walk-7.webp" className='h-100 max-w-[200px] relative ' alt="" />
                <img src="/app-walk-1.webp" className='h-100 max-w-[200px] relative left-20' alt="" />
              </div>
            </div>

          </div>
          <div className="w-[100%] absolute bottom-[0px] bg-[#82888C73] blur-shadow  h-[45%] 2xl:h-[200px]" >
            <div className='p-4'>
              <div className='flex items-center'>
                <img src="/medical-general.png" width="30px" height="30px" alt="" />
                <h2 className='ml-2 text-white capitalize'>My medical journal</h2>
              </div>
              <p className='w-[100%] lg:w-[50%] text-start text-[12px] mt-3  text-[white] font-normal' >
                Unlock a new era of health management with this innovative anatomy
                visualization tool. Effortlessly navigate, interact,
                and track symptoms for optimal well-being.</p>
              <div>
                <div className="w-full absolute bottom-5 left-2  mt-auto flex flex-wrap justify-start flex-wrap gap-2 items-center pr-1">
                  <Link href={"https://play.google.com/store/apps/details?id=com.dignitestudios.mymedicaljournal"} >
                    <img
                      src="/white-bg-google.png"
                      className=""
                      alt="google_play_button"
                    />
                  </Link>
                  <Link href={"https://apps.apple.com/us/app/my-medical-journal-app/id6502008545"}>
                    <img
                      src="/whitebg-app.png"
                      className=" md:h-[40.62px]"
                      alt="app_store_button" />
                  </Link>
                  <Link href={"/case-studies/mymedicaljournal"}>
                    <img
                      src="/white-bg-web.png"
                      className=" md:h-[40.62px]"
                      alt="Website btn play icon"
                    />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-linear overflow-hidden relative rounded-3xl' style={{ height: '580px' }} >
          <div className="h-100 w-100 flex items-center justify-center" style={{}} >
            <img src="/sky-blue-circle.png" alt="" srcset="" />
          </div>
          <div className="grid h-[65%] grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  w-full  absolute z-2 top-0">
            <div className="flex justify-evenly items-center h-100 custom-media-query">
                <img src="/showcase_left.webp" className='h-100 max-w-[200px]' alt="" />
                <img src="/showcase_center.webp" className='h-100 max-w-[200px] relative top-10' alt="" />
                <img src="/showcase_right.webp" className='h-100 max-w-[200px] relative top-16' alt="" />
            </div>          
          </div>
            <div className="w-[100%] absolute bottom-[0px] bg-[#C9D7E273] blur-shadow  h-[45%] 2xl:h-[200px]" >
            <div className='p-4'>
              <div className='flex items-center'>
                <img src="/nykn-logo-new.png" width="30px" height="30px" alt="" />
                <h2 className='ml-2 text-[#181818] capitalize'>NYKN</h2>
              </div>
              <p className='w-[100%] lg:w-[50%] text-start text-[12px] mt-3 text-[#5C5C5C] font-normal' >
              Embark on a journey like never before with
               our immersive travel guide to Nashville. 
              From iconic landmarks to hidden gems, 
              explore the heart of the city with just a click.</p>
              <div>
                <div className="w-full absolute bottom-5 left-2  mt-auto flex flex-wrap justify-start gap-2 items-center pr-1">
                  <Link href={"https://play.google.com/store/apps/details?id=com.dignitestudios.nykn&pli=1"} >
                    <img
                      src="/white-bg-google.png"
                      className=""
                      alt="google_play_button"
                    />
                  </Link>
                  <Link href={"https://apps.apple.com/us/app/now-you-know-nashville/id6505112380"}>
                    <img
                      src="/whitebg-app.png"
                      className=" md:h-[40.62px]"
                      alt="app_store_button" />
                  </Link>
                  <Link href={"/case-studies/nykn"}>
                    <img
                      src="/white-bg-web.png"
                      className=" md:h-[40.62px]"
                      alt="Website btn play icon"
                    />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-linear-green overflow-hidden relative rounded-3xl' style={{ height: '580px' }} >         
          <div className="grid h-[65%] grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  w-full  absolute z-2 top-0">
            <div className="flex justify-center items-end h-100 custom-media-query">
                <img src="/mad-clean-1.png" className='h-100 relative left-[80px] max-w-[300px] ' alt="" />
                <img src="/mad-simple-2.png" className='h-100 max-w-[200px] relative -left-[28px] z-[1]' alt="" />
                <img src="/mad-clean-3.png" className='h-100 max-w-[300px] relative -left-[130px] ' alt="" />
            </div>          
          </div>
          <div className="w-[100%] absolute bottom-[0px] bg-[#82888C73] blur-shadow h-[45%] 2xl:h-[200px]" >
            <div className='p-4'>
              <div className='flex items-center'>
                <img src="/maidsimpl-logo.png" width="30px" height="30px" alt="" />
                <h2 className='ml-2 text-[#181818] capitalize'>maidsimpl</h2>
              </div>
              <p className='w-[100%] lg:w-[50%] text-start text-[12px] mt-3  text-[#5C5C5C] font-normal' >
              Users experience unparalleled convenience with MaidSimpl. 
              From booking to monitoring, streamline your house cleaning
               tasks with precision and ease.</p>
              <div>
                <div className="w-full absolute bottom-5 left-2 flex-wrap mt-auto flex justify-start gap-2 items-center pr-1">
                  <Link href={"https://play.google.com/store/apps/details?id=com.maidsimpl.maidsimpl&hl=en&gl=US"} >
                    <img
                      src="/white-bg-google.png"
                      className=""
                      alt="google_play_button"
                    />
                  </Link>
                  <Link href={"https://apps.apple.com/us/app/maidsimpl/id6478665215"}>
                    <img
                      src="/whitebg-app.png"
                      className=" md:h-[40.62px]"
                      alt="app_store_button" />
                  </Link>
                  <Link href={"https://www.maidsimpl.com/"}>
                    <img
                      src="/white-bg-web.png"
                      className=" md:h-[40.62px]"
                      alt="Website btn play icon"
                    />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-linear-ice overflow-hidden relative rounded-3xl' style={{ height: '580px' }} >         
        <div className="h-[100%] w-100 flex items-center justify-center" style={{}} >
            <img src="/gray-ice-center.png" alt="" srcset="" />
          </div>
          <div className="grid h-[75%] grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  w-full  absolute z-2 top-0">
            <div className="flex justify-center items-end h-100 custom-media-query">
              <div className='flex justify-right' >
                <img src="/boat1.webp" className='h-[350px] relative left-[30px] lg:-right-[60px] w-[250px] object-none' alt="" />
              </div>
              <div>
                <img src="/boat2.webp" className='h-[350px] w-[250px] relative  object-none' alt="" />
              </div>
              <div className='hidden md:flex' >
                <img src="/boat3.webp" className='h-[350px] w-[250px] relative lg:-left-[70px] object-none'  alt="" />
              </div>
            </div>          
          </div>
          <div className="w-[100%] absolute bottom-[0px] bg-[#B6D7C873] blur-shadow  h-[45%] 2xl:h-[200px]" >
            <div className='p-4'>
              <div className='flex items-center'>
                <img src="/carter-logo.png" width="30px" height="30px" alt="" />
                <h2 className='ml-2 text-[#181818] capitalize'>carter boating</h2>
              </div>
              <p className='w-[100%] lg:w-[50%] text-start text-[12px] mt-3  text-[#5C5C5C] font-normal' >
              List, rent, and sail with confidence. 
              Our user-friendly platform ensures seamless 
              transactions and secure payments, making boat 
              rental hassle-free.</p>
              <div>
                <div className="w-full absolute bottom-5 left-2  mt-auto flex justify-start gap-2 items-center pr-1">
               
                  <Link href={"https://www.carterboating.com/"}>
                    <img
                      src="/white-bg-web.png"
                      className="h-[32px] md:h-[40.62px]"
                      alt="Website btn play icon"
                    />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default RecentDesignShowCase;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center justify-end gap-6 absolute -top-16 md:-top-20 right-2 z-30">
      <button
        name="swipe left button"
        type="button"
        onClick={() => swiper.slidePrev()}
      >
        <HiOutlineArrowLeft className="w-8 h-8 text-[#B6B6B6] hover:text-[#F15C20] transition-all duration-200" />
      </button>
      <button
        name="swipe right button"
        type="button"
        onClick={() => swiper.slideNext()}
      >
        <HiOutlineArrowRight className="w-8 h-8 text-[#B6B6B6] hover:text-[#F15C20] transition-all duration-200" />
      </button>
    </div>
  );
};
