"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Mock data for the dashboard preview
const suppliers = [
  { name: "Shenzhen Component Co.", region: "CN", tier: 1, risk: 78, status: "critical" },
  { name: "Global Logistics Partners", region: "DE", tier: 1, risk: 34, status: "normal" },
  { name: "Taiwan Semiconductor Ltd", region: "TW", tier: 1, risk: 62, status: "watch" },
  { name: "Bengaluru Fabricators", region: "IN", tier: 2, risk: 28, status: "normal" },
  { name: "Mexican Assembly SA", region: "MX", tier: 2, risk: 45, status: "watch" },
];

const alerts = [
  { level: "critical", title: "Supplier delay detected", detail: "Shenzhen Component Co. — ETA +4 days", time: "2m ago" },
  { level: "watch", title: "Geopolitical risk update", detail: "Taiwan Strait — Monitor closely", time: "1h ago" },
  { level: "normal", title: "Inventory threshold met", detail: "Warehouse SG-04 — Restock triggered", time: "3h ago" },
];

const trendData = [28, 42, 35, 58, 48, 72, 55, 68, 45, 82, 60, 91];
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export default function ProductVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platform" ref={ref} className="py-24 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono block mb-4">
            The Platform
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-light tracking-tight leading-[1.1] max-w-lg">
            One dashboard. Every vulnerability visible.
          </h2>
        </motion.div>

        {/* Dense light-themed dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-xl border border-border bg-surface overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-elevated">
            <div className="w-2.5 h-2.5 rounded-full bg-[#e7e5e4]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#e7e5e4]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#e7e5e4]" />
            <div className="ml-4 text-[11px] text-muted font-mono">
              NexaFlow — Risk Intelligence Dashboard
            </div>
          </div>

          {/* Dashboard body with sidebar + main */}
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="hidden md:flex w-44 flex-col border-r border-border bg-surface-elevated/50 p-4 gap-1">
              {["Overview", "Network Map", "Suppliers", "Alerts", "Reports", "Settings"].map((item, i) => (
                <div
                  key={item}
                  className={`px-3 py-2 rounded-md text-[12px] ${
                    i === 0
                      ? "bg-accent-light text-accent font-medium"
                      : "text-muted hover:text-foreground"
                  } transition-colors`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-5">
              {/* Top metric row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                {[
                  { label: "Risk Score", value: "72", sub: "/100", warn: true },
                  { label: "Active Alerts", value: "3", sub: "critical", warn: true },
                  { label: "Suppliers", value: "47", sub: "mapped" },
                  { label: "Coverage", value: "94%", sub: "network" },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg border border-border bg-surface p-3">
                    <div className="text-[10px] uppercase tracking-[0.1em] text-muted mb-1">{m.label}</div>
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-[22px] font-light ${m.warn ? "text-accent" : "text-foreground"}`}>{m.value}</span>
                      <span className="text-[11px] text-muted">{m.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Supplier table */}
                <div className="lg:col-span-2 rounded-lg border border-border bg-surface">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-muted">Supplier Concentration</span>
                    <span className="text-[10px] text-accent font-mono bg-accent-light px-2 py-0.5 rounded">LIVE</span>
                  </div>
                  <div className="px-4">
                    <div className="grid grid-cols-[1fr_50px_60px_50px_80px] gap-3 py-2 text-[10px] uppercase tracking-[0.1em] text-muted border-b border-border">
                      <span>Supplier</span>
                      <span>Region</span>
                      <span>Tier</span>
                      <span>Risk</span>
                      <span>Status</span>
                    </div>
                    {suppliers.map((s) => (
                      <div key={s.name} className="grid grid-cols-[1fr_50px_60px_50px_80px] gap-3 py-2.5 border-b border-border/60 items-center">
                        <span className="text-[12px] text-foreground truncate">{s.name}</span>
                        <span className="text-[11px] text-muted font-mono">{s.region}</span>
                        <span className="text-[11px] text-muted">Tier {s.tier}</span>
                        <span className={`text-[11px] font-mono ${s.risk > 60 ? "text-accent" : "text-muted"}`}>{s.risk}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full w-fit ${
                          s.status === "critical"
                            ? "bg-red-50 text-red-600 border border-red-100"
                            : s.status === "watch"
                            ? "bg-amber-50 text-amber-600 border border-amber-100"
                            : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                        }`}>
                          {s.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right column: alerts + chart */}
                <div className="flex flex-col gap-4">
                  {/* Alerts */}
                  <div className="rounded-lg border border-border bg-surface p-4">
                    <div className="text-[11px] uppercase tracking-[0.12em] text-muted mb-3">Active Alerts</div>
                    <div className="space-y-3">
                      {alerts.map((a) => (
                        <div key={a.title} className="flex items-start gap-2.5">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                            a.level === "critical" ? "bg-red-500" : a.level === "watch" ? "bg-amber-500" : "bg-emerald-500"
                          }`} />
                          <div className="min-w-0">
                            <div className="text-[12px] text-foreground leading-tight">{a.title}</div>
                            <div className="text-[11px] text-muted mt-0.5">{a.detail}</div>
                            <div className="text-[10px] text-muted/60 mt-0.5">{a.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trend mini chart */}
                  <div className="rounded-lg border border-border bg-surface p-4">
                    <div className="text-[11px] uppercase tracking-[0.12em] text-muted mb-3">Disruption Trend</div>
                    <div className="flex items-end gap-[3px] h-20">
                      {trendData.map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t-[1px]"
                          initial={{ height: 0 }}
                          animate={inView ? { height: `${h}%` } : {}}
                          transition={{ duration: 0.6, delay: 0.4 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                          style={{
                            backgroundColor: h > 70 ? "rgba(15, 118, 110, 0.2)" : "#e7e5e4",
                            borderTop: h > 70 ? "1px solid rgba(15, 118, 110, 0.35)" : "1px solid transparent",
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-1.5 text-[9px] text-muted font-mono">
                      {months.map((m) => (
                        <span key={m}>{m}</span>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-border flex items-center gap-2">
                      <span className="w-2 h-2 rounded-sm bg-accent/20 border border-accent/30" />
                      <span className="text-[10px] text-muted">Critical threshold</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
