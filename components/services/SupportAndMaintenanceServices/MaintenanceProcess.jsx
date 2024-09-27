"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import ContactButton from "@/components/global/ContactButton";

const MaintenanceProcess = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full py-12 global-padding-horizontal">
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-6">
        <div className="col-span-3 lg:col-span-2">
          <h2 className="headings-size">
            <p className="uppercase font-bold tracking-normal mb-2 text-xl text-[#8F8F8F]">
              Mobile Application
            </p>
            Maintenance <span className="text-[#F15C20]">Process</span>
          </h2>
          <p className="text-lg font-normal mt-4">
            The top management of Dignite Studios characterizes each support and
            maintenance step with beneficial processes to streamline the app's
            performance and potency with clarity. 
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1 flex justify-center items-center lg:justify-end">
          <div className="lg:mt-6">
            <ContactButton text1={"Dicuss Your Project"} text2={"Let's talk"} />
          </div>
        </div>
      </section>

      <div className="w-full mt-6 lg:py-2 grid grid-cols-1 gap-2 lg:gap-0 md:grid-cols-2 xl:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 xl:mt-10">
        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20] transition-all duration-150 lg:border-b lg:border-r`}
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
              Leading Valuation
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              It refers to the evaluation process for the mobile app idea that
              leverages flawless UX design, navigation, and development that
              enhance your app's user retention to make it more effective. By
              2025, the number of smartphone users will likely cross 311
              million, presenting an enormous opportunity for developers. We
              pursue a strong evaluation process to identify the significance of
              the app under a rigorous mobile app maintenance framework before
              the development phase.
            </p>
          </div>
        </div>

        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20]  transition-all duration-150 lg:border-b lg:border-r`}
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
              Service Planning
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              The glamour of ideation depends on the rigorous effort of{" "}
              <Link
                href={"/services/mobile-app-development-services"}
                className="text-[#F15C20] group-hover:text-white"
              >
                mobile app development
              </Link>{" "}
              planning to accomplish the successful app requirement. The experts
              of Dignite Studios develop tailor-made strategies and maintenance
              packages of eradicating bugs, and security rejuvenation to protect
              advanced features throughout the process.
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
              Monitoring and Compliance Management
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              Apps are also subject to  laws and guidelines under specific
              standards and protocols. Whereas, compliance testing is a broad
              category of{" "}
              <Link
                href={"/services/mobile-app-testing-services"}
                className="text-[#F15C20] group-hover:text-white"
              >
                mobile app testing
              </Link>{" "}
              that cynosures to meet legal exigencies of the apps during mobile
              application maintenance. We create constructive procedures in
              identifying potential issues and maintaining app compliance before
              they brunt users.
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
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">04</p>
            <h3
              className={`font-bold text-[28px] ${
                theme == "dark"
                  ? "text-white group-hover:text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Scheduled Maintenance
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              It spotlights the regular update maintenance to clinch smooth
              management by the team. Our mobile app support and maintenance
              services ensure seamless mobile app maintenance with the latest
              updates of operating systems, software features, libraries, and
              monitor security consummation.
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
            <p className="text-[40px] font-extrabold text-[#B4B4B499]">05</p>
            <h3
              className={`font-bold text-[28px] ${
                theme == "dark"
                  ? "text-white group-hover:text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Performance Tracking and Mobile Testing
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              Our top-notch services establish fast responsiveness and sleek
              user experience to identify performance and ensure strategic
              mobile testing.
            </p>
          </div>
        </div>

        <div
          className={`group transition-all duration-300 border-[1px] ${
            theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
          } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
            theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
          } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20]  transition-all duration-150`}
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
              User Feedback Integration
            </h3>
            <p
              className={`text-sm leading-[19.14px] ${
                theme == "dark"
                  ? "text-gray-200 group-hover:text-gray-200"
                  : "text-[#8f8f8f] group-hover:text-gray-200"
              }`}
            >
              Dignite’s application services originate sharp concentration on
              valuable feedback and reviews on support and maintenance of the
              mobile app. We integrate valuable insights for app enhancement to
              ensure reliable services from our experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceProcess;
