import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Services from "./Services";
import Link from "next/link";
import Bussiness from "../ui/Bussiness";
import { MdArrowOutward } from "react-icons/md";
import Industries from "../ui/Industries";
import Process from "../ui/Process";
import { FaJava, FaApple } from "react-icons/fa";
import SuccessStories from "../ui/SuccessStories";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";
import {
  SiReact,
  SiFlutter,
  SiNodedotjs,
  SiFirebase,
  SiSwift,
  SiC,
  SiKotlin,
  SiPython,
  SiPhp,
  SiDotnet,
  SiRubyonrails,
  SiAndroid,
} from "react-icons/si";
import HiringProcess from "../ui/HiringProcess";
import TabularTechs from "../ui/TabularTechs";
import FlexibleHiring from "../ui/FlexibleHiring";
import WhyChoose from "../ui/WhyChoose";
import CTA from "./CTA";

const features = [
  {
    number: "01",
    title: "Experienced Android Developers",
    description:
      "Our team also includes skilled engineers. Many Clients choose to hire android app developers for the reliable and scalable applications.",
  },
  {
    number: "02",
    title: "Flexible Hiring Models",
    description:
      "We offer flexible options. Businesses can easily hire android application developers based on project needs and budget.",
  },
  {
    number: "03",
    title: "Agile Development Process",
    description:
      "We follow the agile methods. This helps deliver projects faster while maintaining quality and consistent performance.",
  },
  {
    number: "04",
    title: "Fast Onboarding",
    description:
      "Developers join quickly. Businesses can hire dedicated android app developer and start development without any delays.",
  },
  {
    number: "05",
    title: "Transparent Communication",
    description:
      "We keep communication clear. Clients receive updates regularly and stay informed during every development stage.",
  },
  {
    number: "06",
    title: "Secure NDA & IP Protection",
    description:
      "We protect your ideas. Throughout development process, our procedure guarantees total data protection and confidentiality.",
  },
];

const techData = {
  "iOS App Development": [
    { name: "Swift", icon: <SiSwift /> },
    { name: "Objective-C", icon: <FaApple /> },
    { name: "Apple Ecosystem Apps", icon: <FaApple /> },
  ],

  "Android App Development": [
    { name: "Kotlin", icon: <SiKotlin /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Native Android Solutions", icon: <SiAndroid /> },
  ],

  "Cross Platform Development": [
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React Native", icon: <SiReact /> },
  ],

  "Backend Technologies": [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Ruby on Rails", icon: <SiRubyonrails /> },
    { name: "Google Firebase", icon: <SiFirebase /> },
  ],
};

const services = [
  {
    icon: "/location/mobile-california/icons/icon.webp",
    icon2: "/location/mobile-california/icons/icon4.webp",
    title: "Custom Mobile App Development",
    description: (
      <>
        We create custom mobile apps based on the client requirements. Many businesses hire android developers to build scalable, secure and feature rich applications for their operations.
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/pen.webp",
    icon2: "/location/mobile-california/icons/pen5.webp",
    title: "UI/UX Design for Mobile Apps",
    description: (
      <>
        Our design team creates user-friendly interfaces. Clear layouts and smooth navigation help businesses improve the engagement and provide users with enjoyable experiences.
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/setting.webp",
    icon2: "/location/mobile-california/icons/setting2.webp",
    title: "Cross Platform App Development",
    description: (
      <>
        We build apps which run on multiple platforms. Also it gurantees consistent functioning across iOS and Android devices while cutting expenses and development time.
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/pipe.webp",
    icon2: "/location/mobile-california/icons/pipe3.webp",
    title: "App Testing & Quality Assurance",
    description: (
      <>
        Apps undergo thorough testing before being launched. This guarantees bug free performance, reliable functionality and smooth operation across all the devices for an optimal user experience.
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/database.webp",
    icon2: "/location/mobile-california/icons/database1.webp",
    title: "API & Backend Development",
    description: (
      <>
        We develop robust backend systems and integrate APIs efficiently. Many companies hire android application developer to manage app data and enhance functionality securely.
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/set.webp",
    icon2: "/location/mobile-california/icons/set1.webp",
    title: "App Maintenance & Support",
    description: (
      <>
        We provide the continuous maintenance and updates. Clients can also hire android app developer for the ongoing improvements, ensuring apps which remain secure, fast and fully functional over the time.
      </>
    ),
  },
];

const highlights = [
  {
    icon: "/services/mob-hire/1.webp",
    title: "Proven Development Expertise",
    desc: "Our team has years of experience. Clients appoint developers for building secure and high performing Android applications.",
  },
  {
    icon: "/services/mob-hire/2.webp",
    title: "Transparent Communication",
    desc: "We maintain clear updates throughout the project. Businesses stay informed when they hire developer from us.",
  },
  {
    icon: "/services/mob-hire/3.webp",
    title: "Agile Methodology",
    desc: "Our agile process ensures fast delivery. Clients benefit when they hire android app development company for efficiency.",
  },
  {
    icon: "/services/mob-hire/4.webp",
    title: "Scalable Teams",
    desc: "Teams can grow with project demands. Companies can hire developer for flexible and scalable app solutions.",
  },
  {
    icon: "/services/mob-hire/5.webp",
    title: "On Time Delivery",
    desc: "We meet deadlines consistently. Clients hire android app developers in USA to ensure timely project completion.",
  },
  {
    icon: "/services/mob-hire/6.webp",
    title: "Long Term Technical Support",
    desc: "Our developers provide ongoing assistance. Businesses can appoint developer for updates and maintenance after launch.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare & Fitness",
    desc: "We develop secure Android apps for healthcare providers and fitness platforms. Clients hire android app developers to manage patient data and enhance the user engagement safely.",
  },
  {
    title: "Ecommerce",
    desc: "Retail and online stores benefit from scalable Android apps. Businesses hire android application developers to streamline the sales, inventory and customer experience.",
  },
  {
    title: "Real Estate",
    desc: "We build apps for property listings and real estate management. Clients hire the android developers to simplify browning and improve user interaction.",
  },
  {
    title: "Education",
    desc: "Our team creates learning and e-learning Android apps. Institutions hire dedicated android app developer to deliver the interactive content and track the student progress effectively.",
  },
  {
    title: "Travel & Tourism",
    desc: "We develop apps for the booking, navigation and guides. Companies developers to enhance user experience and increase bookings efficiently.",
  },
  {
    title: "Food Delivery",
    desc: "We build apps for ordering, tracking and payments. Restaurants and startups hire android app developers in USA to improve delivery and user convenience.",
  },
  {
    title: "Fitness & Wellness",
    desc: "Fitness apps track workouts and progress. Businesses hire dedicated android app developer to provide personalized plans and enhance customer engagement.",
  },
];

const test = [
  {
    name: "TechNova Solutions",
    designation: "– SaaS Founder",
    review:
      "Great experience working with the team. We decided to hire developers and the results were smooth, fast and reliable",
  },
  {
    name: "ShopEase Digital",
    designation: "– E-Commerce CEO",
    review:
      "We chose to hire android app developers for our Ecommerce app. The team delivered user friendly and high performing solution",
  },
  {
    name: "HealthBridge Systems",
    designation: "– Healthcare Systems",
    review:
      "The developers handled our healthcare app carefully. We hired an android application developer and received a secure and stable platform",
  },
  {
    name: "EduSmart Learning",
    designation: "– Education Provider",
    review:
      "We needed an e-learning app. Their team helped us hire developer and delivered exactly what we expected",
  },
  {
    name: "TravelGo App",
    designation: "– Travel Startup",
    review:
      "Communication was clear throughout. We decided to hire developer and the project was completed on time",
  },
  {
    name: "FitTrack Pro",
    designation: "– Fitness Platform",
    review:
      "Our fitness app improved a lot. We chose there developers and saw better performance and user engagement",
  },
];

const faqs = [
  {
    id: 1,
    question: "Do you build scalable Android applications?",
    answer:
      "Yes. Businesses hire android developers from our team to build scalable applications which handle growing users and features. We focus on the strong architecture, smooth performance and secure systems. This also allows apps to perform well under the high traffic and ensures the long term stability without any technical limitations or the performance issues.",
  },
  {
    id: 2,
    question: "How long does Android app development take?",
    answer:
      "The development timelines depend on the apps's complexity and features. Basic apps may take a few weeks, meanwhile the advanced applications require more time. Many businesses hire developer services to ensure faster delivery through the proper planning structured development and consistent progress throughout the project lifecycle.",
  },
  {
    id: 3,
    question: "Do you provide app maintenance and support?",
    answer:
      "Yes. We offer ongoing maintenance and support after the app launch. Clients can get developers to manage updates, fix bugs and improve performance. This also helps ensure the application stays secure, updated and fully functional while adapting to new user needs and platform changes quite over time.",
  },
  {
    id: 4,
    question: "Can you improve my existing Android application?",
    answer:
      "Yes. Our team reviews your current application to identify performance issues and improvement areas. Businesses often hire android application developer to optimize speed, enhance user experience and upgrade features. This ensures the app performs better, meets the user expectation and supports the long term growth.",
  },
  {
    id: 5,
    question: "Do you work with startups and enterprises?",
    answer:
      "Indeed. We collaborate with both big businesses and startups. It can hire developers to launch new applications quickly, while enterprises rely on us to scale and improve existing platforms. Our flexible approach helps businesses of all sizes build reliable, secure and high performance android applications.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "We gather project details, goals and features. Clients hire android app developer to define requirements and ensure the app meets their business objectives.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    desc: "Our team designs intuitive interfaces. Engaging layouts and clear navigation improve user experience and increase app adoption across the Android devices.",
  },
  {
    step: "03",
    title: "App Development",
    desc: "We write clean, efficient code to build secure and scalable applications. Businesses can hire developers to handle development for the fast and reliable results.",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    desc: "Apps are put through extensive testing to guarantee error free operation. This step guarantees stable, secure and smooth operation across all Android devices.",
  },
  {
    step: "05",
    title: "Deployment & Support",
    desc: "We launch apps on the Google Play and other platforms. Clients can hire developer for the post launch support and regular updates.",
  },
];

const steps = [
  {
    title: "Project vision",
    description:
      "We discuss your project goals clearly. This helps businesses hire developer for a development approach.",
    icon: "/services/mob-hire/hire/1.webp",
  },
  {
    title: "Expert Consultation",
    description:
      "Our team provides guidance. Clients can appoint a dedicated developer for any technical advice.",
    icon: "/services/mob-hire/hire/2.webp",
  },
  {
    title: "Hiring Mobile App Developers",
    description:
      "Select skilled developers for your project. Many businesses appoint developer for building reliable Android Applications.",
    icon: "/services/mob-hire/hire/3.webp",
  },
  {
    title: "Developer Biography",
    description:
      "Review developer profiles and experience. This ensures you hire the right developer matching project needs.",
    icon: "/services/mob-hire/hire/4.webp",
  },
  {
    title: "Meeting With Developer",
    description:
      "Schedule discussions with the developer. Collaborate effectively and start your Android project delays.",
    icon: "/services/mob-hire/hire/5.webp",
  },
  {
    title: "Collaboration & Development",
    description:
      "Developers join your team and begin work. Businesses get developers projects efficiently and on time.",
    icon: "/services/mob-hire/hire/6.webp",
  },
];

const cards = [
  {
    title: "Dedicated Developer",
    desc: "Hire a full time developer for the long term projects. Many companies hire the dedicated of app developer to manage ongoing development and provide the consistent support. ",
    icon: "/services/test.webp",
  },
  {
    title: "Hourly Hiring",
    desc: "Pay only for hours worked . This model is ideal for short term tasks, updates or the specific app development requirements. ",
    icon: "/services/sb.webp",
    illustration: "hourly",
  },
  {
    title: "Project-Based Hiring",
    desc: "Fixed scope and budget for defined projects. Businesses often hire android application developer to deliver the projects efficiently within the agreed timeline. ",
    icon: "/services/mob.webp",
    illustration: "project",
  },
];

const HireAndroidDevs = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      {/* Meta tags should ideally be handled by Next.js Head or Metadata API in the layout/page file, but here is the content reflected in the UI */}
      
      <Hero 
        title="Hire Android Developers" 
        description="Hire Android developers from Dignite Studios to build fast and scalable apps. Our team works on native and cross platform solutions. Developers join projects quickly and deliver high quality apps that support business growth."
      />

      <About
        heading="Introduction"
        heading2={""}
        para="Android apps are growing fast across industries. Businesses need skilled teams to build strong digital products. Many companies now choose to hire android developers instead of building in-house teams. This is the time saver and reduce the cost. Dignite Studios has more than 10 years of experience in Android development. We have worked with startups and enterprises across Ecommerce, healthcare and Fintech industries. Our team includes experts you can trust when you hire android app developer for your project. We focus on quality, speed and long term support. Many global businesses also hire developers for the team to scale their development and deliver reliable applications."
        button="Start Your Project"
      />

      <WhyChoose
        header={"Why Hire Android Developers From "}
        header2={"Dignite Studios"}
        para="We help businesses hire android developers who build secure and scalable applications. Our team would also focus on quality,speed and clear communication. We make hiring quite simple so businesses can start projects quickly and achieve reliable results without any delays or the technical issues.  
"
        features={features}
      />

      <TabularTechs
        header={"Our Android Development"}
        header2={"Expertise"}
        para="Our team has strong experience in modern technologies used for Android and cross platform development. Businesses that hire developers from us get reliable solutions which are built with proven tools. We create high performance apps which run smoothly across the devices and deliver consistent user experience."
        techData={techData}
        button={"Explore Our Expertise"}
      />

      <Services
        services={services}
        header={"Mobile App Development"}
        header2={"Services We offer"}
        button={"Start Your App Project"}
        para="We provide end to end mobile app solutions for businesses. Companies often hire android app development company from us to build, design and maintain apps. Our team ensures scalable, secure and high performance applications which is made for Android, iOS and cross platform environments."
      />

      <FlexibleHiring
        header={"Flexible Hiring "}
        header2={"Models"}
        para="We provide flexible hiring options for businesses which want to hire android developers. Choose from dedicated, hourly or project based models. Each option is designed to fit different project sizes, timelines and development requirements."
        cards={cards}
      />

      <Process 
        header="Our Mobile App "
        header2="Development Process"
        btn={"Start Your Android App Project "}
        para="We follow a structured process to build the high quality Android applications. Businesses which hire android developers from us get consistent results, clear communication and efficient delivery throughout every step of app development."
        steps={PROCESS_STEPS}
      />

      <Industries 
        header="Industries We Serve for Android "
        header2="App Development"
        para="We deliver Android app solutions for businesses across multiple industries. Companies hire the android developers from us to build apps that improve operations, boost engagement and support scalable growth in every sector."
        button="Discuss Your Android App Idea"
        VALUE_PROPOSITION={VALUE_PROPOSITION}
      />

      <SuccessStories 
        header="Our Android App Development"
        header2="Case Studies"
        para="We have helped businesses build successful Android applications through the reliable development and smart integrations. Companies which hire android developers from us achieve better performance, improved user experience and the strong engagement. Our work highlights real results across industries with the scalable and secure mobile app solutions. Explore our case studies to see how we turn ideas into high performing Android apps."
      />

      <Testimonials 
        header="Client Testimonials & Trusted"
        header2="Android Development Partner"
        button="Work With Our Expert Team"
        test={test}
        para="Businesses trust our team for reliable Android app solutions. Many companies hire android developers from us because we deliver secure applications, clear communication and consistent results. Our focus on quality and long term support helps clients build scalable apps and maintain strong performance."
      />

      <HiringProcess 
        header="Our Android Developer "
        header2="Hiring Process"
        button="Hire Android Developers Now"
        steps={steps}
        para="Hiring developers from Dignite Studios is simple and fast. Businesses can quickly hire developer through the structured process which ensures the right expertise, fluent onboarding and smooth collaboration for successful Android app development projects."
      />

      <Bussiness
        header={"Why Businesses Choose"}
        header2={"Dignite Studios"}
        button={"Hire Android Developers Today "}
        para={"Businesses prefer Dignite Studios because we offer proven expertise in Android development, transparent communication, agile project management, scalable teams, on time delivery and long term technical support. Clients can hire android developers with confidence for secure, high quality and reliable Android app solutions.  "}
        ctaHeader={"Hire Android Developer Today"}
        ctaPara={"Scale your team with skilled Android developers who are ready to start quickly. We offer fast onboarding, flexible hiring models and reliable support for your projects. Our developers bring strong experience and deliver high quality results. Start building your app faster with a team which you can trust."}
        ctaBtn={"Hire Android Developers"}
        bs={highlights}
        cta={
          <div className="bg-transparent h-[500px] hover:scale-105 z-50 absolute text-white opacity-100 transition-all ease-linear w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%] ">
            <div className="relative">
              <img
                src="/location/mobile-boston/cta-img.webp"
                className="w-full rounded-b-2xl bottom-3 relative bg-cover"
                alt="cta"
              />
              <div className="md:w-[45%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto pb-8 space-y-4 flex flex-col items-center text-center">
                <h2 className="text-[45px] font-bold text-white leading-[45px]">
                  Hire Android Developer Today
                </h2>
                <p>
                  Scale your team with skilled Android developers who are ready to start quickly. We offer fast onboarding, flexible hiring models and reliable support for your projects. Our developers bring strong experience and deliver high quality results. Start building your app faster with a team which you can trust.
                </p>
                <Link href="/contact-us" className="flex items-center group justify-center ">
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white text-sm px-7 py-3 rounded-full font-normal transition-colors">
                    Hire Android Developers
                  </button>
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                    <MdArrowOutward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        }
      />

      <CTA />

      <Faq header={"Frequently Asked "} header2={"Questions"} faqs={faqs} />

      <ContactUs
        img={"/services/hybrid-app/c-img.webp"}
        pathname={"Android App Dev"}
        header={"Hire Android Developer Today"}
        para={"Scale your development team with the skilled professionals who deliver the reliable result. Businesses can hire android developers from us for fast onboarding, expert support and the smooth collaboration. We ensure secure, high quality applications while helping you to start quickly and grow without delays or the technical challenges."}
        btn={"Get Free Consultation"}
      />
    </div>
  );
};

export default HireAndroidDevs;