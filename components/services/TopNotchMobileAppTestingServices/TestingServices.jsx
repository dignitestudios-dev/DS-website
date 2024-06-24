import Link from "next/link";
import React from "react";

const TestingServices = () => {
  return (
    <div className="text-center py-10 global-padding-horizontal">
      <h1 className="text-3xl md:text-5xl lg:text-[64px] 2xl:text-[80px] font-bold lg:leading-[70.72px]">
        <span className="text-[#F15C20]">Mobile App</span> Testing Services
      </h1>
      <p className="text-base font-medium mt-6">
        The first-class mobile testing team of Dignite Studios fabricates
        automated testing of <br /> apps to hasten effective solutions
        instantly.
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 border-b py-6 mt-20">
        <div className="order-2 lg:order-1">
          <img
            src="/software-functional-testing-services.png"
            alt="testing-services-mockup"
            title="testing-services-mockup"
          />
        </div>
        <div className="flex flex-col items-start text-start justify-center gap-5 order-1 lg:order-2">
          <h2 className="text-3xl lg:text-[64px] font-bold text-[#DEDEDE]">
            01
          </h2>
          <h1 className="text-[28px] font-semibold">
            Software Functional Testing Services
          </h1>
          <p className="text-xs font-normal text-start mb-3">
            At multiple granularity levels, functional testing ensures the
            software’s conformity to meet the corresponding output with the
            end-user’s expectations. The process enables the quick detection of
            prevailing defects, system failures, and function crashes of the
            apps. Whereas the top expertise of Dignite’s team can develop an
            effective improvement plan for validating output/input results to
            meet end-to-end testing solutions varying in the tech industry while
            mobile testing.
          </p>
          <div>
            <Link
              href={"/contact"}
              className="py-4 px-[18px] bg-[#F15C20] text-white text-base font-semibold rounded-full"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 border-b py-6">
        <div className="flex flex-col items-start justify-center gap-5 text-start">
          <h2 className="text-3xl lg:text-[64px] font-bold text-[#DEDEDE]">
            02
          </h2>
          <h1 className="text-[28px] font-semibold">
            Software Automated Testing Services
          </h1>
          <p className="text-xs font-normal text-start mb-3">
            The testing service refers to the automated testing methodology and
            usage of tools to execute comprehensive tests of software and
            generate swift reports over the testing measures. Here at Dignite
            Studios, we conduct an effective approach to build strong mobile app
            evaluation which provides cost-effective solutions, high-pace
            execution, and several iterations to build a successful mobile app
            testing.
          </p>
          <div>
            <Link
              href={"/contact"}
              className="py-4 px-[18px] bg-[#F15C20] text-white text-base font-semibold rounded-full"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src="/software-automated-testing-services.png"
            alt="software-automated-testing-services"
            title="software-automated-testing-services"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 py-6">
        <div className="order-2 lg:order-1">
          <img
            src="/software-data-testing-services.png"
            alt="software-data-testing-services"
            title="software-data-testing-services"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-5 order-1 lg:order-2 text-start">
          <h2 className="text-3xl lg:text-[64px] font-bold text-[#DEDEDE]">
            03
          </h2>
          <h1 className="text-[28px] font-semibold">
            Software Data Testing Services
          </h1>
          <p className="text-xs font-normal text-start mb-3">
            It is a process that connects Functional Testing, User Interface,
            and data analytics of the apps to ensure data transforms and
            implementation of business rules. It focuses on the Broader Quality
            Assurance field to validate data processes. Our exclusive mobile
            testing team crafts cutting-edge mobile app testing solutions to
            satisfy clients by all means.
          </p>
          <div>
            <Link
              href={"/contact"}
              className="py-4 px-[18px] bg-[#F15C20] text-white text-base font-semibold rounded-full"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingServices;
