'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Award, Users, Target } from 'lucide-react'

export default function FirmHistory() {
  const milestones = [
    {
      year: '2003',
      title: 'Firm Founded',
      description: 'Thomas W. Harrity, Esquire founded Harrity & Associates with a mission to establish a boutique law firm specializing in high-quality prosecution and defense of civil matters.',
      icon: Calendar
    },
    {
      year: '2005',
      title: 'First Major Settlement',
      description: 'Achieved our first million-dollar settlement, establishing our reputation for excellence in personal injury representation.',
      icon: Award
    },
    {
      year: '2010',
      title: 'Expanded Practice Areas',
      description: 'Added subrogation and professional malpractice to our practice areas, serving a broader range of clients.',
      icon: Target
    },
    {
      year: '2015',
      title: 'Top 40 Recognition',
      description: 'Received recognition as a Top 40 law firm, solidifying our position as a leading boutique practice in Philadelphia.',
      icon: Award
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Implemented modern technology and digital tools to enhance client service and case management efficiency.',
      icon: Users
    },
    {
      year: '2024',
      title: 'Continued Excellence',
      description: 'Maintaining our commitment to personalized service and exceptional results for over two decades.',
      icon: Award
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Philadelphia legal district"
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
              Firm History
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              For over two decades, Harrity & Associates has been dedicated to providing 
              exceptional legal representation without the overhead and cumbersome structure 
              of large law firms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in January 2003 by Thomas W. Harrity, Esquire, our mission was to establish 
                a boutique law firm specializing in high-quality prosecution and defense of civil 
                matters without the overhead and cumbersome structure of large law firms.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Harrity & Associates, your phone call will be answered by an attorney who is 
                knowledgeable in the law and dedicated to providing superior service. We believe 
                in the power of personalized attention and direct communication with our clients.
              </p>
              <div className="bg-brand-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-brand-800 mb-3">
                  Our Core Values
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-500 rounded-full mr-3"></div>
                    Personalized client service
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-500 rounded-full mr-3"></div>
                    Direct attorney accessibility
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-500 rounded-full mr-3"></div>
                    Excellence in legal representation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-500 rounded-full mr-3"></div>
                    Integrity and professionalism
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Philadelphia legal district"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our founding in 2003 to today, we've built a reputation for excellence 
              and client-focused service.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mr-4">
                          <milestone.icon className="text-brand-600" size={24} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-brand-600">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {milestone.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
