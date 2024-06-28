"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const MobileAppTestingInRealTime = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full py-6 lg:py-12 global-padding-horizontal">
      <div
        className={`w-full rounded-3xl flex flex-col lg:flex-row items-end overflow-y-hidden ${
          theme === "light" ? "bg-[#FAFAFA]" : "bg-[#1c1c1c]"
        }`}
      >
        <div className="flex flex-col items-start gap-5 lg:w-[55%] p-6 lg:p-10">
          <h1 className="text-2xl lg:text-[48px] font-bold lg:leading-[54.94px]">
            <span className="text-[#F15C20]">Mobile App</span> Testing In <br />{" "}
            Real Time
          </h1>
          <p
            className={`text-base font-normal ${
              theme === "light" && "text-[#5C5C5C]"
            }`}
          >
            With years of tremendous success, the high-quality mobile
            application testing services of Dignite Studios build a super-fast
            and flawless application to protrude in the competitive market of
            the digital sphere. We believe in scaling businesses by ensuring
            seamless performance, exceptional usability, high-end optimization,
            risk-free compatibility, and innovative solutions to burgeon in the
            digital landscape
          </p>
          <div>
            <button className="py-4 px-[18px] bg-[#F15C20] text-white text-base font-semibold rounded-full">
              Let’s discuss your project
            </button>
          </div>
        </div>
        <img
          src="/mobile-app-testing-services.webp"
          alt="the mock screen shows the job portal on the application testing"
          title="Mobile app testing services"
          className="lg:w-[530px] lg:h-[442px]"
          data-aos="slide-up"
          data-aos-offset="200" // Adjusted offset to trigger animation earlier
          data-aos-delay="0" // No delay for immediate animation start
          data-aos-duration="700"
          data-aos-easing="ease-in"
          data-aos-mirror="false"
          data-aos-once="false" // Set to false to repeat animation on scroll up
          data-aos-anchor-placement="center-bottom"
        />
      </div>
    </div>
  );
};

export default MobileAppTestingInRealTime;
