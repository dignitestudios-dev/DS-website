"use client";
import { WEB_APP_DEV_SERVICE_FAQS } from "@/constants/WebAppDevFaqs";
import { GlobalContext } from "@/context/GlobalContext";
import Script from "next/script";
import React, { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Faqs = () => {
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
        <h1
          className={`uppercase text-center lg:text-start text-3xl lg:text-5xl xl:text-[58px] lg:leading-[70px] 2xl:text-[74px] tracking-tight lg:tracking-tighter font-bold lg:mb-8`}
        >
          Frequently asked questions
        </h1>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full xl:w-[70%] mx-auto"
        >
          {WEB_APP_DEV_SERVICE_FAQS.map((faq, index) => {
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
        id="faq-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are web application development services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is the process of building, creating, testing, and deploying web-based applications that will be downloaded to servers and forwarded to consumers via the Internet.",
                },
              },
              {
                "@type": "Question",
                name: "How much does web application development cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Web application development costs vary according to your project's complexities. However, we also provide tailor-made packages as per your acquired budget. Get more information by filling up the application form.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to deploy a web app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It has multiple ranges, complete the below form to get on with first-hand information.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between a web application and a web service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It can be defined as web services that expedite the entire communication process, development stage, and data exchange between apps. Web applications are designed to furnish innovative web solutions for your app.",
                },
              },
              {
                "@type": "Question",
                name: "Is a web application the same as a website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The web application is designed for interaction with users. Whereas, a website holds static content which cannot be manipulated. Multiple key factors distinguish between the website and web application such as; CRM, level of software program integration, deployment practices, and front and back development process.",
                },
              },
            ],
          }),
        }}
      />
    </section>
  );
};

export default Faqs;
