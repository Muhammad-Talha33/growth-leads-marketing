const BADGES = ['Lead Generation', 'Paid Ads', 'Social Media Growth', 'Branding Strategy']

const BAR_HEIGHTS = [38, 60, 44, 78, 55, 92, 70]
const BAR_MONTHS  = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']

const MINI_STATS = [
  { label: 'Leads',  value: '2,847', change: '+24%', bg: 'bg-blue-50',   text: 'text-[#0F4C81]' },
  { label: 'ROAS',   value: '4.2x',  change: '+18%', bg: 'bg-orange-50', text: 'text-[#F97316]' },
  { label: 'CTR',    value: '3.8%',  change: '+0.4%', bg: 'bg-emerald-50', text: 'text-emerald-700' },
]

const CAMPAIGNS = [
  { name: 'Meta Ads',   pct: 78, color: '#0F4C81' },
  { name: 'Google Ads', pct: 54, color: '#F97316' },
  { name: 'Email Flows',pct: 91, color: '#10B981' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#0B1F3A] min-h-screen flex items-center pt-[76px] overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#0F4C81]/25 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F97316]/8 rounded-full blur-[120px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left content ── */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/25 text-[#F97316] text-xs font-semibold px-4 py-2 rounded-full mb-7 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full" />
              Digital Marketing Agency
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Turn Attention<br />
              Into{' '}
              <span className="text-[#F97316]">Revenue.</span>
              <br />
              Scale What Works.
            </h1>

            {/* Sub */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              We help ambitious businesses generate qualified leads, run high-performance ad campaigns, and build brands that convert — backed by strategy, creativity, and measurable results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:+1 (201) 790-4960"
                className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                Get Started Today
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border border-white/25 hover:border-white/50 hover:bg-white/5 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200"
              >
                View Services
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="bg-white/8 border border-white/12 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Trust line */}
            <p className="text-gray-400 text-sm italic border-l-2 border-[#F97316]/50 pl-3">
              "Helping brands attract, convert, and scale."
            </p>
          </div>

          {/* ── Right — Dashboard mockup ── */}
          <div className="relative">
            {/* Floating conversion badge */}
            <div className="absolute -left-5 top-1/3 z-20 bg-[#F97316] text-white rounded-xl px-4 py-3 shadow-2xl hidden xl:block">
              <p className="text-xs font-medium opacity-90">Conversion Rate</p>
              <p className="text-2xl font-bold tracking-tight">12.4%</p>
              <p className="text-xs opacity-75 mt-0.5">↑ Above industry avg</p>
            </div>

            {/* Dashboard card */}
            <div className="bg-white rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-6 relative z-10">
              {/* Card header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                    Campaign Performance
                  </p>
                  <p className="text-base font-bold text-[#0B1F3A]">Q1 2025 Overview</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  Live
                </span>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {MINI_STATS.map((s) => (
                  <div key={s.label} className={`${s.bg} rounded-xl p-3`}>
                    <p className="text-xs text-gray-500 mb-1 font-medium">{s.label}</p>
                    <p className={`text-lg font-bold ${s.text}`}>{s.value}</p>
                    <p className="text-xs text-emerald-600 font-semibold mt-0.5">{s.change}</p>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="mb-5">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
                  Monthly Lead Volume
                </p>
                <div className="flex items-end gap-1.5 h-[72px]">
                  {BAR_HEIGHTS.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 5 ? '#F97316' : '#0F4C81',
                        opacity: i === 5 ? 1 : 0.45 + i * 0.07,
                      }}
                    />
                  ))}
                </div>
                <div className="flex mt-1.5">
                  {BAR_MONTHS.map((m) => (
                    <p key={m} className="flex-1 text-center text-[10px] text-gray-400">
                      {m}
                    </p>
                  ))}
                </div>
              </div>

              {/* Campaign progress */}
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
                  Active Campaigns
                </p>
                <div className="space-y-2.5">
                  {CAMPAIGNS.map((c) => (
                    <div key={c.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600 font-medium">{c.name}</span>
                        <span className="text-gray-400">{c.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${c.pct}%`, backgroundColor: c.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                <p className="text-xs text-gray-400">New leads today</p>
                <span className="text-sm font-bold text-emerald-600">+47 leads</span>
              </div>
            </div>

            {/* Small floating tag */}
            <div className="absolute -bottom-4 right-8 bg-[#0B1F3A] border border-white/10 text-white rounded-xl px-4 py-2.5 shadow-xl hidden lg:flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <p className="text-xs font-medium">All campaigns performing well</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full h-16 lg:h-[72px]">
          <path
            d="M0 72H1440V32C1300 4 1100 56 900 38C700 20 500 64 300 42C150 24 60 56 0 44V72Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  )
}
