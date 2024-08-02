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

  <Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <link
      rel="alternate"
      hreflang="en-ca"
      href="https://www.dignitestudios.com/"
    />
    <link
      rel="alternate"
      hreflang="en-us"
      href="https://www.dignitestudios.com/"
    />
    <link
      rel="alternate"
      hreflang="en-gb"
      href="https://www.dignitestudios.com/"
    />
    <link
      rel="alternate"
      hreflang="x-default"
      href="https://www.dignitestudios.com/"
    />
    <meta http-equiv="content-language" content="en-us" />
    <meta http-equiv="content-language" content="en-ca" />
    <meta http-equiv="content-language" content="en-gb" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow, max-snippet: 200" />
    <meta name="bingbot" content="index, follow, max-snippet: 200 " />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Dignite Studios" />
    <meta
      property="og:title"
      content="Top Mobile App Development Company | Dignite Studios"
    />
    <meta
      property="og:description"
      content="Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with significant solution."
    />
    <meta property="og:url" content="https://www.dignitestudios.com/" />
    <meta
      property="og:image"
      content="https://www.dignitestudios.com/banner-cover-image-of-top-mobile-app-development-company.webp"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image:alt"
      content="Top Mobile App Development Company | Dignite Studios"
    />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Top Mobile App Development Company | Dignite Studios"
    />
    <meta name="twitter:site" content="@dignitestudios" />
    <meta
      name="twitter:description"
      content="Explore interactive user experience to transform your software application to stand out among top mobile app development companies."
    />
    <meta
      name="twitter:image"
      content="https://www.dignitestudios.com/banner-cover-image-of-top-mobile-app-development-company.webp"
    />
    <meta
      name="twitter:image:alt"
      content="Top Mobile App Development Company"
    />
  </Head>;

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
      <HomeContact />
      {/* <FindOurOfficesSection /> */}
      <TopRatedPageOurOffices />

      {/* ImageObject */}
      <Script
        type="application/ld+json"
        id="imageObject"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            url: "https://www.dignitestudios.com/logo.png",
          }),
        }}
      />

      {/* BreadcrumbList */}
      <Script
        type="application/ld+json"
        id="breadcrumbList"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home Page",
                item: "https://www.dignitestudios.com/",
              },
            ],
          }),
        }}
      />

      {/* WebPage */}
      <Script
        type="application/ld+json"
        id="webPage"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Top Mobile App Development Company | Dignite Studios",
            url: "https://www.dignitestudios.com/",
            description:
              "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with a significant solution.",
          }),
        }}
      />

      {/* WebSite */}
      <Script
        type="application/ld+json"
        id="webSite"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            url: "https://www.dignitestudios.com/",
            name: "Dignite Studios",
            description: "Top Mobile App Development Company",
            inLanguage: "en",
            publisher: {
              "@type": "Organization",
              url: "https://www.dignitestudios.com/",
              name: "Dignite Studios",
              logo: "https://www.dignitestudios.com/logo.png",
              sameAs: [
                "https://facebook.com/dignitestudios",
                "https://twitter.com/dignitestudios",
                "https://www.instagram.com/dignitestudios/",
                "https://www.linkedin.com/company/dignitestudios/",
                "https://www.pinterest.com/dignitestudios/",
                "https://g.page/r/CTqywDbEQFRNEBM",
              ],
            },
          }),
        }}
      />

      {/* Organization */}
      <Script
        type="application/ld+json"
        id="organization"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dignite Studios",
            alternateName: "DS",
            url: "https://www.dignitestudios.com/",
            logo: "https://www.dignitestudios.com/logo.png",
            description:
              "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with significant solution.",
            email: "support@dignitestudios.com",
            telephone: "+1 877-714-1770",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1 877-714-1770",
              contactType: "customer service",
              contactOption: "TollFree",
              email: "support@dignitestudios.com",
              availableLanguage: "en",
            },
            sameAs: [
              "https://facebook.com/dignitestudios",
              "https://twitter.com/dignitestudios",
              "https://www.instagram.com/dignitestudios/",
              "https://www.linkedin.com/company/dignitestudios/",
              "https://www.pinterest.com/dignitestudios/",
            ],
          }),
        }}
      />

      {/* Product */}
      <Script
        type="application/ld+json"
        id="product"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Product",
            name: "Mobile App Development Company",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              worstRating: "1",
              bestRating: "5",
              reviewCount: "7",
            },
          }),
        }}
      />

      {/* LocalBusiness */}
      <Script
        type="application/ld+json"
        id="localBusiness"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Dignite Studios",
            image: "https://www.dignitestudios.com/logo.png",
            url: "https://www.dignitestudios.com/",
            description:
              "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with significant solution.",
            email: "support@dignitestudios.com",
            telephone: "+18777141770",
            priceRange: "$$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3505 Lake Lynda Dr #200",
              addressLocality: "Orlando",
              addressRegion: "FL",
              postalCode: "32817",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 28.6008727,
              longitude: -81.2219365,
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1 877-714-1770",
              contactType: "customer service",
              contactOption: "TollFree",
              email: "support@dignitestudios.com",
              availableLanguage: "en",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            sameAs: [
              "https://facebook.com/dignitestudios",
              "https://twitter.com/dignitestudios",
              "https://www.instagram.com/dignitestudios/",
              "https://www.linkedin.com/company/dignitestudios/",
              "https://www.pinterest.com/dignitestudios/",
            ],
          }),
        }}
      />
    </div>
  );
}
