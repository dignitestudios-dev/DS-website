"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const BrandIdentity = () => {
  const headerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const leftInView = useInView(leftColumnRef, { once: true, amount: 0.3 });
  const rightInView = useInView(rightColumnRef, { once: true, amount: 0.3 });

  const colors = [
    { name: 'Deep Navy', hex: '#000084', light: '#A5A5D8' },
    { name: 'Lavender', hex: '#CEABD8', light: '#CEABD8' },
    { name: 'Ink Blue', hex: '#00010D', light: '#00010D' },
    { name: 'Dark Gray', hex: '#282828', light: '#282828' }
  ];

  return (
    <div className=" ">
       <img
        src="/wing/hearts.png"
        alt="hero"
        className="absolute w-screen z-10"
      />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
         initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Brand <span className="text-[#5BAFEB]">Identity</span>
          </h1>
          <p className=" max-w-5xl relative z-50 mx-auto leading-relaxed ">
       Our team of skilled designers built the whole brand identity around connection, trust, and the modern way people form relationships. Blue isn’t just calming; it symbolizes trust, reliability, and emotional security, qualities essential for a dating app where users seek genuine relationships. Also, the rounded typography and friendly icons create a sense of warmth and approachability. Custom illustrations highlight shared connections, friendships, and real compatibility. Overall, the branding communicates safety, intention, and the promise of meaningful matches.
          </p>
        </motion.div>
        <div className=' justify-center items-center dark:hidden flex' >
<img src='/wing/brand-calibri.png' alt='brand' className='' />
       </div>
        <div className=' justify-center items-center hidden dark:flex' >
<img src='/wing/dd.png' alt='brand' className='' />
       </div>

       <div className='flex gap-8 md:flex-row flex-col items-center justify-center my-20' >
        <img src='/wing/c1.png' alt='cc' />
        <img src='/wing/c2.png' alt='cc' />
        <img src='/wing/c3.png' alt='cc' />
        <img src='/wing/c4.png' alt='cc' />
       </div>

      </div>
    </div>
  );
};

export default BrandIdentity;