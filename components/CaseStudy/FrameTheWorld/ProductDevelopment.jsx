import React from 'react';
import { FaUserAlt, FaChartBar, FaFacebookMessenger } from 'react-icons/fa';

const ProductDevelopment = () => {
  const cards = [
    {
      id: 1,
      title: "Product Discovery",
      desc: "The process began by understanding the goals and product vision to define the platform’s foundation."
    },
    {
      id: 2,
      title: "Requirement Analysis",
      desc: "The gathered insights were translated into clear business requirements and a structured development roadmap."
    },
    {
      id: 3,
      title: "UI/UX Design",
      desc: "Our team designed intuitive interfaces that made content discovery and management simple on different devices."
    },
    {
      id: 4,
      title: "Agile Development",
      desc: "The platform was developed in iterative sprints, allowing continuous improvements and regular feedback throughout the process."
    }
  ];

  return (
    <section className="w-full relative bg-white overflow-hidden flex flex-col items-center z-10">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-20 flex flex-col items-center gap-16 relative z-10 w-full">
        <img src={"/frame/bg-2.webp"} alt="map" className='w-full absolute -top-[10%] object-cover opacity-60 z-0' />
        
        {/* Product Development Process Header */}
        <div className="text-center flex flex-col gap-6 max-w-5xl relative z-10 mt-10">
          <h2 className="text-[32px] md:text-[44px] font-medium text-[#0C0C0C] capitalize">
            <span className="font-bold">Product</span> Development Process
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#0C0C0C] leading-[1.6] text-center">
            We worked on this project through the Agile development approach. It started with product discovery and business requirement analysis. Then came iterative UI/UX design and moved to sprint based development.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative z-10">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="relative flex flex-col justify-start p-8 pt-20 min-h-[350px] bg-[#B2B2B2]/10 border border-black/5 backdrop-blur-[25px] rounded-[16px] overflow-hidden shadow-sm"
            >
              {/* Badge */}
              <div className="absolute top-0 right-0 w-[56px] h-[56px] bg-[#3758EE] rounded-bl-[16px] flex items-center justify-center">
                <span className="text-white text-[24px]">
                  0{card.id}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[#0C0C0C] font-bold text-[24px] leading-[26px]">
                  {card.title}
                </h3>
                <p className="text-[#0C0C0C]/80 text-[14px] leading-[1.4]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Discovery & Research Header */}
        <div className="text-center flex flex-col gap-6 max-w-5xl relative z-10 mt-10">
          <h2 className="text-[32px] md:text-[44px] leading-[38px] font-medium text-[#0C0C0C] capitalize text-center">
            How <span className="font-bold">Discovery</span> and Research Shaped the Project
          </h2>
        </div>

        {/* 3 Columns Section */}
        <div className="flex flex-col lg:flex-row w-full rounded-[16px] overflow-hidden shadow-xl border border-gray-100/50 relative z-10">
          
          {/* Column 1 */}
          <div className="flex-1 flex flex-col items-center p-10 md:p-14 bg-[#3D61EC] text-center gap-6">
            <div className="w-[78px] h-[78px] min-h-[78px] bg-white rounded-full flex items-center justify-center text-[#3D61EC] text-3xl shadow-sm">
              <FaUserAlt />
            </div>
            <h3 className="text-white font-bold text-[24px] leading-tight">
              Understanding Industry Needs
            </h3>
            <p className="text-white/90 text-[14px] leading-[1.6]">
              The research revealed a growing need for authentic travel imagery for destination marketing by professionals. Travel agents can struggle to find reliable visuals with high quality that are legally available and accurately represent the experience.
            </p>
          </div>
          
          {/* Column 2 */}
          <div className="flex-1 flex flex-col items-center p-10 md:p-14 bg-[#6CACDF] text-center gap-6">
            <div className="w-[78px] h-[78px] min-h-[78px] bg-white rounded-full flex items-center justify-center text-[#6CACDF] text-3xl shadow-sm">
              <FaChartBar />
            </div>
            <h3 className="text-white font-bold text-[24px] leading-tight">
              Market Analysis
            </h3>
            <p className="text-white/90 text-[14px] leading-[1.6]">
              Stock image libraries and photo sharing platforms were evaluated in order to understand where they lack. They rarely focus on the needs of verified travel professionals. Most lack industry specific organization and collaborative features.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex-1 flex flex-col items-center p-10 md:p-14 bg-white text-center gap-6">
            <div className="w-[78px] h-[78px] min-h-[78px] bg-white border-2 border-[#3D61EC] rounded-full flex items-center justify-center text-[#3D61EC] text-3xl shadow-sm">
              <FaFacebookMessenger />
            </div>
            <h3 className="text-[#3D61EC] font-bold text-[24px] leading-tight">
              Insights Gathered
            </h3>
            <p className="text-[#3D61EC]/90 text-[14px] leading-[1.6]">
              These insights shaped Frame The World into a platform that’s specific for verified travel professionals. AI assisted image validation and collaborative destination discovery became the foundation of the experience.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductDevelopment;
