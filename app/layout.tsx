import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Harrity Law - Experienced Personal Injury Attorneys in Philadelphia',
  description: 'Harrity & Associates provides high-quality legal representation for personal injury cases in Philadelphia. Free consultation, no fee unless we win.',
  keywords: 'personal injury attorney, Philadelphia lawyer, car accident lawyer, slip and fall, workplace injury, medical malpractice',
  authors: [{ name: 'Harrity & Associates' }],
  openGraph: {
    title: 'Harrity Law - Experienced Personal Injury Attorneys in Philadelphia',
    description: 'Harrity & Associates provides high-quality legal representation for personal injury cases in Philadelphia. Free consultation, no fee unless we win.',
    url: 'https://harritylaw.com',
    siteName: 'Harrity Law',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Harrity Law - Philadelphia Personal Injury Attorneys',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harrity Law - Experienced Personal Injury Attorneys in Philadelphia',
    description: 'Harrity & Associates provides high-quality legal representation for personal injury cases in Philadelphia. Free consultation, no fee unless we win.',
    images: ['https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
