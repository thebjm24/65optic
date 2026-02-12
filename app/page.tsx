'use client'

import { useState, useEffect } from 'react'
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
  { day: { en: 'Sunday', ar: 'الأحد', fr: 'Dimanche' }, time: { en: 'Closed', ar: 'مغلق', fr: 'Fermé' } },
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
      { name: 'Sarah Johnson', quote: 'Best eyewear experience in the city. Professional service and stunning collection!', rating: 5 },
      { name: 'Ahmed Hassan', quote: 'Excellent quality and friendly staff. Highly recommend 65 Optic!', rating: 5 },
      { name: 'Maria Garcia', quote: 'Found the perfect frames here. Worth every penny!', rating: 5 },
    ],
    contactTitle: 'Get in Touch',
    location: 'Marrakech, Morocco',
    hours: 'Opening Hours',
    followUs: 'Follow Us',
    rights: 'All rights reserved',
  },
  ar: {
    nav: ['الرئيسية', 'الخدمات', 'المجموعة', 'حول', 'اتصل'],
    bookBtn: 'احجز موعد',
    heroTitle: 'شاهد العالم بوضوح',
    heroSub: 'تجربة رعاية بصرية فاخرة',
    heroDesc: 'فحوصات عين احترافية وأحدث موديلات النظارات العالمية.',
    whatsappBtn: 'احجز عبر واتس',
    viewBtn: 'اعرض المجموعة',
    brandTitle: '65 Optic حيث يلتقي الدقة بالأناقة.',
    brandDesc: 'نقدم تجربة بصرية شاملة تجمع بين التكنولوجيا الحديثة والذوق الرفيع.',
    servicesTitle: 'خدماتنا',
    services: [
      { title: 'فحص العيون', desc: 'فحوصات شاملة باستخدام أحدث المعدات التشخيصية.' },
      { title: 'النظارات الطبية', desc: 'عدسات وإطارات بدقة عالية وأسلوب راقي.' },
      { title: 'النظارات الشمسية', desc: 'نظارات شمسية فاخرة توفر حماية كاملة من الأشعة.' },
      { title: 'خدمة الإصلاح', desc: 'إصلاح واحترافي لجميع ماركات النظارات.' },
    ],
    collectionTitle: 'المجموعة الفاخرة',
    collections: ['الأناقة الكلاسيكية', 'البساطة الحديثة', 'الأداء الرياضي', 'المصمم الفاخر', 'التراث العتيق', 'البيان الجريء'],
    collectionCategories: ['رجالي', 'نسائي', 'موحد', 'رجالي', 'نسائي', 'موحد'],
    discoverBtn: 'اكتشف المزيد',
    whyTitle: 'لماذا تختار 65 Optic',
    whyItems: [
      { title: 'أحدث المعدات', desc: 'تكنولوجيا تشخيصية وملاءمة متقدمة.' },
      { title: 'ماركات عالمية', desc: 'تشكيلة منتقاة من أفضل ماركات النظارات.' },
      { title: 'رعاية شخصية', desc: 'اهتمام فردي واستشارة متخصصة لكل عميل.' },
      { title: 'فخامة بأسعار مناسبة', desc: 'جودة فاخرة بأسعار تنافسية وشفافة.' },
    ],
    testimonialsTitle: 'آراء عملائنا',
    testimonials: [
      { name: 'سارة جونسون', quote: 'أفضل تجربة نظارات في المدينة. خدمة احترافية ومجموعة مذهلة!', rating: 5 },
      { name: 'أحمد حسن', quote: 'جودة ممتازة وموظفون ودودون. أنصح بشدة بـ 65 Optic!', rating: 5 },
      { name: 'ماريا جارسيا', quote: 'وجدت الإطارات المثالية هنا. تستحق كل درهم!', rating: 5 },
    ],
    contactTitle: 'تواصل معنا',
    location: 'مراكش، المغرب',
    hours: 'أوقات العمل',
    followUs: 'تابعنا',
    rights: 'جميع الحقوق محفوظة',
  },
  fr: {
    nav: ['Accueil', 'Services', 'Collection', 'À propos', 'Contact'],
    bookBtn: 'Prendre RDV',
    heroTitle: 'Voyez le Monde Clairement',
    heroSub: 'Expérience Soins de la Vision Premium',
    heroDesc: 'Examens oculaires professionnels et derniers modèles de lunettes internationales.',
    whatsappBtn: 'Réserver via WhatsApp',
    viewBtn: 'Voir la Collection',
    brandTitle: '65 Optic où la précision rencontre le style.',
    brandDesc: 'Nous offrons une expérience visuelle complète qui combine la technologie moderne et le goût raffiné.',
    servicesTitle: 'Nos Services',
    services: [
      { title: 'Examen Oculaire', desc: 'Tests oculaires complets utilisant les derniers équipements diagnostiques.' },
      { title: 'Lunettes Médicales', desc: 'Verres de précision et montures élégantes pour une vision claire.' },
      { title: 'Lunettes de Soleil', desc: 'Lunettes de soleil designer premium pour une protection UV ultime.' },
      { title: 'Service de Réparation', desc: 'Réparation professionnelle et entretien pour toutes les marques.' },
    ],
    collectionTitle: 'Collection Premium',
    collections: ['Élégance Classique', 'Minimalisme Moderne', 'Performance Sportive', 'Designer Luxe', 'Héritage Vintage', 'Déclaration Audacieuse'],
    collectionCategories: ['Homme', 'Femme', 'Unisexe', 'Homme', 'Femme', 'Unisexe'],
    discoverBtn: 'Découvrez Plus',
    whyTitle: 'Pourquoi Choisir 65 Optic',
    whyItems: [
      { title: 'Équipement Dernier Cri', desc: 'Technologie diagnostique et d\'ajustement de pointe.' },
      { title: 'Marques Internationales', desc: 'Sélection soignée des meilleures maisons de lunettes du monde.' },
      { title: 'Soins Personnalisés', desc: 'Attention individuelle et consultation experte pour chaque client.' },
      { title: 'Luxe Abordable', desc: 'Qualité premium à des prix compétitifs et transparents.' },
    ],
    testimonialsTitle: 'Ce Que Disent Nos Clients',
    testimonials: [
      { name: 'Sarah Johnson', quote: 'Meilleure expérience de lunettes en ville. Service professionnel et collection superbe!', rating: 5 },
      { name: 'Ahmed Hassan', quote: 'Excellente qualité et personnel sympathique. Je recommande vivement 65 Optic!', rating: 5 },
      { name: 'Maria Garcia', quote: 'J\'ai trouvé les montures parfaites ici. Ça en vaut chaque sou!', rating: 5 },
    ],
    contactTitle: 'Nous Contacter',
    location: 'Marrakech, Maroc',
    hours: 'Horaires d\'Ouverture',
    followUs: 'Suivez-Nous',
    rights: 'Tous droits réservés',
  },
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const txt = t[lang]
  const isRtl = lang === 'ar'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nextTestimonial = () => setTestimonialIdx((prev) => (prev + 1) % txt.testimonials.length)
  const prevTestimonial = () => setTestimonialIdx((prev) => (prev - 1 + txt.testimonials.length) % txt.testimonials.length)

  return (
    <main className={`w-full ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'} suppressHydrationWarning>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <h1 className="font-serif text-2xl font-bold text-white">65 OPTIC</h1>
          
          <div className="hidden md:flex items-center gap-8">
            {txt.nav.map((item) => (
              <a key={item} href="#" className="text-white/80 hover:text-yellow-500 transition-colors text-sm font-medium">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setLang(lang === 'en' ? 'ar' : lang === 'ar' ? 'fr' : 'en')} className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/80 hover:text-yellow-500 transition-colors text-sm">
              <Globe size={18} />
              <span>{lang.toUpperCase()}</span>
            </button>

            <button className="hidden sm:block px-6 py-2.5 bg-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all">
              {txt.bookBtn}
            </button>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 pb-4 space-y-3 px-4 pt-4">
            {txt.nav.map((item) => (
              <a key={item} href="#" className="block text-white/80 hover:text-yellow-500 transition-colors text-sm font-medium py-2">
                {item}
              </a>
            ))}
            <button className="w-full px-6 py-2.5 bg-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg transition-all mt-2">
              {txt.bookBtn}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.7s'}}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in" style={{animationDuration: '1s'}}>
            {txt.heroTitle}
          </h2>
          
          <p className="text-xl md:text-2xl text-yellow-500 font-medium mb-4 animate-fade-in" style={{animationDuration: '1.2s', animationDelay: '0.2s'}}>
            {txt.heroSub}
          </p>

          <p className="text-base md:text-lg text-white/70 mb-12 animate-fade-in" style={{animationDuration: '1.2s', animationDelay: '0.4s', maxWidth: '600px', margin: '0 auto 3rem'}}>
            {txt.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDuration: '1.2s', animationDelay: '0.6s'}}>
            <a href={`https://wa.me/${WHATSAPP}`} className="group px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              {txt.whatsappBtn}
            </a>
            <button className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              {txt.viewBtn}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-32 md:py-48 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-black mb-8">
            {txt.brandTitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {txt.brandDesc}
          </p>
          <div className="flex justify-center gap-2 mt-12">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-20 text-center">
            {txt.servicesTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {txt.services.map((service, i) => (
              <div key={i} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="mb-6 inline-block p-4 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                  {i === 0 && <Eye size={32} className="text-yellow-500" />}
                  {i === 1 && <Glasses size={32} className="text-yellow-500" />}
                  {i === 2 && <Sun size={32} className="text-yellow-500" />}
                  {i === 3 && <Wrench size={32} className="text-yellow-500" />}
                </div>
                <h3 className="font-serif text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-20 text-center">
            {txt.collectionTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {txt.collections.map((collection, i) => (
              <div key={i} className="group relative h-80 md:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 flex items-center justify-center">
                  <div className="text-center">
                    <Glasses size={48} className="mx-auto text-yellow-500/30 mb-4" />
                    <p className="text-yellow-500 text-sm font-medium">{collection}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                  <h3 className="text-white font-serif text-2xl font-bold mb-2">{collection}</h3>
                  <p className="text-yellow-500 text-sm mb-4">{txt.collectionCategories[i]}</p>
                  <button className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <button className="group px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all flex items-center gap-2">
              {txt.discoverBtn}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-20 text-center">
            {txt.whyTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 rounded-2xl flex items-center justify-center">
                <Glasses size={64} className="text-yellow-500/20" />
              </div>
            </div>
            <div className="space-y-8">
              {txt.whyItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-500 text-black">
                      <Check size={24} className="font-bold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-20 text-center">
            {txt.testimonialsTitle}
          </h2>
          <div className="bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-12 md:p-16">
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(txt.testimonials[testimonialIdx].rating)].map((_, i) => (
                <Star key={i} size={24} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <blockquote className="text-center mb-8">
              <p className="font-serif text-2xl md:text-3xl text-white mb-6 italic">
                "{txt.testimonials[testimonialIdx].quote}"
              </p>
              <p className="text-yellow-500 font-semibold">
                {txt.testimonials[testimonialIdx].name}
              </p>
            </blockquote>
            <div className="flex justify-center gap-4 mt-12">
              <button onClick={prevTestimonial} className="p-3 rounded-lg border border-white/20 text-white hover:border-yellow-500 hover:text-yellow-500 transition-colors">
                <ChevronLeft size={24} />
              </button>
              <div className="flex items-center gap-2">
                {txt.testimonials.map((_, i) => (
                  <button key={i} onClick={() => setTestimonialIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === testimonialIdx ? 'bg-yellow-500 w-8' : 'bg-white/20'}`} />
                ))}
              </div>
              <button onClick={nextTestimonial} className="p-3 rounded-lg border border-white/20 text-white hover:border-yellow-500 hover:text-yellow-500 transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-20 text-center">
            {txt.contactTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600">Map Placeholder</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-500/10">
                    <MapPin size={24} className="text-yellow-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-black mb-1">Location</h3>
                  <p className="text-gray-600">{txt.location}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-500/10">
                    <Phone size={24} className="text-yellow-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-black mb-1">Phone</h3>
                  <a href={`tel:${PHONE}`} className="text-gray-600 hover:text-yellow-500 transition-colors">
                    {PHONE}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-500/10">
                    <MessageCircle size={24} className="text-yellow-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-black mb-1">WhatsApp</h3>
                  <a href={`https://wa.me/${WHATSAPP}`} className="text-gray-600 hover:text-yellow-500 transition-colors">
                    {PHONE}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-500/10">
                    <Clock size={24} className="text-yellow-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-black mb-2">{txt.hours}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    {HOURS.map((h, i) => (
                      <p key={i}>
                        <span className="font-medium">{typeof h.day === 'string' ? h.day : h.day[lang]}:</span> {typeof h.time === 'string' ? h.time : h.time[lang]}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a href={`https://wa.me/${WHATSAPP}`} className="group px-8 py-4 bg-black text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
              {txt.bookBtn}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">65 OPTIC</h3>
              <p className="text-white/60 text-sm">
                Premium eyewear and vision care for the modern individual.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Collection</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Eye Examination</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Medical Glasses</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Sunglasses</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Repair Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{txt.followUs}</h4>
              <div className="flex gap-3">
                <a href={FACEBOOK_URL} className="p-2 bg-white/10 hover:bg-yellow-500 text-white rounded-lg transition-colors">
                  <Facebook size={20} />
                </a>
                <a href={INSTAGRAM_URL} className="p-2 bg-white/10 hover:bg-yellow-500 text-white rounded-lg transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
              <p>&copy; 2025 65 OPTIC. {txt.rights}.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
