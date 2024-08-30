"use client";

import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import { GrShieldSecurity } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";

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
        We design PWA development procedures with the latest strategies to
        assist startups and established brands transform their business goals
        with new digital trends across diverse industries. Our progressive web
        app development services not only develop apps but also maintain
        forthcoming business modules.
      </p>

      <div className="mt-7 py-2 grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 lg:gap-2 2xl:gap-6">
        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/diversified-experience.png"}
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
            Diversified Experience
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            We hold productive web app development expertise with comprehensive
            data handling, in multiple client-focused industries like Education,
            Healthcare, eCommerce, and Fintech, etc. Our top PWA development
            services impart value-added assistance to meet customer
            satisfaction.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/multi-module-approach.png"}
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
            Multi-Module Approach
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Here we establish constructive methodologies to build progressive
            web apps efficiently. The professional development team of Dignite
            Studios furnishes various collaboration strategies to provide simple
            Staff Augmentation and managed delivery.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/customer-centered-policy.png"}
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
            Customer-Centered Policy
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Our progressive web app development company views each project with
            attention to detail and focuses on a full-fledged development
            process to build web apps. Here we use modernized PWA technology to
            accomplish shared goals and long-term partnership.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/strategic-focus.png"}
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
            Strategic focus
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Dignite Studios builds exclusive progressive web apps (PWAS) to
            value customer exigencies and demands. We deliver on-time PWA
            development projects to our clients to satisfy customers by all
            means.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/tech-mastery.png"}
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
            Tech Mastery
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Dignite’s dynamic team has professional experience in progressive
            web app technology and tools like Java, Angular React, and Vue to
            build apps swiftly and seamlessly.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/design-excellence.png"}
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
            UI/UX design excellence
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Our progressive web app development services ensure responsiveness
            and adaptability while creating PWAs. also, we establish a seamless
            mobile app experience to meet the product requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
