"use client";

import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Signs from "../ui/Signs";
import Services from "../ui/Services";
import DevelopmentApproach from "../ui/DevelopmentApproach";
import ToolsAndTech from "../ui/ToolsAndTech";
import Process from "../ui/Process";
import Bussiness from "../ui/Bussiness";
import Industries from "../ui/Industries";
import MobileApp from "../ui/MobileApp";
import SuccessStories from "../ui/SuccessStories";
import CTA from "../PaidAdsServices/CTA";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";

import {
  FiCompass,
  FiTrendingUp,
  FiActivity,
  FiUsers,
  FiCpu,
  FiDollarSign,
  FiBarChart
} from "react-icons/fi";

import {
  SiGoogleanalytics,
  SiHubspot,
  SiGoogleads,
  SiMeta,
  SiLinkedin,
  SiSemrush,
  SiSalesforce,
  SiZapier,
  SiGoogletagmanager
} from "react-icons/si";

import { FaChartLine } from "react-icons/fa6";

const signsItems = [
  {
    title: "Stagnant or Declining Revenue Growth",
    desc: "You have hit a revenue plateau and your current acquisition channels are failing to deliver the scale or consistency needed to meet your commercial targets.",
  },
  {
    title: "High Customer Acquisition Costs (CAC)",
    desc: "You are investing heavily in marketing and sales, but the cost of acquiring a customer is eroding your profit margins and yielding low lifetime value.",
  },
  {
    title: "Inefficient Sales & Marketing Funnels",
    desc: "Your website and marketing channels are generating interest, but prospects are dropping off before converting, indicating gaps in your conversion path.",
  },
  {
    title: "Lack of Clear Scaling Strategy",
    desc: "Your team is busy, but without a documented growth framework, resource allocation becomes chaotic and scaling efforts lack strategic direction.",
  },
  {
    title: "Outdated or Fragmented Technology",
    desc: "Your operations rely on disparate, legacy systems that do not integrate, leading to manual errors, delays, and a fragmented view of customer data.",
  },
  {
    title: "Weak Brand Positioning & Authority",
    desc: "Your products are excellent, but your target audience does not perceive your brand as a market leader, leading to price sensitivity and lost deals.",
  },
];

const growthServices = [
  {
    title: "Market Entry & Expansion Strategy",
    description: "We analyze market trends, demographics, and competitive landscapes to help your business successfully enter new markets or launch new products.",
    icon: "ddd1",
    icon2: "ddd11",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "We audit your user experience, messaging, and conversion funnels to identify drop-off points and implement design changes that increase conversions.",
    icon: "ddd2",
    icon2: "ddd22",
  },
  {
    title: "Sales & Marketing Alignment",
    description: "We help you align your sales and marketing teams around a single source of truth, ensuring cohesive messaging and shorter sales cycles.",
    icon: "ddd3",
    icon2: "ddd33",
  },
  {
    title: "Operational & Process Optimization",
    description: "We analyze your internal workflows and systems to eliminate redundancies, automate manual tasks, and improve overall operational efficiency.",
    icon: "ddd4",
    icon2: "ddd44",
  },
  {
    title: "Brand Positioning & Authority",
    description: "We refine your brand identity, value proposition, and messaging to differentiate your business from competitors and build long-term market credibility.",
    icon: "ddd5",
    icon2: "ddd55",
  },
  {
    title: "Digital Transformation & Tech Consulting",
    description: "We assess your current technology stack and recommend scalable, modern solutions that integrate seamlessly and reduce overhead costs.",
    icon: "ddd6",
    icon2: "ddd66",
  },
];

const devApproachItems = [
  {
    title: "Data-Driven Diagnostics",
    description: "We begin by collecting and analyzing your business data, from Google Analytics to sales reports, to understand benchmarks and identify bottlenecks.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.5312 0C33.7445 0 25 8.74453 25 19.5312V0H0V5.46875C0 16.2555 8.74453 25 19.5312 25H0V50H5.46875C16.2555 50 25 41.2555 25 30.4688V50H50V44.5312C50 33.7445 41.2555 25 30.4688 25H50V0H44.5312Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Custom Growth Strategy",
    description: "We design a customized growth roadmap containing clear milestones, KPIs, and actionable steps tailored to your industry and business goals.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.46875 0C16.2555 0 25 8.74453 25 19.5312C25 8.74453 33.7445 0 44.5312 0H50V30.4688C50 41.2555 41.2555 50 30.4688 50H19.5312C8.74453 50 0 41.2555 0 30.4688V0H5.46875Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Collaborative Implementation",
    description: "Our consultants work directly with your team to integrate new technologies, optimize conversion funnels, and execute scaling roadmaps.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 37.5V50H12.5977L6.25 43.5547L0 37.5V25H12.5L25 37.5ZM50 37.5V50H37.5977L31.25 43.5547L25 37.5V25H37.5L50 37.5ZM25 12.5V25H12.5977L6.25 18.5547L0 12.5V0H12.5L25 12.5ZM50 12.5V25H37.5977L31.25 18.5547L25 12.5V0H37.5L50 12.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Continuous Optimization",
    description: "Growth is an iterative process. We continuously track performance, run tests, and refine strategies to ensure long-term, scalable success.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.75 31.25C47.2012 31.25 50 28.4512 50 25C50 21.5488 47.2012 18.75 43.75 18.75C40.2988 18.75 37.5 21.5488 37.5 25C37.5 28.4512 40.2988 31.25 43.75 31.25ZM25 31.25C28.4512 31.25 31.25 28.4512 31.25 25C31.25 21.5488 28.4512 18.75 25 18.75C21.5488 18.75 18.75 21.5488 18.75 25C18.75 28.4512 21.5488 31.25 25 31.25ZM6.25 31.25C9.70117 31.25 12.5 28.4512 12.5 25C12.5 21.5488 9.70117 18.75 6.25 18.75C2.79883 18.75 0 21.5488 0 25C0 28.4512 2.79883 31.25 6.25 31.25ZM43.75 50C47.2012 50 50 47.2012 50 43.75C50 40.2988 47.2012 37.5 43.75 37.5C40.2988 37.5 37.5 40.2988 37.5 43.75C37.5 47.2012 40.2988 50 43.75 50ZM25 50C28.4512 50 31.25 47.2012 31.25 43.75C31.25 40.2988 28.4512 37.5 25 37.5C21.5488 37.5 18.75 40.2988 18.75 43.75C18.75 47.2012 21.5488 50 25 50ZM6.25 50C9.70117 50 12.5 47.2012 12.5 43.75C12.5 40.2988 9.70117 37.5 6.25 37.5C2.79883 37.5 0 40.2988 0 43.75C0 47.2012 2.79883 50 6.25 50ZM43.75 12.5C47.2012 12.5 50 9.70117 50 6.25C50 2.79883 47.2012 0 43.75 0C40.2988 0 37.5 2.79883 37.5 6.25C37.5 9.70117 40.2988 12.5 43.75 12.5ZM25 12.5C28.4512 12.5 31.25 9.70117 31.25 6.25C31.25 2.79883 28.4512 0 25 0C21.5488 0 18.75 2.79883 18.75 6.25C18.75 9.70117 21.5488 12.5 25 12.5ZM6.25 12.5C9.70117 12.5 12.5 9.70117 12.5 6.25C12.5 2.79883 9.70117 0 6.25 0C2.79883 0 0 2.79883 0 6.25C0 9.70117 2.79883 12.5 6.25 12.5Z" fill="currentColor" />
      </svg>
    ),
  },
];

const toolsData = [
  { name: "Google Analytics 4", icon: <SiGoogleanalytics className="w-12 h-12 text-[#E37400]" /> },
  { name: "HubSpot", icon: <SiHubspot className="w-12 h-12 text-[#FF7A59]" /> },
  { name: "Google Ads", icon: <SiGoogleads className="w-12 h-12 text-[#F4B400]" /> },
  { name: "Meta Ads Manager", icon: <SiMeta className="w-12 h-12 text-[#0668E1]" /> },
  { name: "LinkedIn Ads", icon: <SiLinkedin className="w-12 h-12 text-[#0A66C2]" /> },
  { name: "SEMrush", icon: <SiSemrush className="w-12 h-12 text-[#FF642D]" /> },
  { name: "Salesforce", icon: <SiSalesforce className="w-12 h-12 text-[#00A1E0]" /> },
  { name: "Zapier", icon: <SiZapier className="w-12 h-12 text-[#FF4F00]" /> },
  { name: "Google Tag Manager", icon: <SiGoogletagmanager className="w-12 h-12 text-[#246FDB]" /> }
];

const growthProcess = [
  {
    step: "01",
    title: "Discovery & Business Audit",
    desc: "We examine your current operations, financials, marketing channels, and tech stack to establish performance benchmarks.",
  },
  {
    step: "02",
    title: "Competitor & Market Research",
    desc: "We analyze market trends, consumer behavior, and competitor strategies to identify untapped growth opportunities.",
  },
  {
    step: "03",
    title: "Roadmap & KPI Formulation",
    desc: "We create a detailed, step-by-step growth roadmap with clear key performance indicators and timelines.",
  },
  {
    step: "04",
    title: "Execution & Integration",
    desc: "We help your team implement the strategy, set up automation tools, optimize funnels, and launch campaigns.",
  },
  {
    step: "05",
    title: "A/B Testing & Optimization",
    desc: "We test different designs, landing pages, copy, and targeting strategies to find what delivers the highest conversion rate.",
  },
  {
    step: "06",
    title: "Scaling & Sustainable Growth",
    desc: "Once a channel or funnel is proven profitable, we scale budget and resources to maximize market share and sustainable revenue.",
  },
];

const whyChooseHighlights = [
  {
    icon: "/services/web-design/1.webp",
    number: "01",
    title: "Data-Driven Strategy",
    desc: "We remove guesswork from consulting. Every decision and recommendation we make is backed by thorough data analysis.",
  },
  {
    icon: "/services/web-design/2.webp",
    number: "02",
    title: "End-to-End Execution",
    desc: "We don't just hand over reports. Our team of developers, designers, and marketers help you execute every part of the plan.",
  },
  {
    icon: "/services/web-design/3.webp",
    number: "03",
    title: "Certified Industry Experts",
    desc: "Our consultants have managed scaling strategies and marketing budgets for startups and enterprises across various sectors.",
  },
  {
    icon: "/services/web-design/4.webp",
    number: "04",
    title: "Focus on Profitability & ROI",
    desc: "We prioritize driving profitable growth, reducing customer acquisition costs, and increasing lifetime value.",
  },
  {
    icon: "/services/web-design/5.webp",
    number: "05",
    title: "Flexible & Scalable Models",
    desc: "Our consulting engagements are designed to be flexible, adapting to your growth stages and operational needs over time.",
  },
  {
    icon: "/services/web-design/6.webp",
    number: "06",
    title: "Transparent Reporting",
    desc: "We provide detailed, regular performance reports keeping you informed of our progress, learnings, and next strategic steps.",
  },
];

const industriesValueProps = [
  {
    title: "Healthcare & Wellness",
    desc: "We help medical practices and wellness clinics optimize their patient acquisition paths, implement scheduling automation, and build online authority.",
  },
  {
    title: "E-commerce & Retail",
    desc: "Maximize online sales and store conversions. We audit checkout paths, optimize product page layouts, and implement cart abandonment automation.",
  },
  {
    title: "Real Estate",
    desc: "Generate highly qualified buyer and seller leads. We refine CRM flows, design landing pages, and optimize targeting for real estate agents and brokers.",
  },
  {
    title: "Education & EdTech",
    desc: "Increase course enrollments and platform sign-ups. We design conversion-focused landing pages, nurture leads through email, and optimize search rankings.",
  },
  {
    title: "SaaS & Technology",
    desc: "Scale your customer acquisition and reduce churn. We optimize onboarding funnels, refine product messaging, and implement lead scoring.",
  },
  {
    title: "Food & Restaurant Businesses",
    desc: "Attract local customers and boost online orders. We implement geo-targeted campaigns, design menu paths, and build local search visibility.",
  },
  {
    title: "Professional Services",
    desc: "Help consulting, legal, and financial firms generate high-value client inquiries, build thought leadership, and optimize lead generation.",
  },
  {
    title: "Matchmaking & Dating",
    desc: "Drive user registration and premium membership conversions. We design engagement loops, refine signup steps, and build user trust.",
  },
];

const mobileAppBenefits = [
  {
    title: "Clear Commercial Direction",
    desc: "Align your entire organization around a single, documented growth framework with clear, actionable milestones.",
    icon: <FiCompass color="#F15C20" size={25} />,
  },
  {
    title: "Optimized Marketing Efficiency",
    desc: "Reduce acquisition costs and increase return on investment by targeting the right audience with the right message.",
    icon: <FiTrendingUp color="#F15C20" size={25} />,
  },
  {
    title: "Enhanced Operational Efficiency",
    desc: "Streamline workflows, automate repetitive tasks, and eliminate redundancies to lower overhead costs.",
    icon: <FiActivity color="#F15C20" size={25} />,
  },
  {
    title: "Improved Customer Retention",
    desc: "Implement customer engagement and retention strategies that increase lifetime value and reduce churn rates.",
    icon: <FiUsers color="#F15C20" size={25} />,
  },
  {
    title: "Scalable Tech Infrastructure",
    desc: "Build a modern, integrated technology stack that supports your business growth without performance drops.",
    icon: <FiCpu color="#F15C20" size={25} />,
  },
  {
    title: "Higher Sales Conversion Rates",
    desc: "Turn more leads into paying customers by optimizing checkout flows, landing pages, and sales touchpoints.",
    icon: <FiDollarSign color="#F15C20" size={25} />,
  },
];

const testimonialsData = [
  {
    review: "Dignite Studios helped us identify critical bottlenecks in our checkout flow. Within three months, our website conversion rate increased by 22%.",
    name: "Robert Jenkins",
    designation: "COO, Zenith Tech Solutions"
  },
  {
    review: "The growth roadmap they created was incredibly detailed and easy to implement. It aligned our sales and marketing teams and reduced our CAC by 15%.",
    name: "Sarah Jenkins",
    designation: "Founder, Bloom Wellness"
  },
  {
    review: "Their consulting team doesn't just present decks; they helped us set up our HubSpot CRM and automate our email sequences. Truly an execution partner.",
    name: "David Miller",
    designation: "VP of Growth, CoreFlow SaaS"
  },
  {
    review: "Dignite Studios provided excellent market entry strategy when we expanded our services. Their insights saved us months of trial and error.",
    name: "Emily Watson",
    designation: "Marketing Director, Apex Logistics"
  },
  {
    review: "A professional, responsive, and highly analytical team. They gave us complete visibility into our marketing ROI and helped us scale profits.",
    name: "James Patel",
    designation: "Managing Director, Vista E-commerce"
  }
];

const faqsData = [
  {
    id: 1,
    question: "What is growth consulting and how does it help a business?",
    answer: "Growth consulting involves analyzing a company's sales, marketing, operations, and technology to identify inefficiencies and create a strategic plan to scale revenue. A growth consultant helps you optimize your funnels, lower acquisition costs, and build a sustainable growth strategy."
  },
  {
    id: 2,
    question: "How do you measure the success of a growth consulting engagement?",
    answer: "We track clear, commercial key performance indicators (KPIs) such as Customer Acquisition Cost (CAC), Customer Lifetime Value (LTV), Conversion Rate (CR), Monthly Recurring Revenue (MRR), and overall Return on Investment (ROI). These metrics are defined in the strategic planning phase."
  },
  {
    id: 3,
    question: "How long does it take to see results from growth consulting?",
    answer: "Some quick-win optimizations, such as fixing checkout bugs or refining landing page copy, can show results within weeks. However, scaling channels and executing a complete growth strategy usually takes 3 to 6 months to yield sustainable, compounding results."
  },
  {
    id: 4,
    question: "Do you help with executing the strategy or only provide advice?",
    answer: "We are an execution-focused agency. Beyond strategic consulting, our in-house team of designers, developers, and digital marketers help you set up CRMs, write email copy, build landing pages, implement analytics, and optimize search rankings."
  },
  {
    id: 5,
    question: "What industries do you specialize in?",
    answer: "We have successfully partnered with businesses across e-commerce, healthcare, real estate, SaaS, EdTech, food & hospitality, and professional services. Our core growth methodologies are adaptable and tailored to your specific industry dynamics."
  },
  {
    id: 6,
    question: "What is the difference between marketing consulting and growth consulting?",
    answer: "While marketing consulting focuses primarily on customer acquisition channels (like SEO or social media), growth consulting takes a holistic view of the entire customer journey, including product experience, operations, customer retention, sales funnels, and tech stack integrations."
  }
];

const GrowthAndConsultingServices = () => {
  return (
    <div className="max-w-screen-2xl mx-auto gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="Partner with Trusted Growth and"
        heading2="Business Consultants"
        para="For more than a decade, Dignite Studios has empowered businesses to navigate complex market dynamics and achieve sustainable growth. We believe that true growth requires more than just high-level advice; it demands a structured, executable strategy aligned with your target audience. Our team of consulting experts combines thorough market research, operational optimization, and growth methodologies to deliver measurable success. Whether you are a startup validating a concept or an established enterprise seeking to optimize your sales funnels, we provide the insights and tools required to drive efficiency and maximize profit."
        button="Talk to our Growth Strategy Team"
      />
      <Signs
        header="Is It Time to Partner with a Growth"
        header2="Consultant?"
        subtitle="Many businesses hit a plateau or struggle to scale without identifying the bottlenecks in their operations or marketing. Recognizing these warning signs early is key to pivoting towards profitability. Dignite Studios helps organizations identify and address these core issues before they impact long-term stability:"
        buttonText="Evaluate Your Business Model"
        items={signsItems}
      />
      <Services
        header="Types of Growth & Consulting Services We"
        header2="Provide"
        para="We offer comprehensive growth consulting tailored to your business model, target market, and strategic goals. From market analysis to technology optimization, we cover every aspect of scaling your business."
        button="Explore Our Growth Solutions"
        services={growthServices}
      />
      <DevelopmentApproach
        header="What Growth Methodology Do We"
        header2="Employ?"
        para="We follow a data-backed, systematic approach to consulting that prioritizes execution over theory. We don't just hand over a deck; we work alongside your team to implement strategies that drive growth."
        buttonText="Get a Free Business Audit"
        items={devApproachItems}
      />
      <ToolsAndTech
        header="Platforms & Analytics Tools We Use to Drive"
        header2="Growth"
        subtitle="We utilize industry-leading analytics, CRM, automation, and testing platforms to gather data, track metrics, and optimize campaigns for maximum efficiency."
        tools={toolsData}
      />
      <Process
        steps={growthProcess}
        header="How Our Growth Consulting Process Works"
        para="We follow a structured 6-step consulting process designed to take your business from discovery to scalable, sustainable growth."
      />
      <Bussiness
        header="Why Choose Dignite Studios for Growth"
        header2="Consulting?"
        button="Schedule a Strategy Call"
        para="Partner with an agency that measures success by your bottom line, not vanity metrics. We combine strategic consulting with technical execution to drive real results."
        bs={whyChooseHighlights}
      />
      <Industries
        header="Growth Consulting Solutions for Diverse"
        header2="Industries"
        para="We adapt our growth strategies to the unique challenges and opportunities of your industry. Here are the sectors we regularly partner with to scale operations:"
        VALUE_PROPOSITION={industriesValueProps}
        button="Discuss Your Industry Growth"
      />
      <MobileApp
        cards={mobileAppBenefits}
        header="The Business Value of Strategic Growth"
        header2="Consulting"
        para="Investing in professional growth consulting helps you make informed commercial decisions, eliminate operational waste, and accelerate your business growth."
        button="Scale Your Business With Us"
      />
      <SuccessStories
        header="Proven Success in Business Growth and"
        header2="Consulting"
        para="Explore how Dignite Studios has helped startups and established brands optimize their funnels, scale operations, and achieve sustainable revenue growth."
      />
      <CTA
        title={<>Ready to Accelerate Your <span className="text-[#F15C20]">Business Growth?</span></>}
        desc="Partner with Dignite Studios' growth and consulting experts. Get a customized growth roadmap and turn your website into a conversion machine."
        btnText="Claim Your Free Growth Strategy Session"
        btnLink="/contact-us"
        image="/services/mobile-cons/s-cta.webp"
      />
      <Testimonials
        header="What Business Leaders Say About Our"
        header2="Consulting"
        test={testimonialsData}
        para=""
      />
      <Faq faqs={faqsData} header="Growth Consulting" header2="FAQs" />
      <ContactUs
        img="/services/mobile-cons/s-cta.webp"
        pathname="Growth and Consulting Services"
        header="Ready to Scale Your Revenue?"
        para="Connect with our growth and consulting experts today. We'll analyze your current business model, identify bottlenecks, and build a custom strategy to unlock sustainable growth. Bonus: Get a free conversion audit of your website!"
        btn="Request Your Growth Strategy Call"
      />
    </div>
  );
};

export default GrowthAndConsultingServices;
