import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-16 px-4 md:py-24 md:px-8 lg:px-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-photo-placeholder/ultrarealistic-8k-hd-cinematic-v2.jpg"
          alt="Young African techies collaborating"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Don&apos;t Just Watch the AI Revolution.{" "}
          <span className="text-primary">Lead It.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Join the ATF AI Challenge: The continent&apos;s largest hands-on
          Artificial Intelligence program. Upskill, form a team, and build
          solutions that solve Africa&apos;s toughest problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild size="lg" className="text-base px-8 py-6">
            <a href="#apply">Apply for the AI School</a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Open to students and recent graduates in Ghana, Nigeria, Kenya, and
          South Africa.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
