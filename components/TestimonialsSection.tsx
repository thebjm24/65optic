'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface TestimonialsProps {
  language: 'en' | 'ar'
}

const testimonials = [
  {
    quoteEn: "Best eye examination experience in the city. The staff was incredibly knowledgeable and attentive.",
    quoteAr: "أفضل تجربة فحص نظر في المدينة. كان الموظفون ودودين ومتعلمين جداً.",
    nameEn: "Ahmed Hassan",
    nameAr: "أحمد حسن",
    rating: 5
  },
  {
    quoteEn: "Found the perfect frames that match my style. Highly recommend to everyone!",
    quoteAr: "وجدت الإطارات المثالية التي تناسب أسلوبي. أوصي به لكل شخص!",
    nameEn: "Fatima Al-Mansoori",
    nameAr: "فاطمة المنصوري",
    rating: 5
  },
  {
    quoteEn: "Professional service with premium quality. Worth every dirham!",
    quoteAr: "خدمة احترافية بجودة عالية. يستحق كل درهم!",
    nameEn: "Mohammed Ali",
    nameAr: "محمد علي",
    rating: 5
  },
]

export default function TestimonialsSection({ language }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)
  const title = language === 'en' ? 'What Our Clients Say' : 'ماذا يقول عملاؤنا'

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  const testimonial = testimonials[current]

  return (
    <section className="py-32 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-20 text-center">
          {title}
        </h2>

        <div className="bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-12 md:p-16">
          {/* Stars */}
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={24} className="fill-accent text-accent" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-center mb-8">
            <p className="font-serif text-2xl md:text-3xl text-white mb-6 italic">
              "{language === 'en' ? testimonial.quoteEn : testimonial.quoteAr}"
            </p>
            <p className="text-accent font-semibold">
              {language === 'en' ? testimonial.nameEn : testimonial.nameAr}
            </p>
          </blockquote>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-3 rounded-lg border border-white/20 text-white hover:border-accent hover:text-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? 'bg-accent w-8' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-lg border border-white/20 text-white hover:border-accent hover:text-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
