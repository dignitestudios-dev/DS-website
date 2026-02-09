import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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

const Bussiness = ({ cta, ctaHeader, ctaPara, ctaBtn }) => {
  const paths = [
    "M0.75 0V74C0.750006 85.5 2.24999 107 30.75 105.5H192.25C201.75 105.5 218.05 104.3 225.25 119.5C230.083 128.167 242.45 145.5 253.25 145.5M253.25 145.5C264.05 145.5 319.083 145.5 345.25 145.5H253.25Z",
    "M2.15634 288.5V217.5C1.25002 205 2.15632 186 32.1563 186H193.656C203.25 186 219.456 187.2 226.656 172C231.49 163.333 242.45 145.5 253.25 145.5",
    "M344.5 0V74C344.5 85.5 343 107 314.5 105.5H153C143.5 105.5 127.2 104.3 120 119.5C115.167 128.167 102.8 145.5 92 145.5M92 145.5C81.2 145.5 26.1667 145.5 0 145.5H92Z",
    "M343.094 289.5V217.5C344 205 343.094 186 313.094 186H151.594C142 186 125.794 187.2 118.594 172C113.76 163.333 102.8 145.5 92 145.5",
    "M0.75 287V0",
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
    flex items-center relative justify-center mb-16
  "
    >
      <div className="w-full  grid-cols-1 md:grid hidden justify-start items-start md:py-40 ">
        <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
          <h1 className="text-5xl capitalize leading-10 text-white tracking-tighter md:text-7xl font-bold ">
            Why We’re The Best Mobile App Development Agency for{" "}
            <span className="text-[#F15C20]">Startups</span>{" "}
          </h1>
          <p className="text-lg my-6 text-white ">
            We help startups build secure and scalable apps. We’re known for our
            secure mobile application development, custom solutions, and
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
                  <p className="text-white text-sm line-clamp-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center -space-x-28 mt-20 relative ">
            {/* Left SVG */}
            <div>
              <svg
                width="346"
                height="289"
                viewBox="0 0 346 289"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path id="path0" d={paths[0]} />
                  <path id="path1" d={paths[1]} />
                </defs>
                <use
                  href="#path0"
                  stroke="#F15C20"
                  strokeOpacity="0.533333"
                  strokeWidth="1.5"
                />
                <use
                  href="#path1"
                  stroke="#F15C20"
                  strokeOpacity="0.533333"
                  strokeWidth="1.5"
                />

                {/* Animated Dots - fade out at end */}
                <circle r="3" fill="#F15C20">
                  <animateMotion
                    dur={`${dotSettings[0].duration}s`}
                    repeatCount="indefinite"
                    begin={`${dotSettings[0].delay}s`}
                    fill="freeze"
                  >
                    <mpath href="#path0" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.02;0.98;1"
                    dur={`${dotSettings[0].duration}s`}
                    repeatCount="indefinite"
                    begin={`${dotSettings[0].delay}s`}
                    fill="freeze"
                  />
                </circle>
                <circle r="3" fill="#F15C20">
                  <animateMotion
                    dur={`${dotSettings[1].duration}s`}
                    repeatCount="indefinite"
                    begin={`${dotSettings[1].delay}s`}
                    fill="freeze"
                  >
                    <mpath href="#path1" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.02;0.98;1"
                    dur={`${dotSettings[1].duration}s`}
                    repeatCount="indefinite"
                    begin={`${dotSettings[1].delay}s`}
                    fill="freeze"
                  />
                </circle>
              </svg>
            </div>

            {/* Center Logo and Vertical SVG */}
            <div className="relative">
              <div className="absolute left-[50%] translate-x-[-50%] top-10 -z-10">
                <svg
                  width="2"
                  height="287"
                  viewBox="0 0 2 287"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path id="path4" d={paths[4]} />
                  </defs>
                  <use
                    href="#path4"
                    stroke="#F15C20"
                    strokeOpacity="0.54902"
                    strokeWidth="1.5"
                  />

                  {/* Animated Dot on vertical line */}
                  <circle r="3" fill="#F15C20">
                    <animateMotion
                      dur={`${dotSettings[4].duration}s`}
                      repeatCount="indefinite"
                      begin={`${dotSettings[4].delay}s`}
                      fill="freeze"
                    >
                      <mpath href="#path4" />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.02;0.98;1"
                      dur={`${dotSettings[4].duration}s`}
                      repeatCount="indefinite"
                      begin={`${dotSettings[4].delay}s`}
                      fill="freeze"
                    />
                  </circle>
                </svg>
              </div>
              <img
                src="/location/mobile-california/icons/logo.png"
                alt="logo"
              />
            </div>

            {/* Right SVG */}
            <div>
              <svg
                width="346"
                height="290"
                viewBox="0 0 346 290"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path id="path2" d={paths[2]} />
                  <path id="path3" d={paths[3]} />
                </defs>
                <use
                  href="#path2"
                  stroke="#F15C20"
                  strokeOpacity="0.533333"
                  strokeWidth="1.5"
                />
                <use
                  href="#path3"
                  stroke="#F15C20"
                  strokeOpacity="0.533333"
                  strokeWidth="1.5"
                />

                {/* Animated Dots - fade out at end */}
                <circle r="3" fill="#F15C20">
                  <animateMotion
                    dur={`${dotSettings[2].duration}s`}
                    repeatCount="indefinite"
                    begin={`${dotSettings[2].delay}s`}
                    fill="freeze"
                  >
                    <mpath href="#path2" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.02;0.98;1"
                    dur={`${dotSettings[2].duration}s`}
                    repeatCount="indefinite"
                    begin={`${dotSettings[2].delay}s`}
                    fill="freeze"
                  />
                </circle>
                <circle r="3" fill="#F15C20">
                  <animateMotion
                    dur={`${dotSettings[3].duration}s`}
                    repeatCount="indefinite"
                    begin={`${dotSettings[3].delay}s`}
                    fill="freeze"
                  >
                    <mpath href="#path3" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.02;0.98;1"
                    dur={`${dotSettings[3].duration}s`}
                    repeatCount="indefinite"
                    begin={`${dotSettings[3].delay}s`}
                    fill="freeze"
                  />
                </circle>
              </svg>
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
                  <p className="text-white text-sm line-clamp-3">{item.desc}</p>
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
            We’re not just another mobile app development company in California.
            We’re a team of experienced engineers focused on performance,
            clarity, and long-term growth.
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
  
    </>
  );
};

export default Bussiness;
