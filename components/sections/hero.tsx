"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "@/components/ui/motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-end py-16 px-4 md:py-24 md:px-8 lg:px-16"
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
        {/* <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/0 to-background" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto== text-center pt-8 bg-primary">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
        >
          Don&apos;t Just Watch the AI Revolution.{" "}
          <span className="text-primary== text-white">Lead It.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8"
        >
          Join the ATF AI Challenge: The continent&apos;s largest hands-on
          Artificial Intelligence program. Upskill, form a team, and build
          solutions that solve Africa&apos;s toughest problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 bg-white text-primary border-2 hover:border-white hover:text-white"
          >
            <a href="/apply">Apply for the AI School</a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-white hidden"
        >
          Open to students and recent graduates in Ghana, Nigeria, Kenya, and
          South Africa.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
