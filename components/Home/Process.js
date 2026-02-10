"use client";

import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProcessContainer from "./ProcessContainer";
import ContactButton from "../global/ContactButton";

const methodologyData = {
  1: {
    // Agile
    badge: "Agile",
    steps: [
      {
        no: "01.",
        title: "Branding",
        subtitle: "Planning & Research",
        desc: "Mobile App Branding Plays A Vital Role In The Creation Of The App's Specifications In Terms Of Tone, Voice, Design, Icons, And Visuals. It Requires Careful Consideration Of The Connection Between The Users And The App.",
      },
      {
        no: "02.",
        title: "Sprint Planning",
        subtitle: "Foundation & UX",
        desc: "By Sprint Planning Developers Determine The Product Roadmap And Analyze The Total Execution Time. Our Skillful Scrum Team Reviews The Backlog And Prioritizes Tasks To Create A Project Plan.",
      },
      {
        no: "03.",
        title: "Prototyping",
        subtitle: "User Interface Design",
        desc: "It Is A Process In Which A Preliminary Visual Mock-Up Look Has Been Created That Exhibits The Mobile App's Initial Design And Purpose But Does Not Have Functional Code.",
      },
      {
        no: "04.",
        title: "Iteration",
        subtitle: "Development",
        desc: "While Conducting Mobile App Development, The Experts Of Dignite Studios Will Implement The Best Possible Way To Break Down The Project Into Shorter Cycles To Analyze Planning, Coding, Testing, And Reviewing.",
      },
      {
        no: "05.",
        title: "Testing",
        subtitle: "Testing & Evaluation",
        desc: "Testing At All Stages Of The Mobile App Development Process Is The Leading Requirement To Troubleshoot Bugs, Stay Up-to-date With The Anticipated Status, And Make Your Product Profound.",
      },
      {
        no: "06.",
        title: "Deployment",
        subtitle: "Go Live",
        desc: "Mobile App Deployment Is Not A Singular Event, But It Consists Of Several Steps. That Includes Preparing The App For Distribution, Packaging, Setting Up Servers, And Configuration.",
      },
    ],
  },
  2: {
    // Waterfall
    badge: "Waterfall",
    steps: [
      {
        no: "01.",
        title: "Plan",
        subtitle: "Building the Roadmap",
        desc: "We define your goals, understand needs, and outline every feature to create a clear roadmap for successful web app development.",
      },
      {
        no: "02.",
        title: "Design",
        subtitle: "UI/UX and Wireframes",
        desc: "Before coding begins, we map out the system structure, UI/UX, and technical planning to ensure scalable and smooth development.",
      },
      {
        no: "03.",
        title: "Develop",
        subtitle: "Functional Development",
        desc: "Following the plan, our developers build precisely as designed, making sure functionality and performance are delivered efficiently.",
      },
      {
        no: "04.",
        title: "Test",
        subtitle: "Quality Assurance",
        desc: "The QA team tests every feature and ensures a smooth experience for users by catching bugs early.",
      },
      {
        no: "05.",
        title: "Validate",
        subtitle: "Collecting Feedback",
        desc: "Stakeholders review working versions, providing feedback that guides improvement before the final release.",
      },
      {
        no: "06.",
        title: "Launch",
        subtitle: "Deployment",
        desc: "Once final testing is complete, we deploy your web app and ensure everything works perfectly in the live environment.",
      },
      {
        no: "07.",
        title: "Support",
        subtitle: "Maintenance & Support",
        desc: "The team provides ongoing support through monitoring, fixing issues, releasing updates, and enhancing features.",
      },
    ],
  },
  3: {
    // Hybrid
    badge: "Hybrid",
    steps: [
      {
        no: "01.",
        title: "Core First",
        subtitle: "Focused on Functionality",
        desc: "We focus on building the most critical functionality first, creating a strong, scalable foundation before designing every interface detail.",
      },
      {
        no: "02.",
        title: "Test Early",
        subtitle: "QA",
        desc: "Functionality is validated as it’s developed, catching issues early to save time, reduce rework, and maintain smooth progress.",
      },
      {
        no: "03.",
        title: "Design",
        subtitle: "UI/UX Design",
        desc: "Once core features work, we refine the user experience by creating interfaces that enhance usability, not just visual appeal.",
      },
      {
        no: "04.",
        title: "Real Feedback",
        subtitle: "Testing",
        desc: "We gather input from users or stakeholders on working versions, iterating based on real needs rather than assumptions.",
      },
      {
        no: "05.",
        title: "Phased Launch",
        subtitle: "Sprint Demos",
        desc: "Working versions are released gradually, delivering value to users while enabling continuous improvements.",
      },
      {
        no: "06.",
        title: "Scaling",
        subtitle: "Optimization",
        desc: "Once you’ve launched, we refine and optimize based on real-world usage, ensuring your software grows with your business.",
      },
    ],
  },
};

const Process = () => {
  const [currentTab, setCurrentTab] = useState("Agile");
  const { palette, theme } = useContext(GlobalContext);
  const [openedTab, setOpenedTab] = useState(1);

  const handleAgileClick = () => {
    setOpenedTab(1);
    setCurrentTab("Agile");
  };

  const handleWaterfallClick = () => {
    setOpenedTab(2);
    setCurrentTab("Waterfall");
  };

  const handleHybridClick = () => {
    setOpenedTab(3);
    setCurrentTab("Hybrid");
  };

  return (
    <div
      id="process"
      className="w-full"
      // style={{ background: palette?.dark_contrast_background }}
    >
      {/* Desktop View */}
      <div className="hidden md:block w-full py-10">
        <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col items-center justify-start">
          <div className="w-full px-0 flex flex-col justify-between items-center">
          
            <h2 className="lg:font-bold text-center capitialize font-extrabold text-4xl lg:text-7xl leading-[42px] lg:leading-[1.1] tracking-tighter xl:font-bold">
             The Way Dignite Studios Works
            </h2>
            <p
              className={`text-lg text-center mt-4 `}
            >
           Our workflow is a combination of strategy, design, and fast development. The team ensures smooth execution. We don’t compromise on delivering scalable apps, ensuring transparency.
            </p>
          </div>
          <div className="w-full h-auto mt-6 lg:my-6 grid grid-cols-3 grid-rows-1">
            <button
              onClick={() => handleAgileClick()}
              className={`w-full font-medium text-md lg:text-lg gap-1 lg:gap-3 transition-all duration-300 h-16 border-b-[1px] ${openedTab == 1 ? "border-[#F15C20] text-[#f15c20]" : "border-[#B4B4B4]/[0.5] text-[#b4b4b4]"} focus:border-[#F15C20] capitalize flex items-center justify-start lg:px-3`}
            >
              <span
                className={`w-7 h-7 lg:w-9 lg:h-9 xl:w-[44px] xl:h-[44px] rounded-full flex justify-center items-center ${openedTab == 1 ? "bg-[#F15C20]/[0.08] -rotate-0" : theme == "light" ? "bg-[#E7E7E7] -rotate-90" : "bg-[#1c1c1c] -rotate-90"}`}
              >
                <MdKeyboardArrowDown className="text-2xl" />
              </span>
              <h3>agile</h3>
            </button>
            <button
              onClick={() => handleWaterfallClick()}
              className={`w-full font-medium text-md lg:text-lg gap-1 lg:gap-3 transition-all duration-300 h-16 border-b-[1px] ${openedTab == 2 ? "border-[#F15C20] text-[#f15c20]" : "border-[#B4B4B4]/[0.5] text-[#b4b4b4]"} focus:border-[#F15C20] capitalize flex items-center justify-start lg:px-3`}
            >
              <span
                className={`w-7 h-7 lg:w-9 lg:h-9 xl:w-[44px] xl:h-[44px] rounded-full flex justify-center items-center ${openedTab == 2 ? "bg-[#F15C20]/[0.08] -rotate-0" : theme == "light" ? "bg-[#E7E7E7] -rotate-90" : "bg-[#1c1c1c] -rotate-90"}`}
              >
                <MdKeyboardArrowDown className="text-2xl" />
              </span>
              <h3>waterfall</h3>
            </button>
            <button
              onClick={() => handleHybridClick()}
              className={`w-full font-medium text-md lg:text-lg gap-1 lg:gap-3 transition-all duration-300 h-16 border-b-[1px] ${openedTab == 3 ? "border-[#F15C20] text-[#f15c20]" : "border-[#B4B4B4]/[0.5] text-[#b4b4b4]"} focus:border-[#F15C20] capitalize flex items-center justify-start lg:px-3`}
            >
              <span
                className={`w-7 h-7 lg:w-9 lg:h-9 xl:w-[44px] xl:h-[44px] rounded-full flex justify-center items-center ${openedTab == 3 ? "bg-[#F15C20]/[0.08] -rotate-0" : theme == "light" ? "bg-[#E7E7E7] -rotate-90" : "bg-[#1c1c1c] -rotate-90"}`}
              >
                <MdKeyboardArrowDown className="text-2xl" />
              </span>
              <h3>hybrid</h3>
            </button>
          </div>
          <ProcessContainer openedTab={openedTab} />
          <ContactButton text1={"Start Your Project"} text2={"Let's talk"} />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full bg-white py-16 px-6 relative overflow-hidden">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-[28px] font-bold text-black leading-tight capitalize mb-4">
            mobile app development <br /> process
          </h2>
          <p className="text-[14px] text-gray-500 max-w-sm">
            Our Mobile Mobile App Development Process Follows Structured Steps
            Designed For Speed, Clarity And Measurable Outcomes For Every
            Project.
          </p>
        </div>

        {/* Tab Selector Mobile */}
        <div className="flex justify-center gap-4 mb-8">
          {["Agile", "Waterfall", "Hybrid"].map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setOpenedTab(idx + 1)}
              className={`px-6 py-2 rounded-full border text-sm transition-all duration-300 ${openedTab === idx + 1 ? "border-[#F15C20] text-[#F15C20] bg-[#F15C20]/5" : "border-gray-200 text-gray-400"}`}
            >
              {tab}
            </button>
          ))}
        </div>

     

        {/* Timeline */}
        <div className="flex flex-col items-center">
          {methodologyData[openedTab].steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center mb-4">
                <span className="text-[72px] font-bold text-[#F15C20] leading-none mb-2">
                  {step.no}
                </span>
                <h3 className="text-[32px] font-bold text-black mb-1">
                  {step.title}
                </h3>
                <h4 className="text-[22px] font-semibold text-gray-400 mb-4">
                  {step.subtitle}
                </h4>
                <p className="text-[14px] leading-relaxed text-gray-400 text-center max-w-md px-2">
                  {step.desc}
                </p>
              </div>

              {/* Divider Logic */}
              {index !== methodologyData[openedTab].steps.length - 1 && (
                <div className="flex flex-col items-center my-6 gap-6">
                  {/* Vertical Line with marker 1 */}
                  <div className="relative h-20 w-[1px] bg-gray-200 flex items-center justify-center">
                    <div className="absolute top-1/4 w-8 h-8 rounded-full border border-gray-100 bg-white flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#F15C20] shadow-[0_0_10px_rgba(241,92,32,0.4)]" />
                    </div>
                    <div className="absolute bottom-1/4 w-8 h-8 rounded-full border border-gray-100 bg-white flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-16 flex justify-center">
          <button className="bg-[#F15C20] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#F15C20]/30 flex items-center gap-3">
            Start Your Project
            <span className="bg-white/20 rounded-full p-1">
              <MdKeyboardArrowDown className="-rotate-90 text-sm" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Process;
