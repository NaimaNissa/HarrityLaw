'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Car, Shield, UserCheck, FileText, Scale, Gavel } from 'lucide-react'

export default function PracticeAreas() {
  const practiceAreas = [
    {
      icon: Car,
      title: 'Personal Injury',
      description: 'Comprehensive representation for accident victims, including car accidents, slip and falls, and workplace injuries.',
      features: ['Car Accidents', 'Slip & Fall', 'Workplace Injuries', 'Motorcycle Accidents', 'Truck Accidents', 'Pedestrian Accidents']
    },
    {
      icon: Shield,
      title: 'Subrogation',
      description: 'Expert subrogation services to recover costs for insurance companies and self-insured entities.',
      features: ['Insurance Recovery', 'Property Damage', 'Workers Compensation', 'Healthcare Subrogation', 'Product Liability Subrogation']
    },
    {
      icon: UserCheck,
      title: 'Professional Malpractice',
      description: 'Representation for victims of medical malpractice, legal malpractice, and other professional negligence.',
      features: ['Medical Malpractice', 'Legal Malpractice', 'Professional Negligence', 'Dental Malpractice', 'Accounting Malpractice']
    },
    {
      icon: FileText,
      title: 'Breach of Contract',
      description: 'Skilled contract dispute resolution and litigation for businesses and individuals.',
      features: ['Business Contracts', 'Employment Disputes', 'Real Estate Contracts', 'Service Agreements', 'Partnership Disputes']
    },
    {
      icon: Scale,
      title: 'General Negligence',
      description: 'Comprehensive negligence claims including premises liability and product liability cases.',
      features: ['Premises Liability', 'Product Liability', 'Wrongful Death', 'Negligent Security', 'Dog Bites']
    },
    {
      icon: Gavel,
      title: 'Civil Defense',
      description: 'Strong defense representation for individuals and businesses facing civil litigation.',
      features: ['Civil Litigation', 'Insurance Defense', 'Business Disputes', 'Personal Defense', 'Contractual Disputes']
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Practice areas background"
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
              Practice Areas
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We specialize in a wide range of civil litigation matters, providing expert 
              legal representation for both plaintiffs and defendants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mr-4">
                    <area.icon className="text-brand-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {area.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {area.description}
                </p>
                
                <div className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
