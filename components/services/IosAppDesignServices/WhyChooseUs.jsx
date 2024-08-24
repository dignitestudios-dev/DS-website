"use client";

import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";

const WhyChooseUs = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={`py-10 lg:py-20 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  text-center`}
    >
      <h2
        style={{
          color: theme == "dark" ? "#fff" : "#0c0c0c",
        }}
        className={`uppercase text-4xl lg:text-5xl xl:text-[58px] 2xl:text-[74px] tracking-tighter font-bold mb-2 lg:mb-8`}
      >
        why choose us
      </h2>

      <p className="text-base lg:leading-[21.76px] lg:w-[50%] mx-auto lg:text-center mb-6">
        Engaging with a top-notch iOS mobile app design company can make your
        brand legendary and prominent among viable industries and enterprises.
        Our well-qualified and experienced designers urge you to present a
        top-design master plan to replenish your application with modified
        features, functions, and compositions. We can furnish you with
        next-level Apple services to propel your digital expertise around the
        globe.
      </p>

      <div className="mt-7 py-2 grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 lg:gap-2 2xl:gap-6">
        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={
              "/ios-app-development-service-multi-industry-discipline-icon.webp"
            }
            alt={"iOS app development service Multi-Industry Discipline icon"}
            title={"Multi-Industry Discipline Icon"}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Multi-Industry Discipline
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            We build an ingenious iOS app design portfolio to boost businesses
            across international industries. We craft tailored solutions for
            your app idea and develop productive iPhone app designs holding a
            powerful process with in-depth research, seamless user experience,
            and constructive post-analysis to maintain the credibility of an
            app. Dignite’s mobile app strategists perform every step to scale
            your app's functions, operations, and performance.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={
              "/ios-app-development-service-embrace-app-builder-technology-icon.webp"
            }
            alt={
              "iOS app development service embrace app builder technology icon"
            }
            title={"Embrace App Builder Technology Icon"}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Embrace App Builder Technology
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            The leading iPhone app design company Dignite Studios, determines
            the finest app-builder technology to construct coercive
            infrastructure of your apps to make an effective communication path
            for the users.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={
              "/ios-app-development-a-decade-of-scaling-design-heights-icon.webp"
            }
            alt={"ios-app-development-a-decade-of-scaling-design-heights-icon"}
            title={"A decade of scaling design heights icon"}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            A Decade of Scaling Design Heights
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Designing an iPhone app for years has created an interactive
            approach to bring industries with innovative app idea with
            cutting-edge tools and technologies. We strive to make your goal in
            a pre-eminent manner to make your brand categorized among
            prestigious Apple award winners. The premium iPhone app UI\UX
            designing company Diginte Studios embraces an app with advanced
            features and compelling Apple structures.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/ios-app-development-primed-for-perfection-icon.webp"}
            alt={"iOs app development primed for perfection icon"}
            title={"Primed for Perfection Icon"}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Primed for Perfection
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Dignite’s iOS app design services bestow the leading design
            structure that undergoes in-house standards, meticulous
            specifications, and tested monitoring system to forge a well-versed
            validated approach that prevails myriad excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
