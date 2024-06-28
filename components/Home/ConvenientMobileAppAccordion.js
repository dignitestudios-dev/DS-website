import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

const ConvenientMobileAppAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Collapse if clicked item is already active
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item border-b py-4" key={index}>
          <div
            className="accordion-header w-full flex items-center justify-between"
            onClick={() => handleItemClick(index)}
          >
            <div className={`accordion-question font-semibold text-xl ${index === activeIndex ? 'text-[#F15C20]' : 'text-black'}`}>{item.heading}</div>
            <div
              className={`accordion-icon ${
                index === activeIndex ? "open" : ""
              }`}
            >
              {index === activeIndex ? <HiMinus className={`${index === activeIndex ? 'text-[#F15C20]' : 'text-black'}`}/> : <HiPlus className={`${index === activeIndex ? 'text-[#F15C20]' : 'text-black'}`}/>}
            </div>
          </div>
          {index === activeIndex && (
            <div className="accordion-content pt-2">
              <p className="text-sm">{item.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ConvenientMobileAppAccordion;
