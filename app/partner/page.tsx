import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

const partnerBenefits = [
  {
    title: "Access Pan-African Talent",
    description:
      "Connect early with high-potential builders and future founders from Ghana, Nigeria, Kenya, and South Africa.",
  },
  {
    title: "Drive Measurable Impact",
    description:
      "Support practical AI solutions tackling local challenges in health, agriculture, finance, and education.",
  },
  {
    title: "Increase Brand Visibility",
    description:
      "Position your organization at the center of one of the continent's most ambitious AI capacity programs.",
  },
  {
    title: "Co-Create Innovation",
    description:
      "Shape challenge themes, mentor teams, and influence ideas that can evolve into scalable ventures.",
  },
];

const partnerWays = [
  {
    title: "Mentorship Support",
    description:
      "Deploy technical and product mentors to guide teams through discovery, MVP execution, and launch readiness.",
  },
  {
    title: "Program Sponsorship",
    description:
      "Sponsor curriculum tracks, cohort activities, or operational delivery to expand access and deepen quality.",
  },
  {
    title: "Infrastructure & Credits",
    description:
      "Provide cloud, compute, or tooling credits that allow participants to prototype and test faster.",
  },
  {
    title: "Prizes & Opportunities",
    description:
      "Fund prizes, internships, or pilot opportunities for top teams and help convert talent into outcomes.",
  },
];

export const metadata: Metadata = {
  title: "Partner with Us | ATF AI Challenge",
  description:
    "Explore partnership opportunities with the ATF AI Challenge to support young African innovators and build future talent pipelines.",
};

export default function PartnerPage() {
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
              Partner with Us
            </h1>
            <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto">
              Help shape the future of AI in Africa by supporting 15,000 young
              innovators across four countries.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Partner</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerBenefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="border border-border bg-card p-6 md:p-8"
                >
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-muted">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Ways to Get Involved
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerWays.map((item) => (
                <article
                  key={item.title}
                  className="border border-border bg-background p-6 md:p-8"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto border border-border bg-card p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Start a Partnership Conversation
            </h2>
            <p className="text-muted-foreground mb-8">
              Reach our team to discuss sponsorship, mentorship, or collaboration
              opportunities.
            </p>
            <div className="space-y-2 text-sm md:text-base">
              <p>
                <span className="font-semibold text-foreground">Address:</span>{" "}
                Kokomlemle, Accra North, Ghana
              </p>
              <p>
                <span className="font-semibold text-foreground">Email:</span>{" "}
                <a
                  className="text-primary hover:underline"
                  href="mailto:info@africantechnologyforum.org"
                >
                  info@africantechnologyforum.org
                </a>
              </p>
              <p>
                <span className="font-semibold text-foreground">Phone:</span>{" "}
                <a className="text-primary hover:underline" href="tel:+233302234349">
                  +233 302 234349
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
