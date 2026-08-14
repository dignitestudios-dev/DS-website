"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { getIndustryRoute } from "@/utils/industryRoutes";
export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
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

const icons = [
  {
    icon: "health.webp",
  },
  {
    icon: "ecom.webp",
  },
  {
    icon: "state.webp",
  },
  {
    icon: "date.webp",
  },
  {
    icon: "edu.webp",
  },
  {
    icon: "edu.webp",
  },
  {
    icon: "fin.webp",
  },
  {
    icon: "date.webp",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare",
    desc: "Healthcare is becoming more digital. So patients now expect convenient access to healthcare. The team builds secure healthcare applications. To simplify appointment scheduling, telemedicine, patient communication and health record management.",
  },
  {
    title: "Ecommerce",
    desc: "The great shopping experience has more than just an attractive website. We develop ecommerce applications that make browsing and managing orders simple for your customers. The solutions help businesses increase customer engagement.",
  },
  {
    title: "Real Estate",
    desc: "Finding the right property should be basic and simple so the team build real estate applications that make it easier for buyers and sellers to connect through property listings. Our solutions help real estate businesses simplify property management.",
  },
  {
    title: "Food Delivery",
    desc: "Customers expect food delivery to be simple. We develop applications that make ordering and tracking deliveries effortlessly simple for both customers and businesses.",
  },
  {
    title: "Travel",
    desc: "Modern travelers expect quick access to information and smooth booking experiences. We build travel applications that make the entire trip planning, reservations and itinerary management simple.",
  },
  {
    title: "Education",
    desc: "We genuinely believe learning should be accessible and easy to manage. So we create educational applications that support online learning, virtual classrooms, progress tracking and assessments between students and educators.",
  },
  {
    title: "FinTech",
    desc: "Trust and security are at the heart of every financial application. We build fintech solutions that simplify digital payments, online banking, expense management, investing and financial planning.",
  },
  {
    title: "Social Networking",
    desc: "Building a successful social platform means encouraging meaningful interactions through unique experiences. We develop social networking applications with features that support messaging, content sharing, communities, notifications and user engagement.",
  },
];

const Industries = ({ header, header2, para }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Duplicate data to ensure infinite loop works smoothly
  const duplicatedPropositions = [
    ...(VALUE_PROPOSITION || []),
    ...(VALUE_PROPOSITION || []),
    ...(VALUE_PROPOSITION || []),
    ...(VALUE_PROPOSITION || []),
  ];

  return (
    <div className="w-full grid grid-cols-1  justify-start items-start  ">
      <div className="flex relative z-20  w-[90%] md:w-[78%] flex-col text-center mx-auto items-center">
        <h2 className="text-4xl leading-[40px] md:leading[1.1] tracking-tighter md:text-7xl font-bold ">
          Custom Mobile App Solutions for Specialized Industries
        </h2>
        <p className="text-sm md:text-lg my-6 dark:text-white md:w-[60%] mx-auto text-[#0C0C0C]">
          Every industry has unique challenges and goals. The team can create custom solutions that fit the way your business works. The team develops applications that can solve business problems. We build user-friendly solutions that help businesses adapt and stay competitive.
        </p>
      </div>
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView={"auto"}
          loopedSlides={10}
          loopAdditionalSlides={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="!w-full !py-12 h-full gap-0 relative overflow-visible"
        >
          {duplicatedPropositions?.map((value, index) => {
            const isActive = index === activeIndex;
            // Get original index for icons
            const originalIndex = index % (VALUE_PROPOSITION?.length || 1);

            return (
              <SwiperSlide
                key={index}
                className="!bg-white    !text-black !w-[290px] !h-[376px] shadow-2xl  !p-2 !rounded-[14px] transition-transform duration-500 !flex !flex-col !items-center !justify-center"
                style={{
                  transform: isActive ? "scale(1)" : "scale(0.9)",
                  transition: "transform 0.5s ease",
                  zIndex: isActive ? 10 : 1,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    // borderRadius: "12px",
                    // height: "460px",
                    transition: "all 0.1s ease",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "8px",
                    overflow: "hidden",
                  }}
                  className="relative z-50 bg-[linear-gradient(152.14deg,_#FFAA88_-78.52%,_#FFFFFF_63.9%)] rounded-b-[25px] h-[300px] rounded-t-xl  -mb-10   shadow-[#ffc2a9]"
                >
                  {/* <Image src='/location/mobile-california/img.webp' alt="Industries Img" className='absolute'  width={379} height={388} /> */}
                  <Image
                    src={`/location/mobile-california/${icons[originalIndex].icon}`}
                    alt={value.title || "image"}
                    className={`object-contain select-none bg-[#fdddd0] m-4 pointer-events-none ${
                      isActive && "shadow-2xl"
                    }`}
                   width={50} height={50} />

                  {isActive && (
                    <Image
                      src="/location/mask.webp" width={216} height={183}
                      alt="web design mask overlay"
                      className="absolute -top-10 -left-16 z-10 rounded-t-xl pointer-events-none"
                    />
                  )}
                  <div
                    className="flex items-center justify-start pt-16 px-4 gap-3 w-full"
                    style={{ textAlign: "start" }}
                  >
                    <h3 className="text-[16px] line-clamp-1 font-semibold  tracking-tight">
                      {value?.title}
                    </h3>
                  </div>

                  <p className="text-sm px-4 text-start lg:leading-[17px] font-medium line-clamp-5">
                    {value?.desc}
                  </p>
                </div>
                <div
                  className={`relative bottom-0 rounded-b-[14px] left-[50%] overflow-hidden translate-x-[-50%] pt-14 py-4 bg-[#FFC2A9] w-full mx-auto  text-center`}
                >
                  <div
                    className={`absolute bottom-0 -right-4 rounded-r-[14px] overflow-hidden h-[90px] bg-gradient-to-l from-[#FD6214] via-[#CF3E2F] to-[#B1182B] transition duration-500 ease-linear ${
                      isActive
                        ? "w-[120%] rounded-l-full "
                        : "w-[0] rounded-l-full"
                    }`}
                  ></div>
                  <Link
                    href={getIndustryRoute(value?.title)}
                    className="w-full"
                  >
                    <button
                      className={`${
                        isActive && "text-white"
                      } flex items-center relative z-50 justify-center w-full  text-[#F15C20] font-medium`}
                    >
                      View More{" "}
                      <span>
                        <IoIosArrowRoundForward size={25} strokeWidth={5} />
                      </span>
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Industries;
