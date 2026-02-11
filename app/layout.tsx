import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '65 OPTIC | Premium Eyewear & Vision Care',
  description: 'Discover premium eyewear and professional vision care at 65 OPTIC.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Cairo:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
