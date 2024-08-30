"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Script from "next/script";
import React, { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Faqs = ({ faqs }) => {
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
      className={`w-full my-14 global-padding-horizontal flex justify-center items-start mx-auto h-auto`}
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
          {faqs.map((faq, index) => {
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

      <Script type="application/ld+json" id="faq-json-ld">
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "What is an iOS app development service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is the app development process for multiple devices of Apple such as the iPhone, iWatch, and iPad."
            }
          },{
            "@type": "Question",
            "name": "How much does it cost to develop an app for iOS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fill out the form below to get the best quote from our business consultants for building a mobile app."
            }
          },{
            "@type": "Question",
            "name": "How to choose an iOS app development company?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You need to explore the company’s work portfolio, client reviews, testing processes, and development processes to hire the best company for your project."
            }
          },{
            "@type": "Question",
            "name": "How can I develop an iOS app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To start the process first you need to set up your Apple ecosystem, then process iOS application development with the right tools or technologies for the development purpose. Now start building your iOS app with the proper wireframes, establish a prototype, and launch your app on the Apple Store. Take feedback from iOS users and update accordingly."
            }
          },{
            "@type": "Question",
            "name": "What is the hourly rate for iOS app development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The hourly rate depends on the complexities of the project and the developer's experience levels. Schedule a free consultation to learn more about your project hourly rates."
            }
          }]
        }
      `}
      </Script>
    </section>
  );
};

export default Faqs;
