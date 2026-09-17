import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Services from "./Services";
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
import WhyChoose from "../ui/WhyChoose";
import TechTools from "../ui/TechTools";
import Features from "../ui/Features";
import CTA2 from "./CTA2";
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
import DeliveryApps from "./DeliveryApps";

import Niches from "./Niches";
import Monetization from "./Monetization";
import TabularTechs from "./TabularTechs";
import ThirdPartyIntegration from "./ThirdPartyIntegration";
import Cost from "../ui/Cost";
import Impact from "./Impact";
const services = [
  {
    icon: "1",
    icon2: "h1",
    title: "Mobile App Development",
    description: (
      <>
     The Mobile App Development for startups services offered by Dignite Studios cover the entire development process of mobile applications. We work with different technologies to develop applications for iOS, Android and cross platform environments. 
      </>
    ),
  },
  {
    icon: "2",
    icon2: "h2",
    title: "Web App Development",
    description: (
      <>
    The web app development services offered by Dignite Studios focus on building functional web applications for unique business requirements. Our Startup Web App Development Agency covers all the key stages involved in developing a web based product.
      </>
    ),
  },
  {
    icon: "h3",
    icon2: "UI/UX Design",
    description: (
      <>
      The design services we offer involve designing both the visual and functional aspects of a digital product. This includes user research, information architecture, wireframing, user flows, interface design and interactive prototypes. 
      </>
    ),
  },
  {
    icon: "4",
    icon2: "h4",
    title: "MVP Development",
    description: (
      <>
       MVP development services focus on building an initial version of a digital product. The process includes defining the product requirements, designing the experience and preparing the MVP for launch and further development.
      </>
    ),
  },
  {
    icon: "5",
    icon2: "h5",
    title: "App Maintenance",
    description: (
      <>
      The app maintenance services we offer include the ongoing work required after your app has been launched. This includes bug fixes, technical updates, security updates and feature enhancements. 
      </>
    ),
  },
  {
    icon: "6",
    icon2: "h6",
    title: "Consulting Services",
    description: (
      <>
     The professional consulting services provide guidance on different stages of the product development process. This can include product planning, technology selection, feature prioritization and other technical or product related decisions.
      </>
    ),
  },
  // {
  //   icon: "7",
  //   icon2: "h7",
  //   title: "Property Valuation Applications",
  //   description: (
  //     <>
  //       We build tools which estimate property value based on the market data.
  //       This supports buyers and sellers in the decision making.
  //     </>
  //   ),
  // },
  // {
  //   icon: "8",
  //   icon2: "h8",
  //   title: "Real Estate Agent Applications",
  //   description: (
  //     <>
  //       We design apps for the agents to manage listings, track leads and
  //       communicate with the clients easily while using the <Link href="/industries/real-estate-app-development" className="text-[#F15C20]">mobile app
  //         development for real estate</Link>.
  //     </>
  //   ),
  // },
];

const highlights = [
  {
    icon: "/industries/food-industry/s1.webp",
    title: "Experienced Mobile App Developers",
    desc: (
      <>
       Our mobile app developers have experience working on different types of applications, industries, platforms and technical requirements. This experience keep the entire development process smooth. 
      </>
    ),
  },
  {
    icon: "/industries/food-industry/s2.webp",
    title: "Scalable Architecture",
    desc: "A startup product can change significantly after its first version is launched so we consider these possibilities when we’re creating a technical foundation that can support future updates and product growth. ",
  },
  {
    icon: "/industries/food-industry/s3.webp",
    title: "Agile Development Process",
    desc: "Features are planned, developed, tested and reviewed throughout the process while following the agile development process. This approach also makes it easier to adjust features, priorities or requirements. ",
  },
  {
    icon: "/industries/food-industry/s4.webp",
    title: "Transparent Communication",
    desc: "Clear communication is an important part of keeping a development project on track for us. We maintain communication throughout the project so you have visibility in progress, requirements, timelines and development decisions. ",
  },
  {
    icon: "/industries/food-industry/s5.webp",
    title: "Secure Integrations",
    desc: "Many modern applications are dependant on external services to provide important functionality. These can include payment gateways, APIs, authentication systems, cloud platforms, analytics tools, maps, communication services and other third party solutions. ",
  },
  {
    icon: "/industries/food-industry/s6.webp",
    title: "Proven Track Record",
    desc: "The portfolio we have includes digital products developed for different industries, business models and product requirements. ",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare & Wellness Commerce",
    desc: "We create secure Ecommerce platforms for healthcare brands selling wellness products, supplements and medical equipment through the reliable digital storefronts.",
  },
  {
    title: "Fintech & Subscription Platforms",
    desc: "Our developers build stable Ecommerce systems that support subscription billing, digital payments and financial platforms.",
  },
  {
    title: "Ecommerce & Retail Brands",
    desc: "We develop powerful online stores for retail brands and manage the smooth bigcommerce strategy that improves the customer experience and store performance.",
  },
  {
    title: "Logistics & On Demand Marketplaces",
    desc: "Our team builds the Ecommerce solutions for logistics services and marketplace businesses that require real time order tracking and delivery management.",
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
    name: "Sebastian",
    designation: "— Urban Realty",
    review:
      (
        <>
          Working with Dignite Studios, a reliable <Link href="/industries/real-estate-app-development" className="text-[#F15C20]">real estate mobile app development company</Link> was a smooth experience. Their team understood our requirements clearly and delivered exactly what we needed
        </>
      ),
  },
  {
    name: "Sophia",
    designation: "— Prime Properties",
    review:
      "Our app performance improved significantly after launch. The team handled everything professionally and kept us informed throughout the project",
  },
  {
    name: "John Mathews",
    designation: "— Homespace",
    review:
      "The developers were very skilled and easy to work with. They also helped us build a user friendly app for our customers",
  },
  {
    name: "James Anderson",
    designation: "— Realty Hub",
    review:
      "We got the best experience from this team. The development process was also well organized and completed on time",
  },
  {
    name: "John Carter",
    designation: "— Estate Link",
    review:
      (
        <>
          Communication was clear and consistent. The team from this trusted <Link href="/industries/real-estate-app-development" className="text-[#F15C20]">real estate mobile app development company</Link> made sure we understood every step and delivered a reliable application
        </>
      ),
  },
  {
    name: "Oliver Parker",
    designation: "— Dream Houses",
    review:
      "They delivered our app on time without any issues. The final product worked smoothly and met all our expectations",
  },
  {
    name: "Andrew Scott",
    designation: "— Property Pro",
    review:
      "Highly professional team with strong technical knowledge. They built a scalable app that supports our growing business needs",
  },
  {
    name: "Ryan King",
    designation: "— Build Estate",
    review:
      "The team was really supportive. They also quickly resolved our queries and provided the useful updates",
  },
  {
    name: "Ethan Wright",
    designation: "— Real Connect",
    review:
      "It was easy to collaborate with their team. They were also responsive, flexible and focused on delivering quality results",
  },
  {
    name: "Samuel Turner",
    designation: "— Smart Realty",
    review:
      "We found their services very reliable. The app works quite perfectly and also improved our customer engagement",
  },
];

const BENEFITS = [
  {
    title: "Better Customer Experience",
    desc: "Apps provide smooth browsing, simple navigation and quick property search, helping users find and explore listings without confusion or delays.",
    icon: <FiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Faster Property Discovery",
    desc: "Users can quickly search and filter properties based on their needs, saving time and making the property discovery process easier and quite faster.",
    icon: <MdSpeed color="#F15C20" size={25} />,
  },
  {
    title: "Increased Sales Opportunities",
    desc: "Through improved user experience, apps enable businesses to reach more potential consumers, increase visibility and boost the likelihood that visitors will become customers.",
    icon: <HiTrendingUp color="#F15C20" size={25} />,
  },
  {
    title: "Direct Communication Between Buyers and Agents",
    desc: "Through the immediate chat or phone connections made possible by apps, buyers and agents can communicate more quickly and enhance the client experience in general.",
    icon: <BiMessageRoundedDots color="#F15C20" size={25} />,
  },
  {
    title: "Digital Transformation of Property Businesses",
    desc: (
      <>
        Apps help businesses move from the manual processes to digital systems using <Link href="/industries/real-estate-app-development" className="text-[#F15C20]">mobile app development for the real estate</Link>, improving the efficiency and long term growth.
      </>
    ),
    icon: <BsBuildingGear color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "How do I choose the right mobile app development company for my startup?",
    answer:
      "You need to look for a company that understands your product goals. Check everything including their previous work, development process, communication style and experience with similar products. You should discuss your idea before committing so you can see how they approach your requirements. A good development partner has to be able to explain technical decisions clearly and give you a realistic idea of the time and cost.",
  },
  {
    id: 2,
    question: "Can non technical founders build a successful mobile app for their startup?",
    answer:
      "Yes. A good development team can handle the technical side while you are working on your product, customers and business goals. You will still need to make decisions about features, priorities and the overall direction of the app but your development partner will handle the technical stuff.",
  },
  {
    id: 3,
    question: "What should startups know before starting mobile app development?",
    answer:
      "It helps to have a clear understanding of your target users and the core features it needs before you begin development. You also need to have a realistic budget and timeline in mind. You don’t need everything figured out from the beginning. A development team can help you refine the idea, choose the right technology and create a development plan before the actual development begins.",
  },
  {
    id: 4,
    question: "Should my startup build an MVP before a full featured app?",
    answer:
      "An MVP could be a very practical starting point when you want to test an idea before investing heavily in a full product. It focuses on the core features needed to solve the main problem and offers something functional to put in front of users. Their feedback can later guide future development. However, an MVP isn’t necessary for every startup. The right approach depends on your idea, market and available resources.",
  },
  {
    id: 5,
    question: "How do you validate a startup app idea before development?",
    answer:
      "Validation mostly starts with understanding the problem, target audience, and market you’re entering. You can research competitors, speak with potential users, test your assumptions, and create simple prototypes before investing in development. An MVP can also help validate the idea with real users. The goal is to learn whether there is a genuine need for the product and which features matter most before spending time and resources on the full application.",
  },
  {
    id: 6,
    question: "Can my mobile app scale as my startup grows?",
    answer:
      "Yes, if scalability is considered during the early stages of development. Your app’s architecture, backend, database, APIs, and infrastructure all play a role in how well it can handle growth. You may also need to add features, support more users, or connect new services over time. Building with these possibilities in mind gives you more flexibility to expand the product without having to completely rebuild it as your startup grows.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We understand your business goals, target users and market needs. Then we create a clear strategy and define features required for your real estate app.",
  },
  {
    step: "02",
    title: "UI UX Design",
    desc: "Our group creates interfaces that are straightforward and easy to use. For buyers and agents, we prioritize easy navigation, tidy layouts and an improved user experience",
  },
  {
    step: "03",
    title: "App Development",
    desc: "Our developers use tools and technology to create the app. On every device, we promise reliable performance, scalability and fluent operation",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    desc: "To find and fix bugs, we thoroughly test the program. This ensures smooth performance, secure data handling and the reliable user experience before the app is being designed.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "We launch the app on required platforms after final testing. Our team ensures smooth deployment without issues or delays during the release process.",
  },
  {
    step: "06",
    title: "Maintenance & Support",
    desc: "After the launch, we continue to offer assistance. To keep the app functioning properly, our staff also upgrades features, resolves bugs and boost performance.",
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
const StartupAppDevelopment = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        button="Schedule a Free Consultation"
        heading="A Development Partner for Startup "
        heading2={"Ideas"}
        para={
          <>
            The team at Dignite Studios work by helping startups and build the mobile products that are ready for actual users. With 10+ years of experience and 100+ projects delivered in different industries, we have a proven process that begins with understanding your idea, your target users and what you need to achieve with the product.
            The team can support you through the full development process. Including refining the concept and defining the MVP to UI UX design, development, testing and launch. We build iOS, Android and cross platform apps based on the needs of each startup.
            Your app may need new features, integrations, performance improvements or ongoing support. We build with that future in mind so your app can adapt as your users and business grow.

          </>
        }
      />
      <Services
        header="Professional Startup Mobile App Development "
        header2={"Services"}
        // button={"Explore Our Services"}
        para={
          <>
         We cover the key stages of Mobile App Development for startups at Dignite Studios and you can choose the services that work for your current needs. Explore the services below to see the range of services we’re offering. 
          </>
        }
        services={services}
      />
      <CTA
        header="Get the Right Mobile App Development For Startups  "
        para={
          <>
         Tell us what you’re building and what you want your product to achieve. The team will work through the development process and figure out the next steps for your product. 
          </>
        }
        btn="Discuss Your Idea"
      />
      <SuccessStories
        header="Our Work as a Startup Application"
        header2={"Development Company "}
        para={
          <>
        We have worked on mobile products for businesses across different industries and at different stages of growth and each project has come with its own goals, users, features and technical requirements. You can explore some of the products we’ve built below. 
          </>
        }
      />
      {/* <DeliveryFeatures /> */}
      {/* <MobileApp
        cards={BENEFITS}
        header2={"Real Estate Apps"}
        header=" Benefits of Investing in "
        para={
          <>
            Real Estate apps help businesses grow faster and manage daily operations easily. They boost productivity, facilitate automation and enhance the customer experience. Companies may also increase user reach, boost engagement and create scalable digital platforms which facilitate long term growth by investing in <Link href="/industries/real-estate-app-development" className="text-[#F15C20]">mobile app development for real estate</Link>.
          </>
        }
        button=" Book a Free Consultation  "
      /> */}

      {/* <Features
        header="Cutting Edge Technologies for"
        header2={"Real Estate Apps"}
        para={
          <>
            Utilising modern technologies, our <Link href="/industries/real-estate-app-development" className="text-[#F15C20]">real estate app development solutions</Link> also enhance productivity performance, and user experience. These tools support companies in data analysis, property management and client engagement.
          </>
        }
        button={"Lets Grow Your Business "}
        // button="Get Feature Recommendations"
        features={featureData}
      /> */}
      <TabularTechs  />
      <Bussiness
        header="Here’s Why Startups Work With   "
        header2={"Dignite Studios"}
        // button="Let's get started "
        para={
          <>
         Building a startup app comes with different challenges at every stage but having a reliable Mobile App Development Company For Startups who understands the requirements can make the process much easier to manage.
          </>
        }
        bs={highlights}
      />
      <Process
        header="The Approach for Startup App Development "
        para={
          <>
           We follow a structured process at Dignite studios for App Development Services gor startups that keeps the project organized while allowing room for changes as your requirements become clearer.
          </>
        }
        steps={PROCESS_STEPS}
      />
      <Impact />
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
      {/* <Cost
        title=" Industry Wide Cost Of Real Estate App"
        description={
          <>
            The cost of building a property app depends on many factors. These
            include app features, level of complexity, integration development
            approach. The <Link href="/industries/real-estate-app-development" className="text-[#F15C20]">real estate app development cost</Link> can change based on
            business needs. The estimates below give a general idea to help
            businesses plan their budget.{" "}
          </>
        }
        cards={[
          {
            label: "Simple Apps",
            range: " $8,000- $40,000",
            detail:
              "Simple apps are best for startups or small real estate businesses. These apps include the basic features such as the property listings, simple search filters, map view and contact forms. They provide an easy browsing experience for users who want quick access to property information.",
          },
          {
            label: "Medium Complexity Apps",
            range: " $45,000- $90,000",
            detail:
              "These apps are suitable for growing businesses and property platforms. They also include features like user login, advanced filters, property comparison tools, push notifications and third party integration. The real estate app development cost at this level is higher but it supports better user experience and improved business operations.",
          },
          {
            label: "Complex Real Estate Apps",
            range: " $95,000-$140,000",
            detail:
              "Complex apps built for large businesses are marketplaces. They also include advanced features such as the smart recommendations, virtual property tours, CRM integrations, analytics dashboards and scalable systems. These apps require higher real estate app development cost due to the advanced functionality and the strong infrastructure.",
          },
        ]}
        btn={"Get a Custom Cost Estimate. "}
      /> */}
      <Testimonials
        button={"Work With Our Expert Team "}
        header=" Client Testimonials for Mobile App Development For   "
        header2={"Startups "}
        test={test}
        para={
          <>
 Our clients have worked with us on different industries and project stages. Here’s what some of our clients have to say about their experience working with Dignite Studios. 
          </>
        }
      // button="Work With Our Expert Team"
      />
      <Faq faqs={faqs} header="Commonly Asked Questions" />
      <ContactUs
        pathname={"Real Estate App dev"}
        img={"/industries/real-state/c-img.webp"}
        header="Start Your Real Estate App Journey"
        para={
          <>
            Share your app idea with our <Link href="/industries/real-estate-app-development" className="text-[#F15C20]">real estate app development company</Link>. We will guide you with the right solution and strategy.
          </>
        }
        btn="Get Free Consultation "
      />
    </div>
  );
};

export default StartupAppDevelopment;
