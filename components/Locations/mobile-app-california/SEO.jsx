'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const locations = [
  {
    id: 1,
    title: 'Los Angeles',
    heading: 'Mobile App Development Los Angeles',
    description: 'Our team builds apps that perform and retain users. You get local expertise and solutions designed specifically for LA startups.',
    lineStart: { x: '18%', y: '52%' },
    lineEnd: { x: '18%', y: '25%' },
    cardPosition: { top: '5%', left: '2%' }
  },
  {
    id: 2,
    title: 'San Francisco',
    heading: 'Mobile App Development San Francisco',
    description: 'Our App development company in San Diego brings clear architecture, a futuristic tech stack, and a product strategy.',
    lineStart: { x: '50%', y: '48%' },
    lineEnd: { x: '50%', y: '22%' },
    cardPosition: { top: '2%', left: '38%' }
  },
  {
    id: 3,
    title: 'San Diego',
    heading: 'App Development Company in San Diego',
    description: 'Our app development company in San Diego gives you clear timelines and user-focused execution.',
    lineStart: { x: '51%', y: '52%' },
    lineEnd: { x: '51%', y: '72%' },
    cardPosition: { top: '72%', left: '32%' }
  },
  {
    id: 4,
    title: 'Silicon Valley',
    heading: 'Silicon Valley App Development Expertise',
    description: 'With detailed Silicon Valley app development expertise, we help founders build faster and more competitively.',
    lineStart: { x: '75%', y: '52%' },
    lineEnd: { x: '80%', y: '68%' },
    cardPosition: { top: '68%', left: '62%' }
  }
]

const SEO = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="w-full grid grid-cols-1 justify-start items-start md:py-40 py-20">
      <div className="flex relative z-20 w-[90%] md:w-[75%] flex-col text-center mx-auto items-center mb-12">
        <h1 className="text-4xl leading-tight tracking-tighter md:text-7xl font-bold">
          California-Specific Coverage{' '}
          <span className="text-[#F15C20]">(Local SEO)</span>
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#0C0C0C] max-w-2xl">
          Choosing the right partner in California can completely change the way your app performs in a competitive market
        </p>
      </div>

      <div ref={ref} className="relative w-full max-w-7xl mx-auto px-4">
        {/* Map Container */}
        <div className="relative w-full" style={{ minHeight: '600px' }}>
          {/* Map Image */}
          <div className="flex justify-center">
            <img 
              src='/location/mobile-california/map.png' 
              alt='California coverage map' 
              className="w-full max-w-5xl"
            />
          </div>

          {/* SVG Overlay for Lines and Pins */}
          <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ overflow: 'visible' }}
          >
            {locations.map((location, index) => (
              <g key={`line-${location.id}`}>
                {/* Animated Line */}
                <motion.line
                  x1={location.lineStart.x}
                  y1={location.lineStart.y}
                  x2={location.lineEnd.x}
                  y2={location.lineEnd.y}
                  stroke="#F15C20"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ 
                    delay: 0.3 + index * 0.15, 
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Pin at start of line */}
                <motion.circle
                  cx={location.lineStart.x}
                  cy={location.lineStart.y}
                  r="8"
                  fill="#F15C20"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.3 }}
                />
                
                {/* Pin outer ring */}
                <motion.circle
                  cx={location.lineStart.x}
                  cy={location.lineStart.y}
                  r="12"
                  fill="none"
                  stroke="#F15C20"
                  strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 0.5 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.3 }}
                />
              </g>
            ))}
          </svg>

          {/* Location Cards */}
          {locations.map((location, index) => (
            <motion.div
              key={`card-${location.id}`}
              className="absolute bg-white rounded-lg shadow-xl p-5 border-t-4 border-[#F15C20]"
              style={{
                ...location.cardPosition,
                maxWidth: '280px',
                zIndex: 10
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                delay: 0.9 + index * 0.15, 
                duration: 0.5,
                ease: "easeOut"
              }}
            >
              <div className="inline-block bg-[#F15C20] text-white px-3 py-1 rounded text-sm font-bold mb-3">
                {location.title}
              </div>
              <h3 className="font-bold text-base mb-2 text-black leading-tight">
                {location.heading}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {location.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SEO