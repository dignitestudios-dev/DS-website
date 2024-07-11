"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import React, { useContext } from "react";

const OurValueExpeditionSection = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="py-10 lg:py-20 global-padding-horizontal w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
      <div className="pt-0 relative lg:relative xl:-mt-0 2xl:-mt-0 flex justify-start">
        <Image
          loader={customLoader}
          width={596}
          height={357.6}
          src="/our-value-expedition-mockup.webp"
          alt="our-value-expedition-mockup"
          title="our-value-expedition-mockup"
          className="md:w-[496px] md:h-[300px] mx-auto lg:h-[250px] 2xl:w-[606px] xl:h-[300px] 2xl:h-[340px]"
        />
      </div>
      <div className="flex flex-col gap-4 lg:gap-6">
        <h1 className="headings-size text-[#F15C20] hidden xl:block">
          Our Value <br />{" "}
          <span
            className={`${theme === "light" ? "text-black" : "text-white"}`}
          >
            Expedition
          </span>
        </h1>
        <h1 className="headings-size text-[#F15C20] xl:hidden">
          Our Value {" "}
          <span
            className={`${theme === "light" ? "text-black" : "text-white"}`}
          >
            Expedition
          </span>
        </h1>
        <p className="text-base 2xl:text-xl font-normal">
          The world’s preeminent ensemble Dignite Studios, harnesses the power
          of sustainability, believability, and solution to empower business
          growth. We aim to bestow next-level expert guidance and innovative
          solutions to deploy unique infrastructure to your mobile and web apps.
          Also, you’ll experience multiple opportunities at each facet of your
          application transformation. 
        </p>
      </div>
    </section>
  );
};

export default OurValueExpeditionSection;
