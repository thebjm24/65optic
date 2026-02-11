'use client'

import { MessageCircle, Phone, ArrowRight } from 'lucide-react'

interface HeroProps {
  language: 'en' | 'ar'
}

export default function HeroSection({ language }: HeroProps) {
  const title = language === 'en' ? 'See the World Clearly' : 'رؤية العالم بوضوح'
  const subtitle = language === 'en' 
    ? 'Experience Premium Vision Care'
    : 'اختبر الرعاية البصرية الممتازة'
  const description = language === 'en'
    ? 'Professional eye examination with the latest international brands'
    : 'فحص عيون احترافي مع أحدث العلامات التجارية العالمية'
  const whatsappBtn = language === 'en' ? 'Book via WhatsApp' : 'احجز عبر واتساب'
  const viewBtn = language === 'en' ? 'View Collection' : 'عرض المجموعة'

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-dark to-black opacity-90"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.7s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl text-accent font-medium mb-4 animate-fade-in">
          {subtitle}
        </p>

        <p className="text-base md:text-lg text-white/70 mb-12 animate-fade-in-up max-w-2xl mx-auto">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <button className="group px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all flex items-center justify-center gap-2">
            <MessageCircle size={20} />
            {whatsappBtn}
          </button>
          <button className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            {viewBtn}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white/50 text-sm mb-2">Scroll to explore</div>
          <svg className="w-6 h-6 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
