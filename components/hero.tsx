import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-d9msA59IKwx2ECETTIXEWQQMo2zMyT.jpeg"
          alt="TechWalk group photo at Golden Gate Park in San Francisco"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/55" />
        {/* Stronger bottom fade for text legibility */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 pb-20 md:pb-28 pt-40">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-primary-foreground/50" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground">
              A community for Tech and SaaS professionals
            </p>
          </div>

          <h1 className="font-serif text-5xl font-light tracking-tight text-primary-foreground sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.05] drop-shadow-lg">
            Networking that{"'"}s a breath of fresh air
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-primary-foreground/90 max-w-lg md:text-xl">
            Weekly walks for tech professionals across NYC, Brooklyn, Silicon Valley,
            Los Angeles, San Francisco and Bangalore. Step outside. Meet your people.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://luma.com/techwalk"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide text-foreground transition-all hover:bg-primary-foreground/90"
            >
              Find Your Next Walk
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Stats bar at bottom */}
        <div className="mt-20 pt-8 border-t border-primary-foreground/15 flex gap-12 md:gap-16">
          {[
            { value: "12,000+", label: "Registrants" },
            { value: "8,000", label: "Subscribers" },
            { value: "12", label: "Cities" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-serif font-light text-primary-foreground md:text-3xl tracking-tight">
                {stat.value}
              </p>
              <p className="text-[11px] uppercase tracking-[0.15em] text-primary-foreground/50 mt-1.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
