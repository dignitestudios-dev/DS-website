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
        To streamline the entire process of development hire iOS developers from
        Dignite Studios. Here, hiring an iOS developer can ensure smooth
        collaboration and on-time delivery of projects. Our team of mobile app
        developers works closely to lead to higher productivity and better app
        performance. You can benefit from our extravagant expertise by hiring
        iOS developers for your consumer apps.
      </p>

      <div className="mt-7 py-2 grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 lg:gap-2 2xl:gap-6">
        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/hire-ios-developer-expertise-and-experience-icon.png"}
            alt={"Hire iOS developer expertise and experience icon"}
            title={"Hire iOS developer expertise and experience"}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Expertise and Experience
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Our Professional developers have outstanding experience in shaping
            iOS development effectively including proficient programming
            languages, frameworks, and tools relevant to your project. Our
            skilled iOS developers anticipate strong challenges to optimize
            performance and ensure security throughout the process. Hire top iOS
            developers to establish a well-organized procedure for iOS
            development.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/hire-ios-developer-customization-and-quality-icon.png"}
            alt={"hire iOS developer Customization and Quality"}
            title={"Hire iOS developer Customization and Quality icon"}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Customization and Quality
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            iOS developers create custom apps that align with the design and
            coding standards which results in more profitable outcomes. Here,
            our developer experience strengthens the framework and iOS app
            development to provide top-notch services and assistance. Hire iOS
            developers to ensure quality assurance and custom-make your app
            features effectively.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/hire-ios-developer-efficiency-and-time-saving-icon.png"}
            alt={"Hire iOS developer Efficiency and time-saving icon"}
            title={"hire iOS developer Efficiency and time-saving"}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Efficiency and Time-Saving
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Developers can efficiently save time and impart cost-effective
            solutions to build iterative development. Our full-stack developer
            navigates common pitfalls and avoids mistakes in the iOS application
            development phase.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/hire-ios-developer-focus-on-core-competencies-icon.png"}
            alt={"Hire iOS developer Focus on core competencies icon"}
            title={"hire iOS developer Focus on core competencies"}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Focus on Core Competencies
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Hire iPhone app developers to focus on the core competencies that
            arise during the iOS and Android development process. Our
            development services handle every aspect of the technicalities
            expeditiously. App developers make your journey convenient and
            tranquil. Hire iOS developers to distinguish iOS developer roles to
            ease users and partners in analyzing potential developers to develop
            an iOS app.
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
              "/hire-ios-developer-advanced-features-and-integrations-icon.png"
            }
            alt={"Hire iOS developer Advanced features and integrations icon"}
            title={"Hire iOS developer Advanced features and integrations"}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Advanced Features and Integrations
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Our iPhone app developers implement advanced features such as
            real-time data processing, third-party integrations, and challenging
            user interfaces. So it’s time to hire the development team to
            rationalize the upcoming business growth events.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/hire-ios-developer-maintenance-and-support-icon.png"}
            alt={"Hire iOS developer Maintenance and Support icon"}
            title={"Hire iOS developer Maintenance and Support"}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Maintenance and Support
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Mobile developers can furnish offshore development with complete
            maintenance and support while addressing bugs, security issues, and
            modern features as needed. Our iOS developers make hassle-free
            development projects to scale your product or business proportions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
