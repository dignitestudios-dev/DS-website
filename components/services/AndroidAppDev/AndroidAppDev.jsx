"use client"
import React from "react";
import Head from "next/head";
import Hero from "./Hero";
import About from "../ui/About";
import Services from "../ui/Services";
import Link from "next/link";
import Bussiness from "../ui/Bussiness";
import { MdArrowOutward, MdDesignServices } from "react-icons/md";
import Industries from "../ui/Industries";
import TechAndTools from "../ui/TechTools";
import Process from "../ui/Process";
import MobileApp from "../ui/MobileApp";
import {
  FaDatabase,
  FaGooglePlay,
  FaLayerGroup,
  FaMicrosoft,
  FaPencilAlt,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";
import { IoGrid, IoWalletOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";
import SuccessStories from "../ui/SuccessStories";
import Signs from "../ui/Signs";
import BenefitingBusinesses from "../ui/BenefitingBusinesses";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";
import TabularEcommerceTechs from "../ui/TabularTechs";
import AppComparison from "../ui/AppComparison";
import AppDevelopmentCost from "../ui/AppDevelopmentCost";
import {
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiFlutter,
  SiNextdotjs,
  SiNodedotjs,
  SiDjango,
  SiFirebase,
  SiLaravel,
  SiExpress,
  SiRubyonrails,
  SiIos,
  SiAndroid,
  SiWordpress,
  SiShopify,
  SiWebflow,
  SiBigcommerce,
  SiSquarespace,
  SiMicrosoft,
  SiGooglecloud,
  SiDigitalocean,
  SiCloudinary,
  SiKotlin,
} from "react-icons/si";
import { FaAws, FaApple, FaGooglepay } from "react-icons/fa";
import Features from "../ui/Features";

import {
  FaSearch,
  FaLock,
  FaMobileAlt,
  FaBell,
  FaCommentDots,
  FaCreditCard,
  FaShareAlt,
  FaClock,
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaSyncAlt,
} from "react-icons/fa";
import CTA from "./CTA";

const FEATURES = [
  {
    title: "Secure Login & Authentication",
    desc: "Ensure data privacy with advanced encryption and secure authentication protocols for safe access.",
    icon: <FaLock size={50} color="#F15C20" />,
  },
  {
    title: "Push Notifications",
    desc: "Keep users engaged and informed with timely, personalized updates sent directly to their devices.",
    icon: <FaBell size={50} color="#F15C20" />,
  },
  {
    title: "AI chatbots",
    desc: "Provide 24/7 intelligent customer support and automated assistance to enhance user interaction.",
    icon: <FaCommentDots size={50} color="#F15C20" />,
  },
  {
    title: "Voice Search",
    desc: "Enable hands-free navigation and quick information retrieval using integrated voice recognition technology.",
    icon: <FaSearch size={50} color="#F15C20" />,
  },
  {
    title: "Offline functionality",
    desc: "Allow users to access critical app features and data seamlessly even without an internet connection.",
    icon: <FaDatabase size={50} color="#F15C20" />,
  },
  {
    title: "Real Time Messaging",
    desc: "Facilitate instant communication and collaboration between users with seamless chat features.",
    icon: <FaShareAlt size={50} color="#F15C20" />,
  },
  {
    title: "Payment Integration",
    desc: "Support secure, fast, and reliable in-app transactions with popular payment gateways.",
    icon: <FaCreditCard size={50} color="#F15C20" />,
  },
  {
    title: "Analytics dashboard",
    desc: "Track user behavior and app performance with comprehensive data visualization and reporting tools.",
    icon: <FaChartLine size={50} color="#F15C20" />,
  },
  {
    title: "Geolocation Tracking",
    desc: "Offer location-based services, real-time tracking, and personalized local experiences.",
    icon: <FaGlobe size={50} color="#F15C20" />,
  },
  {
    title: "Social Login",
    desc: "Simplify the onboarding process by allowing users to sign up and log in using their social media accounts.",
    icon: <FaUsers size={50} color="#F15C20" />,
  },
  {
    title: "Multi Language support",
    desc: "Expand your global reach by offering localized content and interfaces in multiple languages.",
    icon: <FaGlobe size={50} color="#F15C20" />,
  },
  {
    title: "Cloud Synchronization",
    desc: "Keep user data backed up and synced seamlessly across multiple devices in real-time.",
    icon: <FaSyncAlt size={50} color="#F15C20" />,
  },
];

const techData = {
  Frontend: [
    { name: "React", icon: <SiReact /> },
    { name: "Vue.js", icon: <SiVuedotjs /> },
    { name: "Angular", icon: <SiAngular /> },
    {
      name: "Flutter",
      icon: <SiFlutter />,
      link: "/flutter-app-development", // Internal link
    },
    {
      name: "React Native",
      icon: <SiReact />,
      link: "/react-native-app-development", // Internal link
    },
    { name: "Next.js", icon: <SiNextdotjs /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Ruby on Rails", icon: <SiRubyonrails /> },
  ],
  Mobile: [
    { name: "AI Automation", icon: <FaApple /> }, // Placeholder icon
    { name: "iOS", icon: <SiIos /> },
    { name: "Android", icon: <SiAndroid /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React Native", icon: <SiReact /> },
  ],
  CMS: [
    { name: "Wordpress", icon: <SiWordpress /> },
    {
      name: "Shopify",
      icon: <SiShopify />,
      link: "/shopify-app-development", // Internal link
    },
    { name: "Webflow", icon: <SiWebflow /> },
    { name: "BigCommerce", icon: <SiBigcommerce /> },
    { name: "Squarespace", icon: <SiSquarespace /> },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: <FaAws /> },
    { name: "Azure", icon: <FaMicrosoft /> },
    { name: "GCP", icon: <SiGooglecloud /> },
    { name: "DigitalOcean", icon: <SiDigitalocean /> },
    { name: "Cloudinary", icon: <SiCloudinary /> },
  ],
};
const services = [
  {
    icon: "pr1",
    icon2: "pr2",
    title: "Product Discovery & Consulting",
    description: (
      <>
        We analyse your business goals with custom Android app development services. We check your target audience, competitors, and market chances. This creates a clear product roadmap. It lowers risks and helps make smart choices for custom Android apps.
      </>
    ),
  },
  {
    icon: "rob1",
    icon2: "rob2",
    title: "Custom Android App Development",
    description: (
      <>
        Our services help with long-term growth. They also meet operational needs and user expectations. Plus, they support corporate goals.
      </>
    ),
  },
  {
    icon: "ccc1",
    icon2: "ccc2",
    title: "Interface Design and User Experience",
    description: (
      <>
        Our designers create simple, easy interfaces. These designs help users. They improve usability and boost interaction. Plus, they lower friction. This lets users complete tasks fast.
      </>
    ),
  },
  {
    icon: "bbr1",
    icon2: "bbr2",
    title: "MVP Development",
    description: (
      <>
        We create focused MVP solutions. They help businesses validate ideas fast. You can gather user feedback easily. This lowers development risks and speeds up product launches.
      </>
    ),
  },
  {
    icon: "hhh1",
    icon2: "hhh2",
    title: "Enterprise Application Solutions",
    description: (
      <>
        Our solutions solve tough tasks. They support large user groups. Data is kept safe. This helps departments work better. We provide great Android app development for growing businesses.
      </>
    ),
  },
  {
    icon: "pluu1",
    icon2: "pluu2",
    title: "Third Party API Integrations",
    description: (
      <>
        Our Android app development services company connects payment gateways. We link CRM platforms. We connect analytics tools. We also link communication services. This makes operations easier and faster.
      </>
    ),
  },
  {
    icon: "clrd1",
    icon2: "clrd2",
    title: "Cloud & Backend Development",
    description: (
      <>
        Our backend solutions protect data. They are reliable and easy to scale. They help apps, users, and business platforms talk to each other smoothly.
      </>
    ),
  },
  {
    icon: "shhh1",
    icon2: "shhh2",
    title: "Security & Compliance",
    description: (
      <>
        Security is very important during development. We use secure coding. We also have data protection measures. Access controls are in place. Our standards focus on compliance.
      </>
    ),
  },
  {
    icon: "aabb1",
    icon2: "aabb2",
    title: "Testing & Quality Assurance",
    description: (
      <>
        Testing finds problems early. It makes programs stable. It ensures devices work well together. Most importantly, it gives users a great experience.
      </>
    ),
  },
  {
    icon: "arrrr1",
    icon2: "arrrr2",
    title: "Legacy App Upgrades",
    description: (
      <>
        We update old apps with Android mobile development. This makes them faster and easier to use. We also improve security and add new features that fit today’s business goals.
      </>
    ),
  },
];

const highlights = [
  {
    title: "10+ Years Experience",
    desc: "Our team knows complex needs. We build reliable solutions. These solutions meet various goals and industry demands for our custom android apps development.",
  },
  {
    title: "100+ Projects Delivered",
    desc: "We’ve delivered apps in many industries. They work well. They offer smooth experiences. User satisfaction is our main focus.",
  },
  {
    title: "Dedicated Android Team",
    desc: "Our team offers full support for development. We plan. We design. We deploy. We improve.",
  },
  {
    title: "Agile Development Approach",
    desc: "The android applications development services use flexible methods. This helps teamwork. It keeps things clear. It also speeds up project delivery.",
  },
  {
    title: "Transparent Communication",
    desc: "We keep clients updated at each stage in our android applications development services. We share clear updates. We have regular discussions. We ensure good project coordination.",
  },
  {
    title: "Long Term Support",
    desc: "We give updates and technical help on our custom android apps development. We also make improvements to keep the app running well after launch.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare & Fitness",
    desc: "We create healthcare solutions. They help patients get care. They track wellness. They manage medical services. This makes healthcare better.",
  },
  {
    title: "Fintech & Banking",
    desc: "We make secure financial apps. Our apps ensure reliable transactions. We also focus on easy account management and smooth digital banking for customers.",
  },
  {
    title: "Ecommerce & Retail",
    desc: "Our custom Android apps make shopping easy. They improve customer journeys. They help find products fast. Online sales go up. Enjoy fun digital experiences!",
  },
  {
    title: "Real Estate",
    desc: "We make property solutions. They simplify listings and communication. They also help with property searches and decisions. We develop Android apps.",
  },
  {
    title: "Education & E-Learning",
    desc: "We create custom Android apps for learning. These apps make education easier to access. They also boost engagement for students and organizations.",
  },
  {
    title: "Logistics & Transportation",
    desc: "We make tracking tools. They help delivery. You get clear visibility. Efficiency improves.",
  },
  {
    title: "Travel & Hospitality",
    desc: "We create travel apps. They help with bookings. They make customer experiences better. They also simplify service management.",
  },
  {
    title: "SaaS Platforms",
    desc: "We build scalable apps. They support subscriptions. They also handle automation and changing business needs.",
  },
];

const test = [
  {
    name: "Sarah Mitchell",
    designation: "— Founder, BrightStart Innovations",
    review:
      "“Dignite Studios turned our idea into a fully functional Android app in record time. The team was responsive, professional, and highly skilled in Android development.”",
  },
  {
    name: "Lawrence Steel",
    designation: "— E-Commerce Manager, ShopEase Online",
    review:
      "“From concept to launch, Dignite Studios guided us through the process seamlessly. Our Android app exceeded all expectations.”",
  },
  {
    name: "Mark Thompson",
    designation: "— CEO, HealthSync Technologies",
    review:
      "“The team built a secure, reliable Android app that improved our workflow and enhanced user engagement. Highly recommend their services.”",
  },
  {
    name: "Emily Lewis",
    designation: "— Product Manager, FinTrack Systems",
    review:
      "“Dignite Studios delivered a clean, intuitive Android app with excellent performance. Their attention to detail is unmatched.”",
  },
  {
    name: "Jack Buyers",
    designation: "— Owner, QuickLogistics Ltd.",
    review:
      "“Our Android app now runs smoothly across devices thanks to their expertise. The team handled everything professionally and efficiently.”",
  },
  {
    name: "Laura Chen",
    designation: "— CTO, EduSmart Learning",
    review:
      "“They transformed our education platform into a seamless Android app. The development process was transparent, and the results exceeded our expectations.”",
  },
  {
    name: "Michael Davis",
    designation: "— Operations Head, TravelMate Solutions",
    review:
      "“Dignite Studios created an engaging Android app that boosted our customer engagement. Their expertise in Android technologies is outstanding.”",
  },
];

const BENEFITS = [
  {
    title: "Boost Customer Engagement",
    desc: "Professional Android app development helps the businesses to build real connections through the customer that provide a smooth user experience, offer personalized features and to ensure easy access to the services anytime.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Revenue Growth",
    desc: "Make new opportunities. Use digital tools. Improve journeys. Focus on money for mobile app development services for android.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Increase brand visibility",
    desc: "Use apps to connect better with customers. This will raise brand awareness with mobile app development services for android.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Process Automation",
    desc: "Cut out repetitive tasks. Use smart workflows. They save time and increase productivity.",
    icon: <FaSyncAlt color="#F15C20" size={25} />,
  },
  {
    title: "Boost Customer Retention",
    desc: "Make strong connections. Give users value. This keeps them engaged longer.",
    icon: <FaUsers color="#F15C20" size={25} />,
  },
  {
    title: "Scalable Business Growth",
    desc: "Build flexible solutions. These will help support more users, add features, and meet future needs.",
    icon: <FaChartLine color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "How much time does it take to create an Android app development services?",
    answer: "Timelines for Android app development can vary. They depend on factors like features, design, testing needs, and project size. Complex solutions take time. They need careful planning and development. This includes integrations, advanced functions, and scalability. Basic MVP applications are different. They can often be done in a few months.",
  },
  {
    id: 2,
    question: "Do you build scalable Android applications?",
    answer: "Yes, we create scalable Android apps. They support more users, new features, and future business needs. Our approach is all about strong architecture. We guarantee reliable performance. We offer flexible solutions. These help apps adapt. This supports companies as they grow and face digital demands.",
  },
  {
    id: 3,
    question: "Can you modernize an existing Android application?",
    answer: "Yes, our android mobile app development company modernizes existing Android applications by improving performance, security, design and functionality. Our team looks at current systems. We find areas that need improvement. Then, we use modern solutions. This helps make user experiences better. It also increases reliability and meets changing business needs in digital environments.",
  },
  {
    id: 4,
    question: "Do you provide Android app maintenance and support?",
    answer: "Yes, we offer ongoing maintenance and support after the android mobile app development company launches. This is part of our Android mobile app development service. We provide updates and bug fixes. We also focus on security improvements. Our services include performance optimization and technical help. This keeps applications stable and secure. We meet changing business goals and user needs.",
  },
  {
    id: 5,
    question: "Do you develop Android applications for startups and enterprises?",
    answer: "Yes, we develop Android mobile app development company for startups and enterprises with different business needs. We help startups test their ideas with MVP solutions. For enterprises, we create secure and scalable apps. These apps manage complex workflows and large user bases. They also support long-term growth.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Product Strategy",
    desc: "We learn your goals and audience. We also note your needs. Then, we make a clear roadmap before starting Android app development.",
  },
  {
    step: "02",
    title: "Wireframing & UX Design",
    desc: "We create simple interfaces. We design easy user journeys. This makes things easier to use. It boosts engagement. It improves the customer experience.",
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "Our developers create apps in flexible cycles. We provide updates often. We also keep improving our Android app services.",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    desc: "We test performance. We test security. We test functionality. This helps users have smooth experiences on all devices and platforms.",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    desc: "We take care of app publishing. We also manage store needs and do final checks for a successful launch.",
  },
  {
    step: "06",
    title: "Maintenance & Optimization",
    desc: "We give regular updates and improvements. Our support keeps your app secure. It also helps your app run smoothly for Android developers.",
  },
];

const SIGNS_DATA = [
  {
    title: "Low Customer Engagement",
    desc: "Slow Android app development companies loses users. Complicated services make it worse. They won’t stay if the app is very difficult to use or offers little value.",
  },
  {
    title: "High Customer Acquisition Costs",
    desc: "When apps fail to turn visitors into engaged users, costs rise. It also makes it hard to gain loyal clients. Choosing the best Android app development services is important. They help businesses make apps that focus on users. This improves conversions. It also boosts engagement and customer retention.",
  },
  {
    title: "Insufficient User Retention",
    desc: "Best Android app development services, Poor or old experiences can disappoint users. As a result, they often delete apps in the android app development services. Businesses use Android app services in the USA. These services create easy, reliable apps. They help engage users and improve their experience.",
  },
  {
    title: "Old Android Experience",
    desc: "Outdated designs frustrate users. Slow speed makes it worse. Trust goes down. Satisfaction and engagement drop, too. Businesses use Android apps. They make apps work better. They improve user experiences. This meets consumer needs.",
  },
  {
    title: "Lack of Automation",
    desc: "Manual tasks waste time. They increase costs. This holds back business growth and productivity in android app development services.",
  },
  {
    title: "Scalability Issues",
    desc: "Some apps can’t handle more users. This leads to problems. They often have performance and reliability issues. A custom Android app development company creates scalable solutions. These solutions help more users. They keep apps running well and ensure a good experience.",
  }
];

const BENEFITING_BUSINESSES_DATA = [
  {
    title: "Startups",
    desc: "Launch products fast. Validate ideas early. Gather user feedback. This lowers risks and speeds up growth for Android apps.",
    svg: `<svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M57.8043 4.52084C57.0203 2.71079 55.5619 1.27746 53.7385 0.525004C52.8724 0.177279 51.9476 -0.000946784 51.0143 3.7824e-06H50.781C47.606 0.0111258 44.4684 0.686724 41.5702 1.98334C39.7502 2.765 38.0702 3.83834 36.5973 5.1625L35.8098 5.97917L35.6056 6.15417L21.6814 20.0608L15.8335 18.865C14.189 18.5455 12.4912 18.6357 10.8898 19.1275C9.29889 19.6339 7.84722 20.5025 6.64892 21.665L1.18017 27.1163C0.637538 27.6367 0.261902 28.3068 0.101001 29.0413C-0.0798319 29.7792 -0.0156647 30.555 0.276002 31.2579C0.564752 31.9521 1.05183 32.55 1.676 32.9758C2.29725 33.3958 3.03225 33.6204 3.78475 33.6175H11.0064C10.8548 34.3758 10.777 35.1439 10.7731 35.9217C10.7671 38.271 11.4706 40.5675 12.7914 42.5104L7.41017 47.8479C7.10385 48.1538 6.89531 48.5438 6.81102 48.9684C6.72673 49.393 6.77048 49.8331 6.93674 50.2328C7.10299 50.6325 7.38424 50.9737 7.74479 51.2133C8.10535 51.4529 8.52895 51.5799 8.96184 51.5783C9.24948 51.5814 9.53476 51.5261 9.80045 51.4158C10.0661 51.3055 10.3067 51.1425 10.5077 50.9367L15.8918 45.5992C17.8329 46.9424 20.1405 47.6552 22.501 47.6408C23.2788 47.6408 24.0488 47.5631 24.811 47.4075V54.5242C24.8171 55.2679 25.0385 55.994 25.4484 56.6146C25.8584 57.2352 26.4393 57.7238 27.121 58.0213C27.5935 58.2225 28.101 58.3188 28.6143 58.3129C28.8477 58.3421 29.081 58.3421 29.3143 58.3129C30.0512 58.1652 30.7309 57.8112 31.2743 57.2921L36.8014 51.7504C38.0031 50.5838 38.8781 49.1283 39.3477 47.5242C39.8334 45.926 39.9136 44.232 39.581 42.595L38.4114 36.7646L52.216 23.0038L52.8285 22.4204L53.441 21.8079C54.6747 20.322 55.6623 18.648 56.3664 16.8496C57.6842 13.9283 58.3529 10.7559 58.3264 7.55125C58.3693 6.5143 58.1903 5.48015 57.8014 4.51792M17.2102 41.1075C16.6879 40.5742 16.2361 39.9763 15.8656 39.3283L27.5614 27.6675C27.8684 27.3622 28.2587 27.1545 28.6833 27.0703C29.108 26.9862 29.548 27.0294 29.9482 27.1946C30.3483 27.3597 30.6907 27.6395 30.9324 27.9987C31.1741 28.3579 31.3042 28.7804 31.3064 29.2133C31.3064 29.7908 31.0731 30.3479 30.6648 30.7592L18.966 42.42C18.3154 42.0774 17.7229 41.6345 17.2102 41.1075ZM54.001 7.40542C54.0157 10.0068 53.4779 12.5816 52.4231 14.9596C51.939 16.1011 51.299 17.17 50.5214 18.1358C46.5664 15.2646 43.0661 11.8144 40.1381 7.90125C41.1181 7.11375 42.2002 6.46625 43.3552 5.97625C45.7077 4.91323 48.2607 4.36625 50.8423 4.37209C51.2428 4.39153 51.6327 4.46931 52.0118 4.60542C52.3891 4.7532 52.7206 4.96709 53.0064 5.24709C53.2981 5.51542 53.5285 5.845 53.6773 6.20959C53.8309 6.58292 53.9096 6.97181 53.9135 7.37625L54.001 7.40542Z" fill="#F15C20"/></svg>`
  },
  {
    title: "Small & Medium Businesses",
    desc: "Boost your online presence. Improve user experiences. Streamline daily tasks. Reliable Android services help you grow and engage customers.",
    svg: `<svg width="65" height="41" viewBox="0 0 65 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.3333 32.0833H40.8333C41.6597 32.0833 42.3529 31.8033 42.9129 31.2433C43.4729 30.6833 43.7519 29.9911 43.75 29.1667V17.5C43.75 16.6736 43.47 15.9814 42.91 15.4233C42.35 14.8653 41.6578 14.5853 40.8333 14.5833H37.9167V11.6667C37.9167 10.8403 37.6367 10.1481 37.0767 9.59C36.5167 9.03195 35.8244 8.75194 35 8.75H29.1667C28.3403 8.75 27.6481 9.03 27.09 9.59C26.5319 10.15 26.2519 10.8422 26.25 11.6667V14.5833H23.3333C22.5069 14.5833 21.8147 14.8633 21.2567 15.4233C20.6986 15.9833 20.4186 16.6756 20.4167 17.5V29.1667C20.4167 29.9931 20.6967 30.6863 21.2567 31.2463C21.8167 31.8063 22.5089 32.0853 23.3333 32.0833ZM29.1667 14.5833V11.6667H35V14.5833H29.1667ZM20.4167 40.8333C14.7292 40.8333 9.905 38.8529 5.94417 34.8921C1.98334 30.9312 0.00194587 26.1061 1.42974e-06 20.4167C-0.00194301 14.7272 1.97945 9.90306 5.94417 5.94417C9.90889 1.98528 14.7331 0.00388889 20.4167 0H43.75C49.4375 0 54.2626 1.98139 58.2254 5.94417C62.1882 9.90695 64.1686 14.7311 64.1667 20.4167C64.1647 26.1022 62.1843 30.9274 58.2254 34.8921C54.2665 38.8568 49.4414 40.8372 43.75 40.8333H20.4167Z" fill="#F15C20"/></svg>`
  },
  {
    title: "Enterprises",
    desc: "Make secure digital ecosystems with Android services. These services help many users. They handle complex tasks. They support long-term growth.",
    svg: `<svg width="49" height="63" viewBox="0 0 49 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.0337 0H16.0913C13.7229 0 11.8067 -1.30385e-07 10.2579 0.13125C8.65375 0.268333 7.245 0.554167 5.94125 1.2425C3.87177 2.34254 2.20426 4.07029 1.17833 6.1775C0.527916 7.50167 0.256666 8.93083 0.128333 10.5729C-2.6077e-07 12.1742 0 14.1517 0 16.6163V46.0921C0 48.5567 -5.43272e-08 50.5342 0.125417 52.1354C0.256667 53.7775 0.527916 55.2067 1.17542 56.5308C2.20287 58.6389 3.87251 60.3668 5.94417 61.4658C7.245 62.1542 8.65667 62.44 10.255 62.5742C11.4654 62.6792 12.8917 62.7025 14.5833 62.7083V41.5625C14.5833 39.4352 15.4284 37.3951 16.9326 35.8909C18.4368 34.3867 20.4769 33.5417 22.6042 33.5417H25.5208C27.6481 33.5417 29.6882 34.3867 31.1924 35.8909C32.6966 37.3951 33.5417 39.4352 33.5417 41.5625V62.7083C34.9856 62.721 36.4295 62.6772 37.87 62.5771C39.4712 62.44 40.88 62.1542 42.1808 61.4658C44.2514 60.3663 45.92 58.6385 46.9467 56.5308C47.5971 55.2067 47.8683 53.7775 47.9967 52.1325C48.125 50.5342 48.125 48.5567 48.125 46.095V16.6163C48.125 14.1517 48.125 12.1742 47.9996 10.5729C47.8713 8.93083 47.5971 7.50167 46.9496 6.1775C45.9221 4.06941 44.2525 2.34156 42.1808 1.2425C40.88 0.554167 39.4683 0.268333 37.87 0.134167C36.3183 1.08654e-08 34.4021 0 32.0367 0M10.2083 13.8542C10.2083 13.274 10.4388 12.7176 10.849 12.3074C11.2593 11.8971 11.8157 11.6667 12.3958 11.6667H18.2292C18.8093 11.6667 19.3657 11.8971 19.776 12.3074C20.1862 12.7176 20.4167 13.274 20.4167 13.8542C20.4167 14.4343 20.1862 14.9907 19.776 15.401C19.3657 15.8112 18.8093 16.0417 18.2292 16.0417H12.3958C11.8157 16.0417 11.2593 15.8112 10.849 15.401C10.4388 14.9907 10.2083 14.4343 10.2083 13.8542ZM12.3958 23.3333H18.2292C18.8093 23.3333 19.3657 23.5638 19.776 23.974C20.1862 24.3843 20.4167 24.9407 20.4167 25.5208C20.4167 26.101 20.1862 26.6574 19.776 27.0676C19.3657 27.4779 18.8093 27.7083 18.2292 27.7083H12.3958C11.8157 27.7083 11.2593 27.4779 10.849 27.0676C10.4388 26.6574 10.2083 26.101 10.2083 25.5208C10.2083 24.9407 10.4388 24.3843 10.849 23.974C11.2593 23.5638 11.8157 23.3333 12.3958 23.3333ZM27.7083 13.8542C27.7083 13.274 27.9388 12.7176 28.349 12.3074C28.7593 11.8971 29.3157 11.6667 29.8958 11.6667H35.7292C36.3093 11.6667 36.8657 11.8971 37.276 12.3074C37.6862 12.7176 37.9167 13.274 37.9167 13.8542C37.9167 14.4343 37.6862 14.9907 37.276 15.401C36.8657 15.8112 36.3093 16.0417 35.7292 16.0417H29.8958C29.3157 16.0417 28.7593 15.8112 28.349 15.401C27.9388 14.9907 27.7083 14.4343 27.7083 13.8542ZM29.8958 23.3333H35.7292C36.3093 23.3333 36.8657 23.5638 37.276 23.974C37.6862 24.3843 37.9167 24.9407 37.9167 25.5208C37.9167 26.101 37.6862 26.6574 37.276 27.0676C36.8657 27.4779 36.3093 27.7083 35.7292 27.7083H29.8958C29.3157 27.7083 28.7593 27.4779 28.349 27.0676C27.9388 26.6574 27.7083 26.101 27.7083 25.5208C27.7083 24.9407 27.9388 24.3843 28.349 23.974C28.7593 23.5638 29.3157 23.3333 29.8958 23.3333Z" fill="#F15C20"/><path d="M29.1654 62.7082V41.5623C29.1654 39.5498 27.532 37.9165 25.5195 37.9165H22.6029C20.5904 37.9165 18.957 39.5498 18.957 41.5623V62.7082H29.1654Z" fill="#F15C20"/></svg>`
  },
  {
    title: "Agencies",
    desc: "Grow your services. Partner with reliable white label providers. This helps with project delivery. It also boosts growth and ensures client satisfaction.",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.3616 6.408C30.5632 6.14149 29.7165 6.05094 28.8797 6.14258C28.043 6.23421 27.236 6.50584 26.5141 6.93883L14.4974 14.1488C13.6337 14.6671 12.9188 15.4002 12.4225 16.2768C11.9262 17.1534 11.6654 18.1436 11.6654 19.1509V58.3334H8.7487C7.97515 58.3334 7.23328 58.6407 6.6863 59.1877C6.13932 59.7347 5.83203 60.4765 5.83203 61.2501C5.83203 62.0236 6.13932 62.7655 6.6863 63.3125C7.23328 63.8595 7.97515 64.1667 8.7487 64.1667H61.2487C62.0222 64.1667 62.7641 63.8595 63.3111 63.3125C63.8581 62.7655 64.1654 62.0236 64.1654 61.2501C64.1654 60.4765 63.8581 59.7347 63.3111 59.1877C62.7641 58.6407 62.0222 58.3334 61.2487 58.3334H58.332V19.6001C58.3313 18.3766 57.9459 17.1844 57.2304 16.192C56.5149 15.1996 55.5055 14.4573 54.3449 14.0701L31.3616 6.408ZM26.2487 13.9038L17.4987 19.1538V58.3334H26.2487V13.9009V13.9038Z" fill="#F15C20"/>
</svg>`
  }
];

const AndroidAppDev = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="Looking For a Reliable App "
        heading2={"Development Partner? "}
        para="For more than 10 years, Dignite Studios has helped businesses. We turn ideas into successful Android products. We offer Android app development services. Startups can build their first MVP with our help. We also assist enterprises with complex digital ecosystems. We work across healthcare, fintech, retail, education, logistics and many other industries. We build Android apps. 
Future performance, security and scalability are important to us. Planning, design, programming, testing, deployment and support are all handled by our team. You also have the option of an internal solution or a customer facing app. We create reliable products. They help organisations grow confidently. Plus, they meet changing market and user needs."
        button="Discuss Your Project "
      />
      <Signs
        header="What Android App Development Companies Challenges Prevent Business "
        header2="Growth?"
        subtitle="Many Android App Development companies struggle with low engagement. They have high acquisition costs. Poor retention is also an issue. Outdated experiences hurt them. Limited automation makes things harder. Scaling problems add to their troubles. Resolving these problems also enhances company performance. Additionally, it also increases customer happiness, operational effectiveness and revenue growth."
        buttonText="Solve Your Android App Challenges"
        items={SIGNS_DATA}
      />
      <Services
        services={services}
        header={"How Do Our Android App Development Help Business"}
        header2={"Grow?"}
        button={"Start Your App Project   "}
        para={
          "Our custom Android app development services help businesses turn ideas into trusted products. We bring ideas to life. We are a custom Android app development company. We offer complete solutions. These solutions boost efficiency. They also improve customer experiences. Plus, they help with scalability and long-term growth. Our expert services make this possible."
        }
      />
        <BenefitingBusinesses
          header={"Which Businesses Benefit Most From Android App "}
          header2={"Development?"}
          para={"Businesses of all sizes benefit from the tailored Android solutions. The right strategy helps customers. They enjoy better service. Operations are smoother. Growth goes up. Success lasts."}
          items={BENEFITING_BUSINESSES_DATA}
          buttonText={"Let’s Build Your Solution"}
        />
      <TabularEcommerceTechs
        header={"Technologies for High-Performance"}
        header2={"Android Apps"}
        para={
          "We are an Android app development company. We create top-notch apps. We use modern frameworks and tools. These tools are trusted by top companies. This lets us provide reliable mobile app services for Android and cross-platform apps.  "
        }
        techData={techData}
      />
      <AppComparison
      header2={" Business?"}
        header={"Android vs iOS vs Flutter vs React Native: Which Option Fits Your"}
        para={"Businesses of all sizes benefit from the tailored Android solutions. The right strategy helps customers. They enjoy better service. Operations are smoother. Growth goes up. Success lasts."}
      />
      <AppDevelopmentCost />
      <Process
        steps={PROCESS_STEPS}
        header={"How Our Android App Development Process "}
        header2={"Works"}
        btn={"Initiate Your App Development"}
        para={
          "Our Android app development services use a simple process. This helps businesses make secure and user-friendly apps. They are also scalable. Clients get reliable results.  "
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why Businesses Trust "}
        header2={"Dignite Studios"}
        ctaHeader={"Partner With Dignite Studios"}
        ctaPara={
          "Dignite Studios offers reliable Android solutions. Our team of skilled developers ensures quality. We use clear processes and proven methods. This builds trust with our clients.We focus on quality, scalability and long term success for every application. "
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
                  Choose The Right Team
                </h2>
                <p>
                  We are experts at building mobile applications. Having a team
                  of the best developers and designers, we provide you with
                  everything you need as a custom mobile app development
                  company.
                </p>
                <Link
                  href="/contact-us"
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Choose The Right Team
                  </button>
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                    <MdArrowOutward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        }
        button={"Share Your Idea"}
        para={
          <>
            At our custom Android app development company, we have a team of
            experts at building mobile applications that just feel right for
            Android devices. You can hire us for the Android app developers and
            designers. We provide you with the Android app development services
            you need for your target audience. Dignite Studios means a team that
            takes the time to understand your audience before the development of
            the Android app even begins. We deliver functional Android
            applications with clear communication and reliable solutions.
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industries We Serve with Modified Android  "}
        header2={"Solutions"}
        para={
          <>
            We develop Android apps. We serve various industries.We create secure and scalable solutions for many industries.We create Android apps. Our services help businesses run better. They also improve customer experiences. Plus, they support digital growth. 
          </>
        }
        button={"Let’s Discuss Today"}
      />
      <MobileApp
        header={"Benefits of Developing an Android App for Your "}
        header2={"Business"}
        button={"Get Your Android App"}
        para={
          <>
            There are many compelling reasons to have your own Android app
            developed by a top Android app development company. From enhancing
            customer retention and brand visibility to boosting revenue, it’s
            totally worth it if you get your app developed by the experts who
            help you in gaining actionable insights and staying ahead of
            competitors.
          </>
        }
        cards={BENEFITS}
      />
      <Features
        header={"Must Have Features in Modern Android "}
        header2={"Applications "}
        para={
          <>
           Modern apps need to be secure. They should also be engaging and easy to use. This helps create better experiences.Our Android app development services have key features. These features help performance. They make usability easier. They also boost customer satisfaction. Business efficiency improves. 
          </>
        }
        features={FEATURES}
        button={"Get Feature Recommendations"}
      />
      <SuccessStories
        header={"Success Stories Android Apps for Real Business "}
          header2={"Challenges "}
        para={
          "Dignite Studios helps startups and businesses. We turn ideas into successful apps. We solve business problems. We improve user experiences. Our solutions are scalable and deliver real results."
        }
      />
      <CTA />
      <Testimonials
        test={test}
        header={"Why Clients Choose Our Android App Development "}
        header2={" Company"}
        para={"Clients love Dignite Studios. They trust us for reliable solutions. Our services are effective and easy to use.They value our reliability.We focus on clear communication. Our development is smooth and simple.We are an Android app development company. We help businesses create apps. These apps support growth. They also boost customer engagement and help achieve long-term goals. "}
      />
      <Faq header={"Frequently Asked Questions About Android App"} header2={" Development Services"} faqs={faqs} />
      <ContactUs
        img={"/services/mobile-app/c-img.webp"}
        pathname={"Android App dev"}
        header={"Get A Free Android App Consultation Have an application idea but need the right direction? "}
        header2={""}
        para={
          "Our team helps you understand requirements, technical possibilities, timelines and project planning. Our Android app development services let you share your goals. You will get expert help. Together, we can build a successful Android solution. "
        }
        btn={" Request Android App Development Quote"}
      />
    </div>
  );
};

export default AndroidAppDev;
