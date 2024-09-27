"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";

const OptimizedProcess = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section
      className={`px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-6 justify-start items-start w-full my-6 md:my-12 lg:my-12`}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col">
          <h2
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-start headings-size flex flex-col gap-3`}
          >
            <span className="uppercase font-bold text-xl text-[#8F8F8F] tracking-normal">
              we impact highly
            </span>
            optimized process
          </h2>
        </div>
        <div className="hidden lg:block">
          <ContactButton text1={"Start Your Project"} text2={"Let's talk"} />
        </div>
      </div>
      <p
        className={`text-[18px] font-normal ${
          theme === "light" && "text-[#2A2A2A]"
        } leading-[24.48px] tracking-[-0.252px]`}
      >
        Diginite Studios creates top-notch mobile applications and cutting-edge
        mobile features for their users to clinch their potency and worthiness.
        Our mobile app services endeavor to build Android and IOS mobile
        applications that function as per the required needs of the user.
        Heading with successful mobile projects we fabricate app success in the
        procreation of unbeatable user interfaces, coding systems, database
        management, security, and maintenance.  
      </p>

      {/* large devices */}
      <div className="w-full hidden lg:block relative mt-6">
        <div className="w-full flex items-center justify-center">
          <div className="border border-l w-[33%] border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pt-0 flex flex-col items-start justify-start relative pb-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <p className="text-[#B4B4B499] text-[24px] font-bold z-20">01</p>
            <h3 className="text-[18px] font-bold uppercase z-20">
              project <br /> analysis and <br />
              research
            </h3>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l w-[33%] border-[#F15C20] border-t-0 border-r-0 border-b-0 p-3 flex flex-col items-start justify-start relative pb-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <p className="text-[#B4B4B499] text-[24px] font-bold z-20">03</p>
            <h3 className="text-[18px] font-bold uppercase z-20">
              iterative <br /> development
            </h3>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l w-[33%] border-[#F15C20] border-t-0 border-r-0 border-b-0 p-3 flex flex-col items-start justify-start relative pb-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <p className="text-[#B4B4B499] text-[24px] font-bold z-20">05</p>
            <h3 className="text-[18px] font-bold uppercase z-20">
              soft launch <br /> of mobile app
            </h3>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
        </div>
        <div className="w-full flex justify-center relative lg:-top-[48px]">
          <div className="w-[17%] relative overflow-hidden">
            <div
              className={`w-full border-2 border-dashed absolute top-5 ${
                theme === "dark" ? "border-gray-500" : "border-gray-300"
              }`}
            />
          </div>
          <div className="w-[33%] border border-l border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pb-2 flex flex-col items-start justify-end relative pt-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <div
              className={`w-full border-2 border-dashed absolute top-5 ${
                theme === "dark" ? "border-gray-500" : "border-gray-300"
              }`}
            />
            <p className="text-[#B4B4B499] text-[24px] font-bold z-20">02</p>
            <h3 className="text-[18px] font-bold uppercase z-20">
              structural <br /> implementation <br /> and design
            </h3>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 top-3 z-20"></span>
          </div>
          <div className="w-[35%] border border-l border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pb-2 flex flex-col items-start justify-end relative pt-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <div
              className={`w-full border-2 border-dashed absolute top-5 ${
                theme === "dark" ? "border-gray-500" : "border-gray-300"
              }`}
            />
            <p className="text-[#B4B4B499] text-[24px] font-bold z-20">04</p>
            <h3 className="text-[18px] font-bold uppercase z-20">
              application <br /> testing phase
            </h3>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 top-3 z-20"></span>
          </div>
          <div className="w-[15%] border border-l border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pb-2 flex flex-col items-start justify-end relative pt-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <div
              className={`w-full border-2 border-dashed absolute top-5 ${
                theme === "dark" ? "border-gray-500" : "border-gray-300"
              }`}
            />
            <p className="text-[#B4B4B499] text-[24px] font-bold z-20">06</p>
            <h3 className="text-[18px] font-bold uppercase z-20">deployment</h3>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 top-3 z-20"></span>
          </div>
        </div>
      </div>

      {/* mobile responsive */}
      <div className="w-full lg:hidden">
        <div className="w-full flex flex-col lg:flex-row items-start px-2 lg:items-center justify-center">
          <div className="border border-l w-full border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pt-0 flex flex-col items-start justify-start relative pb-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <p className="text-[#B4B4B499] text-[24px] font-bold z-20">01</p>
            <h3 className="text-[18px] font-bold uppercase z-20">
              project <br /> analysis and <br />
              research
            </h3>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l w-full border-[#F15C20] border-t-0 border-r-0 border-b-0 p-3 flex flex-col items-start justify-start relative pb-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <p className="text-[#B4B4B499] text-[24px] font-bold z-20">02</p>
            <h3 className="text-[18px] font-bold uppercase z-20">
              structural <br /> implementation <br /> and design
            </h3>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l w-full border-[#F15C20] border-t-0 border-r-0 border-b-0 p-3 flex flex-col items-start justify-start relative pb-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <p className="text-[#B4B4B499] text-[24px] font-bold z-20">03</p>
            <h3 className="text-[18px] font-bold uppercase z-20">
              iterative <br /> development
            </h3>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l w-full border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pt-0 flex flex-col items-start justify-start relative pb-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <p className="text-[#B4B4B499] text-[24px] font-bold z-20">04</p>
            <h3 className="text-[18px] font-bold uppercase z-20">
              application <br /> testing phase
            </h3>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l w-full border-[#F15C20] border-t-0 border-r-0 border-b-0 p-3 flex flex-col items-start justify-start relative pb-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <p className="text-[#B4B4B499] text-[24px] font-bold z-20">05</p>
            <h3 className="text-[18px] font-bold uppercase z-20">
              soft launch <br /> of mobile app
            </h3>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l w-full border-[#F15C20] border-t-0 border-r-0 border-b-0 p-3 flex flex-col items-start justify-start relative pb-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <p className="text-[#B4B4B499] text-[24px] font-bold z-20">06</p>
            <h3 className="text-[18px] font-bold uppercase z-20">deployment</h3>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
        </div>
      </div>

      <div className="lg:hidden mt-6 w-full flex justify-center">
        <Link
          href={"/contact-us"}
          className={`py-8 px-[26px] border border-[#F15C20] text-[#F15C20] hover:text-white ${
            theme === "light" ? "bg-white" : "bg-[#222222]"
          } hover:bg-[#F15C20] transition-all duration-300 rounded-full text-xl font-medium`}
        >
          Let's Start Your Project
        </Link>
      </div>
    </section>
  );
};

export default OptimizedProcess;
