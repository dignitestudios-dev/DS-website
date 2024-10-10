import Link from "next/link";
import React from "react";

const ContactButtonPPC = ({ text1, text2 }) => {
  return (
    <Link
      href="/lp/contact-us"
      className="bg-[#F15C20] text-white rounded-[12px] text-center py-7 px-16 md:py-8 md:px-20 hover:bg-black transition-all duration-300 relative group inline-block overflow-hidden"
    >
      {/* First text */}
      <span className="block absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
        {text1}
      </span>

      {/* Second text */}
      <span className="block absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
        {text2}
      </span>
    </Link>
  );
};

export default ContactButtonPPC;
