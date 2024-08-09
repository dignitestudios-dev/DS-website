"use client";
import { MOBILE_APP_MAINTENANCE_FAQS } from "@/constants/MobileAppMaintenanceFaqs";
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
      className={`w-full my-14 xl:my-16 global-padding-horizontal flex justify-center items-start mx-auto h-auto`}
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
          {MOBILE_APP_MAINTENANCE_FAQS.map((faq, index) => {
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is native app development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Native mobile app development means building platform-specific, custom and dedicated mobile operating systems for iOS or Android devices.",
                },
              },
              {
                "@type": "Question",
                name: "Are native apps better?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Native apps are more responsive and highly performing apps as compared to hybrid apps. Native mobile app development is also budget-friendly and can be accessed offline.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between a mobile app and a native app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Both the terms are used interchangeably to describe native mobile apps. These apps can be downloaded on your mobile devices to experience a unique iOS or Android framework seamlessly.",
                },
              },
              {
                "@type": "Question",
                name: "What is the advantage of a native app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "One of the primary advantages of native apps is their ability to deliver a superior user experience. They provide tailored solutions that meet the specific needs of clients, ensuring a seamless and optimized interaction.",
                },
              },
              {
                "@type": "Question",
                name: "Is the native app safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "They can operate offline, which minimizes the risk of errors and security threats associated with constant online connectivity. Native apps are built specifically for their respective platforms, allowing for tighter integration with the operating system's security features. This makes them secure and reliable, particularly when managed through official app stores like the Play Store or App Store.",
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
