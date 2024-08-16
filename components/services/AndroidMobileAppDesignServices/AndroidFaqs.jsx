"use client";
import { ANDROID_MOBILE_APP_DESIGN_FAQS } from "@/constants/AndroidMobileAppDesignFaqs";
import { GlobalContext } from "@/context/GlobalContext";
import Script from "next/script";
import React, { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const AndroidFaqs = ({ faqs }) => {
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
      className={`w-full py-16 lg:py-20 global-padding-horizontal flex justify-center items-start mx-auto`}
    >
      <div className="w-full h-auto flex flex-col gap-3 justify-start items-center">
        <h2
          className={`uppercase text-center lg:text-start text-3xl lg:text-5xl xl:text-[58px] lg:leading-[70px] 2xl:text-[74px] tracking-tight lg:tracking-tighter font-bold lg:mb-8`}
        >
          Frequently asked questions
        </h2>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full xl:w-[70%] mx-auto"
        >
          {ANDROID_MOBILE_APP_DESIGN_FAQS.map((faq, index) => {
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
                      className={`font-semibold text-base md:text-lg lg:text-xl`}
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
                name: "Who designs Android mobile apps?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A mobile app designer is assigned to craft the entire layout and architecture of the app including user interfaces, visually appealing elements, and high-end features.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between an Android app developer and an Android app designer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Android app designers brainstorm the idea of the client and generate effective application methodologies related to services to craft navigation paths, design mockups, test, review and further collaborate coding with app developers for the development process. Also, we transfigure the application structure into a functional app appropriately.",
                },
              },
              {
                "@type": "Question",
                name: "What does an Android mobile app designer do?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Android designers create sleek designs for your Android apps to make them unique and attractive.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between Android app design vs iOS app design?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The design layout related to Android mobile apps is known as Android app design, and vice versa.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to design an Android app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on the complexity of the app, however, to know the absolute amount, fill out the form below.",
                },
              },
            ],
          }),
        }}
      />
    </section>
  );
};

export default AndroidFaqs;
