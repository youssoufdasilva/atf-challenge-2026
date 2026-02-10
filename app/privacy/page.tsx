import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | ATF AI Challenge",
  description:
    "Read the ATF AI Challenge privacy policy, including how personal information is collected, used, stored, and protected.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="h-16 md:h-20" />

        <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto">
              Effective date: February 10, 2026
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
          <article className="max-w-4xl mx-auto prose prose-stone prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <h2>1. Information We Collect</h2>
            <p>
              We may collect personal information when you apply to or engage
              with the ATF AI Challenge, including your name, email address,
              phone number, location, educational background, and other
              information you provide through forms and communication channels.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Review and process applications.</li>
              <li>Communicate program updates, deadlines, and opportunities.</li>
              <li>Coordinate mentorship, training, and challenge participation.</li>
              <li>Improve the quality and impact of the program.</li>
            </ul>

            <h2>3. Data Sharing</h2>
            <p>
              We may share limited information with trusted implementation
              partners, mentors, or service providers directly involved in
              operating the program. We do not sell your personal data.
            </p>

            <h2>4. Data Retention</h2>
            <p>
              We retain personal information only for as long as needed to run
              and evaluate the program, meet legal obligations, and support
              participant services.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal data, subject to applicable legal and operational
              requirements.
            </p>

            <h2>6. Cookies and Analytics</h2>
            <p>
              Our website may use basic cookies or analytics tools to understand
              usage patterns, improve performance, and deliver a better user
              experience.
            </p>

            <h2>7. Security</h2>
            <p>
              We use reasonable administrative and technical safeguards to
              protect personal information. No online platform can guarantee
              absolute security, but we continually improve our controls.
            </p>

            <h2>8. Contact</h2>
            <p>
              For privacy-related inquiries, contact us at:
              <br />
              Kokomlemle, Accra North, Ghana
              <br />
              <a href="mailto:info@africantechnologyforum.org">
                info@africantechnologyforum.org
              </a>
              <br />
              <a href="tel:+233302234349">+233 302 234349</a>
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
