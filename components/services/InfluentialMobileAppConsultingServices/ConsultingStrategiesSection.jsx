"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { headings, paragraphs } from "@/constants/mobileappdevsection";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";

const ConsultingStrategiesSection = () => {
  const { theme } = useContext(GlobalContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  const headings = [
    {
      heading: "Market Research",
      image_src: "/mobile-app-consulting-market-research.webp",
      image_title: "Mobile app consulting market research",
      image_alt:
        "image shows the market evaluation among Mobile app consulting team members",
      paragrap1:
        " Market analysis for mobile apps improves to identification of potential consumers and highlights the customization required from the audience in the application. In the competitive space, the mobile app market has surpassed the worth of $197 billion in 2021. However, it has been evaluated that it will rise to $583 billion by 2030. Likewise, the professional service of Dignite Studios showcases productive consulting services and conducts proper research in the consultation process of app development. Hence, this will help you to increase your chances of success in the market of mobile technology.",
    },
    {
      heading: "Product Roadmap",
      image_src: "/mobile-app-consulting-product-roadmap.webp",
      image_title: "Mobile app consulting Product Roadmap",
      image_alt:
        "image shows the group discussion on Mobile app consulting Roadmap",
      paragrap1:
        "In the arena of innovative mobile structures, it helps to navigate the entire procedure of mobile app development from what features need to be prioritized and how to streamline the goals and the product’s vision. It provides a clear vision to create a timeframe for your initiatives. We allocate flawless and immaculate design to custom-make your product roadmap in the consultation process. ",
    },
    {
      heading: "Infrastructure And Mobile Technology",
      image_src: "/consulting-infrastructure-and-mobile-technology.webp",
      image_title: "Consulting Infrastructure and mobile technology",
      image_alt: "image shows the graphical revolving of tech icons",
      paragrap1:
        "Infrastructure pertains to the foundational framework and mandatory resources to replenish digital products. It encircles hardware, software, networks, and services that produce optimal functioning of the apps, and websites. Dignite Studios delivers professional mobile app consulting to its partners and consumers in determining the best mobile project for the brand. Whether native, hybrid, or cross-platform apps, the service also furnishes the best mobile significant factors; li*ke programming language, and more throughout consulting services of mobile apps. ",
    },
    {
      heading: "Testing and Launch",
      image_src: "/mobile-app-testing-and-launch.webp",
      image_title: "Mobile App testing and launch",
      image_alt:
        "man is holding a mobile device that appears mobile application layout",
      paragrap1:
        "Mobile testing refers to the proceeding of corroborating app functionality and usability before the mobile app launch phase of (Android or iOS) apps. Here, we provide the best mobile app consulting services while providing an intuitive user-friendly mobile app.",
    },
    {
      heading: "Maintenance and Support",
      image_src: "/mobile-app-consulting-maintenance-and-support.webp",
      image_title: "Mobile App Consulting maintenance and support",
      image_alt:
        "a team member is providing quality support to their consumers of Mobile App Consulting maintenance",
      paragrap1:
        "After the mobile application development process, it is very important to update the longevity and cogency of your mobile app. It not only helps in fixing bugs but also eradicates the errors interrupting the performance of your mobile. At Dignite Studios, you’ll get free mobile app maintenance and support from our incredible team for up to 2 months. Also, you’ll witness next-level mobile app consulting dispensations throughout the process.",
    },
  ];
  const [selectedHeading, setSelectedHeading] = useState(
    headings[currentIndex]
  );

  const handleIncrement = () => {
    if (currentIndex < 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDecrement = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="w-full lg:py-12 global-padding-horizontal flex flex-col gap-4">
      <div className="w-full flex flex-col lg:flex-row gap-y-6 items-start justify-between">
        <h1 className="headings-size lg:w-[85%]">
          <span className="text-[#F15C20]">Mobile App</span> Development
          Consulting Strategies 
        </h1>
        <Link
          href={"/contact-us"}
          className="px-6 py-5 lg:w-[270px] lg:h-[80px] top-rated-btn-shadow hover:opacity-[.75] transition-all duration-300 rounded-full text-xl font-semibold text-[#ffff] bg-[#F15C20] flex items-center justify-center gap-2 xl:mt-2"
        >
          Contact Us <RiArrowRightUpLine className="text-2xl" />
        </Link>
      </div>

      <p
        className={`text-base 2xl:text-lg font-normal ${
          theme === "light" && "text-[#5C5C5C] leading-[20.81px]"
        } mt-6`}
      >
        The charismatic architecture of your mobile creates a spectacular
        element in your brand’s worth. Likewise, a mobile app strategy can
        enhance user engagement and the credibility of your new app idea. Here,
        the top-class mobile app consulting services of Dignite Studios, have
        the privilege of accumulating the world’s renowned expert consultants,
        specialists, designers, and professionals, who not only guide you latest
        mobile strategy but also cede best practices for mobile application
        development in the wide range of services for mobile progression. 
      </p>

      <div className="w-full mt-8 flex flex-col lg:flex-row gap-y-6 items-start lg:items-center justify-between">
        <div className="lg:w-[40%]">
          <Image
            loader={customLoader}
            width={614}
            height={391}
            src={headings[currentIndex]?.image_src}
            alt={headings[currentIndex]?.image_alt}
            title={headings[currentIndex]?.image_title}
            className="lg:h-[310px] xl:h-[391px] w-[614px] rounded-3xl"
          />
        </div>
        <div className="lg:w-[60%] flex flex-col items-start justify-center gap-6 lg:ps-12">
          <h2 className="text-[28px] 2xl:text-[38px] font-semibold">
            {headings[currentIndex]?.heading}
          </h2>
          <p
            className={`text-base 2xl:text-lg font-normal ${
              theme === "light" && "text-[#5C5C5C] leading-[20.81px]"
            } `}
          >
            {headings[currentIndex]?.paragrap1}
          </p>
        </div>
      </div>

      <div className="w-full flex items-start justify-end xl:justify-between gap-3 mt-10">
        <div
          className="w-[210px] py-3 hidden xl:flex flex-col items-start justify-start gap-3 cursor-pointer"
          onClick={() => setCurrentIndex(0)}
        >
          <span className="text-base 2xl:text-lg font-normal text-[#A4A4A4]">
            01
          </span>
          <div
            className={`w-[210px] h-[3px] ${
              currentIndex === 0 ? "bg-[#F15C20]" : "bg-gray-300"
            }`}
          />
          <p className="text-base 2xl:text-lg font-normal">Market Research</p>
        </div>
        <div
          className="w-[210px] py-3 hidden xl:flex flex-col items-start justify-start gap-3 cursor-pointer"
          onClick={() => setCurrentIndex(1)}
        >
          <span className="text-base 2xl:text-lg font-normal text-[#A4A4A4]">
            02
          </span>
          <div
            className={`w-[210px] h-[3px] ${
              currentIndex === 1 ? "bg-[#F15C20]" : "bg-gray-300"
            }`}
          />
          <p className="text-base 2xl:text-lg font-normal">Product Roadmap</p>
        </div>
        <div
          className="w-[210px] py-3 hidden xl:flex flex-col items-start justify-start gap-3 cursor-pointer"
          onClick={() => setCurrentIndex(2)}
        >
          <span className="text-base 2xl:text-lg font-normal text-[#A4A4A4]">
            03
          </span>
          <div
            className={`w-[210px] h-[3px] ${
              currentIndex === 2 ? "bg-[#F15C20]" : "bg-gray-300"
            }`}
          />
          <p className="text-base 2xl:text-lg font-normal">
            Infrastructure and Mobile Technology
          </p>
        </div>
        <div
          className="w-[210px] py-3 hidden xl:flex flex-col items-start justify-start gap-3 cursor-pointer"
          onClick={() => setCurrentIndex(3)}
        >
          <span className="text-base 2xl:text-lg font-normal text-[#A4A4A4]">
            04
          </span>
          <div
            className={`w-[210px] h-[3px] ${
              currentIndex === 3 ? "bg-[#F15C20]" : "bg-gray-300"
            }`}
          />
          <p className="text-base 2xl:text-lg font-normal">
            Testing and Launch
          </p>
        </div>
        <div
          className="w-[210px] py-3 hidden xl:flex flex-col items-start justify-start gap-3 cursor-pointer"
          onClick={() => setCurrentIndex(4)}
        >
          <span className="text-base 2xl:text-lg font-normal text-[#A4A4A4]">
            05
          </span>
          <div
            className={`w-[210px] h-[3px] ${
              currentIndex === 4 ? "bg-[#F15C20]" : "bg-gray-300"
            }`}
          />
          <p className="text-base 2xl:text-lg font-normal">
            Maintenance and Support
          </p>
        </div>
        <div className="xl:py-6 py-0 flex items-center justify-center gap-3 w-full lg:w-auto">
          <button
            type="button"
            name="swipe left button"
            className={`w-[49px] h-[49px] rounded-full flex items-center justify-center ${
              theme === "light" ? "bg-[#FAFAFA]" : "bg-[#333333]"
            } hover:bg-[#F15C20] hover:text-white transition-all duration-200`}
            onClick={() => handleDecrement()}
          >
            <GoArrowLeft className="text-xl" />
          </button>
          <button
            type="button"
            name="swipe right button"
            className={`w-[49px] h-[49px] rounded-full flex items-center justify-center ${
              theme === "light" ? "bg-[#FAFAFA] text-black" : "bg-[#333333]"
            } hover:bg-[#F15C20] hover:text-white transition-all duration-200`}
            onClick={() => handleIncrement()}
          >
            <GoArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultingStrategiesSection;
