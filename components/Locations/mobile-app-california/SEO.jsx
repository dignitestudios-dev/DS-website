'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const locations = [
  {
    id: 1,
    title: 'Los Angeles',
    heading: 'Mobile App Development Los Angeles',
    description: 'Fast growth in LA isn’t easy but the right app makes it possible. Our team builds apps that scale, perform, and retain users. You get local expertise, instant communication, and solutions designed specifically for LA startups. No fluff. Just results.',
    pinPercent: { x: 19.5, y: 36.5 },
    cardPercent: { x: 21, y: 15 },
    direction: 'up',
    cardPosition: { top: '12%', left: '20%' }
  },
  {
    id: 2,
    title: 'San Francisco',
    heading: 'Mobile App Development San Francisco',
    description: 'For San Francisco-based founders, our App development company in San Diego brings the innovation your product needs. You get clean architecture, futuristic tech stacks, and product strategy influenced by one of the world’s top tech hubs.',
    pinPercent: { x: 45.5, y: 35 },
    cardPercent: { x: 49, y: 12 },
    direction: 'up',
    cardPosition: { top: '9%', left: '48%' }
  },
  {
    id: 3,
    title: 'San Diego',
    heading: 'App Development Company in San Diego',
    description: 'If you are operating in a calmer but fast-growing tech environment, our app development company in San Diego gives you development consistency, clear timelines, and user-focused execution without the noise of big-city churn.',
    pinPercent: { x: 58, y: 46 },
    cardPercent: { x: 56, y: 72 },
    direction: 'down',
    cardPosition: { top: '69%', left: '34.5%' }
  },
  {
    id: 4,
    title: 'Silicon Valley',
    heading: 'Silicon Valley App Development Expertise',
    description: 'With detailed Silicon Valley app development expertise, we help founders build smarter, faster, and more competitively. Our team brings the same mindset. Lean execution, rapid iterations, and market-ready solutions aligned with global startup standards.',
    pinPercent: { x: 67, y: 47 },
    cardPercent: { x: 70, y: 72 },
    direction: 'down',
    cardPosition: { top: '69%', left: '69%' }
  }
]

const SEO = () => {
  const ref = useRef(null)
  const svgRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div className="w-full grid grid-cols-1 justify-start items-start pb-0 md:pt-40 py-20">
      <div className="flex relative z-20 w-[90%] md:w-[50%] flex-col text-center mx-auto items-center mb-12">
        <h1 className="text-4xl leading-tight tracking-tighter md:text-7xl font-bold">
          California-Specific Coverage{' '}
          <span className="text-[#F15C20]">(Local SEO)</span>
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#0C0C0C] max-w-2xl">
         Choosing the right partner in California can completely change the way your app performs in a competitive market. Every city here has its own rhythm, user behavior, and tech expectations, and your product needs to match that energy.
        </p>
      </div>

      <div ref={ref} className="relative -my-24 w-full max-w-7xl mx-auto px-4">

        <div className="relative w-full" style={{ minHeight: '500px' }}>

          <div className="flex justify-center">
            <img 
              src='/location/mobile-california/map.png' 
              alt='California coverage map' 
              className="w-full max-w-5xl h-[1000px] object-contain"
            />
          </div>

          {/* SVG Overlay for Lines and Pins */}
          <svg 
            ref={svgRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ overflow: 'visible' }}
          >
            {dimensions.width > 0 && locations.map((location, index) => {
              const pinX = (location.pinPercent.x / 100) * dimensions.width
              const pinY = (location.pinPercent.y / 100) * dimensions.height
              const cardX = (location.cardPercent.x / 100) * dimensions.width
              const cardY = (location.cardPercent.y / 100) * dimensions.height
              
              // Create path: pin -> vertical line -> horizontal line to card
              const pathData = `M ${pinX} ${pinY} L ${pinX} ${cardY} L ${cardX} ${cardY}`
              
              return (
              <g key={`line-${location.id}`}>
                {/* Animated Line with L-shape */}
                <motion.path
                  d={pathData}
                  stroke="#F15C20"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ 
                    delay: 0.3 + index * 0.15, 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Pin at start of line */}
           <motion.g
                  transform={`translate(${pinX - 22.5}, ${pinY - 36})`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.3 }}
                >
                  <g filter="url(#filter0_i_2083_10765)">
                    <path d="M22.0803 -0.000457071C9.80455 0.0825738 -0.0825117 10.1038 0.000519159 22.3796C0.08355 34.6554 22.5721 72.1534 22.5721 72.1534C22.5721 72.1534 44.537 34.3488 44.454 22.073C44.3709 9.79719 34.3498 -0.083488 22.0803 -0.000457071ZM22.3039 32.19C16.4215 32.2283 11.6185 27.4955 11.5801 21.6131C11.5418 15.7307 16.2746 10.9277 22.157 10.8894C28.0394 10.851 32.8424 15.5838 32.8807 21.4662C32.9191 27.3486 28.1863 32.1517 22.3039 32.19Z" fill="url(#paint0_linear_2083_10765)"/>
                  </g>
                </motion.g>
              </g>
            )}
            )}
          </svg>

          {/* Location Cards */}
          {locations.map((location, index) => (
            <motion.div
              key={`card-${location.id}`}
              className={`absolute bg-transparent p-5 ${(location.id === 3) ? 'text-end' : ''} w-[600px]`}
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
              <div className={` text-nowrap inline-block bg-[#F15C20] text-white px-3 py-1 rounded text-sm font-bold mb-3`}>
                {location.title}
              </div>
              <h3 className="font-bold text-nowrap text-xs mb-2 text-black leading-tight">
                {location.heading}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
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