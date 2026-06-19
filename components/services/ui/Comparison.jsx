"use client";
import React from "react";
import { motion } from "framer-motion";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const Comparison = () => {
  const leftFeatures = [
    { title: "Browser based access" },
    { title: "Online use only" },
    { title: "Standard user experience" },
    { title: "Easier maintenance" },
    { title: "Informational websites" },
    { title: "Lower development costs" },
  ];

  const rightFeatures = [
    { title: "App like functionality" },
    { title: "Offline access available" },
    { title: "Enhanced user experience" },
    { title: "Improved mobile performance" },
    { title: "Interactive digital experiences" },
    { title: "Higher engagement potential" },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-[100px] flex flex-col items-center justify-center">
      <div className="w-full max-w-[1240px] px-4 md:px-0 flex flex-col items-center gap-[50px]">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-[30px] max-w-[1009px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-[40px] md:text-[72px] leading-[105%] tracking-[-0.04em] text-[#1F222E]"
          >
            The Major Difference Between a Traditional Website and a Progressive <span className="text-[#F15C20]" >Web Application?</span> 
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-light text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]"
          >
            Selecting traditional website and a Progressive Web Application is just dependant on your business goals & your functionality requirements. Although traditional websites are ideal for delivering content. But PWAs provide a more app like experience.
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="relative w-full max-w-[1040px] flex flex-col lg:flex-row items-stretch gap-[30px] mt-[20px]">
          {/* VS Badge */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[47px] h-[47px] bg-[#FFFFFF] border border-[#0C0C0C]/5 rounded-full shadow-[0px_1px_2px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] z-10 items-center justify-center">
            <span className="font-medium text-[24px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
              vs
            </span>
          </div>

          {/* Left Column - Traditional Website */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#F9F9F9] rounded-[12px] p-0 flex flex-col items-start w-full lg:w-[605px] overflow-hidden"
          >
            {/* Column Header */}
            <div className="w-full px-[20px] pb-[20px] pt-[20px] border-b border-[#0C0C0C]/10 flex flex-row items-center gap-[20px]">
              <div className="w-[80px] h-[80px] bg-[#FFFFFF] rounded-[8px] flex justify-center items-center shrink-0 shadow-sm">
                <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.3333 0C34.4384 0 35.4982 0.438987 36.2796 1.22039C37.061 2.00179 37.5 3.0616 37.5 4.16667V29.1667C37.5 30.2717 37.061 31.3315 36.2796 32.1129C35.4982 32.8943 34.4384 33.3333 33.3333 33.3333H4.16667C3.0616 33.3333 2.00179 32.8943 1.22039 32.1129C0.438987 31.3315 0 30.2717 0 29.1667V4.16667C0 3.0616 0.438987 2.00179 1.22039 1.22039C2.00179 0.438987 3.0616 0 4.16667 0H33.3333ZM33.3333 12.5H4.16667V27.0833C4.16673 27.5936 4.35407 28.0861 4.69316 28.4674C5.03224 28.8488 5.49948 29.0924 6.00625 29.1521L6.25 29.1667H31.25C31.7603 29.1666 32.2528 28.9793 32.6341 28.6402C33.0154 28.3011 33.259 27.8339 33.3187 27.3271L33.3333 27.0833V12.5ZM6.25 4.16667C5.69747 4.16667 5.16756 4.38616 4.77686 4.77686C4.38616 5.16756 4.16667 5.69747 4.16667 6.25C4.16667 6.80253 4.38616 7.33244 4.77686 7.72314C5.16756 8.11384 5.69747 8.33333 6.25 8.33333C6.80253 8.33333 7.33244 8.11384 7.72314 7.72314C8.11384 7.33244 8.33333 6.80253 8.33333 6.25C8.33333 5.69747 8.11384 5.16756 7.72314 4.77686C7.33244 4.38616 6.80253 4.16667 6.25 4.16667ZM12.5 4.16667C11.9475 4.16667 11.4176 4.38616 11.0269 4.77686C10.6362 5.16756 10.4167 5.69747 10.4167 6.25C10.4167 6.80253 10.6362 7.33244 11.0269 7.72314C11.4176 8.11384 11.9475 8.33333 12.5 8.33333C13.0525 8.33333 13.5824 8.11384 13.9731 7.72314C14.3638 7.33244 14.5833 6.80253 14.5833 6.25C14.5833 5.69747 14.3638 5.16756 13.9731 4.77686C13.5824 4.38616 13.0525 4.16667 12.5 4.16667ZM18.75 4.16667C18.1975 4.16667 17.6676 4.38616 17.2769 4.77686C16.8862 5.16756 16.6667 5.69747 16.6667 6.25C16.6667 6.80253 16.8862 7.33244 17.2769 7.72314C17.6676 8.11384 18.1975 8.33333 18.75 8.33333C19.3025 8.33333 19.8324 8.11384 20.2231 7.72314C20.6138 7.33244 20.8333 6.80253 20.8333 6.25C20.8333 5.69747 20.6138 5.16756 20.2231 4.77686C19.8324 4.38616 19.3025 4.16667 18.75 4.16667Z" fill="#F15C20"/>
                </svg>
              </div>
              <div className="flex flex-col gap-[8px] justify-center">
                <h3 className="font-semibold text-[24px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                  Traditional Website
                </h3>
              </div>
            </div>

            {/* Column Features */}
            <div className="w-full px-[20px] py-[10px] flex flex-col">
              {leftFeatures.map((item, index) => (
                <div
                  key={index}
                  className={`w-full py-[20px] flex flex-row items-center gap-[20px] ${
                    index !== leftFeatures.length - 1 ? "border-b border-[#0C0C0C]/10" : ""
                  }`}
                >
                  <div className="w-[36px] h-[36px] bg-[#FFFFFF] border border-[#68D585] rounded-[50px] flex justify-center items-center shrink-0">
                    <FaCheck className="text-[#68D585] text-sm" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-semibold text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Progressive Web App */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#F9F9F9] rounded-[12px] p-0 flex flex-col items-start w-full lg:w-[605px] overflow-hidden"
          >
            {/* Column Header */}
            <div className="w-full px-[20px] pb-[20px] pt-[20px] border-b border-[#0C0C0C]/10 flex flex-row items-center gap-[20px]">
              <div className="w-[80px] h-[80px] bg-[#FFFFFF] rounded-[8px] flex justify-center items-center shrink-0 shadow-sm">
                <svg width="28" height="42" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.36667 41.6667C2.43333 41.6667 1.63889 41.3389 0.983334 40.6833C0.327778 40.0278 0 39.234 0 38.3021V3.36458C0 2.40625 0.321527 1.60625 0.964583 0.964583C1.60764 0.322917 2.40833 0.00138889 3.36667 0H21.7958C22.7264 0 23.5201 0.327778 24.1771 0.983333C24.8326 1.63889 25.1604 2.43333 25.1604 3.36667V10.0625C25.6785 10.1181 26.1285 10.3333 26.5104 10.7083C26.8924 11.0819 27.0833 11.5319 27.0833 12.0583V15.7437C27.0833 16.2701 26.8924 16.7201 26.5104 17.0938C26.1285 17.4674 25.6785 17.6826 25.1604 17.7396V38.3C25.1604 39.2306 24.8326 40.0243 24.1771 40.6812C23.5215 41.3368 22.7278 41.6646 21.7958 41.6646L3.36667 41.6667ZM13.725 8.51667C14.0306 8.21111 14.1833 7.82917 14.1833 7.37083C14.1833 6.91389 14.0306 6.53264 13.725 6.22708C13.4194 5.92153 13.0375 5.76875 12.5792 5.76875C12.1208 5.76875 11.7403 5.92153 11.4375 6.22708C11.1347 6.53264 10.9819 6.91458 10.9792 7.37292C10.9764 7.83125 11.1292 8.2125 11.4375 8.51667C11.7458 8.82083 12.1271 8.97361 12.5812 8.975C13.0354 8.97639 13.4167 8.82361 13.725 8.51667Z" fill="#F15C20"/>
                </svg>
              </div>
              <div className="flex flex-col gap-[8px] justify-center">
                <h3 className="font-semibold text-[24px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                  Progressive Web App
                </h3>
              </div>
            </div>

            {/* Column Features */}
            <div className="w-full px-[20px] py-[10px] flex flex-col">
              {rightFeatures.map((item, index) => (
                <div
                  key={index}
                  className={`w-full py-[20px] flex flex-row items-center gap-[20px] ${
                    index !== rightFeatures.length - 1 ? "border-b border-[#0C0C0C]/10" : ""
                  }`}
                >
                  <div className="w-[36px] h-[36px] bg-[#F15C20] border-[1.5px] border-[#FFFFFF] rounded-[50px] flex justify-center items-center shrink-0 shadow-sm">
                    <FaCheck className="text-[#FFFFFF] text-sm" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-semibold text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
