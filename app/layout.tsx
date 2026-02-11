import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Cairo } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cairo = Cairo({ 
  subsets: ['latin', 'arabic'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '65 OPTIC | Premium Eyewear & Vision Care',
  description: 'Discover premium eyewear and professional vision care at 65 OPTIC. Latest international brands, expert eye examinations, and personalized service.',
  keywords: 'eyewear, optical store, vision care, glasses, sunglasses, eye examination',
  openGraph: {
    title: '65 OPTIC | Premium Eyewear & Vision Care',
    description: 'Premium optical store offering latest eyewear brands and professional vision care services.',
    url: 'https://65optic.com',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cairo.variable}`}>
      <body className="bg-white text-black font-sans">
        {children}
      </body>
    </html>
  )
}
