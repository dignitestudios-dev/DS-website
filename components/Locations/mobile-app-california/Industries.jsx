"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowRoundForward } from "react-icons/io";
export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  // autoplay: {
  //   delay: 3000,
  // },
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    750: {
      slidesPerView: 2,
    },

    900: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
    1390: {
      slidesPerView: 4,
    },
    1900: {
      slidesPerView: 5,
    },
  },
};

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Apps (Telemedicine, Patient Portals)",
    desc: "Let’s be honest. Let’s face it: a nice-looking app isn’t enough in healthcare. You need one that’s secure, compliant, and actually works. That’s why, as a Healthcare app development company we build HIPAA-ready apps. Telemedicine, patient portals, remote monitoring, you name it. And don’t worry, as the healthcare world spins forward, your app keeps up.",
    icon: "health.png",
  },
  {
    title: "Fintech Apps (Digital Banking, Payment Gateways)",
    desc: "You already know that stability and trust are non-negotiable if you’re working in the fintech industry. We help you launch secure fintech apps and payment mobile apps with bank-grade encryption, multi-layer authentication, KYC/AML support, and real-time transaction management. You get a platform that protects sensitive data, handles large transaction volumes, and meets modern financial compliance standards. Whether you’re building digital banking, investment tools, or payment gateways, we give you the technical foundation that keeps your users confident and your business risk-free.",
    icon: "fin.png",
  },
  {
    title: "E-commerce & Retail Apps (Mobile Shopping, POS Solutions)",
    desc: "Nobody likes a slow or complicated shopping app so we don’t build them. Our e-commerce and retail apps keep things quick, simple, and tailored to your customers. Storefront? Check. Inventory? Check. POS and loyalty? All covered. You get fewer cart abandonments and more happy buyers. Less cart abandonment, more customer satisfaction. Whether scaling or starting new, your tech stays quick and growth-ready.",
    icon: "ecom.png",
  },
  {
    title: "Education & e-Learning Apps (Online Courses, Platforms)",
    desc: "Nobody wants an educational app to be difficult. Yes. We hate that too. That’s why we create apps that guide students step by step through courses, videos, quizzes while teachers get dashboards that actually help them do their job. And as your community grows, the app grows with it. No surprises, just smooth learning.",
    icon: "edu.png",
  },
  {
    title: "Real Estate Apps (Property Listings, Virtual Tours)",
    desc: "Your users need clarity and convenience. Our real estate apps and property tech apps include property listings, advanced filters, virtual tours, mortgage calculators, and lead management tools. From intuitive property exploration to a smart backend for listing management, our app leverages technology to make every interaction fast, reliable, and effortless. Elevate your leads and transactions with a system built for today’s real estate market.",
    icon: "state.png",
  },
  {
    title: "Logistics & On-Demand Apps",
    desc: "Imagine a day when every delivery just works. Drivers know exactly where to go, orders are managed automatically, payments are handled safely, and your customers are always in the loop. That’s what our logistics and on-demand apps do. We make logistics simple.",
    icon: "date.png",
  },
];
const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start md:py-40 ">
      <div className="flex relative z-20  w-[90%] md:w-[78%] flex-col text-center mx-auto items-center">
        <h1 className="text-5xl leading-10 tracking-tighter md:text-7xl font-bold ">
          Specialized App Development for
          <span className="text-[#F15C20]"> California Industries</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white md:w-[60%] mx-auto text-[#0C0C0C]">
          At Dignite Studios, we don’t offer one-size-fits-all products. We
          build mobile app solutions shaped around your business model,
          compliance needs, and growth plans.
        </p>
      </div>
      <Swiper
        modules={[Autoplay]}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="overflow-visible !px-[120px] h-full !flex !justify-center gap-0 relative"
      >
        {VALUE_PROPOSITION?.map((value, index) => {
          const isActive = index === activeIndex;

          return (
            <SwiperSlide
              key={index}
              className="!bg-white  !text-black lg:!w-[470px] shadow-2xl  !p-2 !rounded-[14px] transition-transform duration-500 flex justify-center"
              style={{
                transform: isActive ? "scale(1)" : "scale(0.9)",
                transition: "transform 0.5s ease",
                zIndex: isActive ? 10 : 1,
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(225deg, rgba(251, 146, 60, 0.15) 0%, rgba(255, 255, 255, 0.95) 25%, rgba(255, 255, 255, 1) 50%)",
                  width: "100%",
                  // borderRadius: "12px",
                  height: "460px",
                  transition: "all 0.1s ease",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  gap: "8px",
                  overflow: "hidden",
                }}
                className="relative z-50 rounded-b-[45px] rounded-t-xl -mb-10   shadow-[#ffc2a9]"
              >
                {/* <img src='/location/mobile-california/img.png' className='absolute' /> */}
                <img
                  src={`/location/mobile-california/${value.icon}`}
                  alt={value.title || "image"}
                  className={`object-contain select-none bg-inherit m-4 pointer-events-none ${
                    isActive && "shadow-2xl"
                  }`}
                />
                <div
                  className="flex items-center justify-start pt-8 px-4 gap-3 w-full"
                  style={{ textAlign: "start" }}
                >
                  <h3 className="text-[15px] lg:text-[22px]  tracking-tight">
                    {value?.title}
                  </h3>
                </div>

                <p className="text-sm px-4 text-start lg:leading-[24px] font-light">
                  {value?.desc}
                </p>
              </div>
              <div
                className={`relative bottom-0 rounded-b-[14px] left-[50%] overflow-hidden translate-x-[-50%] pt-16 bg-[#FFC2A9] w-full mx-auto py-6 text-center`}
              >
                <div
                  className={`absolute bottom-0 -right-4 rounded-r-[14px] overflow-hidden h-[110px] bg-gradient-to-l from-[#FD6214] via-[#CF3E2F] to-[#B1182B] transition-all duration-500 ease-linear ${
                    isActive
                      ? "w-[100%] rounded-l-full "
                      : "w-[0] rounded-l-full"
                  }`}
                ></div>

                <button
                  className={`${
                    isActive && "text-white"
                  } flex items-center relative z-50 justify-center w-full  text-[#F15C20] font-medium`}
                >
                  Talk with Us{" "}
                  <span>
                    <IoIosArrowRoundForward size={25} />
                  </span>
                </button>
              </div>
            </SwiperSlide>
          );
        })}

        {/* <SwiperButtons /> */}
      </Swiper>
      <div></div>
    </div>
  );
};

export default Industries;
