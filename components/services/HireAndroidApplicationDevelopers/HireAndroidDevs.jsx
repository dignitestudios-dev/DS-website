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

const techData = [
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Native Android Solutions", icon: <SiAndroid /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "React Native", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Python", icon: <SiPython /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Google Firebase", icon: <SiFirebase /> },
];

const services = [
  {
    icon: "/location/mobile-california/icons/icon.webp",
    icon2: "/location/mobile-california/icons/icon4.webp",
    title: "Custom Android App Development",
    description: (
      <>
        We build secure and scalable Android applications tailored to your business goals. our team delivers the custom android app development with the high performance and long term growth. 
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/pen.webp",
    icon2: "/location/mobile-california/icons/pen5.webp",
    title: "UI/UX Design for Android Apps",
    description: (
      <>
        Our designs focus on intuitive interfaces that engage users effectively and provide a smooth experience across all Android devices, helping businesses to hire android app developers. 
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/setting.webp",
    icon2: "/location/mobile-california/icons/setting2.webp",
    title: "Cross Platform App Development",
    description: (
      <>
        Our developers use similar coding standards to build cross platform apps. This reduces the project cost and helps delivery the projects faster for the businesses. 
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/pipe.webp",
    icon2: "/location/mobile-california/icons/pipe3.webp",
    title: "App Testing & Quality Assurance",
    description: (
      <>
        We thoroughly test every Android app to ensure it is bug free, fast and provides the stable performance across different devices and screen sizes. 
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/database.webp",
    icon2: "/location/mobile-california/icons/database1.webp",
    title: "API & Backend Development",
    description: (
      <>
        We develop robust backend systems and secure APIs which ensure fast data processing and the stable performance for every android mobile app development service. 
      </>
    ),
  },
  {
    icon: "/location/mobile-california/icons/set.webp",
    icon2: "/location/mobile-california/icons/set1.webp",
    title: "App Maintenance & Support",
    description: (
      <>
        We provide ongoing updates and support to keep your app running smoothly. Many businesses trust us for the continuous improvements and reliable technical help. 
      </>
    ),
  },
];

const highlights = [
  {
    icon: "/services/mob-hire/1.webp",
    title: "Proven Android Expertise",
    desc: "Our developers have strong experience in building Android apps with modern tools, ensuring reliable performance and scalable solutions.",
  },
  {
    icon: "/services/mob-hire/2.webp",
    title: "Flexible Hiring Options",
    desc: "We provide adaptable hiring models. Businesses can easily hire Android app developers based on their project needs and budget.",
  },
  {
    icon: "/services/mob-hire/3.webp",
    title: "Agile Development Journey",
    desc: "Our structured agile methodology increases productivity, expedites delivery and guarantees superior outcomes for each project.",
  },
  {
    icon: "/services/mob-hire/4.webp",
    title: "Fast Onboarding",
    desc: "Developers join projects quickly. This helps businesses to start development without any delays or the long waiting time.",
  },
  {
    icon: "/services/mob-hire/5.webp",
    title: "Clear Communication",
    desc: "We maintain clear and simple communication at every stage so clients stay quite informed and confident throughout the development process.",
  },
  {
    icon: "/services/mob-hire/6.webp",
    title: "IP & Data Security",
    desc: "We protect your project ideas and data. Our development workflow ensures complete confidentiality and security for every business.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Ecommerce",
    desc: "We build Android apps for online stores. These apps improve shopping experience, support secure payments and help businesses increase sales effectively.",
  },
  {
    title: "Healthcare",
    desc: "Our team develops secure healthcare apps. These solutions help to manage patient data, monitor health and provide easier access to the medical services.",
  },
  {
    title: "Real Estate",
    desc: "We create real estate apps for the property listings, virtual tours and easy management helping the users find and manage the properties quite smoothly.",
  },
  {
    title: "Education",
    desc: "We build education apps which support online learning, student engagement and simple content management with the friendly and easy to use interfaces.",
  },
  {
    title: "Fintech",
    desc: "Our team develops secure fintech apps for banking, payments and investment management, ensuring fast and reliable performance for the users.",
  },
  {
    title: "Food Delivery",
    desc: "We create food delivery apps which support fast ordering, live tracking and the multiple payment options, improving customer satisfaction and service efficiency.",
  },
];

const test = [
  {
    name: "John Peterson",
    designation: "— CEO, Mobile Solutions",
    review:
      "“We decided to hire android developers from Dignite Studios, and it was a great experience. The team was professional, delivered on time, and built a high-quality app that works perfectly on all devices.”",
  },
  {
    name: "Sarah Mitchell",
    designation: "— Product lead, Ecom Brand",
    review:
      "“The developers understood our vision clearly. They built a scalable and secure Android application that significantly improved our user engagement and overall performance.”",
  },
  {
    name: "Mark Stevens",
    designation: "— Founder, Fintech Startup",
    review:
      "“Working with their Android team was quite simple. They provided regular updates, maintained quality, and helped us launch our app without any issues. Their support is very reliable.”",
  },
  {
    name: "Emily Clark",
    designation: "— Operations Manager",
    review:
      "“We needed a dedicated team for our project, and Dignite Studios provided the best developers. The app is fast, secure, and user-friendly. We recommend their services to everyone.”",
  },
  {
    name: "David Roberts",
    designation: "— CTO, Tech Agency",
    review:
      "“Their expertise in Android development helped us build a powerful digital product. The communication was clear, and the project was handled professionally from start to finish.”",
  },
  {
    name: "William Scott",
    designation: "— Startup Owner",
    review:
      "“Dignite Studios delivered high-quality results within our budget. Their flexible hiring models and strong technical support helped us grow our business with a reliable Android app.”",
  },
];

const faqs = [
  {
    id: 1,
    question: "How long does it take to hire Android developers?",
    answer:
      "Hiring developers is a quick process. In most cases, we can onboard the developers within a few days, depending on your project requirements and the specific skills needed.",
  },
  {
    id: 2,
    question: "How much does it cost to build an Android app?",
    answer:
      "The cost depends on project features, complexity, and the developer experience. We offer flexible hiring models to help businesses manage their budget effectively while getting high-quality results.",
  },
  {
    id: 3,
    question: "Can I hire developers for short-term projects?",
    answer:
      "Yes, you can hire Android developers for short-term tasks or long-term projects. Our flexible models allow you to scale the team based on your business needs and project scope.",
  },
  {
    id: 4,
    question: "Do you provide technical support after launch?",
    answer:
      "Yes, we provide ongoing maintenance and post-launch support. Our team helps with updates, bug fixes, and performance improvements to ensure your app runs smoothly for the long term.",
  },
  {
    id: 5,
    question: "Do you build native or cross-platform Android apps?",
    answer:
      "We build both native and cross-platform apps. Our team has the expertise in Kotlin and Java for native development, as well as Flutter and React Native for cross-platform solutions.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Idea & Consultation",
    desc: "We discuss your app idea and requirements. Our experts help plan features and the development roadmap to ensure your project meets business goals.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    desc: "Our designers create intuitive and user-friendly layouts. We focus on enhancing user engagement and providing a smooth experience on Android devices.",
  },
  {
    step: "03",
    title: "Core Development",
    desc: "Our developers build the app using modern tools and scalable architecture. We follow clean coding standards for reliable and high-performance applications.",
  },
  {
    step: "04",
    title: "Testing & Quality Check",
    desc: "We perform thorough testing to identify and fix any issues. This ensures the app is secure, fast, and works correctly across various devices.",
  },
  {
    step: "05",
    title: "Launch & Growth",
    desc: "We deploy the app on the Google Play Store and provide ongoing support. Our team helps with updates and improvements to support your business growth.",
  },
];

const steps = [
  {
    title: "Discussion & Planning",
    description:
      "We understand your project goals and requirements to create a clear plan for your Android development.",
    icon: "/services/mob-hire/hire/1.webp",
  },
  {
    title: "Share Profiles",
    description:
      "We share detailed developer profiles, including skills and past experience, to help you choose the best fit.",
    icon: "/services/mob-hire/hire/2.webp",
  },
  {
    title: "Interview & Finalize",
    description:
      "You can interact with the developers directly, discuss your project, and finalize the team before starting work.",
    icon: "/services/mob-hire/hire/3.webp",
  },
  {
    title: "Fast Onboarding",
    description:
      "Developers join your project quickly without any long delays, enabling you to start development immediately.",
    icon: "/services/mob-hire/hire/4.webp",
  },
  {
    title: "Start Development",
    description:
      "Our team starts development with regular updates, clear communication, and a structured process.",
    icon: "/services/mob-hire/hire/5.webp",
  },
  {
    title: "Ongoing Support",
    description:
      "We provide continuous support and updates even after the developers join to ensure project success.",
    icon: "/services/mob-hire/hire/6.webp",
  },
];

const cards = [
  {
    title: "Dedicated Developer",
    desc: "Hire a full-time Android developer for long-term projects. This option ensures continuous development and focused expertise for your business.",
    icon: "/services/test.webp",
  },
  {
    title: "Hourly Hiring",
    desc: "Pay only for the hours worked. This model is best for small updates, short-term tasks, or specific feature improvements.",
    icon: "/services/sb.webp",
    illustration: "hourly",
  },
  {
    title: "Project-Based Hiring",
    desc: "Hire developers for a fixed project scope and cost. It’s ideal for projects with a clear requirements and set timelines.",
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
        description="Hire Android developers from Dignite Studios to build fast and scalable apps. Our team works on native and cross platform solutions."
      />

      <About
        heading="Introduction"
        heading2={""}
        para="Android apps are growing fast across industries. Businesses need skilled teams to build strong digital products. Many companies now choose to hire android developers instead of building in-house teams. This is the time saver and reduce the cost. Dignite Studios has more than 10 years of experience in Android development. We have worked with startups and enterprises across Ecommerce, healthcare and Fintech industries. Our team includes experts you can trust when you hire android app developer for your project. We focus on quality, speed and long term support."
        button="Start Your Project"
      />

      <WhyChoose
        header={"Why Hire Android Developers From"}
        header2={"Dignite Studios"}
        para="We help businesses hire android developers who build secure and scalable applications. Our team would also focus on quality, speed and clear communication. We make hiring quite simple so businesses can start projects quickly."
        features={features}
      />

      <TabularTechs
        header={"Our Android Development"}
        header2={"Expertise"}
        para="Our team has strong experience in modern technologies used for Android and cross platform development. Businesses that hire developers from us get reliable solutions which are built with proven tools."
        techData={techData}
        button={"Hire Developers Now"}
      />

      <Services
        services={services}
        header={"Android App Developer Services"}
        header2={""}
        button={"Start Your Project"}
        para="We provide complete Android development services for businesses that want reliable scalable and high performance applications."
      />

      <FlexibleHiring
        header={"Our Flexible Android Developer Hiring Models"}
        para="We offer multiple hiring options to match your project needs. Hire dedicated, hourly or project-based developers."
        cards={cards}
      />

      <Process 
        header="Our Android App Development Process"
        para="We follow a structured and agile process to deliver high quality Android apps."
        steps={PROCESS_STEPS}
      />

      <Industries 
        header="Industries We Serve"
        para="We deliver reliable solutions while managing the app development cost across multiple industries."
        button="Explore Android Solutions"
        VALUE_PROPOSITION={VALUE_PROPOSITION}
      />

      <SuccessStories 
        header="Our Android App Portfolio"
        para="We showcase real projects delivered through our professional Android development services."
      />

      <Testimonials 
        header="What Our Clients Say About Our Android"
        header2="App Developers"
        button="Get Free Consultation"
        test={test}
        para="Businesses trust us to deliver high quality Android apps which meet their goals. Clients praise our development quality, communication and timely delivery. Here’s what they have to say about working with our team."
      />

      <HiringProcess 
        header="Our Android App Developer Hiring Process"
        button="Start Hiring Android Developers Today"
        steps={steps}
        para="We follow a simple and structured process to help businesses collaborate with a top Android app development Company quickly. Our approach ensures clear communication, fast onboarding and smooth collaboration for the successful Android app developer."
      />

      <Bussiness
        header={"Why Businesses Choose"}
        header2={"Dignite Studios"}
        ctaHeader={"Partner With Android Experts Today"}
        ctaPara={"Businesses choose Dignite Studios for reliable Android services which focus on the quality, speed and scalability."}
        ctaBtn={"Partner With Android Experts Today"}
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
                  Partner With Android Experts Today
                </h2>
                <p>
                  Businesses choose Dignite Studios for reliable Android services
                  which focus on the quality, speed and scalability.
                </p>
                <Link href="/contact-us" className="flex items-center group justify-center ">
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white text-sm px-7 py-3 rounded-full font-normal transition-colors">
                    Partner With Android Experts Today
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

      <Faq faqs={faqs} />

      <ContactUs
        img={"/services/hybrid-app/c-img.webp"}
        pathname={"Android App Dev"}
        header={"You Could Be Our Next Success Story"}
        para={"Your app idea deserves to shine. Partner with us to build an Android mobile app that delivers engages users and grows your business. Let’s change your vision into a powerful app that works flawless on Android devices."}
        btn={"Let’s Create Your App"}
      />
    </div>
  );
};

export default HireAndroidDevs;