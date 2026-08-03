"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaLightbulb } from 'react-icons/fa';

const Challenges = () => {
  const problems = [
    {
      num: "01",
      title: "Fragmented Construction Material Procurement",
      desc: "Customers struggled to find and purchase construction materials efficiently. Buyers had to contact multiple suppliers, compare prices manually, and had limited visibility into product availability and order progress, making procurement slow and frustrating."
    },
    {
      num: "02",
      title: "Inefficient Supplier & Inventory Management",
      desc: "Suppliers lacked a centralized system to manage products and orders. Inventory updates, pricing changes, and order processing were handled across multiple tools or manually, leading to stock inaccuracies, delayed fulfillment, and increased administrative workload."
    },
    {
      num: "03",
      title: "Uncoordinated Delivery Operations",
      desc: "Delivery operations were difficult to coordinate and monitor. Delivery personnel had no optimized workflow for navigation, order tracking, or proof of delivery, resulting in delays, poor communication, and inconsistent customer experiences."
    },
    {
      num: "04",
      title: "Insecure Payment & Limited Order Visibility",
      desc: "Customers had concerns about payment security and order transparency. The absence of secure payment processing and real-time order updates reduced customer confidence and made it difficult to track purchases from checkout to delivery."
    },
    {
      num: "05",
      title: "Lack of Centralized Platform Administration",
      desc: "Business operations were fragmented across multiple management systems. Administrators lacked a single platform to oversee users, suppliers, deliveries, disputes, payments, and reporting, making daily operations inefficient and limiting scalability."
    }
  ];

  const solutions = [
    {
      num: "01",
      title: "Centralized Material Marketplace",
      desc: "We built a centralized marketplace where customers can browse construction materials, compare products, place orders and choose between doorstep delivery or supplier pickup. The platform makes purchasing simple while giving users complete visibility throughout the ordering process."
    },
    {
      num: "02",
      title: "Supplier Management Portal",
      desc: "To assist companies in managing items, inventory, pricing, incoming orders and fulfillment activities from the single , central dashboard, a specialised supplier site was created. As a result, providers can also respond to client demand more effectively and through the less human labour."
    },
    {
      num: "03",
      title: "Smart Delivery Coordination",
      desc: "We developed a rider application which improves delivery tasks through live order tracking, efficient route navigation, real-time notifications and proof of delivery. This also helps delivery personnel complete orders accurately while keeping customers informed throughout the journey."
    },
    {
      num: "04",
      title: "Secure Ordering & Payments",
      desc: "To ensure dependable and secure transactions, secure payment features were incorporated. From the translation to the successful delivery, customers may also track their items in the real time, get timely status and take pleasure in the transparent shopping experience."
    },
    {
      num: "05",
      title: "Comprehensive Administration",
      desc: "A centralized super admin dashboard gives administrators complete control over the users, suppliers, product categories, deliveries, disputes, payments, reports and platform performance, making daily operations easier to manage while supporting the future business expansion."
    }
  ];

  return (
    <section className="relative w-full bg-[#151515] px-4 flex flex-col items-center overflow-hidden">
      <img src={"/right/ellispe.webp"} alt="Background Ellipse" className="absolute top-0 -left-1/4 w-full md:w-1/2 opacity-30 pointer-events-none z-0 mix-blend-screen" />
      {/* Header */}
      <div className="w-full max-w-[788px] mx-auto flex flex-col items-center text-center gap-6 mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-[32px] md:text-[44px] font-medium font-poppins leading-[120%]"
        >
        Providing a Dependable Transportation System
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white text-[15px] font-poppins leading-[160%] max-w-[900px]"
        >
        
          A scalable architecture which could provide consistent performance across all the user experiences was quite necessary which provided the connected platform accommodate drivers, riders, businesses and administrators. 
        </motion.p>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-[1200px] bg-[rgba(34,181,115,0.15)] rounded-[42px] mx-auto p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-10 md:gap-0">

        {/* Central Glow Pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[646px] h-[300px] md:h-[631px] bg-[#22B573] opacity-30 blur-[100px] pointer-events-none rounded-full" />

        {/* Central Vertical Line (Desktop only) */}
        <div className="hidden md:block absolute top-[10%] bottom-[10%] left-1/2 w-[1px] bg-gradient-to-r from-transparent via-[#22B573] to-transparent -translate-x-1/2 pointer-events-none" />

        {/* Problems Column */}
        <div className="flex-1 flex flex-col relative z-10 md:pr-10 lg:pr-16">
          {/* Header */}
          <div className="flex flex-col items-start gap-4 mb-12">
            <div className="w-[50px] h-[50px] rounded-[30px] bg-[rgba(255,255,255,0.25)] shadow-[0px_0px_21.4286px_rgba(235,40,40,0.45)] flex items-center justify-center">
              <FaExclamationTriangle className="text-red-500 text-[20px]" />
            </div>
            <h3 className="text-white text-[26px] font-medium font-poppins leading-[120%]">
              Challenges We Overcame
            </h3>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-[20px]">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`w-full max-w-[332px] bg-[rgba(57,76,67,0.25)] rounded-[15px] p-6 relative overflow-hidden backdrop-blur-sm ${index % 2 === 1 ? 'self-end' : 'self-start'}`}
              >
                {/* Screen Reflection Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(138.48deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 55.2%)',
                    opacity: 0.5
                  }}
                />
                <div className="absolute top-2 left-4 w-[48px] h-[48px]  rounded-bl-[15px] flex items-center justify-center z-20">
                  <span className="text-white/30 text-[26px] font-medium font-poppins">{item.num}</span>
                </div>
                <div className="relative z-10 flex flex-col gap-[16px] mt-6">
                  <h4 className="text-white text-[14px] font-medium font-poppins leading-[120%] tracking-[-0.04em]">
                    {item.title}
                  </h4>
                  <p className="text-white/95 text-[12px] font-poppins font-normal leading-[130%] tracking-[-0.0041em]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Divider */}
        <div className="w-full h-[1px] bg-white/20 md:hidden my-4 relative z-10" />

        {/* Solutions Column */}
        <div className="flex-1 flex flex-col relative z-10 md:pl-10 lg:pl-16">
          {/* Header */}
          <div className="flex flex-col items-start gap-4 mb-12">
            <div className="w-[50px] h-[50px] rounded-[30px] bg-[rgba(255,255,255,0.25)] shadow-[0px_0px_21.4286px_rgba(34,181,115,0.45)] flex items-center justify-center">
              <FaLightbulb className="text-[#22B573] text-[20px]" />
            </div>
            <h3 className="text-white text-[26px] font-medium font-poppins leading-[120%]">
              Smart Solutions That Powered RightAway
            </h3>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-[20px]">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`w-full max-w-[332px] bg-[rgba(57,76,67,0.25)] rounded-[15px] p-6 relative overflow-hidden backdrop-blur-sm ${index % 2 === 1 ? 'self-end' : 'self-start'}`}
              >
                {/* Screen Reflection Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(138.48deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 55.2%)',
                    opacity: 0.5
                  }}
                />
                <div className="absolute top-2 left-4 w-[48px] h-[48px]  rounded-bl-[15px] flex items-center justify-center z-20">
                  <span className="text-white/50 text-[26px] font-medium font-poppins">{item.num}</span>
                </div>
                <div className="relative z-10 flex flex-col gap-[16px] mt-6">
                  <h4 className="text-white text-[14px] font-medium font-poppins leading-[120%] tracking-[-0.04em]">
                    {item.title}
                  </h4>
                  <p className="text-white/95 text-[12px] font-poppins font-normal leading-[130%] tracking-[-0.0041em]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Challenges;
