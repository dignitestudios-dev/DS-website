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
      className="relative w-full h-auto px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  py-6  md:py-14  lg:py-8 flex flex-col justify-start items-start gap-12 "
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
              className={`w-auto flex justify-start items-center text-lg xl:text-[24px] xl:font-semibold text-left gap-1 text-inherit`}
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
              <p
                className="mb-2 xl:text-[18px] font-light"
                style={{ color: palette?.color }}
              >
                "The history began in 2020 with muddled and ambiguous feelings
                among accord enthusiasts. We were overwhelmed with building a
                start-up business, but in all of our haste, we bumped into the
                fact that the aggregation of sales was swamping us away. So, we
                revamped the objective and set it together as Dignite Studios.
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
              className={`w-auto flex justify-start items-center text-lg xl:text-[24px] xl:font-semibold text-left gap-1 text-inherit`}
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
              <p
                className="mb-2 xl:text-[18px] font-light"
                style={{ color: palette?.color }}
              >
                Over the water, we realized that our area of expertise must
                cover all sides of leading tech in the booming sphere of
                digitalization. So, apart from Mobile App Design and
                Development, we hired 9 key players for Digital Marketing. Thus,
                within time we launched our prominent apps, graphic design
                services, and web application development to uplift the new
                frontiers in merchandising. Whereas, we stem from a global
                recognition on the platform of The Manifest as the most reviewed
                social media marketing company.
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
              className={`w-auto flex justify-start items-center text-lg xl:text-[24px] xl:font-semibold text-left gap-1 text-inherit`}
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
              <p
                className="mb-2 xl:text-[18px] font-light"
                style={{ color: palette?.color }}
              >
                Here, a thrilling turn changed the whole dilemma of Dignite
                Studios by achieving outstanding recognition, in the “INC 5000
                list” and also getting rewarded multiple times for renowned
                awards in the field of Design, Development, and Marketing. We
                took real pride in an incredible closing of 100% customer
                satisfaction rate and 89% customer retention rate. In the past 2
                years, we’ve obsolete 200 dreams into triumphant apps, websites,
                and mobile solutions.
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
              className={`w-auto flex justify-start items-center text-lg xl:text-[24px] xl:font-semibold text-left gap-1 text-inherit`}
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
              <p
                className="mb-2 xl:text-[18px] font-light"
                style={{ color: palette?.color }}
              >
                Dignite Studios achieved remarkable proven results in acquiring
                clients' goals and feedback. This has led to persistent
                recognition in the “INC 5000 list.” Throughout our journey, our
                unwavering focus has remained on innovation, client
                satisfaction, and making a lasting impact in the realms of
                technology and creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsFaq;
