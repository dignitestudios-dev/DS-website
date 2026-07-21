import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Services from "../ui/Services";
import Link from "next/link";
import Bussiness from "../ui/Bussiness";
import { MdArrowOutward } from "react-icons/md";
import Industries from "../ui/Industries";
import TechAndTools from "../ui/TechTools";
import Process from "../ui/Process";
import MobileApp from "../ui/MobileApp";
import { FaMicrosoft, FaPencilAlt, FaUser } from "react-icons/fa";
import { IoGrid, IoWalletOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
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
  SiGooglecloud,
  SiDigitalocean,
  SiCloudinary,
  SiKotlin,
  SiSwift,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiExpo,
  SiXcode,
  SiOpenai,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { FaAws, FaApple, FaGooglepay, FaDatabase, FaLayerGroup } from "react-icons/fa";
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
  FaSyncAlt,
  FaChartLine,
  FaGlobe,
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
    title: "AI Chatbots",
    desc: "Provide 24/7 intelligent customer support and automated assistance to enhance user interaction.",
    icon: <FaCommentDots size={50} color="#F15C20" />,
  },
  {
    title: "Voice Search",
    desc: "Enable hands-free navigation and quick information retrieval using integrated voice recognition technology.",
    icon: <FaSearch size={50} color="#F15C20" />,
  },
  {
    title: "Offline Functionality",
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
    title: "Geolocation tracking",
    desc: "Offer location-based services, real-time tracking, and personalized local experiences.",
    icon: <FaGlobe size={50} color="#F15C20" />,
  },
  {
    title: "Social Login",
    desc: "Simplify the onboarding process by allowing users to sign up and log in using their social media accounts.",
    icon: <FaUsers size={50} color="#F15C20" />,
  },
  {
    title: "Multi Language Support",
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
  "Native Android": [
    { name: "Kotlin", icon: <SiKotlin /> },
    { name: "Java", icon: <FaCode /> },
    { name: "Android SDK", icon: <SiAndroid /> },
    { name: "JetPack Compose", icon: <SiAndroid /> },
    { name: "Room Database", icon: <FaDatabase /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
  "Flutter": [
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Dart", icon: <FaCode /> },
    { name: "Bloc", icon: <FaLayerGroup /> },
    { name: "GetX", icon: <FaCode /> },
    { name: "Riverpod", icon: <FaCode /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
  "React Native": [
    { name: "React Native", icon: <SiReact /> },
    { name: "Javascript", icon: <SiJavascript /> },
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Expo", icon: <SiExpo /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
  "iOS Development": [
    { name: "Swift", icon: <SiSwift /> },
    { name: "Swift UI", icon: <SiSwift /> },
    { name: "UIKit", icon: <FaApple /> },
    { name: "CoreData", icon: <FaDatabase /> },
    { name: "Xcode", icon: <SiXcode /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
  "AI Technologies": [
    { name: "OpenAI", icon: <SiOpenai /> },
    { name: "Gemini", icon: <SiGooglecloud /> },
    { name: "Claude", icon: <FaCode /> },
    { name: "LangChain", icon: <FaCode /> },
    { name: "Vector Databases", icon: <FaDatabase /> },
    { name: "AI Agents", icon: <FaCode /> },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: <FaAws /> },
    { name: "Azure", icon: <FaMicrosoft /> },
    { name: "Google Cloud", icon: <SiGooglecloud /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "GitHub Actions", icon: <FaCode /> },
  ]
};
const services = [
  {
    icon: "pr1",
    icon2: "pr2",
    title: "Mobile App Strategy & Consulting",
    description: (
      <>
        We understand your business goals and user needs. Our experts also provide guidance to create effective mobile strategies.
      </>
    ),
  },
  {
    icon: "rob1",
    icon2: "rob2",
    title: "Application Planning & Architecture",
    description: (
      <>
        Our <Link href="/services/mobile-app-development" className="text-[#F15C20]">custom mobile app development company</Link> creates strong app architectures which improve performance, support updates and ensure scalability.
      </>
    ),
  },
  {
    icon: "ccc1",
    icon2: "ccc2",
    title: "UI/UX Design",
    description: (
      <>
        Our designers create simple and engaging interfaces that improve usability, navigation and user satisfaction. As the <Link href="/services/mobile-app-development" className="text-[#F15C20]">best mobile app development company in usa</Link>, we design user-friendly experiences which help businesses achieve better results.
      </>
    ),
  },
  {
    icon: "bbr1",
    icon2: "bbr2",
    title: "Mobile MVP Development",
    description: (
      <>
        We help the startups build MVP solutions with essential features to test the ideas, understand users and launch faster in our <Link href="/services/mobile-app-development" className="text-[#F15C20]">best mobile app development company in usa</Link>.
      </>
    ),
  },
  {
    icon: "pluu1",
    icon2: "pluu2",
    title: "API Integration",
    description: (
      <>
        We connect apps with third party services, payment gateways and business systems to improve functionality and workflow efficiency.
      </>
    ),
  },
  {
    icon: "clrd1",
    icon2: "clrd2",
    title: "Cloud & Backend Integration",
    description: (
      <>
        We build reliable backend systems which support data management, better performance and scalable app growth with our <Link href="/services/mobile-app-development" className="text-[#F15C20]">best mobile app development company in usa</Link>.
      </>
    ),
  },
  {
    icon: "hhh1",
    icon2: "hhh2",
    title: "AI Feature Integration",
    description: (
      <>
        We add the AI powered features to improve the personalization, automate tasks and create better user experiences.
      </>
    ),
  },
  {
    icon: "shhh1",
    icon2: "shhh2",
    title: "Security & Compliance",
    description: (
      <>
        We use the scene development practices to protect the sensitive data, reduce risks and maintain the reliable app performance.
      </>
    ),
  },
  {
    icon: "aabb1",
    icon2: "aabb2",
    title: "QA & Performance Testing",
    description: (
      <>
        We test to find issues, improve stability and ensure smooth performance across devices.
      </>
    ),
  },
  {
    icon: "database",
    icon2: "database1",
    title: "Google Play Store Deployment",
    description: (
      <>
        We manage app publishing while following platform guidelines for successful launches with our best <Link href="/services/mobile-app-development" className="text-[#F15C20]">mobile app development company</Link> usa.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance & Support",
    description: (
      <>
        As the best <Link href="/services/mobile-app-development" className="text-[#F15C20]">mobile app development company</Link> usa we provide updates, improvements and support to keep apps secure and functional.
      </>
    ),
  },
  {
    icon: "arrrr1",
    icon2: "arrrr2",
    title: "Legacy App Modernization",
    description: (
      <>
        We upgrade outdated apps through modern technology, better designs and improved performance.
      </>
    ),
  },
];

const highlights = [
  {
    title: "10+ Years Experience",
    desc: <>Delivering successful <Link href="/services/mobile-app-development" className="text-[#F15C20]">mobile solutions</Link>. Using the industry knowledge and proven development expertise.</>,
  },
  {
    title: "100+ Projects Delivered",
    desc: <>Creating reliable <Link href="/services/mobile-app-development" className="text-[#F15C20]">applications across industries</Link>. Using quality focused methods and successful outcomes.</>,
  },
  {
    title: "Dedicated Mobile Team",
    desc: <>Providing skilled developers. Creating secure, scalable and high performing digital products.</>,
  },
  {
    title: "Agile Development Approach",
    desc: <>Using flexible practices. Collaborating with the difference. Adaptability and faster project delivery.</>,
  },
  {
    title: "Transparent Communication",
    desc: <>Keeping clients updated. Providing regular progress reports and clear project visibility.</>,
  },
  {
    title: "Long Term Support",
    desc: <>Helping businesses maintain. Improve and scale applications with continuous technical support.</>,
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare & Fitness",
    desc: <>Our <Link href="/industries/healthcare-app-development" className="text-[#F15C20]">healthcare app development company</Link> improves patient engagement. Service access. Easy Health management and digital experiences.</>,
  },
  {
    title: "FinTech & Banking",
    desc: <>We develop <Link href="/services/mobile-app-development" className="text-[#F15C20]">secure financial apps</Link> which support payments. Account management. Transactions and better customer experiences.</>,
  },
  {
    title: "E-commerce & Retail",
    desc: <>We're an <Link href="/ecommerce/ecommerce-app-development" className="text-[#F15C20]">Ecommerce app development company</Link> that builds shopping apps designed to improve customer journeys, from product discovery to checkout and retail operations.</>,
  },
  {
    title: "Real Estate",
    desc: <>As a <Link href="/industries/real-estate-app-development" className="text-[#F15C20]">real estate app development company</Link>, We develop property apps that simplify listings. Communication, property searches and customer interactions.</>,
  },
  {
    title: "Education & E-Learning",
    desc: <>As a trusted <Link href="/services/mobile-app-development" className="text-[#F15C20]">e learning app development company</Link> we build learning platforms that support online education. Student engagement. Digital classrooms and easy knowledge access.</>,
  },
  {
    title: "Logistics & Transportation",
    desc: <>We create <Link href="/services/mobile-app-development" className="text-[#F15C20]">logistics solutions</Link> which improve tracking. Delivery management, route planning and operational efficiency.</>,
  },
  {
    title: "Travel & Hospitality",
    desc: <>We develop <Link href="/services/mobile-app-development" className="text-[#F15C20]">travel apps</Link> that simplify bookings. Customer support, reservations and personalized user experiences.</>,
  },
  {
    title: "Saas Platforms",
    desc: <>We create <Link href="/services/mobile-app-development" className="text-[#F15C20]">scalable mobile solutions</Link> which support the software businesses Digital Services and growing customer needs.</>,
  },
];

const test = [
  {
    name: "Samantha Micheal",
    designation: "— Founder, SwiftStart",
    review:
      "“Working with Dignite Studios was incredible. They assured me that I’d get a fully functional app faster than I expected. And honestly, they did. The team led me through every step and the end product exceeded my expectations.”",
  },
  {
    name: "James Roberts",
    designation: "— CEO, ShopEase",
    review:
      "“The recent shopping app has increased customer engagement. Their team understood our requirements perfectly and delivered a user-friendly app. Communication was clear throughout the entire process.”",
  },
  {
    name: "Ethan Morgan ",
    designation: "— Entrepreneur, FinTrack",
    review:
      "“I appreciate how the developers suggested practical features to improve user experience. They built a secure application that aligns with my business goals. Highly recommended for anyone who’s looking for professional app development.”",
  },
  {
    name: "Michael Lee",
    designation: "— Product Manager, HealthSync",
    review:
      "“The team was professional and responsive. They developed a cross-platform app with flawless performance on both iOS and Android. Post-launch support has been fantastic too.”",
  },
  {
    name: "Jordan Noah",
    designation: "— CEO, RideNow",
    review:
      "“Their team handled everything smoothly. They built a visually appealing app that our users love. Their expertise in mobile app development is unmatched, literally.”",
  },
  {
    name: "David Thompson",
    designation: "— Founder, MedCare Solutions",
    review:
      "“We needed a safe and secure app for the healthcare platform. The team delivered beyond expectations. They added features and provided smooth functionality. Truly a great experience.”",
  },
  {
    name: "Rachel Parker",
    designation: "— CEO, QuickServe",
    review:
      "“The development process was smooth, and the team offered excellent suggestions for enhancing app usability. Our app launched successfully and received amazing user feedback right away.”",
  },
];

const BENEFITS = [
  {
    title: "Increased Customer Engagement",
    desc: "Improve customer interactions with the smooth app experiences. Useful features and simple solutions encourage regular engagement.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Revenue Growth",
    desc: "Create mobile solutions which increase sales. Improve conversions and discover new revenue opportunities.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Brand Visibility",
    desc: "Strengthen your digital presence with the professional apps. Help customers recognize and connect with brands.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Process Automation",
    desc: "Simplify daily tasks. Reduce the manual work and improve the business workflows through the effective mobile solutions.",
    icon: <FaSyncAlt color="#F15C20" size={25} />,
  },
  {
    title: "Improved Customer Retention",
    desc: "Build stronger relationships with valuable features. Personalized experiences and reliable app performance.",
    icon: <FaUsers color="#F15C20" size={25} />,
  },
  {
    title: "Scalable Business Growth",
    desc: "Develop flexible apps which support more users. New features and future business growth.",
    icon: <FaChartLine color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "What is mobile app development?",
    answer: <>Top <Link href="/services/mobile-app-development" className="text-[#F15C20]">Mobile app development companies</Link> include planning, designing, programming, and testing. Releasing and managing mobile applications. These services help businesses create user friendly solutions. They also improve customer interaction. Support the operations and provide digital experiences across platforms and devices.</>,
  },
  {
    id: 2,
    question: "What is the cost of mobile app development?",
    answer: <>A <Link href="/services/mobile-app-development" className="text-[#F15C20]">Mobile app development company</Link> cost calculator helps to estimate the app costs. Factors include complexity. Features, design needs, integrations and Platform choice. Backend requirements and the security standards. A detailed analysis helps to plan the budget. It also helps choose the right development approach with our best <Link href="/services/mobile-app-development" className="text-[#F15C20]">mobile app development companies</Link>.</>,
  },
  {
    id: 3,
    question: "How long does mobile app development take?",
    answer: <>A <Link href="/services/mobile-app-development" className="text-[#F15C20]">Mobile app development company</Link> timeline depends on requirements. Features, Design complexity, technology. Testing and platform needs. Simple apps may also take a few months. Advanced solutions need more time for planning & development. Quality checks and optimization.</>,
  },
  {
    id: 4,
    question: "Do you build scalable mobile applications?",
    answer: <>Yes. We create scalable mobile applications with our top <Link href="/services/mobile-app-development" className="text-[#F15C20]">mobile app development companies</Link>. Our apps support growing users. New features and changing business needs. We also focus on strong architecture. Reliable performance and flexible solutions for the future growth.</>,
  },
  {
    id: 5,
    question: "Can you modernize an existing mobile app?",
    answer: <>Yes. We help businesses modernize existing apps with our top <Link href="/services/mobile-app-development" className="text-[#F15C20]">mobile app development companies</Link>. We improve designs. Upgrade technologies. Enhance the performance and add new features. Our team solves challenges and improves user experience. Security and application efficiency.</>,
  },
  {
    id: 6,
    question: "Do you offer maintenance services?",
    answer: <>Yes. We provide maintenance services with our top <Link href="/services/mobile-app-development" className="text-[#F15C20]">app development companies</Link>. We keep apps updated. Secure and performing smoothly. Our support includes bug fixes. Performance improvements. Feature updates, security enhancements and technical assistance for better business results.</>,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Product Strategy",
    desc: "We understand your business goals. User needs and project requirements. We also create a clear roadmap for successful app development .",
  },
  {
    step: "02",
    title: "Wireframing & UX Design",
    desc: "Our team creates user focused wireframes and designs. We improve usability. Navigation and custom experiences.",
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "We use flexible methods to build apps in phases. It also allows faster delivery and continuous improvements.",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    desc: "We test the app functionality. Security and performance. We find issues and ensure smooth performance across devices.",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    desc: "We prepare apps for launch. We complete final checks and ensure a successful release.",
  },
  {
    step: "06",
    title: "Maintenance & Optimization",
    desc: "We provide the regular updates. Enhancements and technical support to keep your app secure and effective.",
  },
];

const SIGNS_DATA = [
  {
    title: "Low Customer Engagement on Mobile",
    desc: <>When apps don’t have the practical functionality, easy navigation and captivating experiences which motivate frequent use, users also become disinterested.</>,
  },
  {
    title: "High Customer Acquisition Costs",
    desc: <>When apps typically don’t deliver value and sustain solid customer relationships, businesses spend more on the luring consumers.</>,
  },
  {
    title: "Inadequate User Retention",
    desc: <>Slow performance, unclear layouts and lack of features are common reasons why users abandon apps, which lowers the user happiness for our <Link href="/services/mobile-app-development" className="text-[#F15C20]">mobile app development companies</Link>.</>,
  },
  {
    title: "Older Mobile Experience",
    desc: <>In competitive markets, users' trust, engagement levels and the commercial potential can all be impacted through outdated designs and technologies for our <Link href="/services/mobile-app-development" className="text-[#F15C20]">mobile app development companies</Link>.</>,
  },
  {
    title: "Inadequate Automation",
    desc: <>When companies also lack the mobile solutions which simplify the daily operation, manual tasks increase workload and decrease efficiency.</>,
  },
  {
    title: "Problems with Scalability",
    desc: <>When companies add additional users, features and services without a solid basis, apps find it quite difficult to support expansion.</>,
  }
];

const BENEFITING_BUSINESSES_DATA = [
  {
    title: "Startups",
    desc: "Launch products fast. Validate ideas early. Gather user feedback. This lowers risks and speeds up growth for mobile apps.",
    svg: `<svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M57.8043 4.52084C57.0203 2.71079 55.5619 1.27746 53.7385 0.525004C52.8724 0.177279 51.9476 -0.000946784 51.0143 3.7824e-06H50.781C47.606 0.0111258 44.4684 0.686724 41.5702 1.98334C39.7502 2.765 38.0702 3.83834 36.5973 5.1625L35.8098 5.97917L35.6056 6.15417L21.6814 20.0608L15.8335 18.865C14.189 18.5455 12.4912 18.6357 10.8898 19.1275C9.29889 19.6339 7.84722 20.5025 6.64892 21.665L1.18017 27.1163C0.637538 27.6367 0.261902 28.3068 0.101001 29.0413C-0.0798319 29.7792 -0.0156647 30.555 0.276002 31.2579C0.564752 31.9521 1.05183 32.55 1.676 32.9758C2.29725 33.3958 3.03225 33.6204 3.78475 33.6175H11.0064C10.8548 34.3758 10.777 35.1439 10.7731 35.9217C10.7671 38.271 11.4706 40.5675 12.7914 42.5104L7.41017 47.8479C7.10385 48.1538 6.89531 48.5438 6.81102 48.9684C6.72673 49.393 6.77048 49.8331 6.93674 50.2328C7.10299 50.6325 7.38424 50.9737 7.74479 51.2133C8.10535 51.4529 8.52895 51.5799 8.96184 51.5783C9.24948 51.5814 9.53476 51.5261 9.80045 51.4158C10.0661 51.3055 10.3067 51.1425 10.5077 50.9367L15.8918 45.5992C17.8329 46.9424 20.1405 47.6552 22.501 47.6408C23.2788 47.6408 24.0488 47.5631 24.811 47.4075V54.5242C24.8171 55.2679 25.0385 55.994 25.4484 56.6146C25.8584 57.2352 26.4393 57.7238 27.121 58.0213C27.5935 58.2225 28.101 58.3188 28.6143 58.3129C28.8477 58.3421 29.081 58.3421 29.3143 58.3129C30.0512 58.1652 30.7309 57.8112 31.2743 57.2921L36.8014 51.7504C38.0031 50.5838 38.8781 49.1283 39.3477 47.5242C39.8334 45.926 39.9136 44.232 39.581 42.595L38.4114 36.7646L52.216 23.0038L52.8285 22.4204L53.441 21.8079C54.6747 20.322 55.6623 18.648 56.3664 16.8496C57.6842 13.9283 58.3529 10.7559 58.3264 7.55125C58.3693 6.5143 58.1903 5.48015 57.8014 4.51792M17.2102 41.1075C16.6879 40.5742 16.2361 39.9763 15.8656 39.3283L27.5614 27.6675C27.8684 27.3622 28.2587 27.1545 28.6833 27.0703C29.108 26.9862 29.548 27.0294 29.9482 27.1946C30.3483 27.3597 30.6907 27.6395 30.9324 27.9987C31.1741 28.3579 31.3042 28.7804 31.3064 29.2133C31.3064 29.7908 31.0731 30.3479 30.6648 30.7592L18.966 42.42C18.3154 42.0774 17.7229 41.6345 17.2102 41.1075ZM54.001 7.40542C54.0157 10.0068 53.4779 12.5816 52.4231 14.9596C51.939 16.1011 51.299 17.17 50.5214 18.1358C46.5664 15.2646 43.0661 11.8144 40.1381 7.90125C41.1181 7.11375 42.2002 6.46625 43.3552 5.97625C45.7077 4.91323 48.2607 4.36625 50.8423 4.37209C51.2428 4.39153 51.6327 4.46931 52.0118 4.60542C52.3891 4.7532 52.7206 4.96709 53.0064 5.24709C53.2981 5.51542 53.5285 5.845 53.6773 6.20959C53.8309 6.58292 53.9096 6.97181 53.9135 7.37625L54.001 7.40542Z" fill="#F15C20"/></svg>`
  },
  {
    title: "Small & Medium Businesses",
    desc: "Boost your online presence. Improve user experiences. Streamline daily tasks. Reliable mobile app services help you grow and engage customers.",
    svg: `<svg width="65" height="41" viewBox="0 0 65 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.3333 32.0833H40.8333C41.6597 32.0833 42.3529 31.8033 42.9129 31.2433C43.4729 30.6833 43.7519 29.9911 43.75 29.1667V17.5C43.75 16.6736 43.47 15.9814 42.91 15.4233C42.35 14.8653 41.6578 14.5853 40.8333 14.5833H37.9167V11.6667C37.9167 10.8403 37.6367 10.1481 37.0767 9.59C36.5167 9.03195 35.8244 8.75194 35 8.75H29.1667C28.3403 8.75 27.6481 9.03 27.09 9.59C26.5319 10.15 26.2519 10.8422 26.25 11.6667V14.5833H23.3333C22.5069 14.5833 21.8147 14.8633 21.2567 15.4233C20.6986 15.9833 20.4186 16.6756 20.4167 17.5V29.1667C20.4167 29.9931 20.6967 30.6863 21.2567 31.2463C21.8167 31.8063 22.5089 32.0853 23.3333 32.0833ZM29.1667 14.5833V11.6667H35V14.5833H29.1667ZM20.4167 40.8333C14.7292 40.8333 9.905 38.8529 5.94417 34.8921C1.98334 30.9312 0.00194587 26.1061 1.42974e-06 20.4167C-0.00194301 14.7272 1.97945 9.90306 5.94417 5.94417C9.90889 1.98528 14.7331 0.00388889 20.4167 0H43.75C49.4375 0 54.2626 1.98139 58.2254 5.94417C62.1882 9.90695 64.1686 14.7311 64.1667 20.4167C64.1647 26.1022 62.1843 30.9274 58.2254 34.8921C54.2665 38.8568 49.4414 40.8372 43.75 40.8333H20.4167Z" fill="#F15C20"/></svg>`
  },
  {
    title: "Enterprises",
    desc: "Make secure digital ecosystems with mobile services. These services help many users. They handle complex tasks. They support long-term growth.",
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
const MOBILE_COST_TABLE_DATA = {
  projectType: [
    "MVP App",
    "Startup App",
    "Business App",
    "Enterprise App",
  ],
  timeline: [
    "2-3 Months",
    "3-5 Months",
    "4-8 Months",
    "6-12+ Months",
  ],
  complexity: [
    "Basic Features",
    "Medium Complexity",
    "Integrations & Automation",
    "Advanced Scalability",
  ]
};

const COST_FACTORS_CARD_ONE = [
  "Feature Complexity",
  "Third Party Integrations",
  "AI & Automation Features",
  "Backend Infrastructure",
  "Security & Compliance",
  "Number of Platforms",
  "Maintenance Requirements",
];

const COST_FACTORS_CARD_TWO = [
  "Mobile App Development",
  "Flutter App Development",
  "React native App Development",
];

const MobileAppDevelopment = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="Skilled Mobile App Development team for Your  "
        heading2={"Company"}
        para={
          <>
            With more than ten years of experience. Dignite Studios creates reliable solutions for the different industries. As the trusted <Link href="/services/mobile-app-development" className="text-[#F15C20]">mobile app development company</Link>. We also help many companies that build apps which match their goals accordingly.
            Our experts handle the complete process, from planning and design to development, testing and launch. We also focus on secure coding, smooth user experience and scalable solutions. With the clear communication and the ongoing support, we also deliver successful MVPs and enterprise apps.

          </>
        }
        button=" Connect with expert"
      />
      <Signs
        header="Typical Mobile App Development Challenges Businesses "
        header2="Face"
        subtitle={<>Customer engagement, retention and operations are all impacted by the mobile issues that many businesses also face. Finding these issues helps in enhancing app experiences which encourage long term success and company expansion. </>}
        buttonText="Solve Your Mobile App Challenges."
        items={SIGNS_DATA}
      />
      <Services
        services={services}
        header={"Services We offer as a Custom Mobile App development "}
        header2={"company"}
        button={"Explore Our Services Today!"}
        para={
          <>Dignite Studios provides <Link className="text-orange-600 underline" href={"/services/mobile-app-development"}>custom mobile app development company</Link> to create secure, scalable and business focused mobile solutions. We build apps that improve growth, engagement and long term success. </>
        }
      />

      {/* <BenefitingBusinesses
        header={"Which Businesses Benefit Most From Mobile App "}
        header2={"Development?"}
        para={<>Businesses of all sizes benefit from <Link href="/services/mobile-app-development" className="text-[#F15C20]">mobile app development companies</Link> offering tailored solutions. The right strategy helps customers. They enjoy better service. Operations are smoother. Growth goes up. Success lasts.</>}
        items={BENEFITING_BUSINESSES_DATA}
        buttonText={"Let’s Build Your Solution"}
      /> */}

      <Bussiness
        bs={highlights}
        header={"Why Businesses Trust "}
        header2={"Dignite Studios"}
        ctaHeader={"Partner With Dignite Studios"}
        ctaPara={
          "Dignite Studios combines experience. Technical expertise and a client focused on the approach to deliver reliable mobile solutions. We help businesses to achieve their goals through quality development. Clear communication and ongoing support."
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
                  Dignite Studios combines experience. Technical expertise and a client focused on the approach to deliver reliable mobile solutions.
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
        button={"Partner With Dignite Studios"}
        para={
          <>
            Dignite Studios combines experience. Technical expertise and a client focused on the approach to deliver reliable <Link href="/services/mobile-app-development" className="text-[#F15C20]">mobile solutions</Link>. We help businesses to achieve their goals through quality development. Clear communication and ongoing support.
          </>
        }
      />

      <AppComparison
        header2={" Business?"}
        header={"Android vs iOS vs Flutter vs React Native: Which Option Fits Your"}
        para={"Your goals budget. Timeline and performance needs the help in selecting the right technology. This comparison also helps in business to choose the best mobile app development technology strategy. "}
      />
      <AppDevelopmentCost
        header="Mobile App Development "
        header2="Cost Factors"
        para="Mobile app development company in usa cost depends on the features, complexity, integrations. Design needs and technology choices. Businesses can also review pricing factors to plan the budgets and to select the right development choices."
        tableData={MOBILE_COST_TABLE_DATA}
        cardOneTitle="Factors Affecting Development Costs"
        cardOneDesc="Best Mobile app development company cost changes based on project scope. Required features integrations. Security needs and maintenance support. A mobile app development cost calculator helps estimate the expected investment."
        cardOneItems={COST_FACTORS_CARD_ONE}
        cardTwoTitle="Native vs Cross Platform Cost Considerations"
        cardTwoDesc="The development approach affects timelines. Maintenance needs and mobile app development. Native apps offer strong performance. Cross platform apps reduce time and expenses with our mobile app development cost calculator."
        cardTwoItems={COST_FACTORS_CARD_TWO}
        ctaText="Request a project Estimate."
      />
      <TabularEcommerceTechs
        header={"Mobile App Development Tools and "}
        header2={"Technologies We Use"}
        para={
          <>Dignite Studios uses modern tools and frameworks to build reliable mobile solutions. We are an experienced <Link href="/services/mobile-app-development" className="text-orange-600 underline">mobile app development company</Link>. We use flexible mobile app development tools to create the apps across different platforms.</>
        }
        techData={techData}
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Reliable Mobile App Development Services "}
        header2={"Process "}
        para={
          "Dignite Studios follows a clear process to deliver reliable mobile solutions. As the trusted mobile app development company. We focus on the strategy. Quality and smooth execution."
        }
      />
      <MobileApp
        header={"How Mobile Apps Help Businesses "}
        header2={"Grow Faster"}
        para={
          <>
            Mobile apps help businesses increase engagement. Boost up the revenue. Automate tasks and improve customer experiences. Our solutions support growth. Efficiency and long term success.
          </>
        }
        button={"Get Your Mobile App"}
        cards={BENEFITS}
      />
      <CTA />
      <Features
        header={"Must Have Features In Modern "}
        header2={"Mobile Applications"}
        para={
          <>Modern apps need the right features for better usability. Security and customer satisfaction. Our <Link href="/services/mobile-app-development" className="text-[#F15C20]">mobile app development company</Link> creates the solutions through the features which support the business goals.</>
        }
        features={FEATURES}
        button={"Get Feature Recommendation"}
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industries We Serve With "}
        header2={"Mobile Solutions"}
        para={
          <>As the trusted <Link href="/services/mobile-app-development" className="text-[#F15C20]">mobile app development company</Link>. We create customized apps for different industries. Our solutions improve operations. Customer experiences and digital growth through reliable mobile technology.</>
        }
        button={"Discuss Your Mobile App Idea"}
      />


      <SuccessStories
        header={"Successful Projects Executed by "}
        header2={"Dignite Studios"}
        para={
          "Check out the case studies to see how Dignite Studios created functional apps just from ideas. Every project we shared here shows the challenges our clients had to deal with, the custom solutions we created and implemented. Also, the results we achieved as a team. See our development process and the technologies that helped us build secure and engaging applications as one of the best mobile app development companies."
        }
      />

      <Testimonials
        test={test}
        header={"Why Clients Recommend Our Mobile App "}
        header2={" Development Company"}
        para={
          <>
            Businesses trust Dignite Studios for practical solutions. We solve real challenges. As a reliable <Link href="/services/mobile-app-development" className="text-[#F15C20]">mobile app development company</Link>. We combine technical expertise. Clear communication and strategic planning.
          </>
        }
      />
      <Faq
        header={"Frequently Asked Questions About "}
        header2={"Mobile App Development"}
        faqs={faqs}
      />
      <ContactUs
        img={"/services/mobile-app/c-img.webp"}
        pathname={"Mobile App Development Company "}
        header={"Get a Free Mobile App Consultation "}
        header2={""}
        para={
          "Share your app idea. Business goals and project needs with our specialist. We also review your concept. Provide guidance. Timelines and estimates to create the right mobile app development solutions. "
        }
        btn={"Request Mobile App Development Quote "}
      />
    </div>
  );
};

export default MobileAppDevelopment;
