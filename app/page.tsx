'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import BrandStatement from '@/components/BrandStatement'
import ServicesSection from '@/components/ServicesSection'
import CollectionSection from '@/components/CollectionSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en')

  return (
    <main className="w-full">
      <Navbar language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <BrandStatement language={language} />
      <ServicesSection language={language} />
      <CollectionSection language={language} />
      <WhyChooseSection language={language} />
      <TestimonialsSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </main>
  )
}
