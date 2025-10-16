'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { DollarSign, Award, Users, TrendingUp } from 'lucide-react'

export default function Settlements() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Settlements background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-700/60"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Successful Settlements
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Our track record of successful settlements and verdicts demonstrates our 
              commitment to achieving the best possible outcomes for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Settlement Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: '$50M+',
                description: 'Total Recovered for Clients'
              },
              {
                icon: Award,
                title: '98%',
                description: 'Success Rate'
              },
              {
                icon: Users,
                title: '500+',
                description: 'Happy Clients'
              },
              {
                icon: TrendingUp,
                title: '20+',
                description: 'Years of Experience'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-brand-600" size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.title}
                </div>
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
