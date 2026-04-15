"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt, FaCreditCard, FaGift, FaUtensils, FaBox, FaBell, FaRoute, FaHistory, FaUserCheck, FaChartLine, FaUsers, FaEye, FaMoneyBillWave, FaBullhorn, FaHeadset, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const tabConfig = [
  {
    id: "customer",
    title: "Customer App Features",
    image: "/industries/real-state/custom.webp",
    features: [
      {
        title: "AI Powered Property Recommendations",
        desc: "The app tracks user activity, past searches and preferences to suggest properties that match their needs, making the property discovery faster and quite more accurate. ",
        icon: <FaSearch />,
      },
      {
        title: "Advanced Property Search & Smart Filters",
        desc: "Users can filter properties by price, location, type, size and features helping them quickly which match their needs without wasting any further time. ",
        icon: <FaMapMarkerAlt />,
      },
      {
        title: "Interactive Map-Based Property Discovery",
        desc: "Users can explore properties on a map and view nearby places like the schools, parks and transport making it easier to understand the location. ",
        icon: <FaMapMarkerAlt />,
      },
      {
        title: "AR / Virtual Property Tours",
        desc: "With a reliable real estate app builder, users can now save their favourite properties and receive alerts when the prices change or similar listings become available which help them stay updated quite easily.  ",
        icon: <FaUsers />,
      },
      {
        title: "Saved Listings & Personalized Alerts",
        desc: "Users can easily remain updated by saving their favourite house and receiving alerts when the prices are altered or comparable listings become available. ",
        icon: <FaBell />,
      },
      {
        title: "Visit Scheduling & In-App Chat with Agents",
        desc: "Users may also utilise the app to directly schedule property tours and communicate with the agents through the chat feature, which speeds the process. ",
        icon: <FaHeadset />,
      },
    ],
  },
  {
    id: "agent",
    title: "Agent App Features",
    image: "/industries/real-state/agent.webp",
    features: [
      {
        title: "Property Listing Management",
        desc: "Listing changes are quite easy and quick agents can post and manage the property details, photos, videos, pricing and location information straight from the app. ",
        icon: <FaUsers />,
      },
      {
        title: "Smart Lead Management System",
        desc: "The system captures, organizes and tracks leads automatically helping agents identify serious buyers and focus on the high potential clients to improve conversions. ",
        icon: <FaChartLine />,
      },
      {
        title: "In-App Communication Tools",
        desc: "Through the built in messaging and calling options, agents may also contact clients more effectively, respond quickly and increase communication throughout the property purchasing process. ",
        icon: <FaHeadset />,
      },
      {
        title: "Lead Activity Tracking & Insights",
        desc: "In order to better understand consumer interest and enhance follow ups for better outcomes agents can also monitor user actions such as the property views, saves and queries.",
        icon: <FaEye />,
      },
      {
        title: "Automated Property Alerts for Clients",
        desc: "When new properties fit their criteria, agents can automatically notify customers, keeping buyers informed and boosting likelihood of quicker decisions. ",
        icon: <FaBell />,
      },
      {
        title: "Performance Analytics Dashboard",
        desc: "In depth reports on leads, property views and user engagement are available to agents enabling them to evaluate performance and successfully enhance their sales tactics.",
        icon: <FaChartLine />,
      },
    ],
  },
  {
    id: "admin",
    title: "Admin Panel Features",
    image: "/industries/real-state/admin.webp",
    features: [
      {
        title: "User & Agent Management System",
        desc: "To maintain the platform’s organization and security, admins can assign the roles, manage buyers, sellers and agents, regulate access permissions and keep an eye on the user activities.",
        icon: <FaUsers />,
      },
      {
        title: "Property Listing Approval & Moderation",
        desc: "Before release, admins check the property listings to make sure all the information given is right, eliminate any inaccurate content and uphold the platform’s high standards quality.",
        icon: <FaCheckCircle />,
      },
      {
        title: "Subscription & Revenue Management",
        desc: "For improved revenue management, admins can oversee subscription plans, monitor the payments, manage billing and regulate the premium features from the single dashboard. ",
        icon: <FaMoneyBillWave />,
      },
      
      {
        title: "Analytics & Performance Reporting",
        desc: "Admins can view real time reports on the user activity, property views and engagement to understand performance and make better business decisions.",
        icon: <FaChartLine />,
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
    <section className="w-full ">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tighter leading-tight">Powerful Features for Real Estate App Development</h2>
          <p className="text-sm sm:text-base lg:text-lg opacity-80 mx-auto mt-4 ">
            A modern app needs smart features to improve user experience and simplify business tasks. As a trusted real estate app builder, we build apps with practical tools for buyers, agents and admins, helping manage listings, improve communication, and support smooth property transactions.
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
             
            </div>
          </div>

          {/* Desktop Layout */}
          <div className={`hidden lg:grid lg:grid-cols-8 gap-6 lg:gap-10 relative ${isFourFeatureLayout ? "items-start" : "items-center "}` }>
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
                      className="w-full h-full  object-cover"
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
                      className="w-[55%] h-full object-cover"
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
            See How Your App Can Work 
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
