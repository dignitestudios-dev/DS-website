"use client";
import React, { useRef } from "react";

const AppMockupCarousel = ({ title, images = [null, null, null, null, null, null] }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 260; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-start gap-[20px] md:gap-[30px] ">
      {/* Badge */}
      <div className="bg-white/10 rounded-[12px] px-[20px] ml-4 md:ml-40 py-[10px]">
        <span className="text-white text-[20px] md:text-[24px] font-medium leading-[36px]">{title}</span>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="w-full flex flex-row items-center gap-[10px] overflow-x-auto hide-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((imageSrc, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[248px] h-[411px] bg-white/5 rounded-[16px] p-[30px] flex justify-center items-center snap-center"
          >
            {/* The phone image */}
            <div className="w-[200px] h-[380px] flex items-center justify-center">
              {imageSrc ? (
                <img src={imageSrc} alt={`App Screen ${i + 1}`} className="w-full h-full object-contain" />
              ) : (
                <span className="text-white/30 text-sm text-center px-2">App Screen {i + 1}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Nav Buttons */}
      <div className="w-full flex justify-center mt-2">
        <div className="bg-[#101010] rounded-[16px] p-[3px] flex gap-[3px]">
          <button
            onClick={() => scroll("left")}
            className="w-[50px] h-[50px] bg-[#000B00] border border-white/5 rounded-[16px] flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#65CB11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-[50px] h-[50px] bg-[#000B00] border border-white/5 rounded-[16px] flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#65CB11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const FinalOutcome = () => {
  return (
    <section className="w-full relative bg-[#000B00] pt-[100px] md:pt-[200px] pb-[50px] md:pb-[100px] flex flex-col items-center gap-[50px] overflow-hidden">

      {/* Header */}
      <div className="flex flex-col items-center gap-[24px] w-full max-w-[1280px]">
        <h2 className="w-full text-center text-white text-[32px] md:text-[44px] font-medium leading-[1.27]">
          Results & Outcomes
        </h2>
        <p className="w-full max-w-[900px] text-center text-white text-[15px] font-normal leading-[25px]">
          The platform successfully streamlined the connection between engineers and oil companies, reducing friction in the hiring process. It provided a structured system for professional profiling and talent discovery, improving efficiency for both employers and candidates. The foundation supports scalability as user adoption grows.
        </p>
      </div>

      {/* App Carousels */}
      <div className="w-full  flex flex-col items-center gap-[80px]">
        <AppMockupCarousel
          title="User App"
          images={[
            "/epic/u1.webp",
            "/epic/u2.webp",
            "/epic/u3.webp",
            "/epic/u4.webp",
            "/epic/u5.webp",
            "/epic/u6.webp",
            "/epic/u7.webp"
          ]}
        />
        <AppMockupCarousel
          title="Rider App"
          images={[
            "/epic/r1.webp",
            "/epic/r2.webp",
            "/epic/r3.webp",
            "/epic/r4.webp",
            "/epic/r5.webp",
            "/epic/r6.webp",
            "/epic/r7.webp"
          ]}
        />
      </div>

    </section>
  );
};

export default FinalOutcome;
