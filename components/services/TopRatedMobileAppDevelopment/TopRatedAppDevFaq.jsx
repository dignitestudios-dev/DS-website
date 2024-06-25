"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const TopRatedAppDevFaq = () => {
  const { palette, theme } = useContext(GlobalContext);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
  };
  return (
    <div
      className={`w-full lg:w-[100%] xl:w-[80%]  my-14 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  flex justify-center items-start mx-auto h-auto`}
    >
      <div className="w-full h-auto  flex flex-col gap-3 justify-start items-center">
        <h1
          className={`uppercase font-extrabold text-center lg:text-start text-3xl lg:text-[58px] lg:leading-[70px] 2xl:text-[74px] tracking-tight lg:tracking-tighter lg:font-bold lg:mb-8`}
        >
          Frequently asked questions
        </h1>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full mt-4 lg:w-[85%]"
        >
          <div
            type="button"
            onClick={() => handleAccordionClick(1)}
            className={`flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right ${
              theme == "dark" ? "text-[#e7e7e7]" : "text-[#7D7D7D]"
            } outline-none hover:opacity-95 `}
            style={{
              borderBottom: `2px solid ${palette?.light_contrast_background}`,
            }}
            data-accordion-target="#accordion-collapse-body-1"
          >
            <button
              name="faq-question"
              className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${
                openAccordion === 1
                  ? "text-[#F15C20]"
                  : `${theme == "dark" ? "text-[#e7e7e7]" : "text-black"}`
              } gap-3`}
            >
              <div
                className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-2 `}
              >
                <span className={`font-medium text-base md:text-lg lg:text-xl `}>
                  How much does it cost to create an app?
                </span>
              </div>
              {openAccordion === 1 ? (
                <FiMinus className="text-2xl" />
              ) : (
                <FiPlus className="text-2xl" />
              )}
            </button>

            <div
              id="accordion-1"
              className={`transition-all duration-200 ${
                openAccordion === 1 ? "" : "hidden"
              }`}
            >
              <div className="py-1 rounded-md mt-1 ">
                <p
                  className={`mb-2 ${
                    theme === "dark" ? "text-gray-400" : "text-[#5C5C5C]"
                  } text-xs lg:text-[16px] leading-normal`}
                >
                  The cost of mobile app development can easily be acquired by
                  filling out the form below.
                </p>
              </div>
            </div>
          </div>
          <div
            type="button"
            onClick={() => handleAccordionClick(2)}
            className={`flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right ${
              theme == "dark" ? "text-[#e7e7e7]" : "text-[#7D7D7D]"
            } outline-none hover:opacity-95 `}
            style={{
              borderBottom: `2px solid ${palette?.light_contrast_background}`,
            }}
            data-accordion-target="#accordion-collapse-body-1"
          >
            <button
              name="faq-question"
              className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${
                openAccordion === 2
                  ? "text-[#F15C20]"
                  : `${theme == "dark" ? "text-[#e7e7e7]" : "text-black"}`
              } gap-3`}
            >
              <div
                className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-2 `}
              >
                <span className="font-medium text-base md:text-lg lg:text-xl ">
                  What are the three 3 types of mobile applications?
                </span>
              </div>
              {openAccordion === 2 ? (
                <FiMinus className="text-2xl" />
              ) : (
                <FiPlus className="text-2xl" />
              )}
            </button>

            <div
              id="accordion-1"
              className={`transition-all duration-200 ${
                openAccordion === 2 ? "" : "hidden"
              }`}
            >
              <div className="py-1 rounded-md mt-1 ">
                <p
                  className={`mb-2 ${
                    theme === "dark" ? "text-gray-400" : "text-[#5C5C5C]"
                  } text-xs lg:text-[16px] leading-normal`}
                >
                  There are three types of app types Native, Hybrid, and
                  Progressive apps.
                </p>
              </div>
            </div>
          </div>
          <div
            type="button"
            onClick={() => handleAccordionClick(3)}
            className={`flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right ${
              theme == "dark" ? "text-[#e7e7e7]" : "text-[#7D7D7D]"
            } outline-none hover:opacity-95 `}
            style={{
              borderBottom: `2px solid ${palette?.light_contrast_background}`,
            }}
            data-accordion-target="#accordion-collapse-body-1"
          >
            <button
              name="faq-question"
              className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${
                openAccordion === 3
                  ? "text-[#F15C20]"
                  : `${theme == "dark" ? "text-[#e7e7e7]" : "text-black"}`
              } gap-3`}
            >
              <div
                className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-2 `}
              >
                <span className="font-medium text-base md:text-lg lg:text-xl ">
                  What is an API in mobile development?
                </span>
              </div>
              {openAccordion === 3 ? (
                <FiMinus className="text-2xl" />
              ) : (
                <FiPlus className="text-2xl" />
              )}
            </button>

            <div
              id="accordion-1"
              className={`transition-all duration-200 ${
                openAccordion === 3 ? "" : "hidden"
              }`}
            >
              <div className="py-1 rounded-md mt-1 ">
                <p
                  className={`mb-2 ${
                    theme === "dark" ? "text-gray-400" : "text-[#5C5C5C]"
                  } text-xs lg:text-[16px] leading-normal`}
                >
                  APIs are the foundational element of the mobile or web app. It
                  helps developers to access other applications. API management
                  is a core operation of IT departments that incorporates people
                  with the data and attracts more interaction.
                </p>
              </div>
            </div>
          </div>
          <div
            type="button"
            onClick={() => handleAccordionClick(4)}
            className={`flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right ${
              theme == "dark" ? "text-[#e7e7e7]" : "text-[#7D7D7D]"
            } outline-none hover:opacity-95 `}
            style={{
              borderBottom: `2px solid ${palette?.light_contrast_background}`,
            }}
            data-accordion-target="#accordion-collapse-body-1"
          >
            <button
              name="faq-question"
              className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${
                openAccordion === 4
                  ? "text-[#F15C20]"
                  : `${theme == "dark" ? "text-[#e7e7e7]" : "text-black"}`
              } gap-3`}
            >
              <div
                className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-2 `}
              >
                <span className="font-medium text-base md:text-lg lg:text-xl ">
                  What are the requirements for developing an app from scratch?
                </span>
              </div>
              {openAccordion === 4 ? (
                <FiMinus className="text-2xl" />
              ) : (
                <FiPlus className="text-2xl" />
              )}
            </button>

            <div
              id="accordion-1"
              className={`transition-all duration-200 ${
                openAccordion === 4 ? "" : "hidden"
              }`}
            >
              <div className="py-1 rounded-md mt-1 ">
                <p
                  className={`mb-2 ${
                    theme === "dark" ? "text-gray-400" : "text-[#5C5C5C]"
                  } text-xs lg:text-[16px] leading-normal`}
                >
                  First, you have to define the goal of your project, analyze
                  the problem statement, evaluate in-depth market research of
                  your competitors, choose an appropriate app template, app
                  code, customize app features, and analyze the cost-effective
                  launch platform. That’s how you will build constructive apps
                  for your consumers.
                </p>
              </div>
            </div>
          </div>
          <div
            type="button"
            onClick={() => handleAccordionClick(5)}
            className={`flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right ${
              theme == "dark" ? "text-[#e7e7e7]" : "text-[#7D7D7D]"
            } outline-none hover:opacity-95 `}
            style={{
              borderBottom: `2px solid ${palette?.light_contrast_background}`,
            }}
            data-accordion-target="#accordion-collapse-body-1"
          >
            <button
              name="faq-question"
              className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${
                openAccordion === 5
                  ? "text-[#F15C20]"
                  : `${theme == "dark" ? "text-[#e7e7e7]" : "text-black"}`
              } gap-3`}
            >
              <div
                className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-2 `}
              >
                <span className="font-medium text-base md:text-lg lg:text-xl ">
                  What is the best software for mobile app development?
                </span>
              </div>
              {openAccordion === 5 ? (
                <FiMinus className="text-2xl" />
              ) : (
                <FiPlus className="text-2xl" />
              )}
            </button>

            <div
              id="accordion-1"
              className={`transition-all duration-200 ${
                openAccordion === 5 ? "" : "hidden"
              }`}
            >
              <div className="py-1 rounded-md mt-1 ">
                <p
                  className={`mb-2 ${
                    theme === "dark" ? "text-gray-400" : "text-[#5C5C5C]"
                  } text-xs lg:text-[16px] leading-normal`}
                >
                  ReactNAtive, flutter, Swift, flutter, Xcode, Python, and many
                  more to provide a comprehensive app solution to business
                  holders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedAppDevFaq;
