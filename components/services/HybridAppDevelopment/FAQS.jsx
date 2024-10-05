"use client";
import { Hybrid_App_Development_FAQS } from "@/constants/HybridAppDevelopmentFaq";
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
          {Hybrid_App_Development_FAQS.map((faq, index) => {
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

      <Script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "What is a hybrid app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hybrid applications consist of a single codebase app that can be installed on multiple devices like Android and iOS. It consumes limited time with cost-effective procedures."
            }
          }, {
            "@type": "Question",
            "name": "How much does it cost to develop a hybrid app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To know the exact hybrid mobile app development cost, please fill out the below form to get your desired quote."
            }
          }, {
            "@type": "Question",
            "name": "What is the biggest advantage of hybrid apps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "One of the biggest advantages is that it can be operated on multiple mobile devices under a single codebase. It is cheaper and has a better UI/UX design structure to attract an audience on a large scale."
            }
          }, {
            "@type": "Question",
            "name": "How long does it take to create a hybrid app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the complexity of an app. If it contains a smaller version of an app then a hybrid developer can create it in less time frame."
            }
          }, {
            "@type": "Question",
            "name": "Can hybrid apps work offline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many hybrid apps offer offline functionality with certain features and mechanisms. It can be operated without an internet connection."
            }
          }]
        })
      }} />
    </section>
  );
};

export default FAQS;
