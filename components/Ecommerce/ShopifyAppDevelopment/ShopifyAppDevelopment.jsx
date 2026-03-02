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

const services = [
  {
    icon: "database",
    icon2: "database1",
    title: "Shopify App Development",
    description: (
      <>
        We build reliable apps that improve the store performance and support
        growth. It delivers the fluent user experience for the modern ecommerce
        business.
      </>
    ),
  },
  {
    icon: "setting",
    icon2: "setting2",
    title: "Shopify App UI/UX Design",
    description: (
      <>
        We design simple interfaces which improve the user experience. It makes
        the navigation smooth for better engagement and higher conversions.
      </>
    ),
  },
  {
    icon: "pipe",
    icon2: "pipe3",
    title: "Feature Development and Customization",
    description: (
      <>
        We create the custom features which match business needs and improve
        store functionality through better performance and flexibility.
      </>
    ),
  },
  {
    icon: "icon",
    icon2: "icon4",
    title: "Shopify API and Third Party Integrations",
    description: (
      <>
        We connect your store with the tools and platforms to improve the
        workflows and simplify operations using our shopify app development
        solutions.
      </>
    ),
  },
  {
    icon: "pen",
    icon2: "pen5",
    title: "Shopify Backend and Cloud Integration",
    description: (
      <>
        We build secure backend systems which support stable performance and
        scalable app operations as the reliable shopify app development
        solutions for the growing ecommerce businesses.
      </>
    ),
  },
  {
    icon: "chat",
    icon2: "chat6",
    title: "App Maintenance and Ongoing Support",
    description: (
      <>
        We provide ongoing support to keep your app updated, stable and aligned
        according to your business growth needs.
      </>
    ),
  },
];

const highlights = [
  {
    title: "Shopify Focused Expertise",
    desc: "We focus only on the shopify which helps us deliver better results and deeper platform understanding.",
  },
  {
    title: "Certified Shopify Developers",
    desc: "We focus only on the shopify which helps us deliver better results. Through the deeper platform understanding.",
  },
  {
    title: "Scalable and Secure App Architecture",
    desc: "We build apps that grow with your business and keep your data safe and secure always.",
  },
  {
    title: "Transparent Communication",
    desc: "We keep communication clear so you always understand your project progress and the final results clearly.",
  },
  {
    title: "On Time Delivery",
    desc: "We follow the clear steps to complete your project on time. Without any delays or issues.",
  },
  {
    title: "Long Term App Support",
    desc: "We provide continuous support to keep your app updated and aligned through the business needs.",
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
    question: "Do you build scalable Shopify apps?",
    answer:
      "Yes we build scalable apps that grow with your business and improve store performance over the time. Hire shopify app developer to focus on the strong structure flexibility and easy updates. This also helps ecommerce businesses manage more users, handle data efficiently and add new features without affecting any speed or the user experience.",
  },
  {
    id: 2,
    question:
      "How long does a Shopify app development in USA take to complete a project?",
    answer:
      "The timeline for a project handled by the Shopify project depends on the app’s complexity and required features. Simple apps can be completed within a few weeks, while the advanced apps through the custom integrations, multiple functionalities and unique designs would also take several months which ensure the quality, scalability and the fluent performance.",
  },
  {
    id: 3,
    question: "Do you support Shopify App store submissions?",
    answer:
      "Yes we support shopify App store submissions from start to finish. We prepare your app based on shopify guidelines. Ensure all the requirements are quite properly met. Our team also helps with the testing documentation and updates. So that your app can get approved easily and launch without any hassle, delays or technical issues.",
  },
  {
    id: 4,
    question: "Can a custom shopify app developer refine my shopify app idea?",
    answer:
      "Yes a custom shopify app developer can refine your shopify app idea. Through understanding your business goals and the user needs. They also suggest the better features to improve the structure and guide with the practical solutions. This creates a clear direction to improve usability and ensure your app delivery,strong performance and long term value.",
  },
  {
    id: 5,
    question: "Why should I hire Shopify app developer for my business?",
    answer:
      "When you hire shopify app developer you need expert support to build reliable and scalable apps. A skilled developer understands your store needs and creates solutions which improve performance and user experience. It helps your business grow faster. Keeping the operations simple, efficient and easy to manage over time.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery and Shopify App Planning",
    desc: "As the shopify app development agency, understand your business goals and define a clear plan. For building shopify apps with the shopify services.",
  },
  {
    step: "02",
    title: "Design",
    desc: "We create simple and user friendly designs. It improves engagement and user experience over digital as the shopify app development agency.",
  },
  {
    step: "03",
    title: "App Development",
    desc: "We build scalable apps using the structured development methods. It ensures the performance and stability for custom shopify app development.",
  },
  {
    step: "04",
    title: "Testing",
    desc: "We test apps carefully to ensure strong, smooth and reliable performance for the interactive user experience.",
  },
  {
    step: "05",
    title: "Shopify App Development",
    desc: "We launch apps through the proper setup to ensure stable performance and smooth operations.",
  },
  {
    step: "06",
    title: "Post Launch Support and Optimization",
    desc: "We track and improve app performance to ensure long term success and stable reliable results for the custom shopify app development.",
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

const ShopifyAppDevelopment = () => {
  return (
    <div className="max-w-screen-2xl gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero
        header="Flexible Shopify App Development "
        header2="Specialists"
        para="We deliver reliable shopify app development that helps businesses. Build scalable ecommerce solutions. Our team creates simple and effective apps. It improves the store performance support. Giving the growth and delivering the real business value for the modern online brands."
        btn="Get Free Shopify App Consultation"
      />
      <About
        heading="Introduction"
        heading2={""}
        para="With over 10 years of experience Dignite Studios provides the reliable shopify services. For growing ecommerce businesses. We build the public apps, private apps and the Custom Integrations. It improves the store performance and the user experience. 
Our team works with the startups and the large brands. Across the retail DTC and marketplaces. As the trusted agency we focus on scalable solutions. It supports long term growth and operations."
        button="Talk With Us"
      />
      <Services
        services={services}
        header={"Shopify App Development"}
        header2={"Services"}
        button={" Start Your Shopify App Project "}
        para={
          "Our shopify app development services are made to match the business needs. We build scalable apps which improve store performance and user experience. We deliver the solutions that grow with your business and support long term success."
        }
      />
      <WhyChoose
        features={typesOfApps}
        header={"Types Of Shopify Apps We Build for"}
        header2={"Scalable Ecommerce Growth"}
        para={
          "We built apps that help businesses manage operations. Improve the customer experience and increase sales. Our approach focuses on practical solutions. It supports the real business needs and the long term growth."
        }
      />
      <TechTools
        header="Advanced Shopify App Development Technology Stack"
        para="As the trusted shopify app development company we use modern tools. For building scalable and secure apps. Our approach places us among the leading shopify app development companies. Delivering the reliable mobile app development services for ecommerce businesses. The strong performance and the long term growth."
        tech={techStackData}
      />
      <CTA
        header="Get Started with Your Shopify App"
        para="Build scalable ecommerce apps that support your growth and improve the store performance. Our shopify services help you create reliable apps. It delivers real results and the long term value for the business."
        btn="Request Shopify App Development Quote"
      />
      <Process
        steps={PROCESS_STEPS}
        header={"Reliable Custom Shopify App Development Process"}
        para={
          "Our process focuses on the clear execution and measurable results. As the trusted shopify app development company. We build reliable solutions that improve performance and support long term growth."
        }
      />
      <Bussiness
        bs={highlights}
        header={"Reasons to Trust Our"}
        header2={"Shopify App Expertise"}
        button={"Partner With Dignite Studios. "}
        ctaHeader={"Partner With Dignite Studios."}
        ctaPara={
          "Dignite Studios delivers the best shopify services. It helps businesses grow with reliable and scalable solutions. As the trusted company we focus on the performance and long term value which is unlike many generic providers."
        }
        ctaBtn={"Partner With Dignite Studios."}
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
            Dignite Studios focuses on building reliable, scalable products for
            businesses that value long-term impact. For companies seeking
            dependable mobile apps development Boston teams, we bring structure,
            experience, and a clear delivery process to every engagement.
          </>
        }
      />
      <Industries
        VALUE_PROPOSITION={VALUE_PROPOSITION}
        header={"Industries We Serve as a"}
        header2={"Leading Agency"}
        para={
          "We work with multiple industries and deliver practical solutions which improve the operations and support business growth."
        }
      />

      <MobileApp
        header={"Benefits of Having a"}
        header2={"Shopify Mobile App"}
        para={
          "A shopify mobile app helps businesses improve engagement, automate operations and increase revenue. Our approach to mobile app development services for ecommerce ensures scalable growth and better performance across the platforms."
        }
        cards={BENEFITS}
      />
      <Features
        header="Must Have Features in Shopify"
        header2="App Development Cost"
        para="Modern apps require essential features that improve performance and user experience. Considering the shopify app development cost helps ensure that your app includes everything. It’s needed for growth, scalability and efficient operation. While keeping the budget and value aligned with your business goals."
        features={featureData}
      />
      <SuccessStories
        header={"Successful Shopify"}
        header2={"App Project"}
        para={
          "We have delivered successful Shopify apps that improved store performance and business growth. Our projects show how structured app solutions help businesses scale efficiently. Explore more on our Portfolio Case Studies page."
        }
      />
      <CTA2
        header={"Ready to Scale with Expert Shopify Solutions?"}
        para={
          "Take your eCommerce store to the next level with our tailored shopify app development services designed to boost performance, streamline operations, and enhance customer experience."
        }
        btn={"Request Shopify App Development Quote"}
      />
      {/* <SEO  header={"Focused Mobile Application Development Boston"} para={"Choosing the right partner in Boston can completely change the way your app performs in a competitive market."}/> */}
      <Testimonials
        test={test}
        header={"What Shopify App Development"}
        header2={"Clients Say"}
        para={""}
      />
      <Faq faqs={faqs} />
      <ContactUs
        img={"/ecommerce/shopify-app/c-img.png"}
        pathname={"Shopify App Development"}
        header={"Request Shopify App Quote"}
        header2={""}
        para={
          "Share your app idea with us and we will help you to build the scalable solutions that supports your business growth and improves the store performance through the reliable execution."
        }
        btn={"Request Shopify App Development Quote"}
      />
    </div>
  );
};

export default ShopifyAppDevelopment;
