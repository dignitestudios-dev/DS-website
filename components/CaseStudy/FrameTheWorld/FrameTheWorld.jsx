import React from 'react';
import { Poppins } from 'next/font/google';
import Hero from './hero';
import ProductDevelopment from './ProductDevelopment';
import Challenges from './Challenges';
import Solutions from './Solutions';
import Wireframes from './Wireframes';
import TechStack from './TechStack';
import BrandIdentity from './BrandIdentity';
import Results from './Results';
import CTA from './CTA';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
});

const FrameTheWorld = () => {
  return (
    <div className={`w-full h-full flex md:gap-20  gap-10 flex-col ${poppins.variable} font-poppins`}>
      <Hero />
      <ProductDevelopment />
      <Challenges />
      <Solutions />
      <Wireframes />
      <TechStack />
      <BrandIdentity />
      <Results />
      <CTA />
    </div>
  );
};

export default FrameTheWorld;
