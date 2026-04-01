"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt, FaCreditCard, FaGift, FaUtensils, FaBox, FaBell, FaRoute, FaHistory, FaUserCheck, FaChartLine, FaUsers, FaEye, FaMoneyBillWave, FaBullhorn, FaHeadset } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const tabConfig = [
  {
    id: "customer",
    title: "Customer Panel",
    image: "/industries/food-industry/1.webp",
    features: [
      {
        title: "Expanded Browsing",
        desc: "Customers can easily explore a variety of restaurants and cuisines with our app. The app is basically providing easier options for discovering new food quick and conveniently.",
        icon: <FaSearch />,
      },
      {
        title: "Search and Filter Menus",
        desc: "Users can quickly find their favorite dishes using search and filter options. The app makes ordering faster and easier.",
        icon: <FaUtensils />,
      },
      {
        title: "Creating Orders",
        desc: "Your customers can place orders quickly through the application. The app our food delivery app development company builds ensures a smooth and convenient ordering experience every time.",
        icon: <FaShoppingCart />,
      },
      {
        title: "Order Tracking",
        desc: "Users can track their orders live. The app shows transparency by keeping the customers informed and ensuring timely delivery every time.",
        icon: <FaMapMarkerAlt />,
      },
      {
        title: "Expanded Payment Options",
        desc: "Customers can choose from various secure payment methods. The app offers quick and safer transactions for every order.",
        icon: <FaCreditCard />,
      },
      {
        title: "Discount and Loyalty Programs",
        desc: "The app our food delivery app development company builds, gives customers rewards and special offers and it encourages repeat orders and keeps them coming back.",
        icon: <FaGift />,
      },
    ],
  },
  {
    id: "restaurant",
    title: "Restaurant Panel",
    image: "/industries/food-industry/3.webp",
    features: [
      {
        title: "Inventory Management",
        desc: "The app helps restaurants track stock and manage inventory efficiently. So the supplies are updated. It reduces shortages.",
        icon: <FaBox />,
      },
      {
        title: "Order Management",
        desc: "The app helps restaurants manage orders smoothly and send live updates to customers. It means everyone is informed.",
        icon: <FaBell />,
      },
      {
        title: "Deals and Promotions",
        desc: "Restaurants can create special offers and promotions. The app built by our food delivery app development company attracts customers and encourages more orders.",
        icon: <FaBullhorn />,
      },
      {
        title: "Feedback Management",
        desc: "Businesses can manage customer feedback. Helping you improve services and enhance satisfaction.",
        icon: <FaHeadset />,
      },
    ],
  },
  {
    id: "delivery",
    title: "Delivery Partner Panel",
    image: "/industries/food-industry/2.webp",
    features: [
      {
        title: "Incoming Orders",
        desc: "The app lets restaurants manage incoming orders easily. They can accept or decline orders quickly to ensure smooth operations.",
        icon: <FaBell />,
      },
      {
        title: "Optimized Route Navigation",
        desc: "Delivery agents can find the fastest routes through the food delivery app development. It ensures timely deliveries and improves overall efficiency.",
        icon: <FaRoute />,
      },
      {
        title: "Order Status Updates",
        desc: "The app keeps customers informed by providing the latest updates on their orders. It means transparency and a smooth experience.",
        icon: <FaMapMarkerAlt />,
      },
      {
        title: "Delivery History",
        desc: "The app lets delivery agents see their completed deliveries and earnings in one place. It keeps them organized and motivated.",
        icon: <FaHistory />,
      },
      {
        title: "Availability Management",
        desc: "The app allows delivery agents to set their availability. It helps manage schedules and ensures smooth delivery operations.",
        icon: <FaUserCheck />,
      },
      {
        title: "Notifications and Alerts",
        desc: "The app sends timely notifications and alerts to users and delivery agents. It keeps everyone informed, resulting in smooth operations.",
        icon: <FaBell />,
      },
    ],
  },
  {
    id: "admin",
    title: "Admin Panel",
    image: "/industries/food-industry/4.webp",
    features: [
      {
        title: "Analytics and Reporting",
        desc: "Through the admin panel, you can have clear insights into orders and performance. It helps businesses make smart decisions and grow.",
        icon: <FaChartLine />,
      },
      {
        title: "Customer Support Management",
        desc: "Through on demand food delivery app development, businesses can quickly and efficiently manage customer support with less food delivery app development cost.",
        icon: <FaHeadset />,
      },
      {
        title: "Payment Management",
        desc: "The admin panel helps manage all payments securely. It keeps transactions organized so the financial operations are smoother for the business.",
        icon: <FaMoneyBillWave />,
      },
      {
        title: "Managing Stakeholders",
        desc: "The admin panel allows businesses to oversee restaurants, customers, and delivery agents easily. It simplifies management.",
        icon: <FaUsers />,
      },
    ],
  },
];

const DeliveryFeatures = () => {
  const [activeTab, setActiveTab] = useState(tabConfig[0].id);
  const { title, features, image } = tabConfig.find((tab) => tab.id === activeTab);

  const isFourFeatureLayout = features.length === 4;
  const leftFeatures = isFourFeatureLayout ? features.slice(0, 3) : features.slice(0, Math.ceil(features.length / 2));
  const middleFeatures = isFourFeatureLayout ? features.slice(3, 4) : [];
  const rightFeatures = isFourFeatureLayout ? [] : features.slice(leftFeatures.length);

  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tighter leading-tight">Food Delivery App Features</h2>
          <p className="text-sm sm:text-base lg:text-lg opacity-80 mx-auto mt-4 ">
            Our healthcare apps enhance efficiency, engagement, and security for patients, doctors, and administrators. Each feature addresses specific user needs while ensuring compliance, scalability, and seamless interaction across healthcare platforms.
          </p>
        </div>

        <div className="bg-[#F15C20] rounded-2xl w-[80%] mx-auto p-0.5">
          <div className="flex lg:flex-row flex-col gap-0 bg-white rounded-[15px] overflow-hidden">
            {tabConfig.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-semibold transition ${
                  activeTab === tab.id
                    ? "bg-white text-black"
                    : "bg-[#F15C20] text-white opacity-90 hover:text-[#1F222E]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-[#F9F9F9] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
          {/* Mobile/Tablet Layout */}
          <div className="block lg:hidden">
            <div className="flex flex-col gap-6">
              {/* Features Grid for Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((item) => (
                  <div key={item.title} className="group bg-white rounded-2xl border border-black p-4 sm:p-6 shadow-sm hover:shadow-lg hover:border-[#F15C20] transition-all">
                    <div className="flex items-start gap-3">
                      <div className="text-xl sm:text-2xl mt-0.5 flex-shrink-0 text-black group-hover:text-[#F15C20] transition-colors">{item.icon}</div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-black group-hover:text-[#F15C20] mb-1 transition-colors">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-[#0C0C0C] opacity-80">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Image */}
              <div className="flex justify-center mt-6">
                <div className="relative w-full max-w-sm">
                  <img
                    src={image}
                    alt="Food Delivery App Mobile Interface"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-8 gap-6 lg:gap-10 items-start relative">
            {/* Left Features */}
            <div className="flex flex-col gap-4 col-span-3">
              {leftFeatures.map((item) => (
                <div key={item.title} className="group bg-white rounded-2xl border border-black p-7 w-full h-[160px] shadow-sm hover:shadow-lg hover:border-[#F15C20] transition-all">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl mt-0.5 flex-shrink-0 text-black group-hover:text-[#F15C20] transition-colors">{item.icon}</div>
                    <div>
                      <h4 className="text-base font-bold text-black group-hover:text-[#F15C20] mb-1 transition-colors">{item.title}</h4>
                      <p className="text-sm text-[#0C0C0C] opacity-80">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle Column: either features or image */}
            <div className={`flex flex-col gap-4 ${isFourFeatureLayout ? "col-span-3" : "col-span-2"}`}>
              {isFourFeatureLayout ? (
                middleFeatures.map((item) => (
                  <div key={item.title} className="group bg-white w-full h-[160px] rounded-2xl border border-black p-7 shadow-sm hover:shadow-lg hover:border-[#F15C20] transition-all">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl mt-0.5 flex-shrink-0 text-black group-hover:text-[#F15C20] transition-colors">{item.icon}</div>
                      <div>
                        <h4 className="text-base font-bold text-black group-hover:text-[#F15C20] mb-1 transition-colors">{item.title}</h4>
                        <p className="text-sm text-[#0C0C0C] opacity-80">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-start">
                  <div className="relative">
                    <img
                      src={image}
                      alt="Food Delivery App Mobile Interface"
                      className="w-full h-full py-8 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: either image (for 4 features) or right features (for 6) */}
            <div className={`flex flex-col gap-4 ${isFourFeatureLayout ? "col-span-2" : "col-span-3"}`}>
              {isFourFeatureLayout ? (
                <div className="flex justify-center items-start absolute -right-24 -bottom-5">
                  <div className="relative w-full">
                    <img
                      src={image}
                      alt="Food Delivery App Mobile Interface"
                      className="w-[80%] h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : (
                rightFeatures.map((item) => (
                  <div key={item.title} className="group bg-white w-full h-[160px] rounded-2xl border border-black p-7 shadow-sm hover:shadow-lg hover:border-[#F15C20] transition-all">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl mt-0.5 flex-shrink-0 text-black group-hover:text-[#F15C20] transition-colors">{item.icon}</div>
                      <div>
                        <h4 className="text-base font-bold text-black group-hover:text-[#F15C20] mb-1 transition-colors">{item.title}</h4>
                        <p className="text-sm text-[#0C0C0C] opacity-80">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
          href="/contact-us"
          className="flex items-center mt-8 group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Let’s Work Together
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default DeliveryFeatures;
