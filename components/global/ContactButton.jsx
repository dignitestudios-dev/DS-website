import Link from "next/link";
import React from "react";

const ContactButton = ({ text1, text2 }) => {
  return (
    <Link
      href="/contact-us"
      className="bg-[#F15C20] text-white rounded-[12px] py-7 px-24 hover:bg-black transition-all duration-300 relative group inline-block overflow-hidden"
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

export default ContactButton;
