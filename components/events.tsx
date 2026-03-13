import { MapPin, ArrowRight, Clock, ArrowUpRight, Sparkles, Mic, BookOpen, Users } from "lucide-react"

const events = [
  {
    title: "TechWalk | NYC",
    date: "Every Friday",
    location: "Central Park, New York",
    type: "Weekly Walk",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7391-Qi8eKCKejNZoVQia85YX2Xh79AaR0Z.jpg",
    href: "https://luma.com/techwalk",
  },
  {
    title: "TechWalk | Silicon Valley",
    date: "Every Wednesday",
    location: "Shoreline Lake, Mountain View",
    type: "Weekly Walk",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7389-Etox564C1UOivGpq57593Wz258zzkK.jpg",
    href: "https://luma.com/techwalk",
  },
  {
    title: "TechWalk | Los Angeles",
    date: "Monthly",
    location: "Santa Monica, CA",
    type: "Monthly Walk",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7390%202-oLrb5cMd9z9u28uIqBtKi8iSJarysA.jpg",
    href: "https://luma.com/techwalk",
  },
]

const eventTypes = [
  {
    name: "Weekly Hub Walks",
    price: "Free",
    icon: Users,
    features: ["Authentic connections", "Fresh air & mindful movement", "Industry expert hosts"],
  },
  {
    name: "Specialized Walks",
    price: "Free",
    icon: Sparkles,
    features: ["UX TechWalk", "BioTechWalk", "Rice Alumni walks"],
  },
  {
    name: "Skills Workshops",
    price: "From $49",
    icon: BookOpen,
    features: ["4-hour sessions", "Expert-led instruction", "Practical outcomes"],
  },
  {
    name: "Speakers Program",
    price: "Included",
    icon: Mic,
    features: ["~2 speakers per event", "Interactive Q&A", "Career insights"],
  },
]

export function Events() {
  return (
    <section id="events" className="py-28 md:py-36 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
                Events & Experiences
              </p>
            </div>
            <h2 className="font-serif text-3xl font-light tracking-tight text-foreground sm:text-4xl lg:text-[44px] leading-[1.15] text-balance">
              Find your walk.
            </h2>
          </div>
          <a
            href="https://luma.com/techwalk"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-[13px] font-semibold tracking-wide transition-colors hover:bg-primary shrink-0"
          >
            View full calendar
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Featured Events */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {events.map((event) => (
            <a
              key={event.title}
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl bg-background transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em]">
                    {event.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-3.5 w-3.5 text-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="mt-3 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
                    <span className="font-serif text-[15px] font-light italic">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                    {event.location}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="my-20 h-px bg-border" />

        {/* Event Types */}
        <div>
          <h3 className="font-serif text-2xl font-light tracking-tight text-foreground text-center mb-14">
            What we offer
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {eventTypes.map((type, idx) => (
              <div
                key={type.name}
                className={`rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${
                  idx === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border"
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <type.icon className={`h-5 w-5 ${idx === 0 ? "text-primary-foreground/70" : "text-primary"}`} strokeWidth={1.5} />
                  <span className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${
                    idx === 0 ? "text-accent" : "text-accent"
                  }`}>{type.price}</span>
                </div>
                <h4 className="text-sm font-semibold tracking-tight">{type.name}</h4>
                <div className={`mt-5 pt-5 ${idx === 0 ? "border-t border-primary-foreground/15" : "border-t border-border"}`}>
                  <ul className="flex flex-col gap-2.5">
                    {type.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-center gap-2.5 text-[13px] ${
                          idx === 0 ? "text-primary-foreground/75" : "text-muted-foreground"
                        }`}
                      >
                        <div className={`h-1 w-1 rounded-full shrink-0 ${idx === 0 ? "bg-accent" : "bg-primary"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
