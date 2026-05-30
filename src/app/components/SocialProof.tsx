"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "Acme Components",
  "Global Logistics Partners",
  "Pacific Trade Group",
  "EuroFabric SA",
  "Bengaluru Assembly",
  "Nordic Supply Co.",
];

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono block mb-4">
            Trusted By
          </span>
        </motion.div>

        {/* Logo strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap items-center gap-x-10 gap-y-6 mb-16"
        >
          {clients.map((client) => (
            <span
              key={client}
              className="text-[13px] font-medium text-muted/50 tracking-tight"
            >
              {client}
            </span>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <blockquote className="text-[17px] font-light leading-[1.6] text-foreground mb-6">
            "NexaFlow flagged a supplier concentration risk we had completely missed. We diversified three months before a geopolitical event shut down our primary source. That early warning saved us an estimated $2.3M in lost production."
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-[11px] font-medium text-accent">
              SK
            </div>
            <div>
              <div className="text-[13px] font-medium text-foreground">Sanjay Kapoor</div>
              <div className="text-[11px] text-muted">VP Supply Chain, Acme Components</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
