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

const services = [
  {
    icon: "database",
    icon2: "database1",
        title: "WooCommerce Development Services",
    description: (
      <>
        Create mobile optimized WooCommerce stores that provide smooth, fast
        and engaging experiences for users, increasing sales and customer
        satisfaction on mobile devices.
      </>
    ),
   
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "WooCommerce Secure Payment Gateways",
    description: (
      <>
        Enable reliable, fast and fully secure payment options for customers,
        boosting trust, reducing cart abandonment and ensuring smooth checkout
        experiences.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "WooCommerce SEO Optimized Platform",
    description: (
      <>
        Build a store with SEO friendly architecture and content strategies
        that improve search rankings, increase visibility and attract more
        organic traffic to your WooCommerce store.
      </>
    ),
  },
  {
       icon: "pipe",
    icon2: "pipe3",
  
    title: "WooCommerce Migration Services",
    description: (
      <>
        Effortlessly transfer your existing ecommerce store to WooCommerce
        without downtime, data loss or performance issues, ensuring a smooth
        transition and business continuity.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "WooCommerce Integration Solutions",
    description: (
      <>
        Integrate essential plugins, tools and third party applications to
        enhance store functionality, streamline operations and deliver better
        experiences to your customers.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
 title: "WooCommerce API Integration",
    description: (
      <>
        Link your WooCommerce store to third party platforms and applications to
        guarantee efficient data flow, automation and smooth overall business
        operations.
      </>
    ),
  },
];

const highlights = [
  {
    title: "WooCommerce Focused Expertise",
    desc: "Our team focuses completely on WooCommerce. This experience helps us to build reliable stores, custom plugins and integrations which support business growth and smooth shopping experiences.",
  },
  {
    title: "Certified WooCommerce Developers",
    desc: "Our certified WooCommerce developers follow industry standards and best practices. They build secure stores, develop custom features and ensure stable performance for long-term business success.",
  },
  {
    title: "Scalable & Secure Store Architecture",
    desc: "We design WooCommerce stores with strong architecture, ensuring your store remains secure, performs well under traffic, and easily scales as the business grows.",
  },
  {
    title: "Transparent Communication",
    desc: "We keep communication clear throughout the project. Our team shares progress updates and listens to feedback so every decision supports business goals.",
  },
  {
    title: "On Time Delivery",
    desc: "Our structured workflow helps us complete projects on time. We plan every stage carefully so the WooCommerce store launches smoothly without delays or quality issues.",
  },
  {
    title: "Long Term Store Support",
    desc: "After launch, we continue supporting your WooCommerce store. Our team provides updates, maintenance, performance checks and improvements to keep the store running smoothly.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare & Wellness Commerce",
    desc: "Our solutions support clinics and wellness brands. As the healthcare app development company, we create secure WooCommerce stores for healthcare products.",
  },
  {
    title: "Fintech & Subscription Platforms",
    desc: "We develop WooCommerce stores for subscription services and financial platforms. Our team ensures secure payments, automated billing and a smooth user experience.",
  },
  {
    title: "Ecommerce Retail Brands",
    desc: "We help retailers build powerful online stores. As an experienced ecommerce app development company, we create scalable WooCommerce solutions for retail brands.",
  },
  {
    title: "Logistics & On Demand Marketplaces",
    desc: "Our WooCommerce solutions support delivery and service platforms. Similar to an e-learning app development company, we also build structured systems for the users.",
  },
  {
    title: "Grocery",
    desc: "We create WooCommerce grocery stores which help customers quickly browse products, manage carts and complete orders through a simple and smooth checkout process.",
  },
  {
    title: "Fashion Apparel",
    desc: "Our WooCommerce stores help fashion brands showcase products with attractive layouts, smooth navigation and fast checkout experiences, improving customer shopping satisfaction.",
  },
  {
    title: "Home Decor",
    desc: "We design WooCommerce stores for home decor brands. Our stores present products clearly and help customers explore collections and purchase easily.",
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
    name: "Sarah Mitchell",
    designation: "— BrightCart Retail",
    review:
      "Dignite Studios built our WooCommerce store exactly how we imagined it. The team understood our goals and delivered a smooth shopping experience that our customers love.",
  },
  {
    name: "Daniel Roberts",
    designation: "— Urbanstyle Apparel",
    review:
      "Working with their team was simple and professional. They improved our store performance and helped us launch new features that increased our online sales.",
  },
  {
    name: "Emily Carter",
    designation: "— FreshBasket Grocery",
    review:
      "The developers were very supportive during the whole project. We chose to hire WooCommerce developers from Dignite Studios, our store now runs even faster and our customers can now easily place orders.",
  },
  {
    name: "Micheal Thompson",
    designation: "— NextWave Electronics",
    review:
      "Their attention to detail really impressed us. The store design, integration and performance improvements helped us to manage our online business much more efficiently.",
  },
  {
    name: "Olivia Green",
    designation: "— PureWellness Market",
    review:
      "Dignite Studios delivered a reliable WooCommerce store with clean design and easy navigation. Our customers now enjoy a much better shopping experience.",
  },
  {
    name: "James Walker",
    designation: "— StyleHub Fashion",
    review:
      "The team handles everything from design to development smoothly. Our store looks modern and performed very well even during high traffic periods.",
  },
  {
    name: "Sophia Martinez",
    designation: "— HomeAura Decor",
    review:
      "We appreciated their clear communication and professional approach. They built a store that reflects our brand perfectly and works flawlessly.",
  },
  {
    name: "William Turner",
    designation: "— QuickCart Marketplace",
    review:
      "Their developers created strong integrations and improved the checkout experience. Our customers complete purchases faster and more easily.",
  },
  {
    name: "Ava Collins",
    designation: "— GreenLeaf Organics",
    review:
      "Dignite Studios helped us launch our WooCommerce store without any complications. Their guidance made the whole development process simple.",
  },
  {
    name: "Ethan Brooks",
    designation: "— TechNova Gadgets",
    review:
      "The team delivered exactly what we needed. Our new store is stable, easy to manage and gives customers a smooth buying experience.",
  },
];

const BENEFITS = [
  {
    title: "Increased Customer Engagement",
    desc: "WooCommerce stores offer user-friendly browsing, product filtering and simple checkout. These features keep customers engaged and encourage repeated purchases.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Faster Store Operations",
    desc: "WooCommerce simplifies daily store management. With a single, simple dashboard, businesses can manage customers, track orders, edit goods and manage inventory.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Business Automation",
    desc: "Orders, notifications, inventory updates and payments are all managed by automation technologies. This helps firms run more quickly and effectively by reducing manual labor.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Revenue Growth",
    desc: "WooCommerce supports marketing tools, discount systems and SEO features which attract more visitors and increase conversions for better revenue growth.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Scalable Ecommerce Expansion",
    desc: "WooCommerce grows with your business. You can add products, integrate tools and expand into new markets without changing the platform.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "Do you build Scalable WooCommerce stores?",
    answer:
      "Yes. Our WooCommerce development services create stores that grow with your business. We ensure smooth performance, fast loading and easy management so your store can handle more products, more traffic and more orders, providing a reliable and fluent shopping experience for your customers at all times.",
  },
  {
    id: 2,
    question: "How long does WooCommerce development take?",
    answer:
      "The timeline depends on your store’s complexity, features and integrations. Our WooCommerce development agency follows a structured process to complete the project efficiently. We focus on quality, clear communication and timely delivery so your store launches on schedule and operates smoothly for your business.",
  },
  {
    id: 3,
    question: "Do you support WooCommerce plugin development?",
    answer:
      "Absolutely. With our custom WooCommerce development services, we build public, private and custom plugins. These plugins improve your store’s functionality, integrate third-party tools, automate processes and enhance the shopping experience, making your WooCommerce store more flexible, efficient and user friendly.",
  },
  {
    id: 4,
    question: "Can you refine my WooCommerce store idea?",
    answer:
      "Yes. Our WooCommerce development agency helps refine your store idea, plan features and implement the design. We guide you step by step to ensure your store is easy to use, scalable, visually appealing and fully aligned with your business goals and customer expectations.",
  },
  {
    id: 5,
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes. We serve businesses of all sizes. As the WooCommerce development company in USA, we deliver tailored WooCommerce solutions for startups and large enterprises, ensuring your store is secure, scalable and optimized to grow your business while providing a smooth experience for your customers.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & WooCommerce Planning",
    desc: "We start by understanding the business goals, products and audience. Our team defines the store features, integrations and structure. This planning stage also ensures a clear roadmap for the store development.",
  },
  {
    step: "02",
    title: "Store Design",
    desc: "Our designers create clean and user-friendly store layouts. Every design reflects the brand identity, improving navigation so customers can easily browse products and complete purchases.",
  },
  {
    step: "03",
    title: "Store Development",
    desc: "Our developers build reliable WooCommerce stores using modern standards. We develop features, integrations and secure systems that ensure performance, scalability and smooth shopping experiences.",
  },
  {
    step: "04",
    title: "Testing",
    desc: "Before the launch, we carefully test the store. Our team checks performance, security, payments and device compatibility to ensure a smooth and error-free shopping experience.",
  },
  {
    step: "05",
    title: "WooCommerce Deployment",
    desc: "After testing, we launch your WooCommerce store on the live server. Our team ensures everything runs smoothly and the store is optimized for performance and online visibility.",
  },
  {
    step: "06",
    title: "Post Launch Support",
    desc: "Our support continues after launch. We provide updates, maintenance, performance monitoring and improvements so your WooCommerce store keeps running smoothly and grows with your business.",
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
    title: "Inventory Management",
    icon: <MdInventory />,
  },
  {
    title: "Mobile Optimized Checkout",
    icon: <MdMobileFriendly />,
  },
  {
    title: "Analytics & Reporting",
    icon: <MdAnalytics />,
  },
  {
    title: "Ulti Payment Support",
    icon: <MdPayment />,
  },
  {
    title: "SEO friendly Architecture",
    icon: <MdTrendingUp />,
  },
  {
    title: "Performance Optimization",
    icon: <MdSpeed />,
  },
];



const techStackData = [
  {
    name: "WordPress",
    icon: <FaWordpress />,
  },
  {
    name: "WooCommerce",
    icon: <SiWoocommerce />,
  },
  {
    name: "PHP",
    icon: <FaPhp />,
  },
  {
    name: "MySQL / MariaDB",
    icon: <FaDatabase />,
  },
  {
    name: "WooCommerce REST API",
    icon: <SiWoocommerce />,
  },
  {
    name: "WordPress REST API",
    icon: <FaWordpress />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
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
           With over 10 years of experience, Dignite Studios specializes in WooCommerce development services for businesses of all sizes. We design and build public plugins, the private solution we deliver is quite reliable. It’s scalable and optimized for smooth fluent online store performance. Through focusing exclusively on WooCommerce , we also create high quality performance driven stores which meet the business goals. Either you need a new store, advanced custom features or the smooth party integrations. Our end to end solutions also enhance growth and improve the customer engagement. Providing the strong foundation for the long term Ecommerce success.
          </>
        }
      />
      <Services
        header="Custom WooCommerce development"
        header2={"Services"}
        para="We offer fluent solutions which help businesses scale. Our Custom WooCommerce Development Services cover all the store needs, ensuring performance, security and the user satisfaction."
        services={services}
      />
      {/* <TabularEcommerceTechs /> */}
      <TechTools header={"Advanced WooCommerce Development Technology Stack "} para={"As the top WooCommerce development service, we use strong tools and frameworks. Our stack ensures performance, reliability and scalability for every project. We are among the leading WooCommerce development companies, offering the modern mobile app development services for ecommerce. "} tech={techStackData} />
      {/* <BuildingPlatforms
        header={"Platforms We Use to Build Ecommerce Apps"}
        para={
          "We build ecommerce apps by using platforms which also support scalability and business growth. As an ecommerce mobile app development company we ensure each of the platforms fits your needs and delivers strong performance. "
        }
        button={"Request Ecommerce App Development Quote"}
        VALUE_PROPOSITION={PLATFORMS}
      /> */}

      <CTA
        header="Ready to Launch Your WooCommerce Store? "
        para="Use our WooCommerce Development Services to grow your online business. Build stores which deliver the results and growth."
        btn="Request WooCommerce Development Quote "
      />
      <Process
        header="Reliable WooCommerce Store Development Services Process"
        para="Our process keeps every project clear and quite organized. Our WooCommerce development services focus on quality and steady progress. As an experienced WooCommerce development company in usa, we follow the simple steps which ensure reliable delivery. These WooCommerce development services help the business build a secure and scalable online store.  "
        steps={PROCESS_STEPS}
      />
      <Bussiness
        header="Best WooCommerce Development"
        header2={"Company"}
        button="Partner with Dignite Studios "
        para={
          <>
           Dignite Studios delivers the WooCommerce website development services for the growing ecommerce brands. As the reliable WooCommerce company, we focus on the quality, security and long term store performance. Our team also collaborates with leading WooCommerce development companies that follow the modern standards and deliver dependable results.  
          </>
        }
        bs={highlights}
      />
      <Industries
        header="Industries We Serve as a WooCommerce "
        header2={"Development Service "}
        para="Our WooCommerce development service supports businesses across multiple industries. We build scalable online stores which improve the customer experience and simplify the operations. Our team understands industry needs and delivers the reliable WooCommerce solutions which help brands grow faster and manage the online sales effectively. "
        VALUE_PROPOSITION={VALUE_PROPOSITION}
      />
      <MobileApp
        cards={BENEFITS}
        header="Benefits Of Having a WooCommerce Store "
        para="A WooCommerce store helps businesses grow faster by improving customer experience and simplifying the online sales. It supports automation, reduces the manual work and manages products easily. Businesses can grow product lines, enhance store performance and boost income through the improved digital commerce operations thanks to the scalable features and adaptable digital technologies. "
        button="Build a Scalable WooCommerce Store "
      />
      <Features
        header="Must Have Features in Your WooCommerce Store"
        para="A high performing WooCommerce store should have secure login, real time order sync, inventory management, mobile optimized checkout, analytics, multi payment support, SEO-friendly architecture and performance optimization to provide smooth, efficient and fluent shopping experience for the customers. "
        button="Get Feature Recommendations"
        features={featureData}
      />
      <SuccessStories
        header="WooCommerce Store Success Stories"
        para="See Our successful projects and the detailed work in case studies. Learn how we deliver top WooCommerce development services for the diverse clients. "
      />
      <CTA2
        header="Ready to Build Your WooCommerce Store?"
        para="Boost your eCommerce growth today with expert WooCommerce development services. Partner with us scalable and reliable stores. "
        btn="Request WooCommerce Development Quote"
      />
      <Testimonials
        header="Trusted WooCommerce Website Development Services"
        test={test}
        para={"Businesses Choose Dignite Studios because we focus on the quality, clear communication and the dependable store performance. As the trusted WooCommerce Website development services, we help brands to build secure and scalable online stores which support long term growth. Our clients value our simple process, skilled developers and the strong commitment to delivering reliable eCommerce solutions. "}
        button="Work With Our Expert Team"
      />
      <Faq faqs={faqs} header="FAQs" />
      <ContactUs
        img={"/ecommerce/big-app/c-img.webp"}
        header="Kickstart Your WooCommerce Store Journey Today"
        para="Take the first step to build your scalable WooCommerce store. Share your ideas and get a professional consultation today. "
        btn="Request WooCommerce Development Quote"
      />
    </div>
  );
};

export default BigCommerceAppDevelopment;
