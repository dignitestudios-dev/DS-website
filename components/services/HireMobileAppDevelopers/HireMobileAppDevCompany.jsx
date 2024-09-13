"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const apps = [
  {
    title: "Home",
    image_src: "/hire-mobile-app-dev-company-mockup-1.webp",
    alt: "Hire mobile app development company shows six mock screens of mobile applications",
  },
  {
    title: "Add to cart",
    image_src: "/hire-mobile-app-dev-company-mockup-2.webp",
    alt: "Hire mobile app development company shows six mock screens of mobile applications",
  },
  {
    title: "View cart",
    image_src: "/hire-mobile-app-dev-company-mockup-3.webp",
    alt: "Hire mobile app development company shows six mock screens of mobile applications",
  },
  {
    title: "Cart",
    image_src: "/hire-mobile-app-dev-company-mockup-4.webp",
    alt: "Hire mobile app development company shows six mock screens of mobile applications",
  },
  {
    title: "Proceed to checkout",
    image_src: "/hire-mobile-app-dev-company-mockup-5.webp",
    alt: "Hire mobile app development company shows six mock screens of mobile applications",
  },
  {
    title: "Order placed",
    image_src: "/hire-mobile-app-dev-company-mockup-6.webp",
    alt: "Hire mobile app development company shows six mock screens of mobile applications",
  },
];

const HireMobileAppDevCompany = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full pb-12 lg:pb-20 global-padding-horizontal">
      <div
        className={`w-full p-6 lg:p-20 ${
          theme === "light" ? "bg-[#F6F6F6]" : "bg-[#2d2d2d]"
        } rounded-[32px]`}
      >
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-6">
          <div>
            <div className="flex flex-col">
              <span className="text-[#8F8F8F] text-[20px] font-bold uppercase">
                hire mobile app
              </span>
            </div>
            <h2 className="headings-size mt-4">development company</h2>
          </div>
          <div className="">
            <p className="text-sm md:text-[18px] font-normal leading-[26.46px]">
              Hiring mobile app developers will rationalize and simplify the
              development evolution with a great expansion in the progression of
              apps. Here, we specialize in a vast scale of technologies and
              digital advancements to boost your business ideas in a snap. Hire
              app development company Dignite Studios to secure and maintain
              your app with top-notch solutions.
            </p>
            {/* <Link
              href={"/contact-us"}
              className="bg-[#F15C20] w-[198px] mt-8 px-7 py-5 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-1"
            >
              Start Your Project <FiArrowUpRight className="text-lg" />
            </Link> */}
            <div className="mt-5">
              <ContactButton
                text1={"Start Your Project"}
                text2={"Let's talk"}
              />
            </div>
          </div>
          <div></div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-16 mt-10">
          {apps.map((app, index) => {
            return (
              <div className="flex flex-col items-center gap-5" key={index}>
                <p className="text-sm font-semibold">{app.title}</p>
                <img
                  src={app.image_src}
                  alt={app.alt}
                  className="h-[476.37px] w-[220px]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HireMobileAppDevCompany;
