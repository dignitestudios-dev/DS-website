import React from "react";
import Hero from "./Hero";
import About from "../ui/About";

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
import Features from "../ui/Features";
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
import TabularTechs from "./TabularTechs";
// import ThirdPartyIntegration from "./ThirdPartyIntegration";
import Cost from "../ui/Cost";

import Services from "./Services";
import DeliveryApps from "./DeliveryApps";
import Niches from "./Niches";
import ThirdPartyIntegration from "./ThirdPartyIntegration";
import CTA2 from "./CTA2";
import { FiUsers } from "react-icons/fi";
import { MdMonetizationOn } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { BiBarChartAlt2 } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import Impact from "./Impact";
const services = [
  {
    icon: "1",
    icon2: "11",
    title: "Custom Entertainment App Development",
    description: (
      <>
        We build custom apps based on the content type and audience needs. Our media and entertainment app development solutions help businesses deliver unique user experiences and support long term growth.
      </>
    ),
  },
  {
    icon: "2",
    icon2: "22",
    title: "Streaming & OTT App Solutions",
    description: (
      <>
        We create scalable streaming platforms with smooth playback and fast loading. As the trusted streaming app development company, we ensure the stable performance and reliable content delivery.
      </>
    ),
  },
  {
    icon: "3",
    icon2: "33",
    title: "Music & Audio App",
    description: (
      <>
        We design music apps for streaming, playlists and audio sharing. Our entertainment mobile app development improves user engagement and delivers smooth listening experiences across the devices.
      </>
    ),
  },
  {
    icon: "4",
    icon2: "44",
    title: "Interactive Gaming Apps",
    description: (
      <>
        We develop engaging games with interactive features and social elements. Our entertainment app development ensures smooth gameplay, fast response time and strong user retention.
      </>
    ),
  },
  {
    icon: "5",
    icon2: "55",
    title: "Live Event & Ticketing Apps",
    description: (
      <>
        We build apps for the live streaming, event booking and ticket management. Our media and entertainment app development supports real time access and fluent user experience.
      </>
    ),
  },
  {
    icon: "6",
    icon2: "66",
    title: "Media & News Apps",
    description: (
      <>
        We create content rich platforms for news and media delivery. Our media and entertainment software development ensures fast updates, smooth browning and better content accessibility.
      </>
    ),
  },
  {
    icon: "7",
    icon2: "77",
    title: "Entertainment App UI/UX Design",
    description: (
      <>
        We design clean and simple interfaces which improve user interaction. Our design approach helps users explore content easily and enjoy a smooth experience.
      </>
    ),
  },
  {
    icon: "8",
    icon2: "88",
    title: "Support & Maintenance Services",
    description: (
      <>
        We provide ongoing updates, bug fixes and performance improvements. Our entertainment software development keeps apps secure, stable and ready for future growth.
      </>
    ),
  },
];
const defaultCards = [
  {
    label: "Simple Entertainment Apps",
    range: "$8,000 - $40,000",
    detail:
      "Basic apps with the essential features for streaming, music or video. Perfect for startups or small companies venturing into the entertainment industry.",
  },
  {
    label: "Medium Complexity Apps",
    range: "$45,000 - $90,000",
    detail:
      "Applications featuring third party API interfaces, social sharing, push notifications and subscription options. Perfect for growing platforms needing more functionality.",
  },
  {
    label: "Complex Apps",
    range: "$95,000 - $150,000+",
    detail:
      "Advanced apps including AI recommendations, live streaming, analytics and scalable architecture. Our media and entertainment app development solutions are suitable for enterprises and high traffic entertainment platforms.",
  },
];
const highlights = [
  {
    icon: "/industries/food-industry/s1.webp",
    title: "Skilled Mobile App Developers:",
    desc: "Our developers have extensive expertise in creating entertainment apps for a range of sectors, providing reliable performance, cutting-edge features, and engaging user experiences.",
  },
  {
    icon: "/industries/food-industry/s2.webp",
    title: "Scalable Architecture:",
    desc: "We build apps with scalable architecture that can handle increasing users, high traffic loads, and growing content without affecting performance or stability.",
  },
  {
    icon: "/industries/food-industry/s3.webp",
    title: "Agile Development Process:",
    desc: "Our agile approach ensures faster development with regular improvements, helping deliver projects on time while maintaining flexibility and high quality standards.",
  },
  {
    icon: "/industries/food-industry/s4.webp",
    title: "Transparent Communication:",
    desc: "We maintain clear communication throughout the project by sharing regular updates, gathering feedback, and ensuring smooth collaboration between our team and clients.",
  },
  {
    icon: "/industries/food-industry/s5.webp",
    title: "Secure Integrations:",
    desc: "We implement secure integrations to protect user data and content, ensuring safe transactions and compliance with industry standards for privacy and security.",
  },
  {
    icon: "/industries/food-industry/s6.webp",
    title: "Proven Track Record:",
    desc: "We have successfully delivered over 50 entertainment apps for global clients, showcasing our expertise in building reliable and high-performing digital solutions.",
  },
];
const VALUE_PROPOSITION = [
  {
    title: "Telehealth Applications",
    desc: "Dignite Studios builds telehealth apps. Apps that offer virtual consultations and make remote communication simple and reliable.",
  },
  {
    title: "Doctor On Demand Apps",
    desc: "The team would develop doctor on demand apps that allows patients to instantly connect with healthcare providers and manage consultations.",
  },
  {
    title: "Appointment Booking Apps",
    desc: "We create appointment booking apps. These apps make scheduling and automating reminders smooth. Also improves patient and clinic time management.",
  },
  {
    title: "Healthcare Marketplace Apps",
    desc: "The healthcare mobile app developers would design healthcare marketplace apps that can smoothly connect patients with pharmacies and laboratories.",
  },
  {
    title: "Medication Management Apps",
    desc: "The team at our healthcare app development company is an expert at developing medication management apps that help patients track prescriptions. It brings better outcomes.",
  },
  {
    title: "Fitness and Wellness Apps",
    desc: "Our custom healthcare app development company will build fitness and wellness apps that support healthy lifestyles. It works through activity tracking.",
  },
  {
    title: "Mental Health Apps",
    desc: "The team would create secure mental health apps for therapy and progress tracking to support better emotional wellbeing and care.",
  },
  {
    title: "Chronic Disease Apps",
    desc: "The team would develop apps that help monitor chronic conditions that result in better and improved long-term health management.",
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
    name: "John Smith",
    designation: "Product Manager, Nova Media",
    review:
      "The team delivered a fast and engaging streaming app. User activity and retention improved significantly.",
  },
  {
    name: "Emily Johnson",
    designation: "Operations Lead, StreamHub",
    review:
      "Our platform now handles high traffic smoothly. The development process was professional and timely.",
  },
  {
    name: "David Lee",
    designation: "Founder, MusicFloe",
    review:
      "The music app runs flawlessly. Playback is smooth and user satisfaction has increased.",
  },
  {
    name: "Sophie Buyers",
    designation: "Game Director, PlayZone",
    review:
      "Interactive gaming features now perform without lag. User engagement and session time improved greatly.",
  },
  {
    name: "Michael Brown",
    designation: "CTO, LiveCast",
    review:
      "Live streaming quality is stable. With our video streaming app development, users can watch events without interruptions which helps improve retention.",
  },
  {
    name: "Jessica Williams",
    designation: "Project Manager, MediaCore",
    review:
      "The team managed the app professionally. Our internal workflows and content delivery became more efficient.",
  },
  {
    name: "Daniel Martinez",
    designation: "Product Owner, Eventify",
    review:
      "Live event booking and streaming are smooth. Users praised the simple and intuitive interface.",
  },
  {
    name: "Laura Kim",
    designation: "Editor-in-Chief, News Track",
    review:
      "Content updates and delivery are faster. Our readers enjoy a smooth news experience.",
  },
  {
    name: "Robert Davis",
    designation: "Marketing Head, AudioWave",
    review:
      "Push notifications and playlists improved engagement. Users interact more frequently with the app.",
  },
  {
    name: "Sophia Taylor",
    designation: "CEO, FunStream",
    review:
      "Support and communication were excellent. The project was delivered on time with high quality results.",
  },
];


const BENEFITS = [
  {
    title: "Enhanced User Engagement",
    desc: "Personalized content, live streaming, interactive features and user friendly interfaces will keep the people engaged and coming back. This improves retention and app loyalty.",
    icon: <FiUsers color="#F15C20" size={25} />,
  },
  {
    title: "New Monetization Opportunities",
    desc: "Make money with premium content, app purchases and subscriptions. This helps businesses create steady income from their entertainment apps.",
    icon: <MdMonetizationOn color="#F15C20" size={25} />,
  },
  {
    title: "Seamless Content Delivery",
    desc: "Efficiently stream videos, music and games across platforms. Fast and reliable delivery improves the overall user experience and satisfaction.",
    icon: <RiLiveLine color="#F15C20" size={25} />,
  },
  {
    title: "Real Time Analytics",
    desc: "Track user activity, engagement and content performance. Businesses can speed up decision making and optimise content initiatives with the use of data driven insights.",
    icon: <BiBarChartAlt2 color="#F15C20" size={25} />,
  },
  {
    title: "Competitive Advantage",
    desc: "Stay ahead in the entertainment industry with innovative features, scalable platforms and apps that deliver unique and engaging user experiences.",
    icon: <GiTrophyCup color="#F15C20" size={25} />,
  },
];
const faqs = [
  {
    id: 1,
    question: "What is the price of creating an entertainment app?",
    answer:
      "The cost of developing an entertainment app depends on features, design complexity and integrations like streaming or payment systems. Basic apps are more affordable while advanced platforms cost more. We analyze your requirements and provide a custom quote which fits your business goals and budget.",
  },
  {
    id: 2,
    question: "How time-consuming is it to launch an app?",
    answer:
      "The development timeline depends on the scope and features of the app. Simple entertainment apps can take a few weeks, while complex apps with streaming or real time features may take a few months. We follow a structured and agile process to ensure timely delivery without compromising quality.",
  },
  {
    id: 3,
    question: "What platforms do you develop for?",
    answer:
      "We develop entertainment apps for iOS, Android and web platforms. Our cross platform development approach ensures your app performs smoothly across devices. This helps you reach a wider audience and maintain a consistent user experience regardless of the platform your users prefer.",
  },
  {
    id: 4,
    question: "Can you integrate live streaming or AR/VR?",
    answer:
      "Yes, we can integrate live streaming, AR and VR features into your entertainment app. These technologies improve user engagement by offering immersive experiences. Whether it is live events, virtual concerts or interactive content, we build solutions which enhance user interaction and overall app performance.",
  },
  {
    id: 5,
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we provide complete post launch support, including updates, bug fixes, performance improvements and security enhancements. As an entertainment app development company, we ensure your app stays up to date and runs smoothly. We also help you scale features as your business grows and user needs evolve.",
  },
];
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We define your app goals, target audience and content needs. This helps to create a clear plan and strong foundation for development.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    desc: "We design simple, engaging and user friendly interfaces. Our focus is to improve user experience retention through smooth navigation.",
  },
  {
    step: "03",
    title: "App Development",
    desc: "We integrate APIs and develop front end and back end solutions. This guarantees that your app functions properly and provides all necessary features.",
  },
  {
    step: "04",
    title: "Testing & Quality Control",
    desc: "We perform functional, performance and security testing. This ensures your app works properly and provides a stable, error free user experience.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "We launch your app on iOS, Android or web platforms. Our team ensures smooth deployment and better visibility with the app store optimization.",
  },
  {
    step: "06",
    title: "Maintenance & Support",
    desc: "We provide regular updates, fix issues and improve features. This helps your app stay secure, updated and aligned according to user needs.",
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
const EntertainmentApp = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        button="Discuss Your App Idea "
        heading="Introduction to Our Entertainment App"
        heading2={"Development Expertise"}
        para={
          <>
      With consumers streaming films, playing games and listening to music while on the go, the mobile entertainment sector is expanding quickly. To offer information, engage people and make money businesses need powerful apps. 
Dignite Studios is a trusted entertainment app development company with 10+ years of experience and over 50 apps delivered for global clients. We create solutions for streaming platforms, music apps, interactive games and live events.
Our entertainment app development services ensure high performance, smooth user experience and scalable growth. Explore our Mobile App Development Services, React Native App Development and Boston Page to see how we help businesses launch successful apps. 


          </>
        }
      />
      <Services
        header=" Entertainment App Development "
        header2={"Services"}
        button={"Build My Entertainment App"}
        para="We provide end to end entertainment mobile app development which help businesses build engaging and scalable apps. Our solutions focus on the strong performance, smooth user experience and reliable delivery across platforms, We design apps which support content growth, user retention and long term business success.   "
        services={services}
      />
           <CTA />
        <SuccessStories
          header="Our Entertainment App Success Stories  "
          para="We have built high performing apps for streaming, music and gaming. Our projects improved engagement and user retention. As a video streaming app development company, we delivered scalable apps which increased the revenue and supported the long term growth for our clients  "
        />
              <DeliveryFeatures />
                <CTA2/>
                   <MobileApp
        cards={BENEFITS}
        header2={"Entertainment Apps"}
        button={"Book a free Consultation "}
        header=" Benefits of Investing in "
        para="Businesses may improve engagement, income and brand visibility with the use of entertainment apps. In addition to automating content delivery. Simplifying platform management and enhancing user pleasure across devices, they also enable creators and businesses to provide entertaining experiences.  "
      />
                <DeliveryApps/>
                 <TabularTechs />
                    <Bussiness
        header="Why Choose Our Entertainment App "
        header2={"Development Company "}
        button="  Let’s Get Started   "
        para={
          <>
We create top notch entertainment apps which align with business objectives and provide captivating user experiences across platforms by combining in-depth knowledge, flexible development methods and scalable architecture. 
          </>
        }
        bs={highlights}
      />
                        <Process
        header="Our Entertainment App Development Process"
        para="We follow a structured and agile based development process to ensure your entertainment app is delivered on time, within budget and with high quality, performance and reliability across platforms.   "
        steps={PROCESS_STEPS}
      />
      <Impact/>
      <Cost cards={defaultCards} btn="Get a Custom Cost Estimate "  title=" Industry Wide Cost of Entertainment App Development" description={<>The complexity, functionality and platform all affect how much it costs to design and entertainment app. Our entertainment app development services provide scalable, high performing solutions while assisting companies with the budget planning. </>}/>
                {/* <ThirdPartyIntegration/> */}
    

      
            
      {/* <Industries para={"Having an experience of 10+ years in different industries and niches, we assure you that the healthcare app solutions we provide through Healthcare Mobile App Development Services work for a variety of business models. We can work for anyone, whether it’s a clinic or a hospital. The healthcare apps we create are built to meet the unique needs of each niche."} header={"Healthcare Mobile App Development Company For Different"} header2={"Niches"} VALUE_PROPOSITION={VALUE_PROPOSITION} /> */}

 
      {/* <Niches/> */}
    
   

            
   
   

      {/* <Features
        header="Cutting Edge Technologies for"
        header2={"Real eState Apps"}
        para="Utilising modern technologies, our real estate app development solutions also enhance productivity performance, and user experience. These tools support companies in data analysis, property management and client engagement.  "
        button={"Lets Grow Your Business "}
        // button="Get Feature Recommendations"
        features={featureData}
      /> */}

 
      {/* <Impact /> */}
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
   
      <Testimonials
        header=" What Our Clients Say About Our Entertainment App Development"
        test={test}
        button={"Work With Our Expert Team "}
        para={"Clients trust our video streaming app development company for delivering reliable, high-performance solutions which improve engagement and business outcomes. Here are the points of view of a few of our clients:"}

        // button="Work With Our Expert Team"
      />
      <Faq faqs={faqs} header="Frequently Asked Questions" />
      <ContactUs
       pathname={"Entertainment App dev"}
        img={"/industries/healthcare/c-img.webp"}
        header={"Ready to Build Your Entertainment App?"}
        para="Start your project with a trusted entertainment app development company. Share your idea with our team. We will guide you and build a strong app for your business. "
        btn="Get Free Consultation "
      />
    </div>
  );
};

export default EntertainmentApp;
