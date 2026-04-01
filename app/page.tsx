import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import Stats        from '@/components/Stats'
import Services     from '@/components/Services'
import WhyChooseUs  from '@/components/WhyChooseUs'
import About        from '@/components/About'
import CEOMessage   from '@/components/CEOMessage'
import Process      from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import CTASection   from '@/components/CTASection'
import Contact      from '@/components/Contact'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        <About />
        <CEOMessage />
        <Process />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
