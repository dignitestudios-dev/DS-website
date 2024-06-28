"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";

const TopNotchBenefits = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="py-10 global-padding-horizontal flex flex-col items-center">
      <h3 className="text-xl font-bold text-[#F15C20] uppercase">
        dignite studios
      </h3>
      <img src="/lines.png" alt="" />

      <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold uppercase my-6 tracking-tighter">
        top-Notch Benefits
      </h1>
      <p className="lg:w-[666px] text-center text-[15px] leading-[20.4px]">
        The first-class application testing services of Dignite Studios pursue
        the perfection of landscape to meet the reality of diverse devices, and
        user expectations to ensure refined customized solutions for your apps. 
      </p>

      <div className="w-full mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className="flex flex-col items-start text-start gap-5 lg:pt-6"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="0"
          data-aos-duration="400"
          data-aos-easing="ease-in"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="center-bottom"
        >
          <h1 className="font-semibold text-[28px] tracking-tight">
            Exclusive Error Detection
          </h1>
          <p className="text-base leading-[22.56px]">
            Errors are an imminent part of applications. They must be addressed
            in the app development process because they can malfunction, crash,
            freeze, or yield improper results. Thus, the outcome can reflect the
            user experience, app performance, and overall app stability. Here at
            Dignite Studios, our remarkable testing experts fabricate the
            risk-free processing mobile app to operate critical functions like
            login, data entry, and payment processing secured by all means.
            Therefore, it will lead to more user satisfaction and revenue
            generation from your mobile apps.
          </p>
          <div className="mt-4">
            <Link
              href={"/contact"}
              className="py-[16px] px-[18px] rounded-full text-white bg-[#F15C20] text-base font-semibold"
            >
              Let’s discuss your project
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className={`w-full lg:w-[420px] h-auto lg:h-[479px] rounded-3xl flex justify-center items-end ${
              theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#FAFAFA]"
            }`}
          >
            <img
              src="/mobile-app-testing-exclusive-error-detection.webp"
              alt="mock screen shows the mobile app testing of login layout"
              title="Mobile app testing exclusive error detection"
              className="w-[242px] lg:h-[427.52px]"
            />
          </div>
        </div>
      </div>

      <div className="w-full mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex justify-center">
          <div
            className={`w-full lg:w-[420px] h-auto lg:h-[479px] rounded-3xl flex justify-center items-end ${
              theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#FAFAFA]"
            }`}
          >
            <img
              src="/mobile-app-testing-quality-assurance.webp"
              alt="the mock screen shows the quality detection of mobile app testing tool"
              title="Mobile app testing quality assurance"
              className="w-[242px] lg:h-[427.52px]"
            />
          </div>
        </div>
        <div
          className="flex flex-col items-start text-start gap-5 lg:pt-6"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="0"
          data-aos-duration="400"
          data-aos-easing="ease-in"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="center-bottom"
        >
          <h1 className="font-semibold text-[28px] tracking-tight">
            Quality Assurance
          </h1>
          <p className="text-base leading-[22.56px]">
            In the testing phase, the level of quality assessment is analyzed in
            mobile application testing. It can prevent from bugs and serious
            development issues. Therefore, the skilled professionals of Dignite
            Studios, conduct multiple phases to create an evaluation process to
            meet the success of the mobile performance testing of the app. 
          </p>
          <div className="mt-4">
            <Link
              href={"/contact"}
              className="py-[16px] px-[18px] rounded-full text-white bg-[#F15C20] text-base font-semibold"
            >
              Let’s discuss your project
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className="flex flex-col items-start text-start gap-5 lg:pt-6"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="0"
          data-aos-duration="400"
          data-aos-easing="ease-in"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="center-bottom"
        >
          <h1 className="font-semibold text-[28px] tracking-tight">Security Prevalence</h1>
          <p className="text-base leading-[22.56px]">
            A recent study found the number of mobile application users in the
            USA than desktop applications. In 2015, 54% of users spent their
            leisure hours while using digital media applications on mobile
            devices. Such mobile apps are meant to store large amounts of user’s
            data and that must be protected by an authoritative body. Thus, Our
            prodigious mobile app testing services tend to focus on the security
            testing guidelines in the pre-production phase to avoid
            implementation errors or high-frequency risks. The mobile app
            security testing process ensures secure configuration, prevention of
            encryption methods, and shielded transmission of data.
          </p>
          <div className="mt-4">
            <Link
              href={"/contact"}
              className="py-[16px] px-[18px] rounded-full text-white bg-[#F15C20] text-base font-semibold"
            >
              Let’s discuss your project
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className={`w-full lg:w-[420px] h-auto lg:h-[479px] rounded-3xl flex justify-center items-end ${
              theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#FAFAFA]"
            }`}
          >
            <img
              src="/mobile-app-testing-security-prevalence.webp"
              alt="mock up screen shows olivia james profile"
              title="Mobile app testing security prevalence"
              className="w-[242px] lg:h-[427.52px]"
            />
          </div>
        </div>
      </div>

      <div className="w-full mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex justify-center">
          <div
            className={`w-full lg:w-[420px] h-auto lg:h-[479px] rounded-3xl flex justify-center items-end ${
              theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#FAFAFA]"
            }`}
          >
            <img
              src="/mobile-app-testing-fast-development.webp"
              alt="mockup screen shows the testing of people you know the layout of the application"
              title="Mobile app testing fast development"
              className="w-[242px] lg:h-[427.52px]"
            />
          </div>
        </div>
        <div
          className="flex flex-col items-start text-start gap-5 lg:pt-6"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="0"
          data-aos-duration="400"
          data-aos-easing="ease-in"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="center-bottom"
        >
          <h1 className="font-semibold text-[28px] tracking-tight">
            Fast Development Process
          </h1>
          <p className="text-base leading-[22.56px]">
            Fast-paced and high-quality mobile apps are the most advocated in
            today’s modern world of lucrative business. Whereas it has a huge
            influence on entrepreneurs, small and large enterprises, and the
            masses. To avoid intrusion and disruption, Dignite’s highly skillful
            mobile testing engineers develop a quick flow to eradicate all the
            forthcoming hurdles such as, creative adaptive testing, evaluating
            the right platform for testing, mobile app testing automated
            programs, and updating new feeds at a similar speed.
          </p>
          <div className="mt-4">
            <Link
              href={"/contact"}
              className="py-[16px] px-[18px] rounded-full text-white bg-[#F15C20] text-base font-semibold"
            >
              Let’s discuss your project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNotchBenefits;
