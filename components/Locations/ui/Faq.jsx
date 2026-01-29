"use client";

import React, { useContext, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { GlobalContext } from "@/context/GlobalContext";
import Script from "next/script";

const Faq = ({faqs}) => {
  const { palette, theme } = useContext(GlobalContext);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
  };

  
  return (
    <div
      id="faqs"
      className="w-full lg:w-[100%] xl:w-[80%] mx-auto  px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex justify-center items-start h-auto"
    >
      <div className="w-full flex flex-col gap-3 justify-start items-center">
        <h2 className="uppercase font-extrabold md:w-[70%] text-center mx-auto text-4xl lg:text-5xl xl:text-[58px] tracking-tighter lg:font-bold lg:mb-8">
          Frequently asked{" "}
          <span className="text-[#F15C20]">questions</span>
        </h2>

        <div className="w-full lg:w-[85%]">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              onClick={() => handleAccordionClick(faq.id)}
              className={`flex flex-col w-full py-4 cursor-pointer ${
                theme === "dark" ? "text-[#e7e7e7]" : "text-[#7D7D7D]"
              }`}
              style={{
                borderBottom: `2px solid ${palette?.light_contrast_background}`,
              }}
            >
              <button
                name="faq-question"
                className={`flex items-center justify-between w-full font-medium outline-none ${
                  openAccordion === faq.id
                    ? "text-[#F15C20]"
                    : theme === "dark"
                    ? "text-[#e7e7e7]"
                    : "text-black"
                }`}
              >
                <span className="text-base md:text-lg lg:text-xl text-left">
                  {faq.question}
                </span>
                {openAccordion === faq.id ? (
                  <FiMinus className="text-2xl" />
                ) : (
                  <FiPlus className="text-2xl" />
                )}
              </button>

              <div
                className={`transition-all duration-200 ${
                  openAccordion === faq.id ? "" : "hidden"
                }`}
              >
                <p
                  className="mt-2 text-xs lg:text-[16px] leading-normal"
                  style={{ color: palette?.dark_contrast_color }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
};

export default Faq;
