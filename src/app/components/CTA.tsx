"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" ref={ref} className="py-28 bg-surface-elevated border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-light tracking-tight leading-[1.1] mb-6">
            Join 200+ businesses
            <br />
            building resilient chains.
          </h2>

          <p className="text-[15px] text-muted leading-[1.7] max-w-md mb-2">
            Request a demo at nexaflow.io and see your full supplier network
            mapped in under 10 minutes. No credit card required.
          </p>
          <p className="text-[12px] text-muted/70 mb-10">
            Limited early access slots for Q3 2026.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-surface bg-foreground hover:bg-foreground/90 px-6 py-2.5 rounded-md transition-colors duration-200"
            >
              Request a demo
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="text-[13px] text-muted hover:text-foreground transition-colors duration-200"
            >
              Talk to sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
