'use client'

import { Facebook, Instagram, Twitter } from 'lucide-react'

interface FooterProps {
  language: 'en' | 'ar'
}

export default function Footer({ language }: FooterProps) {
  const year = new Date().getFullYear()
  const companyName = '65 OPTIC'
  const copyright = language === 'en' ? 'All rights reserved' : 'جميع الحقوق محفوظة'
  const privacy = language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'
  const terms = language === 'en' ? 'Terms of Service' : 'شروط الخدمة'

  return (
    <footer className="bg-primary text-white">
      <div className="container-max py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">{companyName}</h3>
            <p className="text-white/60 text-sm">
              {language === 'en'
                ? 'Premium eyewear and vision care for the modern individual.'
                : 'نظارات فاخرة وعناية بصرية للفرد الحديث.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'روابط سريعة'}
            </h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#home" className="hover:text-accent transition-colors">{language === 'en' ? 'Home' : 'الرئيسية'}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{language === 'en' ? 'Services' : 'الخدمات'}</a></li>
              <li><a href="#collection" className="hover:text-accent transition-colors">{language === 'en' ? 'Collection' : 'المجموعة'}</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">{language === 'en' ? 'Contact' : 'اتصل'}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">
              {language === 'en' ? 'Services' : 'الخدمات'}
            </h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#services" className="hover:text-accent transition-colors">{language === 'en' ? 'Eye Examination' : 'فحص العيون'}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{language === 'en' ? 'Medical Glasses' : 'النظارات الطبية'}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{language === 'en' ? 'Sunglasses' : 'النظارات الشمسية'}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{language === 'en' ? 'Repair Service' : 'خدمة الإصلاح'}</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">
              {language === 'en' ? 'Follow Us' : 'تابعنا'}
            </h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/10 hover:bg-accent text-white rounded-lg transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-accent text-white rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-accent text-white rounded-lg transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
            <p>© {year} {companyName}. {copyright}.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">{privacy}</a>
              <a href="#" className="hover:text-accent transition-colors">{terms}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
