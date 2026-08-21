"use client";

import React, { useContext, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { GlobalContext } from "@/context/GlobalContext";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";


const faqs = [
  {
    "question": "Why Choose Dignite Studios As Your Mobile App Development Company?",
    "answer": "Dignite Studios approaches mobile app development from both a technical and business perspective. We begin by understanding what you want the application to achieve, who will use it, and which features are essential. From there, we define an appropriate strategy and keep you involved through regular project updates. Our goal is to give you a clear path rather than simply delivering an application without considering its long-term purpose."
  },
  {
    "question": "What Mobile App Development Services Do You Offer?",
    "answer": "As a leading mobile app development firm, we offer Android, iOS, cross-platform, web app, MVP development, UI/UX design, app testing, and ongoing maintenance and support. We can also help you enhance an existing application by introducing new functionality, improving its performance, or integrating additional services. If you're still validating your concept, our MVP services can help you test the core idea before moving toward a larger product."
  },
  {
    "question": "Which Industries Do You Develop Mobile Apps For?",
    "answer": "Dignite Studios develops mobile applications for industries including healthcare, ecommerce, real estate, food delivery, travel, education, fintech, and social networking. We don't approach every project in the same way. Instead, we consider the workflows, audiences, and operational requirements specific to the industry so the resulting application supports the way your business actually operates."
  },
  {
    "question": "Can Dignite Studios Help Validate My App Idea Before Development Begins?",
    "answer": "Yes. We can help you assess your concept before full development begins. Early validation can reveal who your target users are, which problems your app should solve, and which features deserve priority. We can support this stage through market research, product planning, feature prioritization, and MVP strategy, helping you make better decisions before investing heavily in development."
  },
  {
    "question": "Can You Build an App Similar to An Existing App?",
    "answer": "Yes. If an existing application has features or functionality that inspire your idea, the developers at our mobile application development firm can develop a new application based on your own requirements. We first evaluate the functionality you need, identify opportunities for improvement, and then create a plan around your business model and target audience. The result is a custom product rather than a direct copy of another application."
  },
  {
    "question": "Which Technologies Do You Use For Mobile App Development?",
    "answer": "We use technologies based on the requirements of each application. For Android, our stack includes Kotlin and Java, while Flutter and React Native are used for cross-platform development. For web interfaces, we work with technologies such as React.js, Next.js, Vue.js, and Angular. Depending on the project, we also use MySQL, PostgreSQL, MongoDB, Firebase, AWS, Microsoft Azure, and Google Cloud for data management, backend infrastructure, and cloud services."
  },
  {
    "question": "Do You Provide App Maintenance and Support After Launch?",
    "answer": "Yes. We provide post-launch support to help keep your application stable, secure, and up to date. Our maintenance services can include bug fixes, performance optimization, security updates, feature enhancements, monitoring, and third-party integrations. As your product evolves, we can also help introduce functionality based on changing business requirements and user feedback."
  }
];

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
        <h2 className="capitalize font-extrabold md:w-[70%] text-center mx-auto text-4xl lg:text-5xl xl:text-[58px] tracking-tighter lg:font-bold lg:mb-8">
          Commonly Asked Questions About Mobile App Development Agency
        </h2>

        <div className="w-full lg:w-[100%]">
          {faqs.map((faq , idx) => (
            <div
              key={idx}
              onClick={() => handleAccordionClick(idx)}
              className={`flex flex-col w-full mb-4 py-4 lg:py-14 rounded-l-2xl md:rounded-l-full   cursor-pointer ${
                theme === "dark" ? "text-[#e7e7e7]" : "text-[#737373]"
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
                      className={`mt-2 text-xs px-12 lg:text-[16px] leading-normal ${openAccordion === idx ? "[&_a]:text-white [&_a]:underline" : "[&_a]:text-[#F15C20] [&_a]:underline"}`}
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
