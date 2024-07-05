"use client";
import { ANDROID_APP_DEV_SERVICES_FAQS } from "@/constants/androidappdevelopmentserviesfaqs";
import { MOBILE_APP_CONSULTING_FAQS } from "@/constants/mobileappconsultingfaq";
import { GlobalContext } from "@/context/GlobalContext";
import Head from "next/head";
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
      className={`w-full mt-14 global-padding-horizontal flex justify-center items-start mx-auto h-auto`}
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
          className="w-full lg:w-[60%] mx-auto"
        >
          {ANDROID_APP_DEV_SERVICES_FAQS.map((faq, index) => {
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
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "How much does it cost to build an Android app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To know the cost of your custom Android application development. You have to fill out the form below."
            }
          },{
            "@type": "Question",
            "name": "Is Android app development profitable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, due to its open source, our custom Android application development has become so much more profitable."
            }
          },{
            "@type": "Question",
            "name": "Which technology is best for Android app development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Java, Kotlin, and Flutter make the custom Android application development process smooth and effective."
            }
          },{
            "@type": "Question",
            "name": "Which software is required for Android app development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Android Studio is required to generate an effective app."
            }
          },{
            "@type": "Question",
            "name": "How much does it cost to hire a custom Android application development agency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To know Dignite’s services cost click on the link below and schedule a call right away."
            }
          }]
        }
        `,
        }}
      />
    </section>
  );
};

export default FAQS;
