'use client'

import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react'

interface ContactProps {
  language: 'en' | 'ar'
}

export default function ContactSection({ language }: ContactProps) {
  const title = language === 'en' ? 'Visit Us Today' : 'زرنا اليوم'
  const address = language === 'en' ? '123 Premium Street, Dubai, UAE' : '123 شارع براميوم، دبي، الإمارات'
  const phone = '+971 4 123 4567'
  const whatsapp = '+971 50 123 4567'
  const hoursTitle = language === 'en' ? 'Opening Hours' : 'أوقات العمل'
  const btnText = language === 'en' ? 'Book Your Appointment Today' : 'احجز موعدك اليوم'

  const hours = [
    { day: language === 'en' ? 'Monday - Friday' : 'الاثنين - الجمعة', time: '9:00 AM - 8:00 PM' },
    { day: language === 'en' ? 'Saturday' : 'السبت', time: '10:00 AM - 6:00 PM' },
    { day: language === 'en' ? 'Sunday' : 'الأحد', time: '11:00 AM - 5:00 PM' },
  ]

  return (
    <section id="contact" className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-20 text-center">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left - Map */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600">Map will be embedded here</p>
              </div>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <MapPin size={24} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-black mb-1">
                  {language === 'en' ? 'Location' : 'الموقع'}
                </h3>
                <p className="text-gray-600">{address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Phone size={24} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-black mb-1">
                  {language === 'en' ? 'Phone' : 'الهاتف'}
                </h3>
                <a href={`tel:${phone}`} className="text-gray-600 hover:text-accent transition-colors">
                  {phone}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <MessageCircle size={24} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-black mb-1">
                  {language === 'en' ? 'WhatsApp' : 'واتساب'}
                </h3>
                <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} className="text-gray-600 hover:text-accent transition-colors">
                  {whatsapp}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Clock size={24} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-black mb-2">
                  {hoursTitle}
                </h3>
                <div className="space-y-1">
                  {hours.map((hour, index) => (
                    <p key={index} className="text-gray-600 text-sm">
                      <span className="font-medium">{hour.day}:</span> {hour.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="group px-8 py-4 bg-black text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
            {btnText}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
