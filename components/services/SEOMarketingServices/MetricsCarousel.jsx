"use client";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MetricCard = ({ item }) => (
    <article
  className={`relative w-[250px] bg-white rounded-2xl border border-[#D3D3D8] p-6 pt-14 shadow-sm hover:shadow-lg transition-all flex flex-col items-center ${
    item.description ? "h-[280px]" : "h-[160px]"
  }`}
>
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#F15C20] shadow-[0_8px_20px_rgba(241,92,32,0.35)] overflow-hidden">
            {item.icon ? (
                typeof item.icon === "string" ? (
                    <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
                ) : (
                    item.icon
                )
            ) : item.number ? (
                <span className="text-white text-3xl font-bold">{item.number}</span>
            ) : null}
        </div>
        <h3 className="text-lg font-bold text-[#1F222E] mt-2 text-center">{item.title}</h3>
        {item.description && (
            <p className="text-sm text-gray-600 mt-3 text-center">{item.description}</p>
        )}
    </article>
);

const MetricsCarousel = ({
    header,
    header2,
    para,
    button,
    data,
}) => {
    return (
        <section className="w-full bg-white mt-10">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl tracking-tighter md:text-7xl font-bold leading-[42px] lg:leading-[1.1]">
                    {header}
                    {header2 && <span className="text-[#F15C20]">{header2}</span>}
                </h2>

                {para && (
                    <p className="mt-5 text-base md:text-lg mx-auto max-w-[800px]">
                        {para}
                    </p>
                )}

                {/* Desktop Grid */}
                <div className="mt-28 hidden lg:flex gap-x-4 gap-y-16 flex-wrap justify-center items-center">
                    {data.map((item) => (
                        <MetricCard key={item.title} item={item} />
                    ))}
                </div>

                {/* Mobile/Tablet Swiper */}
                <div className="mt-28 lg:hidden">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        spaceBetween={20}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            dynamicMainBullets: 3,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                centeredSlides: false,
                            },
                            768: {
                                slidesPerView: 3,
                                centeredSlides: false,
                            },
                        }}
                        className="!pb-12 metrics-swiper"
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.title} className="!flex !justify-center">
                                <MetricCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* CTA */}
                {button && (
                    <Link href="/contact-us" className="flex items-center mt-8 group justify-center">
                        <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition">
                            {button}
                        </button>
                        <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition text-lg">
                            <MdArrowOutward />
                        </button>
                    </Link>
                )}
            </div>

            {/* Pagination Styling */}
            <style jsx global>{`
        .metrics-swiper .swiper-pagination-bullet {
          background-color: #F15C20 !important;
          opacity: 0.5;
        }

        .metrics-swiper .swiper-pagination-bullet-active {
          background-color: #F15C20 !important;
          opacity: 1;
        }
      `}</style>
        </section>
    );
};

export default MetricsCarousel;
