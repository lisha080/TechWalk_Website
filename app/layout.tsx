import type { Metadata, Viewport } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'

import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'TechWalk | Networking That\'s a Breath of Fresh Air',
  description: 'TechWalk is building a different sort of community for Tech and SaaS professionals through curated outdoor weekly walks in NYC, Brooklyn, Silicon Valley, LA, San Francisco, and Bangalore. Founded by Christine Farrier Rosemin.',
  keywords: ['TechWalk', 'tech networking', 'SaaS networking', 'outdoor networking', 'mindful movement', 'Christine Farrier Rosemin', 'NYC tech events', 'Silicon Valley networking', 'Bangalore tech'],
  openGraph: {
    title: 'TechWalk | Networking That\'s a Breath of Fresh Air',
    description: 'Curated outdoor weekly walks for Tech and SaaS professionals.',
    type: 'website',
    url: 'https://www.techwalk.co',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d6a4f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
