import Image from 'next/image'

export default function CEOMessage() {
  return (
    <section id="ceo" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="text-center mb-14">
          <p className="text-[#F97316] text-sm font-semibold uppercase tracking-widest mb-3">
            Leadership
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A]">
            A Message from Our CEO
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-card border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-[280px_1fr]">

              {/* Left — CEO identity */}
              <div className="bg-[#0B1F3A] flex flex-col items-center justify-center p-8 text-center">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-full bg-[#0F4C81] border-4 border-white/20 mb-4 shadow-lg overflow-hidden relative">
                  <Image
                    src="/brand_assets/ceo.jpeg"
                    alt="Qamar Umar — Founder & CEO"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & Title */}
                <p className="text-white font-bold text-lg leading-tight mb-1">
                  Qamar Umar
                </p>
                <p className="text-[#F97316] text-sm font-semibold mb-1">
                  Founder & CEO
                </p>
                <p className="text-gray-400 text-xs">
                  Growth Leads Marketing
                </p>

                {/* Divider */}
                <div className="w-10 h-0.5 bg-[#F97316]/50 my-4" />

                {/* Social icons */}
                <div className="flex gap-3">
                  <a
                    href="https://youtube.com/@growthleadsmarketing?si=NX-acdmrHp5SnofI"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-red-600 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1Ks39uqyjn/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-600 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right — message */}
              <div className="p-8 lg:p-10 relative">
                {/* Giant quote mark */}
                <svg
                  className="absolute top-6 right-8 w-16 h-16 text-[#0F4C81]/6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <div className="mb-6">
                  <div className="flex gap-1 mb-5">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-6 bg-[#F97316] rounded-full" style={{ opacity: 1 - i * 0.3 }} />
                    ))}
                  </div>

                  <blockquote className="text-[#0B1F3A] text-lg leading-relaxed font-medium mb-5">
                    "We built Growth Leads Marketing on a simple belief: every business, regardless of size, deserves marketing that actually works. Not vanity metrics. Not inflated reports. Real leads, real conversions, and real revenue growth.
                  </blockquote>
                  <blockquote className="text-[#0B1F3A] text-lg leading-relaxed font-medium mb-5">
                    In an industry filled with noise and broken promises, we chose a different path — one built on transparency, accountability, and a genuine commitment to our clients' success. When you win, we win. That's not a tagline. That's how we operate.
                  </blockquote>
                  <blockquote className="text-gray-500 text-base leading-relaxed">
                    If you're ready to stop wasting your marketing budget and start building a pipeline that fills itself, I'd love to have that conversation with you."
                  </blockquote>
                </div>

                {/* Signature line */}
                <div className="pt-5 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-[#F97316]" />
                  <div>
                    <p className="text-[#0B1F3A] font-bold text-sm">Qamar Umar</p>
                    <p className="text-gray-400 text-xs">Founder & CEO — Growth Leads Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
