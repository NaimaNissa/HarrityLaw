'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  Car, 
  Shield, 
  UserCheck, 
  FileText, 
  Scale, 
  Gavel, 
  ArrowRight 
} from 'lucide-react'

const PracticeAreas = () => {
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

  const practiceAreas = [
    {
      icon: Car,
      title: 'Personal Injury',
      description: 'Comprehensive representation for accident victims, including car accidents, slip and falls, and workplace injuries.',
      features: ['Car Accidents', 'Slip & Fall', 'Workplace Injuries', 'Motorcycle Accidents'],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Shield,
      title: 'Subrogation',
      description: 'Expert subrogation services to recover costs for insurance companies and self-insured entities.',
      features: ['Insurance Recovery', 'Property Damage', 'Workers Compensation', 'Healthcare Subrogation'],
      image: 'https://images.unsplash.com/photo-1560250097-0b73528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: UserCheck,
      title: 'Professional Malpractice',
      description: 'Representation for victims of medical malpractice, legal malpractice, and other professional negligence.',
      features: ['Medical Malpractice', 'Legal Malpractice', 'Professional Negligence', 'Dental Malpractice'],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: FileText,
      title: 'Breach of Contract',
      description: 'Skilled contract dispute resolution and litigation for businesses and individuals.',
      features: ['Business Contracts', 'Employment Disputes', 'Real Estate Contracts', 'Service Agreements'],
      image: 'https://images.unsplash.com/photo-1560250097-0b73528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Scale,
      title: 'General Negligence',
      description: 'Comprehensive negligence claims including premises liability and product liability cases.',
      features: ['Premises Liability', 'Product Liability', 'Wrongful Death', 'Negligent Security'],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Gavel,
      title: 'Civil Defense',
      description: 'Strong defense representation for individuals and businesses facing civil litigation.',
      features: ['Civil Litigation', 'Insurance Defense', 'Business Disputes', 'Personal Defense'],
      image: 'https://images.unsplash.com/photo-1560250097-0b73528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Practice Areas
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in a wide range of civil litigation matters, providing expert 
            legal representation for both plaintiffs and defendants.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-4 sm:p-6 hover:scale-105 transition-transform duration-300"
            >
              {/* Practice Area Image */}
              <div className="relative h-32 sm:h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-sm sm:text-base font-semibold text-white">
                    {area.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {area.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {area.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              <a href="/practice" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 transition-colors duration-200">
                Learn More
                <ArrowRight className="ml-1" size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas
