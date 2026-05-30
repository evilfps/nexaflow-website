"use client";

import { motion } from "framer-motion";

const NODES = [
  { x: 200, y: 150 },
  { x: 100, y: 80 },
  { x: 300, y: 90 },
  { x: 80, y: 200 },
  { x: 320, y: 210 },
  { x: 150, y: 280 },
  { x: 280, y: 270 },
  { x: 60, y: 130 },
  { x: 340, y: 140 },
  { x: 180, y: 60 },
  { x: 250, y: 310 },
  { x: 120, y: 240 },
];

const CONNECTIONS: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 7], [1, 9], [2, 8], [2, 9], [3, 7], [3, 11],
  [4, 8], [4, 10], [5, 11], [5, 10], [6, 10],
];

export default function NetworkMap() {
  return (
    <div className="w-[520px] h-[420px] opacity-[0.5]">
      <svg viewBox="0 0 400 360" className="w-full h-full" fill="none">
        {CONNECTIONS.map(([from, to], i) => {
          const a = NODES[from];
          const b = NODES[to];
          return (
            <motion.line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#a8a29e"
              strokeWidth={0.5}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ duration: 2, delay: i * 0.05 }}
            />
          );
        })}

        {NODES.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={i === 0 ? 3 : 1.5}
            fill={i === 0 ? "#0f766e" : "#d6d3d1"}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === 0 ? 0.6 : 0.4 }}
            transition={{ duration: 1, delay: i * 0.08 }}
          />
        ))}
      </svg>
    </div>
  );
}
