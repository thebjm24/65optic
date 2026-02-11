'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en')

  return (
    <main className="w-full bg-white">
      <Navbar language={language} setLanguage={setLanguage} />
      <section className="h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center text-white max-w-2xl px-4">
          <h1 className="text-6xl font-serif font-bold mb-6">See the World Clearly</h1>
          <p className="text-xl text-gray-300 mb-12">Experience Premium Vision Care</p>
          <button className="px-8 py-4 bg-yellow-600 text-black font-semibold rounded-lg hover:shadow-lg transition-all">
            Book Now
          </button>
        </div>
      </section>
    </main>
  )
}
