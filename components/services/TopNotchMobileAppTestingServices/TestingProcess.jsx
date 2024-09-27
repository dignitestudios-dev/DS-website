"use client";
import { TESTING_PROCESS } from "@/constants/testingprocess";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const TestingProcess = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="py-10 global-padding-horizontal">
      <div className={`w-full`}>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-6 mt-3">
          <div>
            <p className={`text-xl font-bold text-[#8F8F8F] uppercase mb-4`}>
              exclusive design services by
            </p>
            <h2 className={`headings-size group`}>
              <span className="text-[#8F8F8F] group-hover:text-[#F15C20] transition-all duration-200">
                Inevitable
              </span>
              <br />
              Testing Process
            </h2>
          </div>

          <div className="xl:px-12 flex items-center">
            <p className={`text-base md:text-xl md:leading-[27.2px]`}>
              The top-class mobile app testing services of Dignite Studios
              streamline highly effective testing methodology to prevent
              disasters and provide the most reliable solutions to their
              partners and customers.
            </p>
          </div>
        </div>
        <div
          className={`border ${
            theme === "dark" ? "border-gray-600" : "border-[#E7E7E7]"
          } w-full mb-4 mt-5`}
        />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <div className={`flex flex-col items-start gap-4 `}>
          <Image
            width={36}
            height={36}
            loader={customLoader}
            src={"/mobile-app-testing-requirement-analysis-icon.webp"}
            alt="Mobile app testing requirement analysis icon"
            className="w-9 h-9"
          />
          <h3 className="text-xl font-semibold">Requirement Analysis</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            Demonstrating the project scope, with a clear understanding of
            requirements whether the clients need a functional app or a
            non-functional app, proper research on the target audience, and
            in-depth analysis of app type that will lead to the successful
            software testing process. The top-ranked testing engineers of
            Dignite Studios offer a systematic and productive approach to
            leading the comprehensive mobile testing of a mobile app.
          </p>
        </div>
        <div className={`flex flex-col items-start gap-4 `}>
          <Image
            width={36}
            height={36}
            loader={customLoader}
            src={"/mobile-app-test-plan-creation-icon.webp"}
            alt="Mobile app test plan creation icon"
            className="w-9 h-9"
          />
          <h3 className="text-xl font-semibold">Test Plan Creation</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            A well-driven research process includes interviews, usability,
            testing, surveys, and analytics through which we analyze user
            behavior covering all aspects. Here, our top-ranked{" "}
            <Link
              href={"/services/mobile-app-design-services"}
              className="text-[#F15C20]"
            >
              mobile app design services
            </Link>{" "}
            perform the best suitable approach to monitor and evaluate the idea
            of the consumer.
          </p>
        </div>
        <div className={`flex flex-col items-start gap-4 `}>
          <Image
            width={36}
            height={36}
            loader={customLoader}
            src={"/mobile-app-test-case-creation-icon.webp"}
            alt="Mobile app test case creation icon"
            className="w-9 h-9"
          />
          <h3 className="text-xl font-semibold">Test Case Creation</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            This phase involves detailed mobile testing services to verify the
            software's viability and functionality. At Dignite Studios,
            high-performing testing engineers conduct mobile functional testing
            to ensure security testing types, mobile compatibility testing, and
            in-depth performance analysis to make the app work productively
            after the mobile usability testing phase.
          </p>
        </div>
        <div className={`flex flex-col items-start gap-4 `}>
          <Image
            width={36}
            height={36}
            loader={customLoader}
            src={"/mobile-test-automation-icon.webp"}
            alt="mobile test automation icon"
            className="w-9 h-9"
          />
          <h3 className="text-xl font-semibold">Mobile Test Automation</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            It involves manual or automated test execution through real devices,
            emulators, or simulators to identify the application's system
            configuration and actual performance. Our top mobile testing team
            creates reliable approaches to detect the performance of the mobile
            app to generate positive testing results.
          </p>
        </div>
        <div className={`flex flex-col items-start gap-4 `}>
          <Image
            width={36}
            height={36}
            loader={customLoader}
            src={"/mobile-app-testing-defect-logging-icon.webp"}
            alt="Mobile app testing defect logging icon"
            className="w-9 h-9"
          />
          <h3 className="text-xl font-semibold">Defect Logging</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            Bug tracking is a structured process to identify, detect, and
            monitor the issues that arise while testing projects. It helps to
            identify multiple deformities in design flaws, and hardware
            malfunctions, that impede the mobile accessibility testing. Here the
            first-class testing specialists of Dignite Studios generate
            standardized testing time to evaluate defect details, errors,
            consistent steps, severity, and bugs in testing mobile apps to
            disquisition the issues.
          </p>
        </div>
        <div className={`flex flex-col items-start gap-4 `}>
          <Image
            width={36}
            height={36}
            loader={customLoader}
            src={"/mobile-app-testing-fixing-and-accreditation-icon.webp"}
            alt="Mobile app testing fixing and accreditation icon"
            className="w-9 h-9"
          />
          <h3 className="text-xl font-semibold">Fixing and Accreditation</h3>
          <p className="text-sm font-normal leading-[19.74px]">
            This phase allows the testing team to ensure whether defect-fixing
            negatively impacts the compatibility and functionality of the app
            during the bug removal. Further, our experts re-examine the
            following areas to clinch the stability and reliability of mobile
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestingProcess;
