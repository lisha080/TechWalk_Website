import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Code of Conduct | TechWalk",
  description:
    "TechWalk Code of Conduct - Our commitment to providing a respectful, inclusive, and harassment-free environment.",
}

export default function CodeOfConduct() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-serif text-4xl font-light tracking-tight text-foreground sm:text-5xl leading-[1.15]">
          Code of Conduct
        </h1>

        {/* Our Commitment */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            Our Commitment
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            TechWalk is a community-driven initiative designed to foster
            meaningful connections, collaboration, and innovation in the tech
            industry. We are committed to providing a respectful, inclusive, and
            harassment-free environment for all participants, regardless of race,
            gender, sexual orientation, disability, physical appearance, age,
            religion, or technical background.
          </p>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            By attending TechWalk events, you agree to uphold the values and
            standards outlined in this Code of Conduct.
          </p>
        </section>

        {/* Expected Behavior */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            Expected Behavior
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            All participants &mdash; including attendees, speakers, organizers,
            volunteers, and sponsors &mdash; are expected to:
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
            <li>
              Be kind, respectful, and inclusive in your interactions.
            </li>
            <li>
              Engage with others in a professional and constructive manner.
            </li>
            <li>Respect personal boundaries and space.</li>
            <li>
              Obtain consent before recording, photographing, or sharing content
              involving others.
            </li>
            <li>
              Never record or photograph minors without explicit parental or
              guardian consent.
            </li>
            <li>
              Follow all logistical guidelines provided by TechWalk, including
              meeting points, walk routes, and scheduled times.
            </li>
          </ul>
        </section>

        {/* Unacceptable Behavior */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            Unacceptable Behavior
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            TechWalk has a zero-tolerance policy for harassment, discrimination,
            or inappropriate conduct in any form. This includes, but is not
            limited to:
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
            <li>
              Harassment, intimidation, or discrimination based on any personal
              characteristic.
            </li>
            <li>Offensive or derogatory language, gestures, or imagery.</li>
            <li>Unwanted physical contact or sexual attention.</li>
            <li>Deliberate intimidation, stalking, or following.</li>
            <li>
              Disruption of events or creating an unsafe environment for others.
            </li>
            <li>
              Advocating for, encouraging, or excusing any of the above
              behaviors.
            </li>
          </ul>
        </section>

        {/* Reporting */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            Reporting a Violation
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            If you experience or witness behavior that violates this Code of
            Conduct, we encourage you to report it as soon as possible. You can
            report an incident:
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
            <li>
              By emailing us at{" "}
              <a
                href="mailto:info@techwalk.co"
                className="text-primary underline underline-offset-4 hover:text-foreground transition-colors"
              >
                info@techwalk.co
              </a>
            </li>
            <li>By speaking directly with a TechWalk organizer at the event</li>
          </ul>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            Reports will be handled confidentially and with urgency. Organizers
            will thoroughly investigate each incident and determine the
            appropriate course of action.
          </p>
        </section>

        {/* Consequences */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            Consequences of Violations
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            TechWalk reserves the right to take any action we deem necessary to
            ensure the safety and integrity of our events, including but not
            limited to:
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
            <li>Issuing a verbal or written warning.</li>
            <li>
              Removing individuals from an event without refund or compensation.
            </li>
            <li>Banning individuals from future TechWalk events.</li>
            <li>
              Reporting incidents to local authorities when appropriate.
            </li>
          </ul>
        </section>

        {/* Agreement */}
        <section className="mt-16 pb-8">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            Agreement
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            By participating in any TechWalk event, you agree to abide by this
            Code of Conduct. Failure to comply may result in removal and/or
            legal action.
          </p>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            Thank you for helping us create a safe, inspiring, and welcoming
            space for all. For questions or concerns, please contact{" "}
            <a
              href="mailto:info@techwalk.co"
              className="text-primary underline underline-offset-4 hover:text-foreground transition-colors"
            >
              info@techwalk.co
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  )
}
