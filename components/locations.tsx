import { MapPin, Calendar, ArrowRight, Users } from "lucide-react"

const locations = [
  {
    city: "New York City",
    state: "New York",
    meetingPoint: "Central Park, New York",
    frequency: "Every Friday",
    type: "Weekly Walk",
    hosts: ["Christine Farrier Rosemin", "Ben Bartolone", "Amy Koo"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RL1sFdfUIQNhR1YnpUhHIvQO4HUFto.png",
    href: "https://lu.ma/techwalk?tag=NYC",
  },
  {
    city: "Silicon Valley",
    state: "California",
    meetingPoint: "Shoreline Lake, Mountain View",
    frequency: "Every Wednesday",
    type: "Weekly Walk",
    hosts: ["Rupa Bhagwat", "Charlene Wang", "Caroline Gomes"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xZ8bYw0mFfSsTrZIJjmkyemsqIsQ2i.png",
    href: "https://lu.ma/techwalk?tag=Silicon+Valley",
  },
  {
    city: "San Francisco",
    state: "California",
    meetingPoint: "Golden Gate Park, San Francisco",
    frequency: "Monthly",
    type: "Monthly Walk",
    hosts: ["TechWalk SF Team"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x3FZDEDYZlKExmitHImZDeb3vjdMyV.png",
    href: "https://lu.ma/techwalk?tag=San+Francisco",
  },
  {
    city: "Los Angeles",
    state: "California",
    meetingPoint: "Santa Monica, California",
    frequency: "Monthly",
    type: "Monthly Walk",
    hosts: ["Justin Matson", "Mariana Small"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7390%202-oLrb5cMd9z9u28uIqBtKi8iSJarysA.jpg",
    href: "https://lu.ma/techwalk?tag=Los+Angeles",
  },
  {
    city: "Brooklyn",
    state: "New York",
    meetingPoint: "Kings County, New York",
    frequency: "Regular walks",
    type: "Regular Walk",
    hosts: ["Rodayna Hamouda", "Gylianne Tyndall"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7391-Qi8eKCKejNZoVQia85YX2Xh79AaR0Z.jpg",
    href: "https://lu.ma/techwalk?tag=Brooklyn",
  },
  {
    city: "Bangalore",
    state: "India",
    meetingPoint: "Cubbon Park, Bangalore",
    frequency: "New launch",
    type: "New Launch",
    hosts: ["TechWalk Bangalore Team"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7389-Etox564C1UOivGpq57593Wz258zzkK.jpg",
    href: "https://lu.ma/techwalk?tag=Bangalore",
  },
]

export function Locations() {
  return (
    <section id="locations" className="py-28 md:py-36 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary/40" />
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
                Where We Walk
              </p>
            </div>
            <h2 className="font-serif text-3xl font-light tracking-tight text-foreground sm:text-4xl lg:text-[44px] leading-[1.15] text-balance">
              Find your walk.
            </h2>
            <p className="mt-6 text-base leading-[1.7] text-muted-foreground">
              From Central Park to Golden Gate Park, find your local TechWalk
              and start walking with us.
            </p>
          </div>
          <a
            href="https://lu.ma/techwalk"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-[13px] font-semibold tracking-wide transition-colors hover:bg-primary shrink-0"
          >
            View full calendar
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* City Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <a
              key={location.city}
              href={location.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={location.image}
                  alt={`TechWalk ${location.city}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block rounded-md bg-primary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-foreground">
                    {location.type}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {"TechWalk | "}{location.city}
                </h3>
                <div className="mt-4 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
                    <Calendar className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                    <span className="italic">{location.frequency}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                    {location.meetingPoint}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
                    <Users className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                    <span className="truncate">{location.hosts.join(", ")}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
