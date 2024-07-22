import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const IndustryLeading = () => {
  return (
    <section className="py-12 global-padding-horizontal grid grid-cols-1 lg:grid-cols-2 gap-y-6">
      <div>
        <h1 className="uppercase font-bold text-xl text-[#8F8F8F]">
          industry leading
        </h1>
        <h2 className="headings-size mt-2">
          Mobile App <span className="text-[#F15C20]">Maintenance</span> Company
        </h2>
        <p className="text-lg font-normal mt-4">
          With years of proven track record in maintenance and support, Dignite
          Studios furnishes comprehensive mobile app maintenance services,
          compliance management services, and security management services to
          keep your app updated and optimized to ensure technological
          amelioration.
        </p>
        <div className="mt-6">
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] text-white w-[164px] h-[64px] rounded-full text-center flex items-center gap-2 justify-center font-semibold"
          >
            Get A Quote <FiArrowUpRight className="text-2xl" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img src="/industry-leading-image.webp" alt="" className="w-[437px] h-[471px]" />
      </div>
    </section>
  );
};

export default IndustryLeading;
