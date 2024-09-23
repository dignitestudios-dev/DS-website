"use client";
import { HIRE_IOS_DEVELOPER_FAQS } from "@/constants/HireIosDeveloperFaqs";
import { HIRE_MOBILE_APP_DEV_FAQS } from "@/constants/HireMobileAppDevFaqs";
import { GlobalContext } from "@/context/GlobalContext";
import Script from "next/script";
import React, { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const FAQS = () => {
  const { palette, theme } = useContext(GlobalContext);
  const [openAccordion, setOpenAccordion] = useState(null);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
  };

  return (
    <section
      className={`w-full pb-10 lg:pb-20 global-padding-horizontal flex justify-center items-start mx-auto h-auto`}
    >
      <div className="w-full h-auto flex flex-col gap-3 justify-start items-center">
        <h2
          className={`uppercase font-extrabold text-center lg:text-start text-3xl lg:text-5xl xl:text-[58px] lg:leading-[70px] 2xl:text-[74px] tracking-tight lg:tracking-tighter lg:font-bold lg:mb-8`}
        >
          Frequently asked questions
        </h2>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full xl:w-[60%] mx-auto"
        >
          {HIRE_IOS_DEVELOPER_FAQS.map((faq, index) => {
            return (
              <div
                type="button"
                key={index}
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
                  type="button"
                  className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${
                    openIndex === index
                      ? "text-[#F15C20]"
                      : `${theme == "dark" ? "text-[#e7e7e7]" : "text-black"}`
                  } gap-3`}
                  onClick={() => handleToggle(index)}
                >
                  <div
                    className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-2 `}
                  >
                    <p
                      className={`font-medium text-base md:text-lg lg:text-xl`}
                    >
                      {faq.question}
                    </p>
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
                      {faq?.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Script
        type="application/ld+json"
        id="faq-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does it cost to hire an iOS app developer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The developer cost depends on the project dimensions and proposition. Please fill out the form below to Hire iOS developers to create a user-centric app with modern techniques and approaches.",
                },
              },
              {
                "@type": "Question",
                name: "How to hire an iOS developer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can hire experienced iOS talents by analyzing their skills and proficiency, experience level, and knowledge of using modern technologies.",
                },
              },
              {
                "@type": "Question",
                name: "How much do freelance iOS developers charge?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To know the exact quote fill out the below form or schedule a call now and hire iOS developers.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to develop an app for iOS?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost for hiring a development company for crafting an iOS app can differ as per the specifications of your project. To know the exact quote fill out the form below to schedule a call with us.",
                },
              },
              {
                "@type": "Question",
                name: "What does an iOS app developer do?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "iOS app developers build and craft unique Applications for your project. These developers develop the entire process and maintain the mobile application development tasks according to the development time frame.",
                },
              },
            ],
          }),
        }}
      />
    </section>
  );
};

export default FAQS;