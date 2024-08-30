"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ProgressiveWebApp = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full global-padding-horizontal py-10 lg:py-20">
      <div className="w-full flex flex-wrap gap-y-10">
        <div className="w-full lg:w-[65%]">
          <div className="flex flex-col">
            <span className="text-[#8F8F8F] text-[20px] font-bold uppercase">
              Progressive
            </span>
          </div>
          <h2 className="headings-size my-4">
            <span className="text-[#F15C20]">Web App</span> Development Company
          </h2>
          <p className="text-sm md:text-[18px] font-normal leading-[26.46px] lg:w-2/3">
            With years of proven track record, Dignite Studios lays an efficient
            structure to build a highly intuitive progressive web app (PWA),
            connecting iOS, Android, and Web assets under a single codebase. We
            acquire next-gen features to make your PWA deliver the fastest,
            reliable, and engaging development process to meet the needs of the
            users.
          </p>
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] w-[198px] mt-8 px-7 py-5 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-1"
          >
            Start Your Project <FiArrowUpRight className="text-lg" />
          </Link>
        </div>

        <div className="w-full lg:w-[35%] flex justify-center lg:pt-28 relative">
          <div
            className={`w-[208px] h-[54px] hidden md:flex items-end gap-2 absolute left-[20px] lg:-left-[150px] lg:top-[42%] xl:-left-[85px] xl:top-[52%] 2xl:-left-[35px]`}
            // data-aos="fade-up"
            // data-aos-offset="0"
            // data-aos-delay="0"
            // data-aos-duration="500"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="true"
            // data-aos-anchor-placement="top-center"
          >
            <div className="relative">
              <div className="flex items-center justify-between bg-[#ffdfdf] rounded-full w-[42px] h-[42px] relative">
                <img src="/hardy-smith.png" alt="" />
                <div className="w-[8px] h-[8px] rounded-full bg-[#35E15B] absolute bottom-1 right-0" />
              </div>
            </div>
            <div
              className={`w-[141px] pl-2 h-[54px] font-normal flex items-center justify-center rounded-tl-[20px] rounded-r-[20px] ${
                theme === "light"
                  ? "bg-[#FAFAFC] text-black"
                  : "bg-[#2d2d2d] text-white"
              }`}
            >
              <span className="text-xs">Hey, can you help me out please?</span>
            </div>
          </div>

          <div
            className={`w-[299px] h-[325px] rounded-[20px] p-2 ${
              theme === "light" ? "bg-[#FAFAFC]" : "bg-[#2d2d2d]"
            }`}
          >
            <div
              className={`w-full h-full rounded-[20px] p-5 flex flex-col gap-1 ${
                theme === "light" ? "bg-white" : "bg-[#494949]"
              }`}
            >
              <p
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } text-[18px] font-semibold`}
              >
                Messages
              </p>
              <div
                className={`flex items-start justify-between mb-1 py-2 rounded-[16px] mt-4`}
              >
                <div className="flex items-center justify-start gap-3">
                  <div
                    className={`w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#E2FFE9]`}
                  >
                    <img src="/ronald-richard.png" alt="" />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <span
                      className={`text-sm font-semibold ${
                        theme === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      Ronald Richard
                    </span>
                    <span
                      className={`text-[13px] font-medium ${
                        theme === "light" ? "text-[#6A6A6A]" : "text-[#D5D5D5]"
                      }`}
                    >
                      Thank you.
                    </span>
                  </div>
                </div>

                <div className="w-[20px] h-[20px] bg-[#7D70F8] rounded-full text-white flex items-center justify-center text-xs">
                  2
                </div>
              </div>

              <div
                className={`flex items-start justify-between mb-1 py-2 rounded-[16px]`}
              >
                <div className="flex items-center justify-start gap-3">
                  <div
                    className={`w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#E2FFE9]`}
                  >
                    <img src="/mike-smith.png" alt="" />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <span
                      className={`text-sm font-semibold ${
                        theme === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      Mike Smith
                    </span>
                    <span
                      className={`text-[13px] font-medium ${
                        theme === "light" ? "text-[#6A6A6A]" : "text-[#D5D5D5]"
                      }`}
                    >
                      Hey, your design is ready!
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`flex items-start justify-between py-2 rounded-[16px]`}
              >
                <div className="flex items-center justify-start gap-3">
                  <div
                    className={`w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#E2FFE9]`}
                  >
                    <img src="/david-james.png" alt="" />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <span
                      className={`text-sm font-semibold ${
                        theme === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      David James
                    </span>
                    <span
                      className={`text-[13px] font-medium ${
                        theme === "light" ? "text-[#6A6A6A]" : "text-[#D5D5D5]"
                      }`}
                    >
                      Let's schedule a meeting.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-[232px] h-[54px] hidden md:flex items-end gap-2 absolute right-2 lg:-right-32 lg:bottom-[36%] xl:-right-14 xl:bottom-[19%] 2xl:bottom-[16%]"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <div className="relative">
              <div className="flex items-center justify-between bg-[#ffdfdf] rounded-full w-[42px] h-[42px] relative">
                <img src="/hardy-smith.png" alt="" />
                <div className="w-[8px] h-[8px] rounded-full bg-[#35E15B] absolute bottom-1 right-0" />
              </div>
            </div>
            <div
              className={`w-[179px] pl-2 h-[54px] font-normal flex items-center justify-center rounded-tl-[20px] rounded-r-[20px] ${
                theme === "light"
                  ? "bg-[#FAFAFC] text-black"
                  : "bg-[#2d2d2d] text-white"
              }`}
            >
              <span className="text-xs">
                I have done course. Anybody need help?
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressiveWebApp;
