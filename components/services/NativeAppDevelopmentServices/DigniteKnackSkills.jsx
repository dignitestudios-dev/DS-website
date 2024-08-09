"use client";
import { DIGNITE_KNACK_SKILLS } from "@/constants/DigniteKnackSkills";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 2,
    },

    1100: {
      slidesPerView: 3,
    },
    2560: {
      slidesPerView: 4,
    },
  },
};

const DigniteKnackSkills = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full py-12 global-padding-horizontal">
      <div className="w-full relative overflow-hidden">
        <section className="w-full flex flex-col lg:flex-row items-start gap-y-6">
          <div className="w-full lg:w-[75%]">
            <p className="uppercase font-bold text-xl text-[#8F8F8F]">
              experience true digitalization with
            </p>
            <h2 className="headings-size mt-2">Dignite’s Knack Of Skills</h2>
            <p className="text-lg font-normal mt-4">
              Over the past several years there has been a significant increase
              in the usage of smartphones, where people typically have become
              more dependent on technology. Here, Dignite’s dedicated software
              development team provides the top benefits of native applications
              to bestow absolute mobile app solutions for iOS and Android
              platforms. We offer services to expedite small and large
              enterprises for native mobile applications and non-native apps.
              Our user-centric native applications will skyrocket your business
              to the next level with our thriving ideas and best practices.
            </p>
          </div>
          <div className="w-full lg:w-[25%] flex justify-center items-center lg:justify-end">
            <div className="lg:mt-6">
              <Link
                href={"/contact-us"}
                className="bg-[#F15C20] text-white w-[218px] h-[64px] rounded-full text-center flex items-center gap-1 justify-center font-semibold"
              >
                Start Your Project <FiArrowUpRight className="text-2xl" />
              </Link>
            </div>
          </div>
        </section>

        <Swiper {...sliderSettings} className="mt-10 z-10">
          {DIGNITE_KNACK_SKILLS.map((card, i) => {
            return (
              <SwiperSlide key={i} className="">
                <div
                  className={`h-[320px] lg:h-[380px] xl:h-[310px] 2xl:h-[340px] w-full lg:w-[380px] rounded-[18px]
                   p-6 flex flex-col items-start gap-0 text-start group  ${
                     theme === "dark"
                       ? "bg-[#1c1c1c] hover:bg-[#F15C20] text-white transition-all duration-200"
                       : "bg-[#FAFAFA] hover:bg-[#F15C20] text-white transition-all duration-200"
                   }`}
                >
                  {/* <h3 className="text-[#B8B8B8] text-[20px] md:text-[40px] font-bold">
                    {card?.count}
                  </h3> */}
                  <h2
                    className={`font-semibold text-xl md:mb-2 ${
                      theme === "light"
                        ? "text-[#424242] group-hover:text-white"
                        : ""
                    }`}
                  >
                    {card?.title}
                  </h2>
                  <p
                    className={`${
                      theme === "dark"
                        ? "text-white "
                        : "text-[#424242] group-hover:text-white"
                    } text-[13px] font-medium`}
                  >
                    {card?.description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default DigniteKnackSkills;
