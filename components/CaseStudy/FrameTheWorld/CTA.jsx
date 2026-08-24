import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="-mt-12 lg:-mt-28 -mb-8 lg:-mb-16 w-full bg-white flex justify-center mb-40 px-4 md:px-10 font-poppins">
      
      {/* CTA Card Container */}
      <div className="relative w-full max-w-[1280px] h-auto md:h-[450px] bg-white border border-[#3E63EC]/40 rounded-[32px] flex flex-col md:flex-row items-center justify-between p-8 md:p-0 md:pl-12 md:pr-4 overflow-hidden shadow-sm">
        
        {/* Background Blur Effects (Simulating the green gradient flares) */}
        <div className="absolute right-[10%] md:right-[30%] top-0 bottom-0 w-[400px] opacity-30 pointer-events-none z-0">
          <div className="absolute top-[-50px] left-0 w-[200px] h-full bg-[#61CB08] blur-[60px] transform rotate-[25deg] opacity-40" />
          <div className="absolute top-[-100px] left-[100px] w-[100px] h-full bg-[#61CB08] blur-[40px] transform rotate-[25deg] opacity-50" />
        </div>

        {/* Left Content */}
        <div className="flex flex-col items-start gap-6 w-full max-w-[555px] z-10 py-10 md:py-0">
          <h2 className="font-normal text-[32px] md:text-[36px] leading-[1.1] md:leading-[40px] text-[#0C0C0C]">
           Your <span className="font-bold">Vision</span> Can Be Our Next Successful Product!
          </h2>
          <p className="font-normal text-[14px] md:text-[15px] leading-[25px] text-[#0C0C0C] opacity-90">
        The Dignite Studios team can bring your idea to life in your way. We build user focused solutions that deliver actual business value regarding strategy and design. 
          </p>
          
          {/* Button */}
          <Link href="/contact-us">
            <button className="flex flex-row items-center p-2 pl-6 gap-4 bg-gradient-to-br from-[#6CACDF] to-[#0000FE] rounded-[10px] hover:scale-105 transition-transform duration-300 shadow-md">
              <span className="font-bold text-[15px] leading-[22px] text-white">
              Let's Build Your Product
              </span>
              <div className="flex justify-center items-center w-[32px] h-[32px] bg-[#81DE76] rounded-[8px]">
                <FiArrowUpRight size={18} className="text-[#101D2D]" />
              </div>
            </button>
          </Link>
        </div>

        {/* Right Content - Phone Mockups (Placeholders) */}
        <div className="relative w-full md:w-[450px] h-[300px] md:h-full hidden lg:flex justify-center items-center z-10 mt-10 md:mt-0">
 <img src={"/frame/cta-bg.webp"} alt='CTA' className="scale-75" />
       
        </div>
      </div>

    </section>
  );
};

export default CTA;
