"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  {
    value: 12000,
    suffix: "+",
    label: "Registrants",
    description: "Across NYC, Brooklyn, Silicon Valley, LA, SF, Bangalore & more",
  },
  {
    value: 8000,
    suffix: "",
    label: "Newsletter subscribers",
    description: "And growing every week",
  },
  {
    value: 12,
    suffix: "",
    label: "City hubs",
    description: "NYC, Brooklyn, Silicon Valley, SF, LA, Bangalore, Chicago, Jersey City & more",
  },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2200
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="font-serif text-4xl font-light md:text-5xl lg:text-[56px] tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export function Impact() {
  return (
    <section id="impact" className="py-28 md:py-36 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-20">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary-foreground/30" />
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-primary-foreground/60">
                Our Impact
              </p>
            </div>
            <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl lg:text-[44px] leading-[1.15] text-balance">
              Real connections.{" "}
              <span className="text-accent">Real results.</span>
            </h2>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`rounded-2xl p-8 lg:p-10 ${
                idx === 0 ? "bg-primary-foreground/10" : "bg-primary-foreground/5"
              }`}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-sm font-semibold tracking-tight text-primary-foreground">
                {stat.label}
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-primary-foreground/50">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
