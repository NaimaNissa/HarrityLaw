'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FileText, BookOpen, Download, ExternalLink } from 'lucide-react'

export default function Resources() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Resources background"
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
              Legal Resources
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Access helpful legal resources, guides, and information to better understand 
              your rights and the legal process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Legal Guides',
                description: 'Comprehensive guides on personal injury law, subrogation, and other practice areas.'
              },
              {
                icon: BookOpen,
                title: 'Case Studies',
                description: 'Real case examples and outcomes to help you understand the legal process.'
              },
              {
                icon: Download,
                title: 'Forms & Documents',
                description: 'Downloadable forms and documents to help with your legal matters.'
              },
              {
                icon: ExternalLink,
                title: 'Legal Links',
                description: 'Helpful links to legal resources, courts, and government agencies.'
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                  <resource.icon className="text-brand-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600">
                  {resource.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
