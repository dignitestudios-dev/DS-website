import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";
import Link from "next/link";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
  },
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
  },
};

const FindOurOfficesSwiper = ({ offices }) => {
  return (
    <div className="w-full flex lg:hidden">
      <Swiper {...sliderSettings} modules={[Autoplay]} className="w-full">
        <SwiperSlide className="w-full h-60 md:h-80 ">
          <Link
            href="https://www.google.com/maps/place//@25.099730,55.156910,15z/data=!3m1!4b1?entry=ttu"
            className="w-full h-full relative z-10"
          >
            <Image
              loader={customLoader}
              width={240}
              height={240}
              loading="lazy"
              src="/dubai.webp"
              alt=""
              className="w-full  h-full md:h-80 rounded-xl"
            />
            <span className=" transition-all duration-300  flex flex-col items-start justify-center  px-4 absolute bottom-8 left-[17%] w-3/5 h-auto py-2 rounded-xl bg-white">
              <h1 className="text-md font-medium text-black">
                {offices[2]?.name}
              </h1>
              <p className="text-xs font-normal capitalize text-[#5c5c5c]">
                {offices[2]?.description}
              </p>
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="w-full h-60  md:h-80 ">
          <Link
            href="https://www.google.com/maps/place//@28.599880,-81.221460,15z/data=!3m1!4b1?entry=ttu"
            className="w-full h-full relative z-10"
          >
            <Image
              loader={customLoader}
              width={240}
              height={240}
              loading="lazy"
              src="/florida.webp"
              alt=""
              className="w-full   h-full md:h-80 rounded-xl"
            />
            <span className=" transition-all duration-300  flex flex-col items-start justify-center  px-4 absolute bottom-8 left-[17%] w-3/5 h-auto py-2 rounded-xl bg-white">
              <h1 className="text-md font-medium text-black">
                {offices[0]?.name}
              </h1>
              <p className="text-xs font-normal capitalize text-[#5c5c5c]">
                {offices[0]?.description}
              </p>
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="w-full  h-60  md:h-80 ">
          <Link
            href="https://www.google.com/maps/place//@24.859775,67.052421,15z/data=!3m1!4b1?entry=ttu"
            className="w-full h-full relative z-10"
          >
            <Image
              loader={customLoader}
              width={240}
              height={240}
              loading="lazy"
              src="/pakistan.webp"
              alt=""
              className="w-full  h-full md:h-80 rounded-xl"
            />
            <span className=" transition-all duration-300  flex flex-col items-start justify-center  px-4 absolute bottom-8 left-[17%] w-3/5 h-auto py-2 rounded-xl bg-white">
              <h1 className="text-md font-medium text-black">
                {offices[3]?.name}
              </h1>
              <p className="text-xs font-normal capitalize text-[#5c5c5c]">
                {offices[3]?.description}
              </p>
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="w-full  h-60  md:h-80 ">
          <Link
            href="https://www.google.com/maps/place//@42.849390,-106.329070,15z/data=!3m1!4b1?entry=ttu"
            className="w-full h-full relative z-10"
          >
            <Image
              loader={customLoader}
              width={240}
              height={240}
              loading="lazy"
              src="/wyoming.webp"
              alt=""
              className="w-full  h-full md:h-80 rounded-xl"
            />
            <span className=" transition-all duration-300  flex flex-col items-start justify-center  px-4 absolute bottom-8 left-[17%] w-3/5 h-auto py-2 rounded-xl bg-white">
              <h1 className="text-md font-medium text-black">
                {offices[1]?.name}
              </h1>
              <p className="text-xs font-normal capitalize text-[#5c5c5c]">
                {offices[1]?.description}
              </p>
            </span>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FindOurOfficesSwiper;
