import React from "react";

const stats = [
  {
    number: "50+",
    label: "Projects",
  },
  {
    number: "15+",
    label: "Global Clients",
  },
  {
    number: "8+",
    label: "Industries Served",
  },
  {
    number: "5+",
    label: "Years Experienced",
  },
];

const Impact = () => {
  return (
    <section className="w-full py-20 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 bg-white dark:bg-black">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-[40px] md:text-[64px] font-bold text-black dark:text-white leading-[1.1] mb-6">
          Our Impact In <br />
          <span className="text-[#F15C20]">Numbers</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          We've delivered exceptional results for clients worldwide, building
          reliable solutions and driving growth across industries.
        </p>
      </div>

      <div className="grid grid-cols-1 w-[70%] md:w-[80%] mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative group p-1 flex flex-col items-center justify-center text-center"
          >
            {/* Decorative Brackets */}
            {/* Top Left */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black dark:border-gray-700 pointer-events-none group-hover:border-[#F15C20] transition-colors duration-300" />
            {/* Top Right */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black dark:border-gray-700 pointer-events-none group-hover:border-[#F15C20] transition-colors duration-300" />
            {/* Bottom Left */}
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black dark:border-gray-700 pointer-events-none group-hover:border-[#F15C20] transition-colors duration-300" />
            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black dark:border-gray-700 pointer-events-none group-hover:border-[#F15C20] transition-colors duration-300" />

            <h3 className="text-[44px] font-bold text-[#F15C20] mb-2 leading-none">
              {stat.number}
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
