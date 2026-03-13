"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      window.open(
        `https://techwalk.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`,
        "_blank"
      )
      setSubmitted(true)
    }
  }

  return (
    <section className="py-28 md:py-36 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/40" />
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
              Newsletter
            </p>
            <div className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="font-serif text-3xl font-light tracking-tight text-foreground sm:text-4xl lg:text-[44px] leading-[1.15] text-balance">
            Stay in the loop.
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-muted-foreground">
            Join close to 8,000 subscribers who get the latest on upcoming walks,
            new city launches, and community updates. Subscribe to the {"'"}hi from techwalk{"'"} newsletter.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-0">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-full sm:rounded-r-none bg-background px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:border-primary/40 transition-colors"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full sm:rounded-l-none bg-foreground px-8 py-4 text-sm font-semibold tracking-wide text-background transition-colors hover:bg-foreground/90"
              >
                Subscribe
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          ) : (
            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <p className="text-base font-medium text-foreground">
                Check your inbox to confirm your subscription.
              </p>
            </div>
          )}

          <p className="mt-5 text-[12px] text-muted-foreground/70 tracking-wide">
            Weekly updates. No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
