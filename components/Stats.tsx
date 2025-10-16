'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const Stats = () => {
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

  const stats = [
    {
      number: '20+',
      label: 'Years Experience',
      description: 'Serving Philadelphia since 2003'
    },
    {
      number: '$50M+',
      label: 'Recovered for Clients',
      description: 'Successful settlements and verdicts'
    },
    {
      number: '98%',
      label: 'Success Rate',
      description: 'Cases resolved favorably'
    },
    {
      number: '500+',
      label: 'Happy Clients',
      description: 'Satisfied with our service'
    }
  ]

  return (
    <section ref={ref} className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Legal statistics background"
          fill
          className="object-cover opacity-5"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Philadelphia Residents
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of clients recover 
            millions in compensation while providing personalized, professional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-600 mb-2"
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
