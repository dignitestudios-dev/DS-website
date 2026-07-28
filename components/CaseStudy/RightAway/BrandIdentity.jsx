import React from 'react';

const BrandIdentity = () => {
  return (
    <section className="relative w-full bg-[#151515] flex flex-col items-center overflow-hidden">
      <img src={"/right/ellispe.webp"} alt="Background Ellipse" className="absolute top-0 -left-1/4 w-full md:w-1/2 opacity-30 pointer-events-none z-0 mix-blend-screen" />
      {/* Background Blurs */}
      <div className="absolute w-[479px] h-[647px] bg-[rgba(34,181,115,0.15)] blur-[75px] -rotate-[21.83deg] -left-[200px] top-[150px] pointer-events-none" />
      <div className="absolute w-[479px] h-[647px] bg-[rgba(34,181,115,0.15)] blur-[75px] -rotate-[169.16deg] -right-[150px] top-[89px] pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center z-10 px-4">
        {/* Header */}
        <div className="flex flex-col items-center gap-[30px] w-full max-w-[788px] mb-20 text-center">
          <h2 className="w-full text-white text-[32px] md:text-[44px] font-medium font-poppins leading-[120%] capitalize">
            Building a Brand That Reflects Speed and Trust
          </h2>
          <p className="w-full max-w-[750px] text-white text-[14px] md:text-[15px] font-poppins font-normal leading-[160%]">
            RightAway’s visual identity combines modern typography, clean layouts, intuitive interfaces and consistent branding to communicate reliability, speed and accessibility while delivering cohesive experience across every platform.
          </p>
        </div>

        {/* Typography Section */}
        <div className="relative w-full flex flex-col items-center justify-center mb-20 max-w-[1018px]">
          <h3 className="text-white text-[60px] sm:text-[100px] md:text-[159px] font-extrabold font-poppins leading-[1.1] md:leading-[137%] uppercase tracking-tighter">
            GILROYBOLD
          </h3>
          
          {/* Floating Badges */}
          {/* Light */}
          <div className="absolute top-[20%] md:top-[15%] left-0 md:left-[5%] rotate-[-5.65deg] px-4 py-2 md:py-[8.5px] bg-[rgba(255,255,255,0.45)] backdrop-blur-sm rounded-[36px] flex items-center justify-center">
            <span className="text-[#0D0D0D] font-poppins font-light text-[12px] md:text-[17px] capitalize">Light</span>
          </div>
          
          {/* Regular */}
          <div className="absolute top-[60%] md:top-[50%] left-[20%] md:left-[22%] rotate-[6.83deg] px-4 py-2 md:py-[8.5px] bg-[rgba(34,181,115,0.45)] backdrop-blur-sm rounded-[36px] flex items-center justify-center">
            <span className="text-white font-poppins font-normal text-[12px] md:text-[14px] capitalize">Regular</span>
          </div>

          {/* Medium */}
          <div className="absolute top-[80%] md:top-[60%] left-[45%] md:left-[45%] rotate-[6.4deg] px-4 py-2 md:py-[8.5px] bg-[rgba(255,255,255,0.45)] backdrop-blur-sm rounded-[36px] flex items-center justify-center z-10">
            <span className="text-[#0D0D0D] font-poppins font-medium text-[12px] md:text-[17px] capitalize">Medium</span>
          </div>

          {/* Semi-Bold */}
          <div className="absolute top-[75%] md:top-[70%] right-[15%] md:right-[20%] rotate-[-16.28deg] px-4 py-2 md:py-[8.5px] bg-[rgba(34,181,115,0.45)] backdrop-blur-sm rounded-[36px] flex items-center justify-center z-10">
            <span className="text-white font-poppins font-semibold text-[12px] md:text-[17px] capitalize">Semi-Bold</span>
          </div>

          {/* Bold */}
          <div className="absolute top-[10%] md:top-[17%] right-[-5%] md:right-[0%] rotate-[17.06deg] px-4 py-2 md:py-[8.5px] bg-[rgba(255,255,255,0.45)] backdrop-blur-sm rounded-[36px] flex items-center justify-center">
            <span className="text-[#0D0D0D] font-poppins font-bold text-[12px] md:text-[17px] capitalize">Bold</span>
          </div>
        </div>

        {/* Letters Section */}
        <div className="w-full flex flex-col items-start max-w-[1120px] mb-20 md:pl-20">
          <p className="text-white font-poppins font-normal text-[16px] md:text-[20px] leading-[160%] tracking-[0.02em] uppercase break-words w-full">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </p>
          <p className="text-white font-poppins font-normal text-[16px] md:text-[20px] leading-[160%] tracking-[0.02em] lowercase break-words w-full">
            abcdefghijklmnopqrstuvwxyz
          </p>
          <p className="text-white font-poppins font-normal text-[16px] md:text-[20px] leading-[160%] tracking-[0.02em]">
            123456789
          </p>
        </div>

        {/* Color Palette */}
        <div className="w-full max-w-[1200px] flex flex-row flex-wrap justify-center items-center gap-[20px]">
          {/* Black */}
          <div className="w-full sm:w-[241px] h-[131px] bg-[#000000] rounded-[25px] relative flex justify-center border border-white/5 shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <span className="absolute bottom-6 text-white font-poppins font-normal text-[16px] md:text-[20px] tracking-[0.02em] uppercase">
              #000000
            </span>
          </div>
          {/* Light Gray */}
          <div className="w-full sm:w-[241px] h-[131px] bg-[#F0F0F0] rounded-[25px] relative flex justify-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <span className="absolute bottom-6 text-[#000000] font-poppins font-normal text-[16px] md:text-[20px] tracking-[0.02em] uppercase">
              #F0F0F0
            </span>
          </div>
          {/* Green */}
          <div className="w-full sm:w-[241px] h-[131px] bg-[#22B573] rounded-[25px] relative flex justify-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <span className="absolute bottom-6 text-white font-poppins font-normal text-[16px] md:text-[20px] tracking-[0.02em] uppercase">
              #22B573
            </span>
          </div>
          {/* Teal */}
          <div className="w-full sm:w-[241px] h-[131px] bg-[#03958A] rounded-[25px] relative flex justify-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <span className="absolute bottom-6 text-white font-poppins font-normal text-[16px] md:text-[20px] tracking-[0.02em] uppercase">
              #03958A
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandIdentity;
