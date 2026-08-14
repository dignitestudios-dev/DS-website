import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
const bs = [
  {
    title: "Strategy Before Development",
    desc: "Every successful app usually begins with a strategy that is well defined. We take the time to understand your business goals and project requirements before even a single line of code is written. This is the right approach in order to identify the right features and choose the best technology.",
  },
  {
    title: "Experienced Mobile App Developers",
    desc: "Technical expertise is not enough for building a successful app; it requires experience that solves business challenges. Our experienced mobile app development agency brings years of hands-on experience in creating secure applications across different industries.",
  },
  {
    title: "User Centered UI/UX Design",
    desc: "A great app means it’s easy and enjoyable to use despite being functional. Every screen we build is designed with your users in mind. That’s how our designers create better navigation and clear layouts that make every experience feel natural.",
  },
  {
    title: "Agile Development Process",
    desc: "Every project has to evolve. So the development process we follow is mainly designed to adapt to evolving needs. Through agile development, the project is broken into manageable stages that allow regular feedback and faster improvements.",
  },
  {
    title: "Transparent Communication",
    desc: "Successful partnerships are mainly built on trusted communication. The team at Dignite Studios keeps you informed with regular progress updates and milestone reviews through out the entire project.",
  },
  {
    title: "Long Term Maintenance & Support",
    desc: "Your app needs continuous care to deliver the best experience. Once the project has been launched, continuous maintenance, security updates, performance optimization, bug fixes and feature enhancements are provided by the team to keep your application running.",
  },
];

const Bussiness = ({ cta, ctaHeader, ctaPara, ctaBtn }) => {
  const paths = [
    "M0.75 0V74C0.750006 85.5 2.24999 107 30.75 105.5H192.25C201.75 105.5 218.05 104.3 225.25 119.5C230.083 128.167 242.45 145.5 253.25 145.5M253.25 145.5C264.05 145.5 319.083 145.5 345.25 145.5H253.25Z",
    "M2.15631 288.5V217.5C1.24999 205 2.15629 186 32.1563 186H193.656C203.25 186 219.456 187.2 226.656 172C231.49 163.333 242.45 145.5 253.25 145.5",
    "M827.25 0V74C827.25 85.5 825.75 107 797.25 105.5H635.75C626.25 105.5 609.95 104.3 602.75 119.5C597.917 128.167 585.55 145.5 574.75 145.5M574.75 145.5C563.95 145.5 508.917 145.5 482.75 145.5H574.75Z",
    "M825.844 289.5V217.5C826.75 205 825.844 186 795.844 186H634.344C624.75 186 608.544 187.2 601.344 172C596.51 163.333 585.55 145.5 574.75 145.5",
    "M413.75 289V2",
  ];

  const dotSettings = [
    { duration: 4, delay: 0 },
    { duration: 5, delay: 1 },
    { duration: 6, delay: 0.5 },
    { duration: 4.5, delay: 2 },
    { duration: 7, delay: 1.5 },
  ];

  const icons = [
    {
      icon: "i1.webp",
    },
    {
      icon: "i2.webp",
    },
    {
      icon: "i3.webp",
    },
    {
      icon: "i4.webp",
    },
    {
      icon: "i5.webp",
    },
    {
      icon: "i6.webp",
    },
  ];

  return (
    <>
      <div
        className="
    w-full bg-[#0A0A0A]
   
    overflow-visible
    [clip-path:ellipse(350%_100%_at_50%_100%)]
    sm:[clip-path:ellipse(300%_100%_at_50%_100%)]
    md:[clip-path:ellipse(200%_100%_at_50%_100%)]
    flex items-center relative justify-center 
  "
      >
        <div className="w-full  grid-cols-1 md:grid hidden justify-start items-start pt-28 ">
          <div className="flex relative z-20  w-[90%] md:max-w-7xl flex-col text-center mx-auto items-center">
            <h2 className="text-4xl capitalize leading-10 text-white tracking-tighter md:text-7xl font-bold ">
              Why We're the Best App Development Agency for Your Next Project
            </h2>
            <p className="text-lg my-6 text-white ">
              Choosing a development partner is about more than finding the right technical skills. It's about working with a team that actually understands your business goals and is invested in your success. The team merges thoughtful design and reliable development to build products that solve your product challenge.
            </p>
          </div>

          <div className="relative  p-8">
            <div className="flex justify-center -mb-48">
              {bs.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="mb-8 relative z-50 w-[379px] h-[390px]"
                >
                  <Image
                    src={`/location/mobile-california/${icons[index].icon}`}
                    alt={icons[index].icon}
                    className=" "
                   width={379} height={388} />
                  <div className="absolute top-0 px-12 py-10">
                    <h3 className="text-lg font-bold text-white ">
                      {item.title}
                    </h3>
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
                <Image
                  src="/location/mobile-california/icons/logo.webp" width={354} height={354}
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
                  <Image
                    src={`/location/mobile-california/${icons[index + 3].icon}`}
                    alt={icons[index + 3].icon}
                    className=" "
                   width={379} height={388} />
                  <div className="absolute top-0 px-12 py-10">
                    <h3 className="text-lg font-bold text-white ">
                      {item.title}
                    </h3>
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
               <h2 className="text-4xl capitalize leading-10 text-white tracking-tighter md:text-7xl font-bold ">
              Why We're the Best App Development Agency for Your Next Project
            </h2>
                <p className="text-lg my-6 text-white ">
              Choosing a development partner is about more than finding the right technical skills. It's about working with a team that actually understands your business goals and is invested in your success. The team merges thoughtful design and reliable development to build products that solve your product challenge.
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
                    <Image
                      src={`/location/mobile-california/${icons[index].icon}`}
                      alt={icons[index].icon}
                      className="w-[350px] h-full object-contain"
                     width={379} height={388} />
                    <div className="absolute top-0 left-0 w-full h-full px-12 py-8 flex flex-col justify-start text-start">
                      <h3 className="text-base font-bold text-white mb-3">
                        {item.title}
                      </h3>
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
