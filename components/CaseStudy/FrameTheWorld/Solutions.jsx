import React from 'react';
import { FaUserFriends, FaCogs, FaRocket, FaRecycle, FaPlane, FaKey } from 'react-icons/fa';

const Solutions = () => {
  const cards = [
    {
      id: 1,
      title: "Verified Travel Agent Platform",
      desc: "We developed a secure verification process that works through industry credentials. It makes sure that only authenticated travel professionals can access the platform.",
      icon: <FaUserFriends size={24} className="text-[#81DE76]" />
    },
    {
      id: 2,
      title: "AI Powered Image Validation",
      desc: "AI powered image recognition with automated editing workflows is integrated to detect unwanted human elements and improve image quality.",
      icon: <FaCogs size={24} className="text-[#81DE76]" />
    },
    {
      id: 3,
      title: "Smart Content Organization",
      desc: "Personalized Frames with advanced search and smart filtering make it easier for travel professionals to organize and manage destination imagery for future marketing activities.",
      icon: <FaRocket size={24} className="text-[#81DE76]" />
    },
    {
      id: 4,
      title: "Flexible Subscription Management",
      desc: "A secure subscription system was implemented with payment processing and download access. Account controls provide travel professionals with reliable content.",
      icon: <FaRecycle size={24} className="text-[#81DE76]" />
    },
    {
      id: 5,
      title: "Collaborative Travel Community",
      desc: "A trusted community was created where verified travel professionals could discover and share authentic destination photography.",
      icon: <FaPlane size={24} className="text-[#81DE76]" />
    },
    {
      id: 6,
      title: "Centralized Administrative Platform",
      desc: "Admin dashboard simplified user verification, subscription management, content moderation, analytics and reporting. It makes administration more efficient.",
      icon: <FaKey size={24} className="text-[#81DE76]" />
    }
  ];

  return (
    <section className="w-full bg-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-screen-xl mx-auto px-4 text-center mb-16">
        <h2 className="text-[32px] md:text-[44px] font-medium text-[#00161D] leading-[1.2] font-satoshi max-w-3xl mx-auto">
          How We <span className="font-bold">Solved</span> The Platform's Biggest Challenges
        </h2>
      </div>

      {/* Grid Container */}
      <div className="w-full border-t border-b border-black/10">
        <div className="max-w-[1440px] mx-auto flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            // Determine border classes based on position for a 3x2 grid
            const isRightCol = (index + 1) % 3 === 0;
            const isBottomRow = index >= 3;
            
            let borderClasses = "border-black/10 border-r last:border-r-0 md:border-r-0 md:border-b md:last:border-b-0 ";
            if (isRightCol && isBottomRow) {
               borderClasses += "lg:border-r-0 lg:border-b-0";
            } else if (isRightCol && !isBottomRow) {
               borderClasses += "lg:border-r-0 lg:border-b";
            } else if (!isRightCol && isBottomRow) {
               borderClasses += "lg:border-r lg:border-b-0";
            } else {
               borderClasses += "lg:border-r lg:border-b";
            }
            
            return (
              <div 
                key={card.id}
                className={`group flex-none w-[85vw] sm:w-[350px] md:w-auto snap-center md:snap-none flex flex-col items-center text-center p-10 gap-8 bg-white cursor-pointer transition-colors hover:bg-gray-50/50 ${borderClasses}`}
              >
                {/* Icon Wrapper */}
                <div className="relative w-[111px] h-[111px] flex-none">
                  {/* Shadow Ellipse */}
                  <div className="absolute left-[10px] top-[10px] w-[100px] h-[100px] bg-[#81DE76] rounded-full opacity-50 md:opacity-100 transition-opacity duration-300" />
                  
                  {/* Main Circle (Animates down and right on hover to simulate button press) */}
                  <div className="absolute left-0 top-0 w-[100px] h-[100px] bg-[#FFFDF9] border border-[#81DE76] rounded-full flex items-center justify-center z-10 transition-transform duration-300 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[6px]">
                    <div className="transition-transform duration-300 group-hover:scale-95">
                      {card.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 max-w-[360px] mx-auto mt-4">
                  <h3 className="font-medium text-[20px] md:text-[24px] text-[#0C0C0C]">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-[#0C0C0C] leading-[1.6]">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
