import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Services from "../ui/Services";
import Link from "next/link";
import Bussiness from "../ui/Bussiness";
import {
  MdArrowOutward,
  MdSecurity,
  MdSync,
  MdNotificationsActive,
  MdAnalytics,
  MdSettingsSuggest,
  MdAccountBalanceWallet,
  MdDashboard,
  MdInventory,
} from "react-icons/md";
import Industries from "../ui/Industries";
import TechAndTools from "../ui/TechTools";
import Process from "../ui/Process";
import MobileApp from "../ui/MobileApp";
import { FaPencilAlt, FaUser } from "react-icons/fa";
import { IoGrid, IoWalletOutline, IoStorefrontOutline } from "react-icons/io5";
import { CiSearch, CiSettings } from "react-icons/ci";
import SuccessStories from "../ui/SuccessStories";
import MigrationServices from "./MigrationServices";
import CTA from "./CTA";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";
import WhyChoose from "../ui/WhyChoose";
import TechTools from "../ui/TechTools";
import Features from "../ui/Features";
import CTA2 from "./CTA2";
import { SiShopify, SiHtml5, SiTailwindcss, SiBootstrap } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { RiTerminalBoxLine, RiBracesLine } from "react-icons/ri";
import TabularEcommerceTechs from "./TabularEcommerceTechs";

const techStackData = [
  {
    name: "Shopify",
    icon: <SiShopify />,
  },
  // {
  //   name: "Shopify Plus",
  //   icon: <SiShopify />,
  //   description:
  //     "Enterprise-ready Shopify platform for high-volume and complex stores.",
  // },
  {
    name: "Shopify Admin APIs & Storefront APIs",
    icon: <FaCode />,
  },
  // {
  //   name: "Shopify CLI",
  //   icon: <RiTerminalBoxLine />,
  //   description:
  //     "Efficient command-line interface for building and managing themes and apps.",
  // },
  // {
  //   name: "Liquid (Shopify templating language)",
  //   icon: <RiBracesLine />, // <-- best replacement for Liquid
  //   description:
  //     "Flexible templating language powering custom and dynamic Shopify themes.",
  // },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },
];
const services = [
  {
    icon: "database",
    icon2: "database1",
    title: "Shopify Store Development",
    description: (
      <>
        We create the Shopify stores with Shopify Website Development Services
        that are scalable, secure and designed for their performance while
        ensuring the fluent customer experience.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Shopify Store UI/UX Design",
    description: (
      <>
        We design user -friendly interfaces which improve engagement providing
        smooth navigation across all devices.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Feature Development & Customizaton",
    description: (
      <>
        We develop custom features to meet the unique business needs, enhancing
        the functionality and the store performance efficiently.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Shopify API & Third Party Integrations",
    description: (
      <>
        We integrate third party tools and Shopify APIs to streamline operations
        and automate the workflows.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "App Security & Data protection",
    description: (
      <>
        Our team ensures that the top level security and protects sensitive data
        across the shopify store environment.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "App Testing & Quality Assurance",
    description: (
      <>
        We perform rigorous testing to maintain the store stability, performance
        and the flawless user experience.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "App Maintenance and Ongoing Support",
    description: (
      <>
        We provide continuous updates, bug fixes and optimization to support the
        long term growth and store reliability.
      </>
    ),
  },
];

const highlights = [
  {
    icon:"/ecommerce/shopify-migrate/s1.webp",
    title: "Shopify Platform Expertise",
    desc: "Our team has deep knowledge of Shopify and builds stores that perform smoothly, handle growth, and support long term Ecommerce success.",
  },
  {
    icon:"/ecommerce/shopify-migrate/s2.webp",

    title: "Certified Migration Specialists",
    desc: "Our certified experts handle complex migrations with accuracy. We ensure the data is transferred correctly without any error or missing information during the process.",
  },
  {
    icon:"/ecommerce/shopify-migrate/s3.webp",

    title: "SEO Preserving Migration",
    desc: "We protect your SEO by maintaining URLs, metadata and site structure. This helps your store keep rankings and visibility after the migration.",
  },
  {
    icon:"/ecommerce/shopify-migrate/s4.webp",

    title: "Custom & Scalable Solutions",
    desc: "We build solutions based on your business needs. Our approach ensures your store can grow and handle more products and customers easily.",
  },
  {
    icon:"/ecommerce/shopify-migrate/s5.webp",

    title: "Transparent Communication",
    desc: "We keep you informed at every step. Clear updates help you understand progress and make decisions during the migration process.",
  },
  {
    icon:"/ecommerce/shopify-migrate/s6.webp",

    title: "Post Launch Support",
    desc: "As one of the reliable Shopify migration companies, we provide ongoing support to fix issues and keep your store stable even after the launch.",
  },
];
const VALUE_PROPOSITION = [
  {
    title: "Healthcare & Wellness Ecommerce",
    desc: "We build secure Ecommerce platforms for healthcare brands selling wellness products and equipment, ensuring safe transactions, reliable performance and smooth customer experience.",
  },
  {
    title: "Fintech & Subscription Platforms",
    desc: "We migrate fintech and subscription platforms with secure billing systems, stable payment integrations and reliable data transfer for smooth and consistent operations.",
  },
  {
    title: "Ecommerce & Retail Brands",
    desc: "We provide a smooth Shopify migration service for retail brands, helping manage large product catalogs, improve store performance and enhance customer shopping experiences.",
  },
  {
    title: "Logistics & On Demand Marketplaces",
    desc: "We migrate platforms that require real time tracking, fast delivery systems and strong backend support to ensure smooth operations and better customer service.",
  },
  {
    title: "Grocery Commerce",
    desc: "We build fast Ecommerce stores for grocery businesses with real time inventory updates, easy product management and quick checkout experiences for customers.",
  },
  {
    title: "Fashion & Apparel",
    desc: "We migrate fashion stores with multiple product variants, high traffic demands and smooth browsing experiences to support better customer engagement and sales.",
  },
  {
    title: "Home Decor",
    desc: "We create scalable Ecommerce stores for home decor brands with better product display, improved navigation and smooth user experience for online shoppers.",
  },
];
const test = [
  {
    name: "Laura Smith",
    designation: "— Head of Ecommerce, Trendy Apparel Co.",
    review:
      "“Dignite Studios delivered our Shopify store on time with excellent communication and reliable solutions”",
  },
  {
    name: "James Wilson",
    designation: "— CTO, HomeGoods Online",
    review:
      "“Professional team, scalable store and clear guidance throughout the development process”",
  },
  {
    name: "Maria Lopes",
    designation: "— Operations Manager, HealthShop Ltd.",
    review:
      "“Their expertise improved our Shopify store performance significantly, increasing the customer engagement and the sales”",
  },
  {
    name: "David Brown",
    designation: "— CEO, FashionFrontier",
    review:
      "“Smooth collaboration and practical solutions from our shopify ecommerce development company helped launch the shopify store efficiently.”",
  },
  {
    name: "Emily Johnson",
    designation: "— Product Manager, TechStyle Retail",
    review:
      "“Reliable and secure Shopify development, making the store easy to manage and scale.”",
  },
  {
    name: "Richard Davis",
    designation: "— Director, Marketplace Hub",
    review:
      "“They provided the continuous support post launch and enhanced our store’s usability and the functionality”",
  },
  {
    name: "Sarah Clark",
    designation: "— COO, GreenCrocers",
    review:
      "“Strong Communication, timely updates and excellent delivery of all the shopify solutions”",
  },
  {
    name: "Michael Scott",
    designation: "— IT Lead, UrbanStyle",
    review:
      "“The team helped implement custom features and integrations successfully”",
  },
  {
    name: "Jessica Adams",
    designation: "— CEO, DTC Fashion",
    review:
      "“Highly professional shopify store development with the practical execution and excellent results”",
  },
  {
    name: "Daniel Harris",
    designation: "— CTO, Home Essentials",
    review:
      "“Our Shopify store now performs fluent, supporting the long term growth and the operations”",
  },
];

const BENEFITS = [
  {
    title: "Increased Customer Engagement",
    desc: "Engage your customers through the responsive design, smooth navigation and features which enhance the shopping experiences.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Faster Store Operations",
    desc: "Streamline the processes as shopify development company in usa to handle the orders, inventory and updates efficiently for better business performance.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Business Automation",
    desc: "Automate the workflows to reduce the manual tasks and improve the operational efficiency across your Shopify Store.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Revenue Growth",
    desc: "Boost the sales through the optimized product pages, conversion focused features and the fluent checkout experiences.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Scalable Ecommerce Expansion",
    desc: "Grow your shopify store through the flexible solutions which support the increasing traffic and the new business demands.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "What platforms can be migrated to Shopify?",
    answer:
      "We migrate stores from WooCommerce, Magento, BigCommerce, Wix, Squarespace and custom platforms. Our Shopify Plus migration experts ensure all important data is transferred safely. This includes products, customers and orders without affecting store performance or structure.",
  },
  {
    id: 2,
    question: "How long does a Shopify migration take?",
    answer:
      "Migration time depends on the store size and complexity. Small stores take a few weeks. Larger stores with custom features take more time. Our Shopify migration service follows a clear process to complete migration safely and efficiently.",
  },
  {
    id: 3,
    question: "Will SEO rankings be preserved after migration?",
    answer:
      "Yes. We protect your SEO during migration. Our team keeps the URL structure, metadata and redirects in place. This ensures rankings stay stable after migration and your store continues to perform well in search engines.",
  },
  {
    id: 4,
    question: "Will customer and order history be migrated?",
    answer:
      "Yes. We transfer complete customer records and order history. This helps businesses continue operations without losing important data or customer trust.",
  },
  {
    id: 5,
    question: "What if my platform has custom features?",
    answer:
      "Our Shopify migration experts handle custom features carefully. We rebuild or integrate them into Shopify to maintain functionality and performance.",
  },
  {
    id: 6,
    question: "Do you provide post migration support?",
    answer:
      "Yes. We provide ongoing support after launch. We monitor store performance and fix issues quickly to keep the store running smoothly.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation & Requirement Gathering",
    desc: "We understood your current platform, store data and business goals. This helps us plan a clear migration process without any confusion.",
  },
  {
    step: "02",
    title: "Pre Migration Planning & Audit",
    desc: "We review SEO structure, URLs and store data carefully. This step helps avoid errors and ensures the smooth migration process.",
  },
  {
    step: "03",
    title: "Migration & Data Transfer",
    desc: "We securely transfer products, customers, orders and store content. Our team ensures accurate data migration without loss or duplication issues.",
  },
  {
    step: "04",
    title: "QA Testing & Validation",
    desc: "We test store functions, designs and performance after migration. This ensures everything works properly before your store goes live.",
  },
  {
    step: "05",
    title: "Go Live & Optimisation",
    desc: "We launch your Shopify store and monitor its performance. Our team quickly fixes any issues to ensure smooth store operations.",
  },
  {
    step: "06",
    title: "Ongoing Support",
    desc: "We provide continuous support after migration. Our Shopify store migration services keep your store updated, stable and ready for future growth.",
  },
];

const typesOfApps = [
  {
    number: "01",
    title: "Customer Support and Engagement Apps",
    description:
      "We build apps which improve customer communication support. Faster responses and increased engagement. It creates better shopping experiences and stronger relationships.",
  },
  {
    number: "02",
    title: "Workflow Automation Apps",
    description:
      "We create apps which autotune the daily store tasks. Reduce the manual work and improve the overall business efficiency for the better operations.",
  },
  {
    number: "03",
    title: "Inventory and Order Management Apps",
    description:
      "We develop apps that manage inventory track orders. Reduce the errors to improve the store operations and the customer satisfaction.",
  },
  {
    number: "04",
    title: "Custom pricing and Marketing Apps",
    description:
      "We build apps that help manage the pricing of offers, promotions and campaigns. It increases sales and customer retention.",
  },
  {
    number: "05",
    title: "Cart and Checkout Enhancement Apps",
    description:
      "We improve cart and checkout experience to reduce the drop offs. Increasing the conversions for better store performance.",
  },
  {
    number: "06",
    title: "SEO and Performance Optimization Apps",
    description:
      "We develop apps that improve the store speed, visibility and performance. To help the businesses to grow online and reach more customers.",
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
    title: "Push Notifications",
    icon: <MdNotificationsActive />,
  },
  {
    title: "AI-Powered Automation",
    icon: <MdSettingsSuggest />,
  },
  {
    title: "Analytics & Reporting",
    icon: <MdAnalytics />,
  },
  {
    title: "Wishlist & Favorites",
    icon: <MdAccountBalanceWallet />,
  },
  {
    title: "Multi Currency Support",
    icon: <MdDashboard />,
  },
  {
    title: "Discount & Loyalty Programs",
    icon: <MdInventory />,
  },
];

const ShopifyMigrationServices = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero btn="Get Your Free Migration Audit " />
      <About
        heading="Why Businesses Are Migrating to"
        heading2={"Shopify "}
        para={
          <>
            Moving to Shopify helps businesses grow faster and manage stores
            quite easily. With our shopify migration services, you get the
            better flexibility, strong performance and the scalable Ecommerce
            solutions. Many businesses switch platforms to improve speed, user
            experience and store management. DIY migration can cause data loss,
            broken links and missing features. This affects SEO and customer
            experience. A professional shopify migration company ensures safe
            data transfer, zero downtime and proper structure. Our team avoids
            risks and keeps your store stable during the process.
          </>
        }
        button="Get a Free Migration Consultation. "
      />
      <MigrationServices />
      <CTA
        header="Ready to Migrate Your Ecommerce Store to Shopify?
"
        para="Our team makes migration simple and stress free.. You can move your store without even losing the data or performance. Get expert guidance and start your migration journey through confidence today. "
        btn="Book a Free Shopify Migration Call  "
      />
         <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={" Industries We Serve for Shopify"}
        header2={"Migration Services"}
        para={
          "Our Shopify migration services support across many industries. As the reliable migration agency, we help the brands to improve the performance and scale operations. Companies trust our shopify plus migration experts to move stores safely and efficiently. "
        }
        button={"Discuss Your Migration Idea  "}
      />
           <Process
        steps={PROCESS_STEPS}
        header={"Our Shopify Migration Process "}
        para={
          "Our Shopify plus Migration experts follow the clear and simple process from the panning to launch. We ensure the safe data transfer, proper testing and the smooth store setup. We also provide the support after the launch to keep the store running without any of the issues. "
        }
      />
           <CTA2
        header={"Start Your Shopify Migration Journey Today  "}
        para={
          "Take the Next Step expert guidance. Our Shopify Migration helps you to move your store without the stress. Work with the trusted Shopify Migration Company and launch your Shopify Store with confidence. "
        }
        btn={"Talk to a Shopify Migration Expert "}
      />

         <Bussiness
        bs={highlights}
        header={" Best Shopify Store Migration"}
        header2={"App Provider "}
        button={"Partner with Dignite Studios "}
        ctaHeader={"Partner With Dignite Studios"}
        ctaPara={
          "We offer the best shopify development company solutions. It focuses on the scalable, secure and user-friendly Shopify stores. Our expertise positions us among the most leading shopify app development companies. Partner with a team dedicated to long term growth and the practical execution."
        }
        ctaBtn={"Partner With Dignite Studios"}
        cta={
          <div className="bg-transparent h-[500px] hover:scale-105 z-50 absolute text-white  opacity-100 transition-all ease-linear w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%] ">
            <div className="relative">
              <img
                src="/location/mobile-boston/cta-img.webp"
                className="w-full rounded-b-2xl bottom-3 relative bg-cover"
                alt="lggg"
              />
              <div className="md:w-[45%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-center text-center">
                <h2 className="text-[45px] font-bold text-white leading-[45px]">
                  Partner With Dignite Studios
                </h2>
                <p>
                  We offer the best shopify development company solutions. It
                  focuses on the scalable, secure and user-friendly Shopify
                  stores. Our expertise positions us among the most leading
                  shopify app development companies. Partner with a team
                  dedicated to long term growth and the practical execution.
                </p>
                <Link
                  href="/contact-us"
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Partner With Dignite Studios
                  </button>
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                    <MdArrowOutward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        }
        para={
          <>
      We provide reliable migration solutions with strong technical expertise and secure the data handling. As the trusted shopify migration services company, we focus on the accuracy, timely delivery and customer satisfaction. Our team delivers the best Shopify service trusted by the business looking for the safe and scalable Ecommerce transitions.
          </>
        }
      />
 
 
      <SuccessStories
        header={"Proven Shopify Migration "}
        header2={"Projects"}
        para={
          <>We have successfully completed multiple shopify store migration projects for growing business. Our work shows improved store performance, better user experience and stable operations after migration. Explore Our <Link className="text-orange-500" href="/case-studies">Portfolio</Link> to see real migration results and how businesses achieved growth through our solutions.</>
        }
        btn={"View Our Migration Projects "}
      />
    <TabularEcommerceTechs  />
 
      {/* <SEO  header={"Focused Mobile Application Development Boston"} para={"Choosing the right partner in Boston can completely change the way your app performs in a competitive market."}/> */}
 
      <Faq faqs={faqs} />
      <ContactUs
        img={"/ecommerce/shopify-app/c-img.webp"}
        pathname={"Shopify Migration"}
        header={"Start Your Shopify Migration Today "}
        header2={""}
        para={
          "Start your Ecommerce journey with a trusted shopify migration company. Share Your project details and get expert support to move your store safely ."
        }
        btn={"Start Your Shopify Migration Today"}
      />
    </div>
  );
};

export default ShopifyMigrationServices;
