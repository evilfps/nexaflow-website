"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NetworkMap from "./NetworkMap";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-background overflow-hidden border-b border-border">
      {/* Ambient network — right side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/2 right-[-100px] -translate-y-1/2 hidden xl:block pointer-events-none"
      >
        <NetworkMap />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-3 py-1.5 rounded-full bg-surface border border-border text-[11px] uppercase tracking-[0.15em] text-muted font-mono shadow-sm">
            Supply Chain Intelligence
          </span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.8rem,6vw,4.8rem)] font-light leading-[1.08] tracking-tight mb-8"
          >
            See risk before
            <br />
            it sees you.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] text-muted leading-[1.7] max-w-lg mb-10"
          >
            NexaFlow maps your entire supplier network in real time, surfaces
            hidden vulnerabilities, and gives you the intelligence to act before
            disruption strikes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6"
          >
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-surface bg-foreground hover:bg-foreground/90 px-6 py-2.5 rounded-md transition-colors duration-200"
            >
              Request a demo
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#platform"
              className="text-[13px] text-muted hover:text-foreground transition-colors duration-200"
            >
              Explore the platform
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

      {/* Stats bar — separated so it scrolls into view and triggers animation */}
      <Stats />
    </section>
  );
}
