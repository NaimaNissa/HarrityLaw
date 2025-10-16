'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
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

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Personal Injury Client',
      content: 'Mr. Harrity and his team provided exceptional representation during my personal injury case. They were professional, responsive, and achieved a favorable outcome that exceeded my expectations.',
      rating: 5,
      caseType: 'Car Accident Settlement'
    },
    {
      name: 'John D.',
      role: 'Business Client',
      content: 'The attention to detail and personalized service at Harrity & Associates is unmatched. They handled our contract dispute with expertise and got us the resolution we needed.',
      rating: 5,
      caseType: 'Contract Dispute'
    },
    {
      name: 'Maria L.',
      role: 'Medical Malpractice Client',
      content: 'I am incredibly grateful for the compassionate and effective legal support I received. They navigated a complex medical malpractice case with skill and dedication.',
      rating: 5,
      caseType: 'Medical Malpractice Claim'
    },
    {
      name: 'Robert S.',
      role: 'Subrogation Client',
      content: 'Harrity & Associates delivered outstanding results in our subrogation claim. Their expertise saved our company significant resources and time.',
      rating: 5,
      caseType: 'Insurance Subrogation'
    },
    {
      name: 'Emily R.',
      role: 'Personal Injury Client',
      content: 'From the initial consultation to the final settlement, the team was supportive and kept me informed. Highly recommend their services for personal injury cases.',
      rating: 5,
      caseType: 'Slip & Fall Injury'
    },
    {
      name: 'Michael T.',
      role: 'Civil Defense Client',
      content: 'Facing a lawsuit was stressful, but Harrity & Associates provided excellent defense representation. They protected my interests and achieved a favorable outcome.',
      rating: 5,
      caseType: 'Civil Defense'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Legal consultation background"
          fill
          className="object-cover opacity-5"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from individuals and businesses who have experienced our dedicated 
            and effective legal representation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden border border-gray-100"
            >
              <Quote className="absolute top-6 right-6 text-brand-100" size={48} />
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-brand-500 fill-brand-500 inline-block" size={18} />
                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-500">{testimonial.caseType}</p>
              </div>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="font-semibold text-gray-900">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-600">
                {testimonial.role}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#consultation"
            className="btn bg-brand-600 text-white hover:bg-brand-700 text-lg px-8 py-4"
          >
            Schedule Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
