"use client"

const items = [
  "NYC",
  "Brooklyn",
  "Silicon Valley",
  "San Francisco",
  "Los Angeles",
  "Bangalore",
  "Chicago",
  "Jersey City",
  "Queens",
  "Boston",
  "Newark",
  "Vancouver",
]

export function Marquee() {
  return (
    <div className="overflow-hidden bg-foreground py-3.5">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-8 text-[11px] font-medium uppercase tracking-[0.25em] text-background/60"
          >
            {item}
            <span className="ml-8 text-background/20" aria-hidden="true">
              &mdash;
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
