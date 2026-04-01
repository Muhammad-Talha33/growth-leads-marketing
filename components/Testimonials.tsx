const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    title: 'Founder',
    company: 'Luxe Living Interiors',
    initials: 'SM',
    color: 'bg-[#0F4C81]',
    rating: 5,
    quote:
      "Growth Leads transformed our entire marketing approach. Within 90 days, our lead flow went from inconsistent and random to a steady stream of qualified inquiries every single week. The team actually understands our business and communicates clearly — which is rare in this industry.",
  },
  {
    name: 'David Okafor',
    title: 'Marketing Director',
    company: 'Pinnacle Real Estate Group',
    initials: 'DO',
    color: 'bg-[#F97316]',
    rating: 5,
    quote:
      "We'd tried two agencies before Growth Leads — both overpromised and underdelivered. This team is different. They're data-driven, transparent about what's working, and genuinely invested in our results. Our cost per lead dropped by 40% in the first two months.",
  },
  {
    name: 'Amanda Chen',
    title: 'CEO',
    company: 'Vital Health Clinic',
    initials: 'AC',
    color: 'bg-emerald-600',
    rating: 5,
    quote:
      "The combination of creative quality and performance strategy is what sets them apart. Our brand finally looks the part, and the campaigns are actually filling our appointment calendar. I recommend Growth Leads to every business owner I know who's serious about digital growth.",
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#F97316] fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-[#F97316] text-sm font-semibold uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Don't take our word for it. Here's what business owners and marketing leaders say about working with Growth Leads Marketing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 shadow-card border border-gray-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Quote mark */}
              <svg className="w-8 h-8 text-[#0F4C81]/10 mb-3 fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <StarRating count={t.rating} />

              {/* Quote text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="pt-5 border-t border-gray-100 flex items-center gap-3">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#0B1F3A] font-bold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-card px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center sm:text-left">
          {[
            { v: '40+', l: 'Happy Clients' },
            { v: '4.9/5', l: 'Average Rating' },
            { v: '100%', l: 'Satisfaction Guaranteed' },
          ].map((item, i) => (
            <div key={item.l} className="flex items-center gap-3">
              {i > 0 && <div className="hidden sm:block w-px h-10 bg-gray-200" />}
              <div>
                <p className="text-2xl font-bold text-[#0F4C81]">{item.v}</p>
                <p className="text-gray-500 text-xs">{item.l}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
