import { Users, DollarSign, Star, Award } from 'lucide-react'

const STATS = [
  {
    icon: Users,
    value: '1,200+',
    label: 'Qualified Leads Generated',
    desc: 'For clients across multiple industries',
    color: 'text-[#0F4C81]',
    bg: 'bg-blue-50',
  },
  {
    icon: DollarSign,
    value: '$4.2M+',
    label: 'Ad Spend Managed',
    desc: 'Across Meta, Google, and more',
    color: 'text-[#F97316]',
    bg: 'bg-orange-50',
  },
  {
    icon: Star,
    value: '98%',
    label: 'Client Satisfaction Rate',
    desc: 'Based on post-campaign reviews',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Award,
    value: '40+',
    label: 'Brands Successfully Scaled',
    desc: 'From startups to established businesses',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
]

export default function Stats() {
  return (
    <section className="bg-[#F8FAFC] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#F97316] text-sm font-semibold uppercase tracking-widest mb-2">
            Our Results
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A]">
            Numbers That Speak for Themselves
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`${s.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <p className={`text-4xl font-bold ${s.color} mb-1`}>{s.value}</p>
                <p className="text-[#0B1F3A] font-semibold text-sm mb-1">{s.label}</p>
                <p className="text-gray-500 text-xs">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
