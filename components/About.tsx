const PILLARS = [
  { label: 'Our Mission',   text: 'To empower businesses of every size to compete and win in the digital landscape through intelligent, results-driven marketing.' },
  { label: 'Our Approach',  text: 'We combine deep strategic thinking with bold creative execution — building marketing systems that generate predictable, scalable growth.' },
  { label: 'Who We Serve',  text: 'From funded startups to established SMBs and enterprise brands, we work with businesses serious about growing their customer base and revenue.' },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — visual accent */}
          <div className="relative order-2 lg:order-1">
            {/* Main card */}
            <div className="bg-[#0B1F3A] rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0F4C81]/40 rounded-full -translate-y-1/4 translate-x-1/4 blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F97316]/15 rounded-full translate-y-1/3 -translate-x-1/4 blur-xl pointer-events-none" />

              <div className="relative z-10">
                <p className="text-[#F97316] text-xs font-semibold uppercase tracking-widest mb-4">
                  About the Agency
                </p>
                <h3 className="text-2xl font-bold mb-4 leading-snug">
                  Built on Results,<br />Powered by Strategy
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  Growth Leads Marketing was founded with one clear purpose: to bridge the gap between marketing spend and real business growth. We believe every dollar you invest in marketing should return more than it cost.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {[
                    { v: '40+', l: 'Clients' },
                    { v: '5+',  l: 'Years' },
                    { v: '98%', l: 'Retention' },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <p className="text-2xl font-bold text-[#F97316]">{s.v}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating industry badge */}
            <div className="absolute -right-4 top-10 bg-white rounded-xl shadow-card border border-gray-100 px-4 py-3 hidden lg:block">
              <p className="text-xs text-gray-500 font-medium mb-1">Industries Served</p>
              <div className="flex flex-wrap gap-1">
                {['E-Commerce', 'Real Estate', 'Finance', 'Health'].map((tag) => (
                  <span key={tag} className="bg-blue-50 text-[#0F4C81] text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2">
            <p className="text-[#F97316] text-sm font-semibold uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-5 leading-tight">
              A Marketing Partner That Thinks Like a Business Owner
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Growth Leads Marketing is a full-service digital marketing agency specializing in performance advertising, lead generation, social media, and brand strategy. We don't just run campaigns — we build growth systems tailored to your industry, your audience, and your revenue goals.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Our team of marketers, strategists, and creatives has helped businesses across e-commerce, real estate, professional services, and more generate consistent leads and grow their presence online. We take ownership of your results as if they were our own.
            </p>

            {/* Pillars */}
            <div className="space-y-5">
              {PILLARS.map((p) => (
                <div key={p.label} className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-[#0B1F3A] font-bold text-sm mb-1">{p.label}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
