"use client";
import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

const WebDesignCTA = ({ title, desc, btnText, btnLink }) => {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 flex justify-center items-center overflow-hidden">
      <div className="relative w-full max-w-[1240px] px-4 md:px-0">
        <div className="w-full min-h-[444px] bg-gradient-to-r from-[#3D3D3D] via-[#0C0C0C] to-[#3D3D3D] rounded-[32px] flex flex-col lg:flex-row items-center justify-between p-8 lg:p-[60px] relative overflow-hidden shadow-xl">

          {/* Abstract glowing backgrounds for the mockup area */}
          <div className="absolute right-0 top-0 w-[600px] h-full pointer-events-none hidden lg:block overflow-hidden">
            <div className="absolute right-[10%] top-[20%] w-[300px] h-[300px] bg-[#F15C20]/40 blur-[80px] rounded-full mix-blend-screen"></div>
            <div className="absolute right-[20%] bottom-[10%] w-[250px] h-[250px] bg-[#5AE9FD]/30 blur-[60px] rounded-full mix-blend-screen"></div>
            <div className="absolute right-[-10%] top-[-10%] w-[400px] h-[400px] bg-[#C3202D]/30 blur-[100px] rounded-full mix-blend-color"></div>
          </div>

          {/* Left Text Content */}
          <div className="flex flex-col gap-[25px] w-full lg:w-[552px] relative z-10">
            <h2 className="font-bold text-[36px] md:text-[45px] leading-[105%] tracking-[-0.04em] text-white opacity-90">
              {title || <>It’s Time to Improve Your <span className="text-[#F15C20]">Website Performance</span></>}
            </h2>
            <p className="font-normal text-[16px] leading-[120%] tracking-[-0.014em] text-white/70 max-w-[500px]">
              {desc || "If you are planning a new website or want to improve an existing website, our experts are there for you, providing the best web development consulting services. The right development team can make a major difference in performance."}
            </p>
            <div className="mt-[10px]">
              <Link href={btnLink || "/contact-us"} className="flex items-center group w-fit">
                <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-[14px] font-medium px-[30px] py-[15px] rounded-full transition-colors h-[52px] flex items-center justify-center">
                  {btnText || "Book Your Free Audit"}
                </button>
                <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-[52px] h-[52px] rounded-full flex items-center justify-center transition-colors text-lg  z-10 border border-[#F15C20]">
                  <MdArrowOutward />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative w-full lg:w-[450px] h-[300px] lg:h-[350px] mt-10 -mb-28 lg:mt-0 z-10 flex justify-center items-center">
            {/* We'll use the cta.webp image for this section */}
            <div className="relative w-full h-full">
              <Image
                src="/services/web-design/cta.webp"
                alt="Web Design CTA"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebDesignCTA;
