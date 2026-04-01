import Image from 'next/image'

const QUICK_LINKS = [
  { label: 'Home',        href: '#home' },
  { label: 'Services',    href: '#services' },
  { label: 'Why Us',      href: '#why-us' },
  { label: 'About',       href: '#about' },
  { label: 'CEO Message', href: '#ceo' },
  { label: 'Contact',     href: '#contact' },
]

const SERVICES_LINKS = [
  'Social Media Marketing',
  'Meta / Facebook Ads',
  'Google Ads Campaigns',
  'Lead Generation',
  'Branding & Creative',
  'Funnel Optimization',
]

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Twitter/X',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand column ── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a href="#home" className="flex items-center mb-4">
              <Image
                src="/brand_assets/agency_logo.png"
                alt="Growth Leads Marketing"
                width={140}
                height={40}
                className="h-24 w-auto object-contain brightness-0 invert"
              />
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Helping ambitious businesses generate qualified leads, grow their brand, and scale revenue through strategic digital marketing.
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/8 hover:bg-[#0F4C81] text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</p>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-gray-400 hover:text-[#F97316] text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">›</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-5">Our Services</p>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#F97316] text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">›</span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#F97316] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">Email</p>
                  <p className="text-gray-300 text-sm">growthleadsmarketing@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#F97316] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">Phone</p>
                  <p className="text-gray-300 text-sm">+1 (201) 790-4960</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#F97316] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">Location</p>
                  <p className="text-gray-300 text-sm">Houston, TX — Serving Clients Globally</p>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 bg-[#F97316] hover:bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Growth Leads Marketing. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
