'use client'

import { Check } from 'lucide-react'

interface WhyChooseProps {
  language: 'en' | 'ar'
}

export default function WhyChooseSection({ language }: WhyChooseProps) {
  const title = language === 'en' ? 'Why Choose 65 OPTIC' : 'لماذا تختار 65 أوبتك'
  
  const features = [
    {
      titleEn: 'Latest Equipment',
      titleAr: 'أحدث المعدات',
      descEn: 'State-of-the-art diagnostic technology for accurate vision assessment'
    },
    {
      titleEn: 'International Brands',
      titleAr: 'العلامات التجارية العالمية',
      descEn: 'Exclusive collection from world-renowned eyewear manufacturers'
    },
    {
      titleEn: 'Personalized Care',
      titleAr: 'رعاية شخصية',
      descEn: 'Expert consultants dedicated to finding your perfect frame'
    },
    {
      titleEn: 'Affordable Luxury',
      titleAr: 'الفخامة بأسعار معقولة',
      descEn: 'Premium quality eyewear at competitive prices'
    },
  ]

  return (
    <section id="about" className="py-32 px-4 bg-white">
      <div className="container-max">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-20 text-center">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto text-accent/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 8v13m0-13V3m0 0a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
                <p className="text-accent/50 font-display text-2xl">Premium Eyewear</p>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-primary">
                      <Check size={24} className="font-bold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary mb-2">
                      {language === 'en' ? feature.titleEn : feature.titleAr}
                    </h3>
                    <p className="text-gray-600">
                      {feature.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
