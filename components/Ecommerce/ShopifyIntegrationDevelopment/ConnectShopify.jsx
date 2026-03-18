import React from 'react';
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";

const integrations = [
  {
    title: "Shopify & Amazon\nIntegration",
    desc: "Automate product listings, synchronize inventory, update pricing in real time, and manage orders from one dashboard. This integration helps Shopify merchants expand visibility and accelerate sales on Amazon.",
    icons: ["/ecommerce/shopify-integrate/amazon.webp"], 
  },
  {
    title: "Shopify & Etsy\nIntegration",
    desc: "Connect your Shopify store with Etsy to manage products, inventory, and orders seamlessly. Keep listings synchronized while maintaining consistent branding and operations across both platforms effortlessly.",
    icons: ["/ecommerce/shopify-integrate/etsy.webp"],
  },
  {
    title: "Shopify & eBay\nIntegration",
    desc: "Connect your Shopify store with eBay to manage products, inventory, and orders seamlessly. Keep listings synchronized while maintaining consistent branding and operations across both platforms effortlessly.",
    icons: ["/ecommerce/shopify-integrate/eb.webp"], 
  },
  {
    title: "Shopify & Walmart\nIntegration",
    desc: "List products on Walmart directly from Shopify while keeping inventory and orders synchronized. Simplify multichannel management, streamline fulfillment workflows, and enhance product visibility across Walmart's marketplace.",
    icons: ["/ecommerce/shopify-integrate/wal.webp"],
  },
  {
    title: "Shopify & QuickBooks\nIntegration",
    desc: "Automate product listings, synchronize inventory, update pricing in real time, and manage orders from one dashboard. This integration helps Shopify merchants expand visibility and accelerate sales on Amazon.",
    icons: ["/ecommerce/shopify-integrate/book.webp"],
  },
  {
    title: "Shopify & HubSpot\nIntegration",
    desc: "Connect your Shopify store with Etsy to manage products, inventory, and orders seamlessly. Keep listings synchronized while maintaining consistent branding and operations across both platforms effortlessly.",
    icons: ["/ecommerce/shopify-integrate/ll.webp"],
  },
  {
    title: "Shopify & Stripe\nIntegration",
    desc: "Connect your Shopify store with Etsy to manage products, inventory, and orders seamlessly. Keep listings synchronized while maintaining consistent branding and operations across both platforms effortlessly.",
    icons: ["/ecommerce/shopify-integrate/stripe.webp"],
  },
  {
    title: "Shopify & Facebook/\nInstagram Integration",
    desc: "List products on Walmart directly from Shopify while keeping inventory and orders synchronized. Simplify multichannel management, streamline fulfillment workflows, and enhance product visibility across Walmart's marketplace.",
    icons: [
     "/ecommerce/shopify-integrate/fb.webp",
      "/ecommerce/shopify-integrate/ins.webp"
    ],
  },
];

const ConnectShopify = () => {
  return (
    <div className="w-full flex justify-center items-center py-20 px-4 mt-20 md:mt-0">
      <div className=" w-full flex flex-col items-center ">
        {/* Header Section */}
        <div className="w-full  flex flex-col items-center gap-6 text-center">
          <h2 className="text-[#1F222E] font-bold text-[40px] md:text-[56px] lg:text-[72px] leading-[105%] tracking-[-0.04em] capitalize">
            Seamlessly Connect Shopify <br className="hidden md:block" />
            With The Tools And Platforms <br className="hidden md:block" />
            Your Business Relies On
          </h2>
          <p className="text-[#0C0C0C] w-[80%] mx-auto font-light text-[16px] leading-[136%] tracking-[-0.014em]">
            Our Shopify integration services provide maximum flexibility, enabling your online store to communicate effortlessly with multiple platforms and services. From marketplaces to accounting tools, payments, and marketing, we make sure your Shopify store operates smoothly, accurately, and efficiently.
          </p>
        </div>

        {/* Cards Grid Section */}
        <div className="w-[80%] mx-auto mt-16 flex flex-wrap justify-center gap-y-12 gap-x-5   ">
          {integrations.map((item, index) => (
            <div 
              key={index} 
              className="relative w-full max-w-[245px] h-full min-h-[302px]  bg-white border border-[#D3D3D8] rounded-[26px] flex flex-col items-center pt-[60px] pb-6 px-4"
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
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact-us"
          className="flex items-center group justify-center  mt-4"
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-[14px] leading-[160%] px-6 py-[14px] rounded-full font-medium transition-colors">
            Explore the Integration Flexibility
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-[52px] h-[52px] rounded-full flex items-center justify-center transition-colors text-xl">
            <MdArrowOutward />
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default ConnectShopify;