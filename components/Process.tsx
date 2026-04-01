const STEPS = [
  {
    number: '01',
    title: 'Discover',
    desc: 'We deep-dive into your business, audience, competitors, and goals. No templates — just thorough discovery to understand exactly where you are and where you need to go.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Strategize',
    desc: 'We craft a tailored marketing roadmap built around your specific goals, budget, and market opportunity — with clear milestones, KPIs, and a channel strategy that makes sense.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Launch',
    desc: 'Our team executes with precision — building campaigns, creating assets, launching ads, and setting up tracking so every dollar spent is accountable and every result is visible.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Scale',
    desc: "We analyze results, eliminate what doesn't work, and double down on what does. Through continuous optimization, we scale your campaigns and compound your growth over time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section className="bg-[#0B1F3A] py-20 lg:py-28 relative overflow-hidden">
      {/* Background detail */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F4C81]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F97316]/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#F97316] text-sm font-semibold uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Proven 4-Step Process
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            A structured approach that takes you from where you are today to where your business needs to be.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line — desktop only */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-white/8 hidden lg:block" />

          {STEPS.map((step, i) => (
            <div key={step.title} className="relative group">
              {/* Card */}
              <div className="bg-white/5 border border-white/8 hover:border-[#F97316]/30 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/8">
                {/* Number badge + icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0F4C81] border border-[#0F4C81] flex items-center justify-center text-white group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-colors duration-300">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-white/10 group-hover:text-[#F97316]/20 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>

                {/* Arrow for non-last items */}
                {i < STEPS.length - 1 && (
                  <div className="absolute -right-3 top-10 z-10 bg-[#0B1F3A] rounded-full p-1 hidden lg:flex">
                    <svg className="w-4 h-4 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
