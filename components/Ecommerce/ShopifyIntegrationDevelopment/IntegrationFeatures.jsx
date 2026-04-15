import React from 'react';
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import Marquee from "react-fast-marquee";

const features = [
  {
    title: "Multi Currency\nSupport",
    desc: "The ability for customers to check out in the currency of their choice really facilitates international purchases and increases the global sales conversion rates"
  },
  {
    title: "Subscriptions",
    desc: "Direct creation and management of recurring product subscriptions by users within the app guarantees businesses convenience and consistent revenue. "
  },
  {
    title: "Shopify Plus Clone\nStore Support",
    desc: "Customers can switch between multiple store versions within the app while maintaining fluent access to products and services. "
  },
  {
    title: "Chat",
    desc: "Customers can connect with support teams instantly using simple in app chat features while shopify integration with Hubspot for quick help and better user experience. "
  },
  {
    title: "Filtering &\nMerchandising",
    desc: "Advanced filters help users find products quickly, improving navigation and increasing engagement and conversions across the store. "
  },
  {
    title: "Pick Up\nIn Store",
    desc: "By placing purchases online and picking up the goods from the local stores, customers may shop more swiftly and quite easily."
  },
  {
    title: "Product\nRecommendations",
    desc: "The app shows personalized product suggestions based on the user behaviour, improving product discovery and increasing the average order value."
  },
  {
    title: "Loyalty Program",
    desc: "To promote the recurring purchases, users may also track rewards, earn points and redeem the offers right within the app. "
  },
  {
    title: "Single Sign On/\nLog In",
    desc: "Secure login options allow users to access accounts quickly, improving user experience and increasing customer retention rates. "
  },
  {
    title: "Analytics",
    desc: "Based on the actual consumer data insights, businesses may also monitor app performance, track the user behaviour and also to make the better decisions"
  },
  {
    title: "Ads",
    desc: "Track and optimize advertising campaigns directly through the app to improve targeting engagement and overall return to investment. "
  },
  {
    title: "Multi Language\nSupport",
    desc: "Support for multiple languages help businesses reach global audiences and provide better shopping experiences for diverse customers. "
  },
  {
    title: "Email Marketing",
    desc: "Connect email campaigns with app notifications to deliver timely and personalized messages that improve engagement and conversions. "
  },
  {
    title: "Reviews",
    desc: "Customers can read and submit product reviews easily, building trust and helping others to make better purchasing decisions. "
  },
  {
    title: "Metafields\nIntegration",
    desc: "Metafields keep product information consistent between website and app, while shopify integration with Hubspot ensures smooth performance and better content management. "
  },
  {
    title: "Search",
    desc: "Advanced search functionality helps customers find products faster, improving user experience and boosting overall conversion rates."
  },
  {
    title: "Shoppable\nInstagram",
    desc: "Customers can buy products directly through Instagram posts, creating a smooth and engaging social shopping experience."
  },
  {
    title: "Instant Checkout",
    desc: "Fast checkout process reduces cart abandonment and allows customers to complete purchases quickly and securely. "
  },
  {
    title: "Blogs",
    desc: "Businesses can share blog content within the app to engage users, provide value and improve brand awareness. "
  },
  {
    title: "In App\nDiscounts",
    desc: "Offer exclusive discounts within the app to attract customers, increase engagement and encourage repeat purchases. "
  },
  {
    title: "Product Drops",
    desc: "Launch limited products directly through the app to create excitement and increase the engagement."
  },
  {
    title: "Cloud Messaging",
    desc: "Send push notifications with the updates and offers to keep customers informed and improve ongoing engagement. "
  },
  {
    title: "Wishlist Sync",
    desc: "Customers can save products and access their wishlist across devices, helping them track items and complete purchases later. "
  }
];

const IntegrationFeatures = () => {
  return (
    <div className="w-full flex justify-center items-center py-20 px-4 mt-20 md:mt-0">
      <div className=" w-full flex flex-col items-center ">
        {/* Header Section */}
        <div className="w-full  flex flex-col items-center gap-6 text-center">
          <h2 className="text-[#1F222E] font-bold text-[40px] md:text-[56px] lg:text-[72px] leading-[105%] tracking-[-0.04em] capitalize">
            Shopify Mobile App Integration Features 
          </h2>
          <p className="text-[#0C0C0C] w-[80%] mx-auto font-light text-[16px] leading-[136%] tracking-[-0.014em]">
         Enhance your Ecommerce experience with our Shopify mobile app integrations. These features improve the shopping, simplify processes and boost the engagement. From checkout and marketing to the analytics and loyalty tools, we help businesses deliver smooth and consistent experiences across the mobile and web platforms.
          </p>
        </div>

    <div className='mt-16 w-full overflow-hidden flex flex-col gap-6' >
        <Marquee direction="left" speed={40} pauseOnHover={true} className="py-2">
            {features.slice(0,10).map((item, index) => (
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
            {features.slice(10).map((item, index) => (
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
        <Link
          href="/contact-us"
          className="flex items-center group justify-center  mt-4"
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-[14px] leading-[160%] px-6 py-[14px] rounded-full font-medium transition-colors">
            Explore Shopify Mobile App Integration
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-[52px] h-[52px] rounded-full flex items-center justify-center transition-colors text-xl">
            <MdArrowOutward />
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default IntegrationFeatures;