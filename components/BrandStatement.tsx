'use client'

interface BrandStatementProps {
  language: 'en' | 'ar'
}

export default function BrandStatement({ language }: BrandStatementProps) {
  const mainText = language === 'en' 
    ? '65 Optic is where precision meets style'
    : '65 أوبتك حيث تلتقي الدقة بالأناقة'
  
  const description = language === 'en'
    ? 'We deliver a complete vision experience that combines cutting-edge technology with refined taste. Every frame, every lens, every detail is carefully curated to elevate your visual experience.'
    : 'نحن نقدم تجربة بصرية متكاملة تجمع بين التكنولوجيا الحديثة والذوق الرفيع. يتم اختيار كل إطار وكل عدسة وكل تفصيل بعناية فائقة لتحسين تجربتك البصرية.'

  return (
    <section className="py-32 md:py-48 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-black mb-8 animate-fade-in">
          {mainText}
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up">
          {description}
        </p>

        <div className="flex justify-center gap-2 mt-12">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-accent rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  )
}
