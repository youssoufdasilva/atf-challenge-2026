import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apply | ATF AI Challenge",
  description:
    "Apply for the ATF AI Challenge — Africa's largest hands-on AI program. Registration closes March 31.",
};

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Spacer for fixed header */}
        <div className="h-16 md:h-20" />

        {/* Page Header */}
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
              Apply for the AI Challenge
            </h1>
            <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto">
              Complete the form below to register for Africa&apos;s largest
              hands-on AI program. Registration closes{" "}
              <span className="text-primary font-semibold">March 31, 2026</span>
              .
            </p>
          </div>
        </section>

        {/* Form Container */}
        <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto">
            {/* Embed Container — replace the iframe src with the 3rd party form URL,
                or replace the entire iframe with a script-injected form <div> */}
            <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
              <div
                className="w-full flex flex-col items-center justify-center gap-4 text-muted-foreground border-2 border-dashed border-border rounded-lg bg-muted/30"
                style={{ minHeight: "800px" }}
              >
                <svg className="w-12 h-12 text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <p className="text-sm font-medium">Third-party form embed will appear here</p>
                <p className="text-xs text-muted-foreground/60">Replace this placeholder with the form iframe URL</p>
              </div>
            </div>

            {/* Helper text */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              Having trouble with the form?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact support
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
