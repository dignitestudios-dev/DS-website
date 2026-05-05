import React, { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState("");
 
  const handleSubscribe = () => {
    if (!email) return;
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };
 
  return (
    <section className="flex flex-col items-center gap-[50px] pb-16 px-4">
      {/* Text Block */}
      <div className="flex flex-col items-center gap-[30px] w-full max-w-[850px]">
        {/* Heading */}
        <h1
          className="text-center font-bold capitalize text-[#0C0C0C] leading-[105.77%] tracking-[-0.04em]"
          style={{ fontSize: "clamp(40px, 6vw, 68px)" }}
        >
          Our Blogs
        </h1>
 
        {/* Subtitle */}
        <p
          className="text-center text-[#5C5C5C] font-normal leading-[161%] tracking-[-0.008em] max-w-[658px]"
          style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}
        >
          Share your ideas with our team. As your trusted tech partner, we'll
          guide you clearly, confidently, and collaboratively from the strategy
          to success
        </p>
      </div>
 
      {/* Subscribe Input */}
      <div
        className="relative w-full max-w-[502px]"
        style={{ filter: "drop-shadow(0px 0px 50px rgba(241, 92, 32, 0.45))" }}
      >
        {/* Outer white pill (glow base) */}
        <div className="absolute inset-0 rounded-[22px] bg-white" />
 
        {/* Inner input row */}
        <div className="relative flex items-center justify-between bg-[#F2F2F2] border border-[#FFD4C3] rounded-[18px] px-4 py-2 h-[57px]">
          {/* Left: icon + input */}
          <div className="flex items-center gap-[15px] flex-1">
            {/* Mail icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="shrink-0"
            >
              <rect width="14" height="14" rx="2" fill="#5A5A5B" />
              <path
                d="M2 4.5L7 8L12 4.5"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="2"
                y="4"
                width="10"
                height="7"
                rx="1"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
            </svg>
 
            {/* Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              placeholder="Enter your Email Address"
              className="flex-1 bg-transparent text-[12px] font-semibold text-[#5C5C5C] placeholder-[#5C5C5C] tracking-[-0.008em] outline-none leading-[161%]"
            />
          </div>
 
          {/* Subscribe Button */}
          <button
            onClick={handleSubscribe}
            className="flex items-center gap-[5px] bg-[#F15C20] text-white rounded-[12.74px] px-4 h-[37px] shrink-0 hover:bg-[#d94e15] transition-colors duration-200"
          >
            {/* Envelope icon */}
            <svg
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              className="shrink-0"
            >
              <rect
                x="0.5"
                y="0.5"
                width="13"
                height="10"
                rx="1.5"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M1 1.5L7 6.5L13 1.5"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[10px] font-extrabold leading-[12px]">
              Subscribe
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Subscribe