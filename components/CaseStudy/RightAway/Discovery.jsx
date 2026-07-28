"use client"
import React from 'react';

const Discovery = () => {
  const leftCards = [
    {
      num: '01',
      title: 'Planning & Discovery',
      desc: 'We gathered business requirements, defined project goals, prioritized features and clean roadmap for the product development',
      top: 'top-[15%] md:top-[20%]'
    },
    {
      num: '03',
      title: 'Application Development',
      desc: 'Developers built the scalable rider, driver and admin solutions by using the secure architecture and agile sprint based implementation.',
      top: 'top-[45%] md:top-[50%]'
    }
  ];

  const rightCards = [
    {
      num: '02',
      title: 'UI/UX Design',
      desc: 'Our designers also developed the intuitive wireframes, interactive prototypes and the user friendly interfaces which are quite focused on the fluent booking of ride experiences.',
      top: 'top-[15%] md:top-[20%]'
    },
    {
      num: '04',
      title: 'Testing & Launch',
      desc: 'We performed the precise testing, resolved the issues, validated the performance and then successfully launched the application with confidence.',
      top: 'top-[45%] md:top-[50%]'
    }
  ];

  return (
    <section className="relative w-full bg-[#151515] flex flex-col items-center overflow-hidden">
      <img src={"/right/ellispe.webp"} alt="Background Ellipse" className="absolute top-0 -left-1/4 w-full md:w-1/2 opacity-30 pointer-events-none z-0 mix-blend-screen" />



      {/* Header Section */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto flex flex-col items-center mb-10 px-4">
        <h2 className="text-white text-[32px] md:text-[44px] font-medium font-poppins text-center mb-6 max-w-[788px] leading-[120%] capitalize">
         Agile Development That Delivered the Results
        </h2>
        <p className="text-white text-[15px] font-poppins text-center max-w-[750px] leading-[160%] opacity-90 capitalize">
        In order to create a scalable, dependable and user friendly transportation platform, we also worked closely with clients during planning, design, programming, testing and feedback sessions while keeping the agile development approach. 
        </p>
      </div>

      {/* Main Content Area: Phone & Cards */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto h-auto md:h-[1200px] flex flex-col md:flex-row items-center justify-center mt-10 md:mt-20">

        {/* Left Cards */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative md:-top-[12%] h-auto md:h-[50%] w-[90%] md:w-[80%] gap-10 md:gap-0 z-30">
          <div className='contents md:flex md:flex-col h-full justify-between gap-10 md:gap-0' >
            {leftCards.map((card, index) => (
              <div key={index} className={`relative w-full z-30 md:w-[332px] ${index === 0 ? 'order-1' : 'order-3'}`}>

                {/* Badge (Top-Right for Left Cards) */}
                <div className="absolute -top-6 -right-6 w-[67.68px] h-[67.68px] bg-[#22B573] rounded-full hidden md:flex items-center justify-center shadow-[inset_0px_0px_6.7px_#FFFFFF] z-30">
                  <span className="text-white text-[26px] font-semibold font-poppins">{card.num}</span>
                  {/* Light reflections */}
                  <div className="absolute w-[18.6px] h-[94.6px] bg-white/50 blur-[16.9px] -rotate-[34deg] -top-3 left-2 pointer-events-none" />
                  <div className="absolute w-[18.6px] h-[99.9px] bg-white/50 blur-[16.9px] -rotate-[38deg] -top-5 left-10 pointer-events-none" />
                </div>

                {/* Mobile Badge */}
                <div className="absolute -top-4 -right-4 w-[50px] h-[50px] bg-[#22B573] rounded-full flex items-center justify-center shadow-[inset_0px_0px_4px_#FFFFFF] z-30 md:hidden">
                  <span className="text-white text-[18px] font-semibold font-poppins">{card.num}</span>
                </div>

                {/* Card Container */}
                <div className="w-full bg-[rgba(34,181,115,0.15)] rounded-[15px] p-6 md:p-8 relative overflow-hidden md:h-[187px] backdrop-blur-sm flex flex-col justify-center">
                  
                  {/* Gradient Border */}
                  <div 
                    className="absolute inset-0 rounded-[15px] pointer-events-none"
                    style={{
                      padding: '1.5px',
                      background: 'linear-gradient(149.04deg, #22B573 1.72%, rgba(34, 181, 115, 0.15) 48.87%), linear-gradient(0deg, rgba(253, 253, 253, 0.05), rgba(253, 253, 253, 0.05))',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />

                  {/* Screen Reflection Overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none rounded-[15px]" 
                    style={{
                      background: 'linear-gradient(138.48deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 55.2%)',
                      opacity: 0.5,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-start gap-3">
                    <h3 className="text-white text-[18px] font-semibold font-poppins capitalize tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-white text-[14px] font-medium font-poppins leading-[130%] opacity-85">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='contents md:flex md:flex-col h-full justify-between gap-10 md:gap-0' >
            {rightCards.map((card, index) => (
              <div key={index} className={`relative w-full z-30 md:w-[332px] ${index === 0 ? 'order-2' : 'order-4'}`}>

                {/* Badge (Top-Left for Right Cards) */}
                <div className="absolute -top-6 -left-6 w-[67.68px] h-[67.68px] bg-[#22B573] rounded-full flex items-center justify-center shadow-[inset_0px_0px_6.7px_#FFFFFF] z-30 hidden md:flex">
                  <span className="text-white text-[26px] font-semibold font-poppins">{card.num}</span>
                  {/* Light reflections */}
                  <div className="absolute w-[18.6px] h-[94.6px] bg-white/50 blur-[16.9px] -rotate-[34deg] -top-3 left-2 pointer-events-none" />
                  <div className="absolute w-[18.6px] h-[99.9px] bg-white/50 blur-[16.9px] -rotate-[38deg] -top-5 left-10 pointer-events-none" />
                </div>

                {/* Mobile Badge */}
                <div className="absolute -top-4 -left-4 w-[50px] h-[50px] bg-[#22B573] rounded-full flex items-center justify-center shadow-[inset_0px_0px_4px_#FFFFFF] z-30 md:hidden">
                  <span className="text-white text-[18px] font-semibold font-poppins">{card.num}</span>
                </div>

                {/* Card Container */}
                <div className="w-full bg-[rgba(34,181,115,0.15)] rounded-[15px] p-6 md:p-8 relative overflow-hidden md:h-[187px] backdrop-blur-sm flex flex-col justify-center">
                  
                  {/* Gradient Border */}
                  <div 
                    className="absolute inset-0 rounded-[15px] pointer-events-none"
                    style={{
                      padding: '1.5px',
                      background: 'linear-gradient(149.04deg, #22B573 1.72%, rgba(34, 181, 115, 0.15) 48.87%), linear-gradient(0deg, rgba(253, 253, 253, 0.05), rgba(253, 253, 253, 0.05))',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />

                  {/* Screen Reflection Overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none rounded-[15px]" 
                    style={{
                      background: 'linear-gradient(138.48deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 55.2%)',
                      opacity: 0.5,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-start gap-3">
                    <h3 className="text-white text-[18px] font-semibold font-poppins capitalize tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-white text-[14px] font-medium font-poppins leading-[130%] opacity-85">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Central Phone Mockup */}
        <div className="absolute z-0 my-12 md:my-0 hidden lg:flex justify-center w-full md:absolute md:left-[55%] md:-translate-x-1/2 md:top-0 pointer-events-none">
          <img
            src="/right/discovery.webp"
            alt="RightAway App Mockup"
            className="w-[90%] md:w-[749px] h-auto object-contain [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
            onError={(e) => { e.target.src = '/right/mockup.webp' }} // Fallback if name is different
          />
        </div>



      </div>

    </section>
  );
};

export default Discovery;
