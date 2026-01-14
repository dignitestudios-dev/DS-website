"use client";
import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Bussiness = () => {
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
  const bs = [
  {
    title: "100% Custom Development",
    desc: "We make apps customized to your business goals, ensuring each feature and design works perfectly for what you want.",
    icon: "i1.png"
  },
  {
    title: "Specialized Engineering Teams",
    desc: "Our committed teams of Chicago mobile app developers skilled in utilizing the modern technologies to create the high performing solutions.",
    icon: "i2.png"
  },
  {
    title: "24/7 Assistance",
    desc: "To guarantee uninterrupted app operation, we also offer round the clock assistance through the original launch to the ongoing updates.",
    icon: "i3.png"
  },
  {
    title: "200+ Skilled Technology Experts",
    desc: "Our vast Chicago app development staff includes years of expertise, a variety of abilities and fresh ideas which can aid in the project.",
    icon: "i4.png"
  },
  {
    title: "Flexible Engagement Models",
    desc: "These models easily adjust to your needs, either you require project based cooperation or the full time development.",
    icon: "i5.png"
  },
  {
    title: "Transparent Process",
    desc: "At every phase of Chicago mobile app development projects, we also uphold the open communication, the precise deadlines and the total visibility.",
    icon: "i6.png"
  }
];

  return (
    <div
      style={{
        // height: "20%",
        // aspectRatio: "3/2",
        clipPath: "ellipse(200% 100% at 50% 100%)",
        background: "#222222",
        width: "100%",
      }}
      className="flex items-center relative justify-center mb-[480px] px-6 py-24 "
    >
      <div className="w-full  grid-cols-1 md:grid hidden justify-start items-start md:py-40 ">
        <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
          <h1 className="text-5xl leading-10 text-white tracking-tighter md:text-7xl font-bold ">
            Why California Businesses Choose
            <span className="text-[#F15C20]"> Dignite Studios</span>{" "}
          </h1>
          <p className="text-lg my-6 text-white ">
            We are not just some people claiming to be the Top mobile app
            development company in California; we have a team of the best mobile
            app developers in California. 
          </p>
        </div>

        <div className="relative  p-8">
            <div className="flex justify-center -mb-48" >
            {bs.slice(0, 3).map((item, index) => (
              <div key={index} className="mb-8 relative z-50 w-[379px] h-[390px]">
                <img src={`/location/mobile-california/${item.icon}`} alt={item.title} className=" " />
                <div className="absolute top-0 px-12 py-10" >
                <h2 className="text-lg font-bold text-white ">{item.title}</h2>
                <p className="text-white text-sm">{item.desc}</p>
              </div>
              </div>
            ))}
            </div>
          <div className="flex justify-center items-center -space-x-28 mt-20 relative">
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
             <div className="flex justify-center -mt-11" >
            {bs.slice(3, 6).map((item, index) => (
              <div key={index} className="mb-8 relative z-50 w-[379px] h-[390px]">
                <img src={`/location/mobile-california/${item.icon}`} alt={item.title} className=" " />
                <div className="absolute top-0 px-12 py-10" >
                <h2 className="text-lg font-bold text-white ">{item.title}</h2>
                <p className="text-white text-sm">{item.desc}</p>
              </div>
              </div>
            ))}
            </div>
        </div>
        <div className="bg-gradient-to-b absolute text-white opacity-100 shadow-xl hover:shadow-orange-300 shadow-orange-200 transition-all ease-linear hover:shadow-2xl w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%] z-50 from-[#f15b20] to-[#F15C2085]">
          <img src="/location/mobile-california/icons/lg2.png" alt="lggg" />
          <div className="md:w-[45%] mx-auto pb-8 -mt-40 space-y-4 flex flex-col items-center text-center">
            <h1 className="text-[45px] font-bold text-white leading-[45px]">
              Still wondering if we're the right fit?
            </h1>
            <p>
              You’ve seen what sets us apart. Now let’s explore your app idea.
              We’ll discuss your app vision, technical roadmap, and long-term
              growth plans.
            </p>
            <div className="flex items-center group justify-center ">
              <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                Book Free Consultation
              </button>
              <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                <MdArrowOutward />
              </button>
            </div>
          </div>
        </div>
      </div>
        <section className="w-full bg-[#222222] py-20 px-4 md:hidden">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Why California Businesses Choose{" "}
          <span className="text-[#F15C20]">Dignite Studios</span>
        </h2>
        <p className="text-base mt-5 text-gray-300">
          We’re not just another mobile app development company in California.
          We’re a team of experienced engineers focused on performance, clarity,
          and long-term growth.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-col gap-8 max-w-xl mx-auto">
        {bs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
            className="relative bg-[#2B2B2B] rounded-2xl p-6 border border-[#3A3A3A]"
          >
            <img
              src={`/location/mobile-california/${item.icon}`}
              alt={item.title}
              className="w-12 h-12 mb-4"
            />

            <h3 className="text-lg font-bold text-white mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-20 bg-gradient-to-b from-[#F15C20] to-[#F15C2085] rounded-2xl px-6 py-10 text-center max-w-xl mx-auto shadow-xl"
      >
        <h3 className="text-2xl font-bold text-white leading-tight">
          Still wondering if we’re the right fit?
        </h3>

        <p className="text-sm text-white mt-4 mb-6">
          Let’s explore your app idea, technical roadmap, and long-term growth
          strategy together.
        </p>

        <div className="flex items-center justify-center gap-3">
          <button className="bg-white text-orange-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-orange-600 hover:text-white transition-colors">
            Book Free Consultation
          </button>
          <button className="bg-white text-orange-600 w-11 h-11 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
            <MdArrowOutward />
          </button>
        </div>
      </motion.div>
    </section>
    </div>
  );
};

export default Bussiness;
