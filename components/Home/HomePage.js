"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useEffect } from "react";
import CaseStudiesSection from "@/components/Home/CaseStudiesSection";
import Faq from "@/components/Home/Faq";
import FindOurOfficesSection from "@/components/Home/FindOurOfficesSection";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import IndustriesSection from "@/components/Home/IndustriesSection";
import LandingContactUs from "@/components/Home/LandingContactUs";
import Process from "@/components/Home/Process";
import ServicesSection from "@/components/Home/ServicesSection";
import Slider from "@/components/Home/Slider";
import Technologies from "@/components/Home/Technologies";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import { IoArrowUpSharp } from "react-icons/io5";
import TopRatedAppDevelopmentContactSection from "../services/TopRatedMobileAppDevelopment/TopRatedAppDevelopmentContactSection";
import TopRatedPageOurOffices from "../services/TopRatedMobileAppDevelopment/TopRatedPageOurOffices";
import ConvenientMobileAppDevelopment from "./ConvenientMobileAppDevelopment";
import HomeContact from "./HomeContact";
import AreaOfExpertise from "./AreaOfExpertise";
import Head from "next/head";
import Script from "next/script";
import NewContactForm from "../global/NewContactForm";

export default function HomePage() {
  const { palette } = useContext(GlobalContext);
  // useEffect(() => {
  //   const scrollers = document.querySelectorAll(".scroller");

  //   // If a user hasn't opted in for recuded motion, then we add the animation
  //   if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //     addAnimation();
  //   }

  //   function addAnimation() {
  //     scrollers.forEach((scroller) => {
  //       // add data-animated="true" to every `.scroller` on the page
  //       scroller.setAttribute("data-animated", true);

  //       // Make an array from the elements within `.scroller-inner`
  //       const scrollerInner = scroller.querySelector(".scroller__inner");
  //       const scrollerContent = Array.from(scrollerInner.children);

  //       // For each item in the array, clone it
  //       // add aria-hidden to it
  //       // add it into the `.scroller-inner`
  //       scrollerContent.forEach((item) => {
  //         const duplicatedItem = item.cloneNode(true);
  //         duplicatedItem.setAttribute("aria-hidden", true);
  //         item.length > 12 && item.remove()
  //         scrollerInner.appendChild(duplicatedItem);
  //       });
  //     });
  //   }
  // });

  // useEffect(() => {
  //   console.log(
  //     document.head.append(
  //       `<link rel="canonical" href="https://www.dignitestudios.com/" />`
  //     )
  //   );
  // }, []);
  // <Head>
  //   <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  //   <link
  //     rel="alternate"
  //     hreflang="en-ca"
  //     href="https://www.dignitestudios.com/"
  //   />
  //   <link
  //     rel="alternate"
  //     hreflang="en-us"
  //     href="https://www.dignitestudios.com/"
  //   />
  //   <link
  //     rel="alternate"
  //     hreflang="en-gb"
  //     href="https://www.dignitestudios.com/"
  //   />
  //   <link
  //     rel="alternate"
  //     hreflang="x-default"
  //     href="https://www.dignitestudios.com/"
  //   />
  //   <meta http-equiv="content-language" content="en-us" />
  //   <meta http-equiv="content-language" content="en-ca" />
  //   <meta http-equiv="content-language" content="en-gb" />
  //   <meta name="robots" content="index, follow" />
  //   <meta name="googlebot" content="index, follow, max-snippet: 200" />
  //   <meta name="bingbot" content="index, follow, max-snippet: 200 " />
  //   <meta property="og:type" content="website" />
  //   <meta property="og:site_name" content="Dignite Studios" />
  //   <meta
  //     property="og:title"
  //     content="Top Mobile App Development Company | Dignite Studios"
  //   />
  //   <meta
  //     property="og:description"
  //     content="Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with significant solution."
  //   />
  //   <meta property="og:url" content="https://www.dignitestudios.com/" />
  //   <meta
  //     property="og:image"
  //     content="https://www.dignitestudios.com/banner-cover-image-of-top-mobile-app-development-company.webp"
  //   />
  //   <meta property="og:image:width" content="1200" />
  //   <meta property="og:image:height" content="630" />
  //   <meta
  //     property="og:image:alt"
  //     content="Top Mobile App Development Company | Dignite Studios"
  //   />
  //   <meta property="og:locale" content="en_US" />
  //   <meta name="twitter:card" content="summary_large_image" />
  //   <meta
  //     name="twitter:title"
  //     content="Top Mobile App Development Company | Dignite Studios"
  //   />
  //   <meta name="twitter:site" content="@dignitestudios" />
  //   <meta
  //     name="twitter:description"
  //     content="Explore interactive user experience to transform your software application to stand out among top mobile app development companies."
  //   />
  //   <meta
  //     name="twitter:image"
  //     content="https://www.dignitestudios.com/banner-cover-image-of-top-mobile-app-development-company.webp"
  //   />
  //   <meta
  //     name="twitter:image:alt"
  //     content="Top Mobile App Development Company"
  //   />
  // </Head>;

  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />

      <div
        className="scroller relative w-full h-auto md:h-96 "
        data-speed="fast"
        data-animated="true"
      >
        <Slider />
      </div>

      <Technologies />
      <ConvenientMobileAppDevelopment />
      <CaseStudiesSection />
      {/* <ServicesSection /> */}
      <Process />
      <WhyChooseUsSection />
      <AreaOfExpertise />
      <IndustriesSection />
      <Testimonials />
      <Faq />
      {/* <HomeContact /> */}
      <NewContactForm />
      {/* <FindOurOfficesSection /> */}
      <TopRatedPageOurOffices />
    </div>
  );
}
