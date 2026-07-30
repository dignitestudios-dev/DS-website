"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const CardItem = ({ card, index }) => {
  const containerRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    let animationFrame;
    let isHovering = false;
    let lastTime = 0;
    
    // Store original classes to reset them later
    const originalClasses = new Map();

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      // Reset any temporarily active dots
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        if (originalClasses.has(i)) {
          dot.className = originalClasses.get(i);
        }
      });
      originalClasses.clear();
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    const animate = (time) => {
      if (isHovering) {
        if (time - lastTime > 200) { // Every 200ms
          lastTime = time;
          
          // Reset previous random dots
          dotsRef.current.forEach((dot, i) => {
            if (!dot) return;
            if (originalClasses.has(i)) {
               dot.className = originalClasses.get(i);
            }
          });
          originalClasses.clear();

          // Pick random inactive dots to light up
          const inactiveDots = [];
          dotsRef.current.forEach((dot, i) => {
            if (dot && dot.getAttribute('data-active') === 'false') {
              inactiveDots.push({ dot, index: i });
            }
          });

          // Light up a few random dots
          const numDotsToLight = Math.floor(Math.random() * 8) + 4;
          for (let k = 0; k < numDotsToLight; k++) {
            if (inactiveDots.length === 0) break;
            const randIdx = Math.floor(Math.random() * inactiveDots.length);
            const { dot, index } = inactiveDots.splice(randIdx, 1)[0];
            
            originalClasses.set(index, dot.className);
            dot.className = "w-[4px] h-[4px] rounded-full transition-colors duration-200 bg-[#65CB11] shadow-[0_0_8px_#65CB11]";
          }
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      if (element) {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const renderDotGrid = () => {
    const dots = [];
    for (let r = 0; r < 16; r++) {
      for (let c = 0; c < 12; c++) {
        const baseLine = 13 - c;
        const lineOffset = Math.floor(Math.sin(c + index) * 2);
        const lineRow = baseLine + lineOffset;
        
        const isActive = r === lineRow || (r > lineRow && Math.random() > 0.85);

        dots.push(
          <div 
            key={`${r}-${c}`} 
            ref={el => dotsRef.current[r * 12 + c] = el}
            data-active={isActive}
            className={`w-[4px] h-[4px] rounded-full transition-colors duration-300 ${isActive ? 'bg-[#65CB11] shadow-[0_0_8px_#65CB11]' : 'bg-[#65CB11]/10'}`} 
          />
        );
      }
    }
    return (
      <div className="grid grid-cols-12 gap-[10px] w-full h-full p-5 relative z-0 content-between">
        {dots}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="w-[85vw] max-w-[500px] h-auto md:h-[300px] bg-[#000B00]/5 backdrop-blur-[50px] border border-white/10 rounded-2xl p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 flex-shrink-0 snap-center cursor-pointer"
    >
      <div className="flex flex-col h-auto md:h-full justify-start md:justify-between py-2 w-full md:w-[240px]">
        <h3 className="text-white text-[18px] md:text-[20px] font-bold leading-[1.4] md:leading-[1.5] mb-2 md:mb-0">
          {card.title}
        </h3>
        <p className="text-white/80 text-[14px] md:text-[14px] font-normal leading-[1.5]">
          {card.desc}
        </p>
      </div>
      
      <div className="w-full md:w-[200px] h-[140px] md:h-full bg-[#001000] rounded-md relative flex-shrink-0 overflow-hidden pointer-events-none">
        {renderDotGrid()}
        {/* Number Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <span className="text-[#65CB11] text-[48px] md:text-[56px] font-black drop-shadow-[0_0_15px_rgba(101,203,17,0.3)]">
            {card.id}
          </span>
        </div>
      </div>
    </div>
  );
};

const Challenges = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current && scrollRef.current.firstChild) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth;
      const gap = 24; // gap-6 is 24px
      scrollRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && scrollRef.current.firstChild) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth;
      const gap = 24; // gap-6 is 24px
      scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    }
  };

  const cards = [
    {
      id: "01",
      title: "Standing Out In A Competitive Market",
      desc: "Competing Against Established Ride Hailing Brands Required Building A Platform With The Meaningful Advantages Which Encouraged Users To Switch While Creating The Long Term Trust Loyalty."
    },
    {
      id: "02",
      title: "Balancing Rider And Driver Growth",
      desc: "Launching A Successful Marketplace Required Attracting Enough Drivers To Maintain Fast Ride Availability While Encouraging Riders To Confidently Adopt A New Transportation Platform"
    },
    {
      id: "03",
      title: "Building Fair And Predictable Pricing",
      desc: "Creating The Transparent Fare Calculations With The Capped Surge Pricing Required Balancing Affordability For The Riders While Maintaining A Sustainable Earning Model For Drivers."
    },
    {
      id: "04",
      title: "Designing an Intelligent Carpool System",
      desc: "Developing efficient rider matching, route optimization and seat management was essential to deliver convenient shared transportation without increasing travel time."
    },
    {
      id: "05",
      title: "Delivering Reliable Real Time Experiences",
      desc: "Maintaining accurate GPS tracking, instant ride updates, secure payments and uninterrupted communication required a highly responsive and reliable mobile infrastructure."
    },
    {
      id: "06",
      title: "Creating a Scalable Operations Platform",
      desc: "Building an admin dashboard capable of managing drivers, riders payments, disputes, fare rules analytics and platform performance was essential for the long term business growth."
    }
  ];

  return (
    <section className="w-full relative bg-transparent py-24 z-30">
      <div className="  flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-center mb-16"
        >
          <h2 className="text-white text-[32px] md:text-[44px] font-medium tracking-wide">
            The Challenges We Solved
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="w-full relative">
          <div 
            ref={scrollRef}
            className="w-full flex flex-row items-center gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card, index) => (
              <CardItem key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex flex-row justify-center items-center p-[3px] gap-[3px] w-[109px] h-[56px] bg-[#101010] rounded-[16px] mt-8">
          <button 
            onClick={scrollLeft}
            className="flex flex-row justify-center items-center w-[50px] h-[50px] bg-[#000B00] border border-white/5 backdrop-blur-[10px] rounded-[16px] text-[#65CB11] hover:bg-[#65CB11]/10 transition-colors flex-none"
          >
            <HiOutlineArrowLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className="flex flex-row justify-center items-center w-[50px] h-[50px] bg-[#000B00] border border-white/5 backdrop-blur-[10px] rounded-[16px] text-[#65CB11] hover:bg-[#65CB11]/10 transition-colors flex-none"
          >
            <HiOutlineArrowRight size={20} />
          </button>
        </div>

      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Challenges;
