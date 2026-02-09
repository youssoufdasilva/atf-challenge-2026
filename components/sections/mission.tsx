"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Plant01Icon,
  Hospital01Icon,
  Money01Icon,
  Book01Icon,
} from "@hugeicons/core-free-icons";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const sectors = [
  { name: "Agriculture", icon: Plant01Icon },
  { name: "Health", icon: Hospital01Icon },
  { name: "Finance", icon: Money01Icon },
  { name: "Education", icon: Book01Icon },
];

export function Mission() {
  return (
    <section
      id="mission"
      className="py-16 px-4 md:py-24 md:px-8 lg:px-16 bg-muted"
    >
      <div className="max-w-4xl mx-auto">
        {/* Sector Icons */}
        <StaggerContainer className="flex justify-center gap-6 md:gap-10 mb-10">
          {sectors.map((sector) => (
            <StaggerItem
              key={sector.name}
              className="flex flex-col items-center gap-2"
            >
              <HugeiconsIcon
                icon={sector.icon}
                className="size-8 md:size-10 text-primary"
                strokeWidth={1.5}
              />
              <span className="text-xs md:text-sm text-muted-foreground">
                {sector.name}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Headline */}
        <FadeIn delay={0.2}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            We Are Building the Next Generation of{" "}
            <span className="text-primary">African Innovators</span>.
          </h2>
        </FadeIn>

        {/* Body Copy */}
        <FadeIn delay={0.3}>
          <div className="text-lg md:text-xl text-muted-foreground text-center space-y-6 max-w-3xl mx-auto">
            <p>
              Artificial Intelligence is changing the world, but Africa needs
              creators, not just consumers. The African Technology Forum (ATF),
              supported by our strategic partners, is on a mission to upskill{" "}
              <strong className="text-foreground">15,000 young leaders</strong>{" "}
              like you.
            </p>
            <p>
              Whether you are a coder, a designer, or a problem-solver, this is
              your launchpad. We provide the curriculum, the mentors, and the
              technology—you provide the ambition.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
