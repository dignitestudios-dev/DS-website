'use client';

import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const AboutUsStory = () => {
  return (
    <div 
      style={{
        // height: "20%",
        // aspectRatio: "3/2",
        clipPath: "ellipse(100% 100% at 50% 100%)",
        background: "#222222",
        width: "100%",
      }}
      className="flex items-center justify-center px-6 py-24 "
    >
      {/* Content */}
      <div className="max-w-5xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-12">
          Our <span className="text-[#F15C20]">Story</span>
        </h2>

        <div className="space-y-5 text-white text-sm md:text-lg leading-relaxed mb-10">
          <p>
          Dignite Studios starts with a clear vision: to provide carefully crafted digital products that are not just put together. To guarantee performance, scalability, and long-term value, we also adopted a nearly 100% custom development methodology, building each application from the ground up. What started out as the local founding team has expanded into a global network of more than 200 tech experts. The group of engineers, designers, and UX strategists works together to transform complex ideas into digital solutions. We also now collaborate with multiple startups, scale-ups, and large companies to deliver significant outcomes across mobile app development, web applications, digital marketing, and more
          </p>

          <p>
             Customers pick us not just for the goods we make but also for the way we do business. From the first discovery to post-launch assistance, we keep a close track throughout the entire process. It is pretty transparent and also has defined goals. The solid, long-lasting connections and the exceptional client satisfaction mainly come from the commitment.
          </p>

          <p>
            The Dignite studios also deliver digital services that empower organizations for now while preparing them for future prospects through accuracy, collaboration, and priority through provable impact.  
          </p>
        </div>

        <div className="flex items-center group justify-center ">
          <button className="bg-[#F15C20] group-hover:bg-orange-600 text-white text-sm md:text-base px-7 py-3 rounded-full font-medium transition-colors">
            Contact Us
          </button>
          <button className="bg-[#F15C20] group-hover:bg-orange-600 text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsStory;