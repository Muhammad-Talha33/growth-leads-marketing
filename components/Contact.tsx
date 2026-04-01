import { Phone, Mail, MapPin } from 'lucide-react'

const CONTACT_CARDS = [
  {
    icon: 'phone' as const,
    label: 'Call Us Directly',
    value: '(201) 790-4960',
    sub: 'Mon – Fri, 9am – 6pm EST',
    href: 'tel:+1 (201) 790-4960',
    iconBg: 'bg-blue-50',
    iconColor: 'text-[#0F4C81]',
    hintColor: '#0F4C81',
    hoverBorder: 'hover:border-[#0F4C81]/25',
    hoverShadow: 'hover:shadow-[0_8px_40px_rgba(15,76,129,0.14)]',
    badge: 'Available Now',
    badgeCls: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
    hint: 'Tap to call',
  },
  {
    icon: 'fax' as const,
    label: 'Fax',
    value: '(937) 264-9248',
    sub: 'Documents received 24/7',
    href: null,
    iconBg: 'bg-orange-50',
    iconColor: 'text-[#F97316]',
    hintColor: '#F97316',
    hoverBorder: 'hover:border-[#F97316]/25',
    hoverShadow: 'hover:shadow-[0_8px_40px_rgba(249,115,22,0.12)]',
    badge: null,
    badgeCls: null,
    hint: null,
  },
  {
    icon: 'mail' as const,
    label: 'Email Us',
    value: 'growthleadsmarketing@gmail.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:growthleadsmarketing@gmail.com',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    hintColor: '#059669',
    hoverBorder: 'hover:border-emerald-200',
    hoverShadow: 'hover:shadow-[0_8px_40px_rgba(16,185,129,0.12)]',
    badge: null,
    badgeCls: null,
    hint: 'Send an email',
  },
]

function FaxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
      />
    </svg>
  )
}

function CardIcon({ type, className }: { type: 'phone' | 'fax' | 'mail'; className?: string }) {
  if (type === 'phone') return <Phone className={className} />
  if (type === 'mail')  return <Mail  className={className} />
  return <FaxIcon className={className} />
}

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-[#F97316] text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">
            Let's Talk About Your Growth
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Ready to generate more leads and scale your business? Our team is just a call or message away. Reach out through any of the channels below and we'll get back to you promptly.
          </p>
        </div>

        {/* ── Contact Cards ── */}
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {CONTACT_CARDS.map((card) => {
            const inner = (
              <div className={`group bg-white rounded-2xl border border-gray-100 ${card.hoverBorder} ${card.hoverShadow} shadow-card p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center relative overflow-hidden h-full`}>
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-[60px] pointer-events-none" />

                {/* Available badge */}
                {card.badge && (
                  <span className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full ${card.badgeCls} uppercase tracking-wide`}>
                    {card.badge}
                  </span>
                )}

                {/* Icon container */}
                <div className={`w-16 h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                  <CardIcon type={card.icon} className={`w-7 h-7 ${card.iconColor}`} />
                </div>

                {/* Label */}
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  {card.label}
                </p>

                {/* Value */}
                <p className={`font-bold text-[#0B1F3A] mb-2 break-all leading-snug ${
                  card.icon === 'mail' ? 'text-sm' : 'text-xl'
                }`}>
                  {card.value}
                </p>

                {/* Sub text */}
                <p className="text-gray-400 text-xs">{card.sub}</p>

                {/* Hover hint — shown only on hover for clickable cards */}
                {card.hint && (
                  <div
                    className="mt-4 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: card.hintColor }}
                  >
                    {card.hint}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            )

            return card.href ? (
              <a key={card.label} href={card.href} className="block">
                {inner}
              </a>
            ) : (
              <div key={card.label}>{inner}</div>
            )
          })}
        </div>

        {/* ── Dark mini-CTA banner ── */}
        <div className="bg-[#0B1F3A] rounded-3xl px-8 py-8 lg:px-12 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#0F4C81]/30 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#F97316]/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl pointer-events-none" />

          <div className="relative z-10 text-center lg:text-left">
            <p className="text-white font-bold text-xl lg:text-2xl mb-1">
              Speak with our team today.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Call us directly to discuss your business growth goals and discover the right marketing strategy for your brand.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:+1 (201) 790-4960"
              className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="mailto:growthleadsmarketing@gmail.com"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
          </div>
        </div>

        {/* ── Location / hours note ── */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin className="w-4 h-4 text-[#F97316] flex-shrink-0" />
            <span>Houston, TX — Serving clients globally</span>
          </div>
  
        </div>

      </div>
    </section>
  )
}
