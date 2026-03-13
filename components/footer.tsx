import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  community: [
    { label: "Events Calendar", href: "https://lu.ma/techwalk", external: true },
    { label: "Newsletter", href: "https://techwalk.beehiiv.com", external: true },
    { label: "Community Guidelines", href: "/community-guidelines", external: false },
    { label: "Code of Conduct", href: "/code-of-conduct", external: false },
    { label: "Privacy Policy", href: "/privacy-policy", external: false },
  ],
  locations: [
    { label: "NYC", href: "https://lu.ma/techwalk?tag=NYC", external: true },
    { label: "Brooklyn", href: "https://lu.ma/techwalk?tag=Brooklyn", external: true },
    { label: "Silicon Valley", href: "https://lu.ma/techwalk?tag=Silicon+Valley", external: true },
    { label: "San Francisco", href: "https://lu.ma/techwalk?tag=San+Francisco", external: true },
    { label: "Los Angeles", href: "https://lu.ma/techwalk?tag=Los+Angeles", external: true },
    { label: "Bangalore", href: "https://lu.ma/techwalk?tag=Bangalore", external: true },
    { label: "Chicago", href: "https://lu.ma/techwalk?tag=Chicago", external: true },
    { label: "Jersey City", href: "https://lu.ma/techwalk?tag=Jersey+City", external: true },
    { label: "Queens", href: "https://lu.ma/techwalk?tag=Queens", external: true },
    { label: "Boston", href: "https://lu.ma/techwalk?tag=Boston", external: true },
    { label: "Newark", href: "https://lu.ma/techwalk?tag=Newark", external: true },
    { label: "Vancouver", href: "https://lu.ma/techwalk?tag=Vancouver", external: true },
  ],
  connect: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/christinefarrierrosemin/" },
    { label: "Instagram", href: "https://www.instagram.com/techwalk.co/" },
    { label: "Luma", href: "https://luma.com/techwalk" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <span className="text-2xl font-serif font-medium tracking-[-0.02em] text-foreground">
              TechWalk
            </span>
            <p className="mt-5 text-sm leading-[1.8] text-muted-foreground max-w-sm">
              Building a different sort of community for Tech and SaaS
              professionals through curated outdoor weekly walks. A refreshing
              alternative to the average happy hour.
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
              Founded by Christine Farrier Rosemin
            </p>
          </div>

          {/* Community */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.25em] text-foreground">
              Community
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    {link.external && <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.25em] text-foreground">
              Locations
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {footerLinks.locations.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    {link.external && <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.25em] text-foreground">
              Connect
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] tracking-wide text-muted-foreground/70">
            &copy; {new Date().getFullYear()} TechWalk. All rights reserved.
          </p>
          <p className="text-[12px] tracking-wide text-muted-foreground/70 italic">
            Every professional journey begins with a first step.
          </p>
        </div>
      </div>
    </footer>
  )
}
