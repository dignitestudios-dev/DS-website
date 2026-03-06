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
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";
import TabularEcommerceTechs from "../ui/TabularEcommerceTechs";
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
  SiAzure,
  SiGooglecloud,
  SiDigitalocean,
  SiCloudinary,
  SiFigma,
  SiSketch,
  SiAdobexd,
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
} from "react-icons/fa";
import CTA from "./CTA";
import { TbDeviceAnalytics } from "react-icons/tb";

const FEATURES = [
  {
    title: "Responsive Design",
    desc: "We ensure your web application works perfectly on all screen sizes, providing a seamless user experience.",
    icon: <FaMobileAlt size={50} color="#F15C20" />,
  },
  {
    title: "Intuitive User Interface",
    desc: "Our designs focus on ease of use, ensuring that users can navigate your web app effortlessly.",
    icon: <FaPencilAlt size={50} color="#F15C20" />,
  },
  {
    title: "Robust Security",
    desc: "We integrate high-level security measures to protect sensitive data and prevent cyber threats.",
    icon: <FaLock size={50} color="#F15C20" />,
  },
  {
    title: "Scalability",
    desc: "We build web applications that can grow with your business, handling increased users and data.",
    icon: <IoGrid size={50} color="#F15C20" />,
  },
  {
    title: "Fast Loading Speed",
    desc: "Performance is our priority, ensuring your web app loads quickly for a better user experience.",
    icon: <FaClock size={50} color="#F15C20" />,
  },
  {
    title: "Integrations",
    desc: "We connect your web application with third-party tools and APIs to enhance functionality.",
    icon: <FaCode size={50} color="#F15C20" />,
  },
  {
    title: "Analytics",
    desc: "Gain valuable insights into user behavior with integrated analytics and reporting tools.",
    icon: <TbDeviceAnalytics size={50} color="#F15C20" />,
  },
  {
    title: "Custom Dashboards",
    desc: "We create personalized dashboards that allow you to manage and visualize your data effectively.",
    icon: <FaUser size={50} color="#F15C20" />,
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
  Design: [
    { name: "Figma", icon: <SiFigma /> },
    { name: "Sketch", icon: <SiSketch /> },
    { name: "Adobe XD", icon: <SiAdobexd /> },
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
    icon: "database",
    icon2: "database1",
    title: "Custom Web App Development Services",
    description: (
      <>
        Custom web app development means you can get your web app built the way
        you want. The team focuses on providing all the features you want.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Enterprise Web Apps",
    description: (
      <>
        We develop web apps for enterprises as well, that are designed to handle
        complex business processes with high security and performance.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Web App Consultation",
    description: (
      <>
        Web application consultation is one of our major services that guides
        businesses. We provide expert advice on tech and strategy.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Progressive Web Applications",
    description: (
      <>
        We’re experts at building progressive web applications that have the
        speed and functionality of a mobile application.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "Cross Platform Application",
    description: (
      <>
        We build web applications that work on multiple devices with consistent
        performance and efficient development.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Single Page Web Applications",
    description: (
      <>
        We’re building dynamic and fast single page web applications that are
        functional and highly performative.
      </>
    ),
  },
];

const highlights = [
  {
    title: "Years of Experience",
    desc: "The team has successfully delivered a wide range of projects through Web Application Development Services across industries.",
  },
  {
    title: "Advanced Expertise",
    desc: "The team at our Custom Web App Development Company brings high expertise in the latest web technologies.",
  },
  {
    title: "Expert Project Management",
    desc: "The experienced project managers of Dignite Studios coordinate teams while maintaining clear communication.",
  },
  {
    title: "Transparent Process",
    desc: "Following a fully transparent procedure, we keep you informed at every stage of development.",
  },
  {
    title: "Reliable Support",
    desc: "The commitment doesn’t end at launch. The team still provides continuous support to ensure your app remains secure.",
  },
  {
    title: "Customized Solutions",
    desc: "Dignite Studios build solutions that are designed specifically for your business needs.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Industry",
    desc: "The developers at Dignite Studios create HIPAA-compliant applications for the healthcare industry including patient portals.",
  },
  {
    title: "Fintech Industry",
    desc: "The team delivers secure solutions for the fintech industry including payment platforms and digital banking apps.",
  },
  {
    title: "Ecommerce Industry",
    desc: "The team is great at building ecommerce web applications that increase revenue through online stores.",
  },
  {
    title: "E-learning Industry",
    desc: "Dignite Studios also creates app solutions for the education sector including learning management systems.",
  },
  {
    title: "Real Estate",
    desc: "We build advanced solutions for real estate including property platforms, virtual tours, and CRM systems.",
  },
  {
    title: "Dating and Matchmaking",
    desc: "Our experts create engaging and secure solutions for the dating industry with matchmaking platforms and chat systems.",
  },
];

const test = [
  {
    name: "Mavis David",
    designation: "— CTO, PingIT Solutions",
    review:
      "“The whole Dignite Studios team made the whole process so simple and easy! I was kinda unsure about the whole development process but they really got what we were looking for and delivered an app that was beyond our expectations.”",
  },
  {
    name: "Tony Reynolds",
    designation: "— Product Manager, NextGen Tech",
    review:
      "“I honestly loved how the team was so professional and helpful like they kept us updated throughout. So it really helped plus they offered great suggestions. Highly recommended because the way they work is amazing.”",
  },
  {
    name: "Benjamin",
    designation: "— HOD Operations, SmartSol Learning",
    review:
      "“I didn’t have to explain everything because they understood what I needed, right away and turned my vision into a super user-friendly app. They adapted to the changes quickly and we were very happy with the result!”",
  },
  {
    name: "Elena Martinez",
    designation: "— Operations Director, HealthPlus Clinics",
    review:
      "“Really impressed with their organization and expertise. The app is fast, intuitive, and has already improved our business processes. Can’t recommend them enough!”",
  },
  {
    name: "David Lee",
    designation: "— Head of Product, FinEdge Solutions",
    review:
      "“They took our vision and made it real. The app looks great, works smoothly, and helps us engage users better than we expected. Super satisfied!”",
  },
  {
    name: "Adam Walliams",
    designation: "— Project Lead, Global LearnTech",
    review:
      "“I loved how they made everything simple. They turned our complex requirements into a smooth, easy-to-use app. Plus, their support after launch has been amazing.”",
  },
];

const BENEFITS = [
  {
    title: "Improved Efficiency",
    desc: "Custom web applications are designed to optimize your business processes and reduce manual errors.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "User Experience",
    desc: "The designs can be created that are customized to your audience’s needs, attracting more users.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Flexibility",
    desc: "Through custom web apps, you can accommodate increasing users and evolving business needs.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Enhanced Security",
    desc: "Your business gets better security with custom apps including data encryption and secure authentication.",
    icon: <FaLock color=" #F15C20" size={25} />,
  },
  {
    title: "Cost-Effective",
    desc: "It saves money over time by reducing reliance on multiple tools and optimizing resources.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "What’s actually a web application anyways?",
    answer:
      "A web app is like an app that you could use but on a browser. It doesn’t just work like a single page website, it literally lets you do the actual stuff. You could book appointments, manage info, or interact with other users. It’s basically perfect for businesses that want to grow and make life way easier for everyone using it.",
  },
  {
    id: 2,
    question: "How much time does it usually take for you to build a web app?",
    answer:
      "Honestly, the whole timeline depends on your requirements. A basic and simple app might take a month or two. When you want a complex application with features, custom one could take a few months. We do provide regular updates though so you always know where the project stands.",
  },
  {
    id: 3,
    question: "So, what’s Web Application Development Cost usually?",
    answer:
      "The Web Application Development Cost depends on features. It’s up to you how many features and complexity you want in your app. However, custom apps usually cost more at first, but they save you time and money in the long run. So, knowing exactly what you need keeps things under control.",
  },
  {
    id: 4,
    question: "What happens if I just get a pre-made app?",
    answer:
      "Pre-built applications are like trying your whole business to fit into one app that’s not even made for your business and doesn’t even align with any of your goals. Web Application Development Services are designed for your business. They work exactly how you need them.",
  },
  {
    id: 5,
    question: "What tech is being used behind the application?",
    answer:
      "The team is trained to use the best modern tech. The tech stack includes: React, Angular, Vue, Node.js, Python, PHP, or .NET., MySQL and MongoDB. We understand the importance of picking the right tech stack. Because that makes your app fast and secure.",
  },
  {
    id: 6,
    question: "How do you keep the web app safe and secure?",
    answer:
      "We don’t treat Security as optional. It’s a big deal for us. We use strong passwords, encryption, access controls, and constant testing. Basically, your data stays protected, hackers get blocked, and users can relax knowing their information is safe and secure.",
  },
  {
    id: 7,
    question: "Do you create web apps that work offline?",
    answer:
      "Yep! Your app can still work without an internet connection. With Progressive Web Apps, Users can access key features even if Wi-Fi drops. It keeps everyone productive, no matter where they are. It is super handy for people on the go.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Initial Planning",
    desc: "Before stepping into the technical phase, we begin with the planning and understanding of your goals and objectives.",
  },
  {
    step: "02",
    title: "Building Wireframes",
    desc: "Through our Web Application Development Services, the team builds wireframes and user designs that focus on aesthetics.",
  },
  {
    step: "03",
    title: "Sprint Development",
    desc: "The team of app developers builds your web application in structured sprints, focusing on specific features with feedback.",
  },
  {
    step: "04",
    title: "Quality Testing",
    desc: "The QA team tests your web application to meet the highest standards and conducts functional testing to resolve issues.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "The team carefully launches your web application in a stable production environment with performance optimization.",
  },
  {
    step: "06",
    title: "Post Launch Support",
    desc: "After deployment, the team ensures your web application continues to perform at its best with ongoing maintenance.",
  },
];

const WebAppDevelopment = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="Behind Dignite Studios"
        heading2={""}
        para="We’re providing the best web application development services with a team of 200+ developers. Having 10+ years of experience, we’ve worked on over 50+ projects for startups, businesses, and enterprises. Building functional products from scratch, the team focuses on building secure web applications tailored to your specific business needs. With a strong emphasis on the high performance of the applications. The team is great at building reliable digital solutions that improve efficiency and user experience. Each solution is customized to your unique business needs and focuses on reliability and delivering an exceptional user experience. The goal is to provide web apps that support long-term business success and adapt to changing technological needs."
        button="Talk to the Team!"
      />
      <Services
        services={services}
        header={"Custom Web Application Development"}
        header2={"Services"}
        button={"Explore Our Services"}
        para={
          "Working with Dignite Studios comes with a team that puts commitment first. As a trusted web application development company in USA, we are providing refined web app development services to meet your requirements. We don’t just provide development services; you get strong commitments and mobile app solutions prepared for the future."
        }
      />
      <TabularEcommerceTechs
        header={"Advanced Technologies of a Trusted Web Application"}
        header2={"Development Company"}
        para={
          "We choose the technologies that are used by the expert web application development companies all around the world. We use modern technologies to build secure applications and high performing applications. The tech stack includes reliable tools that ensure smooth functionality and better user experiences. We adapt the latest tech to deliver the best web solutions."
        }
        techData={techData}
      />
      <Bussiness
        bs={highlights}
        header={"Reasons to Choose Our Web Application Development Company in"}
        header2={"USA"}
        ctaHeader={"Make the Best Choice"}
        ctaPara={
          "Dignite Studios is one of the leading web application development companies. Our developers are professional and deliver tailored to your business needs. The expert team combines agile processes to ensure timely delivery and ongoing support. Working with us comes with reliable web applications that drive growth."
        }
        ctaBtn={"Make the Best Choice"}
        cta={
          <div className="bg-transparent h-[500px] hover:scale-105 z-50 absolute text-white  opacity-100 transition-all ease-linear w-[80%] -bottom-[420px] rounded-2xl left-[50%] translate-x-[-50%] ">
            <div className="relative">
              <img
                src="/location/mobile-boston/cta-img.png"
                className="w-full rounded-b-2xl bottom-3 relative bg-cover"
                alt="lggg"
              />
              <div className="md:w-[45%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto pb-8  space-y-4 flex flex-col items-center text-center">
                <h2 className="text-[45px] font-bold text-white leading-[45px]">
                  Make the Best Choice
                </h2>
                <p>
                  Dignite Studios is one of the leading web application
                  development companies. Our developers are professional and
                  deliver tailored to your business needs.
                </p>
                <Link
                  href="/contact-us"
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Make the Best Choice
                  </button>
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                    <MdArrowOutward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        }
        button={"Make the Best Choice"}
        para={
          <>
            Dignite Studios is one of the leading web application development
            companies. Our developers are professional and deliver tailored to
            your business needs. The expert team combines agile processes to
            ensure timely delivery and ongoing support. Working with us comes
            with reliable web applications that drive growth.
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Serving Industries as an Expert Web and App "}
        header2={"Development Company"}
        para={
          "Dignite Studios serves a wide range of industries as the best Web Application Development Company in USA. The team is an expert at providing customized solutions that understand the business requirements. Once we understand the requirements and vision, it’s easier to work in that industry. And since we have 10+ years of experience in multiple sectors, the development team now uses modern technologies and best practices to create scalable web and mobile applications."
        }
        button={"Share Your Niche"}
      />
      <Process
        steps={PROCESS_STEPS}
        header={
          "Our Proven Custom Web Application Development Services Process"
        }
        para={
          "Being one of the best web application development agencies, we make sure that every project is delivered effectively and efficiently. We follow the proper structured approach that prioritizes quality and makes the applications smooth and prepared for users. This workflow keeps you informed at every stage while reducing risks. With us, you get reliable web applications that are tailored to your business goals."
        }
      />
      <MobileApp
        header={
          "Benefits of Custom Web Application Development Services for Your"
        }
        header2={" Business"}
        para={
          <>
            Investing in custom web apps means numerous benefits. Benefits could
            be enhanced efficiency, scalability, business growth and improved
            user experience. Even though the web application development cost
            depends on features, the overall long term value is always worth the
            investment. You can see how customized solutions from the best web
            application development agencies can help you with operations and
            provide competitive advantages.
          </>
        }
        cards={BENEFITS}
      />
      <Features
        header={"Essential Features for a Successful "}
        header2={"Web Application"}
        para={
          <>
            You don’t just build a web application without thinking much. It is
            usually a set of essential features that ensure performance. The
            features could be really important ones. Including navigation,
            responsive design, security, integrations. These elements enhance
            user experience and operational efficiency.
          </>
        }
        features={FEATURES}
        button={"Get Feature Recommendations"}
      />
      <SuccessStories
        header={"Proven Success in Web Application "}
        header2={"Development"}
        para={
          "Explore our proven success in web application development services through case studies. See how Dignite Studios worked with different industries and helped them achieve their goals with secure web applications. Each project highlights how we provided expert solutions and measurable results. It also demonstrates the growth businesses got when they worked with us."
        }
      />
      <CTA />
      <Testimonials
        test={test}
        header={"Client "}
        button={"Find More About Us"}
        header2={"Testimonials"}
      />
      <Faq header={" People Usually Ask"} faqs={faqs} />
      <ContactUs
        img={"/services/web-app/c-img.png"}
        pathname={"Web App Development"}
        header={"Ready to Build Something Amazing?"}
        header2={""}
        para={
          "You’ve seen what’s possible. Now it’s time for your web app. We’re here to discuss your idea because this is your sign to level up."
        }
        btn={"Talk to the Team Today!"}
      />
    </div>
  );
};

export default WebAppDevelopment;
