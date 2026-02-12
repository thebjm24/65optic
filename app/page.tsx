'use client'

import { useState, useEffect, useCallback } from 'react'
import { Eye, Glasses, Sun, Wrench, Check, Star, ChevronLeft, ChevronRight, Phone, MapPin, Clock, MessageCircle, Menu, X, Globe, Facebook, Instagram, ArrowRight } from 'lucide-react'

type Lang = 'en' | 'ar' | 'fr'

const WHATSAPP = '+212616439911'
const PHONE = '+212 616-439911'
const INSTAGRAM_URL = 'https://www.instagram.com/_65optic?igsh=N25ybng4am1senRl'
const FACEBOOK_URL = 'https://www.facebook.com/share/1BKsR8yfWz/'

const HOURS = [
  { day: { en: 'Monday', ar: 'الإثنين', fr: 'Lundi' }, time: '09:30 - 13:30 / 16:00 - 21:30' },
  { day: { en: 'Tuesday', ar: 'الثلاثاء', fr: 'Mardi' }, time: '09:30 - 13:30 / 16:00 - 21:30' },
  { day: { en: 'Wednesday', ar: 'الأربعاء', fr: 'Mercredi' }, time: '09:30 - 13:30 / 16:00 - 21:30' },
  { day: { en: 'Thursday', ar: 'الخميس', fr: 'Jeudi' }, time: '09:30 - 13:30 / 16:00 - 21:30' },
  { day: { en: 'Friday', ar: 'الجمعة', fr: 'Vendredi' }, time: '09:30 - 13:00 / 16:00 - 21:30' },
  { day: { en: 'Saturday', ar: 'السبت', fr: 'Samedi' }, time: '09:00 - 18:00' },
  { day: { en: 'Sunday', ar: 'الأحد', fr: 'Dimanche' }, time: { en: 'Closed', ar: 'مغلق', fr: 'Ferm\u00e9' } },
]

const t = {
  en: {
    nav: ['Home', 'Services', 'Collection', 'About', 'Contact'],
    bookBtn: 'Book Appointment',
    heroTitle: 'See the World Clearly',
    heroSub: 'Experience Premium Vision Care',
    heroDesc: 'Professional eye exams and the latest international eyewear models.',
    whatsappBtn: 'Book via WhatsApp',
    viewBtn: 'View Collection',
    brandTitle: '65 Optic is where precision meets style.',
    brandDesc: 'We offer a comprehensive visual experience that combines modern technology with refined taste.',
    servicesTitle: 'Our Services',
    services: [
      { title: 'Eye Examination', desc: 'Comprehensive eye tests using the latest diagnostic equipment.' },
      { title: 'Medical Glasses', desc: 'Precision-crafted lenses and stylish frames for clear vision.' },
      { title: 'Sunglasses', desc: 'Premium designer sunglasses for ultimate UV protection and style.' },
      { title: 'Repair Service', desc: 'Professional repair and maintenance for all eyewear brands.' },
    ],
    collectionTitle: 'Premium Collection',
    collections: ['Classic Elegance', 'Modern Minimalist', 'Sport Performance', 'Luxury Designer', 'Vintage Heritage', 'Bold Statement'],
    collectionCategories: ['Men', 'Women', 'Unisex', 'Men', 'Women', 'Unisex'],
    discoverBtn: 'Discover More',
    whyTitle: 'Why Choose 65 Optic',
    whyItems: [
      { title: 'Latest Equipment', desc: 'State-of-the-art diagnostic and fitting technology.' },
      { title: 'International Brands', desc: 'Curated selection from the world\'s finest eyewear houses.' },
      { title: 'Personalized Care', desc: 'Individual attention and expert consultation for every client.' },
      { title: 'Affordable Luxury', desc: 'Premium quality at competitive, transparent pricing.' },
    ],
    testimonialsTitle: 'What Our Clients Say',
    testimonials: [
      { quote: 'The best eye exam experience in the city. Truly professional.', name: 'Ahmed B.' },
      { quote: 'Amazing collection and wonderful service. Highly recommended!', name: 'Sara M.' },
      { quote: 'I found the perfect frames at an incredible price. Thank you 65 Optic!', name: 'Youssef K.' },
    ],
    contactTitle: 'Visit Us',
    location: 'Location',
    address: 'Taza, Morocco',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp',
    hoursTitle: 'Opening Hours',
    ctaBtn: 'Book Your Appointment Today',
    footerDesc: 'Premium eyewear and vision care for the modern individual.',
    quickLinks: 'Quick Links',
    servicesLabel: 'Services',
    followUs: 'Follow Us',
    rights: 'All rights reserved',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    scroll: 'Scroll to explore',
  },
  ar: {
    nav: ['الرئيسية', 'الخدمات', 'المجموعة', 'من نحن', 'اتصل بنا'],
    bookBtn: 'حجز موعد',
    heroTitle: 'شاهد العالم بوضوح',
    heroSub: 'تجربة رعاية بصرية متميزة',
    heroDesc: 'فحص نظر احترافي وأحدث الموديلات العالمية.',
    whatsappBtn: 'احجز عبر واتساب',
    viewBtn: 'عرض المجموعة',
    brandTitle: '65 أوبتيك حيث تلتقي الدقة بالأناقة.',
    brandDesc: 'نقدم تجربة بصرية متكاملة تجمع بين التكنولوجيا الحديثة والذوق الرفيع.',
    servicesTitle: 'خدماتنا',
    services: [
      { title: 'فحص العيون', desc: 'فحوصات شاملة للعيون باستخدام أحدث أجهزة التشخيص.' },
      { title: 'النظارات الطبية', desc: 'عدسات دقيقة الصنع وإطارات أنيقة لرؤية واضحة.' },
      { title: 'النظارات الشمسية', desc: 'نظارات شمسية فاخرة للحماية القصوى والأناقة.' },
      { title: 'خدمة الإصلاح', desc: 'إصلاح وصيانة احترافية لجميع ماركات النظارات.' },
    ],
    collectionTitle: 'المجموعة المتميزة',
    collections: ['الأناقة الكلاسيكية', 'عصري بسيط', 'أداء رياضي', 'تصميم فاخر', 'تراث عتيق', 'بيان جريء'],
    collectionCategories: ['رجال', 'نساء', 'للجنسين', 'رجال', 'نساء', 'للجنسين'],
    discoverBtn: 'اكتشف المزيد',
    whyTitle: 'لماذا تختار 65 أوبتيك',
    whyItems: [
      { title: 'أحدث المعدات', desc: 'تكنولوجيا تشخيص وتركيب متطورة.' },
      { title: 'ماركات عالمية', desc: 'تشكيلة مختارة من أرقى بيوت النظارات العالمية.' },
      { title: 'رعاية شخصية', desc: 'اهتمام فردي واستشارة متخصصة لكل عميل.' },
      { title: 'فخامة بأسعار معقولة', desc: 'جودة متميزة بأسعار تنافسية وشفافة.' },
    ],
    testimonialsTitle: 'ماذا يقول عملاؤنا',
    testimonials: [
      { quote: 'أفضل تجربة فحص نظر في المدينة. احترافية حقيقية.', name: 'أحمد ب.' },
      { quote: 'مجموعة رائعة وخدمة ممتازة. أنصح بها بشدة!', name: 'سارة م.' },
      { quote: 'وجدت الإطارات المثالية بسعر لا يصدق. شكرا 65 أوبتيك!', name: 'يوسف ك.' },
    ],
    contactTitle: 'زورونا',
    location: 'الموقع',
    address: 'تازة، المغرب',
    phoneLabel: 'الهاتف',
    whatsappLabel: 'واتساب',
    hoursTitle: 'أوقات العمل',
    ctaBtn: 'احجز موعدك اليوم',
    footerDesc: 'نظارات فاخرة وعناية بصرية للفرد الحديث.',
    quickLinks: 'روابط سريعة',
    servicesLabel: 'الخدمات',
    followUs: 'تابعنا',
    rights: 'جميع الحقوق محفوظة',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الخدمة',
    scroll: 'مرر للاستكشاف',
  },
  fr: {
    nav: ['Accueil', 'Services', 'Collection', '\u00c0 propos', 'Contact'],
    bookBtn: 'Prendre RDV',
    heroTitle: 'Voyez le Monde Clairement',
    heroSub: 'Soins Visuels Premium',
    heroDesc: 'Examens de la vue professionnels et les derniers mod\u00e8les internationaux.',
    whatsappBtn: 'R\u00e9server via WhatsApp',
    viewBtn: 'Voir la Collection',
    brandTitle: '65 Optic, l\u00e0 o\u00f9 la pr\u00e9cision rencontre le style.',
    brandDesc: 'Nous offrons une exp\u00e9rience visuelle compl\u00e8te alliant technologie moderne et go\u00fbt raffin\u00e9.',
    servicesTitle: 'Nos Services',
    services: [
      { title: 'Examen de la Vue', desc: 'Examens complets avec les derniers \u00e9quipements de diagnostic.' },
      { title: 'Lunettes M\u00e9dicales', desc: 'Verres de pr\u00e9cision et montures \u00e9l\u00e9gantes pour une vision claire.' },
      { title: 'Lunettes de Soleil', desc: 'Lunettes de soleil de designer pour une protection UV maximale.' },
      { title: 'Service de R\u00e9paration', desc: 'R\u00e9paration et entretien professionnels pour toutes les marques.' },
    ],
    collectionTitle: 'Collection Premium',
    collections: ['\u00c9l\u00e9gance Classique', 'Minimaliste Moderne', 'Performance Sport', 'Designer Luxe', 'H\u00e9ritage Vintage', 'Style Audacieux'],
    collectionCategories: ['Homme', 'Femme', 'Mixte', 'Homme', 'Femme', 'Mixte'],
    discoverBtn: 'D\u00e9couvrir Plus',
    whyTitle: 'Pourquoi Choisir 65 Optic',
    whyItems: [
      { title: 'Derni\u00e8res Technologies', desc: '\u00c9quipement de diagnostic et d\'ajustement de pointe.' },
      { title: 'Marques Internationales', desc: 'S\u00e9lection des meilleures maisons de lunetterie mondiales.' },
      { title: 'Soins Personnalis\u00e9s', desc: 'Attention individuelle et consultation d\'expert pour chaque client.' },
      { title: 'Luxe Abordable', desc: 'Qualit\u00e9 premium \u00e0 des prix comp\u00e9titifs et transparents.' },
    ],
    testimonialsTitle: 'Ce que disent nos clients',
    testimonials: [
      { quote: 'La meilleure exp\u00e9rience d\'examen de la vue en ville. Vraiment professionnel.', name: 'Ahmed B.' },
      { quote: 'Collection incroyable et service merveilleux. Hautement recommand\u00e9!', name: 'Sara M.' },
      { quote: 'J\'ai trouv\u00e9 les montures parfaites \u00e0 un prix incroyable. Merci 65 Optic!', name: 'Youssef K.' },
    ],
    contactTitle: 'Visitez-nous',
    location: 'Emplacement',
    address: 'Taza, Maroc',
    phoneLabel: 'T\u00e9l\u00e9phone',
    whatsappLabel: 'WhatsApp',
    hoursTitle: 'Heures d\'ouverture',
    ctaBtn: 'R\u00e9servez votre rendez-vous',
    footerDesc: 'Lunetterie premium et soins visuels pour l\'individu moderne.',
    quickLinks: 'Liens Rapides',
    servicesLabel: 'Services',
    followUs: 'Suivez-nous',
    rights: 'Tous droits r\u00e9serv\u00e9s',
    privacy: 'Politique de confidentialit\u00e9',
    terms: 'Conditions d\'utilisation',
    scroll: 'D\u00e9filez pour explorer',
  },
}

const langNames: Record<Lang, string> = { en: 'EN', ar: 'AR', fr: 'FR' }
const nextLang: Record<Lang, Lang> = { en: 'ar', ar: 'fr', fr: 'en' }

const serviceIcons = [Eye, Glasses, Sun, Wrench]

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  const txt = t[lang]
  const isRtl = lang === 'ar'

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx(prev => (prev + 1) % txt.testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [txt.testimonials.length])

  const prevTestimonial = useCallback(() => {
    setTestimonialIdx(prev => (prev - 1 + txt.testimonials.length) % txt.testimonials.length)
  }, [txt.testimonials.length])

  const nextTestimonial = useCallback(() => {
    setTestimonialIdx(prev => (prev + 1) % txt.testimonials.length)
  }, [txt.testimonials.length])

  const sectionIds = ['home', 'services', 'collection', 'about', 'contact']

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="w-full">
      {/* ===== NAVBAR ===== */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${mounted && scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-2xl font-serif font-bold text-white tracking-wide">65 OPTIC</h1>
            <div className="hidden md:flex items-center gap-8">
              {txt.nav.map((label, i) => (
                <a key={i} href={`#${sectionIds[i]}`} className="text-white/80 hover:text-[#C9A227] transition-colors text-sm font-medium">
                  {label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setLang(nextLang[lang])} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white/80 hover:text-[#C9A227] transition-colors text-sm" aria-label="Switch language">
                <Globe size={16} />
                <span>{langNames[nextLang[lang]]}</span>
              </button>
              <a href={`https://wa.me/${WHATSAPP.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hidden sm:block px-5 py-2 bg-[#C9A227] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#C9A227]/30 transition-all text-sm">
                {txt.bookBtn}
              </a>
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden pb-4 border-t border-white/10 pt-4">
              {txt.nav.map((label, i) => (
                <a key={i} href={`#${sectionIds[i]}`} onClick={() => setMenuOpen(false)} className="block text-white/80 hover:text-[#C9A227] transition-colors text-sm font-medium py-2.5">
                  {label}
                </a>
              ))}
              <a href={`https://wa.me/${WHATSAPP.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center mt-3 px-5 py-2.5 bg-[#C9A227] text-black font-semibold rounded-lg">
                {txt.bookBtn}
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#C9A227]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-32">
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            {txt.heroTitle}
          </h2>
          <p className="text-xl md:text-2xl text-[#C9A227] font-medium mb-4 animate-fade-in">
            {txt.heroSub}
          </p>
          <p className="text-base md:text-lg text-white/60 mb-12 animate-fade-in-up max-w-2xl mx-auto">
            {txt.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <a href={`https://wa.me/${WHATSAPP.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#C9A227] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#C9A227]/40 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              {txt.whatsappBtn}
            </a>
            <a href="#collection" className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              {txt.viewBtn}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="mt-20 animate-bounce">
            <p className="text-white/40 text-sm mb-2">{txt.scroll}</p>
            <svg className="w-5 h-5 mx-auto text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </div>
      </section>

      {/* ===== BRAND STATEMENT ===== */}
      <section className="py-28 md:py-40 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-black mb-8">{txt.brandTitle}</h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed">{txt.brandDesc}</p>
          <div className="flex justify-center gap-2 mt-10">
            {[0,1,2,3,4].map(i => <div key={i} className="w-2 h-2 bg-[#C9A227] rounded-full" />)}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-28 px-4 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-black mb-16 text-center">{txt.servicesTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {txt.services.map((svc, i) => {
              const Icon = serviceIcons[i]
              return (
                <div key={i} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-6 inline-flex p-4 bg-[#C9A227]/10 rounded-xl group-hover:bg-[#C9A227]/20 transition-colors">
                    <Icon size={28} className="text-[#C9A227]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-black mb-3">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== COLLECTION ===== */}
      <section id="collection" className="py-28 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-16 text-center">{txt.collectionTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {txt.collections.map((name, i) => (
              <div key={i} className="group relative h-72 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/15 to-[#C9A227]/5 flex items-center justify-center">
                  <div className="text-center">
                    <Glasses size={48} className="mx-auto text-[#C9A227]/40 mb-3" />
                    <p className="text-[#C9A227]/60 text-sm">{txt.collectionCategories[i]}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <h3 className="text-white font-serif text-xl font-bold mb-2">{name}</h3>
                  <p className="text-[#C9A227] text-sm">{txt.collectionCategories[i]}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="group px-8 py-3.5 bg-[#C9A227] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#C9A227]/40 transition-all flex items-center gap-2">
              {txt.discoverBtn}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section id="about" className="py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-black mb-16 text-center">{txt.whyTitle}</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {txt.whyItems.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-[#C9A227]">
                    <Check size={22} className="text-black" strokeWidth={3} />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-black mb-1.5">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-28 px-4 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-16 text-center">{txt.testimonialsTitle}</h2>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10 md:p-14">
            <div className="flex justify-center gap-1.5 mb-6">
              {[0,1,2,3,4].map(i => <Star key={i} size={20} className="fill-[#C9A227] text-[#C9A227]" />)}
            </div>
            <blockquote className="text-center mb-6">
              <p className="font-serif text-xl md:text-2xl text-white mb-5 italic">
                &ldquo;{txt.testimonials[testimonialIdx].quote}&rdquo;
              </p>
              <p className="text-[#C9A227] font-semibold text-sm">{txt.testimonials[testimonialIdx].name}</p>
            </blockquote>
            <div className="flex justify-center items-center gap-4 mt-8">
              <button onClick={prevTestimonial} className="p-2.5 rounded-lg border border-white/20 text-white hover:border-[#C9A227] hover:text-[#C9A227] transition-colors" aria-label="Previous">
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {txt.testimonials.map((_, i) => (
                  <button key={i} onClick={() => setTestimonialIdx(i)} className={`h-2 rounded-full transition-all duration-300 ${i === testimonialIdx ? 'bg-[#C9A227] w-6' : 'bg-white/20 w-2'}`} aria-label={`Testimonial ${i + 1}`} />
                ))}
              </div>
              <button onClick={nextTestimonial} className="p-2.5 rounded-lg border border-white/20 text-white hover:border-[#C9A227] hover:text-[#C9A227] transition-colors" aria-label="Next">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-black mb-16 text-center">{txt.contactTitle}</h2>
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {/* Map placeholder */}
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <iframe
                title="65 Optic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26384.41!2d-4.0!3d34.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd98d3de5c3f7e6b%3A0x5c8e7a0f6d5c3d0!2sTaza%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div>
            {/* Info */}
            <div className="space-y-7">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-lg bg-[#C9A227]/10">
                  <MapPin size={22} className="text-[#C9A227]" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-black mb-1">{txt.location}</h3>
                  <p className="text-gray-500 text-sm">{txt.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-lg bg-[#C9A227]/10">
                  <Phone size={22} className="text-[#C9A227]" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-black mb-1">{txt.phoneLabel}</h3>
                  <a href={`tel:${WHATSAPP}`} className="text-gray-500 text-sm hover:text-[#C9A227] transition-colors">{PHONE}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-lg bg-[#C9A227]/10">
                  <MessageCircle size={22} className="text-[#C9A227]" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-black mb-1">{txt.whatsappLabel}</h3>
                  <a href={`https://wa.me/${WHATSAPP.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-[#C9A227] transition-colors">{PHONE}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-lg bg-[#C9A227]/10">
                  <Clock size={22} className="text-[#C9A227]" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-black mb-1.5">{txt.hoursTitle}</h3>
                  <div className="space-y-1">
                    {HOURS.map((h, i) => (
                      <p key={i} className="text-gray-500 text-sm">
                        <span className="font-medium text-gray-700">{h.day[lang]}:</span>{' '}
                        {typeof h.time === 'string' ? h.time : h.time[lang]}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a href={`https://wa.me/${WHATSAPP.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-black text-white font-semibold rounded-lg hover:shadow-xl transition-all flex items-center gap-2">
              {txt.ctaBtn}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <h3 className="font-serif text-xl font-bold mb-3">65 OPTIC</h3>
              <p className="text-white/50 text-sm leading-relaxed">{txt.footerDesc}</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">{txt.quickLinks}</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                {txt.nav.map((label, i) => (
                  <li key={i}><a href={`#${sectionIds[i]}`} className="hover:text-[#C9A227] transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">{txt.servicesLabel}</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                {txt.services.map((svc, i) => (
                  <li key={i}><a href="#services" className="hover:text-[#C9A227] transition-colors">{svc.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">{txt.followUs}</h4>
              <div className="flex gap-3">
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 hover:bg-[#C9A227] rounded-lg transition-colors" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 hover:bg-[#C9A227] rounded-lg transition-colors" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href={`https://wa.me/${WHATSAPP.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 hover:bg-[#C9A227] rounded-lg transition-colors" aria-label="WhatsApp">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-7">
            <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-xs">
              <p>&copy; 2025 65 OPTIC. {txt.rights}.</p>
              <div className="flex gap-5 mt-3 md:mt-0">
                <a href="#" className="hover:text-[#C9A227] transition-colors">{txt.privacy}</a>
                <a href="#" className="hover:text-[#C9A227] transition-colors">{txt.terms}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
