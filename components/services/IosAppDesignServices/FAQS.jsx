"use client";
import { IOS_APP_DESIGN_FAQS } from "@/constants/IosAppDesignFaqs";
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
      className={`w-full py-10 lg:py-20 global-padding-horizontal flex justify-center items-start mx-auto h-auto`}
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
          {IOS_APP_DESIGN_FAQS.map((faq, index) => {
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
                name: "What is iOS UI design?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It refers to the guidelines provided by Apple for designing compelling user interfaces for iOS apps. This includes cover layout, color, and navigation of the application.",
                },
              },
              {
                "@type": "Question",
                name: "How to design an iOS mobile app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "iOS provides users with a quality experience and compiles a list of guidelines to design an application. Here, designing an iPhone app is not complicated if followed as prescribed. The finest app design agency Dignite Studios, builds a captivating process to develop high-end apps.",
                },
              },
              {
                "@type": "Question",
                name: "Why do developers prefer iOS?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Decentralization in iOS software systems allows developers to impart a diverse user base that includes preferences, needs, and budgets. By supporting multiple devices developers can reach a larger market share and attract users efficiently.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to design an iOS app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To know the accurate cost of designing apps, please fill out the below form and get the required quotation.",
                },
              },
              {
                "@type": "Question",
                name: "What is the future scope of iOS app development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "As per the stats of 2024, there will be a dramatic rise in personalized user experiences of mobile app design. It will leverage AI technologies to analyze the rise of more intelligent and personalized user experiences. Apps will leverage AI technologies to evaluate data and deliver tailored recommendations.",
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
