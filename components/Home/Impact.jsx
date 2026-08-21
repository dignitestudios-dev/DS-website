import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: "300+",
    label: "Projects",
  },
  {
    number: "450+",
    label: "Global Clients",
  },
  {
    number: "8+",
    label: "Industries Served",
  },
  {
    number: "10+",
    label: "Years Experienced",
  },
];

const AnimatedNumber = ({ value }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 150,
  });
  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest).toLocaleString(),
  );

  useEffect(() => {
    if (inView) {
      motionValue.set(numericValue);
    }
  }, [inView, numericValue, motionValue]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

const Impact = () => {
  return (
    <section className="w-full  px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 bg-white dark:bg-black">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-[40px] tracking-tighter md:text-7xl font-bold text-black dark:text-white leading-[1.1] mb-6">
          Dignite Studios Track Record
        </h2>
        <p className=" text-lg ">
          The project numbers reflect the applications we've delivered, the industries we've supported and the experience we've gained across different types of digital products. Here’s a snapshot of the projects we have worked on as an experienced Mobile App Development Company.
        </p>
      </div>

      <div className="grid grid-cols-1 w-[70%] md:w-[80%] mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative group p-1 flex flex-col items-center justify-center text-center"
          >
            {/* Decorative Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black dark:border-gray-700 pointer-events-none group-hover:border-[#F15C20] transition-colors duration-300" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black dark:border-gray-700 pointer-events-none group-hover:border-[#F15C20] transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black dark:border-gray-700 pointer-events-none group-hover:border-[#F15C20] transition-colors duration-300" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black dark:border-gray-700 pointer-events-none group-hover:border-[#F15C20] transition-colors duration-300" />

            <h3 className="text-[44px] font-bold text-[#F15C20] mb-2 leading-none">
              <AnimatedNumber value={stat.number} />
            </h3>
            <p className="text-black dark:text-black font-bold text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
