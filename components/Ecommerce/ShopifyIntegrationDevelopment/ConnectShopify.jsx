"use client"
import React from 'react';
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const integrations = [
  {
    title: "Shopify & Amazon\nIntegration",
    desc: "We implement shopify marketplaces integration to sync products, pricing and orders between Shopify and Amazon  helping businesses manage multiple sales channels easily. ",
    icons: ["/ecommerce/shopify-integrate/amazon.webp"], 
  },
  {
    title: "Shopify & Etsy\nIntegration",
    desc: "Our team enables smooth shopify marketplace integration with Etsy so business can manage the listings, inventory and orders across both the platforms without the confusion. ",
    icons: ["/ecommerce/shopify-integrate/etsy.webp"],
  },
  {
    title: "Shopify & eBay\nIntegration",
    desc: "Our team enables smooth shopify marketplace integration with ebay so business can manage the listings, inventory and orders across both the platforms without any confusion.  ",
    icons: ["/ecommerce/shopify-integrate/eb.webp"], 
  },
  {
    title: "Shopify & Walmart\nIntegration",
    desc: "In order to simplify management of our shopify marketplace integration, we plan to store product listings and order with Walmart. ",
    icons: ["/ecommerce/shopify-integrate/wal.webp"],
  },
  {
    title: "Shopify & QuickBooks\nIntegration",
    desc: "By easily synchronising orders, invoices and customer data with the accounting systems our QuickBooks Shopify Integration minimises manual labour and improves the financial accuracy. ",
    icons: ["/ecommerce/shopify-integrate/book.webp"],
  },
  {
    title: "Shopify & HubSpot\nIntegration",
    desc: "We link customer data with the marketing tools using the Hubspot Shopify Integration to automate campaigns, increase engagement and monitor the performance activity. ",
    icons: ["/ecommerce/shopify-integrate/ll.webp"],
  },
  {
    title: "Shopify & Stripe\nIntegration",
    desc: "Our experts implement Shopify Stripe Integration to provide secure payment processing, fast checkout and smooth transactions for the customers across different regions. ",
    icons: ["/ecommerce/shopify-integrate/stripe.webp"],
  },
  {
    title: "Shopify & Facebook/\nInstagram Integration",
    desc: "In order to manage campaigns, produce shoppable content and assist companies in boosting sales through the social Ecommerce channels, we link Shopify with social media platforms.   ",
    icons: [
     "/ecommerce/shopify-integrate/fb.webp",
      "/ecommerce/shopify-integrate/ins.webp"
    ],
  },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
};

const ConnectShopify = () => {
  return (
    <div className="w-full flex justify-center items-center py-20 px-4 mt-20 md:mt-0">
      <div className=" w-full flex flex-col items-center ">
        {/* Header Section */}
        <div className="w-full  flex flex-col items-center gap-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#1F222E] font-bold text-[40px] md:text-[56px] lg:text-[72px] leading-[105%] tracking-[-0.04em] capitalize"
          >
            Platform Integration <span className="text-[#F15C20]" >Flexibility</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#0C0C0C] w-[80%] mx-auto font-light leading-[136%] tracking-[-0.014em]"
          >
     Our Shopify Integration Services assist companies in integrating Shopify with the platforms and technologies they use on a daily basis. Such links can enhance accuracy, reduce manual labour and enable smooth system communication. From marketplaces to payments and marketing tools, we ensure your store runs efficiently and supports the business growth.  
          </motion.p>
        </div>

        {/* Cards Grid Section */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-[80%] mx-auto mt-16 flex flex-wrap justify-center gap-y-16 gap-x-5"
        >
          {integrations.map((item, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "#F15C20" 
              }}
              className="relative w-full max-w-[245px] h-full min-h-[302px] bg-white border border-[#D3D3D8] rounded-[26px] flex flex-col items-center pt-[60px] pb-6 px-4 transition-colors duration-300"
            >
              <div className="absolute -top-[42px] h-[84px] flex items-center justify-center w-full">
                <div className="flex gap-5 items-center">
                  <div 
                    className="w-[84px] h-[84px] bg-[#F6F6F6] rounded-full flex items-center justify-center shadow-sm border-[3px] border-white relative"
                    style={{ zIndex: 40 }}
                  >
                    <img src="/ecommerce/shopify-integrate/shopify.webp" alt="Shopify" className="w-[40px] h-[40px] object-contain " />
                  </div>
                  
                  {item.icons.map((url, i) => (
                    <div 
                      key={i} 
                      className="w-[84px] h-[84px] bg-[#F6F6F6] rounded-full flex items-center justify-center shadow-sm border-[3px] border-white -ml-8 relative"
                      style={{ zIndex: 30 - i }}
                    >
                      <img src={url} alt="Brand icon" className="w-[40px] h-[40px] object-contain " />
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="font-bold text-[18px] text-[#1F222E] leading-[105%] tracking-[-0.04em] text-center mb-3 whitespace-pre-line">
                {item.title}
              </h3>
              
              <p className="font-extralight text-[14px] text-[#0C0C0C]/80 leading-[136%] tracking-[-0.014em] text-center">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <Link
            href="/contact-us"
            className="flex items-center group justify-center mt-12"
            >
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-[14px] leading-[160%] px-6 py-[14px] rounded-left-full rounded-full font-medium transition-colors">
                Explore the Integration Flexibility 
            </button>
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-[52px] h-[52px] rounded-right-full rounded-full flex items-center justify-center transition-colors text-xl">
                <MdArrowOutward />
            </button>
            </Link>
        </motion.div>
        
      </div>
    </div>
  );
};

export default ConnectShopify;