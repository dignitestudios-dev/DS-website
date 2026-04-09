import Hero from "./Hero";
import About from "../ui/About";
import Services from "../ui/Services";
import ConnectShopify from "./ConnectShopify";
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
  MdInventory,
} from "react-icons/md";
import Industries from "../ui/Industries";
import TechAndTools from "../ui/TechTools";
import Process from "../ui/Process";
import MobileApp from "../ui/MobileApp";
import { FaPencilAlt, FaUser } from "react-icons/fa";
import { IoGrid, IoWalletOutline, IoStorefrontOutline } from "react-icons/io5";
import { CiSearch, CiSettings } from "react-icons/ci";
import {
  SiGooglecloud,
  SiLaravel,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiZapier,
} from "react-icons/si";
import { FaCode, FaRobot, FaAws } from "react-icons/fa";
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
import IntegrationFeatures from "./IntegrationFeatures";
import TabularEcommerceTechs from "./TabularEcommerceTechs";

const services = [
  {
    icon: "icon",
    icon2: "icon4",
    title: "Marketplace Integrations",
    description: (
      <>
        Increase your reach by shopify marketplaces integration. We link to your
        store to Walmart, Amazon, eBay and Etsy
      </>
    ),
  },
  {
    icon: "cred",
    icon2: "cred1",
    title: "Payment Gateway Integrations",
    description: (
      <>
        Enable safe and smooth payments through the Shopify stripe Integration.
        Our team helps businesses integrate stripe with shopify so customers can
        pay securely. The stores receive fast payment processing and global
        currency support.
      </>
    ),
  },
  {
    icon: "db",
    icon2: "db1",
    title: "ERP & Accounting Integrations",
    description: (
      <>
        Simplify the financial operations through the QuickBooks Shopify
        Integration. Your store data syncs automatically with the accounting
        systems. Orders, invoices, and tax records stay accurate which also
        reduces manual bookkeeping work.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "Marketing & CRM Integrations",
    description: (
      <>
        Improve the customer engagement through the Shopify Stripe Integration.
        We use Shopify Hubspot integration to link the marketing campaigns
        through the consumer data. Companies also monitor client travels and
        send the custom made communications.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Shipping & Logistics Integrations",
    description: (
      <>
        Our integration connects Shopify Hubspot Integration with shipping
        providers and logistics platforms. Orders sync automatically and
        delivery tracking becomes a lot easier. This facilitates more effective
        fulfillment and shipping operations management for the organisations.
      </>
    ),
  },
  {
    icon: "sear",
    icon2: "sear1",
    title: "Analytics & Reporting Integrations",
    description: (
      <>
        We connect your store with analysis tools and QuickBooks shopify
        Integration so you can track sales trends and customer behaviour.
        Accurate reports help businesses improve marketing and make better
        growth decisions.
      </>
    ),
  },
];

const highlights = [
  {
    icon: "/ecommerce/woocommerce-app/bussiness/1.webp",
    title: "WooCommerce Focused Expertise",
    desc: "Our team focuses completely on WooCommerce. This experience helps us to build reliable stores, custom plugins and integrations which support business growth and smooth shopping experiences.",
  },
  {
    icon: "/ecommerce/shopify-integrate/2.webp",
    title: "Certified WooCommerce Developers",
    desc: "Our certified WooCommerce developers follow industry standards and best practices. They build secure stores, develop custom features and ensure stable performance for long-term business success.",
  },
  {
    icon: "/ecommerce/woocommerce-app/bussiness/3.webp",
    title: "Transparent Communication",
    desc: "We keep communication clear throughout the project. Our team shares progress updates and listens to feedback so every decision supports business goals.",
  },
  {
    icon: "/ecommerce/woocommerce-app/bussiness/4.webp",
    title: "On Time Delivery",
    desc: "Our structured workflow helps us complete projects on time. We plan every stage carefully so the WooCommerce store launches smoothly without delays or quality issues.",
  },
  {
    icon: "/ecommerce/shopify-integrate/5.webp",
    title: "Scalable & Secure Store Architecture",
    desc: "We design WooCommerce stores with strong architecture, ensuring your store remains secure, performs well under traffic, and easily scales as the business grows.",
  },
  {
    icon: "/ecommerce/woocommerce-app/bussiness/6.webp",
    title: "Long Term Store Support",
    desc: "After launch, we continue supporting your WooCommerce store. Our team provides updates, maintenance, performance checks and improvements to keep the store running smoothly.",
  },
];

const VALUE_PROPOSITION = [
  {
    title: "Healthcare and Wellness Commerce",
    desc: "We support the healthcare app development company needs by building apps. It improves the store operations and customer experience in healthcare commerce.",
  },
  {
    title: "Fintech and Subscription Platforms",
    desc: "We build apps aligned with fintech app development services. To manage subscriptions payments and user workflows efficiently.",
  },
  {
    title: "Ecommerce & Retail Brands",
    desc: "We support ecommerce app development company needs by building apps. It improves the store performance and customer engagement.",
  },
  {
    title: "Logistics & On Demand Marketplaces",
    desc: "We develop solutions for logistics app development to manage deliveries and workflow effectively.",
  },
];

const test = [
  {
    name: "John Carter",
    designation: "— Product Manager",
    review:
      "“Great experience working with the team they delivered exactly what we needed”",
  },
  {
    name: "Micheal Adams",
    designation: "— Ecommerce Manager",
    review:
      "“Their work improved our store performance and customer experience significantly”",
  },
  {
    name: "Daniel Smith",
    designation: "— Operations Lead",
    review:
      "“Professional team through the clear communication and the strong execution throughout the project”",
  },
  {
    name: "Robert Johnson",
    designation: "— Founder",
    review:
      "“They helped us build a scalable app that supports our growing business needs”",
  },
  {
    name: "David Wilson",
    designation: "— CEO",
    review:
      "“Reliable support and continuous improvements made a big difference for  our store”",
  },
  {
    name: "James Brown",
    designation: "— Project Manager",
    review:
      "“Their structured approach ensured smooth development and timely delivery”",
  },
  {
    name: "William Taylor",
    designation: "— Director",
    review:
      "“Highly recommended for businesses looking for strongly shopify app solutions”",
  },
  {
    name: "Christopher Moore",
    designation: "— CTO",
    review:
      "“ Excellent service with great attention to detail and performance we hire the shopify app developer to deliver the smooth and efficient solutions”",
  },
  {
    name: "Joseph Anderson",
    designation: "— Business Owner",
    review:
      "“Very responsive team and easy to work with throughout the project”",
  },
  {
    name: "Thomas Jackson",
    designation: "— Head of Ecommerce",
    review:
      "“Delivered a high quality app that improved our operations and customer engagement”",
  },
];

const BENEFITS = [
  {
    title: "Increased Customer Engagement",
    desc: "Mobile apps improve customer interaction and help businesses build stronger relationships with users across platforms.",
    icon: <FaUser color="#F15C20" size={25} />,
  },
  {
    title: "Faster Store Operations",
    desc: "Apps speed up processes and improve workflow efficiency for better store performance and user experience.",
    icon: <IoGrid color="#F15C20" size={25} />,
  },
  {
    title: "Business Automation",
    desc: "Automation helps reduce manual work, saves time and improves overall efficiency for growing ecommerce businesses.",
    icon: <IoWalletOutline color="#F15C20" size={25} />,
  },
  {
    title: "Revenue Growth",
    desc: "Apps help increase sales, improve conversions and support steady growth for your business over time.",
    icon: <CiSearch color="#F15C20" size={25} />,
  },
  {
    title: "Scalable Ecommerce Expansion",
    desc: "Our mobile app development services for ecommerce support business growth and expansion into new markets.",
    icon: <FaPencilAlt color="#F15C20" size={25} />,
  },
];

const faqs = [
  {
    id: 1,
    question: "What platforms and tools can be integrated with Shopify?",
    answer:
      "Shopify can be integrated with marketplaces, payment gateways, ERP systems, marketing tools and shipping platforms. These connections help to automate workflows, synchronize inventory and manage Ecommerce operations from a single interface saving the time and reducing errors for your business.",
  },
  {
    id: 2,
    question: "How long does a typical Shopify Integration Project take?",
    answer:
      "The timeline depends on the complexity and the number of systems involved. Basic integrations such as when you integrate stripe with shopify may also take a few days, while more advanced projects with the multiple platforms and custom workflows can also take several weeks to complete efficiently.",
  },
  {
    id: 3,
    question: "Will my existing store data remain secure during integration?",
    answer:
      "Yes. We follow strict security practices during all Shopify integrations. Customer information, order history and financial data are also protected through the sure transfer protocols, ensuring that the store data remains safe and fully confidential throughout the integration process.",
  },
  {
    id: 4,
    question: "Can Shopify integrations be customized for my specific business workflows?",
    answer:
      "Absolutely. Integrations can also be done according to your unique operational needs, allowing automation of processes, custom data flow and fluent connections between the Shopify and existing tools. This also ensures that workflow runs smoothly without any work or operational bottlenecks.",
  },
  {
    id: 5,
    question: "Do you provide ongoing support and maintenance after integration?",
    answer:
      "Yes. Our team monitors integrations after the deployment to ensure that they remain fully operational. We provide updates, troubleshooting and continuous support making sure all connected systems stay compatible with Shopify updates and your business processes.",
  },
  {
    id: 6,
    question: "How much does a Shopify Integration service typically cost?",
    answer:
      "Costs vary depending on the integration complexity, the number of platforms involved and any custom development required. After assessing your business requirements, we provide a clear detailed estimate to ensure transparency and align the project with your budget.",
  },
];
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation & Requirement Analysis",
    desc: "We analyze your business goals, workflows and the technical needs which identify the best shopify integration approach and tools that align with your operational requirements. ",
  },
  {
    step: "02",
    title: "Design",
    desc: "Our team designs the integration structure and prepares a clear system layout to ensure smooth platform connections",
  },
  {
    step: "03",
    title: "Planning",
    desc: "We create a detailed integration plan and select the right APIs and tools for the secure and scalable connections. ",
  },
  {
    step: "04",
    title: "Integration",
    desc: "Our developers connect Shopify with the selected platforms and configure systems to ensure the smooth communication and accurate data flow. ",
  },
  {
    step: "05",
    title: "Testing",
    desc: "We carefully test integration to confirm stable performance, correct data synchronization and reliable operation across connected platforms. ",
  },
  {
    step: "06",
    title: "Deployment & Monitoring",
    desc: "Integrations are implemented into your live shop after testing and our staff closely monitors them to ensure the reliable functioning, accurate data flow and system stability. ",
  },
  {
    step: "07",
    title: "Ongoing Support & Maintenance",
    desc: "Through platform and third party tool changes. We offer continuous monitoring, upgrades and technical help to maintain your Shopify Integrations safe, optimised and completely compatible. ",
  },
];

const typesOfApps = [
  {
    number: "01",
    title: "Customer Support and Engagement Apps",
    description:
      "We build apps which improve customer communication support. Faster responses and increased engagement. It creates better shopping experiences and stronger relationships.",
  },
  {
    number: "02",
    title: "Workflow Automation Apps",
    description:
      "We create apps which autotune the daily store tasks. Reduce the manual work and improve the overall business efficiency for the better operations.",
  },
  {
    number: "03",
    title: "Inventory and Order Management Apps",
    description:
      "We develop apps that manage inventory track orders. Reduce the errors to improve the store operations and the customer satisfaction.",
  },
  {
    number: "04",
    title: "Custom pricing and Marketing Apps",
    description:
      "We build apps that help manage the pricing of offers, promotions and campaigns. It increases sales and customer retention.",
  },
  {
    number: "05",
    title: "Cart and Checkout Enhancement Apps",
    description:
      "We improve cart and checkout experience to reduce the drop offs. Increasing the conversions for better store performance.",
  },
  {
    number: "06",
    title: "SEO and Performance Optimization Apps",
    description:
      "We develop apps that improve the store speed, visibility and performance. To help the businesses to grow online and reach more customers.",
  },
];

const featureData = [
  {
    title: "Secure Login and Authentication",
    icon: <MdSecurity />,
  },
  {
    title: "Real time Order Sync",
    icon: <MdSync />,
  },
  {
    title: "Push Notifications",
    icon: <MdNotificationsActive />,
  },
  {
    title: "Automation Workflows",
    icon: <MdSettingsSuggest />,
  },
  {
    title: "Analytics and Reporting",
    icon: <MdAnalytics />,
  },
  {
    title: "Multi Payment Integration",
    icon: <MdAccountBalanceWallet />,
  },
  {
    title: "User Friendly Dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Inventory Management System",
    icon: <MdInventory />,
  },
];

const techStackData = [
  {
    name: "Shopify Native",
    icon: <IoStorefrontOutline />,
    description:
      "We use the Shopify APIs Admin and Storefront tools to build scalable apps. Explore our Shopify Development Page.",
  },
  {
    name: "React Native",
    icon: <FaCode />,
    description:
      "We build high performance app interfaces and logic. Learn more on our Web App Development Page.",
  },
  {
    name: "Node js",
    icon: <SiNodedotjs />,
    description:
      "We use the Node js to build fast and scalable backend systems for the shopify apps.",
  },
  {
    name: "Laravel",
    icon: <SiLaravel />,
    description:
      "We build secure backend systems using Laravel. Visit our Backend Development Page for more details.",
  },
  {
    name: "PHP",
    icon: <SiPhp />,
    description:
      "We use PHP to create stable and scalable backend systems for the shopify applications.",
  },
  {
    name: "OpenAI APIs",
    icon: <SiOpenai />,
    description:
      "We use the smart integrations to improve the workflows and automate the store operations for better performance.",
  },
  {
    name: "AWS AI Services",
    icon: <FaAws />,
    description:
      "We use the cloud tools to build scalable and secure systems for the reliable shopify app performance.",
  },
  {
    name: "ChatGPT",
    icon: <FaRobot />,
    description:
      "We use the modern tools to improve the workflows and create better user experience in Shopify apps.",
  },
  {
    name: "Zapier",
    icon: <SiZapier />,
    description:
      "We connect apps and automate workflows to simplify operations and improve productivity across the systems.",
  },
  {
    name: "Google AI Tools",
    icon: <SiGooglecloud />,
    description:
      "We use the advanced tools to improve app performance and support better decision making for the businesses.",
  },
];

const ShopifyIntegrationDevelopment = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero
        header="Shopify Integration Services for Seamless "
        header2="Ecommerce Growth"
        para="Empower your online store with the powerful Shopify Integration Services that connect your store through the marketplaces, payment gateways, ERP systems and marketing tools. These integrations automate workflows, reduce the manual tasks, improve the reporting and create the smooth customer shopping experience.   "
        btn="Get Your Free Consultation "
      />
      <About
        heading="Why Your Store Needs"
        heading2={" Shopify Integration "}
        para={
          <>
            Running an online store requires many tools working together. With
            over 10 years of experience, Dignite Studios delivers the reliable
            Shopify Integration Services that connect your store with the
            important business systems. Without any proper integrations
            businesses face problems through the inventory mismatch, delayed
            order updates, manual reports and slow operations. These issues
            might affect customer experience and sales performance. Our team
            helps businesses connect Shopify with marketplaces, payment
            gateways, marketing tools and the accounting systems. Automation
            data flow also helps businesses make faster decisions. As the
            trusted Shopify Integration company, we also ensure your store works
            quite smoothly with the tools that your business already uses.
          </>
        }
        button="Get a Free Consultation"
      />
      <Services
        services={services}
        header={"Our Shopify Integration"}
        header2={"Services"}
        button={"Get Free Shopify Integration Consultation "}
        para={
          "Our Shopify Integration Company connects the online store through the store platforms to simplify the operations and improve the better performance. As an experienced Shopify integration company, we ensure the secure connections between marketplaces, accounting tools, payment systems and marketing platforms so your store runs quite smoothly and also grows faster. "
        }
      />
      <CTA
        header="Ready to Connect Shopify With Your Business Tools?"
        para="Our professionals assist companies in integrating Shopify with payment systems, marketing platforms, accounting software and marketplaces. These interfaces guarantee precise data synchronisation between systems and increase the operational productivity. "
        btn="Book a Free Shopify Integration Call "
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industries We Serve for"}
        header2={"Shopify Integration Services"}
        para={
          "Simplifying operations many industries rely on Hubspot Shopify Integration to simplify operations and improve customer experiences. Our team works with the startups and established companies which build reliable Ecommerce integrations which support smooth data flow and business growth. "
        }
        button={"Discuss Your Idea "}
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Our Shopify Integration Process "}
        para={
          "Our integration process ensures stable and reliable Hubspot Shopify Integration for businesses. As one of the providers of Shopify Marketplace, we follow a structured workflow that connects platforms secretly and ensures smooth data flow between systems. "
        }
      />

      <CTA2
        header={"Start Your Shopify Integration Project Today "}
        para={
          "Use the professional Shopify Integration Services to link the Shopify with marketing tools, ERP systems and payment gateways. These interfaces streamline the processes, cut down on the human labour and assist companies in running their online store quite more effectively. "
        }
        btn={"Consult a Shopify Integration Specialist   "}
      />
      
      <Bussiness
        bs={highlights}
        header={"Why Choose Our Best Shopify"}
        header2={"Integration Services"}
        button={"Partner With Dignite Studios "}
        ctaHeader={"Partner With Dignite Studios."}
        ctaPara={
          "Dignite Studios delivers the best shopify services. It helps businesses grow with reliable and scalable solutions. As the trusted company we focus on the performance and long term value which is unlike many generic providers."
        }
        ctaBtn={"Partner With Dignite Studios."}
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
                  Partner With Dignite Studios.
                </h2>
                <p>
                  Dignite Studios delivers the best shopify services. It helps
                  businesses grow with reliable and scalable solutions. As the
                  trusted company we focus on the performance and long term
                  value which is unlike many generic providers.
                </p>
                <Link
                  href="/contact-us"
                  className="flex items-center group justify-center "
                >
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white  text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                    Partner With Dignite Studios.
                  </button>
                  <button className="bg-white text-orange-600 group-hover:bg-orange-600  group-hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                    <MdArrowOutward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        }
        para={
          <>
            Dignite Studios delivers the best shopify services. It helps
            businesses grow with reliable and scalable solutions. As the trusted
            company we focus on the performance and long term value which is
            unlike many generic providers.
          </>
        }
      />
      <ConnectShopify />
      {/* <TechTools
        header="Advanced Shopify App Development Technology Stack"
        para="As the trusted shopify app development company we use modern tools. For building scalable and secure apps. Our approach places us among the leading shopify app development companies. Delivering the reliable mobile app development services for ecommerce businesses. The strong performance and the long term growth."
        tech={techStackData}
      /> */}
      <TabularEcommerceTechs/>
      <IntegrationFeatures />
      <Faq faqs={faqs} />
      <ContactUs
        img={"/ecommerce/shopify-app/c-img.webp"}
        pathname={"Shopify Integration Development"}
        header={"Launch Your Shopify Integration Now"}
        header2={""}
        para={
          "Tell us about your integration needs and our experts will help you to connect shopify with the right tools to streamline the operations, automate workflows and boost the online store performance. "
        }
        btn={"Connect With Shopify Experts"}
      />
    </div>
  );
};

export default ShopifyIntegrationDevelopment;
