"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const DiscoverOurHistory = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 pb-12 pt-12 lg:pt-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-16">
        <div className="col-span-3 lg:col-span-2 flex flex-col items-start gap-4 lg:gap-8 xl:pr-32">
          <h2
            className={`${
              theme === "light" ? "text-black" : "text-white"
            } headings-size`}
          >
            discover our <br /> history
          </h2>
          <p
            className={`${
              theme === "light" ? "text-[#2A2A2A]" : "text-white"
            } tracking-[-0.21px] leading-[20.4px]`}
          >
            Leading with years of experience, Dignite Studios has been centering
            on the modernization of mobile software specifications to create
            magnificent web and mobile applications for their valuable clients.
            Our company of mobile business intelligence has a proven track
            record of triumphant mobile projects which are illustrious in
            today’s digital realm. We have achieved phenomenal growth in
            empowering diverse businesses with innovation and contemporary ideas
            to enliven various blueprints. We have globally earned remarkable
            endorsement and apprehension in the “INC 5000 list.” Throughout the
            journey, our unwavering focus has remained on transformation, client
            satisfaction, and making an indelible impact in the realms of
            technology and software.
          </p>
          <div className="mt-5">
            <Link
              // href={"/contact-us"}
              href={{
                pathname: "/contact-us",
              }}
              id="mobile-app-development-services/discover-our-history-section"
              className={`px-6 py-5 xl:px-8 xl:py-7 rounded-full font-medium text-lg border border-[#F15C20] text-[#F15C20] ${theme === 'light' ? 'bg-white': 'bg-[#222222]'} hover:bg-[#F15C20] hover:text-white transition-all duration-300`}
            >
              Start Your Project
            </Link>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1 flex justify-center lg:justify-end">
          <Image
            src="/mobile-app-development-services-value-expedition.webp"
            loader={customLoader}
            alt="Description of the image"
            width={410}
            height={435}
            className="h-[365px] xl:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscoverOurHistory;
