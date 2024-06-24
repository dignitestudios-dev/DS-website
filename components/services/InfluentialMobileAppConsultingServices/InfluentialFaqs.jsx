"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const InfluentialFaqs = () => {
  const { palette, theme } = useContext(GlobalContext);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
  };
  return (
    <div
      className={`w-full my-14 global-padding-horizontal flex justify-center items-start mx-auto h-auto`}
    >
      <div className="w-full h-auto  flex flex-col gap-3 justify-start items-start">
        <h1
          className={`uppercase font-extrabold text-center lg:text-start text-3xl lg:text-[46px] lg:leading-[70px] 2xl:text-[74px] tracking-tight lg:tracking-tighter lg:font-bold lg:mb-8`}
        >
          Frequently asked questions
        </h1>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full mt-4 lg:px-8"
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
                <span className={`font-medium text-base md:text-lg lg:text-xl`}>
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
                  To know the actual designer cost for the development of the
                  apps, schedule a call with our specialists or fill out the
                  form below.
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
                <span className="font-medium text-base md:text-lg lg:text-xl">
                  What does a mobile app designer do?
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
                  The application designer accumulates all the requirements from
                  business analysts and users to evaluate which IT software will
                  easily support the application. Further, he designs the app
                  specifications for the programmers to execute accordingly.
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
                <span className="font-medium text-base md:text-lg lg:text-xl">
                  Who designs mobile apps?
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
                  Apps are designed by expert UI/UX designers who build
                  user-friendly interfaces, on the other hand, the code is
                  translated by the front-end developers to build iOS and
                  Android apps systematically. Our service scope can help you to
                  seek the best mobile app designers.
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
                <span className="font-medium text-base md:text-lg lg:text-xl">
                  What is the difference between an app developer and an app
                  designer?
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
                  The app's developer generates front-end development,
                  full-stack development, and back-end development in the mobile
                  app development process. Whereas the app's designer focuses on
                  unique and visually appealing UX/UI interfaces and develops an
                  application code to give a lease on life.
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
                <span className="font-medium text-base md:text-lg lg:text-xl">
                  How to improve the app experience?
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
                  The development can be refined and enhanced by the
                  multichannel experience, unique features or functions,
                  skeleton mobile screens, proper navigation system, and
                  appropriate onboarding process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluentialFaqs;
