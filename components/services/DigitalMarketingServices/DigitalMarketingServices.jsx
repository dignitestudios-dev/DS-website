"use client";
import React from "react";
import Hero from "./Hero";
import About from "../ui/About";
import Challenges from "../ui/Challenges";
import Services from "../ui/Services";
import ToolsAndTech from "../ui/ToolsAndTech";
import Process from "../ui/Process";
import Bussiness from "../ui/Bussiness";
import Industries from "../ui/Industries";
import MobileApp from "../ui/MobileApp";
import SuccessStories from "../ui/SuccessStories";
import CenteredCTA from "../ui/CenteredCTA";
import Testimonials from "../ui/Testimonials";
import Faq from "../ui/Faq";
import ContactUs from "../ui/ContactUs";
import { FiAlertTriangle, FiEye, FiFilter, FiTrendingUp, FiUsers, FiDollarSign, FiBarChart } from "react-icons/fi";

import {
  SiGoogleanalytics, SiGoogle, SiGoogleads, SiMeta, SiLinkedin,
  SiSemrush, SiHubspot, SiMailchimp, SiGoogletagmanager
} from "react-icons/si";
import { FaChartLine } from "react-icons/fa";

const servicesData = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "The top digital marketing experts can optimize your website’s structure resulting in improving your search visibility. Reach customers that are really searching for your services and products online.",
    icon: "ddd1", icon2: "ddd11"
  },
  {
    title: "Social Media Marketing",
    description: "We’d build a strong presence on social platforms being the best digital marketing company for small business. We’d create targeted campaigns that increase brand awareness.",
    icon: "ddd2", icon2: "ddd22"
  },
  {
    title: "Content Marketing",
    description: "The team would create strategic content marketing plans. These strategies only attract the right audience. While positioning your brand as an experienced authority in your industry.",
    icon: "ddd3", icon2: "ddd33"
  },
  {
    title: "Email Marketing & Automations",
    description: "The experts create email marketing campaigns with the custom digital marketing strategy for local business. The right email marketing would connect you with your audience.",
    icon: "ddd4", icon2: "ddd44"
  },
  {
    title: "Conversion Rate Optimization",
    description: "The analysis is done through the digital marketing audit services. How users interact with your website. We optimize the user experience to guide visitors toward action.",
    icon: "ddd5", icon2: "ddd55"
  },
  {
    title: "Online Reputation Management",
    description: "We strengthen your brand reputation by building a positive online presence. It influences how potential customers perceive your business across search engines.",
    icon: "ddd6", icon2: "ddd66"
  }
];

const challengesData = [
  {
    num: "01",
    badge: "CHALLENGE",
    title: "Reaching the Wrong Audience",
    challengeDesc: "Generating website traffic is important. But traffic is not conversion. Many businesses attract visitors who have little interest in their products or services.",
    solutionDesc: "Being a digital marketing expert, we’d offer targeted lead generation strategies that focus on attracting prospects with genuine purchase intent.",
    icon: FiAlertTriangle,
  },
  {
    num: "02",
    badge: "CHALLENGE",
    title: "Reducing Profit Due to High Acquisition Costs",
    challengeDesc: "Your heavy investment in marketing campaigns might affect your profit. The cost of converting a prospect is way higher than it should be.",
    solutionDesc: "We identify the shortcomings in your marketing funnel. We’d then reduce acquisition costs by refining audience targeting and allocating budgets strategically.",
    icon: FiAlertTriangle,
  },
  {
    num: "03",
    badge: "CHALLENGE",
    title: "Low Website Conversion Rates",
    challengeDesc: "The issue arises when the website attracts visitors. But they leave without taking action like completing purchases or filling out forms.",
    solutionDesc: "We improve conversion paths and landing pages. By refining messaging to encourage more actions. This is what is going twebsite visitors into paying customers.",
    icon: FiAlertTriangle,
  },
  {
    num: "04",
    badge: "CHALLENGE",
    title: "Struggling to Appear on Google",
    challengeDesc: "Your ideal customers are probably out there actively searching for products or services like yours online. But you’re not on top of the search engine results.",
    solutionDesc: "The team would offer SEO strategies that increase search rankings. It strengthens your online visibility by optimizing your website structure and your technical SEO performance.",
    icon: FiAlertTriangle,
  },
  {
    num: "05",
    badge: "CHALLENGE",
    title: "Inconsistent Marketing Performance",
    challengeDesc: "Your marketing results fluctuate every month. And it’s difficult to predict outcomes or plan budgets. This inconsistency comes from a lack of strategy.",
    solutionDesc: "The digital marketing strategy consultant create data driven marketing strategies by analyzing results regularly and refining campaigns based on data.",
    icon: FiAlertTriangle,
  },
  {
    num: "06",
    badge: "CHALLENGE",
    title: "Untracked Marketing Results and ROI",
    challengeDesc: "It becomes difficult to understand which marketing efforts are actually bringing results without proper tracking. This lack of clarity leads to inappropriate budget allocation.",
    solutionDesc: "We add attribution tracking that give you complete visibility into performance. This allows you to clearly measure ROI that improves marketing efficiency.",
    icon: FiAlertTriangle,
  },
];

const toolsData = [
  { name: "Google Analytics 4", icon: <SiGoogleanalytics className="w-12 h-12 text-[#E37400]" /> },
  { name: "Google Search Console", icon: <SiGoogle className="w-12 h-12 text-[#4285F4]" /> },
  { name: "Google Ads", icon: <SiGoogleads className="w-12 h-12 text-[#F4B400]" /> },
  { name: "Meta Ads Manager", icon: <SiMeta className="w-12 h-12 text-[#0668E1]" /> },
  { name: "LinkedIn Ads", icon: <SiLinkedin className="w-12 h-12 text-[#0A66C2]" /> },
  { name: "SEMrush", icon: <SiSemrush className="w-12 h-12 text-[#FF642D]" /> },
  { name: "Ahrefs", icon: <FaChartLine className="w-12 h-12 text-[#FF9900]" /> },
  { name: "HubSpot", icon: <SiHubspot className="w-12 h-12 text-[#FF7A59]" /> },
  { name: "Mailchimp", icon: <SiMailchimp className="w-12 h-12 text-[#241C15]" /> },
  { name: "Google Tag Manager", icon: <SiGoogletagmanager className="w-12 h-12 text-[#246FDB]" /> }
];

const processSteps = [
  {
    step: "01",
    title: "Brand Audit & Market Research",
    desc: "Every successful marketing strategy starts with a clear understanding of where your business stands. We do the analysis to uncover valuable insights."
  },
  {
    step: "02",
    title: "Digital Marketing Strategy Planning",
    desc: "We are experts at creating strategy customized to your goals and industry. This includes defining KPIs and a lot more."
  },
  {
    step: "03",
    title: "Campaign Development",
    desc: "Our campaigns are focused on generating qualified leads and maximizing engagement. Whether it’s through targeted ads or social content."
  },
  {
    step: "04",
    title: "Implementation & Optimization",
    desc: "Once launched we continuously monitor and refine campaigns based on real time data. Regular adjustments make sure that the performance stays optimal."
  },
  {
    step: "05",
    title: "Performance Tracking & Analytics",
    desc: "Understanding what works and what needs improvement is successful marketing. We continuously monitor everything using advanced analytics tools."
  },
  {
    step: "06",
    title: "Optimization & Growth Scaling",
    desc: "Marketing is never a one time effort. We continuously refine campaigns. This ongoing process creates a scalable foundation for sustainable business growth."
  }
];

const bussinessData = [
  {
    icon: "/services/digital/01.webp",
    number: "01",
    title: "Data Driven Marketing Strategies",
    desc: "Successful marketing starts with the right digital marketing strategy services. Professional digital marketing strategy consultant use customer insights to guide every strategy at Dignite Studios."
  },
  {
    icon: "/services/digital/02.webp",
    number: "02",
    title: "Proven Campaign Success Frameworks",
    desc: "Our campaigns are built on frameworks created through years of experience. We help businesses create a more predictable path by continuously refining our approach."
  },
  {
    icon: "/services/digital/03.webp",
    number: "03",
    title: "Multi Channel Marketing Expertise",
    desc: "Customers interact with brands across multiple platforms. That is why we take a connected marketing approach. We create cohesive strategies that improve performance."
  },
  {
    icon: "/services/digital/04.webp",
    number: "04",
    title: "Dedicated Marketing Specialists",
    desc: "We bring together experienced specialists who work closely with clients. To ensure every campaign is aligned with growth objectives."
  },
  {
    icon: "/services/digital/05.webp",
    number: "05",
    title: "Scalable Growth Solutions",
    desc: "Every business has different growth stages. So the team would develop flexible marketing strategies that can adapt as your business evolves."
  },
  {
    icon: "/services/digital/06.webp",
    number: "06",
    title: "Continuous Optimization & Reporting",
    desc: "We are the expert digital marketing company for small business. So, the team at Dignite Studios continuously analyze campaign performance while looking for opportunities to improve results."
  }
];

const industriesData = [
  {
    title: "Healthcare & Wellness",
    desc: "We create digital marketing strategy for healthcare. It attracts qualified leads and supports sustainable growth for healthcare providers."
  },
  {
    title: "E-commerce",
    desc: "Our e-commerce marketing strategies help brands attract high intent shoppers and increase online sales. Also it helps maximizing return on investment."
  },
  {
    title: "Real Estate",
    desc: "We know how to deal with real estate businesses to generate quality leads. Through campaigns designed to support long term growth."
  },
  {
    title: "Education & EdTech",
    desc: "We offer digital marketing strategy services that increase enrollment. That too on different digital channels while supporting growth objectives."
  },
  {
    title: "Travel & Hospitality",
    desc: "We can help with travel and hospitality by conducting digital marketing strategy audit brands that increase bookings through targeted campaigns. It highlights experiences."
  },
  {
    title: "Food & Restaurant Businesses",
    desc: "Our digital marketing strategy services work for food businesses to attract more customers. Through location focused digital campaigns."
  },
  {
    title: "SaaS & Technology",
    desc: "We create marketing strategies for SaaS that support customer acquisition while helping brands scale in competitive digital markets."
  },
  {
    title: "Matchmaking & Dating",
    desc: "We help by attracting the right audience and increasing membership inquiries. After running a digital marketing strategy audit we create campaigns that attract the right audience."
  }
];

const mobileAppCards = [
  {
    title: "Increased Online Visibility",
    desc: "A strong digital marketing strategy means your business appears where your audience is actively searching. You can attract more potential customers by improving search visibility.",
    icon: <FiEye size={25} />
  },
  {
    title: "Higher Quality Lead Generation",
    desc: "Digital marketing is a way to target the audience your business actually needs. Through attracting qualified prospects who are interested in your business.",
    icon: <FiFilter size={25} />
  },
  {
    title: "Better Brand Awareness",
    desc: "Consistent digital marketing efforts means your brand stays recognizable on multiple channels. It works by regularly engaging with your audience and delivering valuable content.",
    icon: <FiTrendingUp size={25} />
  },
  {
    title: "Better Customer Engagement",
    desc: "Digital marketing creates more opportunities to connect with customers. Sometimes it’s through content, email campaigns, social media, sometimes it’s other channels.",
    icon: <FiUsers size={25} />
  },
  {
    title: "Cost Effective Marketing ROI",
    desc: "Digital marketers at our company would offer greater control when you compare it traditional marketing methods. This means allocating budgets more effectively.",
    icon: <FiDollarSign size={25} />
  },
  {
    title: "Scalable Business Growth",
    desc: "Digital marketing could be scaled as your business grows. Scalable strategies that we provide make it easier for you to support sustainable growth. That too without sacrificing overall marketing effectiveness.",
    icon: <FiBarChart size={25} />
  }
];

const testimonialsData = [
  {
    review: "Dignite Studios improved our entire online visibility. While offering a strategy that delivered measurable results.",
    name: "Michael Turner",
    designation: "Marketing Director, Elevate Financial Group"
  },
  {
    review: "We didn’t expect such amazing professionalism but their team took the time to literally analyze our needs and build the campaigns we needed.",
    name: "Sophia Richard",
    designation: "CEO, Lumina Wellness Clinic"
  },
  {
    review: "We literally saw major improvements in website traffic. Not just that but the overall marketing performance within just a few months.",
    name: "Daniel Carter",
    designation: "Head of Growth, NexusTech Solutions"
  },
  {
    review: "Professional and responsive. Dignite Studios honestly became a valuable extension of our marketing team.",
    name: "Olivia Reynolds",
    designation: "Operations Manager, Crestview Real Estate"
  },
  {
    review: "Their approaches and workflow gave us complete visibility into performance. While helping us achieve a stronger return on investment.",
    name: "Ethan Mitchell",
    designation: "Managing Partner, Horizon E-Commerce Group"
  }
];

const faqsData = [
  {
    id: "1",
    question: "How can digital marketing expert help your business?",
    answer: "Digital marketing is meant to help businesses reach prospects where they spend most of their time online. A well planned strategy can strengthen customer engagement. Digital campaigns provide measurable insights unlike traditional marketing. The key is having the right strategy and execution plan aligned with your business objectives."
  },
  {
    id: "2",
    question: "Which digital marketing channels are the best for lead generation?",
    answer: "Basically the most effective lead generation channels for you are the ones that suit your business over all. Because digital marketing strategy for healthcare is different than real estate ofcourse. SEO means attracting prospects. PPC advertising offers immediate visibility among the targeted audience. Social media marketing can increase brand awareness. Email marketing is for nurturing prospects. Content marketing educates potential customers."
  },
  {
    id: "3",
    question: "How long does SEO take to show results?",
    answer: "SEO is a long term strategy that typically takes several months. Some improvements may be noticeable within the first few months. But lead generation needs ongoing optimization and consistency. The timeline can be different based on multiple factors. Regular monitoring would help you with stronger organic visibility over time."
  },
  {
    id: "4",
    question: "Do you provide PPC and social media advertising services?",
    answer: "Yes. We offer comprehensive paid advertising services for different platforms such as Google Ads, Facebook, Instagram, LinkedIn and other networks. Social media advertising would make it easier for the businesses to reach highly targeted audiences. PPC campaigns help capture users actively searching for specific products or services."
  },
  {
    id: "5",
    question: "How do you measure campaign performance?",
    answer: "We measure campaign performance through analytics platforms and reporting dashboards. Key performance indicators are: website traffic, lead generation, conversion rates, customer acquisition costs, engagement metrics, ROI. The digital marketing audit services would how exactly what’s working and where improvements can be made."
  },
  {
    id: "6",
    question: "Can you manage our complete digital marketing strategy?",
    answer: "Absolutely. The team can manage SEO, paid advertising, social media marketing, content creation, email automation, conversion optimization, analytics. All under one cohesive strategy. This approach makes sure everything works together toward common business goals. You need a complete digital marketing strategy audit or ongoing campaign management? We’ve got experienced digital marketing strategy consultants."
  }
];

const DigitalMarketingServices = () => {
  return (
    <div className="max-w-screen-2xl mx-auto gap-20 lg:gap-36 w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />
      <About
        heading="Meet Your Top Digital"
        heading2="Marketing Experts"
        para="For over 10 years, Dignite Studios has helped businesses improve their online presence and achieve sustainable growth. We understand that successful marketing requires more than visibility alone as a digital marketing expert team. It needs consistent execution with a deep understanding of the factors that drive customer engagement. Our approach is a blend of creative thinking, well researched data driven insights and proven marketing methodologies. That’s how we create campaigns that are going to bring measurable results for you. The strategies we offer make it possible for businesses to maximize every marketing opportunity. The team is committed to offering results that contribute to long term success through ongoing growth focused execution."
        button="Claim Your Free Consultation"
      />
      <Challenges
        header={<>What Might Be Preventing Your Marketing <br className="hidden md:block" /> From Delivering Results?</>}
        para="Every business wants better visibility and stronger returns with qualified leads. But some challenges can prevent campaigns from reaching their full potential. Some issues are easy to spot but sometimes some issues would go unnoticed until they begin affecting performance. Now, we’ll see the most common digital marketing challenges startups face. How dealing with them through the best digital marketing services can create new opportunities."
        items={challengesData}
      />
      <Services
        header="Best Digital Marketing Services That Grow Businesses"
        para="The best digital marketing services are offered by us to improve your overall marketing performance. That too through data driven strategies. See below how digital marketing expert works with SEO, paid advertising, content, social media, automation."
        services={servicesData}
        button="Book Your Free Consultation"
      />
      <ToolsAndTech
        header="Advanced Platforms and Tools Behind the Campaigns"
        subtitle="The tech stack we use is a carefully selected set of tools and platforms. It makes it easier to execute and optimize every campaign. Take a look at the tools below to see what powers our marketing process."
        tools={toolsData}
      />
      <Process
        header="How Our Digital Marketing Process Actually Works"
        para="We follow a structured digital marketing process. Take a look below to see how we manage each stage of your marketing journey."
        steps={processSteps}
      />
      <Bussiness
        header="Why We’re The Top Digital Marketing Experts"
        para="Choosing the perfect digital marketing company for small business isn’t that simple decision. The right digital marketing expert make a significant difference in your journey. We merge strategic thinking, industry expertise, and data driven execution. Here’s what sets our team apart."
        bs={bussinessData}
        button="Schedule a Brand Audit"
      />
      <Industries
        header="Marketing Expertise for Diverse Industries"
        para="Every industry faces unique challenges and customer behaviors. That’s why we customize the marketing strategies to fit the specific needs of each business we work with like we’d create digital marketing strategy for healthcare or digital marketing strategy for local business."
        VALUE_PROPOSITION={industriesData}
        button="Discuss Your Growth Strategy"
      />
      <MobileApp
        header="The Real Business Value of Digital Marketing"
        para="Digital marketing has become one of the most impressive and affective ways to connect with the right audience. It can create lasting value through the provided digital marketing strategy for local business."
        cards={mobileAppCards}
        button="Discuss Your Requirements Now"
      />
      <SuccessStories header="How We Have Helped Different Brands Grow" />
      <CenteredCTA
        title={<>It’s Time to Work on <span className="text-[#F15C20]">Your Business Growth!</span></>}
        desc="Need to increase your marketing ROI? The development team at Dignite Studios is ready for you. Schedule your free consultation. Receive a personalized brand audit with actionable insights."
        btnText="Don’t Postpone Your Growth"
        btnLink="/contact-us"
        image="/services/digital/cta.webp"
      />
      <Testimonials
        header="What People Say About Our Digital Marketing Agency"
        test={testimonialsData}
        button="Work With Our Marketing Experts"
      />
      <Faq
        header="Got Questions? We Have Answers!"
        faqs={faqsData}
      />
      <ContactUs
        img="/services/digital/ccta.webp"
        pathname="Digital Marketing Services"
        header="Ready to Generate More Leads and Revenue?"
        para="We're here to scale your marketing efforts. Share your goals with our team and receive a customized strategy today! Bonus: Get a Free Brand Audit in 24 Hours"
        btn="Get a Free Consultation"
      />
    </div>
  );
};

export default DigitalMarketingServices;
