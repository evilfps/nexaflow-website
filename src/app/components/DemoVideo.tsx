"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const takeaways = [
  "Map every supplier tier in under 10 minutes — not 10 weeks.",
  "Risk scores update in real time as geopolitical and market conditions shift.",
  "Replace reactive firefighting with proactive inventory and supplier planning.",
];

export default function DemoVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [playing, setPlaying] = useState(false);

  return (
    <section ref={ref} className="py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono block mb-4">
            Product Demo
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-light tracking-tight leading-[1.1] max-w-lg">
            See it in action.
          </h2>
        </motion.div>

        {/* Video player placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-xl border border-border bg-surface-elevated overflow-hidden mb-12 aspect-video max-h-[480px] flex items-center justify-center"
        >
          {/* Poster frame — dashboard screenshot placeholder */}
          <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
            <div className="text-center">
              <button
                onClick={() => setPlaying(!playing)}
                className="w-16 h-16 rounded-full bg-foreground text-surface flex items-center justify-center mb-4 mx-auto hover:bg-foreground/90 transition-colors"
                aria-label={playing ? "Pause demo video" : "Play demo video"}
              >
                {playing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
              </button>
              <p className="text-[13px] text-muted">
                {playing ? "Demo video playing..." : "Click to watch the 45-second walkthrough"}
              </p>
            </div>
          </div>

          {/* Simulated video overlay */}
          {playing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-surface-elevated flex flex-col items-center justify-center p-8"
            >
              <div className="w-full max-w-lg space-y-4">
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                  />
                </div>
                <p className="text-[12px] text-muted text-center">
                  Walkthrough: Supplier mapping → Risk scoring → Alert configuration → Inventory optimisation
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Key Takeaways — Segmenting Principle (M6) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-border pt-10"
        >
          <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono mb-6">
            Key Takeaways
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {takeaways.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-[10px] font-medium text-accent flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-[13px] text-muted leading-[1.6]">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
