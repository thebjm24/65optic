'use client'

import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'

interface NavbarProps {
  language: 'en' | 'ar'
  setLanguage: (lang: 'en' | 'ar') => void
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = language === 'en' 
    ? ['Home', 'Services', 'Collection', 'About', 'Contact']
    : ['الرئيسية', 'الخدمات', 'المجموعة', 'عن', 'اتصل']

  const navLinks = [
    { label: language === 'en' ? 'Home' : 'الرئيسية', href: '#home' },
    { label: language === 'en' ? 'Services' : 'الخدمات', href: '#services' },
    { label: language === 'en' ? 'Collection' : 'المجموعة', href: '#collection' },
    { label: language === 'en' ? 'About' : 'عن', href: '#about' },
    { label: language === 'en' ? 'Contact' : 'اتصل', href: '#contact' },
  ]

  const ctaText = language === 'en' ? 'Book Appointment' : 'احجز موعد'

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-white">65 OPTIC</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-accent transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/80 hover:text-yellow-500 transition-colors text-sm"
              aria-label="Switch language"
            >
              <Globe size={18} />
              <span>{language === 'en' ? 'AR' : 'EN'}</span>
            </button>

            {/* CTA Button */}
            <button className="hidden sm:block px-6 py-2.5 bg-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg transition-all">
              {ctaText}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white/80 hover:text-accent transition-colors text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full px-6 py-2.5 bg-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg transition-all mt-2">
              {ctaText}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
