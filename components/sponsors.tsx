import { ArrowRight } from "lucide-react"

const sponsors = [
  {
    name: "Qapita",
    description:
      "Primary sponsor of LA Tech Week (2024\u20132025), facilitating high-value connections between founders and investors in the tech corridor.",
  },
  {
    name: "Rho",
    description:
      "Lead ecosystem partner bridging fintech innovation and community wellness through hiring drives and strategic updates.",
  },
  {
    name: "Crystal Method",
    description:
      "Official social media agency of TechWalk, powering our signature post-event content drops and digital storytelling.",
  },
  {
    name: "Northwestern Engineering (MEM)",
    description:
      "Academic partner for alumni-focused chapters exploring technical depth, career pivots, and engineering leadership.",
  },
  {
    name: "YorkSeed",
    description:
      "Venture networking partner co-promoting Central Park gatherings to foster authentic connections for the startup community.",
  },
  {
    name: "Covent",
    description:
      "Strategic sponsorship platform used to connect premier brands with our community of 12,000+ professionals.",
  },
]

export function Sponsors() {
  return (
    <section id="sponsors" className="relative py-28 md:py-36 bg-primary/[0.04] overflow-hidden">
      {/* Subtle decorative accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
              Partners & Sponsors
            </p>
          </div>
          <h2 className="font-serif text-3xl font-light tracking-tight text-foreground sm:text-4xl lg:text-[44px] leading-[1.15] text-balance">
            Powered by partners who share our vision.
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-muted-foreground">
            We collaborate with forward-thinking brands and organizations that
            believe in the power of real-world connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="rounded-2xl border border-primary/10 bg-background p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-2 w-2 rounded-full bg-primary/60" />
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {sponsor.name}
                </h3>
              </div>
              <p className="text-[13px] leading-[1.7] text-muted-foreground">
                {sponsor.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="mailto:techwalk@techwalk.co?subject=Sponsor%20TechWalk"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:bg-primary/90"
          >
            Sponsor TechWalk
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  )
}
