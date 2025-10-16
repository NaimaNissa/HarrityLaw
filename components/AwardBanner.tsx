'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const AwardBanner = () => {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section ref={ref} className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recognized Excellence
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to exceptional legal representation has earned us recognition 
            from leading legal organizations and publications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Award Banner */}
          <div className="relative bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(255,255,255,0.1) 10px,
                  rgba(255,255,255,0.1) 20px
                )`
              }}></div>
            </div>

            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Award Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    {/* Shield Badge */}
                    <div className="w-48 h-56 sm:w-56 sm:h-64 bg-white rounded-2xl shadow-xl relative overflow-hidden">
                      {/* Badge Content */}
                      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                        {/* Top Section */}
                        <div className="text-center">
                          <div className="text-xs font-bold text-gray-800 mb-2">TOPVERDICT.COM</div>
                          <div className="text-3xl sm:text-4xl font-bold mb-1">
                            <span className="text-gray-700">TOP</span>
                            <span className="text-yellow-600"> 40</span>
                          </div>
                          <div className="text-sm font-semibold text-gray-700 mb-1">
                            <span className="text-gray-700">US</span>
                            <span className="text-red-600"> VERDICTS</span>
                          </div>
                          <div className="text-xs text-red-600 font-medium">All Practice Areas</div>
                        </div>

                        {/* Ribbon */}
                        <div className="relative">
                          <div className="bg-pink-500 text-white text-center py-2 px-4 rounded-full relative">
                            <div className="flex items-center justify-center">
                              <span className="text-white text-sm font-semibold">⭐ Pennsylvania</span>
                            </div>
                          </div>
                        </div>

                        {/* Year */}
                        <div className="text-center">
                          <div className="text-xs font-bold text-gray-800">2015</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex-1 text-center lg:text-left"
                >
                  {/* Gavel and Book Icon */}
                  <div className="flex justify-center lg:justify-start mb-6">
                    <div className="relative">
                      {/* Book */}
                      <div className="w-16 h-12 bg-amber-800 rounded-sm shadow-lg relative">
                        <div className="absolute inset-0 bg-amber-700 rounded-sm"></div>
                        <div className="absolute top-1 left-1 right-1 h-1 bg-amber-600 rounded-sm"></div>
                        <div className="absolute top-3 left-1 right-1 h-1 bg-amber-600 rounded-sm"></div>
                        <div className="absolute top-5 left-1 right-1 h-1 bg-amber-600 rounded-sm"></div>
                      </div>
                      {/* Gavel */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 rounded-full shadow-lg"></div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Firm Name */}
                  <div className="text-white mb-4">
                    <div className="text-lg sm:text-xl font-light mb-1">The Law Offices of</div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">Thomas W. Harrity L.L.C.</div>
                  </div>

                  {/* Award Description */}
                  <div className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    Recognized as one of the Top 40 law firms in Pennsylvania for outstanding 
                    verdicts and settlements across all practice areas. This prestigious award 
                    reflects our commitment to achieving exceptional results for our clients.
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AwardBanner
