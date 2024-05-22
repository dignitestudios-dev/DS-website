"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const AboutUsFaq = () => {
  const { palette } = useContext(GlobalContext);
  const [openAccordion, setOpenAccordion] = useState(1);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
  };
  return (
    <div
      id="about-us-journey"
      className="relative w-full h-auto px-4 md:px-12 lg:px-28 xl:px-[120px]  py-6  md:py-14  lg:py-8 flex flex-col justify-start items-start gap-12 "
    >
      <div className="w-full h-auto   flex flex-col gap-3 justify-start items-start">
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full"
          style={{
            borderBottom:
              openAccordion == 1
                ? `1px solid ${palette?.brandOrange}`
                : `1px solid #8f8f8f24`,
          }}
        >
          <button
            type="button"
            onClick={() => handleAccordionClick(1)}
            className="flex items-center justify-between w-full py-3 font-medium rtl:text-right  outline-none hover:opacity-95  gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 1 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <div
              className={`w-auto flex justify-start items-center text-lg text-left gap-1 text-inherit`}
            >
              <span className="font-bold">2020</span>
              <span
                className="font-bold"
                style={{ color: palette?.brandOrange }}
              >
                /
              </span>
            </div>
            <MdKeyboardArrowDown
              className={`text-lg ${
                openAccordion === 1 && "rotate-180 text-orange-600"
              }`}
            />
          </button>
          <div
            id="accordion-1"
            className={`transition-all duration-200 ${
              openAccordion === 1 ? "" : "hidden"
            }`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className=" rounded-md  ">
              <p className="mb-2 " style={{ color: palette?.color }}>
                "Every history has a beginning". In 2020, our tale began. We
                were a group of like-minded people working for various firms
                when we became aware of something upsetting about how we
                conducted business. We didn't like the fact that we were only
                concentrating on sales and neglecting to develop solid,
                long-lasting connections with our clients. Since we had similar
                objectives we all came together as Dignite Studios.
              </p>
            </div>
          </div>
        </div>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full"
          style={{
            borderBottom:
              openAccordion == 2
                ? `1px solid ${palette?.brandOrange}`
                : `1px solid #8f8f8f24`,
          }}
        >
          <button
            type="button"
            onClick={() => handleAccordionClick(2)}
            className="flex items-center justify-between w-full py-3 font-medium rtl:text-right  outline-none hover:opacity-95  gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 2 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <div
              className={`w-auto flex justify-start items-center text-lg text-left gap-1 text-inherit`}
            >
              <span className="font-bold">2021</span>
              <span
                className="font-bold"
                style={{ color: palette?.brandOrange }}
              >
                /
              </span>
            </div>
            <MdKeyboardArrowDown
              className={`text-lg ${
                openAccordion === 2 && "rotate-180 text-orange-600"
              }`}
            />
          </button>
          <div
            id="accordion-1"
            className={`transition-all duration-200 ${
              openAccordion === 2 ? "" : "hidden"
            }`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className=" rounded-md  ">
              <p className="mb-2 " style={{ color: palette?.color }}>
                Our expertise were shining in the area of Mobile Apps Design &
                Development, but we felt like something was missing. So we added
                9 more key players to our team and created a department for
                Digital Marketing. With a strong marketing team we were able to
                launch some of our most popular apps in 2021. We also widened
                our services to Web & Graphics designing. As a result, Dignite
                Studios was recognized as one of the most reviewed social media
                marketing companies by The Manifest.
              </p>
            </div>
          </div>
        </div>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full"
          style={{
            borderBottom:
              openAccordion == 3
                ? `1px solid ${palette?.brandOrange}`
                : `1px solid #8f8f8f24`,
          }}
        >
          <button
            type="button"
            onClick={() => handleAccordionClick(3)}
            className="flex items-center justify-between w-full py-3 font-medium rtl:text-right  outline-none hover:opacity-95  gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 3 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <div
              className={`w-auto flex justify-start items-center text-lg text-left gap-1 text-inherit`}
            >
              <span className="font-bold">2022</span>
              <span
                className="font-bold"
                style={{ color: palette?.brandOrange }}
              >
                /
              </span>
            </div>
            <MdKeyboardArrowDown
              className={`text-lg ${
                openAccordion === 3 && "rotate-180 text-orange-600"
              }`}
            />
          </button>
          <div
            id="accordion-1"
            className={`transition-all duration-200 ${
              openAccordion === 3 ? "" : "hidden"
            }`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className=" rounded-md  ">
              <p className="mb-2 " style={{ color: palette?.color }}>
                We onboarded a lot of new projects in 2022, from SMEs to well
                known brands in various industries. Dignite Studios also made it
                into the "INC 5000 list" and also won multiple awards in the
                area of Design, Development & Marketing. But that's not what
                made us happy. We took pride in closing the last year with 100%
                customer satisfaction rate and 89% Customer retention rate.
                After 2 years of continuous efforts and dedication, team Dignite
                Studios has brought more than 200 dreams into successful apps,
                websites, softwares and products.
              </p>
            </div>
          </div>
        </div>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full"
          style={{
            borderBottom:
              openAccordion == 4
                ? `1px solid ${palette?.brandOrange}`
                : `1px solid #8f8f8f24`,
          }}
        >
          <button
            type="button"
            onClick={() => handleAccordionClick(4)}
            className="flex items-center justify-between w-full py-3 font-medium rtl:text-right  outline-none hover:opacity-95  gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 4 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <div
              className={`w-auto flex justify-start items-center text-lg text-left gap-1 text-inherit`}
            >
              <span className="font-bold">2023</span>
              <span
                className="font-bold"
                style={{ color: palette?.brandOrange }}
              >
                /
              </span>
            </div>
            <MdKeyboardArrowDown
              className={`text-lg ${
                openAccordion === 4 && "rotate-180 text-orange-600"
              }`}
            />
          </button>
          <div
            id="accordion-1"
            className={`transition-all duration-200 ${
              openAccordion === 4 ? "" : "hidden"
            }`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className=" rounded-md  ">
              <p className="mb-2 " style={{ color: palette?.color }}>
                We achieved remarkable growth, serving diverse clients and
                earning repeat recognition in the “INC 5000 list”. Throughout
                our journey, our unwavering focus has remained on innovation,
                client satisfaction, and making a lasting impact in the realms
                of technology and creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsFaq;
