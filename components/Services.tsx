import {
  Share2,
  Target,
  Search,
  Zap,
  Palette,
  MapPin,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Build engaged, loyal communities across Instagram, LinkedIn, TikTok, and Facebook with content strategies that spark real conversations and drive measurable brand growth.',
    accent: 'bg-blue-50 text-[#0F4C81]',
    border: 'hover:border-[#0F4C81]/30',
  },
  {
    icon: Target,
    title: 'Meta / Facebook Ads',
    desc: 'Precision-targeted ad campaigns designed to reach your ideal customers at exactly the right moment — turning cold traffic into warm, qualified leads ready to buy.',
    accent: 'bg-orange-50 text-[#F97316]',
    border: 'hover:border-[#F97316]/30',
  },
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    desc: 'Rank higher, get found faster. We optimize your website with proven on-page, off-page, and technical SEO strategies that drive sustainable organic traffic and long-term visibility.',
    accent: 'bg-emerald-50 text-emerald-600',
    border: 'hover:border-emerald-300',
  },
  {
    icon: Zap,
    title: 'Lead Generation',
    desc: 'End-to-end lead generation systems that attract, qualify, and deliver prospects who are genuinely interested in your product or service — not just clicks.',
    accent: 'bg-yellow-50 text-yellow-600',
    border: 'hover:border-yellow-300',
  },
  {
    icon: Palette,
    title: 'Branding & Creative Strategy',
    desc: "Craft a brand identity that commands attention and builds instant trust. From visual storytelling to messaging frameworks, we shape how the world sees your business.",
    accent: 'bg-pink-50 text-pink-600',
    border: 'hover:border-pink-300',
  },
  {
    icon: MapPin,
    title: 'Google Business Profile Optimization',
    desc: 'Dominate local search results with a fully optimized Google Business Profile. We enhance your listing to attract nearby customers, boost map rankings, and build local credibility.',
    accent: 'bg-indigo-50 text-indigo-600',
    border: 'hover:border-indigo-300',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-[#F97316] text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">
            Full-Service Digital Marketing Solutions
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Every service is built around one goal: helping your business attract more customers, generate more revenue, and build a brand worth remembering.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className={`group bg-[#F8FAFC] border border-gray-100 ${s.border} rounded-2xl p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 cursor-default`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${s.accent} rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-[#0B1F3A] font-bold text-lg mb-3 group-hover:text-[#0F4C81] transition-colors">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>

                {/* Arrow indicator */}
                <div className="mt-5 flex items-center gap-1.5 text-[#0F4C81] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
