"use client";
import { MOBILE_APP_TESTING_SERVICES_FAQ } from "@/constants/mobileapptestingservicesfaq";
import { GlobalContext } from "@/context/GlobalContext";
import Head from "next/head";
import Script from "next/script";
import React, { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const TopNotchFaqs = () => {
  const { palette, theme } = useContext(GlobalContext);
  const [openAccordion, setOpenAccordion] = useState(null);
  const faqs = MOBILE_APP_TESTING_SERVICES_FAQ[0].mainEntity;

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
  };

  return (
    <div className={`w-full lg:w-[100%] py-20 global-padding-horizontal`}>
      <div className="w-full h-auto  flex flex-col gap-3 justify-start items-center">
        <h1
          className={`uppercase font-extrabold text-center lg:text-start text-3xl md:text-4xl lg:text-5xl xl:text-[58px] lg:leading-[70px] 2xl:text-[74px] tracking-tight lg:tracking-tighter lg:font-bold lg:mb-5 xl:mb-8`}
        >
          Frequently asked questions
        </h1>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full mt-4 xl:w-[60%] mx-auto"
        >
          {faqs.map((faq, index) => (
            <div
              type="button"
              className={`flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right ${
                theme == "dark" ? "text-[#e7e7e7]" : "text-[#7D7D7D]"
              } outline-none hover:opacity-95 `}
              style={{
                borderBottom: `2px solid ${palette?.light_contrast_background}`,
              }}
              data-accordion-target="#accordion-collapse-body-1"
              onClick={() => handleToggle(index)}
            >
              <button
                name="faq-question"
                className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${
                  openIndex === index
                    ? "text-[#F15C20]"
                    : `${theme == "dark" ? "text-[#e7e7e7]" : "text-black"}`
                } gap-3`}
              >
                <div
                  className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-2 `}
                >
                  <span
                    className={`font-medium text-base md:text-lg lg:text-xl`}
                  >
                    {faq.name}
                  </span>
                </div>
                {openIndex === index ? (
                  <FiMinus className="text-2xl" />
                ) : (
                  <FiPlus className="text-2xl" />
                )}
              </button>
              <div
                id="accordion-1"
                className={`transition-all duration-200 ${
                  openIndex === index ? "" : "hidden"
                }`}
              >
                <div className="py-1 rounded-md mt-1 ">
                  <p
                    className={`mb-2 ${
                      theme === "dark" ? "text-gray-400" : "text-[#5C5C5C]"
                    } text-xs lg:text-[16px] leading-normal`}
                  >
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* <div
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
                  What is a mobile app testing service?
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
                  A It encompasses types of security testing while developing a
                  mobile application such as compatibility, automation,
                  regression, functionality, accessibility, and performance
                  testing.
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
                  How are mobile apps tested?
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
                  First ensure the test objectives, then test the application on
                  real devices, analyze the use cases/test cases, execute tests
                  for all the devices, networks, or operating systems, evaluate
                  the app performance, perform security testing, regression
                  testing, and at last validate user flows.
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
                  How much does mobile application testing cost?
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
                  To know the estimated testing cost schedule a call now and
                  discuss your project requirements.
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
                  What are different types of mobile app testing?
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
                  There are multiple types of testing such as usability testing,
                  localization testing, regression testing, automation testing,
                  speed testing, and much more.
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
                  What is QA mobile testing?
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
                  Quality assurance testing meticulously identifies network
                  conditions, user loads, and device types.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a mobile app testing service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It encompasses types of security testing while developing a mobile application such as compatibility, automation, regression, functionality, accessibility, and performance testing.",
                },
              },
              {
                "@type": "Question",
                name: "How are mobile apps tested?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "First ensure the test objectives, then test the application on real devices, analyze the use cases/test cases, execute tests for all the devices, networks, or operating systems, evaluate the app performance, perform security testing, regression testing, and at last validate user flows.",
                },
              },
              {
                "@type": "Question",
                name: "How much does mobile application testing cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To know the estimated testing cost schedule a call now and discuss your project requirements.",
                },
              },
              {
                "@type": "Question",
                name: "What are different types of mobile app testing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There are multiple types of testing such as usability testing, localization testing, regression testing, automation testing, speed testing, and much more.",
                },
              },
              {
                "@type": "Question",
                name: "What is QA mobile testing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Quality assurance testing meticulously identifies network conditions, user loads, and device types.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
};

export default TopNotchFaqs;

{
  /* <div key={index} className="faq-item">
<button
  className="faq-question"
  onClick={() => handleToggle(index)}
  aria-expanded={openIndex === index}
>
  {faq.name}
</button>
<div
  className={`faq-answer ${openIndex === index ? "open" : ""}`}
  aria-hidden={openIndex !== index}
>
  {faq.acceptedAnswer.text}
</div>
</div> */
}
