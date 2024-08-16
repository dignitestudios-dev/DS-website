"use client";
import React, { useEffect } from "react";

const AboutUsSlider = () => {
  //   useEffect(() => {
  //     const scrollers = document.querySelectorAll(".scroller1");

  //     // If a user hasn't opted in for recuded motion, then we add the animation
  //     if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //       addAnimation();
  //     }

  //     function addAnimation() {
  //       scrollers.forEach((scroller) => {
  //         scroller.setAttribute("data-animated", true);

  //         const scrollerInner = scroller.querySelector(".scroller__inner1");
  //         const scrollerContent = Array.from(scrollerInner.children);

  //         scrollerContent.forEach((item) => {
  //           const duplicatedItem = item.cloneNode(true);
  //           duplicatedItem.setAttribute("aria-hidden", true);
  //           item.length > 12 && item.remove();
  //           scrollerInner.appendChild(duplicatedItem);
  //         });
  //       });
  //     }
  //   });

  return (
    <div
      className="scroller1  w-screen h-auto overflow-x-hidden "
      data-speed="fast"
      data-animated="true"
    >
      <div className="scroller__inner1 w-full  flex justify-start gap-6 items-center   ">
        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />

        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />

        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />

        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />

        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />

        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />

        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />
        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />
        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />
        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />
        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />

        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />

        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />
        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />
        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />
        <img
          src="/our-journey.png"
          className="h-[80px]"
          title="Our Journey"
          alt="Our Journey"
        />
      </div>
    </div>
  );
};

export default AboutUsSlider;
