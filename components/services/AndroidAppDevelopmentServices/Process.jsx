"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ProcessCard from "./ProcessCard";
import { process } from "@/constants/mobileappdevelopmentprocess";
import ContactButton from "@/components/global/ContactButton";

const Process = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full lg:py-12 global-padding-horizontal lg:mt-0">
      <div className="w-full flex flex-col xl:flex-row items-start justify-between gap-0 md:gap-6">
        <div className="w-full xl:w-[70%]">
          <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
            mobile app development
          </p>
          <h2 className={`headings-size`}>process</h2>
          <p
            className={`text-[15px] my-4 font-normal ${
              theme === "light" && "text-[#2A2A2A]"
            }`}
          >
            Dignite Studios, a top-notch mobile app development company, crafts
            compelling custom Android app development services to encumber a
            vigorous approach in framing practical solutions for custom Android
            apps. Our specialized team of developers elevates rapid business
            growth with a high-end Android app development process.
          </p>
        </div>
        <div className="mb-8 lg:mb-0">
          {/* <Link
            href="/contact-us"
            className="py-5 px-6 text-base xl:py-7 xl:px-14 float-start bg-[#F15C20] top-rated-btn-shadow rounded-full text-[#ffff] lg:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300"
          >
            Schedule a call <FiArrowUpRight className="text-xl" />
          </Link> */}
          <ContactButton text1={"Schedule a call"} text2={"Let's talk"} />
        </div>
      </div>

      <div className="w-full lg:mt-6 xl:mt-0 lg:py-2 grid grid-cols-1 gap-2 lg:gap-0 md:grid-cols-2 xl:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 ">
        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20]  transition-all duration-150 lg:border-r lg:border-b`}
        >
          <div className="w-full flex flex-col gap-2 md:gap-4 justify-start items-start">
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">01</p>
            <h3
              className={`font-bold text-[28px] ${
                theme == "dark"
                  ? "text-white group-hover:text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              App Vision
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              Before stimulating the app development procedure, it is necessary
              to evaluate your Android app requirements and exigence. If you’re
              working on a huge project, you must ensure its dimensions,
              layouts, frameworks, and development process. Our top-notch custom
              Android app development company will make your idea with strong
              palpability. Where you can spontaneously start your mobile app
              development process with adequate guidelines and thorough
              assessment.
            </p>
          </div>
        </div>
        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20]  transition-all duration-150 lg:border-r lg:border-b`}
        >
          <div className="w-full flex flex-col gap-2 md:gap-4 justify-start items-start">
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">02</p>
            <h3
              className={`font-bold text-[28px] ${
                theme == "dark"
                  ? "text-white group-hover:text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Technical Documentation
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              Technical documentation lies under the flow of the development
              process to secure app success exclusively concerning each step. It
              generally indicates the most important phase of the mobile
              application development, where you have to craft an umbrella of
              particular documents afore on each step. The trusted Android
              application development company, Dignite Studios, provides a
              compelling composition of documents to easily explain
              functionality, app compliance, operations, tools, and
              project-related information to build your mobile app.
            </p>
          </div>
        </div>
        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20]  transition-all duration-150 lg:border-b`}
        >
          <div className="w-full flex flex-col gap-2 md:gap-4 justify-start items-start">
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">03</p>
            <h3
              className={`font-bold text-[28px] ${
                theme == "dark"
                  ? "text-white group-hover:text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Cost Estimation
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              Budgets for custom Android apps spell ample range in the
              development of apps. In chartering custom Android application
              development it is paramount to break down the Android app
              development cost to regale in harsh consequences. Dignite’s
              leading cost-effective approach will build the entire software
              development process constructively and strategically according to
              the budget indication. 
            </p>
          </div>
        </div>
        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20]  transition-all duration-150 lg:border-r lg:border-b`}
        >
          <div className="w-full flex flex-col gap-2 md:gap-4 justify-start items-start">
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">04</p>
            <h3
              className={`font-bold text-[28px] ${
                theme == "dark"
                  ? "text-white group-hover:text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Prototyping
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              At this stage, a basic{" "}
              <Link
                href={"/services/android-mobile-app-design-services"}
                className="text-orange-500"
              >
                {" "}
                Android app design
              </Link>{" "}
              is generated in which a sketch of the app idea is created and
              further mockups are designed for user interface, layouts, and
              navigations of mobile apps. The extraordinary services of Dignite
              generate a real mechanism of an Android device in the mockup to
              present an actual feel of the app with proper structure and
              visualization to evaluate the effectiveness of the application
              design.
            </p>
          </div>
        </div>
        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20]  transition-all duration-150 lg:border-r lg:border-b`}
        >
          <div className="w-full flex flex-col gap-2 md:gap-4 justify-start items-start">
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">05</p>
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
              While developing the Android app multiple tools are downloaded to
              perform the task efficiently. To create a powerful app strong
              practical measures have been accomplished to avoid errors.
              Heretofore, our Android app development services spawn and
              construct highly optimized end-to-end development environments to
              meet the requirements of the partners and consumers.
            </p>
          </div>
        </div>
        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20]  transition-all duration-150 lg:border-b`}
        >
          <div className="w-full flex flex-col gap-2 md:gap-4 justify-start items-start">
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">06</p>
            <h3
              className={`font-bold text-[28px] ${
                theme == "dark"
                  ? "text-white group-hover:text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Testing
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              After the development of an app, android software testing is
              initiated to run the app on the emulator. However, testing plays a
              significant role in the development process, it tests your app’s
              functions, compatibility, performance, and usability before the
              launching phase. Here, our custom Android app development company
              can verify your app's correctness, functional behavior, and
              usability before you release it publicly.
            </p>
          </div>
        </div>
        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20]  transition-all duration-150 lg:border-r`}
        >
          <div className="w-full flex flex-col gap-2 md:gap-4 justify-start items-start">
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">07</p>
            <h3
              className={`font-bold text-[28px] ${
                theme == "dark"
                  ? "text-white group-hover:text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              App Vision
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              Once your custom Android app development and testing is completed,
              your Android app is ready for market. Our top custom Android app
              development includes your app launch from weeks to months that
              follow. We closely monitor the mobile applications we build to
              make any final adjustments if needed in the apps.
            </p>
          </div>
        </div>
        {/* {process.map((s, key) => {
          return (
            <ProcessCard
              key={key}
              count={key}
              num={s.count}
              title={s.title}
              desc={s.desc}
            />
          );
        })} */}
      </div>
    </section>
  );
};

export default Process;
