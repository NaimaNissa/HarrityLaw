'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, GraduationCap, Briefcase, Users } from 'lucide-react'

export default function AttorneyProfile() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Attorney profile background"
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
              Attorney Profile
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Meet Thomas W. Harrity, Esquire, the founding attorney of Harrity & Associates, 
              dedicated to providing exceptional legal representation for over two decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Attorney Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Thomas W. Harrity, Esquire
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Thomas W. Harrity founded Harrity & Associates in January 2003 with a vision to create 
                a boutique law firm that provides high-quality legal representation without the overhead 
                and cumbersome structure of large law firms.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 20 years of experience in civil litigation, Mr. Harrity has successfully 
                represented clients in personal injury cases, subrogation matters, professional 
                malpractice claims, and general negligence cases.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-600 mb-2">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Cases Handled</div>
                </div>
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
                  alt="Thomas W. Harrity, Esquire"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qualifications & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mr. Harrity's dedication to excellence has earned him recognition from 
              leading legal organizations and publications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: 'Education',
                description: 'Juris Doctor from Temple University School of Law'
              },
              {
                icon: Award,
                title: 'Top 40 Recognition',
                description: 'Recognized as Top 40 law firm in Pennsylvania'
              },
              {
                icon: Briefcase,
                title: 'Practice Areas',
                description: 'Personal Injury, Subrogation, Professional Malpractice'
              },
              {
                icon: Users,
                title: 'Client Focus',
                description: 'Direct attorney access for all clients'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-brand-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
