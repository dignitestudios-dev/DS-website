"use client";
import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const FinalOutcome = () => {
  const labels = [
    {
      id: 1,
      text: "Group Info",
      labelPosition: "top-[11.5%] right-[22%]",
      bigDotPosition: "top-[12.3%] right-[29%]",
      lineStart: "top-[13%] right-[29.5%]",
      lineWidth: "12%",
      direction: "right",
    },
    {
      id: 2,
      text: "Group Join Status",
      labelPosition: "top-[28.5%] left-[18%]",
      bigDotPosition: "top-[29.5%] left-[28.7%]",
      lineStart: "top-[30%] left-[30%]",
      lineWidth: "13%",
      direction: "left",
    },
    {
      id: 3,
      text: "Write Something Input Field",
      labelPosition: "top-[32.5%] right-[13%]",
      bigDotPosition: "top-[33.5%] right-[29%]",
      lineStart: "top-[34%] right-[30%]",
      lineWidth: "11%",
      direction: "right",
    },
    {
      id: 4,
      text: "Category Tag",
      labelPosition: "bottom-[34%] left-[17%]",
      bigDotPosition: "bottom-[34.5%] left-[25%]",
      lineStart: "bottom-[35%] left-[26%]",
      lineWidth: "14%",
      direction: "left",
    },
    {
      id: 5,
      text: "Research Link",
      labelPosition: "bottom-[29%] right-[19%]",
      bigDotPosition: "bottom-[29.5%] right-[28.8%]",
      lineStart: "bottom-[30.2%] right-[30%]",
      lineWidth: "23%",
      direction: "right",
    },
  ];

  const final = [
    "/wing/m1.png",
    "/wing/m2.png",
    "/wing/m3.png",
    "/wing/m4.png",
    "/wing/m5.png",
    "/wing/m6.png",
    "/wing/m7.png",
    "/wing/m8.png",
    "/wing/m9.png",
    "/wing/m10.png",
    "/wing/m11.png",
    "/wing/m12.png",
    "/wing/m13.png",
    "/wing/m14.png",
    // "/wing/m13.png",
    // "/bioyap/f8.png",
  ];
  return (
    <section className="w-full py-8 pb-24  relative z-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Final <span className="text-[#5BAFEB]">Outcome</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-5xl mx-auto mb-12 px-4 md:px-0"
        >
          When we started building Wing, we had many challenges to deal with.
          The Challenges were different and a lot. People don’t trust online
          dating, and the authenticity and safety are major concerns. The
          “recommend a friend” feature had to be added, but we also had to make
          sure that this feature doesn’t get misused. Our professional
          developers faced all these challenges and still overcame them all.
          Wing basically ended up being a unique space as a combination of
          dating and social networking apps. And even we didn’t expect that
          combining social proof and careful verification could create
          meaningful, trustworthy connections in today’s mobile-first world.
        </motion.p>
      </div>

    <Marquee pauseOnHover={true} className="flex gap-0">
  {final.slice(0, 7).map((frame, index) => (
    <img
      key={index}
      src={frame}
      alt="mob"
      className="w-40 md:w-60 object-contain block"
    />
  ))}
</Marquee>

<Marquee pauseOnHover={true} direction="right" className="flex gap-0">
  {final.slice(7).map((frame, index) => (
    <img
      key={index}
      src={frame}
      alt="mob"
      className="w-40 md:w-60 object-contain block"
    />
  ))}
</Marquee>


    </section>
  );
};

export default FinalOutcome;
