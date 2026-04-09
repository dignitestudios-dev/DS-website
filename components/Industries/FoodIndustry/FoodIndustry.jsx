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

import {  FaReact } from "react-icons/fa";
import { SiNextdotjs, SiHandlebarsdotjs, SiGraphql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsTerminal } from "react-icons/bs";
import { FaGlobe, FaSyncAlt, FaMotorcycle, FaBell, FaChartBar, FaRocket, FaUserCheck, FaMicrophone, FaMoon, FaChartLine, FaUtensils, FaClock, FaShoppingCart, FaTag, FaTruck, FaCreditCard, FaComments } from "react-icons/fa";
import DeliveryFeatures from "./DeliveryFeatures";
import DeliveryApps from "./DeliveryApps";

import Niches from "./Niches";
import Monetization from "./Monetization";
import TabularTechs from "./TabularTechs";
import ThirdPartyIntegration from "./ThirdPartyIntegration";
import Cost from "../ui/Cost";
const services = [
  {
    icon: "f1",
    icon2: "f11",
    title: "Custom Food Delivery App Development",
    description: (
      <>
        We create custom food apps that are made for your business. Every
        feature and workflow is built to meet your unique requirements and goals.
      </>
    ),
  },
  {
    icon: "f2",
    icon2: "f22",
    title: "Customer App Development",
    description: (
      <>
        Dignite Studios develops fully functional food delivery apps. Helping
        with smooth ordering and easy payment options. Our food delivery app
        development company designed it to provide an engaging user experience.
      </>
    ),
  },
  {
    icon: "f3",
    icon2: "f33",
    title: "Restaurant App Development",
    description: (
      <>
        We create restaurant and vendor apps that make managing deliveries and
        orders easy. Businesses can update menus and track progress.
      </>
    ),
  },
  {
    icon: "f4",
    icon2: "f44",
    title: "Delivery Agent App Development",
    description: (
      <>
        We develop delivery agent apps too. These are the apps that help drivers
        manage orders and update status quickly. It makes delivery operations
        more efficient.
      </>
    ),
  },
  {
    icon: "f5",
    icon2: "f55",
    title: "White-Label Food Delivery Solutions",
    description: (
      <>
        We provide white-label food delivery solutions that benefit businesses
        by helping them launch their own branded apps quickly. They’re fully
        customizable and ready to go.
      </>
    ),
  },
  {
    icon: "f6",
    icon2: "f66",
    title: "Payment Gateway Integration",
    description: (
      <>
        The team is professional at integrating secure and reliable payment
        gateways into your food delivery app. This ensures smooth transactions
        and a safe payment experience.
      </>
    ),
  },
  {
    icon: "f7",
    icon2: "f77",
    title: "API Integrations",
    description: (
      <>
        We successfully integrate third-party APIs into your food delivery app
        to add features. Apps like ike maps, notifications, and analytics. This
        enhances the overall user experience.
      </>
    ),
  },
  {
    icon: "f8",
    icon2: "f88",
    title: "Cloud Kitchen App",
    description: (
      <>
        We build cloud kitchen apps that make managing orders and deliveries
        easy. The app helps coordinate multiple kitchens and ensures a smooth
        experience for staff and customers.
      </>
    ),
  },
  {
    icon: "f9",
    icon2: "f99",
    title: "Multiple Restaurant Features",
    description: (
      <>
        Dignite Studios creates food apps that allow customers to browse and
        order from multiple restaurants in one place. The app makes ordering
        convenient for users.
      </>
    ),
  },
];

const highlights = [
  {
    icon:"/industries/food-industry/s1.webp",
    title: "12+ Years of Development",
    desc: "We’re the best food delivery app development company USA with over 10+ years of experience, building high-performing apps.",
  },
  {
        icon:"/industries/food-industry/s2.webp",
    title: "High Level Expertise",
    desc: "Being one of the top food delivery app development providers, we provide top-tier design and development.",
  },
  {
    icon:"/industries/food-industry/s3.webp",
    title: "Expert Project Managers",
    desc: "Our professional project managers make sure to keep the entire build of your food app is on track, providing smooth execution throughout.",
  },
  {
    icon:"/industries/food-industry/s4.webp",

    title: "100% Transparent Procedure",
    desc: "The app development team makes sure you get the updates on time. Through updates, we ensure transparency to your business needs.",
  },
  {
        icon:"/industries/food-industry/s5.webp",
    title: "Post-Launch Support",
    desc: "The support services we provide make your food delivery app competitive, so you can easily depend on our food app development services.",
  },
  {
    icon:"/industries/food-industry/s6.webp",
    title: "Custom Solutions",
    desc: "Every food delivery app we build is supposed to meet your requirements through custom food delivery app development.",
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
    name: "Sarah Williams",
    designation: "— BiteFast, CEO",
    review:
      "The team delivered an amazing food delivery app. Our customers love it, and operations have never been smoother.",
  },
  {
    name: "Lauren Smith",
    designation: "— TastyBites, Co-Founder",
    review:
      "Their expertise in app development helped us launch quickly. The solution is intuitive and drives great customer engagement.",
  },
  {
    name: "Emily Johnson",
    designation: "— QuickEats, Operations Manager",
    review:
      "Their customized food delivery app development exceeded our expectations. We now manage orders and deliveries efficiently, improving overall business performance.",
  },
  {
    name: "Michael Thompson",
    designation: "— FreshFeast, CTO",
    review:
      "From design to deployment, the process was seamless. Our customers enjoy a smooth ordering experience every time.",
  },
  {
    name: "Adam Rick",
    designation: "— YumKart, Product Head",
    review:
      "The team understood our needs perfectly. The app has helped increase sales and customer satisfaction significantly.",
  },
  {
    name: "Daniel Lee",
    designation: "— FoodHive, COO",
    review:
      "Excellent support and customized food delivery app development. The delivery tracking and notifications work flawlessly, keeping customers happy and informed.",
  },
  {
    name: "Olivia Martinez",
    designation: "— FlavorBox, Managing Director",
    review:
      "Professional and reliable team. The app is scalable, efficient, and easy for both our staff and customers to use.",
  },
];



const BENEFITS = [
  {
    title: "Expanded Customer Reach",
    desc: "A food delivery app helps your business reach more customers beyond your local area. It helps you attract new users and increase orders through convenient online access.",
    icon: <FaGlobe color="#F15C20" size={25} />,
  },
  {
    title: "Increased Order Frequency and Sales",
    desc: "A food delivery app makes ordering easy and convenient. That means encouraging repeat purchases and promotions, and helping restaurants increase order frequency.",
    icon: <FaSyncAlt color="#F15C20" size={25} />,
  },
  {
    title: "Efficient Delivery Management",
    desc: "With our food delivery app development services, your food delivery app means you can track the orders and assign the deliveries accordingly. It helps reduce errors and improve customer satisfaction.",
    icon: <FaMotorcycle color="#F15C20" size={25} />,
  },
  {
    title: "Enhanced Customer Engagement",
    desc: "Restaurants can send personalized offers and notifications with an app. It makes communication easier and helps build stronger customer relationships.",
    icon: <FaBell color="#F15C20" size={25} />,
  },
  {
    title: "Analytics and Insights",
    desc: "A food delivery app provides data about orders and sales. Restaurants and startups can make more aware decisions and improve business performance.",
    icon: <FaChartBar color="#F15C20" size={25} />,
  },
  {
    title: "Competitive Advantage",
    desc: "Dignite Studios helps businesses stand out by offering convenience. The apps build modern digital experiences that give restaurants and startups an edge over competitors.",
    icon: <FaRocket color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "How much time does it usually take to build a food delivery mobile app?",
    answer:
      "Dignite Studios doesn’t provide a fixed, similar timeline for each food mobile app during development. The time always depends on the complexity and features of every food delivery application. Usually, a mid-level application would take up to 8-12 weeks, but it all depends, again. If you need a final cost and pricing estimate, contact our team and share your app idea.",
  },
  {
    id: 2,
    question: "Can you build iOS applications for Food delivery apps, too?",
    answer:
      "We’re experts, building both iOS and Android food delivery apps. Hire food delivery mobile app developer who creates high-performance applications for businesses. The developers can easily work with native and Swift to develop applications that feel simple while ensuring functionality.",
  },
  {
    id: 3,
    question: "Would you provide support after we’re done with the app launch?",
    answer:
      "Yes. It’s called post-launch support, and we definitely stay with you even when your food delivery app is launched. Providing proper post-launch maintenance and updates about the app. So that we know that the food app would stay aligned with the vision and users’ needs.",
  },
  {
    id: 4,
    question: "What if I have a rough idea? Can you guide me?",
    answer:
      "Here’s a thing: There’s no app that starts with the perfect, flawless idea. With this understanding, we show guidance through a free consultation and explain the concepts in much easier way. The food app experts can help you out by adding practical aspects to your application and preparing it for the future.",
  },
  {
    id: 5,
    question: "How much does a food delivery application usually cost?",
    answer:
      "Basically, we don’t have fixed pricing rules for all the applications. The cost completely depends on the features and the integrations you want your food application to have. It’s up to your food delivery app’s vision, but at Dignite Studios, we keep pricing transparent with no hidden fees.",
  },
  {
    id: 6,
    question: "Are you currently working with startups, too, or just the enterprises?",
    answer:
      "The food app development team works with both startups and enterprises. So, it doesn’t matter if you’re a startup or enterprise, we would definitely work with you. Whether you’re building an MVP or scaling an existing application. We would look forward to building an amazing app together either way.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery and Strategy",
    desc: "When the goals are clear, the app for your restaurant would turns out amazing, so in this phase, we align your business goals with the food app’s vision and features.",
  },
  {
    step: "02",
    title: "User Interface Design",
    desc: "It is a food app development process in which a preliminary visual mock-up has been created that shows the mobile app’s initial design.",
  },
  {
    step: "03",
    title: "Development Stage",
    desc: "The food app development begins, and our professional mobile app developers work according to your product roadmap and total execution time.",
  },
  {
    step: "04",
    title: "Testing Stage",
    desc: "Conducting tests at every phase of the app development process helps keeping up with the latest status updates.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "App deployment is where preparation connects performance, resulting in smooth operation across iOS and Android.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "Once we have launched your food app, the developers’ focus shifts to checking performance and optimizing features based on user feedback.",
  },
];





const featureData = [
  {
    title: "User Registration",
    desc: "With the help of this app, users can sign up quickly. The app makes joining simple and convenient for everyone.",
    icon: <FaUserCheck className="text-5xl" />,
  },
  {
    title: "Voice Search",
    desc: "Customers should be able to find restaurants or dishes using their voice because it adds inclusivity and actually makes searching faster and easier for a smooth experience.",
    icon: <FaMicrophone className="text-5xl" />,
  },
  {
    title: "Dark Mode Support",
    desc: "In order to reduce eye strain, the app should be able to provide dark modes because it provides a comfortable viewing experience and help save battery life.",
    icon: <FaMoon className="text-5xl" />,
  },
  {
    title: "Analytics Dashboard",
    desc: "Users should be able to track their spending and ordering habits with more ease. The dashboard helps them stay informed and monitor their activity effortlessly.",
    icon: <FaChartLine className="text-5xl" />,
  },
  {
    title: "GPS & Route Optimization",
    desc: "Our online food delivery app development company's food delivery app guides delivery agents along optimized routes to ensure faster and more efficient deliveries.",
    icon: <FaGlobe className="text-5xl" />,
  },
  {
    title: "Restaurant Recommendations",
    desc: "The app created by our online food delivery app development company suggests restaurants and dishes based on user preferences and past ordering behavior.",
    icon: <FaUtensils className="text-5xl" />,
  },
  {
    title: "Order Scheduling",
    desc: "Users can schedule orders ahead of time. The app ensures meals arrive exactly when they want without any hassle.",
    icon: <FaClock className="text-5xl" />,
  },
  {
    title: "Multiple Restaurant Ordering",
    desc: "Customers can order from multiple restaurants in one go. The food delivery app makes group orders simple and convenient.",
    icon: <FaShoppingCart className="text-5xl" />,
  },
  {
    title: "Discounts, Coupons & Loyalty Programs",
    desc: "The app provides rewards and special offers. It encourages customers to return and keeps them engaged with the platform.",
    icon: <FaTag className="text-5xl" />,
  },
  {
    title: "Real-Time Order Tracking",
    desc: "Customers can track their orders in real time. The app provides full visibility from preparation to delivery for a smooth experience.",
    icon: <FaTruck className="text-5xl" />,
  },
  {
    title: "Multiple Payment Options",
    desc: "The app allows payments through cards, wallets, or cash on delivery. It makes transactions simple, secure, and convenient for everyone.",
    icon: <FaCreditCard className="text-5xl" />,
  },
  {
    title: "In-App Chat & Support",
    desc: "Users can reach support directly in the app. Quick help ensures issues are resolved and customers stay satisfied.",
    icon: <FaComments className="text-5xl" />,
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
const FoodIndustry = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        button="Let’s Get Started "
        heading="About Dignite Studios"
        para={
          <>
     Being one of the best food delivery app development companies, the developers specialize in creating food applications that fulfill the evolving needs of food businesses. The demand is growing for online ordering and restaurants. And startups and cloud kitchens are instantly shifting toward digital platforms to meet customer expectations. This means helping them meet customer demands and give a competitive advantage in the market. Our goal is to build apps that support transformation.
The solutions we create while providing the trusted food delivery app development simplify order management, improve delivery operations, and enhance the overall customer experience. Our apps are designed to make daily operations like live tracking and payment integration more efficient. We work with a wide range of business models, including single restaurants, multi-vendor food delivery platforms, and cloud kitchens. 
The team is understanding and helps you overcome the unique challenges of each and deliver solutions that grow with your business. We understand that every food business operates differently. Having 10+ years of experience in different industries, we combine our knowledge with modern technology, so we help you come up with a solution that’s fully functional and helps your business grow and get more customers through providing smooth experiences. 

          </>
        }
      />
       <Services
        header="Expert Food Delivery App Development"
        header2={"Services"}
        button={"Explore Our Services"}
        para="Providing a complete suite of services in the category of on demand food delivery app development, we design applications that help restaurants and startups. Our services cover every aspect of app creation and custom development. The focus is on building apps that keep the customer engaged by providing a smooth experience.  "
        services={services}
      />
          <MobileApp
        cards={BENEFITS}
        header2={"Business"}
        header="Benefits of Having a Food Delivery App for Your "
        para="A food delivery app development may seem optional, but it’s interesting how an app built by the best food delivery app development company can transform your entire business to the extent that the revenue shows a major difference. Having an app means you can reach more customers, and you can manage your operations better.  "
        button=" Get Your App Built "
      />
     
        <CTA
        header="Still Just Thinking About Launching Your Food Delivery App?"
        para="It’s time to take your food business online with a fully customized delivery app. An application that’d help you streamline orders, improve deliveries, and provide a smooth experience for your customers. Let us turn your idea into a successful app. "
        btn="Talk to Our App Experts"
      />
        <Industries
        header="Food Delivery App Development Services for Different "
        header2={" Niches"}
        para="Having an experience of 10+ years in different industries and niches, we assure you that the food delivery app solutions we provide work for a variety of business models. We can work for anyone, whether it’s a single restaurant or a multi-vendor platform. The apps we create are built to meet the unique needs of each niche. "
        VALUE_PROPOSITION={VALUE_PROPOSITION}
      />
      <Niches/> 
      <DeliveryFeatures/>
      
      {/* <TabularEcommerceTechs /> */}
      <Features
        header="Key Features for a Successful Food"
        header2={"Delivery App"}
        para="Every food delivery app needs some mandatory features that are the must-haves when you’re creating the food delivery applications. Features that make ordering simple and operations smooth cannot be treated as optional. Because there are features that’d make the whole experience smooth for users and help businesses attract and retain customers. "
        // button="Get Feature Recommendations"
        features={featureData}
      />
<CTA2 header="Searching for a Team Who Builds Food Delivery App?" para="Your idea can become a powerful food delivery app with the right team. Dignite Studios builds solutions that make ordering simple and operations smooth. Our focus is on performance and reliability so your business can grow with confidence." btn="Get Started Today"/>
        <Monetization/>
         <SuccessStories
        header="  The Success Stories "
        para="You can explore our case studies section and see how we serve the industries and businesses, helping them build applications that just work perfectly for their industries and niche. The case studies we’re mentioning here highlight the challenges we dealt with and the solutions we provided. "
      />
      <Process
        header="Proven Process of a Food Delivery App Development Company"
        para="Every application we develop solves a problem. So, the team works with a structured approach that brings your business idea to life. Different food app development companies work with unique workflows, but when it comes to creating mobile apps at our development company, we utilize a perfectly structured approach of the best food app development companies to ensure that we design applications that work the proper way. Here’s the structured workflow that turns visions into apps.   "
        steps={PROCESS_STEPS}
      />
      <TabularTechs/>
      <ThirdPartyIntegration/>
      <DeliveryApps/>
      <Bussiness
        header=" Why You Should Choose "
        header2={"Dignite Studios"}
        button="Choose The Right Team  "
        para={
          <>
      We are experts at building Food delivery applications. Having a team of the <Link href={"/"} >best developers </Link>  and designers, we provide you with everything you need as a custom food app development company. Dignite Studios consists of a team that takes the time to understand your audience and goals before the development even begins. We deliver the functional food applications with clear communication and reliable solutions.   
          </>
        }
        bs={highlights}
      />
    
  
   
     
      {/* <CTA2
        header="Start Your BigCommerce Project Today"
        para="If you want a reliable Ecommerce platform, our BigCommerce development Services can help. Our team builds secure, scalable and high performing online stores. We ensure every step supports business growth and better customer experience. "
        btn="Request BigCommerce Development Quote"
      /> */}
      <Testimonials
        header="What Our Clients Say "
        test={test}
        para={" "}
        // button="Work With Our Expert Team"
      />
      <Cost title="Food Delivery App Development Cost Industry-Wide" description={<>
        The cost of developing a food delivery app isn’t the same for every type. It varies widely. It depends on factors like features, complexity, platform choice, third-party integrations. We can definitely just provide an average based on market research and studies. It doesn’t represent Dignite Studios’ pricing models, so if you need a more specific quote, <Link className="text-orange-600" href="/contact-us">contact us today</Link>.
        </>} btn={"Plan Your App Budget"} />
      <Faq faqs={faqs} header="Commonly Asked Questions" />
      <ContactUs
        img={"/industries/food-industry/c-img.webp"}
          pathname={"Food Industry"}
        header="Build Your Food Delivery App with Us"
        para=" Take your food business online with us by getting a customized delivery app. Contact Dignite Studios for a free consultation and discover how our experts can help you grow your business with a reliable and highly functional app solution. "
        btn="Get Free Consultation "
      />
    </div>
  );
};

export default FoodIndustry;


