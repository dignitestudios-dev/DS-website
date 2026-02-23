import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Services from "../ui/Services";
import Link from "next/link";
import Bussiness from "../ui/Bussiness";
import { MdArrowOutward } from "react-icons/md";
import Industries from "../ui/Industries";
import Process from "../ui/Process";
import MobileApp from "../ui/MobileApp";
import { FaPencilAlt, FaUser } from "react-icons/fa";
import { IoGrid, IoWalletOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import SuccessStories from "../ui/SuccessStories";
import CTA from "./CTA";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";
import TechTools from "../ui/TechTools";
import { SiFlutter, SiReact, SiSwift, SiKotlin, SiNodedotjs, SiFirebase } from "react-icons/si";

const tech = [
  {
    name: "Flutter",
    icon: <SiFlutter />,
    description: "We create Flutter apps with single codebase, offering smooth UI, rapid deployment, and scalable performance for growing businesses.",
  },
  {
    name: "React Native",
    icon: <SiReact />,
    description: "Our team develops React Native applications using JavaScript, delivering near native speed, flexibility and efficient cross platform functionality.",
  },
  {
    name: "iOS Support",
    icon: <SiSwift />,
    description: "We optimize builds for iOS standards, ensuring stability, security and consistent premium user experiences on all Apple devices.",
  },
  {
    name: "Android Support",
    icon: <SiKotlin />,
    description: "We deliver Android apps with reliable layouts, smooth performance and broad compatibility across modern devices and OS versions.",
  },
  {
    name: "Backend & APIs",
    icon: <SiNodedotjs />,
    description: "Our backend uses Node.js and Firebase to provide secure infrastructure, real time synchronization, scalable APIs and fluent integrations.",
  },
];

const services = [
  {
    icon: "database",
    icon2: "database1",
    title: "Application Architecture & Planning",
    description: "We plan the full app structure, integrations and workflows so your product stays stable, scalable and ready for future updates without performance issues.",
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "UI/UX Design",
    description: "Our designers create clean, user friendly interfaces which feel natural on every screen size while keeping navigation simple and engaging for users.",
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Security & Data Protection",
    description: "We protect user data through secure authentication, encrypted storage and compliance practices to keep your app safe and trustworthy.",
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "App Testing & Quality Assurance",
    description: "Each feature is tested for speed, usability and reliability to ensure that your app runs smoothly before being introduced.",
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "Deployment & Store Support",
    description: "We manage publishing, updates and version control to keep releases smooth, consistent and reliable for team and users.",
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "App Modernization & Upgrades",
    description: "We upgrade outdated apps into modern cross platform solutions with better performance and usability.",
  },
];

const highlights = [
  {
    title: "Proven Expertise",
    desc: "Our team has over a decade of experience in cross platform mobile app development, ensuring reliable results.",
  },
  {
    title: "Business Focused Builds",
    desc: "We create apps designed to support growth and engagement for leading cross platform development services.",
  },
  {
    title: "Skilled Engineers",
    desc: "Specialists experienced across frameworks ensure high quality delivery for every single project.",
  },
  {
    title: "Secure Architecture",
    desc: "Data protection, compliance and security measures integrated in every cross platform mobile app development services build.",
  },
  {
    title: "Scalable Solutions",
    desc: "Our solutions are built for future expansion, making us one of the top cross platform mobile app development providers.",
  },
  {
    title: "Client Transparency",
    desc: "Clear communication, reporting and progress updates keep clients informed throughout cross platform development company projects.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare & Fitness",
    desc: "We work as a healthcare app development company delivering secure patient and tracking solutions.",
  },
  {
    title: "Fintech & Banking",
    desc: "Our fintech app development services support payments, dashboards and compliance systems.",
  },
  {
    title: "E-commerce & Retail",
    desc: "For ecommerce app development company we build faster, scalable shopping apps for businesses.",
  },
  {
    title: "Logistics & On-Demand",
    desc: "We deliver logistics app development services for real time tracking and workflow automation systems.",
  },
];

const test = [
  {
    name: "Angela Micheal",
    designation: "— Product Manager",
    review: "Their team was really professional and gave our project faster than expected.",
  },
  {
    name: "Elizabeth Justin",
    designation: "— CEO at Nex Solutions",
    review: "Professional in their work and communicated out well of what we wanted.",
  },
  {
    name: "Daniel M.",
    designation: "— CTO, FinTech Brand",
    review: "They helped us to expand our work without getting any loss in our performance.",
  },
  {
    name: "Jessica",
    designation: "— Operations Lead",
    review: "Really Interactive designs and delivering it on time as we asked.",
  },
  {
    name: "Jason P.",
    designation: "— Ecommerce Owner",
    review: "Great support even after the launch. The team stayed responsive and helpful.",
  },
  {
    name: "Olivia N.",
    designation: "— Digital Strategist",
    review: "Best for those who want good quality work with faster deliverance.",
  },
];

const BENEFITS = [
  {
    title: "Increased Engagement",
    desc: "Connect with users through cross platform development services for mobile apps that deliver consistent experience across devices.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Business Automation",
    desc: "Automate operations through smart cross platform workflows which reduce manual effort, improve efficiency and streamline business across teams easily today.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Revenue Growth",
    desc: "Monetize faster through wider market reach, helping your app attract more users and generate consistent revenue growth over time globally effectively.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Faster Time to Market",
    desc: "Launch apps quicker using shared codebases that reduce development cycles, minimize costs and speed delivery for businesses worldwide efficiently and reliably.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Scalable Architecture",
    desc: "Prepare your business for future feature expansion with scalable architecture supporting new features, users and integrations without performance issues over time consistently.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "Do you build scalable cross platform apps?",
    answer: "Yes. Our team supports growth, smooth performance and secure integrations. We ensure smooth performance and secure integrations. We try if new features can be added without disturbing the workflow and to make your app stay reliable and increase over time.",
  },
  {
    id: 2,
    question: "How long does cross-platform app development take?",
    answer: "The time highly depends on the project scope, features, integrations and tests. Most cross platform projects take around three to five months prior launch. More platforms for advanced functionality require more time for better quality and performance in devices it mainly be supported too.",
  },
  {
    id: 3,
    question: "Do you offer post-launch support?",
    answer: "Yes. After introducing our app we provide support which includes updates, monitoring of performance, fixing of bugs and feature improvements. Our team stays involved to keep your app secure, improved and compatible with new platform updates for the product to run fluently for users.",
  },
  {
    id: 4,
    question: "Can you refine my app idea?",
    answer: "Absolutely. We work closely with you to shape raw ideas into practical, business ready solutions. Through discovery sessions, planning and user focused design, we help define features, workflows and technology choices which turn your concept into a functional, market ready application.",
  },
  {
    id: 5,
    question: "Do you work with startups and enterprises?",
    answer: "Yes. We partner with both early stage startups and established enterprises. Startups benefit from fast, flexible builds, while larger organizations receive scalable, secure systems. Our approach adapts to your goals, budget and growth plans to ensure long term success.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "We define app goals, features and sprint plans which align with client vision. This step makes sure cross platform company can make business successful in future.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Our designers create intuitive interfaces focused on usability, branding and accessibility, ensuring engaging experiences which align with business goals and user expectations across all platforms globally and consistently.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Our engineers build features using agile sprints, clean architecture and shared codebases to deliver fast, reliable functionality for modern applications across multiple platforms efficiently and securely.",
  },
  {
    step: "04",
    title: "Testing",
    desc: "Our engineers build scalable features using agile sprints, clean architecture and shared codebases to deliver fast, reliable functionality for modern applications across multiple platforms and consistent user experience on all platforms.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "We manage release, configuration and version control to publish applications smoothly, ensuring consistent updates, minimal downtime and reliable delivery across all supported platforms for growing business globally.",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    desc: "We monitor app performance, implement updates, and provide fixes to maintain quality. Clients benefit from continuous support through our cross platform development services for mobile apps.",
  },
];

const CrossPlatform = () => {
  return (
    <div className="max-w-screen-2xl w-full gap-20 lg:gap-36 h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        button={"Get the Free Platform App Consultation"}
        heading="About Dignite"
        heading2={"Studios"}
        para="At Dignite Studios, we specialize in building modern mobile solutions using cross platform technologies. With over 10+ years of experience, our 50+ expert developers have delivered 200+ apps for 150+ startups and growing brands across 5+ industries. Our engineers focus on clean architecture, smooth performance and easier design which ensure your app works fluently across platforms. We make sure to give fluent and easier workflow without any hurdles. By choosing our platform app development services, you will get a partner which meets the goals you wanted and the app just the way you wanted."
      />
      <Services
        services={services}
        button={"Start Your Cross Platform App Project"}
        header={"Cross Platform App"}
        header2={"Development Services"}
        para={"Dignite Studios delivers solutions trusted by cross platform mobile app development companies which help brands launch faster, lower costs and provide smooth, high quality experiences across multiple devices and platforms."}
      />
      <Bussiness
        button={"Partner With Dignite Studios"}
        bs={highlights}
        header={"Why Businesses trust Our Cross Platform App"}
        header2={" Development Services"}
        ctaHeader={"Partner With Dignite Studios"}
        ctaPara={"Dignite Studios delivers the best cross platform app development services that focus on performance, business value and user experience."}
        ctaBtn={"Partner With Dignite Studios"}
        cta={
          <div className=" overflow-hidden   text-white hover:scale-105 z-50 absolute opacity-100 shadow-[#F15C2033] transition-all  w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%]  ">
            <div className="relative h-[500px]  ">
              <img
                src="/location/mobile-washington/b-cta.png"
                className="w-full  rounded-b-2xl bottom-0  absolute bg-cover"
                alt="lggg"
              />
              <div className="md:w-[45%] absolute top-1/2 text-center left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-center ">
                <h1 className="text-[45px] font-bold text-white leading-[45px]">
                  Partner With Dignite Studios
                </h1>
                <p>
                  Dignite Studios delivers the best cross platform app development services that focus on performance, business value and user experience.
                </p>
                <Link
                  href={"/contact-us"}
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
        para={"Dignite Studios delivers the best cross platform app development services that focus on performance, business value and user experience."}
      />
      <TechTools 
        tech={tech}  
        header={"Technology Stack for Cross Platform Development"} 
        para={"As modern cross platform mobile app development company, Dignite Studios uses proven frameworks to build fast, scalable and secure applications, supporting startups and enterprises with reliable long term delivery."} 
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Reliable Cross Platform App Development Services Process"}
        header2={"Development Services Process"}
        para={"Our process is designed for speed, quality and transparency helping businesses work efficiently through cross platform mobile app development companies with agile planning and structured execution."}
      />
      <Industries
     button={" Discuss Your Idea  "}
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industries We Serve with Cross"}
        header2={" Platform Solutions"}
        para={"As trusted cross platform mobile app development company, we support businesses across multiple sectors with adapted app experiences."}
      />
      <MobileApp
      button={"Build a Scalable Cross Platform App "}
        header={"Benefits Of Having a Cross Platform"}
        header2={" Mobile App"}
        para={"Using cross platform development services from mobile apps helps businesses grow faster and reduce development cost. With the right approach, companies reach users on multiple platforms efficiently."}
        cards={BENEFITS}
      />
      <SuccessStories
        header={"Cross Platform"}
        header2={"Case Studies"}
        para={"Explore how Dignite Studios delivers real business results through smart cross platform solutions. Our case studies highlight how we help healthcare, fintech and e-commerce brands solve performance, usability and scalability challenges."}
      />
      <CTA />
      <Testimonials
        test={test}
        button={"Work With Our Expert Team "}
        header={"Trusted Cross Platform App Development"}
        header2={" Company Reviews"}
        para={"Clients trust Dignite Studios for delivering quality, transparency and high performance results."}
      />
      <Faq faqs={faqs} />
      <ContactUs
        pathname={"Cross Platform Development"}
        header={"Let's Build Your Cross Platform App"}
        img={"/technologies/react-native/c-img.png"}
        header2={""}
        para={"Share your idea with Dignite Studios and get expert guidance to turn your vision into a scalable high performance cross platform mobile solution."}
        btn={"Request Cross Platform Development Quote"}
      />
    </div>
  );
};

export default CrossPlatform;
