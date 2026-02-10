import type { Metadata } from "next";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Location01Icon,
  Mail01Icon,
  Call02Icon,
} from "@hugeicons/core-free-icons";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

const contacts = [
  {
    title: "Visit Our Office",
    description: "Kokomlemle, Accra North, Ghana",
    icon: Location01Icon,
  },
  {
    title: "Email Support",
    description: "info@africantechnologyforum.org",
    icon: Mail01Icon,
    href: "mailto:info@africantechnologyforum.org",
  },
  {
    title: "Call Us",
    description: "+233 302 234349",
    icon: Call02Icon,
    href: "tel:+233302234349",
  },
];

export const metadata: Metadata = {
  title: "Contact Support | ATF AI Challenge",
  description:
    "Contact the ATF team for support, inquiries, and partnership communication related to the ATF AI Challenge.",
};

export default function ContactPage() {
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
              Contact Support
            </h1>
            <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto">
              Reach out to the African Technology Forum team. We are here to
              support your application and program journey.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((item) => (
              <article key={item.title} className="border border-border bg-card p-6">
                <HugeiconsIcon
                  icon={item.icon}
                  className="size-8 text-primary mb-4"
                  strokeWidth={1.5}
                />
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.description}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.description}</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16 md:pb-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto border border-border bg-muted p-6 md:p-8 text-center">
            <p className="text-muted-foreground">
              We aim to respond within 1-2 business days. For quick answers on
              eligibility, timelines, and application details, visit the{" "}
              <Link href="/faq" className="text-primary hover:underline">
                FAQ page
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
