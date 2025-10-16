'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/firm-history', label: 'Firm History' },
  { href: '/attorney-profile', label: 'Attorney Profile' },
  { href: '/practice', label: 'Practice Areas' },
  { href: '/settlements', label: 'Settlements' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomePage = pathname === '/'
  const shouldUseDarkNav = isHomePage && !isScrolled

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      shouldUseDarkNav ? 'bg-transparent' : 'bg-white shadow-lg'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={`text-xl sm:text-2xl font-bold transition-colors duration-200 ${
              shouldUseDarkNav ? 'text-white' : 'text-brand-500'
            }`}>
              Harrity Law
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-brand-500 font-semibold'
                    : shouldUseDarkNav
                    ? 'text-white hover:text-brand-200'
                    : 'text-gray-900 hover:text-brand-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#consultation"
              className="btn bg-brand-600 text-white hover:bg-brand-700 text-sm"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
              shouldUseDarkNav 
                ? 'text-white hover:text-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-300'
                : 'text-gray-900 hover:text-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500'
            }`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg rounded-lg mt-2 mx-2 overflow-hidden"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-brand-500 bg-brand-50 font-semibold'
                      : 'text-gray-900 hover:text-brand-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#consultation"
                className="block w-full mt-4 btn bg-brand-600 text-white hover:bg-brand-700 text-center py-3"
                onClick={() => setIsOpen(false)}
              >
                Free Consultation
              </Link>
              <a
                href="tel:2152362427"
                className="flex items-center justify-center space-x-2 mt-2 btn bg-gray-100 text-brand-600 border-2 border-brand-500 hover:bg-gray-200 py-3"
              >
                <Phone size={16} />
                <span>(215) 236-2427</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
