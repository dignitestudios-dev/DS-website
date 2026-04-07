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
import TabularEcommerceTechs from "../ui/TabularTechs";
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

const FEATURES = [
  {
    title: "App-Like Experience",
    desc: "Provide users with an experience that feels like a native mobile application.",
    icon: <FaSearch size={50} />,
  },
  {
    title: "Offline Functionality",
    desc: "Allow users to access features even without an active internet connection.",
    icon: <FaLock size={50} />,
  },
  {
    title: "Responsive Design",
    desc: "Ensure the web application works perfectly on all screen sizes and devices.",
    icon: <FaMobileAlt size={50} />,
  },
  {
    title: "Push Notifications",
    desc: "Keep users engaged with real-time updates directly on their browser or device.",
    icon: <FaBell size={50} />,
  },
  {
    title: "Fast Loading Speed",
    desc: "Optimized performance to ensure instant loading for a better user experience.",
    icon: <FaCommentDots size={50} />,
  },
  {
    title: "Home Screen Installation",
    desc: "Users can add the PWA to their home screen without needing an app store.",
    icon: <FaCreditCard size={50} />,
  },
  {
    title: "Automatic Updates",
    desc: "The application updates automatically in the background for users.",
    icon: <FaShareAlt size={50} />,
  },
  {
    title: "Secure HTTPS Connections",
    desc: "Data encryption through HTTPS to ensure user safety and trust.",
    icon: <FaClock size={50} />,
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
      link: "/flutter-app-development",
    },
    {
      name: "React Native",
      icon: <SiReact />,
      link: "/react-native-app-development",
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
    title: "PWA Consultation",
    description: (
      <>
        Our PWA Development Services include expert consultation to help you
        make the right decision. We take the time to understand your goals and
        current digital setup before recommending the best approach.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "PWA UI/UX Design",
    description: (
      <>
        When you’re getting progressive web app development services, you have
        to notice how it looks and feels, and not just performance. Dignite
        Studios designs clean interfaces that make navigation simple and
        enjoyable.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "PWA Maintenance & Support",
    description: (
      <>
        Keeping your app in top shape is easy with our PWA Development Services.
        Because ongoing support is a part of our development services. So you
        can focus on your business while we take care of your app.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "PWA Migration",
    description: (
      <>
        Want to level up your existing website or web app? Progressive web app
        development services can make it happen. The team of developers at
        Dignite Studios can help move your current setup to a reliable
        experience without losing functionality.
      </>
    ),
  },
];

const highlights = [
  {
    title: "Years of Experience",
    desc: "We have successfully delivered a wide range of projects through PWA Development Services across industries, with years of expertise in development.",
  },
  {
    title: "Advanced Expertise",
    desc: "The team at our custom PWA development company USA brings high expertise in the latest web technologies and development practices.",
  },
  {
    title: "Expert Project Management",
    desc: "The trusted project managers of Dignite Studios coordinate with people while maintaining clear communication with clients. This guarantees successful web applications.",
  },
  {
    title: "Transparent Process",
    desc: "Following a fully transparent procedure of the best PWA development company USA in every project, we keep you informed at every stage of development. The team would share clear updates.",
  },
  {
    title: "Reliable Support",
    desc: "The service doesn’t end at launch. The PWA development company in USA still provides ongoing continuous support to ensure your PWA remains secure and updated.",
  },
  {
    title: "Customized Solutions",
    desc: "Dignite Studios builds PWAs that are designed specifically for your business needs. We create applications that align perfectly with your workflows.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare Industry",
    desc: "The development team at Dignite Studios creates HIPAA-compliant applications for the healthcare industry. The app will have patient portals, telemedicine platforms, appointment systems, and an electronic health record.",
  },
  {
    title: "Fintech Industry",
    desc: "The development team delivers secure solutions for the fintech industry. Fintech PWA development usually includes payment platforms, digital banking apps, trading systems, and financial management tools.",
  },
  {
    title: "Ecommerce Industry",
    desc: "The team is great at building ecommerce PWA development as a progressive web app agency that increases the overall revenue through online stores, shopping carts, payment integrations, and inventory management.",
  },
  {
    title: "E-learning Industry",
    desc: "Dignite Studios also creates PWA solutions for the education and eLearning sector. The following features are included: Learning management systems, virtual classrooms, assessment platforms, and interactive educational apps in apps.",
  },
  {
    title: "Real Estate",
    desc: "Providing the best PWA web app development services, the team builds advanced solutions for the real estate sector. It includes developing property listing platforms, virtual tours, CRM systems, and booking portals.",
  },
  {
    title: "Dating and Matchmaking Industry",
    desc: "Dignite Studios has experts at creating engaging and secure solutions for the dating industry. It includes matchmaking platforms, chat systems, profile management, and location-based features.",
  },
];

const test = [
  {
    name: "Jessica Harrington",
    designation: "— Founder, BrightWave Tech",
    review:
      "“The Dignite Studios team completely changed our website in a good way. It now feels like a smooth app, and our users literally love it!”",
  },
  {
    name: "Daniel Micheal",
    designation: "— E-commerce Manager, LeafIn Stores",
    review:
      "“Migrating to a PWA looked so tough, but they made it easier than we imagined. Their guidance made the process simple, and our app works flawlessly across all devices.”",
  },
  {
    name: "Samantha Bennett",
    designation: "— Marketing Director, BlueLand Agency",
    review:
      "“Everything was smooth.. Push notifications and home screen installation have really helped us keep users engaged.”",
  },
  {
    name: "Christopher Morgan",
    designation: "— Tech Entrepreneur, TechT Solutions",
    review:
      "“Our PWA loads instantly and works offline, so of course our customers are more than satisfied. The team was professional and super easy to work with.”",
  },
  {
    name: "Olivia Scott",
    designation: "— Product Manager, UrbanFit Stores",
    review:
      "“The consultation helped us pick the right features for our users because we genuinely needed guidance. The final PWA exceeded our expectations in every way.”",
  },
  {
    name: "Benjamin Chris",
    designation: "— SaaS Product Lead, CloudWorks Inc.",
    review:
      "“The background sync makes our workflow so much smoother. We’re really impressed with the team’s expertise and support.”",
  },
  {
    name: "Emily Madison",
    designation: "— CTO, Horizon Enterprises",
    review:
      "“Definitely a friendly and skilled team that knows PWAs inside out. They built a secure progressive web app that our users absolutely love.”",
  },
];

const BENEFITS = [
  {
    title: "Improved Efficiency",
    desc: "Custom progressive web applications are designed to optimize your business processes. Through custom PWAs, your team can reduce manual errors. This means less time and resources.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "User Experience",
    desc: "The PWA designs can be created that are customized to your audience’s needs. If you have build a progressive web app, it’d attract even more users by prioritizing user experience.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Flexibility",
    desc: "Through custom progressive web apps, you can accommodate increasing users. Custom PWAs ensure long-term value while flexible architecture allows quick adjustments.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Enhanced Security",
    desc: "Your business gets better security with custom progressive web apps. It includes data encryption, secure authentication, and advanced access controls. Custom PWAs protect sensitive information and reduce vulnerability to cyber threats.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Cost-Effective",
    desc: "PWAs save money over time by reducing reliance on multiple tools even if the initial investment may be higher. Custom web apps means optimize resources, preventing unnecessary expenditures, and adapting to your business growth.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "How does a Progressive Web Application work?",
    answer:
      "So, by a PWA, we mean building an app like a web application that works exactly like a mobile app, but on a browser. You can also “install” it on your device. It works offline, loads super fast, and can send push notifications",
  },
  {
    id: 2,
    question:
      "What’s the difference between a Progressive Web app and a regular website?",
    answer:
      "A progressive web app would offer features such as offline functionality, push notifications, fast loading, and home screen installation, which isn’t usually offered by a website. This creates a more engaging experience for users.",
  },
  {
    id: 3,
    question: "What if I have a website? Can it be converted into a PWA?",
    answer:
      "Ofcourse! Your current website or web app can easily be moved to a progressive web app with PWA migration. You’ll get offline support, faster loading, push notifications, and an app-like experience.",
  },
  {
    id: 4,
    question:
      "Will my Progressive Web Apps work well with all devices and operating systems?",
    answer:
      "Progressive Web Apps are built to be responsive to all devices, so they can work on all kinds of devices. A PWA will provide a consistent experience across different screens and operating systems.",
  },
  {
    id: 5,
    question: "Are PWAs secure?",
    answer:
      "PWAs use HTTPS to encrypt data and make the communication secure between the app and servers. Your users can interact safely, and security is always a key part of our PWA Development Services.",
  },
  {
    id: 6,
    question: "Why should I invest in a PWA?",
    answer:
      "PWAs improve user experience, engagement, and performance. They reduce the development cost compared to native applications. That means your business is to reach users across devices. PWAs are reliable and installable.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Initial Planning",
    desc: "Before stepping into the technical phase of PWA, we begin with the planning and understanding of your goals and objectives. The team conducts technical feasibility and market analysis.",
  },
  {
    step: "02",
    title: "Building Wireframes",
    desc: "Through our PWA web app development services, the team builds wireframes and user designs that focus on user aesthetics, allowing you to visualize the app’s structure.",
  },
  {
    step: "03",
    title: "Sprint Development",
    desc: "The team hire progressive web app developer who builds your web application in structured sprints. Each sprint focuses on delivering unique features with feedback.",
  },
  {
    step: "04",
    title: "Quality Testing",
    desc: "The QA team tests your Progressive web app to meet the highest standards. Our team of PWA Development Services conducts functional testing to resolve any issues.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Our expert PWA development company in USA carefully launches your application in a stable production environment. Our team ensures smooth performance optimization.",
  },
  {
    step: "06",
    title: "Post Launch Support",
    desc: "After deployment, the team ensures your progressive web application continues to perform at its best. The team stays available to resolve issues quickly.",
  },
];

const ProgressiveWebAppDevelopment = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="About"
        heading2={"Dignite Studios"}
        para="We’re providing reliable PWA Development Services with a team of 200+ developers. Having 10+ years of experience means Dignite Studios has worked on over 50+ projects for startups, businesses, and enterprises. Building functional products from scratch, the development team focuses on building secure web applications customized to your unique business needs. With a strong emphasis on the high performance of progressive web applications. The team is great at building reliable PWA solutions. improving efficiency and user experience. The aim is to provide web apps that support long term business success and adapt to changing technological needs."
        button="Get Started Today"
      />
      <Services
        services={services}
        header={"Expert Progressive Web App Development"}
        header2={"Services"}
        button={"Explore Our Services"}
        para={
          "When you want your website to offer an experience like an application, you need PWA development services. means the perfect solutions for building fast, reliable, and engaging progressive web apps that combine the best of web and mobile experiences. We ensure each app meets your unique business goals."
        }
      />
      <TabularEcommerceTechs
        header={"Advanced Technologies of a PWA app development"}
        header2={"company"}
        para={
          "We select the technologies that are used by any expert progressive web app agency all around the world. Dignite Studios uses modern technologies to build secure applications and high performing applications. The tech stack includes professional tools that ensure smooth functionality and better user experiences. We choose the latest tech to deliver the best web solutions."
        }
        button={"Let’s Build Your PWA"}
        techData={techData}
      />
      <Bussiness
        bs={highlights}
        header={"Reasons to Choose Our PWA development company in "}
        header2={"USA"}
        ctaHeader={"Choose the Best Team"}
        ctaPara={
          "Dignite Studios is a leading custom PWA development company. Our developers are professional and deliver according to your business needs. The expert team uses expert processes to ensure timely delivery and ongoing support. Working with the team of Dignite Studios comes with reliable web applications that improve growth."
        }
        ctaBtn={"Choose the Best Team"}
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
                  Choose the Best Team
                </h2>
                <p>
                  Dignite Studios is a leading custom PWA development company.
                  Our developers are professional and deliver according to your
                  business needs.
                </p>
                <Link
                  href="/contact-us"
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Choose the Best Team
                  </button>
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                    <MdArrowOutward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        }
        button={"Choose the Best Team"}
        para={
          <>
            Dignite Studios is a leading custom PWA development company. Our
            developers are professional and deliver according to your business
            needs. The expert team uses expert processes to ensure timely
            delivery and ongoing support. Working with the team of Dignite
            Studios comes with reliable web applications that improve growth.
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Serving Industries as an Expert PWA development company "}
        header2={"USA"}
        para={
          "Dignite Studios serves a wide range of industries as the best progressive web app agency. The team is professional and expert at providing customized solutions that understand the business requirements. Once we are clear on the goals and vision, it’s easier to work in that industry. And since we have 10+ years of experience in different sectors and different industries, the development team now uses modern technologies and best practices to create scalable Progressive web applications."
        }
        button={"Discuss Your Niche"}
      />
      <Process
        steps={PROCESS_STEPS}
        header={"The Proven Process of a Custom PWA development company"}
        para={
          "Being the best PWA app development company, we make sure that every project is delivered effectively and efficiently. Following the proper structured approach that prioritizes quality and makes the PWAs smooth and prepared for users. This process keeps you informed at every stage while reducing risks. With us, you get reliable progressive web applications that are tailored to your business goals."
        }
      />
      <MobileApp
        header={"Benefits of PWA Development Services for Your "}
        header2={"Business"}
        para={
          <>
            Investing in custom progressive web apps means numerous benefits.
            Those benefits could be enhanced efficiency, scalability, business
            growth, and improved user experience. Even though the cost might
            increase depending on features, the overall long term value is
            always worth the money. You can see how customized PWA web app
            development services from the best agency can help you with
            operations and provide competitive advantage
          </>
        }
        cards={BENEFITS}
        button={"Get Your App Built"}
      />
      <Features
        header={"Essential Features for a Successful Progressive Web "}
        header2={"Application"}
        para={
          <>
            You don’t just build a progressive web application without thinking
            deeply. It is usually a bunch of essential features. And sometimes,
            these features are the ones that determine the success of your
            progressive web app by ensuring high performance. The features could
            be very important ones.
          </>
        }
        features={FEATURES}
        // button={"Get Started"}
      />
      <SuccessStories
        header={"Proven Success in Progressive Web Application "}
        header2={"Development"}
        para={
          "Explore our proven success in progressive web application development services through case studies. See how our developers worked with different industries and helped them achieve their goals with secure PWAs. Each project shows how we provided expert solutions and measurable results. It also shows the growth businesses got when they worked with us."
        }
      />
      <CTA />
      <Testimonials test={test} header={"What Our Clients "} header2={"Say"} />
      <Faq header={"People Usually Ask"} faqs={faqs} />
      <ContactUs
        img={"/services/pwa-app/c-img.webp"}
        pathname={"PWA Development Services"}
        header={"It’s Time to Build Your App!"}
        header2={""}
        para={
          "You’ve seen how we can create an amazing business opportunity with an idea. Now it’s time for you. Contact us and discuss your idea because this is your sign to upgrade your business."
        }
        btn={"Share Your Idea Today!"}
      />
    </div>
  );
};

export default ProgressiveWebAppDevelopment;
