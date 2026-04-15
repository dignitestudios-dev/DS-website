import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Services from "../ui/Services";
import Link from "next/link";
import Bussiness from "../ui/Bussiness";
import { MdSecurity, MdSync, MdInventory, MdMobileFriendly, MdAnalytics, MdPayment, MdTrendingUp, MdSpeed } from "react-icons/md";
import { FaWordpress, FaPhp, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";
import Industries from "../ui/Industries";
import { IoGrid, IoWalletOutline } from "react-icons/io5";
import { CiSearch, CiSettings } from "react-icons/ci";
import { SiNodedotjs } from "react-icons/si";
import { FaCode, FaAws, FaPencilAlt, FaUser } from "react-icons/fa";
import SuccessStories from "../ui/SuccessStories";
import CTA from "./CTA";
import SEO from "../ui/SEO";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";
import WhyChoose from "../ui/WhyChoose";
import TechTools from "../ui/TechTools";
import Features from "../ui/Features";
import CTA2 from "./CTA2";
import Process from "../ui/Process";
import MobileApp from "../ui/MobileApp";
import BuildingPlatforms from "../ui/BuildingPlatforms";
import {
  MdSearch,
  MdDashboard,
  MdFlashOn,
  MdDevices
} from "react-icons/md";

import {  FaReact } from "react-icons/fa";
import { SiNextdotjs, SiHandlebarsdotjs, SiGraphql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsTerminal } from "react-icons/bs";
const services = [
  {
    icon: "database",
    icon2: "database1",
    title: "BigCommerce API Integration",
    description: (
      <>
        Our team connects stores with CRM, ERP and payment systems. These
        integrations improve automation and simplify operations for the
        businesses using the modern BigCommerce website development services.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "BigCommerce Secure Payment Gateways",
    description: (
      <>
        We integrate trusted payment gateways which protect transactions.
        Secure checkout improves customer confidence and helps businesses grow
        through stable Ecommerce platforms.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "BigCommerce SEO Optimized Platform",
    description: (
      <>
        Our developers build search friendly Ecommerce platforms. Stores load
        quickly, follow SEO standards, and provide better visibility in search
        results.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "BigCommerce Migration Services",
    description: (
      <>
        We move stores Shopify, Magento or WooCommerce to BigCommerce.
        Migration is smooth and protects your store data and customer
        information.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "BigCommerce Integration Solutions",
    description: (
      <>
        Our team builds custom integrations that connect third party tools.
        This improves automation and supports business growth.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "BigCommerce Mobile App Development Services",
    description: (
      <>
        We build Ecommerce apps that connect directly with your store.These
        apps improve the shopping experience and support sales growth.
      </>
    ),
  },
];

const highlights = [
  {
    icon: "/ecommerce/woocommerce-app/bussiness/1.webp",
    title: "Ecommerce Platform Expertise",
    desc: "Our team understands the Ecommerce systems and builds scalable solutions trusted by the modern online businesses.",
  },
  {
    icon: "/ecommerce/woocommerce-app/bussiness/2.webp",
    title: "Certified Developers",
    desc: "Experienced engineers work on every project. We follow proven development practices which are used by the top bigcommerce development companies.",
  },
  {
    icon: "/ecommerce/woocommerce-app/bussiness/5.webp",
    title: "Secure Store Architecture",
    desc: "Through our BigCommerce developments Service, we design platforms which protect data and provide stable performance during high traffic periods.",
  },
  {
    icon: "/ecommerce/woocommerce-app/bussiness/3.webp",
    title: "Transparent Communication",
    desc: "Clients stay informed during every project phase. Clear updates help businesses track development progress.",
  },
  {
    icon: "/ecommerce/woocommerce-app/bussiness/4.webp",
    title: "On Time Delivery",
    desc: "Projects follow the structured plan. Our team makes sure that our store launches are fast and predictable store launches.",
  },
  {
    icon: "/ecommerce/woocommerce-app/bussiness/6.webp",
    title: "Long Term Support",
    desc: "As a trusted BigCommerce Website development company, we continue improving stores after launch.",
  },
];


const VALUE_PROPOSITION = [
  {
    title: "Healthcare & Wellness Commerce",
    desc: "We create secure Ecommerce platforms for healthcare brands selling wellness products, supplements and medical equipment through the reliable digital storefronts.",
  },
  {
    title: "Fintech & Subscription Platforms",
    desc: "Our developers build stable Ecommerce systems that support subscription billing, digital payments and financial platforms.",
  },
  {
    title: "Ecommerce & Retail Brands",
    desc: "We develop powerful online stores for retail brands and manage the smooth bigcommerce strategy that improves the customer experience and store performance.",
  },
  {
    title: "Logistics & On Demand Marketplaces",
    desc: "Our team builds the Ecommerce solutions for logistics services and marketplace businesses that require real time order tracking and delivery management.",
  },
];

const PLATFORMS = [
  {
    title: "BigCommerce",
    desc: "We deliver reliable solutions which help businesses manage products efficiently and improve overall store operations.",
    logo: "/ecommerce/bc.webp", // your original logo mapping stays
  },
  {
    title: "Magento",
    desc: "We create custom features and integrations that increase flexibility and simplify Magento store management effectively.",
    logo: "/ecommerce/magento.webp",
  },
  {
    title: "WooCommerce",
    desc: "We build scalable solutions for WordPress stores with improved performance across platforms.",
    logo: "/ecommerce/woo.webp",
  },
  {
    title: "Salesforce Commerce",
    desc: "We develop enterprise apps that support large-scale ecommerce businesses through complex operations and reliable store management.",
    logo: "/ecommerce/sf.webp",
  },
  {
    title: "Squarespace",
    desc: "We create simple, modern ecommerce apps for businesses needing clean design and easy-to-use functionality.",
    logo: "/ecommerce/sp.webp",
  },
];

const test = [
  {
    name: "Sara Mitchell",
    designation: "— Nova Retail Group",
    review:
      "Dignite Studios built our Ecommerce platform smoothly. The team was responsive and professional throughout the project.",
  },
  {
    name: "Daniel Brooks",
    designation: "— Urban Cart Co.",
    review:
      "Our BigCommerce store performs faster now. Their development approach was clear and very organized",
  },
  {
    name: "Emily Carter",
    designation: "— FreshLeaf Market",
    review:
      "We needed custom integrations and the developers delivered exactly what we needed",
  },
  {
    name: "Michael Thompson",
    designation: "— swiftBuy Commerce",
    review:
      "Communication was excellent. The team explained every step of the project.",
  },
  {
    name: "Olivia Bennette",
    designation: "— HeathWay Store",
    review:
      "Our store migration was completed without any issues. Highly recommended team",
  },
  {
    name: "James Parker",
    designation: "— Trendy Outfitters",
    review:
      "They helped improve our store speed and users experience, and we also hire bigcommerce developers for the further enhancements",
  },
  {
    name: "Sophia Reed",
    designation: "— Luxestyle Brands",
    review:
      "Reliable developers who understand Ecommerce platforms well",
  },
  {
    name: "David Collins",
    designation: "— NextGen Retailers",
    review:
      "The project was delivered on time and worked quite perfectly",
  },
  {
    name: "David Collins",
    designation: "— NextGen Retailers",
    review:
      "The project was delivered on time and worked perfectly",
  },
  {
    name: "Grace Walker",
    designation: "— PureLiving Shop",
    review:
      "Support after launch was very helpful for our team, and we continue to hire bigcommerce developers for ongoing store improvements",
  },
  {
    name: "Ryan Scott",
    designation: "— PrimeCart Solutions",
    review:
      "Great Experience working with their Ecommerce specialists",
  },
];

const BENEFITS = [
  {
    title: "Increased Customer Engagement",
    desc: "A well built store improves the browsing experience. When paired with the mobile app development services forEcommerce, customers enjoy faster shopping and better interaction.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Faster Store Operations",
    desc: "Bigcommerce helps businesses process orders quickly. Automated tools manage inventory,payments and customers data without any slowing daily store operations.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Business Automation",
    desc: "Store automation reduces manual work. It manages products, orders and customer records efficiently so businesses can focus more on growth.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Revenue Growth",
    desc: "A smooth shopping experience encourages customers to buy more. Faster checkout and better navigation help increase and repeat purchases.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Scalable Ecommerce Expansion",
    desc: "Businesses can easily expand product catalogs and handle more traffic. The platform supports long term growth without any performance issues.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "Do you build scalable BigCommerce stores?",
    answer:
      "Yes. Our developers build BigCommerce stores that will handle high traffic and large product catalogs without slowing down. We design the strong store architecture, stable integrations and secure payment systems. This helps businesses manage growing customer demand. The platform stays reliable even during the peak sales periods and supports the long term Ecommerce growth.",
  },
  {
    id: 2,
    question: "How long does BigCommerce development take?",
    answer:
      "The timeline depends on the store size and project requirements. The basic Ecommerce store may take a few weeks to design and launch. The custom stores with the integrations, advanced features and complex product structures usually take longer. Our team follows a clear development process to ensure the stable performance and the smooth store delivery.",
  },
  {
    id: 3,
    question: "Do you support store migrations?",
    answer:
      "Yes. We provide secure migration services for businesses moving from Shopify, WooCommerce, Magento or other Ecommerce platforms. Our team carefully transfers products, customer data and order history. We also maintain the store structure and SEO settings. This helps businesses move to BigCommerce without losing important information or search visibility.",
  },
  {
    id: 4,
    question: "Can you improve my existing BigCommerce Store?",
    answer:
      "Yes. Our developers review your current store and identity areas which need improvement. We optimize store speed, improve navigation and enhance the checkout process. We can also integrate new tools and features which improve the performance. These updates help deliver a better shopping experience and increase overall store efficiency.",
  },
  {
    id: 5,
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes. Our team works with startups, small businesses and large enterprises. Startups get guidance to launch the first Ecommerce store successfully. Established companies receive scalable solutions which support large product catalogs and high traffic. We adjust our development approach based on the business size and long term growth goals.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Store Planning",
    desc: "We analyze your business model and product structure. Our expert bigcommerce web developer prepares a clear development strategy.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Our team designs clean store layouts that improve navigation and create the smooth shopping experience.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Our developers build strong backend systems and features that keep the store fast, secure and reliable.",
  },
  {
    step: "04",
    title: "Testing",
    desc: "We carefully test the performance, integrations and security to ensure everything works smoothly before launch.",
  },
  {
    step: "05",
    title: "Store Deployment",
    desc: "After testing, we launch the store carefully to ensure the bigcommerce store development runs smoothly.",
  },
  {
    step: "06",
    title: "Post Launch Support & Optimization",
    desc: "We continue improving speed, integrations and store features. This helps your Ecommerce business grow faster.",
  },
];





const featureData = [
  {
    title: "Secure Login & Authentication",
    icon: <MdSecurity />,
  },
  {
    title: "Real Time Order Sync",
    icon: <MdSync />,
  },
  {
    title: "Smart Product Search",
    icon: <MdSearch />,
  },
  {
    title: "Customer Account Dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Advanced Analytics",
    icon: <MdAnalytics />,
  },
  {
    title: "Inventory Management",
    icon: <MdInventory />,
  },
  {
    title: "Fast Checkouts Experience",
    icon: <MdFlashOn />,
  },
  {
    title: "Multi Device Store Access",
    icon: <MdDevices />,
  },
];


const techStackData = [
  {
    name: "Handlebars.js",
    icon: <SiHandlebarsdotjs />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "REST APIs",
    icon: <TbApi />,
  },
  {
    name: "GraphQL Storefront API",
    icon: <SiGraphql />,
  },
  {
    name: "BigCommerce Stencil CLI",
    icon: <BsTerminal />,
  },
];
const BigCommerceAppDevelopment = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        button="Let’s Get Started "
        heading="Introduction"
        para={
          <>
         With more than 10 years of Ecommerce experience, Dignite Studios delivers dependable BigCommerce development Service for the growing brands. Our team has also worked with startups, retailers and global Ecommerce businesses. We build Custom Stores, integrations and scalable solutions which support the long term growth. 
 As the trusted BigCommerce development agency, we create solutions which match business needs. Our experienced BigCommerce website developers build reliable storefronts which perform quite smoothly across devices. 
We work with several industries such as the Ecommerce,retail, DTC brands and online marketplaces. Our team focuses on strong architecture, stability, performance and simple store management. Businesses trust us because we deliver scalable performs which are ready for growth. 
          </>
        }
      />
      <Services
        header="Custom BigCommerce  development"
        header2={"Services"}
        button={"Start Your BigCommerce Project  "}
        para="Our team provides a complete BigCommerce development Services that helps businesses launch secure and scalable Ecommerce stores. From the custom integrations to migration and performance optimization. We build solutions that simplify store operations and improve customer experience using reliable BigCommerce Website development Services. "
        services={services}
      />
      {/* <TabularEcommerceTechs /> */}
      <TechTools header={"Advanced BigCommerce  Development Technology Stack "} para={"Dignite Studios used the modern tools to deliver the stable Ecommerce platforms. As a trusted bigcommerce website development company, our team builds scalable solutions using the proven frameworks. Our expert bigcommerce web developer ensures clean architectures and strong integrations. This approach places us among reliable bigcommerce development companies delivering high performance Ecommerce platforms. "} tech={techStackData} />
      {/* <BuildingPlatforms
        header={"Platforms We Use to Build Ecommerce Apps"}
        para={
          "We build ecommerce apps by using platforms which also support scalability and business growth. As an ecommerce mobile app development company we ensure each of the platforms fits your needs and delivers strong performance. "
        }
        button={"Request Ecommerce App Development Quote"}
        VALUE_PROPOSITION={PLATFORMS}
      /> */}

      <CTA
        header=" Start Building Your BigCommerce Store"
        para="Businesses trust our BigCommerce development Service to build the reliable Ecommerce platforms. Our team understands store architecture, integrations and performance optimization. We guide you through the planning, development and launch so your store grows without any of the technical issues. "
        btn="Request BigCommerce Development Quote 
 "
      />
      <Process
        header="Reliable BigCommerce Store"
        header2={" Development Process"}
        para="Our structured process ensures the smooth delivery of BigCommerce development Service for businesses of all sizes. As an experienced team, we also focus on planning, development, testing and optimizations. Our bigcommerce website developers work quite closely with the clients to build the scalable Ecommerce platforms. Brands that want stable Ecommerce operations often hire the bigcommerce developers for the long term platform management.  "
        steps={PROCESS_STEPS}
        button={"Start Your BigCommerce Journey "}
      />
      <Bussiness
        header="Why Business Choose Our BigCommerce"
        header2={"Development Services"}
        button="Partner with Dignite Studios "
        para={
          <>
      Dignite Studios delivers the dependable Ecommerce platforms for the growing business. As a reliable bigcommerce development agency, we build secure solutions which support long term growth. Businesses that hire bigcommerce developers create scalable architectures trusted by different brands.  
          </>
        }
        bs={highlights}
      />
      <Industries
      button={" Discuss Your Idea  "}
        header="Industries We Serve as a BigCommerce "
        header2={" Development Agency"}
        para="Our team builds Ecommerce platforms for businesses in many industries. As the trusted bigcommerce web developer, we design scalable online stores which help companies sell more products and manage operations easily. Many brands also hire the bigcommerce developers from our team to launch the reliable and high performing online stores. "
        VALUE_PROPOSITION={VALUE_PROPOSITION}
      />
      <MobileApp
        cards={BENEFITS}
        header="Benefits Of Having a Bigcommerce Store"
        para="A BigCommerce store helps businesses manage online sales more easily. It supports automation, faster order processing and better customer experiences . When combined with mobile app development services for Ecommerce, businesses can reach more customers, Improve engagement, and build scalable digital stores which support long term online growth. "
        button="Build a Scalable BigCommerce Store "
      />
      <Features
        header="Must Have Features in Your BigCommerce Store "
        para="Strong features improve the store performance and customer experience. Our BigCommerce development Service include advanced tools that support business growth.  "
        button="Get Feature Recommendations"
        features={featureData}
      />
      <SuccessStories
        header=" BigCommerce Development Services Case Studies "
        para="We have helped businesses launch successful Ecommerce platforms through reliable development and integrations. Our portfolio highlights real projects where stores achieved better performance, improved user experience and strong sales growth.  
Explore our successful Ecommerce projects and see how our solutions support the business growth "
      />
      <CTA2
        header="Start Your BigCommerce Project Today"
        para="If you want a reliable Ecommerce platform, our BigCommerce development Services can help. Our team builds secure, scalable and high performing online stores. We ensure every step supports business growth and better customer experience. "
        btn="Request BigCommerce Development Quote"
      />
      <Testimonials
        header="Client Testimonials for Our BigCommerce Development Services "
        test={test}
        para={"Businesses trust our team when they need reliable Ecommerce solutions. As developers focus that  we also focus on quality development and long term partnerships. Many companies choose to hire the bigcommerce developers from the Dignite studios because we build secure platforms and deliver consistent results.  "}
        button="Work With Our Expert Team"
      />
      <Faq faqs={faqs} header="FAQs" />
      <ContactUs
        img={"/ecommerce/big-app/c-img.webp"}
         pathname={"Big Commerce App dev"}
        header="Start Your BigCommerce Project"
        para="Have an Ecommerce idea or want to improve your existing store? Our team is ready to build secure and scalable solutions. Share your project details and we will guide you with the right development strategy.  "
        btn="Request BigCommerce Development Quote "
      />
    </div>
  );
};

export default BigCommerceAppDevelopment;
