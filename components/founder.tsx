import { ArrowUpRight } from "lucide-react"

const roles = [
  { role: "Head of Partner Marketing", company: "Rho", current: true },
  { role: "UBS Luminary Fellow", company: "UBS", current: true },
  { role: "Founder", company: "TechWalk", current: true },
  { role: "Expert", company: "Primary Venture Partners", current: true },
  { role: "Head of Channel Marketing", company: "Gusto", current: false },
  { role: "Sr. Director, Partner Marketing", company: "Demandbase", current: false },
]

export function Founder() {
  return (
    <section className="py-28 md:py-36 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Bio */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
                Meet the Founder
              </p>
            </div>
            <div className="flex items-center gap-6 mb-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fa1z7KtLC9mdbASvLKMXbuBd92Qvkj.png"
                alt="Christine Farrier Rosemin, Founder of TechWalk"
                className="h-20 w-20 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div>
                <h2 className="font-serif text-3xl font-light tracking-tight text-foreground sm:text-4xl lg:text-[44px] leading-[1.15]">
                  Christine Farrier Rosemin
                </h2>
                <p className="mt-2 text-[15px] font-medium text-primary tracking-tight">
                  Founder, TechWalk &mdash; Head of Partner Marketing, Rho
                </p>
              </div>
            </div>

            <p className="mt-10 text-base leading-[1.8] text-muted-foreground max-w-xl">
              A B2B marketing leader, Christine founded TechWalk in 2023 to
              reimagine professional networking. Her career spans leadership
              roles at Rho, Gusto, Demandbase, and UBS. Her philosophy is simple:
              the best connections happen when people step away from screens and
              into the fresh air.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["B2B Marketing", "Partner Ecosystems", "Community Building", "Startup Advisor", "Investor"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 border border-primary/15 px-4 py-1.5 text-[12px] font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/in/christinefarrierrosemin/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-6 py-3 text-[13px] font-semibold tracking-wide transition-colors hover:bg-primary"
              >
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://luma.com/techwalk"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-foreground/20 px-6 py-3 text-[13px] font-semibold tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Events
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Roles Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-foreground text-background p-8 lg:p-10">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.25em] text-background/50 mb-8">
                Notable Roles & Affiliations
              </h3>
              <div className="flex flex-col">
                {roles.map((item, idx) => (
                  <div
                    key={item.company + item.role}
                    className={`flex flex-col py-5 ${idx !== 0 ? "border-t border-background/10" : ""}`}
                  >
                    <div className="flex items-start gap-3">
                      {item.current && (
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                      )}
                      {!item.current && (
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-background/20 shrink-0" />
                      )}
                      <div>
                        <p className="text-sm font-semibold tracking-tight text-background">{item.role}</p>
                        <p className="text-[13px] font-medium text-accent mt-0.5">{item.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
