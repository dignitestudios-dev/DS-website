import ContactButton from "@/components/global/ContactButton";
import React from "react";

const IndustryLeading = () => {
  return (
    <section className="py-12 global-padding-horizontal grid grid-cols-1 lg:grid-cols-2 gap-y-6">
      <div>
        <h2 className="headings-size">
          <p className="uppercase font-bold text-xl text-[#8F8F8F] tracking-normal mb-2">
            industry leading
          </p>
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
          <ContactButton text1={"Get A Quote"} text2={"Let's talk"} />
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img
          src="/mobile-app-support-and-maintenance-company.webp"
          alt="mobile app support and maintenance company image shows two mock screens, one is of laptop and other mobile device, both are presenting application layout"
          className="w-[437px] h-[471px]"
        />
      </div>
    </section>
  );
};

export default IndustryLeading;
