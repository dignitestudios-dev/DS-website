import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const MaintenanceProcess = () => {
  return (
    <section className="w-full py-12 global-padding-horizontal">
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-6">
        <div className="col-span-3 lg:col-span-2">
          <h1 className="uppercase font-bold text-xl text-[#8F8F8F]">
            Mobile Application
          </h1>
          <h2 className="headings-size mt-2">
            Maintenance <span className="text-[#F15C20]">Process</span>
          </h2>
          <p className="text-lg font-normal mt-4">
            The top management of Dignite Studios characterizes each support and
            maintenance step with beneficial processes to streamline the app's
            performance and potency with clarity. 
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1 flex justify-center items-center lg:justify-end">
          <div className="mt-6">
            <Link
              href={"/contact-us"}
              className="bg-[#F15C20] text-white w-[218px] h-[64px] rounded-full text-center flex items-center gap-1 justify-center font-semibold"
            >
              Discuss Your Project <FiArrowUpRight className="text-2xl" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MaintenanceProcess;
