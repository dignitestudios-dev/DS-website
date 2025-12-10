"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Challenges = () => {
  const [activeTab, setActiveTab] = useState('problem')

  const problemPoints = [
    'Creating the secure and moderated social space which is limited only to verified the pharmaceutical professionals.',
    'Designing the simple coin purchase and spending the flow which stayed quite smooth and also easy for the users.',
    'Ensuring marketplace trust by reducing scams by removing the quality feelings and also to avoid the fake sellers.',
    'Handling the mixed content types like the social feed marketplace items and also the global news inside the one interface.',
    'Building the admin system to verify users which receive posts manage the coin activity and few monitor listings.',
    'Making the platform feel the modern intuitive and with the smooth similar to mainstream social apps while keeping a professional tone'
  ]

  return (
    <section className="w-full py-24 px-6 relative z-50">
      <img src="/bioyap/w-bg.png" alt="hero" className="absolute w-screen -z-10" />
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Challenges And <span className="text-[#C0F765]">Solutions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-5xl mx-auto mb-12"
        >
          The main challenge is to deliver the mobile app development services which created the safe, modern and reliable experience for pharmaceutical professionals while making sure that the platform remained simple, fluent and also trustworthy. To solve this, we also focused on the strong UI/UX design for the interactive mobile app interface which was supported by the insecure in app coin system making sure that every challenge was addressed through the fluent and dependable user flow.
        </motion.p>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center   mb-12 bg-[#E6EAE2] w-fit mx-auto rounded-full"
        >
          <button
            onClick={() => setActiveTab('problem')}
            className={`px-12 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'problem'
                ? 'bg-[#C0F765] text-black'
                : 'bg-[#E6EAE2] text-gray-600'
            }`}
          >
            Problem
          </button>
          <button
            onClick={() => setActiveTab('solution')}
            className={`px-12 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'solution'
                ? 'bg-[#C0F765] text-black'
                : 'bg-[#E6EAE2] text-gray-600 '
            }`}
          >
            Solution
          </button>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-7xl mx-auto gap-8 items-center"
        >
          {/* Left - Problem/Solution Points */}
          <div className="bg-[#f5f5f0] rounded-[30px] p-10 px-12 text-left">
            {activeTab == "problem" && 
            <div className='flex gap-8 items-center justify-between'>
            <ul className="space-y-4">
              {problemPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
            <img src='/bioyap/problem.png' alt='prob' width={250} height={250} />
            </div>
            }
            {activeTab == "solution" && 
            <div className='flex justify-between items-center'>
            <ul className="space-y-4">
              {problemPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
            <img src='/bioyap/sol.png' alt='prob' width={250} height={250} />
            </div>
            }
          
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Challenges