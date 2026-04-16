import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Services from "../ui/Services";
import Link from "next/link";
import Bussiness from "../ui/Bussiness";
import {
  MdArrowOutward,
  MdSecurity,
  MdSync,
  MdNotificationsActive,
  MdAnalytics,
  MdSettingsSuggest,
  MdAccountBalanceWallet,
  MdDashboard,
} from "react-icons/md";
import Industries from "../ui/Industries";
import { IoGrid, IoWalletOutline } from "react-icons/io5";
import { CiSearch, CiSettings } from "react-icons/ci";
import { SiNodedotjs } from "react-icons/si";
import { FaCode, FaAws, FaPencilAlt, FaUser } from "react-icons/fa";
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
import TabularEcommerceTechs from "./TabularEcommerceTechs";
import BuildingPlatforms from "../ui/BuildingPlatforms";

const services = [
  {
    icon: "database",
    icon2: "database1",
    title: "Ecommerce Strategy and Consultation",
    description: (
      <>
        We analyze your business goals and plan solutions as the custom
        ecommerce app development company for better performance and growth.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Ecommerce App UI/UX Design",
    description: (
      <>
        We design simple and user friendly interfaces that increase the customer
        engagement and create a fluent shopping experience across all the
        ecommerce platforms and devices.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Custom Ecommerce App Development",
    description: (
      <>
        We build scalable and reliable apps as an ecommerce app development
        agency that match the business goals and improve overall store
        performance effectively.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Payment Gateway Integration",
    description: (
      <>
        We integrate secure payment systems like Stripe, PayPal and Shopify
        Payments to ensure the smooth transactions and an easy checkout
        experience for every customer.
      </>
    ),
  },
];

const highlights = [
  {
    title: "Proven Ecommerce Expertise",
    desc: "We deliver ecommerce solutions which improve store performance and support long term business growth.",
  },
  {
    title: "Certified Developers",
    desc: "Our certified developers build reliable apps using the modern tools, best practices and proven methods to ensure quality and stability.",
  },
  {
    title: "Scalable & Secure Architecture",
    desc: "We create the apps that grow through your business while maintaining the strong security standards and fluent performance across all the platforms.",
  },
  {
    title: "Transparent Communication",
    desc: "We keep clients informed through the clear updates, ensuring the full visibility into the project progress, milestones and the expected outcomes.",
  },
  {
    title: "On Time Delivery",
    desc: "Our team follows structured processes and schedules to ensure the projects that are delivered on time without compromising quality.",
  },
  {
    title: "Long Term Support",
    desc: "We provide the ongoing app maintenance, updates and optimizations that ensure smooth performance and continuous business growth.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare and Wellness Commerce",
    desc: "We build apps as a healthcare app development company to improve the patent engagement, streamline processes and enhance the service delivery.",
  },
  {
    title: "FinTech and Subscription Platforms",
    desc: "Our team creates secure apps which are aligned through the fintech app development services to manage the payments, subscriptions and financial operations efficiently.",
  },
  {
    title: "Ecommerce and Retail Brands",
    desc: "We deliver scalable apps as an ecommerce app development company to increase the sales, improve customer experience and simplify the store management.",
  },
  {
    title: "Logistics and On Demand Marketplaces",
    desc: "We build apps supporting logistics app development, enhance the delivery management, track orders and improve the overall operational efficiency.",
  },
  {
    title: "Grocery",
    desc: "We create apps which simplify the grocery ordering, manage the inventory and enhance the shopping experience for the customers and staff.",
  },
  {
    title: "Fashion Apparel",
    desc: "Our apps improve product browsing, increase the conversions and provide the smooth experiences for the fashion and apparel brands.",
  },
  {
    title: "Home Decor",
    desc: "We deliver ecommerce solutions which improve the user experience, simplify the shopping and enhance the online buying journeys for the home decor businesses.",
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
    designation: "— Marketing Manager at BrightCart Solutions",
    review:
      "“Great service and strong support helped to improve our ecommerce store performance and the overall business growth smoothly through the reliable solutions”",
  },
  {
    name: "Michael Johnson",
    designation: "— Operations Head at NovaRetail Inc",
    review:
      "“The team delivered our project on time through the clear communication and strong results that exceeded expectations and improved our operations”",
  },
  {
    name: "David Williams",
    designation: "— Product Manager at ShopEase Technologies",
    review:
      "“Very professional team that understood our business needs and built the reliable and scalable ecommerce application for the long term growth”",
  },
  {
    name: "Robert Brown",
    designation: "— Founder at UrbanCart Co",
    review:
      "“Smooth process and great experience working with their development team from the planning to the final delivery with the full clarity and support”",
  },
  {
    name: "James Davis",
    designation: "— Ecommerce Director at TrendyBuy Ltd",
    review:
      "“They helped us build a scalable ecommerce app with the strong performance and better customer experience which increased our conversions”",
  },
  {
    name: "William Miller",
    designation: "— Project Leader at Cartify Systems",
    review:
      "“Clear communication and quality work made the whole project easy and very successful for our growing ecommerce business”",
  },
  {
    name: "Richard Wilson",
    designation: "— CEO at QuickSell Market",
    review:
      "“The app works perfectly and supports our growing business needs with the stable performance and smooth daily operations”",
  },
  {
    name: "Joseph Moore",
    designation: "— Operations Manager at EasyCart Global",
    review:
      "“Their team provided practical solutions that improved our store operations and simplified the daily business tasks effectively”",
  },
  {
    name: "Thomas Taylor",
    designation: "— Co Founder at SmartShop Hub",
    review:
      "“We are happy with the results and the long term support they provide after project completion and launch”",
  },
  {
    name: "Charles Anderson",
    designation: "— Technical Director at RetailFlow Systems",
    review:
      "“Excellent team with the strong expertise and reliable delivery that helped us to achieve our business goals with the confidence”",
  },
];

const BENEFITS = [
  {
    title: "Increased Customer Engagement",
    desc: "Apps help the customers to interact more with your store and to improve the overall shopping experience.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Faster Store Operations",
    desc: "Apps simplify processes and improve the speed which also helps businesses manage the operations more efficiently.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Business Automation",
    desc: "Ecommerce web application development helps reduce manual work and improves the efficiency for the online businesses.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Revenue Growth",
    desc: "Apps help to increase the conversions and improve the overall business performance.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Scalable Ecommerce Expansion",
    desc: "Apps support business growth and allow easy expansion with better performance and flexibility.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "Do you build scalable ecommerce apps?",
    answer:
      "Yes, we build scalable apps which grow through your business. As an ecommerce mobile app development company we ensure performance, flexibility and long term success.",
  },
  {
    id: 2,
    question: "How long does ecommerce app development take?",
    answer:
      "The timeline depends on the requirements: simple apps take weeks while complex apps need more time for the quality delivery as the mobile app development for ecommerce.",
  },
  {
    id: 3,
    question: "Do you support app launch and deployment?",
    answer:
      "Yes we handle app launch and ensure the smooth deployment through the stable performance and proper setup for the business success.",
  },
  {
    id: 4,
    question: "Can you refine an ecommerce app idea?",
    answer:
      "Yes, as a custom ecommerce app development company we suggest improvements that enhance the usability, performance and long term app success.",
  },
  {
    id: 5,
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes we work with startups and enterprises and build solutions that match business needs and support the long term growth.",
  },
  {
    id: 6,
    question: "How can ecommerce apps improve my online store?",
    answer:
      "Ecommerce web application development creates efficient and scalable solutions which enhance store performance, streamline the operations and boost the user experience.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery and Planning",
    desc: "We analyze your business needs, set clear goals and plan the effective ecommerce app solution for the long term growth.",
  },
  {
    step: "02",
    title: "Design",
    desc: "We create simple and intuitive designs that improve the user experience and make your ecommerce app quite easy to navigate.",
  },
  {
    step: "03",
    title: "App Development",
    desc: "We develop scalable apps through clean code which ensures high performance, smooths the functionality and supports the business expansion.",
  },
  {
    step: "04",
    title: "App Testing",
    desc: "We conduct thorough testing to ensure the app stability, flawless performance and the fluent user experience across all the devices.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "We launch the ecommerce app carefully, making sure that it works perfectly in the real world business environments without any of the issues.",
  },
  {
    step: "06",
    title: "Post Launch Support and Optimization",
    desc: "We continuously monitor app performance, fix issues and optimize features to ensure the long term reliability and business growth.",
  },
];

const featureData = [
  {
    title: "Secure login and authentication",
    icon: <MdSecurity />,
  },
  {
    title: "Real time order updates",
    icon: <MdSync />,
  },
  {
    title: "Push notifications",
    icon: <MdNotificationsActive />,
  },
  {
    title: "Automated workflows",
    icon: <MdSettingsSuggest />,
  },
  {
    title: "Analytics and reporting",
    icon: <MdAnalytics />,
  },
  {
    title: "Smooth checkout process",
    icon: <CiSettings />,
  },
  {
    title: "Payment integration",
    icon: <MdAccountBalanceWallet />,
  },
  {
    title: "User friendly design",
    icon: <MdDashboard />,
  },
];

const techStackData = [
  {
    name: "React",
    icon: <FaCode />,
    description:
      "We use React to build high performance and interactive user interfaces.",
  },
  {
    name: "Vue JS",
    icon: <FaCode />,
    description: "We build flexible and lightweight web apps using Vue JS.",
  },
  {
    name: "Angular",
    icon: <FaCode />,
    description:
      "We develop enterprise level web apps using the Angular framework.",
  },
  {
    name: "Flutter",
    icon: <FaCode />,
    description: "We build high performance cross platform apps using Flutter.",
  },
  {
    name: "React Native",
    icon: <FaCode />,
    description:
      "We build high performance mobile app interfaces and logic using React Native.",
  },
  {
    name: "GraphQL APIs",
    icon: <SiNodedotjs />,
    description:
      "We use GraphQL to build fast and efficient data queries for ecommerce apps.",
  },
  {
    name: "Stripe",
    icon: <MdAccountBalanceWallet />,
    description:
      "We integrate Stripe to ensure secure and smooth payment transactions.",
  },
  {
    name: "AWS",
    icon: <FaAws />,
    description:
      "We use AWS to build scalable and secure cloud infrastructure.",
  },
  {
    name: "Azure",
    icon: <FaAws />,
    description:
      "We use Azure to build scalable and secure cloud infrastructure.",
  },
  {
    name: "Rest APIs",
    icon: <SiNodedotjs />,
    description:
      "We build scalable and modular systems through Rest APIs for better performance.",
  },
];

const EcommerceAppDevelopment = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        button="Start Your Ecommerce App Journey"
        heading="Introduction"
        para={
          <>
            Dignite Studios is an experienced ecommerce app development company
            with over 10 years of industry experience. We build reliable
            ecommerce apps including public apps, private apps and custom
            integrations for the different business needs. <br /> <br /> We work
            across the ecommerce retail DTC brands and marketplaces. Our team
            focuses mainly on the performance stability and scalability. AS an
            ecommerce mobile app development company. We deliver apps which are
            simple to use and also build for long term success. <br /> <br />
            Our solutions help businesses grow efficiently, streamline
            operations and improve the customer experiences. We ensure smooth
            functionality, enhanced performance and measurable results.
            Providing businesses through the dependable ecommerce apps which
            support growth, revenue and long term business goals across the
            multiple platforms.
          </>
        }
      />
      <Services
        header="Ecommerce Application Development "
        header2={"Services"}
        para="We provide structured ecommerce solutions that help businesses grow with clarity and control. Our ecommerce app development company provides dependable systems that enhance the user experience and operations. Our solutions focus on performance, scalability and long term business value through practical execution."
        services={services}
        button="Start Your Ecommerce App Project"
      />
      <TabularEcommerceTechs />
      <BuildingPlatforms
        header={"Platforms We Use to Build "}
        header2={"Ecommerce Apps"}
        para={
          "We build ecommerce apps by using platforms which also support scalability and business growth. As an ecommerce mobile app development company we ensure each of the platforms fits your needs and delivers strong performance. "
        }
        button={" Explore Our Ecommerce Platform Expertise"}
        VALUE_PROPOSITION={PLATFORMS}
      />

      <CTA
        header="Launch Your Ecommerce App With Experts "
        para="We help businesses grow with the structured solutions built by our expert ecommerce app development company team. Our solutions are also designed to improve the performance and support long term success. Start building your ecommerce app with a team that understands the business needs."
        btn="Request Ecommerce App Development Quote"
      />
      <Process
        header="Reliable Ecommerce App "
        header2={"Development Process"}
        para="Our process focuses on the clear steps and practical execution. As an ecommerce app development company in usa we deliver structured solutions through using proven methods. Our ecommerce application development services. Ensuring better performance while our ecommerce supports long term growth and scalability."
        steps={PROCESS_STEPS}
        button={"Start Your Ecommerce App Journey "}
      />
      <Bussiness
        header="Best Ecommerce App Development"
        header2={"Services"}
        button="Partner with Dignite Studios "
        para={
          <>
            Dignite Studios is known for delivering reliable ecommerce solutions
            through its strong performance. As the best ecommerce app
            development company we also focus on building scalable apps. Our
            team works as the ecommerce app development agency which delivers
            the result. We also stand among the growing ecommerce app
            development companies through the focus on the long term value.
          </>
        }
        bs={highlights}
      />
      <Industries
        header="Industries We Serve as a Ecommerce "
        header2={"App Development Company"}
        para="We work with industries and deliver solutions that improve the operations and support the growth. As an ecommerce app development company. We build apps which match different business needs."
        VALUE_PROPOSITION={VALUE_PROPOSITION}
      />
      <MobileApp
        cards={BENEFITS}
        header="Benefits Of Having an "
        header2={"Ecommerce App"}
        para="Ecommerce apps help businesses to improve performance and increase revenue. Our solutions support the automation scalability and the better user experience. It is for the strong mobile app development for ecommerce strategies. It is built for the long term growth and business success."
        button="Build a Scalable Ecommerce App"
      />
      <Features
        header="Must Have Features in Your ecommerce app "
        header2={"Development Services"}
        para="Modern ecommerce apps need essential features that improve performance and user experience. Our ecommerce app development company in usa ensures that your app includes the right features for business growth and scalability."
        button="Get Feature Recommendations"
        features={featureData}
      />
      <SuccessStories
        header="Real Ecommerce App Success Stories"
        para="Our work shows how structured solutions help businesses grow. We have delivered successful ecommerce apps which improved the store performance and operations. Explore our projects to understand how we build apps. For the long term business success. Visit our portfolio Case Studies page."
      />
      <CTA2
        header="Start Your Ecommerce App Project Today"
        para="Work with a reliable ecommerce app development in the USA that builds scalable and practical solutions. Our ecommerce app development services that help improve performance and support business growth. Start your ecommerce app journey with the team which delivers the real results."
        btn="Request Ecommerce App Development Quote"
      />
      <Testimonials
        header="Testimonials"
        test={test}
        button="Work With Our Expert Team"
      />
      <Faq faqs={faqs} header="FAQs" />
      <ContactUs
        img={"/ecommerce/shopify-app/c-img.webp"}
        pathname={"ECommerce App dev"}
        header="Kickstart Your Ecommerce App Journey Today"
        para="Start your ecommerce app project with a team that understands your business needs. Our experts help you plan, build and launch scalable solutions which also deliver real results and long term growth."
        btn="Request Ecommerce App Development Quote"
      />
    </div>
  );
};

export default EcommerceAppDevelopment;
