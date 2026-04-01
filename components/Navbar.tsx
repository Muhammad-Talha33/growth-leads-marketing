'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Home',        href: '#home' },
  { label: 'Services',    href: '#services' },
  { label: 'Why Us',      href: '#why-us' },
  { label: 'About',       href: '#about' },
  { label: 'CEO Message', href: '#ceo' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px] lg:h-[76px]">

          {/* ── Logo ── */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <Image
              src="/brand_assets/agency_logo.png"
              alt="Growth Leads Marketing"
              width={140}
              height={40}
              className="h-24 w-auto object-contain"
              priority
            />
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-[#0F4C81] text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-200 rounded-full" />
              </a>
            ))}
          </nav>

          {/* ── CTA ── */}
          <a
            href="tel:+1 (201) 790-4960"
            className="hidden lg:inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Book a Free Call
          </a>

          {/* ── Hamburger ── */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#0F4C81] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 text-gray-700 hover:text-[#0F4C81] hover:bg-blue-50 rounded-lg text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="tel:+1 (201) 790-4960"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-[#F97316] hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
