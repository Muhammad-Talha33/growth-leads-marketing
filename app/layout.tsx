import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Growth Leads Marketing — Digital Marketing Agency',
  description:
    'Growth Leads Marketing helps ambitious businesses generate qualified leads, run high-performance ad campaigns, and build brands that convert.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-[#0B1F3A] font-sans">{children}</body>
    </html>
  )
}
