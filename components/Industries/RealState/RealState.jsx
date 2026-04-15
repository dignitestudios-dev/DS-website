import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Services from "./Services";
import Link from "next/link";
import Bussiness from "../ui/Bussiness";
import {
  FaWordpress,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";
import Industries from "../ui/Industries";
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
import { FiSearch } from "react-icons/fi";
import { MdSpeed } from "react-icons/md";
import { HiTrendingUp } from "react-icons/hi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsBuildingGear } from "react-icons/bs";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiHandlebarsdotjs, SiGraphql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsTerminal } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineViewInAr } from "react-icons/md";
import { IoHardwareChipOutline } from "react-icons/io5";
import { TbView360 } from "react-icons/tb";
import { AiOutlinePicture } from "react-icons/ai";
import DeliveryFeatures from "./DeliveryFeatures";
import DeliveryApps from "./DeliveryApps";

import Niches from "./Niches";
import Monetization from "./Monetization";
import TabularTechs from "./TabularTechs";
import ThirdPartyIntegration from "./ThirdPartyIntegration";
import Cost from "../ui/Cost";
import Impact from "./Impact";
const services = [
  {
    icon: "1",
    icon2: "h1",
    title: "Custom Real Estate App Development",
    description: (
      <>
        We build custom apps based on business needs. Our solutions support
        property listings, user management and smooth navigation for the better
        customer experience.
      </>
    ),
  },
  {
    icon: "2",
    icon2: "h2",
    title: "Property Management Software",
    description: (
      <>
        Our apps help businesses manage listings, track property details and
        update information easily using the reliable real estate app development
        solutions.
      </>
    ),
  },
  {
    icon: "h3",
    icon2: "3",
    title: "CRM Systems for Brokers",
    description: (
      <>
        We create CRM systems that help brokers manage the leads, track clients
        and improve the communication for the better sales results.
      </>
    ),
  },
  {
    icon: "4",
    icon2: "h4",
    title: "AI Enabled Dashboards for Investors",
    description: (
      <>
        We build dashboards that show the insights, trends and property data.
        This helps the investors make better decisions.
      </>
    ),
  },
  {
    icon: "5",
    icon2: "h5",
    title: "Real Estate Web App Development",
    description: (
      <>
        We develop responsive web apps that allow the users to browse
        properties, manage listings and interact quite easily on any device.
      </>
    ),
  },
  {
    icon: "6",
    icon2: "h6",
    title: "Property Marketing Applications",
    description: (
      <>
        Our apps help businesses also promote properties through the images,
        videos and listings that attract more buyers.
      </>
    ),
  },
  {
    icon: "7",
    icon2: "h7",
    title: "Property Valuation Applications",
    description: (
      <>
        We build tools which estimate property value based on the market data.
        This supports buyers and sellers in the decision making.
      </>
    ),
  },
  {
    icon: "8",
    icon2: "h8",
    title: "Real Estate Agent Applications",
    description: (
      <>
        We design apps for the agents to manage listings, track leads and
        communicate with the clients easily while using the mobile app
        development for real estate.
      </>
    ),
  },
];

const highlights = [
  {
    icon: "/industries/food-industry/s1.webp",
    title: "Experienced Mobile App Developers",
    desc: "Our talented real estate app developers create apps which adjust to corporate objectives guaranteeing dependable operation and a fluent user experience across all the platforms",
  },
  {
    icon: "/industries/food-industry/s2.webp",
    title: "Scalable Architecture",
    desc: "Apps are designed to handle growth, high traffic and increasing property listings while maintaining fast performance and fluent user interactions.",
  },
  {
    icon: "/industries/food-industry/s3.webp",
    title: "Agile Development Process",
    desc: "To guarantee quality and efficiency, we use an organised agile methodology with the precise milestones, iterative testing and the prompt delivery.",
  },
  {
    icon: "/industries/food-industry/s4.webp",
    title: "Transparent Communication",
    desc: "Clients receive regular project updates, progress reports and clear communication keeping them involved at every step of app development.",
  },
  {
    icon: "/industries/food-industry/s5.webp",
    title: "Secure Integrations",
    desc: "Our team ensures all integrations, payment systems and data storage are safe, compliant and protect sensitive property and user information.",
  },
  {
    icon: "/industries/food-industry/s6.webp",
    title: "Proven Track Record Of Successful Apps",
    desc: "We have successfully delivered multiple real estate apps, helping clients improve property management, customer engagement and overall business growth.",
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
    name: "Sebastian",
    designation: "— Urban Realty",
    review:
      "Working with Dignite Studios, a reliable real estate mobile app development company was a smooth experience. Their team understood our requirements clearly and delivered exactly what we needed",
  },
  {
    name: "Sophia",
    designation: "— Prime Properties",
    review:
      "Our app performance improved significantly after launch. The team handled everything professionally and kept us informed throughout the project",
  },
  {
    name: "John Mathews",
    designation: "— Homespace",
    review:
      "The developers were very skilled and easy to work with. They also helped us build a user friendly app for our customers",
  },
  {
    name: "James Anderson",
    designation: "— Realty Hub",
    review:
      "We got the best experience from this team. The development process was also well organized and completed on time",
  },
  {
    name: "John Carter",
    designation: "— Estate Link",
    review:
      "Communication was clear and consistent. The team from this trusted real estate mobile app development company made sure we understood every step and delivered a reliable application",
  },
  {
    name: "Oliver Parker",
    designation: "— Dream Houses",
    review:
      "They delivered our app on time without any issues. The final product worked smoothly and met all our expectations",
  },
  {
    name: "Andrew Scott",
    designation: "— Property Pro",
    review:
      "Highly professional team with strong technical knowledge. They built a scalable app that supports our growing business needs",
  },
  {
    name: "Ryan King",
    designation: "— Build Estate",
    review:
      "The team was really supportive. They also quickly resolved our queries and provided the useful updates",
  },
  {
    name: "Ethan Wright",
    designation: "— Real Connect",
    review:
      "It was easy to collaborate with their team. They were also responsive, flexible and focused on delivering quality results",
  },
  {
    name: "Samuel Turner",
    designation: "— Smart Realty",
    review:
      "We found their services very reliable. The app works quite perfectly and also improved our customer engagement",
  },
];

const BENEFITS = [
  {
    title: "Better Customer Experience",
    desc: "Apps provide smooth browsing, simple navigation and quick property search, helping users find and explore listings without confusion or delays.",
    icon: <FiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Faster Property Discovery",
    desc: "Users can quickly search and filter properties based on their needs, saving time and making the property discovery process easier and quite faster.",
    icon: <MdSpeed color="#F15C20" size={25} />,
  },
  {
    title: "Increased Sales Opportunities",
    desc: "Through improved user experience, apps enable businesses to reach more potential consumers, increase visibility and boost the likelihood that visitors will become customers.",
    icon: <HiTrendingUp color="#F15C20" size={25} />,
  },
  {
    title: "Direct Communication Between Buyers and Agents",
    desc: "Through the immediate chat or phone connections made possible by apps, buyers and agents can communicate more quickly and enhance the client experience in general.",
    icon: <BiMessageRoundedDots color="#F15C20" size={25} />,
  },
  {
    title: "Digital Transformation of Property Businesses",
    desc: "Apps help businesses move from the manual processes to digital systems using mobile app development for the real estate, improving the efficiency and long term growth.",
    icon: <BsBuildingGear color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "How much does it cost to build a real estate app?",
    answer:
      "The real estate app development company cost depends mostly on features, design complexity, integrations and platform choice. A simple app can cost less, while advanced apps with AI dashboards and the custom features require a higher budget. The final cost varies based on project scope and also the business requirements.",
  },
  {
    id: 2,
    question: "How long does development take?",
    answer:
      "The timeline for real estate applications depends on the app’s complexity and features. The basic app may also take a few weeks, while medium or complex apps can also take several months. Proper planning, design and testing also affect the overall development time and final delivery schedule.",
  },
  {
    id: 3,
    question: "What features are essential in a real estate app?",
    answer:
      "Essential features include property listings, advanced search filters, map integration, user profiles, chat options and push notifications. These features improve user experience and make property discovery easier. Additional features like virtual tours and analytics can further enhance overall app performance.",
  },
  {
    id: 4,
    question: "Can you integrate MLS or third party property APIs?",
    answer:
      "Yes, we integrate MLS systems and third party APIs such as maps, payment gateways and property databases. These integrations improve the app functionality and also provide the real time data. Our mobile app development for real estate approach ensures the smooth and secure API integration without affecting performance or user experience.",
  },
  {
    id: 5,
    question: "Do you provide post launch support?",
    answer:
      "Yes, we offer complete post launch support as part of our real estate app development services. This also includes regular updates, bug fixes, performance optimization and feature improvements. Our team also ensures your app runs smoothly and stays updated as your business grows and users also need to evolve.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We understand your business goals, target users and market needs. Then we create a clear strategy and define features required for your real estate app.",
  },
  {
    step: "02",
    title: "UI UX Design",
    desc: "Our group creates interfaces that are straightforward and easy to use. For buyers and agents, we prioritize easy navigation, tidy layouts and an improved user experience",
  },
  {
    step: "03",
    title: "App Development",
    desc: "Our developers use tools and technology to create the app. On every device, we promise reliable performance, scalability and fluent operation",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    desc: "To find and fix bugs, we thoroughly test the program. This ensures smooth performance, secure data handling and the reliable user experience before the app is being designed.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "We launch the app on required platforms after final testing. Our team ensures smooth deployment without issues or delays during the release process.",
  },
  {
    step: "06",
    title: "Maintenance & Support",
    desc: "After the launch, we continue to offer assistance. To keep the app functioning properly, our staff also upgrades features, resolves bugs and boost performance.",
  },
];

const featureData = [
  {
    title: "Artificial Intelligence for Property Recommendations",
    desc: "AI improves discovery and boosts user engagement within the app by analysing user activity, prior searches and preferences to recommend properties which meet their needs.",
    icon: <GiArtificialIntelligence className="text-5xl text-[#F15C20]" />,
  },
  {
    title: "Augmented Reality for Virtual Tours",
    desc: "By providing virtual walkthroughs and precise room views, augmented reality (AR) allows the users to explore properties in a realistic manner without to physically visit locations",
    icon: <MdOutlineViewInAr className="text-5xl text-[#F15C20]" />,
  },
  {
    title: "Big Data for Market Insights",
    desc: "Big Data gathers and examines property, user and market data to produce useful insights that assist companies in making more informed marketing and investment choices.",
    icon: <FaDatabase className="text-5xl text-[#F15C20]" />,
  },
  {
    title: "IoT for Smart Property Management",
    desc: "IoT integration enables real estate apps to communicate with the smart devices in buildings, facilitating effective management of automation systems, utilities and security",
    icon: <IoHardwareChipOutline className="text-5xl text-[#F15C20]" />,
  },
  {
    title: "Virtual Reality for Immersive Experiences",
    desc: "Before physically seeing the property, consumers may visualise layouts, spaces and designs through completely immersive property tours made possible by virtual reality technology.",
    icon: <TbView360 className="text-5xl text-[#F15C20]" />,
  },
  {
    title: "Image Recognition for property Features",
    desc: "Image recognition enhances the accuracy of listings for the buyers and agents by identifying property features from uploaded photographs and automating categorisation",
    icon: <AiOutlinePicture className="text-5xl text-[#F15C20]" />,
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
const RealState = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        button="Discuss Your App Idea "
        heading="Build Powerful Real Estate Apps for Modern"
        heading2={"Property Business"}
        para={
          <>
            The real estate market is growing fast with digital platforms.
            Buyers and sellers now prefer mobile apps to search and manage the
            properties. A strong app makes the property discovery simple and
            fast. Dignite Studios is a leading real estate app development
            company with over 10 years of experience and 50+apps delivered. We
            build custom apps for the agents, brokers and property businesses.
            Our team creates user friendly platforms that support easy search,
            listing management and communication. As a trustworthy real estate
            mobile app development firm, we also prioritize scalability and
            performance. We help businesses grow and improve customer
            experience.
          </>
        }
      />
      <Services
        header="Real Estate App Development "
        header2={"Services"}
        button={"Explore Our Services"}
        para="We offer complete real estate app development services that help businesses manage properties, connect with buyers and improve the sales. Our team builds scalable apps with modern features to support the real estate businesses and marketplaces.   "
        services={services}
      />
      <CTA
        header="Start Your Real Estate App Project "
        para=" Ready to build your app with our real estate mobile app developer. Our team creates scalable platforms through advanced search, property management and smooth user experience. "
        btn="Start Your Real Estate App Project "
      />
      <SuccessStories
        header="Real Estate App Development Case Studies  "
        para="We have delivered successful apps for property businesses. Our case studies show how our real estate app development solutions improved user experience, increased engagement and supported business growth. "
      />
      <DeliveryFeatures />
      <MobileApp
        cards={BENEFITS}
        header2={"Real Estate Apps"}
        header=" Benefits of Investing in "
        para="Real Estate apps help businesses grow faster and manage daily operations easily. They boost productivity, facilitate automation and enhance the customer experience. Companies may also increase user reach, boost engagement and create scalable digital platforms which facilitate long term growth by investing in mobile app development for real estate.   "
        button=" Book a Free Consultation  "
      />

      <Features
        header="Cutting Edge Technologies for"
        header2={"Real eState Apps"}
        para="Utilising modern technologies, our real estate app development solutions also enhance productivity performance, and user experience. These tools support companies in data analysis, property management and client engagement.  "
        button={"Lets Grow Your Business "}
        // button="Get Feature Recommendations"
        features={featureData}
      />
      <TabularTechs />
      <Bussiness
        header="Why Choose Our Real Estate App "
        header2={" Development Company"}
        button="Let's get started "
        para={
          <>
            We provide real estate app developer with reliable solutions for
            property businesses. To guarantee constant expansion and
            performance, we focus on scalable apps, safe integrations and the
            long term maintenance.
          </>
        }
        bs={highlights}
      />
      <Process
        header="Our Real Estate Application Development Process"
        para="Our process ensures smooth and structured app delivery from start to finish. As a trusted real estate mobile app developer, we focus on planning, design, development, testing and support to build reliable apps which meet business goals and deliver a fluent user experience.   "
        steps={PROCESS_STEPS}
      />
      <Impact />
      {/* <Industries
        header="Food Delivery App Development Services for Different "
        header2={" Niches"}
        para="Having an experience of 10+ years in different industries and niches, we assure you that the food delivery app solutions we provide work for a variety of business models. We can work for anyone, whether it’s a single restaurant or a multi-vendor platform. The apps we create are built to meet the unique needs of each niche. "
        VALUE_PROPOSITION={VALUE_PROPOSITION}
      />
      <Niches/>  */}

      {/* <TabularEcommerceTechs /> */}
      {/* <CTA2 header="Searching for a Team Who Builds Food Delivery App?" para="Your idea can become a powerful food delivery app with the right team. Dignite Studios builds solutions that make ordering simple and operations smooth. Our focus is on performance and reliability so your business can grow with confidence." btn="Get Started Today"/>
        <Monetization/>
   
     
     
      <ThirdPartyIntegration/>
      <DeliveryApps/> */}

      {/* <CTA2
        header="Start Your BigCommerce Project Today"
        para="If you want a reliable Ecommerce platform, our BigCommerce development Services can help. Our team builds secure, scalable and high performing online stores. We ensure every step supports business growth and better customer experience. "
        btn="Request BigCommerce Development Quote"
      /> */}
      <Cost
        title=" Industry Wide Cost Of Real Estate App"
        description={
          <>
            The cost of building a property app depends on many factors. These
            include app features, level of complexity, integration development
            approach. The real estate app development cost can change based on
            business needs. The estimates below give a general idea to help
            businesses plan their budget.{" "}
          </>
        }
        cards={[
          {
            label: "Simple Apps",
            range: " $8,000- $40,000",
            detail:
              "Simple apps are best for startups or small real estate businesses. These apps include the basic features such as the property listings, simple search filters, map view and contact forms. They provide an easy browsing experience for users who want quick access to property information.",
          },
          {
            label: "Medium Complexity Apps",
            range: " $45,000- $90,000",
            detail:
              "These apps are suitable for growing businesses and property platforms. They also include features like user login, advanced filters, property comparison tools, push notifications and third party integration. The real estate app development cost at this level is higher but it supports better user experience and improved business operations.",
          },
          {
            label: "Complex Real Estate Apps",
            range: " $95,000-$140,000",
            detail:
              "Complex apps built for large businesses are marketplaces. They also include advanced features such as the smart recommendations, virtual property tours, CRM integrations, analytics dashboards and scalable systems. These apps require higher real estate app development cost due to the advanced functionality and the strong infrastructure.",
          },
        ]}
        btn={"Get a Custom Cost Estimate. "}
      />
      <Testimonials
        header=" Client Testimonials for Real Estate App Development Company "
        test={test}
        para={
          "Clients trust our real estate app development company for delivering reliable and high quality solutions. We also worked with multiple real estate businesses, helping them to improve performance, user experience and digital growth. Below is the feedback that we got from our clients. "
        }
        // button="Work With Our Expert Team"
      />
      <Faq faqs={faqs} header="FAQs" />
      <ContactUs
        pathname={"Real Estate App dev"}
        img={"/industries/real-state/c-img.webp"}
        header="Start Your Real Estate App Journey"
        para="Share your app idea with our real estate app development company. We will guide you with the right solution and strategy.  "
        btn="Get Free Consultation "
      />
    </div>
  );
};

export default RealState;
