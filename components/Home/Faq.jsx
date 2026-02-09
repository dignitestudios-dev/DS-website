"use client";

import React, { useContext, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { GlobalContext } from "@/context/GlobalContext";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";


const faqs = [
  {
    "question": "What’s the usual cost to build an app?",
    "answer": "We don’t have fixed pricing. Costs vary by project depending on features and timelines. To get an accurate estimate, we recommend contacting us directly."
  },
  {
    "question": "How much time does it usually take in development?",
    "answer": "We plan realistic timelines using agile development, ensuring timely feature delivery while maintaining security and overall project quality."
  },
  {
    "question": "What engagement models are you offering currently?",
    "answer": "We currently offer flexible engagement options, including dedicated teams and hourly support, helping startups access the right resources while minimizing risk."
  },
  {
    "question": "What’s the strategy to follow NDAs and privacy?",
    "answer": "Our team strictly follows NDAs and data privacy best practices, ensuring confidentiality and secure workflows aligned with industry standards."
  },
  {
    "question": "What are your technical expertise?",
    "answer": "We specialize in ecommerce mobile app development, mobile app maintenance and support, and building enterprise-level applications."
  }
]

const Faq = () => {
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
          Frequently asked <span className="text-[#F15C20]">questions</span>
        </h2>

        <div className="w-full lg:w-[100%]">
          {faqs.map((faq , idx) => (
            <div
              key={idx}
              onClick={() => handleAccordionClick(idx)}
              className={`flex flex-col w-full mb-4 py-4 lg:py-14 rounded-l-full  cursor-pointer ${
                theme === "dark" ? "text-[#e7e7e7]" : "text-[#7D7D7D]"
              }  ${
                openAccordion === idx
                  ? "bg-[#F15C20] text-white"
                  : theme === "dark"
                    ? "text-[#e7e7e7]"
                    : "text-black bg-[#F6F6F6]"
              }`}
            >
              <button
                name="faq-question"
                className={`flex items-center justify-between w-full font-medium outline-none relative`}
              >
                <span className="text-base md:text-lg lg:text-xl text-left px-12 ">
                  {faq.question}
                </span>
                {openAccordion === idx ? (
                  <FiMinus className="text-2xl absolute rounded-full shadow-[0_0_15px_0_#F15C2040]  text-[#F15C20] bg-white top-1/2 -right-6 h-12 w-12 p-2" />
                ) : (
                  <FiPlus className="text-2xl absolute rounded-full shadow-[0_0_15px_0_#0C0C0C40]  text-[#929292] bg-white -right-5 h-12 w-12 p-2" />
                )}
              </button>

              <AnimatePresence>
                {openAccordion ===  idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p
                      className="mt-2 text-xs px-12 lg:text-[16px] leading-normal"
                      // style={{ color: palette?.dark_contrast_color }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
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
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
};

export default Faq;
