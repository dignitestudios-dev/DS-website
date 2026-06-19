"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

// Import Swiper styles

const testData = [
  {
    name: "Chris Mumma",
    desgination: "US",
    review: "Justin Cruz and his team has made my experience with Dignite Studios fantastic thus far. If you're looking to have an application made, please consider Dignite Studios... and ask for Justin!",
    platform: "Trustpilot",
    link: "https://www.trustpilot.com/review/dignitestudios.com"
  },
  {
    name: "Eric Quintero",
    desgination: "US",
    review: "I am very glad to be working with dignite studios and with the team everyone there is amazing and very attentive to their jobs and would recommend to anyone",
    platform: "Trustpilot",
    link: "https://www.trustpilot.com/review/dignitestudios.com"
  },
  {
    name: "Mario Ponce",
    desgination: "US",
    review: "Dignite Studios and its associates especially Stacy are amazing, so far. We have started working on my mobile application, and then the landing page for my Application. While still in the process Stacy has been good in updating me on the development of my app. If you are looking to make any mobile applications, landing pages and or websites, I recommend in getting their services.",
    platform: "Trustpilot",
    link: "https://www.trustpilot.com/review/dignitestudios.com"
  },
  {
    name: "JAMIE MICELI",
    desgination: "US",
    review: "I had a meeting with Dignite studios to share my ideas. Hailey Wade immediately was able to understand my vision and explain to me the process and next steps. We put together a SOW and we are now in the process of moving on to the next steps. I'm really looking forward to working with Hailey and the Dignite team.",
    platform: "Trustpilot",
    link: "https://www.trustpilot.com/review/dignitestudios.com"
  },
  {
    name: "Ashley Brisbon",
    desgination: "US",
    review: "started the process of wanting an app for my business this past December and now my app is completed thanks to Justin Cruz and his team! I’m so happy to now have my app functioning and working. I didn’t feel overwhelmed at all during the process and was given information along every step of the way. I’m truly thankful for the quick and seamless experience.",
    platform: "Trustpilot",
    link: "https://www.trustpilot.com/review/dignitestudios.com"
  },
  {
    name: "Bob Corjulo",
    desgination: "US",
    review: "Dignite listened to our needs and provided a couple of solutions for us. Very receptive and accommodating. I appreciate their professionalism and track record for working with similar companies.",
    platform: "Trustpilot",
    link: "https://www.trustpilot.com/review/dignitestudios.com"
  },
  {
    name: "J.C. Perez",
    desgination: "US",
    review: "The experience I’ve had with Dignite Studios has been amazing! I have almost completed my first app and have already started a second! Stacy, my project manager has been wonderful throughout the process. The organization and attention to detail is second to none! She listens and implements everything we talk about. We talk about my ideas and what works and what may not work. Stacy and her team are very knowledgeable in the mobile app space and know how to bring ideas to life! I was fortunate to find them and look forward to more apps in the future!!",
    platform: "Google",
    link: "https://www.google.com/search?q=dignite+studios"
  },
  {
    name: "operation madman",
    desgination: "US",
    review: "Dignite is a studio that can be trusted! Even people like me, who are not the best when it comes to the tech business world, can come here for guidance and feel at ease. I worked with Dignite to turn my wireframes into a proper prototype. It is easily a place I would recommend to anyone wanting to build technical products themselves. I am certain they have the skills to accomplish many things, and at competitive prices too. I am grateful to everyone at the company for always being easy to reach and for making me feel as though you were close by despite us being on opposite ends of the country. Customer service was never missing. See you when I build the whole thing!!",
    platform: "Google",
    link: "https://www.google.com/search?q=dignite+studios"
  },
  {
    name: "NeighborConnector",
    desgination: "US",
    review: "Stacy and the group with Dignite Studios are awesome to work with. They take the lead to put out the best for the App that they are developing for us. They are so open to new ideas to consider too. Looking forward to an App that everyone will love to have on their phones.",
    platform: "Google",
    link: "https://www.google.com/search?q=dignite+studios"
  },
  {
    name: "David Bowen",
    desgination: "US",
    review: "Stacy and her team did a great job setting up our database and web design for us. They were very informative and easy to deal with. Highly recommended",
    platform: "Google",
    link: "https://www.google.com/search?q=dignite+studios"
  },
  {
    name: "Sherah Bassard",
    desgination: "US",
    review: "Hailey and Zane were wonderful to engage with as we explored whether Dignite was a good fit for my company's vision and goals. They were professional, warm, detailed, technically sound, prompt and deeply engaged in the process. They also offered very reasonable pricing and multiple payment plan options, breaking up the overall cost into milestones or monthly payments. Ultimately, I had some requirements for my overall project which weren't available through this company, so decided on a different company to work with. However, had we been in perfect alignment, I know it would have truly been a pleasure to work with them.",
    platform: "Google",
    link: "https://www.google.com/search?q=dignite+studios"
  },
  {
    name: "Eric Quintero",
    desgination: "US",
    review: "I have been working with them for a couple of months now and my experience has been nothing but amazing. Very reliable, trustworthy and understanding. I'm very happy to have my application being designed by dignite studios, would definitely recommend to anyone.",
    platform: "Google",
    link: "https://www.google.com/search?q=dignite+studios"
  }
];


const Testimonials = ({ header, header2, para, test: customTest }) => {
  const testimonials =  testData;

  return (
    <div id="testimonials" className="w-full grid grid-cols-1 justify-start items-start  relative z-20">
      <div className="flex relative z-20 w-[90%] md:w-[55%] flex-col text-center mx-auto items-center">
        <h2 className="text-4xl leading-10 tracking-tighter md:text-7xl font-bold ">
          The Client 
          <span className="text-[#F15C20]"> Stories</span>{" "}
        </h2>
        <p className="text-lg my-6 dark:text-white text-[#0C0C0C]">{para}</p>
      </div>
      <div className="w-full py-12 px-4 md:px-8">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
            1920: {
              slidesPerView: 6,
            },
          }}
          className="testimonial-swiper !pb-14"
        >
          {[...testimonials, ...testimonials, ...testimonials].map(
            (item, index) => (
              <SwiperSlide
                key={index}
                className="!flex !justify-center !items-center py-10"
              >
                {({ isActive }) => (
                  <Link href={item.link || "#"} target="_blank" rel="noopener noreferrer" className="block w-auto h-auto cursor-pointer focus:outline-none">
                    <div
                      className={`relative w-[258px] h-[295px] group rounded-[30px] shadow-2xl transition-all duration-500 ease-in-out ${
                        isActive
                          ? "scale-110 z-30 opacity-100 "
                          : "scale-90 opacity-40 z-10"
                      }`}
                    >
                      {/* Orange rotating background - Tilted when active */}
                      <div
                        className={`absolute top-0 left-0 w-full h-full bg-[#F15C20] rounded-[30px] transition-all ease-in-out duration-500 z-0 ${
                          isActive ? "rotate-12" : "rotate-0"
                        }`}
                      />

                      {/* White background card */}
                      <div className="absolute top-0 left-0 w-[258px] h-[295px] rounded-[30px] bg-white shadow-md z-10" />

                      {/* Content wrapper */}
                      <div className="relative z-20 flex flex-col items-center justify-start h-full p-6 text-black">
                        {/* Quote Image */}
                        <img
                          src="/location/mobile-california/quote.webp"
                          alt="quote"
                          className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 w-16"
                        />

                        {/* Text content */}
                        <div className="my-10 text-center">
                          <img
                            src="/location/mobile-california/rev.webp"
                            alt="review stars"
                            className="mx-auto mb-2"
                          />
                          <h3 className="text-base font-bold">{item.name}</h3>
                          <div className="flex items-center justify-center gap-1 mt-1 text-xs text-gray-600">
                            {item.platform === "Google" && (
                              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                <path fill="#4285F4" d="M2.5 9.5L4 4.3A1.5 1.5 0 0 1 5.4 3.2h2.4L5.5 11.2A3.5 3.5 0 0 1 2.5 9.5z"/>
                                <path fill="#EA4335" d="M7.8 3.2h2.8l-1.4 8a3.5 3.5 0 0 1-3.7-1.4L7.8 3.2z"/>
                                <path fill="#FBBC04" d="M10.6 3.2h2.8L17.3 9.8a3.5 3.5 0 0 1-3.7 1.4l-3-8z"/>
                                <path fill="#34A853" d="M13.4 3.2h5.2c.6 0 1.2.4 1.4 1l1.5 5.3a3.5 3.5 0 0 1-3 1.7L13.4 3.2z"/>
                                <path fill="#4285F4" d="M4 11v8c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-8h-2v7H6v-7H4z"/>
                                <path fill="#4285F4" d="M12 17.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5c.9 0 1.7.3 2.3.9l-1 1c-.3-.3-.7-.6-1.3-.6-1.2 0-2.1.9-2.1 2.1s.9 2.1 2.1 2.1c1.3 0 1.8-.9 1.9-1.4h-1.9v-1.2h3.3c.1.2.1.5.1.8 0 1.9-1.3 3.3-3.4 3.3z"/>
                              </svg>
                            )}
                            {item.platform === "Trustpilot" && (
                              <svg role="img" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="#00B67A" className="mr-1">
                                <path d="M17.227 16.67l2.19 6.742-7.413-5.388 5.223-1.354zM24 9.31h-9.165L12.005.589l-2.84 8.723L0 9.3l7.422 5.397-2.84 8.714 7.422-5.388 4.583-3.326L24 9.311z"/>
                              </svg>
                            )}
                            <span className="font-extrabold mt-1 text-gray-700">{item.platform}</span>
                          </div>
                        </div>

                        <p className="text-xs text-center line-clamp-4 px-2">
                          {item.review}
                        </p>
                      </div>
                    </div>
                  </Link>
                )}
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #f15c20 !important;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
