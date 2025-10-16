'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-hidden pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Philadelphia City Hall"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-700/60"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Experienced Personal Injury Attorneys in{' '}
              <span className="text-brand-300">Philadelphia</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 lg:mb-12 leading-relaxed">
              At Harrity & Associates, we provide high-quality legal representation for personal injury cases. 
              When you call us, you'll speak directly with an attorney who understands your case and is dedicated 
              to achieving the best possible outcome.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-12">
              <motion.a
                href="#consultation"
                className="btn btn-primary bg-brand-500 text-white hover:bg-brand-600 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Free Consultation
                <ArrowRight className="ml-2" size={18} />
              </motion.a>
              <motion.a
                href="tel:2152362427"
                className="btn btn-outline border-brand-400 text-brand-300 hover:bg-brand-500 hover:text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="mr-2" size={18} />
                (215) 236-2427
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-300">20+</div>
                <div className="text-xs sm:text-sm text-gray-300 leading-tight">
                  <span className="hidden sm:inline">Years Experience</span>
                  <span className="sm:hidden">Years</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-300">$50M+</div>
                <div className="text-xs sm:text-sm text-gray-300 leading-tight">
                  <span className="hidden sm:inline">Recovered for Clients</span>
                  <span className="sm:hidden">Recovered</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-300">98%</div>
                <div className="text-xs sm:text-sm text-gray-300 leading-tight">
                  <span className="hidden sm:inline">Success Rate</span>
                  <span className="sm:hidden">Success</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional legal consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Floating Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-white rounded-xl shadow-xl p-4 sm:p-6 max-w-xs sm:max-w-sm"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-100 rounded-full flex items-center justify-center">
                  <Phone className="text-brand-600" size={18} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Available 24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Emergency calls</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                We understand that accidents don't happen on schedule. That's why we're available 
                around the clock for emergency consultations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
