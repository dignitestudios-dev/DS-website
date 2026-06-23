import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Signs from "../ui/Signs";
import Services from "../ui/Services";
import DevelopmentApproach from "../ui/DevelopmentApproach";
import ToolsAndTech from "../ui/ToolsAndTech";
import Process from "../ui/Process";
import MetricsCarousel from "./MetricsCarousel";
import Comparison from "../ui/Comparison";
import WhyChoose from "../ui/WhyChoose";
import Bussiness from "../ui/Bussiness";
import Industries from "../ui/Industries";
import MobileApp from "../ui/MobileApp";
import SuccessStories from "../ui/SuccessStories";
import WebDesignCTA from "../ui/WebDesignCTA";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiLaravel,
  SiWordpress,
  SiShopify,
  SiWebflow,
  SiGooglecloud,
  SiMongodb,
  SiPostgresql
} from "react-icons/si";
import { FaAws, FaMicrosoft, FaGlobe, FaSyncAlt, FaChartBar, FaUserCheck, FaChartLine, FaRocket } from "react-icons/fa";

const signsItems = [
  {
    title: "Your Page Load Speed is Clearly Slow",
    desc: "The visitors on your page might leave instantly if the website is taking too long to load. A 1 sec delay in load speed reduces your conversions by up to 7%.",
  },
  {
    title: "Your Website Doesn’t Respond Well on Mobile",
    desc: "You need to find out if your mobile users are struggling with your website? A poor mobile experience can affect your business because around 60% of global web traffic is driven from smartphones.",
  },
  {
    title: "You’re Getting Traffic but Not Conversion",
    desc: "Traffic with no conversions is just lost opportunities. There might be some issues with your conversion paths or your visitors might be facing navigation problems if they are not taking action.",
  },
  {
    title: "Your Web Design is Comparatively Outdated",
    desc: "Your website is mostly the first impression of your business. Your impression is formed within milliseconds, literally. An outdated design can make people question your entire brand credibility.",
  },
  {
    title: "Your Content Management Takes Too Long",
    desc: "You feel like your website is taking too much time whenever you update content. It can affect your entire marketing efforts. Keeping your content updated on your website should not be requiring technical support.",
  },
  {
    title: "Your Website Ranking is Lower on Search Engines",
    desc: "Your website is having technical issues if your website is no longer ranking as well as before. Your digital presence might be suffering in this condition. Improvement in these areas attracts more traffic.",
  },
];

const webDesignServices = [
  {
    title: "UI UX Web Design Services",
    description: "UI UX web design services is the process of designing how a website looks and how users interact with it.",
    icon: "ux1",
    icon2: "ux2",
  },
  {
    title: "Frontend Development Services",
    description: "Frontend development services is the part of web development that develops everything on a website that users see and interact with.",
    icon: "mat1",
    icon2: "mat2",
  },
  {
    title: "Backend Development",
    description: "Backend development is the system behind a website that users do not usually see but rely on for everything to work properly.",
    icon: "deve1",
    icon2: "deve2",
  },
  {
    title: "Full Stack Development Services",
    description: "Full stack development services means combining both frontend development services and backend development to build complete websites through the provided web development services.",
    icon: "gr1",
    icon2: "gr2",
  },
  {
    title: "No Code Development",
    description: "No code development allows non technical users to build fully functional software from visual tools with minimal or no coding.",
    icon: "wee1",
    icon2: "wee2",
  },
  {
    title: "Cloud Development",
    description: "Cloud development is the process of managing applications entirely in the cloud platforms through programming languages rather than manual setup.",
    icon: "cll1",
    icon2: "cll2",
  },
  {
    title: "Website Testing",
    description: "Website testing is the process of testing a website or web application for errors before it goes live and afterwards.",
    icon: "dees1",
    icon2: "dees2",
  },
  {
    title: "Website Maintenance",
    description: "Website maintenance and updates is the routine process of monitoring and updating a website to keep it fully functional.",
    icon: "ref1",
    icon2: "ref2",
  },
  {
    title: "Web Modernization and Legacy Migration",
    description: "Web modernization and legacy migration is the process of upgrading outdated websites and Legacy Migration means physically moving the data.",
    icon: "winn1",
    icon2: "winn2",
  },
  {
    title: "Progressive Web Applications",
    description: "Progressive web applications (Also known as PWA) is the combinations of features of websites and mobile applications. These apps work directly in browsers but offer functionality like app.",
    icon: "gll1",
    icon2: "gll2",
  },
  {
    title: "AI Driven Web Solutions",
    description: "AI driven web solutions use artificial intelligence to improve how websites work and interact with users. This means more relevant interactions.",
    icon: "strr1",
    icon2: "strr2",
  },
  {
    title: "Headless CMS",
    description: "A headless CMS is a content management system where the backend is completely separated from the frontend presentation.",
    icon: "wordd1",
    icon2: "wordd2",
  },
];

const devApproachItems = [
  {
    title: "Custom Development",
    description: "Custom web development services is the best for full control over their website. You can build features based on your exact requirements without limitations.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.5312 0C33.7445 0 25 8.74453 25 19.5312V0H0V5.46875C0 16.2555 8.74453 25 19.5312 25H0V50H5.46875C16.2555 50 25 41.2555 25 30.4688V50H50V44.5312C50 33.7445 41.2555 25 30.4688 25H50V0H44.5312Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Low Code Development",
    description: "Low code development is perfect if you want to launch without heavy coding. It works well when where speed is more than just customization.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.46875 0C16.2555 0 25 8.74453 25 19.5312C25 8.74453 33.7445 0 44.5312 0H50V30.4688C50 41.2555 41.2555 50 30.4688 50H19.5312C8.74453 50 0 41.2555 0 30.4688V0H5.46875Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Full Stack Development",
    description: "Full stack development services is best for complex websites that require both frontend and backend expertise.This approach is suitable for scalable products.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 37.5V50H12.5977L6.25 43.5547L0 37.5V25H12.5L25 37.5ZM50 37.5V50H37.5977L31.25 43.5547L25 37.5V25H37.5L50 37.5ZM25 12.5V25H12.5977L6.25 18.5547L0 12.5V0H12.5L25 12.5ZM50 12.5V25H37.5977L31.25 18.5547L25 12.5V0H37.5L50 12.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Headless CMS Development",
    description: "Headless CMS development is the best one for businesses that need flexible content management with multi channel delivery. It simply separates the content from frontend.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.75 31.25C47.2012 31.25 50 28.4512 50 25C50 21.5488 47.2012 18.75 43.75 18.75C40.2988 18.75 37.5 21.5488 37.5 25C37.5 28.4512 40.2988 31.25 43.75 31.25ZM25 31.25C28.4512 31.25 31.25 28.4512 31.25 25C31.25 21.5488 28.4512 18.75 25 18.75C21.5488 18.75 18.75 21.5488 18.75 25C18.75 28.4512 21.5488 31.25 25 31.25ZM6.25 31.25C9.70117 31.25 12.5 28.4512 12.5 25C12.5 21.5488 9.70117 18.75 6.25 18.75C2.79883 18.75 0 21.5488 0 25C0 28.4512 2.79883 31.25 6.25 31.25ZM43.75 50C47.2012 50 50 47.2012 50 43.75C50 40.2988 47.2012 37.5 43.75 37.5C40.2988 37.5 37.5 40.2988 37.5 43.75C37.5 47.2012 40.2988 50 43.75 50ZM25 50C28.4512 50 31.25 47.2012 31.25 43.75C31.25 40.2988 28.4512 37.5 25 37.5C21.5488 37.5 18.75 40.2988 18.75 43.75C18.75 47.2012 21.5488 50 25 50ZM6.25 50C9.70117 50 12.5 47.2012 12.5 43.75C12.5 40.2988 9.70117 37.5 6.25 37.5C2.79883 37.5 0 40.2988 0 43.75C0 47.2012 2.79883 50 6.25 50ZM43.75 12.5C47.2012 12.5 50 9.70117 50 6.25C50 2.79883 47.2012 0 43.75 0C40.2988 0 37.5 2.79883 37.5 6.25C37.5 9.70117 40.2988 12.5 43.75 12.5ZM25 12.5C28.4512 12.5 31.25 9.70117 31.25 6.25C31.25 2.79883 28.4512 0 25 0C21.5488 0 18.75 2.79883 18.75 6.25C18.75 9.70117 21.5488 12.5 25 12.5ZM6.25 12.5C9.70117 12.5 12.5 9.70117 12.5 6.25C12.5 2.79883 9.70117 0 6.25 0C2.79883 0 0 2.79883 0 6.25C0 9.70117 2.79883 12.5 6.25 12.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Progressive Web Applications",
    description: "Progressive web apps are built to focus on mobile without building native apps. PWAs load quickly and smoothly work on different devices.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0C11.192 0 0 11.192 0 25C0 38.808 11.192 50 25 50C38.808 50 50 38.808 50 25C50 11.192 38.808 0 25 0ZM25 12.5C31.9037 12.5 37.5 18.0963 37.5 25C37.5 31.9037 31.9037 37.5 25 37.5C18.0963 37.5 12.5 31.9037 12.5 25C12.5 18.0963 18.0963 12.5 25 12.5Z" fill="currentColor" />
      </svg>
    ),
  },
];

const toolsData = [
  { name: "React", icon: <SiReact size={48} color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={48} color="#000000" /> },
  { name: "Node.js", icon: <SiNodedotjs size={48} color="#339933" /> },
  { name: "Laravel", icon: <SiLaravel size={48} color="#FF2D20" /> },
  { name: "WordPress", icon: <SiWordpress size={48} color="#21759B" /> },
  { name: "Shopify", icon: <SiShopify size={48} color="#95BF47" /> },
  { name: "Webflow", icon: <SiWebflow size={48} color="#4353FF" /> },
  { name: "AWS", icon: <FaAws size={48} color="#232F3E" /> },
  { name: "Google Cloud", icon: <SiGooglecloud size={48} color="#4285F4" /> },
  { name: "Azure", icon: <FaMicrosoft size={48} color="#0089D6" /> },
  { name: "MongoDB", icon: <SiMongodb size={48} color="#47A248" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={48} color="#4169E1" /> },
];

const webDesignProcess = [
  {
    step: "01",
    title: "Gathering Discovery and Requirements",
    desc: "Understanding your business goals is the first step in website development. This step define the functionality and strategy for your website.",
  },
  {
    step: "02",
    title: "UX Planning & Wireframing",
    desc: "UX planning and wireframing combined with frontend web development services organizes the structure of your website before design and development begins.",
  },
  {
    step: "03",
    title: "UI Design & Prototyping",
    desc: "UI design and Prototyping stage focuses on creating a professional design through UI UX web design services that reflects your brand while improving usability.",
  },
  {
    step: "04",
    title: "Development & Integrations",
    desc: "Development and integrations work by converting approved designs into a functional experience. This stage includes building features to support your user needs.",
  },
  {
    step: "05",
    title: "Quality Assurance",
    desc: "Quality assurance is the process of testing if your website functions properly before you go for launch. Everything is reviewed in details to identify issues.",
  },
  {
    step: "06",
    title: "Launch, Optimization & Growth",
    desc: "Launching a website the beginning. On going optimization after your launch improves conversion rates that are based on user behavior.",
  },
];

const metricsHighlights = [
  {
    icon: (
      <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.3333 0C34.4384 0 35.4982 0.438987 36.2796 1.22039C37.061 2.00179 37.5 3.0616 37.5 4.16667V29.1667C37.5 30.2717 37.061 31.3315 36.2796 32.1129C35.4982 32.8943 34.4384 33.3333 33.3333 33.3333H4.16667C3.0616 33.3333 2.00179 32.8943 1.22039 32.1129C0.438987 31.3315 0 30.2717 0 29.1667V4.16667C0 3.0616 0.438987 2.00179 1.22039 1.22039C2.00179 0.438987 3.0616 0 4.16667 0H33.3333ZM33.3333 12.5H4.16667V27.0833C4.16673 27.5936 4.35407 28.0861 4.69316 28.4674C5.03224 28.8488 5.49948 29.0924 6.00625 29.1521L6.25 29.1667H31.25C31.7603 29.1666 32.2528 28.9793 32.6341 28.6402C33.0154 28.3011 33.259 27.8339 33.3187 27.3271L33.3333 27.0833V12.5ZM6.25 4.16667C5.69747 4.16667 5.16756 4.38616 4.77686 4.77686C4.38616 5.16756 4.16667 5.69747 4.16667 6.25C4.16667 6.80253 4.38616 7.33244 4.77686 7.72314C5.16756 8.11384 5.69747 8.33333 6.25 8.33333C6.80253 8.33333 7.33244 8.11384 7.72314 7.72314C8.11384 7.33244 8.33333 6.80253 8.33333 6.25C8.33333 5.69747 8.11384 5.16756 7.72314 4.77686C7.33244 4.38616 6.80253 4.16667 6.25 4.16667ZM12.5 4.16667C11.9475 4.16667 11.4176 4.38616 11.0269 4.77686C10.6362 5.16756 10.4167 5.69747 10.4167 6.25C10.4167 6.80253 10.6362 7.33244 11.0269 7.72314C11.4176 8.11384 11.9475 8.33333 12.5 8.33333C13.0525 8.33333 13.5824 8.11384 13.9731 7.72314C14.3638 7.33244 14.5833 6.80253 14.5833 6.25C14.5833 5.69747 14.3638 5.16756 13.9731 4.77686C13.5824 4.38616 13.0525 4.16667 12.5 4.16667ZM18.75 4.16667C18.1975 4.16667 17.6676 4.38616 17.2769 4.77686C16.8862 5.16756 16.6667 5.69747 16.6667 6.25C16.6667 6.80253 16.8862 7.33244 17.2769 7.72314C17.6676 8.11384 18.1975 8.33333 18.75 8.33333C19.3025 8.33333 19.8324 8.11384 20.2231 7.72314C20.6138 7.33244 20.8333 6.80253 20.8333 6.25C20.8333 5.69747 20.6138 5.16756 20.2231 4.77686C19.8324 4.38616 19.3025 4.16667 18.75 4.16667Z" fill="white" />
      </svg>
    ),
    title: "Website Speed",
    description: "Website speed can measure how quickly your website loads or responds to user actions. A fast website would offer the access to the information to the visitors without delays."
  },
  {
    icon: (
      <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.625 23.4375C15.625 25.4167 15.7135 27.3354 15.8781 29.1667H30.9969C31.1615 27.3354 31.25 25.4167 31.25 23.4375C31.25 21.4583 31.1615 19.5396 30.9958 17.7083H15.8802C15.7135 19.5396 15.625 21.4583 15.625 23.4375ZM12.7427 17.7083C12.5797 19.6137 12.4987 21.5252 12.5 23.4375C12.5 25.4021 12.5833 27.3198 12.7417 29.1667H0.705208C0.244792 27.3333 0 25.4135 0 23.4375C0 21.4615 0.244792 19.5417 0.705208 17.7083H12.7427ZM16.249 14.5833H30.625C30.1625 11.4302 29.4625 8.61875 28.5948 6.30937C27.7833 4.15 26.8562 2.50937 25.9073 1.43854C24.9562 0.363542 24.1167 0 23.4375 0C22.7583 0 21.9187 0.364583 20.9667 1.4375C20.0177 2.51042 19.0906 4.15 18.2792 6.30937C17.4115 8.61875 16.7115 11.4302 16.2479 14.5833M34.1323 17.7083C34.2917 19.5552 34.375 21.4729 34.375 23.4375C34.375 25.4021 34.2917 27.3198 34.1333 29.1667H46.1698C46.6302 27.3333 46.875 25.4135 46.875 23.4375C46.875 21.4615 46.6302 19.5417 46.1698 17.7083H34.1323ZM45.1458 14.5833H33.7823C33.2927 11.0542 32.5177 7.86458 31.5208 5.21042C30.8844 3.51667 30.1427 2 29.2979 0.738542C36.5062 2.59479 42.3708 7.79375 45.1437 14.5833M13.0917 14.5833H1.73021C4.50208 7.79375 10.3677 2.59479 17.576 0.739583C16.7323 2 15.9896 3.51667 15.3531 5.21042C14.3562 7.86458 13.5823 11.0542 13.0927 14.5833M13.0896 32.2917H1.73021C4.50104 39.0781 10.3615 44.275 17.5635 46.1333C16.7198 44.8729 15.9802 43.3563 15.3448 41.6646C14.35 39.0083 13.5771 35.8208 13.0896 32.2917ZM28.6042 40.5667C29.4687 38.2573 30.1667 35.4458 30.6292 32.2917H16.2458C16.7073 35.4458 17.4052 38.2573 18.2708 40.5667C19.0813 42.726 20.0073 44.3656 20.9583 45.4365C21.9083 46.5094 22.75 46.875 23.4375 46.875C24.125 46.875 24.9667 46.5094 25.9167 45.4365C26.8677 44.3656 27.7937 42.726 28.6042 40.5667ZM31.5302 41.6635C32.525 39.0094 33.2979 35.8198 33.7854 32.2917H45.1448C42.374 39.0781 36.5135 44.275 29.3115 46.1333C30.1552 44.8729 30.8948 43.3552 31.5302 41.6635Z" fill="white" />
      </svg>
    ),
    title: "Core Web Vitals",
    description: "Core Web Vitals are performance metrics that show how users experience your website. They focus on loading speed and responsiveness during interactions."
  },
  {
    icon: (
      <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35.4167 37.5C34.0625 37.5 32.8472 37.1097 31.7708 36.3292C30.6944 35.5486 29.9479 34.55 29.5312 33.3333H18.75C16.4583 33.3333 14.4965 32.5174 12.8646 30.8854C11.2326 29.2535 10.4167 27.2917 10.4167 25C10.4167 22.7083 11.2326 20.7465 12.8646 19.1146C14.4965 17.4826 16.4583 16.6667 18.75 16.6667H22.9167C24.0625 16.6667 25.0438 16.259 25.8604 15.4437C26.6771 14.6285 27.0847 13.6472 27.0833 12.5C27.0819 11.3528 26.6743 10.3722 25.8604 9.55833C25.0465 8.74444 24.0653 8.33611 22.9167 8.33333H12.1354C11.684 9.54861 10.9285 10.5472 9.86875 11.3292C8.80903 12.1111 7.60278 12.5014 6.25 12.5C4.51389 12.5 3.03819 11.8924 1.82292 10.6771C0.607639 9.46181 0 7.98611 0 6.25C0 4.51389 0.607639 3.03819 1.82292 1.82292C3.03819 0.607639 4.51389 0 6.25 0C7.60417 0 8.81111 0.390972 9.87083 1.17292C10.9306 1.95486 11.6854 2.95278 12.1354 4.16667H22.9167C25.2083 4.16667 27.1701 4.98264 28.8021 6.61458C30.434 8.24653 31.25 10.2083 31.25 12.5C31.25 14.7917 30.434 16.7535 28.8021 18.3854C27.1701 20.0174 25.2083 20.8333 22.9167 20.8333H18.75C17.6042 20.8333 16.6236 21.2417 15.8083 22.0583C14.9931 22.875 14.5847 23.8556 14.5833 25C14.5819 26.1444 14.9903 27.1257 15.8083 27.9437C16.6264 28.7618 17.6069 29.1694 18.75 29.1667H29.5312C29.9826 27.9514 30.7382 26.9535 31.7979 26.1729C32.8576 25.3924 34.0639 25.0014 35.4167 25C37.1528 25 38.6285 25.6076 39.8438 26.8229C41.059 28.0382 41.6667 29.5139 41.6667 31.25C41.6667 32.9861 41.059 34.4618 39.8438 35.6771C38.6285 36.8924 37.1528 37.5 35.4167 37.5ZM7.73542 7.73542C8.13403 7.33542 8.33333 6.84028 8.33333 6.25C8.33333 5.65972 8.13333 5.16528 7.73333 4.76667C7.33333 4.36806 6.83889 4.16806 6.25 4.16667C5.66111 4.16528 5.16667 4.36528 4.76667 4.76667C4.36667 5.16806 4.16667 5.6625 4.16667 6.25C4.16667 6.8375 4.36667 7.33264 4.76667 7.73542C5.16667 8.13819 5.66111 8.3375 6.25 8.33333C6.83889 8.32917 7.33403 8.13125 7.73542 7.73542Z" fill="white" />
      </svg>
    ),
    title: "Conversion Rate",
    description: "Conversion rate analyze how many visitors on your website completed the desired action. Like filling out a form, making a purchase, requesting information."
  },
  {
    icon: (
      <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0.00104588C10.2899 0.00104588 8.17025 0.879019 6.60744 2.44182C5.04464 4.00463 4.16667 6.12424 4.16667 8.33438C4.16667 10.5445 5.04464 12.6641 6.60744 14.2269C8.17025 15.7897 10.2899 16.6677 12.5 16.6677C14.7101 16.6677 16.8298 15.7897 18.3926 14.2269C19.9554 12.6641 20.8333 10.5445 20.8333 8.33438C20.8333 6.12424 19.9554 4.00463 18.3926 2.44182C16.8298 0.879019 14.7101 0.00104588 12.5 0.00104588ZM8.33333 18.751C6.1232 18.751 4.00358 19.629 2.44078 21.1918C0.877974 22.7546 0 24.8742 0 27.0844V29.1677C0 30.2728 0.438987 31.3326 1.22039 32.114C2.00179 32.8954 3.0616 33.3344 4.16667 33.3344H20.8333C21.9384 33.3344 22.9982 32.8954 23.7796 32.114C24.561 31.3326 25 30.2728 25 29.1677V27.0844C25 24.8742 24.122 22.7546 22.5592 21.1918C20.9964 19.629 18.8768 18.751 16.6667 18.751H8.33333ZM23.4375 14.3865C24.4333 12.5948 25 10.5323 25 8.33438C25.0004 6.21654 24.4628 4.13332 23.4375 2.28021C24.6205 1.1609 26.1055 0.412737 27.709 0.12819C29.3125 -0.156358 30.9642 0.035183 32.4601 0.679139C33.9559 1.3231 35.2303 2.39124 36.1257 3.75157C37.0211 5.11189 37.4983 6.70477 37.4983 8.33334C37.4983 9.96191 37.0211 11.5548 36.1257 12.9151C35.2303 14.2754 33.9559 15.3436 32.4601 15.9875C30.9642 16.6315 29.3125 16.823 27.709 16.5385C26.1055 16.2539 24.6205 15.5058 23.4375 14.3865ZM28.0542 33.3344C28.7625 32.1094 29.1687 30.6865 29.1687 29.1677V27.0844C29.1726 24.0089 28.0387 21.0407 25.9854 18.751H33.3333C35.5435 18.751 37.6631 19.629 39.2259 21.1918C40.7887 22.7546 41.6667 24.8742 41.6667 27.0844V29.1677C41.6667 30.2728 41.2277 31.3326 40.4463 32.114C39.6649 32.8954 38.6051 33.3344 37.5 33.3344H28.0542Z" fill="white" />
      </svg>
    ),
    title: "User Engagement",
    description: "User engagement measures how visitors would interact with your website and content. It includes actions such as viewing pages and spending time on the site."
  },
  {
    icon: (
      <svg width="42" height="27" viewBox="0 0 42 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 3.125C0 2.2962 0.32924 1.50134 0.915291 0.915291C1.50134 0.32924 2.2962 0 3.125 0H17.7083C18.5371 0 19.332 0.32924 19.918 0.915291C20.5041 1.50134 20.8333 2.2962 20.8333 3.125C20.8333 3.9538 20.5041 4.74866 19.918 5.33471C19.332 5.92076 18.5371 6.25 17.7083 6.25H10.6667L22.9167 18.5L36.3333 5.08333C36.6194 4.7763 36.9644 4.53005 37.3478 4.35925C37.7311 4.18845 38.1449 4.0966 38.5645 4.0892C38.9841 4.0818 39.4009 4.15898 39.79 4.31615C40.1791 4.47333 40.5326 4.70726 40.8293 5.00401C41.1261 5.30075 41.36 5.65423 41.5172 6.04334C41.6743 6.43246 41.7515 6.84925 41.7441 7.26884C41.7367 7.68844 41.6449 8.10224 41.4741 8.48557C41.3033 8.86891 41.057 9.21391 40.75 9.5L25.125 25.125C24.5391 25.7102 23.7448 26.0389 22.9167 26.0389C22.0885 26.0389 21.2943 25.7102 20.7083 25.125L6.25 10.6667V17.7083C6.25 18.5371 5.92076 19.332 5.33471 19.918C4.74866 20.5041 3.9538 20.8333 3.125 20.8333C2.2962 20.8333 1.50134 20.5041 0.915291 19.918C0.32924 19.332 1.23501e-08 18.5371 0 17.7083V3.125Z" fill="white" />
      </svg>
    ),
    title: "Bounce Rate",
    description: "Bounce rate is there to measure the percentage of visitors who leave the website without taking action. A high bounce rate shows the issues with content."
  },
  {
    icon: (
      <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.08333 37.5C1.49306 37.5 0.998611 37.3 0.6 36.9C0.201389 36.5 0.00138889 36.0056 0 35.4167V14.5833C0 13.9931 0.2 13.4986 0.6 13.1C1 12.7014 1.49444 12.5014 2.08333 12.5H9.375C9.96528 12.5 10.4604 12.7 10.8604 13.1C11.2604 13.5 11.4597 13.9944 11.4583 14.5833V35.4167C11.4583 36.0069 11.2583 36.5021 10.8583 36.9021C10.4583 37.3021 9.96389 37.5014 9.375 37.5H2.08333ZM17.1875 37.5C16.5972 37.5 16.1028 37.3 15.7042 36.9C15.3056 36.5 15.1056 36.0056 15.1042 35.4167V2.08333C15.1042 1.49306 15.3042 0.998611 15.7042 0.6C16.1042 0.201389 16.5986 0.00138889 17.1875 0H24.4792C25.0694 0 25.5646 0.2 25.9646 0.6C26.3646 1 26.5639 1.49444 26.5625 2.08333V35.4167C26.5625 36.0069 26.3625 36.5021 25.9625 36.9021C25.5625 37.3021 25.0681 37.5014 24.4792 37.5H17.1875ZM32.2917 37.5C31.7014 37.5 31.2069 37.3 30.8083 36.9C30.4097 36.5 30.2097 36.0056 30.2083 35.4167V18.75C30.2083 18.1597 30.4083 17.6653 30.8083 17.2667C31.2083 16.8681 31.7028 16.6681 32.2917 16.6667H39.5833C40.1736 16.6667 40.6687 16.8667 41.0687 17.2667C41.4687 17.6667 41.6681 18.1611 41.6667 18.75V35.4167C41.6667 36.0069 41.4667 36.5021 41.0667 36.9021C40.6667 37.3021 40.1722 37.5014 39.5833 37.5H32.2917Z" fill="white" />
      </svg>
    ),
    title: "Lead Generation",
    description: "Lead generation shows how effectively your website turns your visitors into potential customers. It focuses on actions such as contact form submissions and inquiries."
  }
];

const whyChooseHighlights = [
  {
    icon: "/services/web-design/1.webp",
    number: "01",
    title: "User Centered Approach",
    desc: "A user centered design approach focuses on building websites for actual user needs and expectations. It ensures that every interaction is designed to be simple and clear."
  },
  {
    icon: "/services/web-design/2.webp",

    number: "02",
    title: "Modern Development Expertise",
    desc: "Having modern development expertise means we’re using updated technologies including frontend web development services. It leads to improved compatibility on different devices and browsers."
  },
  {
    icon: "/services/web-design/3.webp",
    number: "03",
    title: "Scalable Technology Solutions",
    desc: "The tech solutions support business growth without having any performance issues. So the websites easily handle traffic and changing requirements over time."
  },
  {
    icon: "/services/web-design/4.webp",
    number: "04",
    title: "Cross Industry Experience",
    desc: "Cross industry experience simply means working with different sectors. Our experience in different industries help in understanding diverse business needs and offer the best web development consulting services."
  },
  {
    icon: "/services/web-design/5.webp",
    number: "05",
    title: "Performance Driven Development",
    desc: "Performance driven development means developing websites that run smoothly. As a part of our frontend web development servicesit includes speed optimization and responsiveness. These approaches improve search visibility."
  },
  {
    icon: "/services/web-design/6.webp",
    number: "06",
    title: "Ongoing Support",
    desc: "Ongoing support ensure that your website performs well even after launch. This ongoing improvement is what maintains security and improves user experience."
  }
];

const industriesValueProps = [
  {
    title: "Healthcare",
    desc: "Healthcare businesses require the type of websites where patients and clients can easily book appointments. Get a team that build secure websites to improve accessibility.",
  },
  {
    title: "Ecommerce",
    desc: "E commerce websites are built to sell products online and manage inventory while providing smooth shopping experiences. Build scalable and smooth online stores with us.",
  },
  {
    title: "Real Estate Industry",
    desc: "Real estate websites are built so that buyers and sellers can explore and sell properties. While connecting with agents. We create websites with property listings, search functionality, lead generation features.",
  },
  {
    title: "Education & EdTech",
    desc: "EdTech organizational websites make learning resources accessible. We develop digital platforms that support student interactions, course delivery, admissions, communication.",
  },
  {
    title: "Travel & Hospitality",
    desc: "Travel websites showcase destinations, accommodations, services. All while making bookings accessible for customers. Build websites with us that provide clear information.",
  },
  {
    title: "Food & Restaurant Businesses",
    desc: "Food and restaurant websites offer menus, orders placement, reservations. Build websites with us that improve customer convenience while helping restaurants increase visibility.",
  },
  {
    title: "SaaS & Technology",
    desc: "SaaS and tech companies need websites that can clearly communicate their products and features. So, with us develop websites that support lead generation and product growth.",
  },
  {
    title: "Matchmaking & Dating",
    desc: "Matchmaking and dating platforms need secure websites that encourage smoother interactions. Build websites with us that that support user registration, profile management, communication.",
  },
];

const mobileAppBenefits = [
  {
    title: "Better User Experience",
    desc: "Offering better user experience means your visitors can easily understand your website. A website that is responsive and easy to use keeps users engaged for longer.",
    icon: <FaGlobe color="#F15C20" size={25} />,
  },
  {
    title: "Better Brand Credibility",
    desc: "Stronger brand credibility requires a professional looking website that shows the quality of your business. Visitors are going to judge a company from its online presence.",
    icon: <FaSyncAlt color="#F15C20" size={25} />,
  },
  {
    title: "Search Visibility",
    desc: "Improved search visibility means your website can be easily found online by your potential customers. Professional website development improves website speed and mobile responsiveness.",
    icon: <FaChartBar color="#F15C20" size={25} />,
  },
  {
    title: "Higher Conversion Rates",
    desc: "Higher conversion rates mean more website visitors take valuable actions. Professional website development improves page structure and CTAs.",
    icon: <FaUserCheck color="#F15C20" size={25} />,
  },
  {
    title: "Enhanced Website Security",
    desc: "Better website security protects your website, customer information and business data from potential threats. Professional development includes all the required security measures.",
    icon: <FaChartLine color="#F15C20" size={25} />,
  },
];

const testimonialsData = [
  {
    name: "James Carter",
    designation: "— Marketing Director, BrightEdge Solutions",
    review: "“Our website is faster now and infact, quite easier for customers to use. We’ve literally seen better inquiries too.”",
  },
  {
    name: "Harvey Frank",
    designation: "— CEO, Nova Retail Group",
    review: "“The team honestly understood the assignment and got us a website that fits our business perfectly.”",
  },
  {
    name: "Michael Brown",
    designation: "— Operations Manager, CoreTech Systems",
    review: "“We were dealing with some performance issues, but the new website they built runs smoothly and feels a lot more reliable.”",
  },
  {
    name: "Emily Johnson",
    designation: "— Founder, UrbanNest Realty",
    review: "“The design is clean and simple, and our customers find it much easier to navigate now.”",
  },
  {
    name: "Daniel Kim",
    designation: "— Product Manager, Nexa Digital",
    review: "“They were easy to work with and delivered exactly what we asked for without any confusion.”",
  },
  {
    name: "Ana Cater",
    designation: "— Business Head, Horizon Wellness",
    review: "“Our website finally feels modern and stable. It’s definitely helping us reach more customers online.”",
  }
];

const faqsData = [
  {
    id: 1,
    question: "What are website design and development services?",
    answer: "Through the website design and development services, you can build websites with the help of experts that create an online presence for your business. Design focuses on how the website looks and the development focuses on how it works. These websites that are built through custom web development services are used for generating leads."
  },
  {
    id: 2,
    question: "How much longer does it take for building a website?",
    answer: "The timeline is usually highly dependent on the business and features requirements. A simple, basic website can take a few weeks or days. It can also take several months if you’re going for custom or ecommerce websites. Each stage takes time to ensure quality and usability. When requirements are clear and feedback is quick, faster timelines are possible."
  },
  {
    id: 3,
    question: "An existing website can be redesigned?",
    answer: "Yes. An existing website can be fully redesigned. You can improve an existing website’s design and performance. Basically, a website redesign include the updates in layout, navigation, mobile responsiveness. A redesign can also fix usability issues. Speed, update technology, alignment with new business goals can be done. Businesses usually choose to redesign a website when it looks outdated."
  },
  {
    id: 4,
    question: "How to know if your business website needs a redesign?",
    answer: "Your website needs a redesign if it feels outdated and slow. More clear signs include poor mobile experience, low engagement, declining traffic, weak conversion rates. It is going to to affect your growth if your website no longer reflects your brand or business goals. A redesign is also needed when competitors have better performing websites."
  },
  {
    id: 5,
    question: "What to choose between custom web development services or a no code platform?",
    answer: "Custom development and no code platforms are built for different business needs. Custom development is perfect for businesses that need long term flexibility. While the no code platforms are better for simple websites and MVPs. However, no code platforms have limitations in functionality. Simply, making a choice depends on your goals and budget."
  },
  {
    id: 6,
    question: "What makes a website successful in 2026?",
    answer: "In 2026 your website should be mobile friendly and highly secure. It should be focusing on user experience. Your website should load in secs, work smoothly and make it easy for the users to take action. Your website’s success in 2026 is highly dependant on how well it adapts to changing digital trends and customer expectations. Find out more through our web development consulting."
  },
  {
    id: 7,
    question: "Can website improve or impact lead generation?",
    answer: "Your website has a major impact on your entire process of lead generation. Through effective web development, you can create websites that guide users toward taking action. So, a well built website improves user experience through clear navigation. Mobile friendly design and optimized layouts increase engagement. When your website is actually focused on conversions, it can turns visitors into leads."
  }
];

const WebDesignServices = () => {
  return (
    <div className="max-w-screen-2xl mx-auto gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="Looking for the Best Web Development Company in  "
        heading2={"USA?"}
        para={
          <>Website design and development services help businesses build websites that are easy to use and designed to bring actual results. These custom web development services focuses on creating websites that keep them engaged through clear design.
            Dignite Studios provides website design and development services with over 10 years of experience. The best custom web development company in USA builds websites that are tailored to every business needs. Our focus is on simple user experience that grows with your business.
            We merge design with development. It create websites that work effectively yet still look attractive. It creates a credible online presence. We support your long term growth whether you need a new website or want to improve an existing one.

          </>
        }
        button="Talk to the Team!"
      />
      <Signs
        header="Is It Time to Update Your Website? Signs Your Website Is Holding Back Business"
        header2="Growth"
        subtitle="Your website works for your business, or against it. Many companies don’t realize it their website is silently costing them customers until the damage is already done. Being best web development company in USA Dignite Studios assists companies in finding out when a redesign has become a necessity and not just an option.
The following signs will tell you If your website is underperforming:
"
        buttonText="Improve Your Website"
        items={signsItems}
      />
      <Services
        header=" What Types of Website Design & Development Services Do You "
        header2="Need?"
        para="The web development services depend on your technical requirements and audience. Some business need a simple marketing website. But some business would require custom applications or advanced integrations from a custom web development company in USA."
        button="Explore Our Services"
        services={webDesignServices}
      />
      <DevelopmentApproach
        header="What Web Development Approach Should You "
        header2="Choose?"
        para="The right web development approach simply depends on your technical needs. For full flexibility, some projects require custom development. Some projects work better with no code solutions. Some work with headless CMS. Choosing the right approach helps improve performance."
        buttonText="Get Your Free Web Audit"
        items={devApproachItems}
      />
      <ToolsAndTech
        header="What Technologies and Platforms Do You Need to Build "
        header2="Websites?"
        subtitle="Following are the technologies used by the best custom web development company in USA to build websites that can power the the final product. We use the professional tools that make sure the performance is high. Below is our tech stack."
        tools={toolsData}
      />
      <Process
        steps={webDesignProcess}
        header="How Does Website Development Process Work?"
        para="The entire website development process is divided in multiple steps that creates high performing digital experiences. Each stage of development is important and prioritized when you’re choosing the best web development company in USA."
      />
      <MetricsCarousel
        header="Key Website Performance Metrics We  "
        header2="Improve"
        button="Get a Website Audit"
        para="Website performance can be measured by a lot of different metrics. Traffic isn’t the only way to identify your website’s performance. The understanding of these key performance indicators can identify opportunities to improve user experience through web development consulting."
        data={metricsHighlights}
      />
      <Comparison />
      <Bussiness
        header="Why You Should Choose Dignite Studios for Custom Web Development "
        header2="Services?"
        button="Explore Our Web Experiences"
        para="Choosing the right website development company depends on experience. A good web development partner should build performance driven websites that support growth. The right company will also focus on long term support."
        bs={whyChooseHighlights}
      />
      <Industries
        header="Which Industries Can Benefit From Custom Web Development "
        header2="Services?"
        para="Dignite Studios make sure to provide web development services for different businesses from a wide range of industries. Although the right solution depends on your industry and business requirements. The industries below show the sectors Dignite Studios usually works with."
        VALUE_PROPOSITION={industriesValueProps}
        button={" Explore our Web Services"}
      />
      <MobileApp
        cards={mobileAppBenefits}
        header2="Services?"
        header="Why Do Businesses Invest in Professional Custom Web Development "
        para="Investing in professional website development can easily improve your over all user experiences. A professionally developed website improves performance, security and conversions."
        button="Discuss your website requirements."
      />
      <SuccessStories
        header="Website Development Results and "
        header2={"Success Stories"}
        para="The website development projects created by Dignite Studios focus on clear business outcomes. Each project is built to support the business goals for each industry.. The examples below highlight how our work has improved digital performance."
      />
      <WebDesignCTA />
      <Testimonials
        header2="Services"
        header="What Clients Say About Our Custom Web Development "
        test={testimonialsData}
        para=""
      />
      <Faq faqs={faqsData} header="Everything You Need to Know About " header2={"Website Development"} />
      <ContactUs
        img="/services/web-design/ccta.webp"
        pathname="Web Design"
        header="Your Website Needs This Upgrade!"
        para="Talk to our experts and tell us more about your project. So we build exactly what you need. The team is trained to convert the information in a customized website strategy."
        btn="Get Free Consultation"
      />
    </div>
  );
};

export default WebDesignServices;
