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
        The teams of dedicated mobile app developers execute persuasive and
        compelling strategies to develop an application. Our dedicated mobile
        developers create powerful frameworks to structure an app. Hiring app
        developers of Dignite Studios will skyrocket your business within less
        time. A smart developer can smoothly create your business strategies to
        impart best practices.
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
            Handpicked Talent
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Hire dedicated app developers, UI/UX designers, QA specialists, and
            product managers who leverage modern technologies and build next-gen
            mobile applications to generate more leads with higher revenue.
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
            Powerful Collaboration
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Experience efficacious collaboration following the latest trends of
            digitalization. We impart potent project timeframes to create mobile
            projects with a top-notch team of mobile app developers. Dedicated
            app developers will analyze the project complexities with smart
            approaches to eradicate the growing risks and threats in the
            development process.
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
            Vigorous Strategies
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Hire dedicated mobile developers to establish captivating digital
            business modules into reality and provide users with effective
            solutions tailored to their needs and requirements. Conducting
            mobile development processes with adequate methodologies can boost
            business outcomes promptly.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/ios-apps-establish-upgraded-strategies-and-tools-icon.webp"}
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
            Cost Effective Models
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Our Mobile App developers will strongly frame profitable cost models
            to build client trust and satisfaction behind the development of
            mobile apps. The leading app development company Dignite Studios
            will rank your brand among the top positions internationally.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          {/* <img
            src={"/ios-app-development-primed-for-perfection-icon.webp"}
            alt={"iOs app development primed for perfection icon"}
            title={"Primed for Perfection Icon"}
            className=""
            width="36px"
            height="36px"
          /> */}
          <MdOutlineSecurity className="w-[40px] h-[40px] text-[#F15C20]" />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Dedicated Resources
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Recruit exceptional mobile app developers of Dignite Studios to
            bring premium quality mobile apps to your digital engagement models
            under budget-friendly resources and procedures. The team of
            developers ensures client gratification throughout the process and
            explores mobile app developers for hire.
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
            Vast Experience
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Hire dedicated mobile app developers with extensive experience
            building high-standard apps with modernized mobile app development
            technologies and trends. A developer with vast experience builds
            smart strategies to strengthen the process and choose top app
            programmers for hire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
