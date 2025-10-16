'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { Calendar, Clock, Phone, CheckCircle } from 'lucide-react'

const Consultation = () => {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    setIsSubmitted(true)
    reset()
  }

  return (
    <section id="consultation" ref={ref} className="section-padding bg-brand-600 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Consultation background"
          fill
          className="object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Your Free Consultation Today
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Don't wait to get the legal help you need. Contact us today for a free, no-obligation 
              consultation. We're here to listen and provide expert guidance.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-brand-200" size={20} />
                <span className="text-gray-100">Free initial consultation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-brand-200" size={20} />
                <span className="text-gray-100">No fee unless we win</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-brand-200" size={20} />
                <span className="text-gray-100">Available 24/7 for emergencies</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <Calendar className="mx-auto mb-2 text-brand-200" size={24} />
                <div className="text-sm text-gray-100">Same Day Response</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <Clock className="mx-auto mb-2 text-brand-200" size={24} />
                <div className="text-sm text-gray-100">Flexible Scheduling</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <Phone className="mx-auto mb-2 text-brand-200" size={24} />
                <div className="text-sm text-gray-100">Direct Attorney Access</div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-6">
                  We've received your consultation request. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-primary"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Schedule Your Free Consultation
                </h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
                  <div>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      placeholder="Full Name"
                      className="form-input text-sm sm:text-base"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      placeholder="Email Address"
                      className="form-input text-sm sm:text-base"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register('phone', { required: 'Phone Number is required' })}
                      type="tel"
                      placeholder="Phone Number"
                      className="form-input text-sm sm:text-base"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>
                    )}
                  </div>
                  <div>
                    <textarea
                      {...register('message', { required: 'Case description is required' })}
                      rows={4}
                      placeholder="Briefly Describe Your Case"
                      className="form-textarea text-sm sm:text-base"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full btn bg-brand-600 text-white hover:bg-brand-700 text-lg py-3"
                  >
                    Request Consultation
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Consultation
