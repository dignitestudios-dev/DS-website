"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testData = [
  {
    name: "Shawn Brown",
    desgination: "– CTO, DigiNest Solutions",
    review:
      "“We needed mobile app maintenance and support services, and Dignite Studios ensured our app runs perfectly. The team is highly professional.”",
  },
  {
    name: "Steve Johns",
    desgination: "– Founder, HealthVision",
    review:
      "“Recommending Dignite Studios because our app stays updated and secure now. Their mobile app development services gave us complete peace of mind.”",
  },
  {
    name: "Michael Lee",
    desgination: "– Product Manager, FoodieGo",
    review:
      "“The team provides excellent services, keeping our app smooth and continuously improving the experience for our users.”",
  },
];


const Testimonials = ({ header, header2, para, test: customTest }) => {
  const testimonials =  testData;

  return (
    <div className="w-full grid grid-cols-1 justify-start items-start md:py-40 py-20 relative z-20">
      <div className="flex relative z-20 w-[90%] md:w-[55%] flex-col text-center mx-auto items-center">
        <h1 className="text-5xl leading-10 tracking-tighter md:text-7xl font-bold ">
          The Client 
          <span className="text-[#F15C20]"> Stories</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#0C0C0C]">{para}</p>
      </div>

      <div className="w-full py-12 px-4 md:px-0">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
            1920: {
              slidesPerView: 6,
            },
          }}
          className="testimonial-swiper !pb-14"
        >
          {[...testimonials, ...testimonials, ...testimonials].map(
            (item, index) => (
              <SwiperSlide
                key={index}
                className="!flex !justify-center !items-center py-10"
              >
                {({ isActive }) => (
                  <div
                    className={`relative w-[258px] h-[295px] group rounded-[30px] shadow-2xl transition-all duration-500 ease-in-out ${
                      isActive
                        ? "scale-110 z-30 opacity-100"
                        : "scale-90 opacity-40 z-10"
                    }`}
                  >
                    {/* Orange rotating background - Tilted when active */}
                    <div
                      className={`absolute top-0 left-0 w-full h-full bg-[#F15C20] rounded-[30px] transition-all ease-in-out duration-500 z-0 ${
                        isActive ? "rotate-12" : "rotate-0"
                      }`}
                    />

                    {/* White background card */}
                    <div className="absolute top-0 left-0 w-[258px] h-[295px] rounded-[30px] bg-white shadow-md z-10" />

                    {/* Content wrapper */}
                    <div className="relative z-20 flex flex-col items-center justify-start h-full p-6 text-black">
                      {/* Quote Image */}
                      <img
                        src="/location/mobile-california/quote.png"
                        alt="quote"
                        className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 w-16"
                      />

                      {/* Text content */}
                      <div className="my-10 text-center">
                        <img
                          src="/location/mobile-california/rev.png"
                          alt="review stars"
                          className="mx-auto mb-2"
                        />
                        <h3 className="text-base font-bold">{item.name}</h3>
                        <p className="text-xs text-gray-600">
                          {item.desgination}
                        </p>
                      </div>

                      <p className="text-xs text-center line-clamp-4 px-2">
                        "{item.review}"
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #f15c20 !important;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
