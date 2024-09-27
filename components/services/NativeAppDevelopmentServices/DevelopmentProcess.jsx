"use client";
import ContactButton from "@/components/global/ContactButton";
import { MAINTENANCE_PROCESS } from "@/constants/maintenanceprocess";
import { NATIVE_APP_DEVELOPMENT_PROCESS } from "@/constants/NativeAppDevelopmentProcess";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const DevelopmentProcess = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full py-12 global-padding-horizontal">
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-6">
        <div className="col-span-3 lg:col-span-2">
          <h2 className="headings-size mb-4">
            <p className="uppercase font-bold text-xl text-[#8F8F8F] tracking-normal">
              Seamless Native App
            </p>
            Development <span className="text-[#F15C20]">Process</span>
          </h2>
          <p className="text-lg font-normal mt-4">
            We create accelerated methodologies to revolutionize native mobile
            app development processes for more competent and adequate solutions
            for apps. With sterling native mobile app frameworks we build a
            sleek and tranquil process to refine and make development quicker
            for Android apps and iOS devices.
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1 flex justify-center items-center lg:justify-end">
          <div className="lg:mt-6">
            <ContactButton text1={"Start Your Project"} text2={"Let's talk"} />
          </div>
        </div>
      </section>

      <div className="w-full mt-6 lg:py-2 grid grid-cols-1 gap-2 lg:gap-0 md:grid-cols-2 xl:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 xl:mt-10">
        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20] h-[320px] lg:border-b lg:border-r transition-all duration-150`}
        >
          <div className="w-full flex flex-col gap-2 md:gap-2 justify-start items-start">
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">01</p>
            <h3
              className={`font-bold text-[28px] ${
                theme == "dark"
                  ? "text-white group-hover:text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Product Analysis
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              To build highly intuitive native mobile applications we conduct
              in-depth market research for better in-app experiences and
              steadfast project flow.
            </p>
          </div>
        </div>

        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20] h-[320px] lg:border-b lg:border-r transition-all duration-150`}
        >
          <div className="w-full flex flex-col gap-2 md:gap-2 justify-start items-start">
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">02</p>
            <h3
              className={`font-bold text-[28px] ${
                theme == "dark"
                  ? "text-white group-hover:text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Wireframes & Mockups
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              The top-notch Android and iOS developers of Dignite Studios have
              accompanied many clients to create interactive{" "}
              <Link
                href={"/services/mobile-app-design-services"}
                className="text-[#F15C20] group-hover:text-white"
              >
                UI designs
              </Link>{" "}
              and wireframes to develop app-friendly and constructive apps.
            </p>
          </div>
        </div>

        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20] h-[320px] lg:border-b transition-all duration-150`}
        >
          <div className="w-full flex flex-col gap-2 md:gap-2 justify-start items-start">
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">03</p>
            <h3
              className={`font-bold text-[28px] ${
                theme == "dark"
                  ? "text-white group-hover:text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Prototype
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              After establishing wireframes we design a prototype of the app to
              confirm its layout and architecture from the client to ensure its
              reliability, performance, and functionality. Furthermore, we
              perform changes provided by the partner to make our native mobile
              app development error-free by all means.
            </p>
          </div>
        </div>

        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20] h-[320px] lg:border-r  transition-all duration-150`}
        >
          <div className="w-full flex flex-col gap-2 md:gap-2 justify-start items-start">
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">04</p>
            <h3
              className={`font-bold text-[28px] ${
                theme == "dark"
                  ? "text-white group-hover:text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Development
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              As per the client's approval, we start the development process of
              the native app. Here, we deliver strong outcomes under the
              timeframe committed by our team.
            </p>
          </div>
        </div>

        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20] h-[320px] lg:border-r transition-all duration-150`}
        >
          <div className="w-full flex flex-col gap-2 md:gap-2 justify-start items-start">
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">05</p>
            <h3
              className={`font-bold text-[28px] ${
                theme == "dark"
                  ? "text-white group-hover:text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Deployment
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              Final deployment on the App Store takes place after the rigorous{" "}
              <Link
                href={"/services/mobile-app-testing-services"}
                className="text-[#F15C20] group-hover:text-white"
              >
                app testing
              </Link>{" "}
              and development of the entire native app. Our assurance services
              perform powerful front-end and back-end development to launch the
              app after strong evaluation and interpretation. We conduct native
              deployment of the apps with the fastest-growing profitable
              methodologies to gain more revenue generation
            </p>
          </div>
        </div>

        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20] h-[320px] transition-all duration-150`}
        >
          <div className="w-full flex flex-col gap-2 md:gap-2 justify-start items-start">
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">06</p>
            <h3
              className={`font-bold text-[28px] ${
                theme == "dark"
                  ? "text-white group-hover:text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Support And Maintenance
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              After our native app development services, we establish
              maintenance packages to update the app features and designs on
              monthly or yearly terms and conditions. Experience modernized and
              top-notch solutions for your apps to make it flawless and unique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
