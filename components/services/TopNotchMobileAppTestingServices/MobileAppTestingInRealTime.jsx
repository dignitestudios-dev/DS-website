"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const MobileAppTestingInRealTime = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full py-6 global-padding-horizontal">
      <div
        className={`w-full rounded-3xl flex flex-col xl:flex-row items-end overflow-y-hidden  relative ${
          theme === "light" ? "bg-[#FAFAFA]" : "bg-[#1c1c1c]"
        }`}
      >
        <div className="flex flex-col items-start gap-5 w-full xl:w-[55%] p-6 lg:p-14 2xl:p-24">
          <h2 className="text-2xl lg:text-[48px] font-bold lg:leading-[54.94px] tracking-tighter">
            <span className="text-[#F15C20]">Mobile App</span> Testing In <br />{" "}
            Real Time
          </h2>
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
          <div className="mt-4">
            {/* <Link
              href={"/contact-us"}
              className="py-4 px-[18px] bg-[#F15C20] text-white text-base font-semibold rounded-full"
            >
              Let’s discuss your project
            </Link> */}
            <ContactButton
              text1={"Discuss your project"}
              text2={"Let's talk"}
            />
          </div>
        </div>
        <Image
          width={530}
          height={410}
          loader={customLoader}
          src="/mobile-app-testing-services.webp"
          alt="the mock screen shows the job portal on the application testing"
          className="md:h-[310px] lg:h-[370px] lg:w-[530px] xl:h-[410px] mx-auto"
          data-aos="slide-up"
          data-aos-offset="100"
          data-aos-delay="0"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="center-bottom"
        />
      </div>
    </div>
  );
};

export default MobileAppTestingInRealTime;
