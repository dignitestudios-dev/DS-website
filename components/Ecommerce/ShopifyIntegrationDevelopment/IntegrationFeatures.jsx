import React from 'react';
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import Marquee from "react-fast-marquee";

const features = [
  {
    title: "Product\nRecommendations",
    desc: "Show personalized product recommendations to simplify discovery, improve conversion rates, and increase average order value (AOV)."
  },
  {
    title: "Shopify Plus Clone\nStore Support",
    desc: "Customers can switch between clone stores effortlessly within the app, maintaining seamless access to multiple branded experiences."
  },
  {
    title: "Multi-Currency\nSupport",
    desc: "Enable customers to checkout in their preferred currency, simplifying purchases for global audiences and improving international sales conversions."
  },
  {
    title: "Loyalty Program",
    desc: "Enable customers to track and redeem loyalty rewards directly within the app to boost engagement and repeat purchases."
  },
  {
    title: "Single Sign-On\n/ Log In",
    desc: "Offer secure login with multiple SSO options, streamlining user access and improving retention."
  },
  {
    title: "Chat",
    desc: "Provide instant support with user-friendly in-app chat widgets, allowing customers to reach your support team anytime."
  }
];

const IntegrationFeatures = () => {
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

    <div className='mt-16 w-full overflow-hidden flex flex-col gap-6' >
        <Marquee direction="left" speed={40} pauseOnHover={true} className="py-2">
            {features.map((item, index) => (
                <div key={`top-${index}`} className="w-[280px] h-[260px] bg-white border border-[#D3D3D8] hover:border-[#F15C20] transition-colors duration-300 rounded-[12px] flex flex-col items-center justify-center p-6 mx-3 cursor-pointer gap-4">
                  <h3 className="text-[#F15C20] font-bold text-[18px] text-center whitespace-pre-line leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#0C0C0C]/80 font-extralight text-[14px] text-center leading-[136%]">
                    {item.desc}
                  </p>
                </div>
            ))}
        </Marquee>
        <Marquee direction="right" speed={40} pauseOnHover={true} className="">
            {features.map((item, index) => (
                <div key={`bottom-${index}`} className="w-[280px] h-[260px] bg-white border border-[#D3D3D8] hover:border-[#F15C20] transition-colors duration-300 rounded-[12px] flex flex-col items-center justify-center p-6 mx-3 cursor-pointer gap-4">
                  <h3 className="text-[#F15C20] font-bold text-[18px] text-center whitespace-pre-line leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#0C0C0C]/80 font-extralight text-[14px] text-center leading-[136%]">
                    {item.desc}
                  </p>
                </div>
            ))}
        </Marquee>
    </div>
        {/* <Link
          href="/contact-us"
          className="flex items-center group justify-center  mt-4"
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-[14px] leading-[160%] px-6 py-[14px] rounded-full font-medium transition-colors">
            Explore the Integration Flexibility
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-[52px] h-[52px] rounded-full flex items-center justify-center transition-colors text-xl">
            <MdArrowOutward />
          </button>
        </Link> */}
        
      </div>
    </div>
  );
};

export default IntegrationFeatures;