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
                <div className="w-24 h-24 rounded-full bg-[#0F4C81] border-4 border-white/20 flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-12 h-12 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
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
                  {['linkedin', 'twitter'].map((s) => (
                    <div
                      key={s}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center cursor-pointer"
                    >
                      {s === 'linkedin' ? (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                        </svg>
                      )}
                    </div>
                  ))}
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
