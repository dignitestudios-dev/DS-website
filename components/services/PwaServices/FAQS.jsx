"use client";
import { IOS_APP_DESIGN_FAQS } from "@/constants/IosAppDesignFaqs";
import { PROGRESSIVE_WEB_APP_FAQS } from "@/constants/ProgressiveWebAppFaqs";
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
      className={`w-full pb-10 lg:pb-20 xl:py-20 global-padding-horizontal flex justify-center items-start mx-auto h-auto`}
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
          {PROGRESSIVE_WEB_APP_FAQS.map((faq, index) => {
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Progressive Web App development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Progressive app is a website that can run on multiple platforms and devices under a single codebase. PWA builds with web-platform technologies that provide a platform for specific user interfaces.",
                },
              },
              {
                "@type": "Question",
                name: "How much does a Progressive Web App cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To know the cost of PWA development, please fill out the below form to acquire your desired quote.",
                },
              },
              {
                "@type": "Question",
                name: "What is an example of a Progressive Web App?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Flipboard is one of the examples of Progressive web app.",
                },
              },
              {
                "@type": "Question",
                name: "What is PWA company?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The progressive web app development company delivers native-like user experiences that blend the sleekness of a mobile app with the broad accessibility of the web. It provides all the possible measures while building your PWAs.",
                },
              },
              {
                "@type": "Question",
                name: "What is a Progressive Web App developer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A developer who establishes the entire process of the progressive web app with adequate procedures and disposition. He also possesses a unique architecture of progressive web app development.",
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
