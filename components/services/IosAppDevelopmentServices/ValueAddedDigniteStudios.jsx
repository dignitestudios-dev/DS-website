"use client";
import { VALUE_ADDED_OUTSOURCING } from "@/constants/valueadded";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";

const ValueAddedDigniteStudios = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <section
      id="top-notch-team-ofdignite-studios"
      className="w-full py-12 lg:py-20 px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48"
      style={{ background: palette?.background }}
    >
      <div className={`w-full`}>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-6 mt-3">
          <div>
            <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
              Value-Added Outsourcing With
            </p>
            <h2
              className={`text-3xl lg:text-5xl xl:text-[64px] 2xl:text-[74px] tracking-tighter font-bold uppercase lg:leading-[57px] xl:leading-[77.45px]`}
            >
              Dignite Studios
            </h2>
          </div>

          <div className="xl:px-12 flex items-center">
            <p className={`text-base md:text-[18px] md:leading-[26.46px]`}>
              Focus on your business priorities, and entrust your{" "}
              <Link
                href={"/services/mobile-app-development-services"}
                className="text-orange-600"
              >
                mobile app development
              </Link>{" "}
              to a reputable partner. Whether you need one iOS developer or a
              full software development team, you will benefit from our
              specialized expertise and top tech professionals.
            </p>
          </div>
        </div>
        <div
          className={`border ${
            theme === "dark" ? "border-gray-600" : "border-[#E7E7E7]"
          } w-full mb-4 mt-5`}
        />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col items-start gap-4">
          <img
            width={33}
            height={33}
            src={"/ios-app-specialized-experts-icon.webp"}
            alt={"iOS app specialized experts icon"}
            className=""
          />
          <h3 className="text-xl font-semibold">Access Specialized Experts</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            Our first-class iOS developers specialize in full-fledged iOS
            application development services to satisfy clients' needs and
            industry-specific requirements.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <img
            width={33}
            height={33}
            src={"/ios-app-speed-up-development-icon.webp"}
            alt={"ios-app-speed-up-development-icon"}
            className=""
          />
          <h3 className="text-xl font-semibold">Speed Up Development</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            At Dignite Studios our iOS development team taps into their
            protracted skills to make any app perform faster than ever with
            antiquated workflow.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <img
            width={33}
            height={33}
            src={"/ios-app-risk-free-and-secure-icon.webp"}
            alt={"ios-app-risk-free-and-secure-icon"}
            className=""
          />
          <h3 className="text-xl font-semibold">Risk-Free And Secure</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            Premium iPhone app development company Dignite Studios fosters
            world-class services of iOS development including best practices of
            security,{" "}
            <Link
              href={
                "/services/mobile-application-support-and-maintenance-services"
              }
              className="text-orange-600"
            >
              maintenance
            </Link>
            , and compliance to mitigate rising risk factors from each corner of
            the application.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <img
            width={33}
            height={33}
            src={"/ios-app-stay-in-charge-icon.webp"}
            alt={"ios-app-stay-in-charge-icon"}
            className=""
          />
          <h3 className="text-xl font-semibold">Stay In Charge</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            Our expert team will keep you updated throughout the development
            process and also after the completion of the project, to give you a
            general position in business decisions.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <img
            width={33}
            height={33}
            src={"/ios-app-flexible-scaling-icon.webp"}
            alt={"iOS app flexible scaling icon"}
            className=""
          />
          <h3 className="text-xl font-semibold">Flexible Scaling</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            At Dignite Studios, we build cost-effective solutions for our
            clients with structured development. We embark on a flexible journey
            throughout the development process as per your desire.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <img
            width={33}
            height={33}
            src={"/ios-app-latest-technology-icon.webp"}
            alt={"iOS app latest technology icon"}
            className=""
          />
          <h3 className="text-xl font-semibold">Latest Technologies</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            Our highly professional iOS app developers have vast experience in
            working with updated technologies and tools at their disposal.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <img
            width={33}
            height={33}
            src={"/ios-mobile-app-development-services-ui-ux-icon.png"}
            alt={"iOS app one stop shop icon"}
            className=""
          />
          <h3 className="text-xl font-semibold">One-Stop Shop</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            The valuable iOS development company Dignite Studios bestows the
            best user experience, conversion rates, and wide engagements through
            award-winning services like UX/UI design,{" "}
            <Link
              href={"/services/mobile-app-consulting-services"}
              className="text-orange-600"
            >
              consulting
            </Link>
            ,{" "}
            <Link
              href={"/services/mobile-app-testing-services"}
              className="text-orange-600"
            >
              testing
            </Link>
            , and front-end development services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueAddedDigniteStudios;
