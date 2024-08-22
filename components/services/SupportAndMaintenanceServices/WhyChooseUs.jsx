"use client";

import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import WhyChooseUsCard from "../IosAppDevelopmentServices/WhyChooseUsCard";
import { MOBILE_APP_MAINTENANCE_CHOOSE_US } from "@/constants/MobileAppMaintenanceChooseUs";

const WhyChooseUs = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={`my-14 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  text-center`}
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
        In the modern times of technological enhancement software mobile app
        support and maintenance is as necessary as a penny, to keep the IT
        environment healthy and viable. So, are you wondering about hiring app
        support and maintenance partners? At Dignite Studios, we not only update
        mobile applications but also discover and implement new launch processes
        to scale apps in a split second.
      </p>

      <div className="mt-7 py-2 grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 lg:gap-2 2xl:gap-6">
        {/* {MOBILE_APP_MAINTENANCE_CHOOSE_US.map((c, index) => {
          return (
            <WhyChooseUsCard
              title={c.title}
              description={c.description}
              icon={c.icon}
              key={index}
              alt={c.alt}
              img_title={c.image_title}
            />
          );
        })} */}
        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/mobile-app-maintenance-expert-developers-icon.webp"}
            alt={"mobile app maintenance expert developers icon"}
            title={"mobile app maintenance expert developers"}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Expert Developers
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            The top-notch specialists of Dignite Studios dive deep into project
            dimensions and the latest trends to provide reliable solutions to
            their clients. Also, provide mobile app registration for the
            businesses.
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
              "/mobile-app-support-and-maintenance-track-record-of-bugs-fixing-icon.webp"
            }
            alt={
              "mobile app support and maintenance track record of bugs fixing icon"
            }
            title={
              "Track Record of bugs fixing of mobile app and support maintenance"
            }
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Track Record of Bug Fixing
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            We formulate effective measures to identify errors and bugs
            promptly. Our strategic approach secures data integration and
            entails optimizing mobile app operations smoothly.
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
              "/mobile-app-and-support-maintenance-exceptional-performance-icon.webp"
            }
            alt={
              "mobile app and support maintenance exceptional performance icon"
            }
            title={
              "Exceptional performance of mobile app and support maintenance"
            }
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Exceptional Performance
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            We prioritize user experience and optimization of performance
            closely. Dignite’s reliable services will develop your mobile app
            with the latest tools and technology to upgrade your software.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/mobile-app-maintenance-proactive-and-preventive-icon.webp"}
            alt={"mobile app maintenance proactive and preventive icon"}
            title={
              "Proactive and preventive of mobile app and support maintenance"
            }
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Proactive & Preventive
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            The secret recipe of our services anticipates your potential
            problems and ensures highly innovative{" "}
            <Link
              href={"/services/mobile-app-design-services"}
              className="text-[#F15C20]"
            >
              mobile app design
            </Link>{" "}
            with a cutthroat edge.
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
              "/mobile-app-and-support-maintenance-flexibility-and-scalability-icon.webp"
            }
            alt={
              "mobile app and support maintenanceFlexibility and scalability icon"
            }
            title={
              "Flexibility and scalability of mobile app and support maintenance"
            }
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Flexibility & Scalability
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Our services endow flexible and unique services to meet the needs of
            the valuable client or partner. We stand out in providing support
            and maintenance services accurately and adequately.
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
              "/mobile-app-and-support-maintenance-transparency-processes-icon.webp"
            }
            alt={
              "mobile app and support maintenance transparency processes icon"
            }
            title={
              "Transparency processes of mobile app and support maintenance"
            }
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Transparency Processes
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            You will experience a transparent process throughout the project
            maintenance at Dignite Studios. With regular monitoring, we provide
            progress reports to bring to your knowledge timely.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Link
          href="/contact-us"
          className="py-5 px-6 text-base xl:py-7 mt-8 mb-14 mx-auto text-center xl:px-8 float-start bg-[#F15C20] top-rated-btn-shadow rounded-full text-[#ffff] lg:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300"
        >
          Start Your Project <FiArrowUpRight className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default WhyChooseUs;
