import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | TechWalk",
  description:
    "TechWalk Privacy Policy - How we collect, use, and share information.",
}

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Effective Date: July 21, 2025
        </p>
        <p className="mt-6 text-base leading-[1.8] text-muted-foreground">
          TechWalk is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, and share information when you attend
          our events, visit our website, or engage with our community. By using
          our services, you agree to the practices described in this policy.
        </p>

        {/* 1. Information We Collect */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            1. Information We Collect
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            We collect information in the following ways:
          </p>

          <h3 className="mt-8 text-base font-semibold text-foreground">
            Information You Provide
          </h3>
          <p className="mt-2 text-base leading-[1.8] text-muted-foreground">
            When you RSVP to an event, sign up for our mailing list, or
            otherwise engage with TechWalk, we may collect:
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
            <li>Full name</li>
            <li>Email address</li>
            <li>Social media handles (optional)</li>
            <li>Employment information (optional)</li>
            <li>LinkedIn profile info</li>
            <li>Event preferences or feedback</li>
          </ul>

          <h3 className="mt-8 text-base font-semibold text-foreground">
            Information Automatically Collected
          </h3>
          <p className="mt-2 text-base leading-[1.8] text-muted-foreground">
            When you visit our website, we may collect certain data
            automatically:
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
            <li>IP address</li>
            <li>Browser type and device information</li>
            <li>Pages visited and actions taken on the site</li>
            <li>Referral sources and timestamps</li>
          </ul>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            We may use cookies and similar technologies to improve site
            functionality and personalize your experience.
          </p>
        </section>

        {/* 2. How We Use Your Information */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            2. How We Use Your Information
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            We use your information to:
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
            <li>Communicate event updates and news</li>
            <li>Respond to inquiries or support requests</li>
            <li>
              Send you marketing or promotional messages (with your consent)
            </li>
            <li>
              Maintain the safety and integrity of our platform and community
            </li>
          </ul>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground font-medium text-foreground">
            We do not sell your personal information to third parties.
          </p>
        </section>

        {/* 3. Sharing Your Information */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            3. Sharing Your Information
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            We may share your information:
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
            <li>
              With service providers who support our operations (e.g., email
              delivery, event registration tools, analytics platforms)
            </li>
            <li>If required by law or to comply with legal obligations</li>
            <li>
              To protect TechWalk{"'"}s rights, users, or the public
            </li>
            <li>
              With your permission, such as when you opt in to be introduced to
              another attendee
            </li>
          </ul>
        </section>

        {/* 4. Your Choices */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            4. Your Choices
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            You have the right to:
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-base leading-[1.8] text-muted-foreground list-disc pl-6">
            <li>
              Opt out of marketing emails at any time by clicking the
              unsubscribe link
            </li>
            <li>
              Request access to or deletion of your personal information
            </li>
            <li>Disable cookies via your browser settings</li>
          </ul>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            To make any of these requests, please contact us at{" "}
            <a
              href="mailto:info@techwalk.co"
              className="text-primary underline underline-offset-4 hover:text-foreground transition-colors"
            >
              info@techwalk.co
            </a>
          </p>
        </section>

        {/* 5. Data Retention */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            5. Data Retention
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            We retain personal information only as long as necessary for the
            purposes described in this policy, or as required by law.
          </p>
        </section>

        {/* 6. Third-Party Links */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            6. Third-Party Links
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            Our website or event materials may contain links to other sites or
            services. We{"'"}re not responsible for the privacy practices or
            content of those third parties.
          </p>
        </section>

        {/* 7. Security */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            7. Security
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            We take reasonable steps to protect your personal information, but
            no system can be 100% secure. We encourage you to be mindful when
            sharing sensitive information online.
          </p>
        </section>

        {/* 8. Children's Privacy */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            8. Children{"'"}s Privacy
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            TechWalk does not knowingly collect information from individuals
            under 13. If we learn that we{"'"}ve collected personal information
            from a child without parental consent, we will delete it promptly.
          </p>
        </section>

        {/* 9. Changes */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            9. Changes to This Policy
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            We may update this Privacy Policy from time to time. When we do,
            we{"'"}ll revise the effective date at the top of this page. We
            encourage you to review this policy regularly.
          </p>
        </section>

        {/* 10. Contact Us */}
        <section className="mt-16 pb-8">
          <h2 className="font-serif text-2xl font-light tracking-tight text-foreground">
            10. Contact Us
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
            If you have any questions about this Privacy Policy or your data,
            please email us at{" "}
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
