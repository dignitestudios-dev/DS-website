"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const WhyDignite = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="py-10 global-padding-horizontal">
      <div className={`w-full`}>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-6 mt-3">
          <div>
            <h2 className={`headings-size group`}>
              <span className="text-[#8F8F8F] group-hover:text-[#F15C20]">
                Why
              </span>
              <br />
              Dignite Studios
            </h2>
          </div>
          <div className="xl:px-12 flex flex-col items-start justify-center gap-3">
            <p className={`text-[13px md:leading-[17.68px]`}>
              The top-class mobile app testing services of Dignite Studios
              streamline highly effective testing methodology to prevent
              disasters and provide the most reliable solutions to their
              partners and customers.
            </p>
            <div className="mt-4">
              <Link
                href={"/contact-us"}
                className="py-[16px] px-[18px] rounded-full text-white bg-[#F15C20] text-base font-semibold"
              >
                Start your project
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
          <div
            className={`h-[286px] flex flex-col items-start gap-3 text-start group ${
              theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#FAFAFA]"
            } rounded-xl p-6`}
          >
            <Image
              width={40}
              height={40}
              loader={customLoader}
              src="/performance-testing.png"
              alt="performance-testing"
              title="performance-testing"
              className="w-10 h-10 scale-75 group-hover:scale-110 transition-all duration-1000"
            />
            <h3 className="text-xl font-semibold">
              Innovative Mobile Performance Testing
            </h3>
            <p className="text-xs font-normal leading-[16.32px]">
              The interpretive minds of Dignite’s mobile application testing
              specialists bestow cutting-edge solutions to produce effective
              in-house testing of mobile apps. We always tend to offer reliable
              and compatible testing processes to uplift our client’s
              businesses.
            </p>
          </div>
          <div
            className={`h-[286px] flex flex-col items-start gap-3 text-start group ${
              theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#FAFAFA]"
            } rounded-xl p-6`}
          >
            <Image
              width={40}
              height={40}
              loader={customLoader}
              src="/quality-assessement.png"
              alt="quality-assessement"
              title="quality-assessement-image"
              className="w-10 h-10 scale-75 group-hover:scale-110 transition-all duration-1000"
            />
            <h3 className="text-xl font-semibold">Quality Assessment</h3>
            <p className="text-xs font-normal leading-[16.32px]">
              The rigorous mobile app functional testing ensures a modern
              strategic approach in the{" "}
              <Link
                href={"/services/mobile-app-development-services"}
                className="text-[#F15C20]"
              >
                mobile app development
              </Link>{" "}
              process with thorough mobile security testing and mobile
              accessibility testing in a particular testing time frame. Our
              remarkable testing team provides the best solution for mobile
              testing portfolio and mobile testing specifics to ensure the
              quality of the application. 
            </p>
          </div>
          <div
            className={`h-[286px] flex flex-col items-start gap-3 text-start group ${
              theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#FAFAFA]"
            } rounded-xl p-6`}
          >
            <Image
              width={40}
              height={40}
              loader={customLoader}
              src="/track-record.png"
              alt="track-record"
              title="track-record-image"
              className="w-10 h-10 scale-75 group-hover:scale-110 group-hover:rotate-90 transition-all duration-1000"
            />
            <h3 className="text-xl font-semibold">Proven Track Record</h3>
            <p className="text-xs font-normal leading-[16.32px]">
              With our commitment to excellence, we take pride in delivering the
              best solutions to our clients and partners. Dignite’s reliability
              and loyalty can’t be ever judged. We always strive to produce the
              required mobile app testing procedure for valuable customers under
              the mentioned testing time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDignite;
