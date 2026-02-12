'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Globe, MessageCircle, ChevronLeft, ChevronRight, Star, Check } from 'lucide-react'

type Language = 'en' | 'fr' | 'ar'

const WHATSAPP_NUMBER = '212616439911'

const translations = {
  en: {
    selectLanguage: 'Select Your Language',
    nav: { home: 'Home', services: 'Services', collection: 'Collection', about: 'About', contact: 'Contact', book: 'Book Appointment' },
    hero: { title: 'See the World Clearly', subtitle: 'Experience Premium Vision Care', desc: 'Professional eye exams and the latest international eyewear models.' },
    brand: { title: 'Where Precision Meets Style', desc: 'We combine professional eye care with modern aesthetics to provide you with premium eyewear tailored to your lifestyle.' },
    services: { title: 'Our Services', eye: 'Eye Examination', medical: 'Medical Glasses', sun: 'Sunglasses', repair: 'Repair Service' },
    collection: { title: 'Premium Collection', desc: 'Discover our curated selection of luxury eyewear' },
    why: { title: 'Why Choose 65 Optic', eq: 'Latest Equipment', brands: 'International Brands', care: 'Personalized Care', price: 'Affordable Luxury' },
    testimonials: { title: 'What Our Clients Say' },
    contact: { title: 'Get in Touch', location: 'Location', hours: 'Opening Hours', phone: 'Phone', whatsapp: 'WhatsApp' },
    booking: { name: 'Full Name', phone: 'Phone Number', service: 'Select Service', date: 'Date', time: 'Time', note: 'Additional Notes', submit: 'Send via WhatsApp', close: 'Close' },
    footer: { rights: 'All rights reserved' }
  },
  fr: {
    selectLanguage: 'Choisissez Votre Langue',
    nav: { home: 'Accueil', services: 'Services', collection: 'Collection', about: 'À Propos', contact: 'Contact', book: 'Réserver' },
    hero: { title: 'Voyez le Monde Clairement', subtitle: 'Expérience Soins de la Vision Premium', desc: 'Examens oculaires professionnels et derniers modèles de lunettes internationales.' },
    brand: { title: 'Où la Précision Rencontre le Style', desc: 'Nous combinons les soins oculaires professionnels avec l\'esthétique moderne pour vous offrir des lunettes de luxe adaptées à votre style de vie.' },
    services: { title: 'Nos Services', eye: 'Examen Oculaire', medical: 'Lunettes Médicales', sun: 'Lunettes de Soleil', repair: 'Service de Réparation' },
    collection: { title: 'Collection Premium', desc: 'Découvrez notre sélection curatée de lunettes de luxe' },
    why: { title: 'Pourquoi Choisir 65 Optic', eq: 'Équipements Dernière Génération', brands: 'Marques Internationales', care: 'Soins Personnalisés', price: 'Luxe Abordable' },
    testimonials: { title: 'Ce Que Disent Nos Clients' },
    contact: { title: 'Nous Contacter', location: 'Localisation', hours: 'Heures d\'Ouverture', phone: 'Téléphone', whatsapp: 'WhatsApp' },
    booking: { name: 'Nom Complet', phone: 'Numéro de Téléphone', service: 'Sélectionner Service', date: 'Date', time: 'Heure', note: 'Notes Supplémentaires', submit: 'Envoyer via WhatsApp', close: 'Fermer' },
    footer: { rights: 'Tous droits réservés' }
  },
  ar: {
    selectLanguage: 'اختر لغتك',
    nav: { home: 'الرئيسية', services: 'الخدمات', collection: 'المجموعة', about: 'عننا', contact: 'اتصل', book: 'احجز موعد' },
    hero: { title: 'رؤية أوضح لحياة أفضل', subtitle: 'تجربة رعاية بصرية فاخرة', desc: 'فحوصات عين احترافية وأحدث موديلات النظارات العالمية.' },
    brand: { title: 'حيث يلتقي الدقة بالأناقة', desc: 'نجمع بين رعاية العيون المهنية والجماليات الحديثة لنقدم لك نظارات فاخرة مصممة حسب نمط حياتك.' },
    services: { title: 'خدماتنا', eye: 'فحص العيون', medical: 'النظارات الطبية', sun: 'النظارات الشمسية', repair: 'خدمة الإصلاح' },
    collection: { title: 'المجموعة الفاخرة', desc: 'اكتشف مجموعتنا المختارة من النظارات الفاخرة' },
    why: { title: 'لماذا تختار 65 Optic', eq: 'أحدث المعدات', brands: 'ماركات عالمية', care: 'رعاية شخصية', price: 'فخامة بأسعار معقولة' },
    testimonials: { title: 'آراء عملائنا' },
    contact: { title: 'تواصل معنا', location: 'الموقع', hours: 'أوقات العمل', phone: 'الهاتف', whatsapp: 'واتساب' },
    booking: { name: 'الاسم الكامل', phone: 'رقم الهاتف', service: 'اختر الخدمة', date: 'التاريخ', time: 'الوقت', note: 'ملاحظات إضافية', submit: 'أرسل عبر واتساب', close: 'إغلاق' },
    footer: { rights: 'جميع الحقوق محفوظة' }
  }
}

const openingHours = [
  { day: 'Monday', times: ['09:30 - 13:30', '16:00 - 21:30'] },
  { day: 'Tuesday', times: ['09:30 - 13:30', '16:00 - 21:30'] },
  { day: 'Wednesday', times: ['09:30 - 13:30', '16:00 - 21:30'] },
  { day: 'Thursday', times: ['09:30 - 13:30', '16:00 - 21:30'] },
  { day: 'Friday', times: ['09:30 - 13:00', '16:00 - 21:30'] },
  { day: 'Saturday', times: ['09:00 - 18:00'] },
  { day: 'Sunday', times: ['Closed'] }
]

const testimonials = [
  { name: 'Sarah Johnson', text: 'Best eyewear experience in the city. Professional service and stunning collection!', rating: 5 },
  { name: 'Ahmed Hassan', text: 'Excellent quality and friendly staff. Highly recommend 65 Optic!', rating: 5 },
  { name: 'Maria Garcia', text: 'Found the perfect frames. Worth every penny!', rating: 5 }
]

export default function Home() {
  const [lang, setLang] = useState<Language>('en')
  const [showLanguageSelector, setShowLanguageSelector] = useState(true)
  const [showSplash, setShowSplash] = useState(!showLanguageSelector)
  const [showModal, setShowModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '', note: '' })

  const t = translations[lang]
  const isRtl = lang === 'ar'

  useEffect(() => {
    if (!showLanguageSelector) {
      setShowSplash(true)
      const timer = setTimeout(() => setShowSplash(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showLanguageSelector])

  useEffect(() => {
    if (showSplash || showLanguageSelector) return
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [showSplash, showLanguageSelector])

  const selectLanguage = (newLang: Language) => {
    setLang(newLang)
    setShowLanguageSelector(false)
  }

  const generateWhatsAppMessage = () => {
    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      alert('Please fill all required fields')
      return
    }

    const messages = {
      en: `Hello,\nI would like to book an appointment at 65 Optic.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nDate: ${form.date}\nTime: ${form.time}${form.note ? `\nNotes: ${form.note}` : ''}\n\nThank you.`,
      fr: `Bonjour,\nJe souhaite prendre un rendez-vous chez 65 Optic.\n\nNom: ${form.name}\nTéléphone: ${form.phone}\nService: ${form.service}\nDate: ${form.date}\nHeure: ${form.time}${form.note ? `\nNotes: ${form.note}` : ''}\n\nMerci.`,
      ar: `السلام عليكم،\nأرغب في حجز موعد لدى 65 Optic.\n\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالخدمة: ${form.service}\nالتاريخ: ${form.date}\nالوقت: ${form.time}${form.note ? `\nملاحظات: ${form.note}` : ''}\n\nشكراً.`
    }

    const encoded = encodeURIComponent(messages[lang])
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')
    setShowModal(false)
    setForm({ name: '', phone: '', service: '', date: '', time: '', note: '' })
  }

  // Language Selector Screen
  if (showLanguageSelector) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260212_095647_0000-JKlKCO91ybx7dmL4WvW8RFS027tdjA.png" alt="65 Optic Logo" className="w-32 h-32 mx-auto mb-12" />
          <h1 className="text-4xl font-bold text-white mb-16">{t.selectLanguage}</h1>
          <div className="space-y-4 max-w-sm mx-auto px-4">
            <button onClick={() => selectLanguage('en')} className="w-full py-4 bg-yellow-500 text-black font-semibold text-lg rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all">English</button>
            <button onClick={() => selectLanguage('fr')} className="w-full py-4 bg-yellow-500 text-black font-semibold text-lg rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all">Français</button>
            <button onClick={() => selectLanguage('ar')} className="w-full py-4 bg-yellow-500 text-black font-semibold text-lg rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all">العربية</button>
          </div>
        </div>
      </div>
    )
  }

  // Splash Screen (3-second logo animation)
  if (showSplash) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="animate-intro-glow">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260212_095647_0000-JKlKCO91ybx7dmL4WvW8RFS027tdjA.png" alt="65 Optic Logo" className="w-48 h-48 animate-intro-zoom" />
        </div>
      </div>
    )
  }

  return (
    <main className={`w-full ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260212_095647_0000-JKlKCO91ybx7dmL4WvW8RFS027tdjA.png" alt="65 Optic" className="w-12 h-12" />
          <div className="hidden md:flex gap-12">
            {Object.values(t.nav).slice(0, 5).map((item, i) => (
              <a key={i} href="#" className="text-white/70 hover:text-yellow-500 transition-colors text-sm font-medium">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setLang(lang === 'en' ? 'fr' : lang === 'fr' ? 'ar' : 'en')} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white">
              <Globe size={20} />
            </button>
            <button onClick={() => setShowModal(true)} className="hidden sm:block px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/40 transition-all">{t.nav.book}</button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white"><Menu size={24} /></button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 pb-4 space-y-2 px-4">
            {Object.values(t.nav).map((item, i) => <a key={i} href="#" className="block text-white/70 hover:text-yellow-500 py-2 text-sm">{item}</a>)}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/hero-eyewear.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl text-yellow-500 font-medium mb-4 animate-fade-in-delay">{t.hero.subtitle}</p>
          <p className="text-base md:text-lg text-white/70 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">{t.hero.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button onClick={() => setShowModal(true)} className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={20} /> {t.nav.book}
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all">{t.collection.title}</button>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">{t.brand.title}</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{t.brand.desc}</p>
          <div className="flex justify-center gap-2 mt-12">{[...Array(4)].map((_, i) => <div key={i} className="w-2 h-2 bg-yellow-500 rounded-full"></div>)}</div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-20 text-center">{t.services.title}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[t.services.eye, t.services.medical, t.services.sun, t.services.repair].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-lg mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-black">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">{t.collection.title}</h2>
          <p className="text-center text-gray-300 mb-20">{t.collection.desc}</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative h-80 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 font-semibold text-lg">Premium Collection</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-20 text-center">{t.why.title}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300"></div>
            <div className="space-y-8">
              {[t.why.eq, t.why.brands, t.why.care, t.why.price].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <Check size={28} className="text-yellow-500 flex-shrink-0 mt-1" />
                  <div><p className="text-lg font-semibold text-black">{item}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center">{t.testimonials.title}</h2>
          <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">{[...Array(testimonials[testimonialIdx].rating)].map((_, i) => <Star key={i} size={24} className="fill-yellow-500 text-yellow-500" />)}</div>
            <p className="text-xl text-white mb-6 italic">"{testimonials[testimonialIdx].text}"</p>
            <p className="text-yellow-500 font-semibold mb-8">{testimonials[testimonialIdx].name}</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setTestimonialIdx((p) => (p - 1 + testimonials.length) % testimonials.length)} className="p-2 border border-white/20 text-white hover:border-yellow-500 rounded-lg"><ChevronLeft size={20} /></button>
              <button onClick={() => setTestimonialIdx((p) => (p + 1) % testimonials.length)} className="p-2 border border-white/20 text-white hover:border-yellow-500 rounded-lg"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-20 text-center">{t.contact.title}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">{t.contact.hours}</h3>
              <div className="space-y-3 text-gray-700">
                {openingHours.map((h, i) => (
                  <p key={i}><strong>{h.day}:</strong> {h.times.join(' / ')}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <button onClick={() => setShowModal(true)} className="w-full px-8 py-6 bg-black text-white font-semibold text-lg rounded-lg hover:bg-gray-800 transition-all mb-8">{t.contact.title}</button>
              <div className="flex gap-4 justify-center">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-100 hover:bg-yellow-500 text-black rounded-lg transition-colors"><MessageCircle size={24} /></a>
                <a href="https://www.instagram.com/_65optic" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-100 hover:bg-yellow-500 text-black rounded-lg transition-colors">IG</a>
                <a href="https://www.facebook.com/share/1BKsR8yfWz/" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-100 hover:bg-yellow-500 text-black rounded-lg transition-colors">FB</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 65 OPTIC. {t.footer.rights}.</p>
        </div>
      </footer>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-modal-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-black">{t.nav.book}</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-black"><X size={24} /></button>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder={t.booking.name} value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500" />
              <input type="tel" placeholder={t.booking.phone} value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500" />
              <select value={form.service} onChange={(e) => setForm({...form, service: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500">
                <option value="">{t.booking.service}</option>
                <option>{t.services.eye}</option>
                <option>{t.services.medical}</option>
                <option>{t.services.sun}</option>
                <option>{t.services.repair}</option>
              </select>
              <input type="date" value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500" />
              <input type="time" value={form.time} onChange={(e) => setForm({...form, time: e.target.value})} min="09:00" max="21:30" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500" />
              <textarea placeholder={t.booking.note} value={form.note} onChange={(e) => setForm({...form, note: e.target.value})} rows={3} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500"></textarea>
            </div>
            <div className="flex gap-4 mt-8">
              <button onClick={generateWhatsAppMessage} className="flex-1 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg transition-all">{t.booking.submit}</button>
              <button onClick={() => setShowModal(false)} className="flex-1 px-6 py-3 border-2 border-gray-200 text-black font-semibold rounded-lg hover:bg-gray-100 transition-all">{t.booking.close}</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
