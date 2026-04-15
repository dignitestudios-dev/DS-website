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
    title: "Shopify Focused Expertise",
    desc: "As the best shopify development company, We deliver the Shopify store solutions which are designed for the optimal performance, fluent usability and ecommerce growth across most of the business types.",
  },
  {
    title: "Certified Shopify Developers",
    desc: "Our team at shopify website development company in usa includes the certified shopify professionals who build the reliable, high quality apps by using the tools and the proven development practices.",
  },
  {
    title: "Scalable & Secure App Architecture",
    desc: "We create the Shopify stores which grow through your business, maintaining the strong security, smooth operations and the long term scalability.",
  },
  {
    title: "Transparent Communication",
    desc: "We keep clients informed about the project progress, timelines and updates which ensure the smooth collaboration and the clear expectations throughout the development.",
  },
  {
    title: "On Time Delivery",
    desc: "Our structured workflows ensure the efficient project delivery with no delays, maintaining the high quality while meeting your scheduled launch requirements.",
  },
  {
    title: "Long Term App Support",
    desc: "We provide the continuous maintenance, updates and performance monitoring to ensure your Shopify store runs quite smoothly and grows reliably.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare & Wellness Commerce",
    desc: "We develop solutions improving patient engagement and healthcare service delivery for the healthcare app development company clients.",
  },
  {
    title: "FinTech & Subscription Platforms",
    desc: "We create secure payment and subscription systems which are aligned with the fintech app development services for business efficiency.",
  },
  {
    title: "Ecommerce & Retail Brands",
    desc: "We deliver scalable apps that boost the conversions and streamline the operations as the ecommerce app development company.",
  },
  {
    title: "Logistics & On Demand Marketplaces",
    desc: "As a shopify website development company in usa, our solutions increase the delivery management and operations for the logistics focused businesses and marketplaces.",
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
    question: "Do you build scalable Shopify stores?",
    answer:
      "Yes, we build scalable shopify stores that grow through the business. Our shopify development company focuses on creating the stores with the clean code, reliable architecture and the flexible features. Each store is designed to handle the increased traffic, product catalogs and customer activity efficiently, ensuring the smooth performance while supporting the long term business growth and the fluent user experience.",
  },
  {
    id: 2,
    question: "How long does shopify development take?",
    answer:
      "The development timeline varies depending on your store's complexity. Our shopify web development company delivers simple stores in a few weeks, including the planning, design and deployment. Advanced stores with the custom features, third party integrations and complex workflow require more time. Our team ensures every store meets the high quality standards and is delivered efficiently.",
  },
  {
    id: 3,
    question: "Do you support Shopify App Store submissions?",
    answer:
      "Yes, we assist with the complete Shopify App Store submission process. As a shopify website development company our team ensures your store is properly configured, tested and optimized for performance. We handle all the requirements and documentation needed for the approval, helping the app reach the marketplace efficiently. This ensures the smooth submission process and increases the chances of the successful app approval.",
  },
  {
    id: 4,
    question: "Can you refine my Shopify store idea?",
    answer:
      "Yes, our shopify ecommerce development company team helps refine your store concept. We analyze your business goals, target audience, and operational needs by suggesting improvements in design, features and usability. We ensure your shopify store delivers the better performance, enhances the user experience and supports the long term growth. Turning your initial idea into a scalable and practical online solution.",
  },
  {
    id: 5,
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes, we work with both startups and large enterprises, providing the customized shopify store solutions. As the shopify website development company, our approach adapts to varying business needs, ensuring scalability , reliability and long term growth. From small businesses seeking efficient stores to enterprises requiring complex integrations and high performance systems. Our team delivers structured, practical solutions that help every client achieve their ecommerce goals effectively.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Shopify App Planning",
    desc: "We analyze the business goals and define the clear shopify store development plan for efficiency and scalability.",
  },
  {
    step: "02",
    title: "Design",
    desc: "We design intuitive interfaces as the shopify web development company which improve the user experience and ensure smooth navigation all across the devices.",
  },
  {
    step: "03",
    title: "App development",
    desc: "Our developers build the scalable shopify apps while using the clean code to ensure the performance and the long term reliability.",
  },
  {
    step: "04",
    title: "Testing",
    desc: "We conduct the detailed testing to ensure the performance, security, functionality and the fluent user experience.",
  },
  {
    step: "05",
    title: "Shopify App Deployment",
    desc: "We deploy your shopify app efficiently, ensuring that the minimal downtime and the smooth launch all over the environments.",
  },
  {
    step: "06",
    title: "Post Launch Support & Optimization",
    desc: "We monitor the performance, provide updates and optimize the store through continuous growth and the enhanced user experience.",
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

const ShopifyStoreDevelopment = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero btn="Get Free Shopify App Consultation" />
      <About
        heading="Introduction to Our Shopify Store Development "
        heading2={"Expertise"}
        para={
          <>
            With over 10 years of experience. Dignite Studios deliver the
            trusted shopify store development services for the modern ecommerce
            businesses. We build public apps, private apps and custom
            integrations which are based on the unique needs of each business.
            Serving ecommerce, retail, DTC brand and marketplaces. We focus on
            the performance, stability and scalability. Our solutions also
            ensure reliable shopify focused delivery improving the store
            functionality and supporting long growth. Start your journey with a
            team which combines expertise, professionalism and practical
            execution. To create shopify stores which perform, scale and drive
            results for the businesses for all the sizes.
          </>
        }
        button="Get Free Shopify App Consultation"
      />
      <Services
        services={services}
        header={"Shopify Website Development"}
        header2={"Services"}
        button={"Start Your Shopify App Project"}
        para={
          "Our shopify website development Services provide the structured solutions for your spotify store. We deliver scalable, secure and user friendly apps adapted to business goals."
        }
      />
      <TechTools
        header="Advanced Shopify App Development technology Stack"
        para="Dignite Studios as the leading shopify development company, uses the modern tools to deliver the scalable shopify apps. Our expertise among top shopify development companies ensures the strong performance. We offer comprehensive mobile app development ecommerce focusing on being responsive, reliable and efficient. "
        tech={techStackData}
      />
      <CTA
        header="Start Building Your Shopify Store Today"
        para="Enhance your business with the expert shopify store development services. We deliver scalable, secure shopify solutions for long term growth."
        btn="Request Shopify App Development Quote"
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Reliable Shopify Store Development "}
        header2={"Services Process"}
        para={
          "Our shopify store development services follow the structured steps to ensure the quality and the performance. As the trusted shopify store development company, we focus on the efficiency, scalability and the long term success."
        }
        button={"Start Your Shopify App Journey"}
      />
      <Bussiness
        bs={highlights}
        header={"Best Shopify App Development"}
        header2={"Services"}
        button={"Partner With Dignite Studios"}
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
            We offer the best shopify development company solutions. It focuses
            on the scalable, secure and user-friendly Shopify stores. Our
            expertise positions us among the most leading shopify app
            development companies. Partner with a team dedicated to long term
            growth and the practical execution.
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industries We Serve as a Shopify App "}
        header2={"Development Company"}
        para={
          "We deliver the Shopify store solutions across multiple industries. Helping businesses improve the operations, enhance the customer experience and scale efficiently."
        }
        button={"Discuss Your Idea "}
      />

      <MobileApp
        header={"Benefits Of Having a"}
        header2={"Shopify Store"}
        para={
          "Our stores provide high business value, ROI and automation while supporting long term growth."
        }
        button={"Build a Scalable Shopify App "}
        cards={BENEFITS}
      />
      <Features
        button={"Get Feature Recommendations"}
        header={"Must Have Features in Your"}
        header2={"Shopify Store"}
        para={
          "A successful Shopify store needs essential features which improve performance, user experience and business growth. From the secure payments and fast loading speed to mobile responsiveness and easy navigation, every feature plays the key role. These must have elements to help to streamline operations, attract the customers and ensure that your store runs smoothly while supporting the long term scalability and the success."
        }
        features={featureData}
      />
      <CTA2
        header={"Accelerate Your Business With Expert Store Solutions "}
        para={
          "Grow your business with expert shopify store development services. Build scalable, reliable and efficient shopify stores."
        }
        btn={"Request Shopify App Development Quote"}
      />
      <SuccessStories
        header={"Proven Shopify Store"}
        header2={"Success Stories"}
        para={
          "Our Portfolio demonstrates how the structured Shopify stores built by shopify development company in usa improve performance, conversion and the business scalability. Explore Our Work."
        }
      />
      {/* <SEO  header={"Focused Mobile Application Development Boston"} para={"Choosing the right partner in Boston can completely change the way your app performs in a competitive market."}/> */}
      <Testimonials
        test={test}
        header={"Trusted Shopify"}
        header2={"App Development Company"}
        para={""}
      />
      <Faq faqs={faqs} />
      <ContactUs
        img={"/ecommerce/shopify-app/c-img.webp"}
        pathname={"Shopify Store Development"}
        header={"Get Your Shopify Store Development Started"}
        header2={""}
        para={
          "Work with the Dignite Studios to build a scalable shopify store using the reliable shopify store development services. Our team also ensures smooth planning, development and long term growth for your ecommerce business."
        }
        btn={"Request Shopify App Development Quote"}
      />
    </div>
  );
};

export default ShopifyStoreDevelopment;
