"use client";
import { MOBILE_APP_CONSULTING_FAQS } from "@/constants/mobileappconsultingfaq";
import { GlobalContext } from "@/context/GlobalContext";
import Head from "next/head";
import Script from "next/script";
import React, { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const InfluentialFaqs = () => {
  const { palette, theme } = useContext(GlobalContext);
  const [openAccordion, setOpenAccordion] = useState(null);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
  };

  <Head>
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What consulting services do you provide?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Dignite Studios provides top mobile free consultancy from scratch to launch a mobile app. In short, we distribute full-cycle consultancy in app development.",
              },
            },
            {
              "@type": "Question",
              name: "What industries do you work with?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We lie our expertise in each sector whether health apps, e-commerce, traveling, insurance, and so on. Here, we value our customers from multiple platforms and encourage their ideas to form a visionary project. Our service does not only hold a mobile app consulting for a particular size of the market, but we also deliver end-to-end solutions to our clients globally and broadly.",
              },
            },
            {
              "@type": "Question",
              name: "How quickly can you provide a cost-effective solution?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Schedule a call to discuss business dimensions and product goals to get a friendly budget for your mobile app.",
              },
            },
          ],
        }),
      }}
    />
  </Head>;

  return (
    <div
      className={`w-full my-14 global-padding-horizontal flex justify-center items-start mx-auto h-auto`}
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
          className="w-full mt-4 lg:w-[60%] mx-auto"
        >
          {MOBILE_APP_CONSULTING_FAQS.mainEntity.map((faq, index) => {
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfluentialFaqs;

{
  /* <h3>{faq.name}</h3>
                  <p>{faq.acceptedAnswer.text}</p> */
}
