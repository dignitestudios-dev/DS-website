"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const imgs = [
  "/about/i1.png",
  "/about/i2.png",
  "/about/i3.png",
  "/about/i4.png",
  "/about/i5.png",
];

const SocialProof = () => {
  return (
   <section className="w-full grid grid-cols-1 gap-y-8 justify-start items-start lg:pt-20 ">
      <div className="w-[90%] md:w-[65%] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Social Proof <span className="text-orange-500">& Recognition</span>
          </h2>

          {/* Text split like Global Presence */}
          <div className="text-gray-600 text-sm md:text-lg leading-relaxed space-y-4 max-w-5xl mx-auto">
          Clients across the United States rely on Dignite Studios. It is acknowledged by top internet review sites for its reputation as dependable and for providing superior digital solutions. Our work is consistently commended for its technical brilliance, teamwork, and ability to achieve corporate objectives through accuracy and simplicity.
Moreover, we are very honored to be highlighted for our expertise in digital services, backed by glowing client endorsements and a solid portfolio of accomplished projects. Startups are reasonably well-established businesses from the very start; our partners also appreciate the extreme technological competence, professional insights, and open communication. They also have faith in the staff. Many of our clients also stick with us over the very long run. 
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-12">
          <Marquee
            autoFill
            pauseOnHover
            gradient={false}
            className="flex items-center"
          >
            {imgs.map((src, index) => (
              <div
                key={index}
                className="mx-6 sm:mx-8 flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Client Logo ${index + 1}`}
                  className="h-14 sm:h-16 md:h-20 object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
