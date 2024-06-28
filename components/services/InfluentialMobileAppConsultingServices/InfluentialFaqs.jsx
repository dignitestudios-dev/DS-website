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
      <div className="w-full h-auto flex flex-col gap-3 justify-start items-center">
        <h1
          className={`uppercase font-extrabold text-center lg:text-start text-3xl lg:text-[58px] lg:leading-[70px] 2xl:text-[74px] tracking-tight lg:tracking-tighter lg:font-bold lg:mb-8`}
        >
          Frequently asked questions
        </h1>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full mt-4 lg:w-[60%] mx-auto"
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
                  What consulting services do you provide?
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
                  Dignite Studios provides top mobile free consultancy from
                  scratch to launch a mobile app. In short, we distribute
                  full-cycle consultancy in app development.
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
                  What industries do you work with?
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
                  We leverage our expertise in each sector, whether health apps,
                  e-commerce, travel, insurance, and so on. Here, we value our
                  customers across multiple platforms and encourage their ideas
                  to form visionary projects. Our service not only includes
                  mobile app consulting for various market sizes but also
                  delivers end-to-end solutions to our clients globally and
                  comprehensively.
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
                  How quickly can you provide a cost-effective solution?
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
                  Schedule a call to discuss business dimensions and product
                  goals to get a friendly budget for your mobile app.
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
