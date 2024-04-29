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
      className="relative w-full h-auto px-4 md:px-12 lg:px-28  py-6  md:py-14  lg:py-8 flex flex-col justify-start items-start gap-12 "
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
                Our team of skilled professionals is dedicated to delivering
                top-notch home services with professionalism and integrity.
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
                Our team of skilled professionals is dedicated to delivering
                top-notch home services with professionalism and integrity.
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
                Our team of skilled professionals is dedicated to delivering
                top-notch home services with professionalism and integrity.
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
                Our team of skilled professionals is dedicated to delivering
                top-notch home services with professionalism and integrity.
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
              openAccordion == 5
                ? `1px solid ${palette?.brandOrange}`
                : `1px solid #8f8f8f24`,
          }}
        >
          <button
            type="button"
            onClick={() => handleAccordionClick(5)}
            className="flex items-center justify-between w-full py-3 font-medium rtl:text-right  outline-none hover:opacity-95  gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 5 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <div
              className={`w-auto flex justify-start items-center text-lg text-left gap-1 text-inherit`}
            >
              <span className="font-bold">2024</span>
              <span
                className="font-bold"
                style={{ color: palette?.brandOrange }}
              >
                /
              </span>
            </div>
            <MdKeyboardArrowDown
              className={`text-lg ${
                openAccordion === 5 && "rotate-180 text-orange-600"
              }`}
            />
          </button>
          <div
            id="accordion-1"
            className={`transition-all duration-200 ${
              openAccordion === 5 ? "" : "hidden"
            }`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className=" rounded-md  ">
              <p className="mb-2 " style={{ color: palette?.color }}>
                Our team of skilled professionals is dedicated to delivering
                top-notch home services with professionalism and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsFaq;
