"use client";

import React, { useContext } from "react";
import { styles } from "../../styles/styles";
import { GlobalContext } from "@/context/GlobalContext";
import { val } from "@/constants/reviews";
import TestimonialCard from "./TestimonialCard";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Head from "next/head";
import Script from "next/script";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    750: {
      slidesPerView: 2,
    },

    900: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
};

const Testimonials = () => {
  const { palette } = useContext(GlobalContext);
  // console.log(val);
  <Head></Head>;
  return (
    <div
      id="testimonials"
      className={`w-full py-14 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  `}
    >
      <div className={``}>
        <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
          Testimonials
        </p>

        <h1
          className={`lg:font-bold uppercase font-extrabold text-4xl lg:text-5xl xl:text-[72px] 2xl:text-[104px] tracking-tighter`}
        >
          our clients
        </h1>
      </div>
      <div
        className="w-full h-[2px]  rounded-full "
        style={{
          background: `${palette?.light_contrast_background}`,
        }}
      />

      <div className={`w-full pt-4 lg:pt-6 gap-10 overflow-hidden`}>
        <Swiper {...sliderSettings} modules={[Autoplay]} className="">
          {val?.map(({ reviewBody, author: { name, jobtitle } }, index) => {
            return (
              <SwiperSlide key={index} className="">
                <TestimonialCard
                  reviewBody={reviewBody}
                  authorName={name}
                  jobtitle={jobtitle}
                  index={index}
                  key={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Review",
            reviewBody:
              "Dignite Studios Hailey was very helpful getting my startup going, and especially patient with any difficulties I’ve presented in the process. The process was also clearly stated to me, and any questions I’ve had were answered. She even gave me some ideas for my app that were creative and showed she cared for the idea to be at its best.",
            itemReviewed: {
              "@type": "Organization",
              name: "Dignite Studios",
              image: "https://www.dignitestudios.com/",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "4",
            },
            author: {
              "@type": "Person",
              name: "Chase Lassiter",
              jobtitle: "CEO, @Vayda",
            },
            publisher: {
              "@type": "Organization",
              name: "Dignite Studios",
            },
            // Repeat for other reviews
          }),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Review",
            reviewBody:
              "Dignite Studios were quick to respond to my inquiry regarding development of my app. Shane the Senior Business Consultant was amazing. He explained things in a language I could understand. They are super friendly and professional.",
            itemReviewed: {
              "@type": "Organization",
              name: "Dignite Studios",
              image: "https://www.dignitestudios.com/",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "4",
            },
            author: {
              "@type": "Person",
              name: "Shantwan Humphrey",
              jobtitle: "CEO, @Fareshare",
            },
            publisher: {
              "@type": "Organization",
              name: "Dignite Studios",
            },
          }),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Review",
            reviewBody:
              "Shane is an absolute pleasure to work with. Communication is on point. Him and his team always exceed my expectations!",
            itemReviewed: {
              "@type": "Organization",
              name: "Dignite Studios",
              image: "https://www.dignitestudios.com/",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "4",
            },
            author: {
              "@type": "Person",
              name: "Joshua Abely",
              jobtitle: "CEO, @Maidsimpl",
            },
            publisher: {
              "@type": "Organization",
              name: "Dignite Studios",
            },
          }),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Review",
            reviewBody:
              "The experience has been straightforward and seamless. I thank everyone for their knowledge and expertise in getting this project done. I will be forever grateful for the work that has been put in, and I thank everyone for everything and all of their hard work!",
            itemReviewed: {
              "@type": "Organization",
              name: "Dignite Studios",
              image: "https://www.dignitestudios.com/",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "4",
            },
            author: {
              "@type": "Person",
              name: "Laurent Carter",
              jobtitle: "CEO, @Carterboating",
            },
            publisher: {
              "@type": "Organization",
              name: "Dignite Studios",
            },
          }),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Review",
            reviewBody:
              "Dignite Studios have gone above and beyond my expectations. Marvin has clearly done his research into our special niche and thought of great value to add that we didn’t even think of. This is a dream come true experience and I am so thankful. I am looking forward to a very long term relationship with Dignite Studios.",
            itemReviewed: {
              "@type": "Organization",
              name: "Dignite Studios",
              image: "https://www.dignitestudios.com/",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "4",
            },
            author: {
              "@type": "Person",
              name: "Nicole Adcock",
              jobtitle: "CEO, @Divespace",
            },
            publisher: {
              "@type": "Organization",
              name: "Dignite Studios",
            },
          }),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Review",
            reviewBody:
              "I had a wonderful experience working with Liam and Maya. They were thought provoking and professional. They thought through my project in a depth no other company has. Their outstanding collaborative efforts were refreshing. I appreciate all the hard work they brought.",
            itemReviewed: {
              "@type": "Organization",
              name: "Dignite Studios",
              image: "https://www.dignitestudios.com/",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "4",
            },
            author: {
              "@type": "Person",
              name: "Mathew",
              jobtitle: "CEO, @Rentalproperties",
            },
            publisher: {
              "@type": "Organization",
              name: "Dignite Studios",
            },
          }),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Review",
            reviewBody:
              "The team has been great. I feel confident in each step that I make, including, I appreciate honest feedback and the research that my project manager Marvin does. I also love how often they gave me updates on their progress. Thank you to the whole team for making this app come to life.",
            itemReviewed: {
              "@type": "Organization",
              name: "Dignite Studios",
              image: "https://www.dignitestudios.com/",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "4",
            },
            author: {
              "@type": "Person",
              name: "Petula Bedeau",
              jobtitle: "CEO, @Loadclear",
            },
            publisher: {
              "@type": "Organization",
              name: "Dignite Studios",
            },
          }),
        }}
      />
    </div>
  );
};

export default Testimonials;
