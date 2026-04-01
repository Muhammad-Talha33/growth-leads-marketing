export default function CTASection() {
  return (
    <section className="bg-[#0F4C81] py-20 lg:py-24 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/4 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#F97316]/15 rounded-full translate-y-1/3 -translate-x-1/4 blur-2xl" />
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-7 uppercase tracking-wide">
          <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full" />
          Ready to Grow?
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Your Business Deserves<br />
          Marketing That <span className="text-[#F97316]">Actually Works.</span>
        </h2>

        {/* Sub */}
        <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you're just starting out or ready to scale, we'll build a marketing strategy that delivers qualified leads, builds your brand, and grows your revenue — consistently.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+1 (201) 790-4960"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5"
          >
            Let's Grow Your Brand
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:bg-white/5"
          >
            View Our Services
          </a>
        </div>

        {/* Trust note */}
        <p className="mt-8 text-blue-200/60 text-sm">
          No contracts. No risk. Just results — or we talk about it.
        </p>
      </div>
    </section>
  )
}
