'use client'

import { useState, FormEvent } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

// ─── Contact info cards data ───────────────────────────────────────────────

const INFO_CARDS = [
  {
    icon: 'phone' as const,
    label: 'Call Us Directly',
    value: '(201) 790-4960',
    sub: 'Mon – Fri, 9am – 6pm EST',
    href: 'tel:+12017904960',
    iconBg: 'bg-blue-50',
    iconColor: 'text-[#0F4C81]',
    hintColor: '#0F4C81',
    hoverBorder: 'hover:border-[#0F4C81]/25',
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
    badge: null,
    badgeCls: null,
    hint: 'Send an email',
  },
]

// ─── Icon helpers ──────────────────────────────────────────────────────────

function FaxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
      />
    </svg>
  )
}

function InfoCardIcon({ type, className }: { type: 'phone' | 'fax' | 'mail'; className?: string }) {
  if (type === 'phone') return <Phone className={className} />
  if (type === 'mail')  return <Mail  className={className} />
  return <FaxIcon className={className} />
}

// ─── Form state type ───────────────────────────────────────────────────────

type FormState = { name: string; email: string; business: string; phone: string; message: string }
type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const EMPTY_FORM: FormState = { name: '', email: '', business: '', phone: '', message: '' }

// ─── Input shared classes ──────────────────────────────────────────────────

const inputCls =
  'w-full bg-white border border-gray-200 focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/10 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-200'

// ──────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm]     = useState<FormState>(EMPTY_FORM)
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errMsg, setErrMsg] = useState('')

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrMsg('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: 'New Contact Form Submission — Growth Leads Marketing',
          from_name: 'Growth Leads Marketing Website',
          name:             form.name,
          email:            form.email,
          'Business Name':  form.business || 'Not provided',
          'Phone Number':   form.phone    || 'Not provided',
          message:          form.message,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm(EMPTY_FORM)
      } else {
        setErrMsg(data.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-[#F97316] text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">
            Let's Talk About Your Growth
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Ready to generate more leads and scale your business? Call us directly or fill out the form and our team will get back to you within one business day.
          </p>
        </div>

        {/* ── Main two-column grid ── */}
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-12 items-start">

          {/* ── Left: Contact info ── */}
          <div className="space-y-4">
            <h3 className="text-[#0B1F3A] font-bold text-lg mb-5">Contact Information</h3>

            {INFO_CARDS.map((card) => {
              const inner = (
                <div
                  className={`group bg-white rounded-2xl border border-gray-100 ${card.hoverBorder} shadow-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover flex items-center gap-4 relative overflow-hidden`}
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-[40px] pointer-events-none" />

                  {/* Icon */}
                  <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                    <InfoCardIcon type={card.icon} className={`w-5 h-5 ${card.iconColor}`} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{card.label}</p>
                      {card.badge && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${card.badgeCls}`}>
                          {card.badge}
                        </span>
                      )}
                    </div>
                    <p className={`font-bold text-[#0B1F3A] truncate ${card.icon === 'mail' ? 'text-sm' : 'text-base'}`}>
                      {card.value}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">{card.sub}</p>
                  </div>

                  {/* Arrow on hover */}
                  {card.hint && (
                    <svg
                      className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: card.hintColor }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </div>
              )

              return card.href ? (
                <a key={card.label} href={card.href} className="block">{inner}</a>
              ) : (
                <div key={card.label}>{inner}</div>
              )
            })}

            {/* Dark CTA card */}
            <div className="bg-[#0B1F3A] rounded-2xl p-6 relative overflow-hidden mt-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0F4C81]/30 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <p className="text-white font-bold text-base mb-1">Prefer a direct call?</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Speak with our team and discover the right growth strategy for your business.
                </p>
                <a
                  href="tel:+12017904960"
                  className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-orange-500/30"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Location note */}
            <div className="flex items-center gap-2 text-gray-400 text-sm pt-1 pl-1">
              <MapPin className="w-4 h-4 text-[#F97316] flex-shrink-0" />
              <span>Houston, TX — Serving clients globally</span>
            </div>
          </div>

          {/* ── Right: Contact form ── */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-7 lg:p-8">

            {/* Success state */}
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-[#0B1F3A] font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
                  Thank you for reaching out. A member of our team will contact you within one business day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-[#0F4C81] font-semibold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-[#0B1F3A] font-bold text-lg mb-1">Send Us a Message</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Fill in your details and we'll get back to you shortly.
                </p>

                {/* Error banner */}
                {status === 'error' && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-100 text-red-700 rounded-xl px-4 py-3 mb-5 text-sm">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{errMsg}</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Row 1: Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#0B1F3A] text-xs font-bold mb-1.5 uppercase tracking-wide">
                        Full Name <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={set('name')}
                        disabled={status === 'loading'}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="block text-[#0B1F3A] text-xs font-bold mb-1.5 uppercase tracking-wide">
                        Email Address <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={set('email')}
                        disabled={status === 'loading'}
                        className={inputCls}
                      />
                    </div>
                  </div>

                  {/* Row 2: Business + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#0B1F3A] text-xs font-bold mb-1.5 uppercase tracking-wide">
                        Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company Ltd."
                        value={form.business}
                        onChange={set('business')}
                        disabled={status === 'loading'}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="block text-[#0B1F3A] text-xs font-bold mb-1.5 uppercase tracking-wide">
                        Phone Number
                        <span className="text-gray-400 font-normal normal-case ml-1">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={set('phone')}
                        disabled={status === 'loading'}
                        className={inputCls}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[#0B1F3A] text-xs font-bold mb-1.5 uppercase tracking-wide">
                      Message <span className="text-[#F97316]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your business goals and what you'd like to achieve with digital marketing..."
                      value={form.message}
                      onChange={set('message')}
                      disabled={status === 'loading'}
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0d4070] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:translate-y-0"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
