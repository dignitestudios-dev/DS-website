"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { MdArrowOutward } from "react-icons/md";
const bs = [
  {
    title: "100% Custom App Development",
    desc: "Every app is built from scratch, delivering tailored solutions for startups and enterprise mobile applications.",
  },
  {
    title: "Experienced Mobile and Web Developers",
    desc: "Skilled engineers at Dignite Studios deliver clean code and an exceptional user experience across all platforms.",
  },
  {
    title: "Fast MVP Development",
    desc: "Dignite is known for launching MVPs quickly to validate ideas and gather feedback without compromising quality.",
  },
  {
    title: "Dedicated Startup-Focused Teams",
    desc: "Work with a startup app development company that understands startup challenges and acts as a true partner.",
  },
  {
    title: "Flexible Engagement Models",
    desc: "Engagement models adapt to your needs and budget, giving you full control without fixed contracts.",
  },
  {
    title: "Transparent, Agile Process",
    desc: "We follow a transparent, agile workflow trusted by leading mobile app development agencies for predictable results.",
  },
];

const Bussiness = ({
  cta,
  ctaHeader,
  ctaPara,
  ctaBtn,
  header,
  header2,
  para,
  bs: customBs,
}) => {
  const bsToUse = customBs || bs;
  const paths = [
    "M0.75 0V74C0.750006 85.5 2.24999 107 30.75 105.5H192.25C201.75 105.5 218.05 104.3 225.25 119.5C230.083 128.167 242.45 145.5 253.25 145.5M253.25 145.5C264.05 145.5 319.083 145.5 345.25 145.5H253.25Z",
    "M2.15631 288.5V217.5C1.24999 205 2.15629 186 32.1563 186H193.656C203.25 186 219.456 187.2 226.656 172C231.49 163.333 242.45 145.5 253.25 145.5",
    "M827.25 0V74C827.25 85.5 825.75 107 797.25 105.5H635.75C626.25 105.5 609.95 104.3 602.75 119.5C597.917 128.167 585.55 145.5 574.75 145.5M574.75 145.5C563.95 145.5 508.917 145.5 482.75 145.5H574.75Z",
    "M825.844 289.5V217.5C826.75 205 825.844 186 795.844 186H634.344C624.75 186 608.544 187.2 601.344 172C596.51 163.333 585.55 145.5 574.75 145.5",
    "M413.75 289V2",
  ];

  const dotSettings = [
    { duration: 6, delay: 0 },
    { duration: 5, delay: 1 },
    { duration: 7, delay: 2 },
    { duration: 6.5, delay: 1.5 },
    { duration: 8, delay: 0.5 },
  ];

  const icons = [
    {
      icon: "i1.png",
    },
    {
      icon: "i2.png",
    },
    {
      icon: "i3.png",
    },
    {
      icon: "i4.png",
    },
    {
      icon: "i5.png",
    },
    {
      icon: "i6.png",
    },
  ];

  return (
    <>
      <div
        className="
         w-full bg-[#0A0A0A]
        
         overflow-visible
         [clip-path:ellipse(350%_100%_at_50%_100%)]
         sm:[clip-path:ellipse(350%_100%_at_50%_100%)]
         md:[clip-path:ellipse(200%_100%_at_50%_100%)]
         flex items-center relative justify-center mb-[25%]
       "
      >
        <div className="w-full  grid-cols-1 md:grid hidden justify-start items-start md:py-40 ">
          <div className="flex relative z-20  w-[90%] md:max-w-7xl flex-col text-center mx-auto items-center">
            <h1 className="text-5xl capitalize leading-10 text-white tracking-tighter md:text-7xl font-bold ">
              Why We’re The Best Mobile App Development Agency for{" "}
              <span className="text-[#F15C20]">Startups</span>{" "}
            </h1>
            <p className="text-lg my-6 text-white ">
              We help startups build secure and scalable apps. We’re known for
              our secure mobile application development, custom solutions, and
              hands-on collaboration.
            </p>
          </div>

          <div className="relative  p-8">
            <div className="flex justify-center -mb-48">
              {bs.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="mb-8 relative z-50 w-[379px] h-[390px]"
                >
                  <img
                    src={`/location/mobile-california/${icons[index].icon}`}
                    alt={icons[index].icon}
                    className=" "
                  />
                  <div className="absolute top-0 px-12 py-10">
                    <h2 className="text-lg font-bold text-white ">
                      {item.title}
                    </h2>
                    <p className="text-white text-sm line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center top-11 my-[75px] relative">
              {/* lines in below svg */}
              <div>
                <svg
                  width="828"
                  height="290"
                  viewBox="0 0 828 290"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {paths.map((path, index) => (
                      <path id={`path${index}`} key={index} d={path} />
                    ))}
                  </defs>

                  {paths.map((_, index) => (
                    <use
                      key={`use-${index}`}
                      href={`#path${index}`}
                      stroke="#F15C20"
                      strokeOpacity="0.533333"
                      strokeWidth="1.5"
                    />
                  ))}

                  {/* Animated Dots */}
                  {paths.map((_, index) => (
                    <circle key={`circle-${index}`} r="3" fill="#F15C20">
                      <animateMotion
                        dur={`${dotSettings[index].duration}s`}
                        repeatCount="indefinite"
                        begin={`${dotSettings[index].delay}s`}
                        fill="freeze"
                      >
                        <mpath href={`#path${index}`} />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.05;0.95;1"
                        dur={`${dotSettings[index].duration}s`}
                        repeatCount="indefinite"
                        begin={`${dotSettings[index].delay}s`}
                      />
                    </circle>
                  ))}
                </svg>
              </div>

              <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2">
                <img
                  src="/location/mobile-california/icons/logo.png"
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex justify-center -mt-11">
              {bs.slice(3, 6).map((item, index) => (
                <div
                  key={index}
                  className="mb-8 relative z-50 w-[379px] h-[390px]"
                >
                  <img
                    src={`/location/mobile-california/${icons[index + 3].icon}`}
                    alt={icons[index + 3].icon}
                    className=" "
                  />
                  <div className="absolute top-0 px-12 py-10">
                    <h2 className="text-lg font-bold text-white ">
                      {item.title}
                    </h2>
                    <p className="text-white text-sm line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {cta}
        </div>
        <section className="w-full bg-transparent py-20 px-4 md:hidden relative z-50">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Why California Businesses Choose{" "}
              <span className="text-[#F15C20]">Dignite Studios</span>
            </h2>
            <p className="text-base mt-5 text-gray-300">
              We’re not just another mobile app development company in
              California. We’re a team of experienced engineers focused on
              performance, clarity, and long-term growth.
            </p>
          </div>

          {/* Carousel */}
          <div className="w-full pb-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              style={{
                "--swiper-pagination-color": "#F15C20",
                "--swiper-pagination-bullet-inactive-color": "#919191",
                "--swiper-pagination-bullet-inactive-opacity": "0.5",
                "--swiper-pagination-bullet-size": "8px",
                "--swiper-pagination-bullet-horizontal-gap": "2px",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  centeredSlides: false,
                },
              }}
              className="pb-12"
            >
              {bs.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-[350px] mx-auto">
                    <img
                      src={`/location/mobile-california/${icons[index].icon}`}
                      alt={icons[index].icon}
                      className="w-[350px] h-full object-contain"
                    />
                    <div className="absolute top-0 left-0 w-full h-full px-12 py-8 flex flex-col justify-start text-start">
                      <h2 className="text-base font-bold text-white mb-3">
                        {item.title}
                      </h2>
                      <p className="text-white text-xs leading-relaxed line-clamp-4">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* CTA */}
        </section>
      </div>
      <section className="w-full text-black py-20 px-4 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto"
        >
          <h3 className="text-3xl font-bold capitalize leading-tight">
            {ctaHeader}
          </h3>

          <p className="text-base  mt-4 mb-10">{ctaPara}</p>

          <div className="flex items-center justify-center ">
            <button className="bg-[#F15C20] text-white px-8 py-4 rounded-full text-base font-semibold transition-transform hover:scale-105 active:scale-95">
              {ctaBtn}
            </button>
            <button className="bg-[#F15C20] text-white w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95 text-xl">
              <MdArrowOutward />
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Bussiness;
