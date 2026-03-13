import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Locations } from "@/components/locations"
import { Impact } from "@/components/impact"
import { Sponsors } from "@/components/sponsors"
import { Testimonials } from "@/components/testimonials"
import { Founder } from "@/components/founder"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Locations />
      <Impact />
      <Sponsors />
      <Testimonials />
      <Founder />
      <Newsletter />
      <Footer />
    </main>
  )
}
