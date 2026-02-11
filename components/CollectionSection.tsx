'use client'

interface CollectionProps {
  language: 'en' | 'ar'
}

const frames = [
  { title: 'Classic Elegance', titleAr: 'أناقة كلاسيكية', category: 'Luxury' },
  { title: 'Modern Edge', titleAr: 'الحدود الحديثة', category: 'Contemporary' },
  { title: 'Retro Vibes', titleAr: 'أجواء ريترو', category: 'Vintage' },
  { title: 'Minimalist Chic', titleAr: 'البساطة الراقية', category: 'Minimal' },
  { title: 'Bold Statement', titleAr: 'بيان جريء', category: 'Statement' },
  { title: 'Timeless Design', titleAr: 'تصميم خالد', category: 'Premium' },
]

export default function CollectionSection({ language }: CollectionProps) {
  const title = language === 'en' ? 'Our Collection' : 'مجموعتنا'
  const discoverBtn = language === 'en' ? 'Discover More' : 'اكتشف المزيد'

  return (
    <section id="collection" className="py-32 px-4 bg-primary">
      <div className="container-max">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-20 text-center">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frames.map((frame, index) => (
            <div
              key={index}
              className="group relative h-80 md:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden cursor-pointer hover-lift"
            >
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-accent text-sm font-medium">{frame.category}</p>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                <h3 className="text-white font-display text-2xl font-bold mb-2">
                  {language === 'en' ? frame.title : frame.titleAr}
                </h3>
                <p className="text-accent text-sm mb-4">{frame.category}</p>
                <button className="px-6 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="group px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:glow transition-all flex items-center gap-2">
            {discoverBtn}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
