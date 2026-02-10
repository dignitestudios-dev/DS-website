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
import { FaPencilAlt, FaUser } from "react-icons/fa";
import { IoGrid, IoWalletOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import SuccessStories from "../ui/SuccessStories";
import CTA from "./CTA";
import SEO from "../ui/SEO";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";

const services = [
  {
    icon: "database",
    icon2: "database1",
    title: "iOS App Development",
    description: (
      <>
        Our iOS team delivers smooth and secure applications for iPhone and iPad
        users through advanced practices as a mobile app development company in
        Chicago, focused on speed, stability, and a premium user experience.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Android App Development",
    description: (
      <>
        We build scalable and reliable mobile products as a trusted mobile app
        development company in Chicago, ensuring consistent performance across
        different screen sizes, user behaviors, and real-world conditions.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Cross-Platform / Hybrid Development",
    description: (
      <>
        As a trusted mobile app development company in Chicago, we create
        cross-platform applications from a single codebase to reduce time to
        market while maintaining native-level performance.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Native App Development",
    description: (
      <>
        Our engineers focus on performance and device-level optimization by
        following professional native mobile app development standards for
        complex business applications.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "UI/UX Design Services",
    description: (
      <>
        We design engaging interfaces through research-driven mobile app design
        services that improve usability, user retention, and visual consistency
        across platforms.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Maintenance & Consulting",
    description: (
      <>
        From strategy to long-term scaling, our team provides expert mobile app
        development consulting through testing, updates, and post-launch
        performance improvements.
      </>
    ),
  },
];


const highlights = [
  {
    title: "100% Custom Development",
    desc: "Every solution is tailored by one of the trusted mobile app development companies in Chicago, ensuring your product fits real business needs, user behavior, and future scalability.",
  },
  {
    title: "Specialized Engineering Teams",
    desc: "Our skilled mobile app developers in Chicago combine technical expertise with creative problem-solving to deliver apps that run smoothly across multiple platforms and devices.",
  },
  {
    title: "24/7 Support",
    desc: "From launch to growth, our team supports every phase as a leading mobile app development company in Chicago through continuous monitoring, updates, and performance optimization.",
  },
  {
    title: "200+ Skilled Technology Experts",
    desc: "Our experts bring deep experience in product design, engineering, and deployment, positioning us among trusted mobile app development companies in Chicago for consistent and reliable delivery.",
  },
  {
    title: "Flexible Engagement Models",
    desc: "Choose project-based execution or dedicated development teams depending on your roadmap, timeline, and business goals.",
  },
  {
    title: "Transparent Process",
    desc: "Clear timelines, regular updates, and open communication guide every project delivered by mobile app development companies in Chicago like Dignite Studios.",
  },
];


const VALUE_PROPOSITION = [
  {
    title: "Healthcare Industry",
    desc: "We design HIPAA-friendly systems through professional healthcare mobile app development services that protect patient data and support secure telemedicine platforms.",
  },
  {
    title: "Fintech Industry",
    desc: "We deliver secure, compliance-driven financial products through modern fintech app development services focused on performance, data protection, and user trust.",
  },
  {
    title: "E-commerce Industry",
    desc: "As an experienced ecommerce app development company, we build conversion-focused shopping experiences that improve user engagement and customer retention.",
  },
  {
    title: "Real Estate Industry",
    desc: "Our property platform solutions are powered by expert real estate app development, supporting listings, CRM tools, and end-to-end client management.",
  },
  {
    title: "Education & E-Learning",
    desc: "Interactive learning systems are created by an experienced e-learning app development company, supporting digital classrooms, content delivery, and student engagement.",
  },
];


const test = [
  {
    name: "Michael Thomson",
    designation: "— Product Manager",
    review:
      "“Dignite Studios exceeded our expectations. Their mobile app development process ensured we launched on time, and the ROI from our new progress-tracking app was remarkable.”",
  },
  {
    name: "Sarah Johnson",
    designation: "— Operations Lead",
    review:
      "“We were impressed by the speed and efficiency. The sprint planning for app development kept everything on track, and our app went live well ahead of schedule.”",
  },
  {
    name: "David Miller",
    designation: "— Business Owner",
    review:
      "“The Dignite Studios team was professional at every stage. Their clear communication and attention to detail throughout the mobile app development process made the project stress-free.”",
  },
  {
    name: "Emily Carter",
    designation: "— Team Lead",
    review:
      "“Our new productivity app for tracking progress has significantly improved team efficiency. Dignite Studios’ expertise as a Chicago mobile app development company made all the difference.”",
  },
  {
    name: "James Anderson",
    designation: "— Founder",
    review:
      "“From sprint planning to launch, their mobile app development process was transparent and reliable. We felt fully supported at every step of the journey.”",
  },
];


const BENEFITS = [
  {
    title: "Customer Engagement & Retention",
    desc: "Improve customer engagement and retention by delivering consistent, accessible, and personalized mobile experiences.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Brand Visibility & Loyalty",
    desc: "Build stronger brand visibility and long-term customer loyalty through a well-designed and branded mobile application.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Revenue Growth",
    desc: "Increase revenue through mobile-first sales models, in-app purchases, and optimized user journeys.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Actionable Analytics",
    desc: "Access detailed analytics to understand user behavior and continuously optimize the mobile app experience.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Competitive Advantage",
    desc: "Stay competitive with scalable, future-ready technology that adapts as your business and users grow.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];


const faqs = [
  {
    id: 1,
    question: "Are your apps compatible with both iOS and Android?",
    answer:
      "Yes. As a mobile app development company in Chicago, we deliver both native and cross-platform solutions to ensure consistent performance across all devices.",
  },
  {
    id: 2,
    question: "How long does mobile app development take?",
    answer:
      "Most projects handled by our mobile app development company in Chicago take between 8 to 16 weeks, depending on features, integrations, and testing requirements.",
  },
  {
    id: 3,
    question: "Is post-launch support provided?",
    answer:
      "Yes. Ongoing updates, performance monitoring, security enhancements, and optimization are all included after launch.",
  },
  {
    id: 4,
    question: "Can my app idea be refined before development?",
    answer:
      "Absolutely. Discovery sessions and sprint planning as part of our mobile app development process in Chicago help refine ideas for market readiness.",
  },
  {
    id: 5,
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes. We support both startups and enterprises through scalable engagement models tailored to evolving business needs.",
  },
];


const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We define business goals, user needs, and technical direction before writing a single line of code.",
  },
  {
    step: "02",
    title: "UI/UX Prototyping",
    desc: "Our design teams create clean and intuitive interfaces that improve usability and user engagement.",
  },
  {
    step: "03",
    title: "Agile Development & Sprints",
    desc: "Weekly builds and adaptive planning ensure steady progress with room for smart improvements.",
  },
  {
    step: "04",
    title: "QA Testing",
    desc: "Apps are thoroughly tested for performance, security, and cross-device compatibility before release.",
  },
  {
    step: "05",
    title: "App Launch & Deployment",
    desc: "We handle smooth publishing on the App Store and Google Play with complete technical support.",
  },
  {
    step: "06",
    title: "Post-Launch Optimization",
    desc: "Ongoing monitoring and updates help your app grow with evolving user demand and business needs.",
  },
];


const MobileAppChicago = () => {
  return (
    <div className="w-full max-w-screen-2xl h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="About Us"
        heading2={""}
        para="Dignite Studios is the result driven Chicago mobile app development company businesses rely on for dependable and high performing digital solutions. We specialize in building mobile products which balance speed, usability and scalability for the long term success. 
Our experience in mobile application development Chicago allows us to create the modern apps through the clean architecture, smooth performance and business ready features. Local market knowledge which helps us to deliver products which match the real and the competitive standards. 
From developers and designers to project managers, our team also works closely to deliver the adaptable apps which are aligned according to the real business goals. 
"
        button="Connect With Our Local App Experts In Chicago "
      />
      <Services
        services={services}
        header={"Mobile App Services by a Trusted Mobile App Development Company in"}
        header2={"Chicago"}
        para={
          "Dignite Studios operated as the reliable mobile application development Chicago solutions which offers complete support. We help businesses through the strategy, design, development and long term optimization for digital growth. "
        }
      />
      <Bussiness
        bs={highlights}
        header={"Why Teams Across Chicago Choose"}
        header2={"Dignite Studios"}
        ctaHeader={"Ready To Work With The Right Team?"}
        ctaPara={
          "Choosing a development partner is a big decision, and you’ve seen how we work and what we value. Now let’s discuss your product goals, technical needs"
        }
        ctaBtn={"Let’s Talk About Your Idea"}
        cta={
           <div className="bg-transparent  overflow-hidden hover:scale-105 z-50 absolute text-white   opacity-100  transition-all ease-linear  w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%]  from-[#f15b20] to-[#FF8F62]">
                    <div className="relative  overflow-hidden" >
                    <img src="/location/mobile-chicago/b-cta.png" className="w-full h-[500px] rounded-b-2xl bottom-3 relative bg-cover" alt="lggg" />
                    <img width={250} height={250} src="/location/mobile-chicago/cta-inner-m.png" className=" rounded-b-2xl bottom-14  right-10 absolute " alt="lggg" />
                    <div className="md:w-[45%] absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-center text-center">
                      <h1 className="text-[45px] font-bold text-white leading-[45px]">
                        Ready To Work With The Right Team?
                      </h1>
                      <p>
                        Choosing a development partner is a big decision, and you’ve
                        seen how we work and what we value. Now let’s discuss your
                        product goals, technical needs
                      </p>
                      <div className="flex items-center group justify-center ">
                        <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                          Let’s Talk About Your Idea
                        </button>
                        <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                          <MdArrowOutward />
                        </button>
                      </div>
                    </div>
                    </div>
                  </div>
        }
        para={
          <>
         Choosing the right partner matters, and working with the dependable mobile app development company chicago can also define your project’s success. At the Dignite Studios, we focus on the clarity, performance and business outcomes instead of the shortcuts. 
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industry Focused Mobile App  "}
        header2={"Solutions"}
        para={
          "As the scalable mobile app development Chicago provider, Dignite Studios delivers the industry ready digital solutions which support the security, performance and business growth across the different sectors."
        }
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Our Mobile App Development Workflow"}
        para={
          "Our structured workflow at the  best mobile app development company keeps the projects organized, transparent and efficient. "
        }
      />
      <MobileApp
        header={"Benefits Of Mobile App Development In   "}
        header2={"Chicago"}
        para={
          "Partnering with reliable mobile app developers in Chicago delivers long term value and competitive advantage for the modern businesses."
        }
        cards={BENEFITS}
      />
      <SuccessStories />
      <CTA />
      <TechAndTools />
      {/* <SEO header={"Chicago-Specific Coverage"} para={"While our local team partners closely with the startups and enterprises, Dignite studios also supports businesses across major U.S. tech hubs. From product teams in New York to growing brands in San Diego and innovation leaders in Silicon Valley, our reach extends beyond city limits. As the trusted Chicago mobile app development company, we combine the regional insight through the nationwide execution to deliver scalable and high performance digital products."} /> */}
      <Testimonials
        test={test}
        header={"Testimonials"}
        header2={""}
        para={"Chicago businesses trust Dignite Studios for its  mobile app development Chicago for a smooth development process that delivers fast results, measurable ROI, and professionalism. "}
      />
      <Faq faqs={faqs} />
      <ContactUs
        img={"/location/mobile-boston/c-img.png"}
        pathname={"Mobile Dev in New York "}
        header={"Ready to build a high performance mobile application?"}
        header2={""}
        para={
          "Connect with the leading mobile app developers in Chicago and start your project with clarity and confidence. "
        }
        btn={"Talk with Experts "}
      />
      {/*     <Bussiness />
     <Industries />
      <Process />
    <MobileApp />
      <SuccessStories />
   <CTA />
          <TechAndTools />
       <SEO />
      <Testimonials />
      <ContactUs />
      <Faq />  */}
    </div>
  );
};

export default MobileAppChicago;
