import React from 'react';

const Results = () => {
  return (
    <section className="relative w-full bg-[#151515] px-4 flex flex-col items-center overflow-hidden">
      <img src={"/right/ellispe.webp"} alt="Background Ellipse" className="absolute top-0 -left-1/4 w-full md:w-1/2 opacity-30 pointer-events-none z-0 mix-blend-screen" />
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-white text-[32px] md:text-[44px] font-medium font-poppins mb-6">
          Final Outcome
        </h2>
        <div className="w-full h-[400px] border border-white/10 rounded-2xl flex justify-center items-center">
          <p className="text-white/50 font-poppins">Results Showcase Placeholder</p>
        </div>
      </div>
    </section>
  );
};

export default Results;
