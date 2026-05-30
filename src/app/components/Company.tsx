"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const audiences = [
  {
    title: "Mid-Market Manufacturers",
    description: "Production lines that can't stop. Real-time visibility into component availability across your supplier base.",
  },
  {
    title: "E-Commerce Retailers",
    description: "Seasonal demand spikes, returns logistics, and last-mile partners — all mapped in one view.",
  },
  {
    title: "Export MSMEs",
    description: "Access pre-vetted international suppliers and compliance guidance for cross-border expansion.",
  },
  {
    title: "Large Enterprises",
    description: "Multi-echelon inventory optimisation and enterprise-grade risk scoring for global operations.",
  },
];

export default function Company() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="company" ref={ref} className="py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono block mb-4">
            Who It Is For
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-light tracking-tight leading-[1.1] max-w-lg">
            Built for businesses that move the world.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-6 rounded-xl border border-border bg-background"
            >
              <h3 className="text-[15px] font-medium tracking-tight mb-2">
                {audience.title}
              </h3>
              <p className="text-[13px] text-muted leading-[1.7]">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
