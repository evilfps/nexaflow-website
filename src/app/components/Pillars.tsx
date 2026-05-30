"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    num: "01",
    title: "Risk Intelligence",
    description:
      "Real-time supply chain mapping with AI-powered risk scoring across supplier, logistics, and demand dimensions. Automated early-warning alerts for disruption risks.",
  },
  {
    num: "02",
    title: "Supplier Diversification",
    description:
      "Curated, pre-vetted global supplier marketplace spanning 60+ countries with intelligent matching. Automated benchmarking and seamless onboarding workflows.",
  },
  {
    num: "03",
    title: "New Market Access",
    description:
      "Market intelligence across 40+ high-growth geographies with compliance guidance. Localised supplier discovery and in-platform expert advisory network.",
  },
  {
    num: "04",
    title: "Intelligent Inventory",
    description:
      "Demand-sensing algorithms integrating POS, market, and macroeconomic signals. Dynamic safety stock optimisation and multi-echelon visibility dashboards.",
  },
];

export default function Pillars() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pillars" ref={ref} className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono block mb-4">
            Capabilities
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-light tracking-tight leading-[1.1] max-w-lg">
            Four pillars. One system.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.2 + i * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid md:grid-cols-[80px_280px_1fr] gap-4 md:gap-8 py-8 border-t border-border items-start"
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.18,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[11px] font-mono text-muted pt-1"
              >
                {pillar.num}
              </motion.div>
              <h3 className="text-[17px] font-medium tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-[14px] text-muted leading-[1.7] max-w-md">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
