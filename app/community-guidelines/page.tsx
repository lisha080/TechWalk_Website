import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community Guidelines | TechWalk",
  description:
    "TechWalk Community Guidelines - Learn about our values and expectations for creating a welcoming and safe community.",
}

export default function CommunityGuidelines() {
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
          Community Guidelines
        </h1>
        <p className="mt-6 text-base leading-[1.8] text-muted-foreground">
          TechWalk is more than just a walk &mdash; it{"'"}s a movement rooted in
          connection, curiosity, and community. Whether you{"'"}re a seasoned
          leader in tech or just getting started, TechWalk is a space for
          everyone. These guidelines exist to help us all contribute to a
          welcoming and safe experience.
        </p>
        <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
          By participating in any TechWalk event or engaging in our community
          spaces, you agree to uphold the following standards.
        </p>

        {/* Our Values */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            Our Values
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            We believe in building a tech community that is:
          </p>

          <div className="mt-8 flex flex-col gap-8">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Inclusive
              </h3>
              <p className="mt-2 text-base leading-[1.8] text-muted-foreground">
                Everyone is welcome regardless of background, identity, ability,
                or experience level. TechWalk exists to bring people together,
                not divide them.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Respectful
              </h3>
              <p className="mt-2 text-base leading-[1.8] text-muted-foreground">
                We treat one another with kindness, dignity, and curiosity.
                Whether you{"'"}re walking, talking, or sharing a story, we value
                respectful engagement.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Supportive
              </h3>
              <p className="mt-2 text-base leading-[1.8] text-muted-foreground">
                TechWalk is about walking with people, not in front of them. We
                lift each other up, share knowledge freely, and aim to make
                meaningful connections.
              </p>
            </div>
          </div>
        </section>

        {/* What's Expected */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            What{"'"}s Expected of You
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            Whether you{"'"}re an attendee, organizer, volunteer, or sponsor, we
            ask that you:
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
            <li>
              Follow our{" "}
              <Link
                href="/code-of-conduct"
                className="text-primary underline underline-offset-4 hover:text-foreground transition-colors"
              >
                Code of Conduct
              </Link>
            </li>
            <li>Engage respectfully with everyone in attendance</li>
            <li>
              Ask for consent before recording, photographing, or sharing
              content involving others
            </li>
            <li>
              Never record or photograph minors without explicit guardian
              permission
            </li>
            <li>
              Respect the event schedule, locations, and any safety guidelines
              shared by organizers
            </li>
            <li>
              Be mindful of others{"'"} space, needs, and comfort
            </li>
            <li>Speak up or report any inappropriate behavior or content</li>
          </ul>
        </section>

        {/* What's Not Okay */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            What{"'"}s Not Okay
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            TechWalk has zero tolerance for harmful, disruptive, or
            inappropriate behavior. This includes:
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
            <li>Harassment, discrimination, or hate speech of any kind</li>
            <li>Unwanted physical contact or sexual attention</li>
            <li>Aggressive, intimidating, or unsafe behavior</li>
            <li>Recording or photographing without consent</li>
            <li>Violating community norms or local laws</li>
          </ul>
        </section>

        {/* Violating Content */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            Violating Content
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            To maintain the integrity of TechWalk, we do not allow any content
            &mdash; whether shared in person, over email, in group chats, or
            online &mdash; that undermines the safety or values of our
            community. Prohibited content includes:
          </p>

          <div className="mt-8 flex flex-col gap-8">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Hateful or Discriminatory Content
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
                <li>
                  Racist, sexist, homophobic, transphobic, or otherwise
                  offensive remarks
                </li>
                <li>
                  Cultural appropriation or insensitive jokes at someone else{"'"}s
                  expense
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Harassing or Threatening Behavior
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
                <li>Bullying, personal attacks, or threats of any kind</li>
                <li>
                  Sharing personal information without consent (doxxing)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Sexually Inappropriate or Explicit Content
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
                <li>Unwelcome advances, comments, or jokes</li>
                <li>
                  Sharing sexual content, especially involving or directed
                  toward minors
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Violent or Dangerous Content
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
                <li>Promotion of violence, self-harm, or illegal activity</li>
                <li>
                  Any weapon-related content or references unless expressly
                  permitted for safety/education
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                False or Misleading Information
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
                <li>Misinformation that could cause harm or confusion</li>
                <li>Impersonation of TechWalk organizers or participants</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Spam or Promotional Abuse
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
                <li>
                  Unapproved advertisements, pitches, or affiliate content
                </li>
                <li>Scams, phishing attempts, or misleading promotions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reporting */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            If You See Something, Say Something
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            Your voice helps keep TechWalk safe. You can report inappropriate
            behavior or violating content by:
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
            <li>Speaking directly with a TechWalk organizer at the event</li>
            <li>
              Emailing us at{" "}
              <a
                href="mailto:info@techwalk.co"
                className="text-primary underline underline-offset-4 hover:text-foreground transition-colors"
              >
                info@techwalk.co
              </a>
            </li>
          </ul>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            We take all reports seriously and handle them with confidentiality
            and urgency.
          </p>
        </section>

        {/* Accountability */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            Accountability &amp; Consequences
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            TechWalk reserves the right to take immediate and appropriate action
            in response to any violations of these guidelines, including but not
            limited to:
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
            <li>Removing content or individuals from events or platforms</li>
            <li>Issuing warnings or temporary suspensions</li>
            <li>
              Permanently banning individuals from TechWalk events or community
              spaces
            </li>
            <li>
              Reporting incidents to law enforcement or legal authorities when
              necessary
            </li>
          </ul>
        </section>

        {/* Closing */}
        <section className="mt-16 pb-8">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            Let{"'"}s Walk the Talk
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            Thank you for being part of this community. TechWalk works because
            of people like you &mdash; thoughtful, curious, and committed to
            making tech more human.
          </p>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            If you have any questions, feedback, or ideas on how we can improve,
            reach out anytime at{" "}
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
