"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    num: "72+",
    unit: "hours",
    title: "Average detection time for supply chain disruptions. Most firms learn about problems from their customers, not their systems.",
  },
  {
    num: "12%",
    unit: "revenue",
    title: "Lost annually by mid-market firms from supply shocks. Recovery costs compound long after the initial disruption.",
  },
  {
    num: "3",
    unit: "per year",
    title: "Average disruptions faced by firms with concentrated suppliers. Single-source dependencies remain the single greatest vulnerability.",
  },
  {
    num: "$2.4T",
    unit: "globally",
    title: "Lost each year to inventory inefficiency and stock-outs. Excess stock ties up capital. Shortages lose customers.",
  },
];

const disruptionData = [28, 42, 35, 58, 48, 72, 55, 68, 45, 82, 60, 91];
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" ref={ref} className="py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono block mb-4">
                The Problem
              </span>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-light tracking-tight leading-[1.1] max-w-lg">
                Supply chains are under structural stress.
              </h2>
            </motion.div>

            <div className="space-y-0">
              {problems.map((problem, i) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-t border-border items-start"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-[clamp(1.5rem,3vw,2rem)] font-light tracking-tight text-foreground">
                      {problem.num}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.15em] text-muted">
                      {problem.unit}
                    </span>
                  </div>
                  <p className="text-[15px] text-muted leading-[1.7] max-w-lg pt-1">
                    {problem.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Disruption trend chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block rounded-xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
          >
            <div className="text-[11px] uppercase tracking-[0.12em] text-muted mb-6">
              Disruption Events — 12 Month Trend
            </div>
            <div className="flex items-end gap-2 h-40 mb-4">
              {disruptionData.map((val, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  initial={{ height: 0 }}
                  animate={inView ? { height: `${val}%` } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    backgroundColor:
                      val > 70
                        ? "rgba(15, 118, 110, 0.18)"
                        : "#e7e5e4",
                    borderTop:
                      val > 70
                        ? "1px solid rgba(15, 118, 110, 0.35)"
                        : "1px solid transparent",
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-muted font-mono">
              {months.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
              <span className="w-2 h-2 rounded-sm bg-accent/20 border border-accent/30" />
              <span className="text-[11px] text-muted">
                Critical threshold exceeded
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
