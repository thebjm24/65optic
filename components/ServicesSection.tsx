'use client'

import { Eye, Glasses, Sun, Wrench } from 'lucide-react'

interface ServicesProps {
  language: 'en' | 'ar'
}

const services = [
  {
    icon: Eye,
    titleEn: 'Eye Examination',
    titleAr: 'فحص العيون',
    descEn: 'Professional eye examinations with latest diagnostic equipment',
    descAr: 'فحص عيون احترافي باستخدام أحدث المعدات التشخيصية'
  },
  {
    icon: Glasses,
    titleEn: 'Medical Glasses',
    titleAr: 'النظارات الطبية',
    descEn: 'Prescription glasses tailored to your vision needs',
    descAr: 'نظارات طبية حسب احتياجات رؤيتك'
  },
  {
    icon: Sun,
    titleEn: 'Sunglasses',
    titleAr: 'النظارات الشمسية',
    descEn: 'Premium sunglasses from international luxury brands',
    descAr: 'نظارات شمسية فاخرة من العلامات التجارية العالمية'
  },
  {
    icon: Wrench,
    titleEn: 'Repair Service',
    titleAr: 'خدمة الإصلاح',
    descEn: 'Expert repair and maintenance for all eyewear',
    descAr: 'إصلاح وصيانة احترافية لجميع النظارات'
  },
]

export default function ServicesSection({ language }: ServicesProps) {
  const title = language === 'en' ? 'Our Services' : 'خدماتنا'

  return (
    <section id="services" className="py-32 px-4 bg-gray-light">
      <div className="container-max">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-20 text-center">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const title = language === 'en' ? service.titleEn : service.titleAr
            const desc = language === 'en' ? service.descEn : service.descAr

            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover-lift hover:shadow-lg transition-all"
              >
                <div className="mb-6 inline-block p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon size={32} className="text-accent" />
                </div>

                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  {title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
