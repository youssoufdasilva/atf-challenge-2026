"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  GraduateMaleIcon,
  Globe02Icon,
  Rocket01Icon,
  BulbIcon,
} from "@hugeicons/core-free-icons";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const benefits = [
  {
    icon: GraduateMaleIcon,
    title: "World-Class Curriculum",
    description: "Learn from content designed by leading AI experts.",
  },
  {
    icon: Globe02Icon,
    title: "Pan-African Network",
    description:
      "Collaborate with peers across 4 countries on our dedicated Discord campus.",
  },
  {
    icon: Rocket01Icon,
    title: "Career Acceleration",
    description:
      "Top participants get fast-tracked into internship pipelines with our corporate partners.",
  },
  {
    icon: BulbIcon,
    title: "Zero Cost",
    description:
      "The program is fully funded. It costs you nothing but your time and dedication.",
  },
];

export function WhyJoin() {
  return (
    <section
      id="why-join"
      className="py-16 px-4 md:py-24 md:px-8 lg:px-16 bg-muted"
    >
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
            Why You Should Join
          </h2>
        </FadeIn>

        {/* Benefits Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <StaggerItem
              key={benefit.title}
              className="bg-background border border-border p-6 md:p-8 flex items-start gap-4"
            >
              <HugeiconsIcon
                icon={benefit.icon}
                className="size-8 md:size-10 text-primary shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
