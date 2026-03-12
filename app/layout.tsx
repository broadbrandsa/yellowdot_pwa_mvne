import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LockScreen from './components/LockScreen'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yellow Dot MVNO PWA Support Proposal | MVNE',
  description:
    'PWA platform development and support proposal by MVNE for Yellow Dot — build, support, and development hours for the Yellow Dot MVNO PWA platform.',
  keywords: ['Yellow Dot', 'MVNO', 'PWA', 'MVNE', 'DSG', 'platform', 'support'],
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <LockScreen>{children}</LockScreen>
      </body>
    </html>
  )
}
