'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Footer background"
          fill
          className="object-cover opacity-5"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-500">Harrity Law</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
              Experienced personal injury attorneys serving Philadelphia and surrounding areas since 2003.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/practice" className="text-gray-300 hover:text-brand-400 transition-colors duration-200">
                  Personal Injury
                </Link>
              </li>
              <li>
                <Link href="/practice" className="text-gray-300 hover:text-brand-400 transition-colors duration-200">
                  Subrogation
                </Link>
              </li>
              <li>
                <Link href="/practice" className="text-gray-300 hover:text-brand-400 transition-colors duration-200">
                  Professional Malpractice
                </Link>
              </li>
              <li>
                <Link href="/practice" className="text-gray-300 hover:text-brand-400 transition-colors duration-200">
                  Breach of Contract
                </Link>
              </li>
              <li>
                <Link href="/practice" className="text-gray-300 hover:text-brand-400 transition-colors duration-200">
                  General Negligence
                </Link>
              </li>
              <li>
                <Link href="/practice" className="text-gray-300 hover:text-brand-400 transition-colors duration-200">
                  Civil Defense
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/firm-history" className="text-gray-300 hover:text-brand-400 transition-colors duration-200">
                  Firm History
                </Link>
              </li>
              <li>
                <Link href="/attorney-profile" className="text-gray-300 hover:text-brand-400 transition-colors duration-200">
                  Attorney Profile
                </Link>
              </li>
              <li>
                <Link href="/settlements" className="text-gray-300 hover:text-brand-400 transition-colors duration-200">
                  Settlements
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-brand-400 transition-colors duration-200">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-400 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#consultation" className="text-gray-300 hover:text-brand-400 transition-colors duration-200">
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-brand-400 mt-1 flex-shrink-0" size={18} />
                <div className="text-gray-300">
                  <p>One Liberty Place</p>
                  <p>1650 Market Street, Suite 3600</p>
                  <p>Philadelphia, PA 19103</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-brand-400 flex-shrink-0" size={18} />
                <a
                  href="tel:2152362427"
                  className="text-gray-300 hover:text-brand-400 transition-colors duration-200"
                >
                  (215) 236-2427
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-brand-400 flex-shrink-0" size={18} />
                <a
                  href="mailto:info@harritylaw.com"
                  className="text-gray-300 hover:text-brand-400 transition-colors duration-200"
                >
                  info@harritylaw.com
                </a>
              </div>
            </div>
            <div className="mt-6">
              <a href="#consultation" className="btn bg-brand-600 text-white hover:bg-brand-700 w-full text-center">Free Consultation</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Harrity Law. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-brand-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-brand-400 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-brand-400 text-sm transition-colors duration-200">
                Legal Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
