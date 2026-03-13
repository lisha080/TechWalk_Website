import { Leaf, Users, Lightbulb, Heart } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Mindful Movement",
    description:
      "The best connections happen while walking, not sitting at a bar.",
  },
  {
    icon: Users,
    title: "Authentic Connections",
    description:
      "No sales pitches. Real conversations between real people.",
  },
  {
    icon: Lightbulb,
    title: "Industry Insights",
    description:
      "Walks hosted by experts from Apple, Salesforce, and top startups.",
  },
  {
    icon: Heart,
    title: "Inclusive Community",
    description:
      "Seasoned leader or just getting started - there's a place for you.",
  },
]

export function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
                About TechWalk
              </p>
            </div>
            <h2 className="font-serif text-3xl font-light tracking-tight text-foreground sm:text-4xl lg:text-[44px] leading-[1.15] text-balance">
              More than just a walk.{" "}
              <span className="text-primary">It{"'"}s a movement.</span>
            </h2>
            <p className="mt-8 text-base leading-[1.7] text-muted-foreground max-w-lg">
              Every week, tech professionals trade conference rooms for
              tree-lined paths, building authentic relationships through
              walking. TechWalk is growing across NYC, Brooklyn, Silicon Valley,
              Los Angeles, San Francisco and Bangalore.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary/8 border border-primary/15 px-5 py-2.5">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[13px] font-medium text-primary">Founded by Christine Farrier Rosemin, 2023</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j2aKloyI3RkeDXNqP8YMDqCm2AMZI2.png"
              alt="TechWalk group with colorful umbrellas on a rainy autumn day in Central Park"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-foreground/60 to-transparent">
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/80">
                Central Park, NYC
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid - with colored backgrounds */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, idx) => (
            <div
              key={value.title}
              className={`rounded-2xl p-8 ${
                idx === 0
                  ? "bg-primary text-primary-foreground"
                  : idx === 1
                  ? "bg-foreground text-background"
                  : idx === 2
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-accent text-accent-foreground"
              }`}
            >
              <value.icon
                className={`h-5 w-5 ${
                  idx === 0
                    ? "text-primary-foreground/70"
                    : idx === 1
                    ? "text-background/70"
                    : idx === 2
                    ? "text-primary"
                    : "text-accent-foreground/80"
                }`}
                strokeWidth={1.5}
              />
              <h3 className="mt-6 text-base font-semibold tracking-tight">
                {value.title}
              </h3>
              <p className={`mt-3 text-sm leading-[1.7] ${
                idx === 0
                  ? "text-primary-foreground/75"
                  : idx === 1
                  ? "text-background/65"
                  : idx === 2
                  ? "text-muted-foreground"
                  : "text-accent-foreground/80"
              }`}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
