import { Database, TrendingUp, Sparkles, MessageSquare, Globe2, Layers } from 'lucide-react'

const REASONS = [
  {
    icon: Database,
    title: 'Data-Driven Campaign Strategy',
    desc: "Every decision we make is grounded in analytics. We don't guess — we test, measure, and optimize your campaigns based on real-time performance data.",
  },
  {
    icon: TrendingUp,
    title: 'Conversion-Focused Execution',
    desc: "We don't just chase impressions. Every campaign is engineered around one metric: turning your marketing spend into actual revenue and qualified leads.",
  },
  {
    icon: Sparkles,
    title: 'Creative + Performance Balance',
    desc: 'We blend compelling creative direction with performance marketing expertise — because great ads need both strong creative and smart targeting to win.',
  },
  {
    icon: MessageSquare,
    title: 'Clear, Consistent Communication',
    desc: "You always know what's happening with your campaigns. We provide transparent reporting, regular check-ins, and honest conversations about what's working.",
  },
  {
    icon: Globe2,
    title: 'Brand Growth Mindset',
    desc: "We think beyond the next campaign. Every strategy we build is designed to compound over time — growing your brand's authority, reach, and revenue together.",
  },
  {
    icon: Layers,
    title: 'Scalable Marketing Systems',
    desc: "We build repeatable, scalable marketing infrastructure — not one-off campaigns. As your business grows, your marketing engine grows with it.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-28">
            <p className="text-[#F97316] text-sm font-semibold uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-5 leading-tight">
              Marketing That Moves the Needle
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Growth Leads Marketing isn't just another agency. We're a team of strategists, creatives, and performance marketers who care about one thing — your growth.
            </p>

            {/* Mini highlight */}
            <div className="bg-[#0B1F3A] rounded-2xl p-6 text-white">
              <p className="text-3xl font-bold text-[#F97316] mb-1">5+ Years</p>
              <p className="font-semibold mb-2">Of Driving Digital Growth</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Across industries including e-commerce, real estate, finance, health, and professional services.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 bg-[#0F4C81] hover:bg-[#0d4070] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Talk to Our Team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — reasons grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {REASONS.map((r, i) => {
              const Icon = r.icon
              return (
                <div
                  key={r.title}
                  className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#0F4C81]/20 hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0F4C81] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#0F4C81] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-[#0B1F3A] font-bold text-sm mb-2">{r.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
