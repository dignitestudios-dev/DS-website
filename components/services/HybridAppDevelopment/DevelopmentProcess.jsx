"use client";
import ContactButton from "@/components/global/ContactButton";
import { Hybrid_App_Development } from "@/constants/HybridAppDevelopment";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const DevelopmentProcess = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full py-16 lg:py-20 global-padding-horizontal">
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-6">
        <div className="col-span-3 lg:col-span-2">
         
          <h2 >
          <span className="text-[#8F8F8F] text-[20px] font-[700] " >Agile Hybrid</span><br />
            <span className="font-bold lg:font-extrabold text-4xl lg:text-5xl xl:text-[64px] 2xl:text-[80px] tracking-tighter xl:font-bold lg:leading-[77px]" > Development <br /> Process</span>
          </h2>
          <p className="text-lg font-normal mt-4">
          Dignite’s experienced hybrid app developers conduct pre-eminent
           development to create a new hybrid app. We give allegiance to 
           effective hybrid frameworks with state-of-the-art hybrid app 
           development technologies to nurture your business strategies
            with perfect hybrid solutions. 
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1 flex justify-start items-center lg:justify-end">
          <div className="lg:mt-6">
            <ContactButton text1={"Hire Now"} text2={"Let's talk"} />
          </div>
        </div>
      </section>

      <div className="w-full mt-6 lg:py-2 grid grid-cols-1 gap-2 lg:gap-0 md:grid-cols-2 xl:grid-cols-3 xl:mt-10">
        {Hybrid_App_Development.map((service, key) => {
          return (
            <div
              key={key}
              className={`group transition-all duration-300 border-[1px] ${theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
                } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
                } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20]  transition-all duration-150 ${key == 0
                  ? "lg:border-b "
                  : key == 1
                    ? "lg:border-b lg:border-r-0 xl:border-r lg:border-l "
                    : key == 2
                      ? "lg:border-b lg:border-r xl:border-r-0"
                      : key === 3
                        ? ""
                        : key == 4
                          ? "lg:border-r lg:border-l-0 xl:border-l"
                          : key == 5
                            ? ""
                            : ""
                }`}
            >
              <div className="w-full flex flex-col gap-2 md:gap-1 justify-start items-start">
                <p className="text-[40px] font-extrabold text-[#B4B4B499]">
                  {service.count}
                </p>
                <h3
                  className={`font-bold text-[28px] ${theme == "dark"
                      ? "text-white group-hover:text-white"
                      : "text-black group-hover:text-white"
                    }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-[19.14px] ${theme == "dark"
                      ? "text-gray-200 group-hover:text-gray-200"
                      : "text-[#8f8f8f] group-hover:text-gray-200"
                    }`}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DevelopmentProcess;
