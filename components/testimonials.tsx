const testimonials = [
  {
    quote:
      "It's a great way to meet just a vast variety of people from different areas of tech. Tech Walk attracts people [...] from so many different backgrounds.",
    name: "Sarah Cundiff",
    company: "B2B Marketing and Tech Communications Executive",
    linkedin: "https://www.linkedin.com/in/sarahcundiff/",
  },
  {
    quote:
      "I love to spend time outdoors when the weather is nice. Techwalk is awesome. One, the opportunity to be outside [...] meet so many different people. I try to spend a lot of time off my phone and just connecting with people [...] and this was a really great way to do so while also getting some steps in.",
    name: "Randy Ginsburg",
    company: "Founder of Third Wall and Kanso",
    linkedin: "https://www.linkedin.com/in/randy-ginsburg/",
  },
  {
    quote:
      "I love Techwalk [...] The most important, beneficial thing is being surrounded by nature, away from your screens. You have more genuine, relaxed conversations and connections.",
    name: "Alexander Daamen",
    company: "Founder of Mind Trek",
    linkedin: "https://www.linkedin.com/in/alexdaamen/",
  },
]

export function Testimonials() {
  return (
    <section id="community" className="py-28 md:py-36 bg-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-background/30" />
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-background/50">
              Community Voices
            </p>
          </div>
          <h2 className="font-serif text-3xl font-light tracking-tight text-background sm:text-4xl lg:text-[44px] leading-[1.15] text-balance">
            Hear from the walkers.
          </h2>

        </div>

        <div className="grid grid-cols-1 gap-px md:grid-cols-3 bg-background/10 rounded-2xl overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-foreground p-8 lg:p-10 flex flex-col"
            >
              <blockquote className="font-serif text-lg leading-[1.7] text-background/80 flex-1 font-light italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-8 pt-6 border-t border-background/10">
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-background underline decoration-background/30 underline-offset-2 hover:decoration-background/70 transition-colors"
                >
                  {testimonial.name}
                </a>
                <p className="text-[13px] text-background/45 mt-0.5">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
